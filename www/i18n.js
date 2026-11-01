// Interface text in English and Arabic. Values are strings or small functions for numbers and names.
const STRINGS = {
  en: {
    tagline: 'Everyone has a secret name. Somebody is writing them down.',
    newGame: 'New game', continueGame: 'Continue', howTo: 'How to play', langName: 'English', otherLang: 'عربي',
    soundOn: 'Sound on', soundOff: 'Sound off', back: 'Back', next: 'Next', home: 'Home', quit: 'Quit', quitConfirm: 'Tap again to quit',
    resume: (title, r) => `${title} · round ${r}`,
    step: (i, n) => `Step ${i} of ${n}`,
    stepPlayers: 'Who’s playing?', playersHint: '4 to 12 players. Use names the table knows.',
    addPlayer: 'Add player', playerN: n => `Player ${n}`, removePlayer: n => `Remove player ${n}`,
    errName: 'Every player needs a name.', errDup: 'Two players share a name. Add an initial to tell them apart.',
    stepCase: 'Choose a case', all: 'All', Easy: 'Easy', Medium: 'Medium', Hard: 'Hard',
    levelHint: { Easy: 'Friendly to the town', Medium: 'A fair fight', Hard: 'Tough for the town' },
    randomCase: 'Random case', randomHint: 'Find out where you are at the briefing.',
    stepRules: 'House rules', mode: 'Mode',
    modes: {
      classic: ['Classic', 'Killers write one name per round. A wrong guess: nothing happens.', 'Fair'],
      penalty: ['Penalty', 'A wrong guess clears an innocent player in public.', 'Easier for the town'],
      frenzy: ['Frenzy', 'Killers write up to two names per round. Fast and bloody.', 'Harder for the town']
    },
    killers: 'Killers', auto: 'Auto', autoHint: (k, n) => `Auto picks ${k} for ${n} players.`, killerCap: n => `With ${n} players, at most ${Math.max(1, Math.floor((n - 1) / 3))}.`,
    talkTime: 'Talk time per round', minutes: m => `${m} min`, caseTime: 'Set by the case that comes up.',
    tableRules: 'Table rules for this group',
    ruleStreak: s => `Thrown out after topping the vote ${s} rounds in a row.`,
    ruleGap: 'Killers can only write a name every other round.',
    openCase: 'Open the case',
    briefing: 'Briefing · read this aloud',
    factNames: (n, d) => [`${n} + ${d}`, 'real names + decoys'],
    factCase: r => [`${r} rounds`, 'for a detective result'],
    factTalk: m => [`${m} min`, 'of talk per round'],
    factStreak: s => [`${s} in a row`, 'top votes to be thrown out'],
    factKillers: k => [k === 1 ? 'One killer' : `${k} killers`, k === 1 ? 'is hiding among you' : 'who don’t know each other'],
    handOut: 'Hand out the case files',
    caseFile: (i, n) => `Case file ${i} of ${n}`, secretTurn: (i, n) => `Secret turn ${i} of ${n}`,
    passTo: 'Pass the phone to', lookAway: 'Everyone else, look away.', hold: 'Hold to open', imName: name => `I’m ${name}`,
    confidential: 'Confidential', secretName: 'Your secret name', yourRole: 'Your role',
    roles: { killer: 'Killer', detective: 'Detective', civilian: 'Civilian' },
    roleDesc: {
      killer: 'On your secret turn, write a secret name next to a player. If it’s theirs, they die. Stay hidden.',
      killerGap: 'After you write a name, your pen rests for a round.',
      killerMany: k => `There are ${k} killers. You don’t know the others. You win together, so try not to kill each other.`,
      detective: r => `Open a case on one player. Their true role reaches you ${r} rounds later. One case at a time.`,
      civilian: 'Listen, watch, and vote. Find the killer before your name ends up in their notes.'
    },
    lastNight: 'Last night', tonight: 'Tonight',
    alibiWith: (place, n) => `You were at <b>${place}</b> with ${n} other ${n > 1 ? 'people' : 'person'}. You don’t know who.`,
    alibiAlone: place => `You were at <b>${place}</b>, alone.`,
    alibiKiller: 'Nobody knows you slipped out tonight, unless a witness saw you.',
    neverSay: 'Never say your secret name out loud.', hideAndPass: 'Hide and pass',
    round: r => `Round ${r}`, talkLabel: 'Open discussion', endTalk: 'End talk now', startTurns: 'Start secret turns',
    tabs: { report: 'Report', names: 'Names', suspects: 'Suspects', notes: 'Notes' },
    tonightReport: 'Tonight’s report', newEvidence: 'New evidence', everyoneAnswers: 'Everyone answers out loud',
    thenAlibi: 'Then: where were you last night, and who can back you up?',
    ask: (kind, place, r) => (kind === 'seen' ? [
      `A witness saw someone slip away from <b>${place}</b>. Who was there? Raise your hand and say how many others your card said were with you.`,
      `Someone left <b>${place}</b> in the night. Everyone who was there, own up. Do the numbers add up?`
    ] : [
      `Who was at <b>${place}</b> last night? Raise your hand and say how many others were with you.`,
      `Everyone at <b>${place}</b> last night, speak up. Does the count match what your cards said?`
    ])[r % 2],
    witness: place => `A witness saw someone slip away from <b>${place}</b> during the night.`,
    pressure: (name, c, left) => `<b>${name}</b> has topped the vote ${c} time${c > 1 ? 's' : ''} in a row. ${left} more and they’re out.`,
    listInfo: (n, d) => `${n} belong to players. ${d} are decoys.`,
    thrownOut: role => `Thrown out · ${role}`, dead: 'Dead', notKiller: 'Not a killer',
    noNotes: 'Clues, witness reports and cleared players will collect here.',
    rememberIt: 'Remember it. Tomorrow everyone will ask.',
    vote: 'Vote', voteHint: 'Who do you think is a killer?',
    yourNotes: 'Your notes', player: 'Player', isSecretly: 'is secretly', nameN: i => `Name ${i}`,
    leaveBlank: 'Leave it blank to write nothing tonight. Tap again to unselect.',
    penRest: 'Your pen rests this round. You can write a name again next round.', penRestHint: 'Vote like everyone else.',
    cluesSoFar: 'Clues so far', caseBoard: 'Case board',
    caseClosed: (name, role) => `Case closed: <b>${name}</b> is a <b>${role}</b>.`,
    caseOpen: (name, left) => `Open case on <b>${name}</b>. Result in ${left} round${left > 1 ? 's' : ''}.`,
    newCase: 'Open a new case (optional)', roleArrives: r => `Their role reaches you in ${r} rounds.`, pastResults: 'Past results',
    done: 'Done. Hide and pass',
    morning: r => `Round ${r} · morning`, morningTitle: 'The morning report',
    outTitle: name => `${name} is thrown out.`, outBody: (s, role) => `Top of the vote ${s} rounds in a row. They were a <b>${role}</b>.`,
    mostVotes: (name, c, s) => `<b>${name}</b> got the most votes. ${c} of ${s}.`,
    split: 'The vote was split. Nobody’s streak continues.',
    nothing: 'Nothing happened.', wrongName: name => `A name was written wrong. <b>${name}</b> is not a killer.`,
    nextRound: r => `Start round ${r}`, verdictBtn: 'See the verdict',
    solved: 'Solved', unsolved: 'Unsolved', townWins: 'Case closed.', killersWin: k => (k > 1 ? 'The killers got away.' : 'The killer got away.'),
    townSub: 'Every killer is off the streets. The town wins.', killersSub: 'They outnumber everyone left standing.',
    colPlayer: 'Player', colName: 'Secret name', colRole: 'Role', colFate: 'Fate',
    fate: { alive: 'Survived', vote: 'Thrown out', killed: 'Killed' }, decoys: 'Decoys',
    playAgain: 'Play again', changeSetup: 'Change players or case',
    updateTitle: v => `Version ${v} is out`, updateBody: 'Download the new APK and install it over this one. Your settings stay.', download: 'Download', later: 'Later',
    howToTitle: 'How to play',
    howToSteps: [
      ['The setup', 'Everyone gets a secret role and a secret name from the case. Killers know their own name and see the full list of names in play, with a few decoys mixed in.'],
      ['Talk', 'Each round opens with a story event, a true clue about a killer’s secret name, and a question everyone answers. Argue, accuse, defend yourself. Never say your secret name.'],
      ['Alibis', 'Every night you are somewhere with other people. If a killer writes a name, a witness might see someone slip away from their place, and the morning report will say where.'],
      ['Secret turn', 'The phone goes around. Everyone votes. Killers write a secret name next to a player: if it matches, that player dies. The detective opens a case and learns a role a few rounds later.'],
      ['Winning', 'Topping the vote enough rounds in a row gets a player thrown out. The town wins when every killer is gone. Killers win when they equal or outnumber everyone else.']
    ]
  },
  ar: {
    tagline: 'لكل واحد اسم سري. وهناك من يكتب هذه الأسماء.',
    newGame: 'لعبة جديدة', continueGame: 'متابعة', howTo: 'طريقة اللعب', langName: 'عربي', otherLang: 'English',
    soundOn: 'الصوت يعمل', soundOff: 'الصوت مكتوم', back: 'رجوع', next: 'التالي', home: 'الرئيسية', quit: 'خروج', quitConfirm: 'اضغط مرة أخرى للخروج',
    resume: (title, r) => `${title} · الجولة ${r}`,
    step: (i, n) => `الخطوة ${i} من ${n}`,
    stepPlayers: 'من سيلعب؟', playersHint: 'من 4 إلى 12 لاعباً. استخدموا أسماء يعرفها الجميع.',
    addPlayer: 'إضافة لاعب', playerN: n => `اللاعب ${n}`, removePlayer: n => `حذف اللاعب ${n}`,
    errName: 'كل لاعب يحتاج إلى اسم.', errDup: 'لاعبان بالاسم نفسه. أضيفوا حرفاً للتمييز بينهما.',
    stepCase: 'اختاروا القضية', all: 'الكل', Easy: 'سهل', Medium: 'متوسط', Hard: 'صعب',
    levelHint: { Easy: 'في صالح المدينة', Medium: 'معركة متكافئة', Hard: 'صعبة على المدينة' },
    randomCase: 'قضية عشوائية', randomHint: 'ستعرفون المكان عند قراءة الملخص.',
    stepRules: 'قواعد اللعب', mode: 'النمط',
    modes: {
      classic: ['كلاسيكي', 'يكتب القتلة اسماً واحداً كل جولة. التخمين الخاطئ: لا يحدث شيء.', 'متكافئ'],
      penalty: ['العقوبة', 'التخمين الخاطئ يبرّئ لاعباً بريئاً أمام الجميع.', 'أسهل على المدينة'],
      frenzy: ['الجنون', 'يكتب القتلة حتى اسمين كل جولة. سريعة ودموية.', 'أصعب على المدينة']
    },
    killers: 'القتلة', auto: 'تلقائي', autoHint: (k, n) => `التلقائي يختار ${k} لـ ${n} لاعبين.`, killerCap: n => `مع ${n} لاعبين، الحد الأقصى ${Math.max(1, Math.floor((n - 1) / 3))}.`,
    talkTime: 'وقت النقاش في كل جولة', minutes: m => `${m} د`, caseTime: 'تحدده القضية التي ستظهر.',
    tableRules: 'قواعد هذه المجموعة',
    ruleStreak: s => `يُطرد اللاعب إذا حصل على أعلى الأصوات ${s} جولات متتالية.`,
    ruleGap: 'لا يكتب القاتل اسماً إلا كل جولتين.',
    openCase: 'افتحوا القضية',
    briefing: 'ملخص القضية · اقرأوه بصوت عالٍ',
    factNames: (n, d) => [`${n} + ${d}`, 'أسماء حقيقية + أسماء خادعة'],
    factCase: r => [`${r} جولات`, 'حتى تصل نتيجة المحقق'],
    factTalk: m => [`${m} د`, 'نقاش في كل جولة'],
    factStreak: s => [`${s} متتالية`, 'أعلى أصوات للطرد'],
    factKillers: k => [k === 1 ? 'قاتل واحد' : `${k} قتلة`, k === 1 ? 'يختبئ بينكم' : 'لا يعرفون بعضهم'],
    handOut: 'وزّعوا ملفات القضية',
    caseFile: (i, n) => `ملف ${i} من ${n}`, secretTurn: (i, n) => `الدور السري ${i} من ${n}`,
    passTo: 'أعطوا الهاتف إلى', lookAway: 'الباقون، لا تنظروا.', hold: 'اضغط مطولاً للفتح', imName: name => `أنا ${name}`,
    confidential: 'سري', secretName: 'اسمك السري', yourRole: 'دورك',
    roles: { killer: 'قاتل', detective: 'محقق', civilian: 'مواطن' },
    roleDesc: {
      killer: 'في دورك السري، اكتب اسماً سرياً بجانب لاعب. إن كان اسمه، يموت. ابقَ مختبئاً.',
      killerGap: 'بعد أن تكتب اسماً، يرتاح قلمك جولة واحدة.',
      killerMany: k => `هناك ${k} قتلة. لا تعرف الآخرين. تفوزون معاً، فحاولوا ألا تقتلوا بعضكم.`,
      detective: r => `افتح قضية على لاعب واحد. يصلك دوره الحقيقي بعد ${r} جولات. قضية واحدة في كل مرة.`,
      civilian: 'استمع وراقب وصوّت. اعثر على القاتل قبل أن يصل اسمك إلى دفتره.'
    },
    lastNight: 'الليلة الماضية', tonight: 'الليلة',
    alibiWith: (place, n) => `كنت في <b>${place}</b> مع ${n === 1 ? 'شخص آخر' : n === 2 ? 'شخصين آخرين' : `${n} أشخاص آخرين`}. لا تعرف من.`,
    alibiAlone: place => `كنت في <b>${place}</b> وحدك.`,
    alibiKiller: 'لا أحد يعرف أنك تسللت الليلة، إلا إذا رآك شاهد.',
    neverSay: 'لا تقل اسمك السري بصوت عالٍ أبداً.', hideAndPass: 'أخفِ الشاشة ومرّر الهاتف',
    round: r => `الجولة ${r}`, talkLabel: 'نقاش مفتوح', endTalk: 'أنهوا النقاش الآن', startTurns: 'ابدأوا الأدوار السرية',
    tabs: { report: 'التقرير', names: 'الأسماء', suspects: 'المشتبهون', notes: 'الملاحظات' },
    tonightReport: 'تقرير الليلة', newEvidence: 'دليل جديد', everyoneAnswers: 'الكل يجيب بصوت عالٍ',
    thenAlibi: 'ثم: أين كنت الليلة الماضية، ومن يشهد لك؟',
    ask: (kind, place, r) => (kind === 'seen' ? [
      `رأى شاهد شخصاً يتسلل من <b>${place}</b>. من كان هناك؟ ارفع يدك وقل كم شخصاً كان معك حسب بطاقتك.`,
      `غادر أحدهم <b>${place}</b> في الليل. ليعترف كل من كان هناك. هل تتطابق الأعداد؟`
    ] : [
      `من كان في <b>${place}</b> الليلة الماضية؟ ارفع يدك وقل كم شخصاً كان معك.`,
      `ليتكلم كل من كان في <b>${place}</b> الليلة الماضية. هل يتطابق العدد مع ما قالته بطاقاتكم؟`
    ])[r % 2],
    witness: place => `رأى شاهد أحدهم يتسلل من <b>${place}</b> أثناء الليل.`,
    pressure: (name, c, left) => `حصل <b>${name}</b> على أعلى الأصوات ${c} مرة متتالية. ${left} أخرى ويُطرد.`,
    listInfo: (n, d) => `${n} منها للاعبين. و${d} أسماء خادعة.`,
    thrownOut: role => `مطرود · ${role}`, dead: 'ميت', notKiller: 'ليس قاتلاً',
    noNotes: 'هنا تتجمع الأدلة وتقارير الشهود وأسماء من ثبتت براءتهم.',
    rememberIt: 'تذكّر هذا. غداً سيسأل الجميع.',
    vote: 'التصويت', voteHint: 'من تظن أنه قاتل؟',
    yourNotes: 'دفترك', player: 'اللاعب', isSecretly: 'اسمه السري', nameN: i => `الاسم ${i}`,
    leaveBlank: 'اتركه فارغاً لكي لا تكتب شيئاً الليلة. اضغط مرة أخرى لإلغاء الاختيار.',
    penRest: 'قلمك يرتاح هذه الجولة. يمكنك كتابة اسم في الجولة القادمة.', penRestHint: 'صوّت مثل الجميع.',
    cluesSoFar: 'الأدلة حتى الآن', caseBoard: 'لوحة القضية',
    caseClosed: (name, role) => `أُغلقت القضية: <b>${name}</b> هو <b>${role}</b>.`,
    caseOpen: (name, left) => `قضية مفتوحة على <b>${name}</b>. النتيجة بعد ${left} ${left > 1 ? 'جولات' : 'جولة'}.`,
    newCase: 'افتح قضية جديدة (اختياري)', roleArrives: r => `يصلك دوره بعد ${r} جولات.`, pastResults: 'نتائج سابقة',
    done: 'تم. أخفِ الشاشة ومرّر',
    morning: r => `الجولة ${r} · الصباح`, morningTitle: 'تقرير الصباح',
    outTitle: name => `طُرد ${name}.`, outBody: (s, role) => `حصل على أعلى الأصوات ${s} جولات متتالية. كان <b>${role}</b>.`,
    mostVotes: (name, c, s) => `حصل <b>${name}</b> على أعلى الأصوات. ${c} من ${s}.`,
    split: 'انقسمت الأصوات. لا أحد يستمر في السلسلة.',
    nothing: 'لم يحدث شيء.', wrongName: name => `كُتب اسم خاطئ. <b>${name}</b> ليس قاتلاً.`,
    nextRound: r => `ابدأوا الجولة ${r}`, verdictBtn: 'شاهدوا الحكم',
    solved: 'حُلّت', unsolved: 'لم تُحل', townWins: 'أُغلقت القضية.', killersWin: k => (k > 1 ? 'هرب القتلة.' : 'هرب القاتل.'),
    townSub: 'لم يبق قاتل طليق. فازت المدينة.', killersSub: 'أصبحوا مساوين أو أكثر من الباقين.',
    colPlayer: 'اللاعب', colName: 'الاسم السري', colRole: 'الدور', colFate: 'المصير',
    fate: { alive: 'نجا', vote: 'طُرد', killed: 'قُتل' }, decoys: 'الأسماء الخادعة',
    playAgain: 'العبوا مرة أخرى', changeSetup: 'غيّروا اللاعبين أو القضية',
    updateTitle: v => `الإصدار ${v} متاح`, updateBody: 'نزّلوا ملف APK الجديد وثبّتوه فوق هذا. إعداداتكم تبقى كما هي.', download: 'تنزيل', later: 'لاحقاً',
    howToTitle: 'طريقة اللعب',
    howToSteps: [
      ['البداية', 'يحصل كل لاعب على دور سري واسم سري من القضية. القتلة يعرفون أسماءهم ويرون قائمة كل الأسماء في اللعبة، ومعها بعض الأسماء الخادعة.'],
      ['النقاش', 'تبدأ كل جولة بحدث من القصة، ودليل صحيح عن اسم أحد القتلة، وسؤال يجيب عنه الجميع. جادلوا واتهموا ودافعوا عن أنفسكم. لا تقولوا أسماءكم السرية أبداً.'],
      ['حجج الغياب', 'كل ليلة تكون في مكان ما مع آخرين. إذا كتب قاتل اسماً، قد يرى شاهد أحدهم يتسلل من مكانه، ويذكر تقرير الصباح أين.'],
      ['الدور السري', 'يمرّ الهاتف على الجميع. الكل يصوّت. يكتب القتلة اسماً سرياً بجانب لاعب: إن طابق، يموت ذلك اللاعب. ويفتح المحقق قضية ويعرف دوراً بعد بضع جولات.'],
      ['الفوز', 'من يحصل على أعلى الأصوات جولات متتالية كافية يُطرد. تفوز المدينة عندما يرحل كل القتلة. ويفوز القتلة عندما يساوون الباقين أو يزيدون عليهم.']
    ]
  }
};

// Letters are folded the same way the rules fold them, so show every spelling the clue covers.
const AR_LETTER = { 'ا': 'ا / أ / إ / آ', 'ه': 'ه / ة', 'ي': 'ي / ى' };
function clueText(lang, key, two) {
  const i = key.indexOf(':'), k = key.slice(0, i), v = key.slice(i + 1);
  if (lang === 'ar') {
    const who = two ? 'اسم أحد القتلة' : 'اسم القاتل', L = `«${AR_LETTER[v] || v}»`;
    return who + ' ' + ({
      has: `فيه حرف ${L}`, start: `يبدأ بحرف ${L}`, end: `ينتهي بحرف ${L}`,
      words: v === '1' ? 'كلمة واحدة' : 'أكثر من كلمة',
      longer: `أطول من ${v} أحرف`, atmost: `من ${v} أحرف أو أقل`
    })[k] + '.';
  }
  const who = two ? 'One killer’s name' : 'The killer’s name', L = `“${v.toUpperCase()}”`;
  return who + ' ' + ({
    has: `has the letter ${L} in it`, start: `starts with the letter ${L}`, end: `ends with the letter ${L}`,
    words: v === '1' ? 'is a single word' : 'is more than one word',
    longer: `is longer than ${v} letters`, atmost: `is ${v} letters or shorter`
  })[k] + '.';
}
