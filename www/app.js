// ALIAS app: screens, the pass-the-phone flow, case theming, sound, haptics and update checks.
// Rules live in rules.js, text in i18n.js and scenarios-*.js.
const APP_VERSION = '__APP_VERSION__';
const REPO = 'ben-dih/alias';
const KEY = 'alias-v3';
const $app = document.getElementById('app');

let S = {
  lang: 'en', muted: false, screen: 'home',
  setup: { names: ['', '', '', ''], scenario: 'noir', mode: 'classic', killers: 'auto', minutes: 2, filter: 'all', step: 1 },
  game: null
};
let D = null; // the current player's private choices; never saved
const ui = { err: '', quitArm: false, tab: 'report', update: null, lastKey: '' };
let tick = null, lastSec = null, holdTimer = null;

/* ---------- helpers ---------- */
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const inGame = () => S.screen === 'game' && S.game;
const lang = () => (inGame() ? S.game.lang : S.lang);
const T = () => STRINGS[lang()];
const txt = g => SCENARIOS[g.scenario][g.lang];
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
function load() {
  try {
    const s = JSON.parse(localStorage.getItem(KEY));
    if (s && s.setup) {
      S = { ...S, ...s, setup: { ...S.setup, ...s.setup } };
      if (S.game) { S.game.shown = false; if (!SCENARIOS[S.game.scenario]) S.game = null; } // never reopen on a private screen
      if (S.screen === 'game' && !S.game) S.screen = 'home';
    }
  } catch (e) {}
}
function keepAwake() { try { navigator.wakeLock && navigator.wakeLock.request('screen').catch(() => {}); } catch (e) {} }
function buzz(ms) { try { navigator.vibrate && navigator.vibrate(ms); } catch (e) {} }

/* ---------- art ---------- */
const svg = (vb, cls, body) => `<svg class="${cls}" viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
const IC = {
  killer: '<path d="M4 20l3.5-1L19 7.5 16.5 5 5 16.5z"/><path d="M14.5 7l2.5 2.5M4 20l3-3"/>',
  detective: '<circle cx="10" cy="10" r="6"/><path d="M14.5 14.5L21 21"/>',
  civilian: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  vote: '<rect x="4" y="11" width="16" height="9" rx="1.5"/><path d="M8 11V4h8v7M10 7h4"/>',
  dead: '<path d="M12 3a8 8 0 0 0-8 8c0 3 1.6 4.8 3 6v3h10v-3c1.4-1.2 3-3 3-6a8 8 0 0 0-8-8z"/><circle cx="9" cy="11" r="1.6"/><circle cx="15" cy="11" r="1.6"/><path d="M10 20v-2M14 20v-2"/>',
  moon: '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  clue: '<circle cx="10" cy="10" r="6"/><path d="M14.5 14.5L21 21M8 10h4M10 8v4"/>',
  seen: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/><path d="M19 4l2-2M5 4L3 2"/>',
  pin: '<path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z"/><circle cx="12" cy="10" r="2"/>',
  eyeoff: '<path d="M3 3l18 18M10.6 6.1A10 10 0 0 1 12 6c6 0 10 6 10 6a17 17 0 0 1-3.2 3.6M6.4 7.6C3.6 9.4 2 12 2 12s4 6 10 6c1.6 0 3-.4 4.3-1"/>',
  sound: '<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11"/>',
  mute: '<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M17 9l5 6M22 9l-5 6"/>',
  dice: '<rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="9" cy="9" r="1.2"/><circle cx="15" cy="15" r="1.2"/><circle cx="15" cy="9" r="1.2"/><circle cx="9" cy="15" r="1.2"/>',
  scale: '<path d="M12 4v16M5 20h14M5 8h14M5 8l-3 6h6zM19 8l-3 6h6z"/>',
  bolt: '<path d="M13 2L5 14h6l-1 8 8-12h-6z"/>',
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5M9 7h6"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/>',
  play: '<path d="M7 5l12 7-12 7z"/>',
  check: '<path d="M5 12l5 5 9-10"/>',
  download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
  notes: '<path d="M6 3h9l4 4v14H6z"/><path d="M9 11h7M9 15h7M9 7h4"/>',
  folder: '<path d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>'
};
const ico = k => svg('0 0 24 24', 'ico', IC[k]);
const emblem = (id, cls = 'emblem') => `<svg class="${cls}" viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${(SCENARIOS[id] || SCENARIOS.noir).emblem}</svg>`;
const NIB = `<svg class="nib" viewBox="0 0 120 120" aria-hidden="true"><defs><linearGradient id="nibg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4cf7a"/><stop offset="1" stop-color="#c58a2c"/></linearGradient></defs>
  <path d="M60 10 L84 60 Q87 66 83 71 L74 88 L46 88 L37 71 Q33 66 36 60 Z" fill="url(#nibg)"/><path d="M60 10 V52" stroke="#14161c" stroke-width="2.4" stroke-linecap="round"/>
  <circle cx="60" cy="58" r="5" fill="#14161c"/><path d="M44 88 H76 V95 Q76 97 74 97 H46 Q44 97 44 95 Z" fill="#8c5e1c"/><path class="ink" d="M14 110 C 34 100, 50 116, 70 106 S 100 102, 108 108"/></svg>`;
const BRAND_NIB = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l5 10q.6 1.2-.2 2.2L15 18H9l-1.8-3.8q-.8-1 .2-2.2z" fill="currentColor"/><path d="M12 2v8" stroke="#14161c" stroke-width="1.2"/></svg>';
const PALETTE = ['#e0a84a', '#7fb3d5', '#e8805c', '#8fd29a', '#c79bf2', '#f2c94c', '#6fd6c6', '#f08aa8', '#b5c86c', '#e6b17e', '#9fb4ff', '#ff9e7a'];
const avatar = (name, i) => {
  const s = String(name || ''), c = [...s].reduce((h, ch) => (h * 31 + ch.codePointAt(0)) >>> 0, i * 7);
  return `<span class="avatar" style="background:${PALETTE[c % PALETTE.length]}">${esc([...s.trim()][0] || i + 1).toUpperCase()}</span>`;
};
const pips = level => {
  const n = { Easy: 1, Medium: 2, Hard: 3 }[level];
  return `<span class="pips ${level}">${[1, 2, 3].map(i => `<i class="${i <= n ? 'on' : ''}"></i>`).join('')}<span>${esc(T()[level])}</span></span>`;
};
const strikes = (n, of) => `<span class="strikes" aria-label="${n} / ${of}">${Array.from({ length: of }, (_, i) => `<i class="${i < n ? 'on' : ''}"></i>`).join('')}</span>`;

/* ---------- theme ---------- */
function applyTheme(id) {
  const root = document.documentElement, b = document.body, sc = SCENARIOS[id], l = lang();
  root.lang = l; root.dir = l === 'ar' ? 'rtl' : 'ltr';
  if (!sc) { b.removeAttribute('style'); b.dataset.tex = 'rain'; return; }
  const k = sc.look;
  const vars = {
    '--bg': k.bg, '--surface': k.surface, '--rule': k.rule, '--fg': k.fg, '--dim': k.dim, '--accent': k.accent,
    '--on-accent': k.onAccent, '--danger': k.danger, '--good': k.good,
    '--display': l === 'ar' ? `"${k.displayAr}", "IBM Plex Sans Arabic", serif` : `"${k.display}", Georgia, serif`
  };
  if (l !== 'ar') vars['--body'] = `"${k.body}", "Segoe UI", system-ui, sans-serif`;
  b.style.cssText = Object.entries(vars).map(([p, v]) => `${p}:${v}`).join(';');
  b.dataset.tex = k.texture;
}
const caseVars = id => {
  const k = SCENARIOS[id].look, l = S.lang;
  return `--c-bg:${k.bg};--c-rule:${k.rule};--c-fg:${k.fg};--c-dim:${k.dim};--c-accent:${k.accent};--c-display:"${l === 'ar' ? k.displayAr : k.display}",serif`;
};

/* ---------- sound (synthesized, no files) ---------- */
const sfx = {
  ctx: null,
  init() { try { if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)(); if (this.ctx.state === 'suspended') this.ctx.resume(); } catch (e) {} },
  tone(freq, dur, type, vol, when = 0) {
    const c = this.ctx, t = c.currentTime + when, o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(c.destination); o.start(t); o.stop(t + dur + 0.02);
  },
  play(kind) {
    if (S.muted || !this.ctx) return;
    try {
      if (kind === 'tick') this.tone(1500, 0.035, 'square', 0.04);
      else if (kind === 'stamp') { this.tone(80, 0.3, 'sine', 0.55); this.tone(160, 0.07, 'triangle', 0.25); }
      else if (kind === 'page') this.tone(620, 0.05, 'triangle', 0.05);
      else if (kind === 'alarm') [0, 0.22, 0.44].forEach(w => this.tone(880, 0.16, 'square', 0.07, w));
      else if (kind === 'sting') { this.tone(110, 1.8, 'sine', 0.3); this.tone(220, 1.4, 'sawtooth', 0.05); this.tone(311, 1.4, 'sawtooth', 0.04, 0.06); }
      else if (kind === 'win') [0, 0.12, 0.24].forEach((w, i) => this.tone([392, 494, 587][i], 0.5, 'triangle', 0.12, w));
    } catch (e) {}
  }
};

/* ---------- game flow ---------- */
function draft(g) {
  return { room: null, vote: null, kills: Array.from({ length: MODES[g.settings.mode].kills }, () => ({ t: null, a: null })), caseT: null, solved: null };
}
function startTalk(g) { openRound(g); g.screen = 'talk'; ui.tab = 'report'; g.talkEnds = Date.now() + g.settings.minutes * 60000; keepAwake(); }
function startTurns(g) {
  g.screen = 'turns'; g.idx = 0; g.shown = false; g.votes = {}; g.kills = []; g.picks = {};
  g.order = g.players.map((_, i) => i).filter(i => g.players[i].alive);
  if (!g.night) planNight(g); // games saved before rooms existed
}
// the phone goes round once more after the morning report: each player privately sees what they noticed
function startPeek(g) { g.screen = 'peek'; g.idx = 0; g.shown = false; g.order = g.players.map((_, i) => i).filter(i => g.players[i].alive); }
function openTurn(g) {
  D = draft(g);
  const p = g.players[g.order[g.idx]];
  if (p.role === 'detective' && g.case && g.round - g.case.round >= g.caseRounds) {
    g.caseLog.push({ target: g.case.target, role: g.players[g.case.target].role });
    g.case = null; D.solved = g.caseLog.length - 1;
  }
}
function commitTurn(g) {
  const me = g.order[g.idx];
  g.votes[me] = D.vote; g.picks[me] = D.room;
  if (canKill(g, me) && g.night.powers[D.room] !== 'locked') for (const k of D.kills) if (k.t !== null && k.a !== null) g.kills.push({ by: me, target: k.t, alias: k.a });
  if (D.caseT !== null) g.case = { target: D.caseT, round: g.round };
  D = null; g.shown = false;
  if (++g.idx >= g.order.length) { resolveRound(g); g.screen = 'morning'; }
}
function checkNames(names) {
  if (names.some(n => !n)) return T().errName;
  if (new Set(names.map(n => n.toLowerCase())).size !== names.length) return T().errDup;
  return '';
}
function startGame() {
  const s = S.setup, names = s.names.map(n => n.trim());
  S.game = newGame(names, { scenario: s.scenario, lang: S.lang, mode: s.mode, minutes: s.minutes, killers: s.killers });
  S.screen = 'game'; D = null; ui.quitArm = false; keepAwake();
}

const ACT = {
  home() { S.screen = 'home'; },
  newGame() { S.screen = 'setup'; S.setup.step = 1; ui.err = ''; },
  resume() { S.screen = 'game'; },
  howto() { S.screen = 'howto'; },
  lang() { S.lang = S.lang === 'en' ? 'ar' : 'en'; },
  mute() { S.muted = !S.muted; },
  add() { if (S.setup.names.length < 12) S.setup.names.push(''); },
  rm(b) { if (S.setup.names.length > 4) S.setup.names.splice(+b.dataset.i, 1); },
  stepBack() { if (S.setup.step > 1) S.setup.step--; else S.screen = 'home'; ui.err = ''; },
  stepNext() {
    if (S.setup.step === 1) { ui.err = checkNames(S.setup.names.map(n => n.trim())); if (ui.err) return; }
    if (S.setup.step < 3) S.setup.step++; else startGame();
  },
  filter(b) { S.setup.filter = b.dataset.v; },
  pickCase(b) { S.setup.scenario = b.dataset.v; if (SCENARIOS[b.dataset.v]) S.setup.minutes = BALANCE.minutes[SCENARIOS[b.dataset.v].level]; },
  mode(b) { S.setup.mode = b.dataset.v; },
  killers(b) { S.setup.killers = b.dataset.v === 'auto' ? 'auto' : +b.dataset.v; },
  min(b) { S.setup.minutes = Math.min(5, Math.max(1, S.setup.minutes + +b.dataset.d)); },
  files(b, g) { g.screen = 'reveal'; g.idx = 0; g.shown = false; },
  show(b, g) { g.shown = true; if (g.screen === 'turns') openTurn(g); },
  hide(b, g) { g.shown = false; if (++g.idx >= (g.screen === 'peek' ? g.order.length : g.players.length)) startTalk(g); },
  endTalk(b, g) { startTurns(g); },
  tab(b) { ui.tab = b.dataset.v; },
  pick(b) {
    const k = b.dataset.k, v = b.dataset.v;
    if (k === 'vote') D.vote = +v;
    else if (k === 'room') D.room = +v;
    else if (k === 'case') D.caseT = D.caseT === +v ? null : +v;
    else { const slot = D.kills[+k.slice(2)], f = k[1], val = f === 't' ? +v : v; slot[f] = slot[f] === val ? null : val; }
  },
  done(b, g) { commitTurn(g); },
  next(b, g) { if (g.winner) g.screen = 'end'; else startPeek(g); },
  again(b, g) { S.game = newGame(g.players.map(p => p.name), { scenario: S.setup.scenario, lang: S.lang, mode: S.setup.mode, minutes: S.setup.minutes, killers: S.setup.killers }); D = null; },
  setup() { S.game = null; S.screen = 'setup'; S.setup.step = 1; },
  quit() { if (ui.quitArm) { S.game = null; D = null; S.screen = 'home'; } ui.quitArm = !ui.quitArm; },
  update() { if (ui.update) location.href = ui.update.url; },
  later() { if (ui.update) ui.update.dismissed = true; }
};
const SOUND_FOR = { files: 'page', hide: 'page', done: 'page', next: 'page', newGame: 'page', stepNext: 'page' };

function doAct(b) {
  sfx.init();
  const act = b.dataset.act, g = S.game, before = g && g.screen;
  if (act !== 'quit') ui.quitArm = false;
  ACT[act](b, g);
  const view = document.getElementById('view'), y = view ? view.scrollTop : 0;
  render();
  const after = S.game && S.game.screen;
  if (after === 'morning' && before !== 'morning') { sfx.play('sting'); buzz([30, 60, 30]); }
  else if (after === 'end' && before !== 'end') sfx.play(S.game.winner === 'town' ? 'win' : 'stamp');
  else if (act === 'show' && after === 'reveal') { sfx.play('stamp'); buzz(40); }
  else if (SOUND_FOR[act]) sfx.play(SOUND_FOR[act]);
  else buzz(8);
  const v2 = document.getElementById('view');
  if (v2 && ['pick', 'mute', 'quit', 'filter', 'pickCase', 'mode', 'killers', 'min', 'add', 'rm', 'later'].includes(act)) v2.scrollTop = y;
  if (act === 'add') { const ins = $app.querySelectorAll('[data-name]'); ins[ins.length - 1].focus(); }
}

$app.addEventListener('click', e => {
  const b = e.target.closest('[data-act]');
  if (!b || b.disabled) return;
  if (b.classList.contains('hold') && e.detail !== 0) return; // pointer users must hold; keyboard Enter still works
  doAct(b);
});
// Hold to open: a private screen only opens after a deliberate press, never by a stray tap.
$app.addEventListener('pointerdown', e => {
  const b = e.target.closest('.hold');
  if (!b) return;
  b.classList.add('holding');
  holdTimer = setTimeout(() => { holdTimer = null; b.classList.remove('holding'); buzz(25); doAct(b); }, 650);
});
for (const ev of ['pointerup', 'pointerleave', 'pointercancel']) {
  $app.addEventListener(ev, () => { if (holdTimer) { clearTimeout(holdTimer); holdTimer = null; $app.querySelectorAll('.holding').forEach(x => x.classList.remove('holding')); } }, true);
}
$app.addEventListener('contextmenu', e => { if (e.target.closest('.hold')) e.preventDefault(); });
$app.addEventListener('input', e => {
  const i = e.target.dataset.name;
  if (i !== undefined) {
    S.setup.names[+i] = e.target.value; save();
    const av = e.target.parentElement.querySelector('.avatar');
    if (av) av.outerHTML = avatar(e.target.value, +i);
  }
});

/* ---------- shared pieces ---------- */
function chips(k, items, sel) {
  return `<div class="chips">${items.map(it => {
    const on = sel !== null && String(sel) === String(it.v);
    return `<button class="chip${on ? ' on' : ''}" data-act="pick" data-k="${k}" data-v="${esc(it.v)}" aria-pressed="${on}">${esc(it.label)}</button>`;
  }).join('')}</div>`;
}
function bar(where = '') {
  const t = T(), g = inGame();
  return `<span class="brand">${BRAND_NIB}ALIAS</span><span class="where">${where}</span><span class="tools">
    <button class="icon-btn" data-act="mute" aria-label="${S.muted ? t.soundOff : t.soundOn}">${ico(S.muted ? 'mute' : 'sound')}</button>
    ${g ? `<button class="icon-btn" data-act="quit">${ui.quitArm ? t.quitConfirm : t.quit}</button>` : ''}</span>`;
}
function cover(g, p, i, eyebrow, step, total) {
  const t = T();
  return { cls: 'cover', body: `<p class="label">${eyebrow}</p>
      <div class="peek">${Array.from({ length: total }, (_, k) => `<i class="${k <= step ? 'on' : ''}"></i>`).join('')}</div>
      ${avatar(p.name, i)}<p class="muted">${t.passTo}</p><h2 class="who">${esc(p.name)}</h2>
      <p class="muted small">${ico('eyeoff')} ${t.lookAway}</p>`,
    dock: `<button class="btn primary block hold" data-act="show"><span>${esc(t.imName(p.name))} · ${t.hold}</span></button>` };
}
function alibiText(g, a) {
  const t = T(), place = esc(txt(g).places[a.place]);
  return a.others ? t.alibiWith(place, a.others) : t.alibiAlone(place);
}
const placeName = (g, i) => esc(txt(g).places[i]);
// where a name was written from (-1: the Dark room), or where a witness saw someone slip away
const noteText = (g, n) => n.kind === 'from' ? (n.place < 0 ? T().writtenDark : T().writtenFrom(placeName(g, n.place))) : T().witness(placeName(g, n.place));

/* ---------- views ---------- */
const VIEWS = {
  home() {
    const t = T(), g = S.game, sc = g && SCENARIOS[g.scenario];
    const resume = g && !g.winner ? `<button class="resume" data-act="resume">${emblem(g.scenario)}<span><b>${esc(t.continueGame)}</b><span class="muted small">${esc(t.resume(sc[g.lang].title, g.round))}</span></span></button>` : '';
    const upd = ui.update && !ui.update.dismissed ? `<div class="update"><b>${esc(t.updateTitle(ui.update.v))}</b><p class="small">${t.updateBody}</p>
      <div class="dock-row" style="display:flex;gap:8px"><button class="btn primary" style="flex:1" data-act="update">${ico('download')}${t.download}</button><button class="btn secondary" data-act="later">${t.later}</button></div></div>` : '';
    return { bar: bar(), body: `<section class="home">
        <div class="home-mark">${NIB}<h1 class="wordmark">ALIAS</h1><p class="tag">${t.tagline}</p></div>
        ${upd}${resume}
        <div class="home-actions">
          <button class="btn primary block" data-act="newGame">${ico('play')}${t.newGame}</button>
          <button class="btn secondary block" data-act="howto">${ico('book')}${t.howTo}</button>
          <button class="btn ghost block" data-act="lang">${ico('globe')}${t.otherLang}</button>
        </div>
        <p class="version">${/^\d/.test(APP_VERSION) ? 'v' + APP_VERSION : ''}</p></section>` };
  },

  howto() {
    const t = T();
    return { bar: bar(t.howToTitle), body: `<h1 class="title">${t.howToTitle}</h1>
      <div class="howto">${t.howToSteps.map(([h, p]) => `<section><h3>${h}</h3><p class="muted">${p}</p></section>`).join('')}</div>`,
      dock: `<button class="btn primary block" data-act="newGame">${ico('play')}${t.newGame}</button><button class="btn secondary block" data-act="home">${t.home}</button>` };
  },

  setup() {
    const t = T(), s = S.setup, n = s.names.length;
    const head = `<div class="steps">${[1, 2, 3].map(i => `<i class="${i <= s.step ? 'on' : ''}"></i>`).join('')}</div><p class="label">${t.step(s.step, 3)}</p>`;
    const dock = `<div class="row"><button class="btn secondary" data-act="stepBack">${t.back}</button>
      <button class="btn primary" data-act="stepNext">${s.step === 3 ? ico('folder') + t.openCase : t.next}</button></div>`;
    let body;
    if (s.step === 1) {
      body = `${head}<h1 class="title">${t.stepPlayers}</h1><p class="muted">${t.playersHint}</p>
        <ol class="names">${s.names.map((nm, i) => `<li>${avatar(nm, i)}<input id="name-${i}" data-name="${i}" value="${esc(nm)}" placeholder="${esc(t.playerN(i + 1))}" maxlength="16" autocomplete="off" enterkeyhint="next" aria-label="${esc(t.playerN(i + 1))}">
          <button class="x" data-act="rm" data-i="${i}" aria-label="${esc(t.removePlayer(i + 1))}" ${n <= 4 ? 'disabled' : ''}>×</button></li>`).join('')}</ol>
        ${n < 12 ? `<button class="btn ghost block" data-act="add">+ ${t.addPlayer}</button>` : ''}
        <p class="err" role="alert">${esc(ui.err)}</p>`;
    } else if (s.step === 2) {
      const ids = Object.keys(SCENARIOS).filter(id => s.filter === 'all' || SCENARIOS[id].level === s.filter);
      body = `${head}<h1 class="title">${t.stepCase}</h1>
        <div class="seg" role="group">${['all', 'Easy', 'Medium', 'Hard'].map(f => `<button data-act="filter" data-v="${f}" aria-pressed="${s.filter === f}">${t[f]}</button>`).join('')}</div>
        ${s.filter !== 'all' ? `<p class="muted small">${t.levelHint[s.filter]}</p>` : ''}
        <div class="cases">${ids.map(id => { const c = SCENARIOS[id], x = c[S.lang];
          return `<button class="case" style='${caseVars(id)}' data-act="pickCase" data-v="${id}" aria-pressed="${s.scenario === id}">
            <span class="check">${ico('check')}</span>${emblem(id)}<span class="ct">${esc(x.title)}</span>${pips(c.level)}<span class="ch">${esc(x.hook)}</span></button>`; }).join('')}
          <button class="case random" data-act="pickCase" data-v="random" aria-pressed="${s.scenario === 'random'}"><span class="check">${ico('check')}</span>${ico('dice')}
            <span><span class="ct">${t.randomCase}</span><br><span class="ch">${t.randomHint}</span></span></button></div>`;
    } else {
      const auto = BALANCE.killers(n), cap = Math.max(1, Math.floor((n - 1) / 3));
      const modeIcon = { classic: 'killer', penalty: 'scale', frenzy: 'bolt' }, tagCls = { classic: 'fair', penalty: 'town', frenzy: 'killers' };
      const streak = BALANCE.streak(n), gap = BALANCE.killGap(n) > 1;
      body = `${head}<h1 class="title">${t.stepRules}</h1>
        <div class="section"><p class="label">${t.mode}</p>${Object.keys(MODES).map(m => `<button class="option" data-act="mode" data-v="${m}" aria-pressed="${s.mode === m}">
          ${ico(modeIcon[m])}<span><b>${t.modes[m][0]}</b><small>${t.modes[m][1]}</small></span><span class="tag ${tagCls[m]}">${t.modes[m][2]}</span></button>`).join('')}</div>
        <div class="section"><p class="label">${t.killers}</p>
          <div class="seg" role="group">${['auto', 1, 2, 3].map(k => `<button data-act="killers" data-v="${k}" aria-pressed="${String(s.killers) === String(k)}" ${k !== 'auto' && k > cap ? 'disabled' : ''}>${k === 'auto' ? t.auto : k}</button>`).join('')}</div>
          <p class="muted small">${t.autoHint(auto, n)} ${t.killerCap(n)}</p></div>
        <div class="section"><p class="label">${t.talkTime}</p>${s.scenario === 'random' ? `<p class="muted small">${t.caseTime}</p>`
          : `<div class="stepper"><button data-act="min" data-d="-1" aria-label="−">−</button><output>${t.minutes(s.minutes)}</output><button data-act="min" data-d="1" aria-label="+">+</button></div>`}</div>
        <div class="rules-box"><p class="label" style="display:block">${t.tableRules}</p><p>${t.ruleStreak(streak)}</p>${gap ? `<p>${t.ruleGap}</p>` : ''}</div>`;
    }
    return { bar: bar(), body, dock };
  },

  story() {
    const g = S.game, t = T(), sc = SCENARIOS[g.scenario], x = txt(g), k = g.settings.killers;
    const fact = ([a, b]) => `<li><b>${a}</b><span>${b}</span></li>`;
    return { bar: bar(t.briefing), cls: 'brief', body: `${emblem(g.scenario)}<h1 class="title">${esc(x.title)}</h1><div>${pips(sc.level)}</div>
      <p class="label">${t.briefing}</p><p class="intro">${esc(x.intro)}</p>
      <ul class="facts">${fact(t.factKillers(k))}${fact(t.factNames(g.players.length, g.aliasList.length - g.players.length))}${fact(t.factCase(g.caseRounds))}${fact(t.factStreak(g.streakLen))}</ul>
      <p class="muted small">${t.modes[g.settings.mode][0]} · ${t.minutes(g.settings.minutes)}${g.killGap > 1 ? ' · ' + t.ruleGap : ''}</p>`,
      dock: `<button class="btn primary block" data-act="files">${ico('folder')}${t.handOut}</button>` };
  },

  reveal() {
    const g = S.game, t = T(), p = g.players[g.idx], sc = SCENARIOS[g.scenario];
    if (!g.shown) return { bar: bar(t.caseFile(g.idx + 1, g.players.length)), ...cover(g, p, g.idx, t.caseFile(g.idx + 1, g.players.length), g.idx, g.players.length) };
    const r = t.roleDesc, k = g.settings.killers;
    const desc = p.role === 'killer' ? [r.killer, g.killGap > 1 ? r.killerGap : '', k > 1 ? r.killerMany(k) : ''].filter(Boolean).join(' ')
      : p.role === 'detective' ? r.detective(g.caseRounds) : r.civilian;
    return { bar: bar(t.caseFile(g.idx + 1, g.players.length)), body: `<article class="file" data-paper="${sc.look.paper}">${emblem(g.scenario, 'wm')}<div class="tab">${t.confidential} · ${esc(p.name)}</div>
        <p class="label">${t.secretName}</p><h2 class="alias">${esc(p.alias)}</h2>
        <p class="label">${t.yourRole}</p><p class="stamp ${p.role}">${ico(p.role)}${t.roles[p.role]}</p>
        <p>${desc}</p>
        <p class="alibi"><span class="label">${t.lastNight}</span><br>${alibiText(g, g.alibis[g.idx])}</p>
        <p class="warn">${ico('eyeoff')}${t.neverSay}</p></article>`,
      dock: `<button class="btn primary block" data-act="hide">${t.hideAndPass}</button>` };
  },

  talk() {
    const g = S.game, t = T(), x = txt(g), ev = g.event || {}, tab = ui.tab;
    const seen = g.round > 1 && g.report ? [...(g.report.from || []).map(place => ({ kind: 'from', place })), ...g.report.seen.map(place => ({ kind: 'seen', place }))] : [];
    const tabs = ['report', 'names', 'suspects', 'notes'];
    let content = '';
    if (tab === 'report') {
      const pressure = g.streak && g.players[g.streak.target].alive
        ? `<div class="pressure">${ico('vote')}<p>${t.pressure(esc(g.players[g.streak.target].name), g.streak.count, g.streakLen - g.streak.count)}</p></div>` : '';
      content = `<section class="card"><div class="card-head">${emblem(g.scenario)}<p class="label">${t.tonightReport}</p></div>
          <p class="beat">${esc(x.beats[ev.beat] || '')}</p>
          ${seen.map(n => `<div class="witness">${ico('seen')}<p>${noteText(g, n)}</p></div>`).join('')}
          ${ev.clue ? `<div class="evidence">${ico('clue')}<div><p class="label">${t.newEvidence}</p><p class="clue-text">${esc(clueText(g.lang, ev.clue, ev.two))}</p></div></div>` : ''}</section>
        <section class="question"><p class="label">${t.everyoneAnswers}</p><p class="q">${ev.ask && ev.ask.place != null ? t.ask(ev.ask.kind, placeName(g, ev.ask.place), g.round) : ''}</p><p class="muted small">${t.thenAlibi}</p></section>
        ${g.night ? `<section class="card rooms-card"><p class="label">${t.tonightRooms}</p><ul class="rooms">${g.night.rooms.map(r => { const pw = g.night.powers[r];
          return `<li><b>${placeName(g, r)}</b>${pw ? `<span class="tag">${t.powers[pw][0]}</span><small class="muted">${t.powers[pw][1]}</small>` : ''}</li>`; }).join('')}</ul>
          <p class="muted small">${t.roomsHint}</p></section>` : ''}
        ${ev.dare != null ? `<section class="question"><p class="label">${t.dareLabel}</p><p class="q">${t.dares[ev.dare % t.dares.length]}</p></section>` : ''}
        ${pressure}`;
    } else if (tab === 'names') {
      content = `<p class="label">${esc(x.listLabel)}</p><p class="muted small">${t.listInfo(g.players.length, g.aliasList.length - g.players.length)}</p>
        <ul class="aliases">${g.aliasList.map(a => `<li>${esc(a)}</li>`).join('')}</ul>`;
    } else if (tab === 'suspects') {
      content = `<ul class="roster">${g.players.map((p, i) => {
        let st = '';
        if (p.out === 'vote') st = esc(t.thrownOut(t.roles[p.role]));
        else if (p.out === 'killed') st = t.dead;
        else {
          if (p.cleared) st += `<span class="clr">${t.notKiller}</span>`;
          if (g.streak && g.streak.target === i) st += strikes(g.streak.count, g.streakLen);
        }
        return `<li class="${p.alive ? '' : 'out'}">${avatar(p.name, i)}<span class="nm">${esc(p.name)}</span><span class="st">${st}</span></li>`;
      }).join('')}</ul>`;
    } else {
      const notes = g.notes.slice().reverse();
      content = notes.length ? `<ul class="notes-list">${notes.map(nt => {
        const icon = nt.kind === 'clue' ? 'clue' : nt.kind === 'seen' || nt.kind === 'from' ? 'seen' : 'check';
        const body = nt.kind === 'clue' ? esc(clueText(g.lang, nt.key, nt.two)) : nt.kind === 'clear' ? t.wrongName(esc(g.players[nt.p].name)) : noteText(g, nt);
        return `<li class="${nt.kind}">${ico(icon)}<span>${body}</span><span class="rd">${esc(t.round(nt.round))}</span></li>`;
      }).join('')}</ul>` : `<p class="muted">${t.noNotes}</p>`;
    }
    return { bar: bar(t.round(g.round)), body: `<section class="timer"><div class="ring" id="ring-wrap"><svg viewBox="0 0 120 120"><circle class="ring-bg" cx="60" cy="60" r="52"/>
          <circle id="ring" class="ring-fg" cx="60" cy="60" r="52" pathLength="100" stroke-dasharray="100" stroke-dashoffset="0" transform="rotate(-90 60 60)"/></svg>
          <span id="clock" class="clock" role="timer">–:––</span></div>
        <div class="meta"><span class="label">${t.round(g.round)}</span><b>${t.talkLabel}</b><span class="muted small">${t.neverSay}</span></div></section>
      <div class="tabs" role="tablist">${tabs.map(k => `<button role="tab" data-act="tab" data-v="${k}" aria-selected="${tab === k}">${t.tabs[k]}${k === 'notes' && g.notes.length ? `<span class="badge">${g.notes.length}</span>` : ''}</button>`).join('')}</div>
      ${content}`,
      dock: `<button class="btn secondary block" data-act="endTalk">${ico('moon')}${t.startTurns}</button>` };
  },

  turns() {
    const g = S.game, t = T(), me = g.order[g.idx], p = g.players[me], sc = SCENARIOS[g.scenario];
    if (!g.shown) return { bar: bar(t.secretTurn(g.idx + 1, g.order.length)), ...cover(g, p, me, t.secretTurn(g.idx + 1, g.order.length), g.idx, g.order.length) };
    if (!D) D = draft(g);
    const others = g.order.filter(i => i !== me).map(i => ({ v: i, label: g.players[i].name }));
    const clues = g.notes.length ? `<p class="sub">${t.cluesSoFar}</p>${g.notes.filter(n => n.kind !== 'clear').map(n => `<p class="small">${n.kind === 'clue' ? esc(clueText(g.lang, n.key, n.two)) : noteText(g, n)}</p>`).join('')}` : '';
    const N = g.night, power = r => N.powers[r], locked = power(D.room) === 'locked';
    const rooms = N.rooms.map(r => ({ v: r, label: txt(g).places[r] + (power(r) ? ' · ' + t.powers[power(r)][0] : '') }));
    let extra = '';
    if (p.role === 'killer' && locked) {
      extra = `<section class="panel notes"><h3>${ico('killer')}${t.yourNotes}</h3><p>${t.lockedKiller}</p>${clues}</section>`;
    } else if (p.role === 'killer' && !canKill(g, me)) {
      extra = `<section class="panel notes"><h3>${ico('killer')}${t.yourNotes}</h3><p>${t.penRest}</p><p class="muted small">${t.penRestHint}</p>${clues}</section>`;
    } else if (p.role === 'killer') {
      extra = `<section class="panel notes"><h3>${ico('killer')}${t.yourNotes}</h3>${D.kills.map((s, k) => `
          <p class="sub">${D.kills.length > 1 ? t.nameN(k + 1) + ' · ' : ''}${t.player}</p>${chips('kt' + k, others, s.t)}
          <p class="sub">${t.isSecretly}</p>${chips('ka' + k, g.aliasList.map(a => ({ v: a, label: a })), s.a)}`).join('<hr>')}
        <p class="muted small">${t.leaveBlank}</p>${clues}</section>`;
    } else if (p.role === 'detective') {
      const solved = D.solved !== null ? g.caseLog[D.solved] : null;
      let body = solved ? `<p class="result">${t.caseClosed(esc(g.players[solved.target].name), t.roles[solved.role])}</p>` : '';
      if (g.case) body += `<p>${t.caseOpen(esc(g.players[g.case.target].name), g.caseRounds - (g.round - g.case.round))}</p>`;
      else body += `<p class="sub">${t.newCase}</p>${chips('case', others, D.caseT)}<p class="muted small">${t.roleArrives(g.caseRounds)}</p>`;
      const past = g.caseLog.filter((_, i) => i !== D.solved);
      if (past.length) body += `<p class="sub">${t.pastResults}</p>${past.map(c => `<p class="small">${esc(g.players[c.target].name)}: ${t.roles[c.role]}</p>`).join('')}`;
      extra = `<section class="panel"><h3>${ico('detective')}${t.caseBoard}</h3>${body}</section>`;
    }
    const ok = D.room !== null && D.vote !== null && (locked || D.kills.every(s => (s.t === null) === (s.a === null)));
    return { bar: bar(t.secretTurn(g.idx + 1, g.order.length)), body: `<div class="me" data-paper="${sc.look.paper}">${ico(p.role)}<div><b>${esc(p.alias)}</b><small>${esc(p.name)} · ${t.roles[p.role]}</small></div></div>
        <section class="panel"><h3>${ico('pin')}${t.pickRoom}</h3><p class="muted small">${p.role === 'killer' ? t.pickRoomKiller : t.pickRoomHint}</p>${chips('room', rooms, D.room)}
          ${power(D.room) ? `<p class="small">${t.powers[power(D.room)][1]}</p>` : ''}</section>
        <section class="panel"><h3>${ico('vote')}${t.vote}</h3><p class="muted small">${t.voteHint}</p>${chips('vote', [...others, { v: SKIP, label: t.skipVote }], D.vote)}</section>
        ${extra}`,
      dock: `<button class="btn primary block" data-act="done" ${ok ? '' : 'disabled'}>${t.done}</button>` };
  },

  morning() {
    const g = S.game, t = T(), r = g.report, P = g.players, x = txt(g);
    const item = (cls, icon, html) => `<div class="ev ${cls}">${ico(icon)}<p>${html}</p></div>`;
    const night = r.dead.length ? r.dead.map(i => item('dead', 'dead', `<big>${esc(P[i].name)}</big>${esc(x.death)}`)).join('')
      : item('quiet', 'moon', `<big>${t.nothing}</big>${esc(x.quiet)}`);
    const seen = [...(r.from || []).map(pl => item('seen', 'seen', noteText(g, { kind: 'from', place: pl }))),
      ...r.seen.map(pl => item('seen', 'seen', t.witness(placeName(g, pl))))].join('');
    let vote;
    if (r.ejected !== null) vote = item('out', 'vote', `<big>${esc(t.outTitle(P[r.ejected].name))}</big>${t.outBody(g.streakLen, t.roles[P[r.ejected].role])}`);
    else if (r.top !== null) vote = item('vote', 'vote', `${t.mostVotes(esc(P[r.top].name), r.count, g.streakLen)} ${strikes(r.count, g.streakLen)}`);
    else vote = item('vote', 'vote', r.skipped ? t.skipped : t.split);
    const clears = r.clears.map(i => item('clue', 'check', t.wrongName(esc(P[i].name)))).join('');
    return { bar: bar(t.morning(r.round)), body: `<section class="dawn">${ico('sun')}<p class="label">${t.morning(r.round)}</p><h1>${t.morningTitle}</h1></section>
      <div class="report">${night}${seen}${vote}${clears}</div>`,
      dock: `<button class="btn primary block" data-act="next">${g.winner ? t.verdictBtn : t.nextRound(g.round)}</button>` };
  },

  peek() {
    const g = S.game, t = T(), me = g.order[g.idx], p = g.players[me], q = (g.peek || {})[me] || {};
    const step = t.peekStep(g.idx + 1, g.order.length);
    if (!g.shown) return { bar: bar(step), ...cover(g, p, me, step, g.idx, g.order.length) };
    const line = (icon, html) => `<div class="ev">${ico(icon)}<p>${html}</p></div>`, name = j => esc(g.players[j].name);
    const rows = [];
    if (q.place != null) rows.push(line('pin', alibiText(g, q)));
    rows.push(q.acted ? line('killer', t.peekYouLeft) : q.left ? line('seen', t.peekLeft) : line('moon', t.peekQuiet));
    if (q.trace != null) rows.push(line('clue', t.peekTrace(t.traces[q.trace % t.traces.length])));
    if (q.sound != null) rows.push(line('sound', t.peekSound(placeName(g, q.sound))));
    if (q.look) rows.push(line('seen', t.peekLook(name(q.look.p), placeName(g, q.look.place))));
    if (q.rumor) rows.push(line('vote', t.peekRumor(name(q.rumor.p), placeName(g, q.rumor.place))));
    if (q.cover) rows.push(line('killer', (q.cover.alone ? t.coverAlone : t.coverCrowd)(placeName(g, q.cover.place))));
    return { bar: bar(step), body: `<section class="dawn">${ico('seen')}<p class="label">${step}</p><h1>${t.peekTitle}</h1></section>
      <div class="report">${rows.join('')}</div><p class="muted small">${t.peekHint}</p>`,
      dock: `<button class="btn primary block" data-act="hide">${t.peekDone}</button>` };
  },

  end() {
    const g = S.game, t = T(), town = g.winner === 'town';
    const decoys = g.aliasList.filter(a => !g.players.some(p => p.alias === a));
    return { bar: bar(), body: `<p class="verdict-stamp ${g.winner}">${town ? t.solved : t.unsolved}</p>
      <h1 class="verdict">${town ? t.townWins : t.killersWin(g.settings.killers)}</h1><p class="muted">${town ? t.townSub : t.killersSub}</p>
      <div class="files-wrap"><table class="files"><thead><tr><th>${t.colPlayer}</th><th>${t.colName}</th><th>${t.colRole}</th><th>${t.colFate}</th></tr></thead><tbody>
        ${g.players.map(p => `<tr><td>${esc(p.name)}</td><td>${esc(p.alias)}</td><td class="${p.role === 'killer' ? 'k' : ''}">${t.roles[p.role]}</td>
          <td>${t.fate[p.alive ? 'alive' : p.out]}</td></tr>`).join('')}</tbody></table></div>
      <p class="muted small">${t.decoys}: ${decoys.map(esc).join(' · ')}</p>`,
      dock: `<button class="btn primary block" data-act="again">${ico('play')}${t.playAgain}</button><button class="btn secondary block" data-act="setup">${t.changeSetup}</button>` };
  }
};

function startClock(g) {
  const el = document.getElementById('clock'), ring = document.getElementById('ring'), wrap = document.getElementById('ring-wrap');
  const total = g.settings.minutes * 60000;
  const step = () => {
    const ms = g.talkEnds - Date.now();
    if (ms <= 0) {
      sfx.play('alarm'); buzz([200, 100, 200]);
      startTurns(g); render(); return;
    }
    const s = Math.ceil(ms / 1000);
    el.textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
    ring.style.strokeDashoffset = String(100 * (1 - ms / total));
    wrap.classList.toggle('low', s <= 15);
    if (s <= 10 && s !== lastSec) sfx.play('tick');
    lastSec = s;
  };
  tick = setInterval(step, 250);
  step();
}

function render() {
  clearInterval(tick);
  save();
  const g = inGame() ? S.game : null;
  applyTheme(g ? g.scenario : S.screen === 'setup' && S.setup.step > 1 ? S.setup.scenario : null);
  const name = g ? g.screen : S.screen;
  const v = VIEWS[name]();
  const key = [name, g && g.idx, g && g.shown, g && g.round, S.setup.step, ui.tab].join('|');
  const fresh = key !== ui.lastKey;
  ui.lastKey = key;
  const body = v.cls ? `<section class="${v.cls} stack">${v.body}</section>` : v.body;
  $app.innerHTML = `<header class="bar">${v.bar}</header><main class="view${fresh ? ' enter' : ''}" id="view">${body}</main><footer class="dock">${v.dock || ''}</footer>`;
  if (fresh) document.getElementById('view').scrollTop = 0;
  if (g && g.screen === 'talk') startClock(g);
}

/* ---------- updates (Android app only) ---------- */
const isNativeApp = () => !!(window.Capacitor && (window.Capacitor.isNativePlatform ? window.Capacitor.isNativePlatform() : true));
const newer = (a, b) => {
  const x = a.split('.').map(Number), y = b.split('.').map(Number);
  for (let i = 0; i < 3; i++) if ((x[i] || 0) !== (y[i] || 0)) return (x[i] || 0) > (y[i] || 0);
  return false;
};
async function checkUpdate() {
  if (!isNativeApp() || !/^\d+\.\d+\.\d+$/.test(APP_VERSION)) return;
  try {
    const r = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, { headers: { Accept: 'application/vnd.github+json' } });
    if (!r.ok) return;
    const j = await r.json(), v = String(j.tag_name || '').replace(/^v/, '');
    const apk = (j.assets || []).find(a => /\.apk$/i.test(a.name));
    if (apk && newer(v, APP_VERSION)) { ui.update = { v, url: apk.browser_download_url }; if (!inGame()) render(); }
  } catch (e) {}
}

// Android back button: step back through menus; inside a game it asks before quitting.
history.replaceState({ alias: 0 }, '');
history.pushState({ alias: 1 }, '');
window.addEventListener('popstate', () => {
  history.pushState({ alias: 1 }, '');
  if (inGame()) ui.quitArm = true;
  else if (S.screen === 'setup' && S.setup.step > 1) S.setup.step--;
  else S.screen = 'home';
  render();
});

window.claude?.hot?.snapshot(() => S);
const boot = d => { if (d && d.setup) S = d; else load(); render(); checkUpdate(); };
window.claude?.hot?.ready ? window.claude.hot.ready(boot) : boot(window.claude?.hot?.data ?? {});
