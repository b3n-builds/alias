// Runs after `npx cap add android`: version numbers, signing, and the vibration permission.
import fs from 'node:fs';

const gradlePath = 'android/app/build.gradle';
let g = fs.readFileSync(gradlePath, 'utf8');
const code = process.env.APP_VERSION_CODE || '1';
const name = process.env.APP_VERSION || '0.0.1';
g = g.replace(/versionCode \d+/, `versionCode ${code}`).replace(/versionName "[^"]*"/, `versionName "${name}"`);

// ALIAS_SIGN=release uses the real key from the repo secret; otherwise the runner's debug key
// (fine to install, but every such build has a different key, so updates need a reinstall).
const release = process.env.ALIAS_SIGN === 'release';
if (release) {
  g = g.replace(/android\s*\{/, m => `${m}
    signingConfigs {
        alias {
            storeFile file('alias.p12')
            storePassword System.getenv('ALIAS_KEY_PASS')
            keyAlias 'alias'
            keyPassword System.getenv('ALIAS_KEY_PASS')
            storeType 'pkcs12'
        }
    }`);
}
g = g.replace(/buildTypes\s*\{\s*release\s*\{/, m => `${m}
            signingConfig signingConfigs.${release ? 'alias' : 'debug'}`);
fs.writeFileSync(gradlePath, g);

const manifestPath = 'android/app/src/main/AndroidManifest.xml';
let m = fs.readFileSync(manifestPath, 'utf8');
if (!m.includes('android.permission.VIBRATE')) {
  m = m.replace('</manifest>', '    <uses-permission android:name="android.permission.VIBRATE" />\n</manifest>');
}
fs.writeFileSync(manifestPath, m);
console.log(`patched android: ${name} (${code}), signing: ${release ? 'release key' : 'temporary debug key'}`);
