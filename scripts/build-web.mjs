// Copies www/ to dist/ for the app: stamps the version, adds a document skeleton,
// and bundles the Google Fonts locally so the APK looks right offline.
import fs from 'node:fs';
import path from 'node:path';

const src = 'www', out = 'dist';
const version = process.env.APP_VERSION || 'dev';
fs.rmSync(out, { recursive: true, force: true });
fs.cpSync(src, out, { recursive: true });

for (const f of fs.readdirSync(out).filter(f => /\.(html|js)$/.test(f))) {
  const p = path.join(out, f);
  fs.writeFileSync(p, fs.readFileSync(p, 'utf8').replaceAll('__APP_VERSION__', version));
}

const htmlPath = path.join(out, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');
// the artifact host wraps the page in a skeleton; the app needs its own (no doctype = quirks mode)
if (!/^\s*<!doctype/i.test(html)) html = '<!doctype html>\n<html lang="en">\n<meta charset="utf-8">\n' + html;

const link = html.match(/<link rel="stylesheet" href="(https:\/\/fonts\.googleapis\.com\/css2[^"]+)">/);
if (link) {
  const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';
  const res = await fetch(link[1].replaceAll('&amp;', '&'), { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error('font css ' + res.status);
  let css = await res.text();
  fs.mkdirSync(path.join(out, 'fonts'), { recursive: true });
  const urls = [...new Set([...css.matchAll(/url\((https:[^)]+)\)/g)].map(m => m[1]))];
  let i = 0;
  for (const u of urls) {
    const name = `f${i++}.woff2`;
    const r = await fetch(u);
    if (!r.ok) throw new Error('font ' + r.status + ' ' + u);
    fs.writeFileSync(path.join(out, 'fonts', name), Buffer.from(await r.arrayBuffer()));
    css = css.replaceAll(u, `fonts/${name}`);
  }
  fs.writeFileSync(path.join(out, 'fonts.css'), css);
  html = html.replace(link[0], '<link rel="stylesheet" href="fonts.css">').replace(/<link rel="preconnect"[^>]*>\n?/g, '');
  console.log(`bundled ${urls.length} font files`);
}
fs.writeFileSync(htmlPath, html);
console.log(`built dist/ for version ${version}`);
