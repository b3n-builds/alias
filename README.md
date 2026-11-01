# ALIAS

A pass-and-play hidden-role deduction game for 4–12 players on one phone. Everyone has a secret name.
Somebody is writing them down.

- **Android:** download `ALIAS.apk` from the [latest release](https://github.com/ben-dih/alias/releases/latest).
  The app tells you when a new version is out.
- **Web (iPhone, laptop):** https://ben-dih.github.io/alias/

51 cases in English and Arabic (21 real-world, 30 fantasy), three modes, and rules tuned with a bot simulator (see [BALANCE.md](BALANCE.md)).

## Making a release

1. Update `RELEASE_NOTES.md`.
2. Tag and push: `git tag v1.2.3 && git push origin v1.2.3`.
3. GitHub Actions tests the rules, builds and signs the APK, publishes the release, and updates the web version.

## One-time setup: the signing key

Android only installs an update over an existing app if both are signed with the same key. The key lives in
`keystore/` on the maintainer's PC (never committed). Store it as two repository secrets so the build can use it:

```bash
base64 -w0 keystore/alias.p12 | gh secret set ALIAS_KEYSTORE --repo ben-dih/alias
gh secret set ALIAS_KEY_PASS --repo ben-dih/alias
```

The second command asks for the password from `keystore/KEEP-THIS-SAFE.txt`. Until both secrets exist, builds are
signed with a throwaway key, and each new APK has to be installed fresh (uninstall the old one first).
Back up the `keystore/` folder: if it is lost, installed apps can never be updated again.

## Development

- `npm test`: rules and content checks.
- `npm run sim`: balance simulation.
- The game is plain HTML/CSS/JS in `www/`; open it through any static server.
