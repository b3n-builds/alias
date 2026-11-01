// Draws the ALIAS icon (a pen nib shaped like an "A") and writes the source PNGs
// that @capacitor/assets turns into every Android icon and splash size.
import fs from 'node:fs';
import sharp from 'sharp';

const BG = '#14161c';
const bg = `<radialGradient id="bg" cx="50%" cy="38%" r="70%"><stop offset="0" stop-color="#2b2433"/><stop offset=".6" stop-color="#191a22"/><stop offset="1" stop-color="${BG}"/></radialGradient>`;
const nibDefs = `<linearGradient id="nib" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4cf7a"/><stop offset="1" stop-color="#c58a2c"/></linearGradient>`;
// nib pointing up reads as an "A"; the slit and breather hole make the crossbar gap
const nib = `
  <path d="M512 214 L676 560 Q694 600 668 636 L612 742 L412 742 L356 636 Q330 600 348 560 Z" fill="url(#nib)"/>
  <path d="M512 214 L512 520" stroke="${BG}" stroke-width="14" stroke-linecap="round"/>
  <circle cx="512" cy="560" r="34" fill="${BG}"/>
  <path d="M400 742 H624 V790 Q624 806 608 806 H416 Q400 806 400 790 Z" fill="#8c5e1c"/>
  <path d="M300 858 C 380 822, 452 886, 532 846 S 680 834, 724 852" fill="none" stroke="#d0453a" stroke-width="20" stroke-linecap="round"/>`;
const svg = (body, defs, size = 1024) =>
  Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 1024 1024"><defs>${defs}</defs>${body}</svg>`);

fs.mkdirSync('assets', { recursive: true });
const full = svg(`<rect width="1024" height="1024" fill="url(#bg)"/>${nib}`, bg + nibDefs);
await sharp(full).png().toFile('assets/icon-only.png');
// adaptive icon: the nib scaled into the 66% safe zone over the plain background
await sharp(svg(`<g transform="translate(512 512) scale(.74) translate(-512 -530)">${nib}</g>`, nibDefs)).png().toFile('assets/icon-foreground.png');
await sharp(svg(`<rect width="1024" height="1024" fill="url(#bg)"/>`, bg)).png().toFile('assets/icon-background.png');

const splash = async file => {
  const logo = await sharp(full).resize(640, 640).png().toBuffer();
  await sharp({ create: { width: 2732, height: 2732, channels: 4, background: BG } })
    .composite([{ input: logo, gravity: 'center' }]).png().toFile(file);
};
await splash('assets/splash.png');
await splash('assets/splash-dark.png');
console.log('icons written to assets/');
