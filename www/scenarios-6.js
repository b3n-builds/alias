// Fantasy cases, part two: the sea and the gothic dark.
Object.assign(SCENARIOS_DATA, {
  sunkenbell: {
    level: 'Medium', world: 'fantasy',
    look: { bg: '#081a1f', surface: '#0e252c', rule: '#1f4651', fg: '#e6f7f8', dim: '#93b8bc', accent: '#4fd1c5', onAccent: '#081a1f', danger: '#ff6b6b', good: '#8fe0b0', paper: 'card', texture: 'waves', display: 'Marcellus', displayAr: 'Reem Kufi', body: 'Alegreya Sans' },
    emblem: '<path d="M40 84c0-28 6-44 20-44s20 16 20 44zM34 84h52"/><circle cx="60" cy="92" r="5"/><path d="M14 24c8-6 16 6 24 0s16 6 24 0 16 6 24 0 16 6 24 0"/>',
    en: {
      title: 'The Sunken Bell', hook: 'A city under a glass dome at the bottom of the sea. Divers are drowning in rooms with no water in them.',
      intro: 'Beneath the sea lies a city under a dome of glass, and at its centre hangs a great bell that rings whenever the dome cracks. The divers who keep the city alive go by sea names. Tonight the bell rang with no crack anywhere, and since then divers have been found drowned in rooms full of dry air.',
      death: 'was found drowned on a dry floor, seawater in the lungs.', quiet: 'The bell stayed silent and the dome held all night.', listLabel: 'Diver names on the airlock log',
      names: ['Coral', 'Pearl', 'Kelp', 'Urchin', 'Nautilus', 'Abalone', 'Anemone', 'Barnacle', 'Conch', 'Eel', 'Lamprey', 'Mussel', 'Oyster', 'Ray', 'Shrimp', 'Starfish', 'Whelk', 'Cuttle'],
      places: ['the Glass Dome', 'the Bell Tower', 'the Pump House', 'the Kelp Farm', 'the Airlock', 'the Pearl Market', 'the Drowned Chapel'],
      beats: ['The great bell rang once at midnight. The dome has no crack anywhere.', 'Footprints of seawater lead from the airlock to a dry bedroom.', 'Someone has been opening the pump house valves a quarter turn at a time.', 'A pearl seller swears she sold a black pearl to a diver who doesn’t exist.', 'The kelp farm is dying from the roots up, and the roots smell of lamp oil.', 'Something knocked on the outside of the dome. Three knocks, then a name.']
    },
    ar: {
      title: 'الجرس الغارق', hook: 'مدينة تحت قبة زجاجية في قاع البحر. يغرق الغواصون في غرف لا ماء فيها.',
      intro: 'تحت البحر تقوم مدينة تحت قبة من زجاج، وفي وسطها جرس عظيم يرن كلما تشققت القبة. يُعرف الغواصون الذين يبقون المدينة حية بأسماء بحرية. الليلة رن الجرس ولا شق في أي مكان، ومنذ ذلك الحين يُعثر على غواصين غرقى في غرف مليئة بالهواء الجاف.',
      death: 'وُجد غريقاً على أرض جافة، وماء البحر في رئتيه.', quiet: 'بقي الجرس صامتاً وصمدت القبة طوال الليل.', listLabel: 'أسماء الغواصين في سجل غرفة الضغط',
      names: ['مرجان', 'لؤلؤة', 'عشب البحر', 'قنفذ البحر', 'نوتي', 'أذن البحر', 'شقائق النعمان', 'برنقيل', 'محارة', 'أنقليس', 'جلكى', 'بلح البحر', 'استريدية', 'لخمة', 'جمبري', 'نجم البحر', 'حلزون البحر', 'حبار'],
      places: ['القبة الزجاجية', 'برج الجرس', 'بيت المضخات', 'مزرعة الأعشاب', 'غرفة الضغط', 'سوق اللؤلؤ', 'الكنيسة الغارقة'],
      beats: ['رن الجرس العظيم مرة عند منتصف الليل. ولا شق في القبة.', 'آثار أقدام من ماء البحر تمتد من غرفة الضغط إلى غرفة نوم جافة.', 'أحدهم يفتح صمامات بيت المضخات ربع دورة في كل مرة.', 'تقسم بائعة لؤلؤ إنها باعت لؤلؤة سوداء لغواص لا وجود له.', 'مزرعة الأعشاب تموت من الجذور، والجذور رائحتها زيت مصابيح.', 'طرق شيء على القبة من الخارج. ثلاث طرقات، ثم اسم.']
    }
  },

  lastlight: {
    level: 'Medium', world: 'fantasy',
    look: { bg: '#0c1218', surface: '#131c24', rule: '#2a3a48', fg: '#eef3f7', dim: '#9fb0bf', accent: '#ffd166', onAccent: '#0c1218', danger: '#ff6b6b', good: '#8fe0b0', paper: 'notebook', texture: 'rain', display: 'Playfair Display', displayAr: 'Amiri', body: 'Alegreya' },
    emblem: '<path d="M48 108l4-64h16l4 64zM46 44h28l-4-14H50z"/><path d="M74 36l30-10M74 40l30 10"/>',
    en: {
      title: 'The Last Lighthouse', hook: 'A lighthouse at the edge of the world. Keepers are dying with salt in their eyes, and the light must not go out.',
      intro: 'At the edge of the world, where the sea pours off into the dark, one lighthouse keeps the last ships from falling. Its keepers give up their names to the sea when they arrive and take a new one. Something has been climbing out of the water at night, and keepers are being found at the foot of the spiral stair with salt in their eyes.',
      death: 'was found at the foot of the spiral stair, salt crusted in their eyes.', quiet: 'The light turned all night and every keeper climbed down at dawn.', listLabel: 'Sea names in the keepers’ log',
      names: ['Wick', 'Lens', 'Beacon', 'Gale', 'Brine', 'Tide', 'Fathom', 'Spray', 'Shoal', 'Foghorn', 'Lamp', 'Reef', 'Undertow', 'Driftwood', 'Gull', 'Saltmarsh', 'Kelpie', 'Cove'],
      places: ['the Lamp Room', 'the Oil Store', 'the Spiral Stair', 'the Keepers’ Kitchen', 'the Boat Landing', 'the Bell Rock', 'the Logbook Desk'],
      beats: ['The great lamp went dark for one minute at midnight. Every keeper swears they were asleep.', 'Wet footprints climb the spiral stair from the sea and stop at a keeper’s door.', 'The oil store is short a whole barrel.', 'The logbook has a new line in a hand nobody recognises: one of you is not from here.', 'A ship’s bell washed up on the rock, engraved with one of your sea names.', 'The boat at the landing was untied in the night and pushed toward the edge.']
    },
    ar: {
      title: 'المنارة الأخيرة', hook: 'منارة عند حافة العالم. يموت الحراس والملح في عيونهم، والضوء يجب ألا ينطفئ.',
      intro: 'عند حافة العالم، حيث ينسكب البحر في الظلام، تحمي منارة واحدة آخر السفن من السقوط. يهب حراسها أسماءهم للبحر عند وصولهم ويأخذون اسماً جديداً. شيء ما يتسلق من الماء ليلاً، ويُعثر على الحراس أسفل الدرج الحلزوني والملح متكلس في عيونهم.',
      death: 'وُجد أسفل الدرج الحلزوني والملح متكلس في عينيه.', quiet: 'دار الضوء طوال الليل ونزل كل الحراس عند الفجر.', listLabel: 'الأسماء البحرية في سجل الحراس',
      names: ['فتيل', 'عدسة', 'منارة', 'عاصفة', 'ماء مالح', 'مد', 'قامة', 'رذاذ', 'ضحضاح', 'بوق الضباب', 'مصباح', 'شعاب', 'تيار سفلي', 'خشب طافٍ', 'نورس', 'سبخة', 'جنية الماء', 'خليج صغير'],
      places: ['غرفة المصباح', 'مخزن الزيت', 'الدرج الحلزوني', 'مطبخ الحراس', 'مرسى القوارب', 'صخرة الجرس', 'مكتب السجل'],
      beats: ['انطفأ المصباح العظيم دقيقة واحدة عند منتصف الليل. يقسم كل حارس إنه كان نائماً.', 'آثار أقدام مبتلة تصعد الدرج الحلزوني من البحر وتتوقف عند باب أحد الحراس.', 'ينقص مخزن الزيت برميل كامل.', 'في السجل سطر جديد بخط لا يعرفه أحد: أحدكم ليس من هنا.', 'جرف الموج جرس سفينة إلى الصخرة، منقوش عليه أحد أسمائكم البحرية.', 'فُكّ القارب عند المرسى ليلاً ودُفع نحو الحافة.']
    }
  },

  leviathan: {
    level: 'Medium', world: 'fantasy',
    look: { bg: '#0d151c', surface: '#14202a', rule: '#2a4052', fg: '#e9f1f6', dim: '#9db1c0', accent: '#6ec1e4', onAccent: '#0d151c', danger: '#ff6b6b', good: '#8fe0b0', paper: 'manila', texture: 'waves', display: 'Pirata One', displayAr: 'Lalezar', body: 'Alegreya' },
    emblem: '<path d="M60 108V60M60 60C40 50 22 52 14 40c18 0 34 4 46 20 12-16 28-20 46-20-8 12-26 10-46 20z"/>',
    en: {
      title: 'The Leviathan', hook: 'A town on the back of a sea beast that must never dive. Every death makes it shudder.',
      intro: 'A whole town lives on the back of the Leviathan, a beast so vast it has carried them across the ocean for generations. If it dives, they all drown, so it must never be woken. Townsfolk go by trade names. Lately people have been found dead at the blowhole, and each time the beast shudders beneath them. Somebody wants it to dive.',
      death: 'was found at the blowhole, and the whole town felt the beast shudder.', quiet: 'The Leviathan swam calm all night, and nobody was missing.', listLabel: 'Trade names on the spine market board',
      names: ['Harpoon', 'Blubber', 'Spout', 'Fluke', 'Baleen', 'Krill', 'Scrimshaw', 'Tallow', 'Ambergris', 'Flense', 'Marrow', 'Gaff', 'Brinehook', 'Oilcan', 'Netter', 'Hulk', 'Ballast', 'Plank'],
      places: ['the Spine Market', 'the Blowhole', 'the Rib Docks', 'the Oil Works', 'the Eye Temple', 'the Tail Pens', 'the Salt Baths'],
      beats: ['The beast shuddered at dawn and every bell in town rang by itself.', 'Someone poured oil into the blowhole. The beast is coughing.', 'A harpoon was found buried in the beast’s spine, near the market.', 'The priests at the eye temple say the great eye opened and looked at one house.', 'The tail pens were left open. The goats are gone.', 'A map was found showing the deep trench where the beast would dive, marked in blood.']
    },
    ar: {
      title: 'الحوت الأعظم', hook: 'بلدة على ظهر وحش بحري يجب ألا يغوص أبداً. كل موت يجعله يرتجف.',
      intro: 'تعيش بلدة كاملة على ظهر الحوت الأعظم، وحش هائل حملهم عبر المحيط أجيالاً. إن غاص غرقوا جميعاً، فلا يجب أن يستيقظ أبداً. يُعرف أهل البلدة بأسماء حرفهم. مؤخراً يُعثر على موتى عند فتحة النفث، وكل مرة يرتجف الوحش تحتهم. أحدهم يريده أن يغوص.',
      death: 'وُجد عند فتحة النفث، وشعرت البلدة كلها بارتجاف الوحش.', quiet: 'سبح الحوت هادئاً طوال الليل، ولم يُفقد أحد.', listLabel: 'أسماء الحرف على لوح سوق العمود الفقري',
      names: ['حربة', 'شحم', 'نافورة', 'زعنفة', 'بلين', 'كريل', 'نقش العظم', 'شمع حيواني', 'عنبر', 'سلاخ', 'نخاع', 'كلاب صيد', 'خطاف الملح', 'علبة الزيت', 'صائد الشباك', 'هيكل', 'صابورة', 'لوح'],
      places: ['سوق العمود الفقري', 'فتحة النفث', 'أرصفة الأضلاع', 'معمل الزيت', 'معبد العين', 'حظائر الذيل', 'حمامات الملح'],
      beats: ['ارتجف الوحش عند الفجر ورنت كل أجراس البلدة وحدها.', 'صب أحدهم زيتاً في فتحة النفث. الوحش يسعل.', 'وُجدت حربة مغروسة في عمود الوحش الفقري، قرب السوق.', 'يقول كهنة معبد العين إن العين العظيمة انفتحت ونظرت إلى بيت بعينه.', 'تُركت حظائر الذيل مفتوحة. اختفت الماعز.', 'وُجدت خريطة تُظهر الخندق العميق حيث سيغوص الوحش، معلّمة بالدم.']
    }
  },

  serpentharbor: {
    level: 'Hard', world: 'fantasy',
    look: { bg: '#0b1512', surface: '#11201b', rule: '#244036', fg: '#e7f5ef', dim: '#97b8aa', accent: '#3fd18c', onAccent: '#0b1512', danger: '#ff5f5f', good: '#9ad6ff', paper: 'manila', texture: 'waves', display: 'Pirata One', displayAr: 'Rakkas', body: 'IBM Plex Mono' },
    emblem: '<path d="M14 80c10-20 24-20 30 0s20 20 30 0 20-20 30 0"/><circle cx="102" cy="74" r="3"/>',
    en: {
      title: 'Serpent’s Harbour', hook: 'A port of sea-serpent hunters with names a letter apart. Hunters die of venom, but no serpent has come in.',
      intro: 'Serpent’s Harbour lives and dies by the hunt for the great sea serpents, and its hunters take names from the beasts they kill. The names have been handed down so often that half of them now differ by a letter. Someone is killing hunters with serpent venom, and no serpent has come into the bay in a month.',
      death: 'was found on the pier, swollen black with serpent venom.', quiet: 'The bay was still all night and every hunter came to the morning tally.', listLabel: 'Hunter names on the harbour roll',
      names: ['Coil', 'Coyle', 'Fang', 'Fane', 'Scales', 'Scale', 'Hiss', 'Hess', 'Venom', 'Venon', 'Brine', 'Brina', 'Slither', 'Slather', 'Moray', 'Morey', 'Tidewyrm', 'Tidewurm'],
      places: ['the Hunters’ Pier', 'the Harpoon Forge', 'the Rope Walk', 'the Serpent Bones', 'the Harbour Master’s Office', 'the Fish Market', 'the Breakwater'],
      beats: ['A serpent’s fang was found in a hunter’s boot.', 'The harbour ledger has two hunters signed in under nearly the same name.', 'Venom was stolen from the harpoon forge, where it is kept for the tips.', 'A hunter swears they saw a serpent at the breakwater. Nobody else did.', 'The serpent bones on the pier were rearranged into a letter.', 'Someone bought every antidote in the fish market at dawn.']
    },
    ar: {
      title: 'ميناء الأفعى', hook: 'ميناء صيادي ثعابين البحر بأسماء يفرقها حرف. يموت الصيادون بالسم، ولم يدخل ثعبان واحد.',
      intro: 'يعيش ميناء الأفعى ويموت بصيد ثعابين البحر العظيمة، ويأخذ صيادوه أسماءهم من الوحوش التي يقتلونها. تناقلوا الأسماء مرات كثيرة حتى صار نصفها لا يفرقه إلا حرف. أحدهم يقتل الصيادين بسم الثعابين، ولم يدخل ثعبان واحد الخليج منذ شهر.',
      death: 'وُجد على الرصيف، منتفخاً أسود من سم الثعبان.', quiet: 'كان الخليج ساكناً طوال الليل وحضر كل صياد إحصاء الصباح.', listLabel: 'أسماء الصيادين في سجل الميناء',
      names: ['لفة', 'لفيفة', 'ناب', 'نابة', 'حراشف', 'حرشفة', 'فحيح', 'فحيحة', 'سم', 'سموم', 'ملح', 'ملحة', 'زحاف', 'زحافة', 'موراي', 'موري', 'تنين المد', 'تنين الموج'],
      places: ['رصيف الصيادين', 'مسبك الحراب', 'ممشى الحبال', 'عظام الثعبان', 'مكتب مدير الميناء', 'سوق السمك', 'حاجز الأمواج'],
      beats: ['وُجد ناب ثعبان في حذاء أحد الصيادين.', 'في سجل الميناء صيادان مسجلان باسمين متطابقين تقريباً.', 'سُرق سم من مسبك الحراب، حيث يُحفظ لرؤوسها.', 'يقسم صياد إنه رأى ثعباناً عند حاجز الأمواج. لم يره غيره.', 'رُتبت عظام الثعبان على الرصيف على شكل حرف.', 'اشترى أحدهم كل الترياق في سوق السمك عند الفجر.']
    }
  },

  cloudmonks: {
    level: 'Easy', world: 'fantasy',
    look: { bg: '#14161c', surface: '#1c1f27', rule: '#373c4a', fg: '#f2f3f7', dim: '#aab0bf', accent: '#e8d8a8', onAccent: '#14161c', danger: '#ff6b6b', good: '#8fe0b0', paper: 'papyrus', texture: 'snow', display: 'Marcellus', displayAr: 'Amiri', body: 'Alegreya' },
    emblem: '<path d="M44 70c0-22 6-34 16-34s16 12 16 34zM40 70h40"/><path d="M14 96c6-10 18-10 22 0 6-8 16-8 20 0M64 96c6-10 18-10 22 0 6-8 16-8 20 0"/>',
    en: {
      title: 'The Monastery Above the Clouds', hook: 'A monastery above the clouds, cut off from the world. Monks are falling from the bell ledge in silence.',
      intro: 'The monastery clings to a peak so high that clouds pass beneath its windows, and the only way up is a basket on a rope. Every monk takes a vow name and keeps silent after dusk. The rope was cut three nights ago. Now monks are being found at the bottom of the bell ledge, and no one has said a word.',
      death: 'was found at the foot of the bell ledge, prayer beads scattered.', quiet: 'Every monk filed into the dawn prayer, silent and whole.', listLabel: 'Vow names in the prayer book',
      names: ['Brother Silence', 'Sister Patience', 'Brother Ember', 'Sister Snow', 'Brother Stone', 'Sister Wind', 'Brother Bell', 'Sister Ink', 'Brother Bread', 'Sister Thread', 'Brother Candle', 'Sister Salt', 'Brother Rain', 'Sister Ivy', 'Brother Ash', 'Sister Dawn', 'Brother Clay', 'Sister Moth'],
      places: ['the Prayer Hall', 'the Scriptorium', 'the Bell Ledge', 'the Rope Bridge', 'the Herb Garden', 'the Abbot’s Cell', 'the Bread Oven'],
      beats: ['The rope basket was cut three nights ago, cleanly, with a knife.', 'Someone rang the great bell at midnight, breaking the silence.', 'The scriptorium copy of the rule book has a page glued shut.', 'Bread from the oven came out with a word baked into the crust.', 'The abbot’s cell was found empty, and his sandals were on the bell ledge.', 'The bed of sleeping-root in the herb garden was dug up and replanted.']
    },
    ar: {
      title: 'الدير فوق الغيوم', hook: 'دير فوق الغيوم معزول عن العالم. يسقط الرهبان من حافة الجرس في صمت.',
      intro: 'يتشبث الدير بقمة عالية حتى إن الغيوم تمر تحت نوافذه، والطريق الوحيد إليه سلة على حبل. يأخذ كل راهب اسم نذر ويلزم الصمت بعد الغسق. قُطع الحبل قبل ثلاث ليال. والآن يُعثر على رهبان أسفل حافة الجرس، ولم ينطق أحد بكلمة.',
      death: 'وُجد أسفل حافة الجرس، وحبات مسبحته متناثرة.', quiet: 'دخل كل الرهبان صلاة الفجر، صامتين سالمين.', listLabel: 'أسماء النذر في كتاب الصلاة',
      names: ['الأخ صمت', 'الأخت صبر', 'الأخ جمرة', 'الأخت ثلج', 'الأخ حجر', 'الأخت ريح', 'الأخ جرس', 'الأخت حبر', 'الأخ خبز', 'الأخت خيط', 'الأخ شمعة', 'الأخت ملح', 'الأخ مطر', 'الأخت لبلاب', 'الأخ رماد', 'الأخت فجر', 'الأخ طين', 'الأخت عثة'],
      places: ['قاعة الصلاة', 'غرفة النسخ', 'حافة الجرس', 'جسر الحبال', 'حديقة الأعشاب', 'صومعة رئيس الدير', 'فرن الخبز'],
      beats: ['قُطعت سلة الحبل قبل ثلاث ليال، قطعاً نظيفاً بسكين.', 'قرع أحدهم الجرس العظيم عند منتصف الليل، فكسر الصمت.', 'نسخة كتاب القواعد في غرفة النسخ فيها صفحة ملصوقة.', 'خرج خبز من الفرن وعلى قشرته كلمة مخبوزة.', 'وُجدت صومعة رئيس الدير خالية، ونعلاه على حافة الجرس.', 'حُفر حوض جذر النوم في حديقة الأعشاب ثم أعيدت زراعته.']
    }
  },

  crimsonball: {
    level: 'Hard', world: 'fantasy',
    look: { bg: '#16080c', surface: '#220d13', rule: '#4a1a26', fg: '#fbe9ee', dim: '#c99aa6', accent: '#e0294a', onAccent: '#fbe9ee', danger: '#ff8a5c', good: '#8fd29a', paper: 'card', texture: 'diamonds', display: 'Playfair Display', displayAr: 'Aref Ruqaa', body: 'Alegreya' },
    emblem: '<path d="M14 50c14-6 30-6 46 6 16-12 32-12 46-6-4 22-22 30-46 14-24 16-42 8-46-14z"/><path d="M60 64v30"/>',
    en: {
      title: 'The Crimson Ball', hook: 'A masked ball in a vampire’s castle. Guests are drained behind the curtains, and the masks are almost the same.',
      intro: 'Once a century the Countess opens her castle for the Crimson Ball, and every guest must come masked and leave their name at the door. Some guests are not entirely alive. Before the dawn bell, guests are being found pale and drained behind the curtains, two small marks on the neck. The masks are nearly identical. So, it seems, are the guests.',
      death: 'was found pale and drained behind a curtain, two small marks on the neck.', quiet: 'The music played until dawn and every mask was counted at the door.', listLabel: 'Masks on the guest list',
      names: ['Rose', 'Rosa', 'Bat', 'Cat', 'Swan', 'Swain', 'Moth', 'Moth Veil', 'Fox', 'Fog', 'Lily', 'Lilly', 'Raven', 'Ravel', 'Crow', 'Crown', 'Doll', 'Dove'],
      places: ['the Ballroom', 'the Wine Cellar', 'the Portrait Gallery', 'the Conservatory', 'the Crypt', 'the Balcony', 'the Hall of Mirrors'],
      beats: ['The Countess has not been seen since the first dance. Her portrait’s eyes are open now.', 'The wine in the cellar is not all wine.', 'The hall of mirrors shows one guest fewer than the ballroom holds.', 'A guest’s mask was found in the crypt, still warm.', 'Someone closed every curtain on the balcony an hour before dawn.', 'The musicians say a guest asked for a funeral waltz by name.']
    },
    ar: {
      title: 'الحفل القرمزي', hook: 'حفل مقنّع في قلعة مصاص دماء. يُستنزف الضيوف خلف الستائر، والأقنعة شبه متطابقة.',
      intro: 'مرة كل قرن تفتح الكونتيسة قلعتها للحفل القرمزي، وعلى كل ضيف أن يأتي مقنّعاً ويترك اسمه عند الباب. بعض الضيوف ليسوا أحياء تماماً. قبل جرس الفجر يُعثر على ضيوف شاحبين مستنزفين خلف الستائر، وعلى العنق علامتان صغيرتان. الأقنعة متطابقة تقريباً. وكذلك الضيوف، على ما يبدو.',
      death: 'وُجد شاحباً مستنزفاً خلف ستارة، وعلى عنقه علامتان صغيرتان.', quiet: 'عزفت الموسيقى حتى الفجر وعُدّ كل قناع عند الباب.', listLabel: 'الأقنعة في قائمة الضيوف',
      names: ['قناع الوردة', 'قناع الورد', 'قناع الخفاش', 'قناع القطة', 'قناع البجعة', 'قناع البجع', 'قناع العثة', 'وشاح العثة', 'قناع الثعلب', 'قناع الضباب', 'قناع الزنبقة', 'قناع الزنبق', 'قناع الغراب', 'قناع الغربان', 'وشاح الغراب', 'وشاح التاج', 'قناع الدمية', 'قناع اليمامة'],
      places: ['قاعة الرقص', 'قبو النبيذ', 'رواق اللوحات', 'البيت الزجاجي', 'السرداب', 'الشرفة', 'قاعة المرايا'],
      beats: ['لم تُرَ الكونتيسة منذ الرقصة الأولى. وعينا لوحتها مفتوحتان الآن.', 'ليس كل ما في قبو النبيذ نبيذاً.', 'تُظهر قاعة المرايا ضيفاً أقل مما تضمه قاعة الرقص.', 'وُجد قناع ضيف في السرداب، ولا يزال دافئاً.', 'أغلق أحدهم كل ستائر الشرفة قبل الفجر بساعة.', 'يقول العازفون إن ضيفاً طلب رقصة جنائزية بالاسم.']
    }
  },

  hollowcoven: {
    level: 'Medium', world: 'fantasy',
    look: { bg: '#0f1410', surface: '#161d17', rule: '#2e3d30', fg: '#eaf3e8', dim: '#a0b39c', accent: '#a3d977', onAccent: '#0f1410', danger: '#ff6b6b', good: '#e0c97a', paper: 'parchment', texture: 'stars', display: 'Cabin Sketch', displayAr: 'Lalezar', body: 'Alegreya' },
    emblem: '<path d="M28 60h64c0 26-14 40-32 40S28 86 28 60zM36 100l-6 10M84 100l6 10"/><path d="M72 18a14 14 0 1 0 12 22 12 12 0 1 1-12-22z"/>',
    en: {
      title: 'The Hollow Coven', hook: 'A witches’ coven where true names are power. One witch is using them against the rest.',
      intro: 'Deep in the hills, the Hollow Coven meets at the dark of every moon. Witches never share their true names, for a true name gives power over its owner; they go by the plants of their craft. One of the coven has turned on the rest. Witches are found under the standing stones with their own herbs stuffed in their mouths.',
      death: 'was found beneath the standing stones, mouth full of their own herbs.', quiet: 'The cauldron bubbled all night and every witch came to the dawn circle.', listLabel: 'Craft names in the coven book',
      names: ['Nightshade', 'Hemlock', 'Mandrake', 'Foxglove', 'Wormwood', 'Henbane', 'Belladonna', 'Yarrow', 'Rue', 'Mugwort', 'Vervain', 'Tansy', 'Briony', 'Elder', 'Angelica', 'Comfrey', 'Valerian', 'Hyssop'],
      places: ['the Cauldron Hollow', 'the Standing Stones', 'the Herb Shed', 'the Black Pond', 'the Familiar Barn', 'the Grimoire Loft', 'the Crossroads'],
      beats: ['The coven book was found open at the page on binding names.', 'A familiar crow refused to land on one witch’s shoulder.', 'The black pond was full of salt this morning.', 'Someone left a hemlock doll at the crossroads with a craft name pinned to it.', 'The cauldron boiled over with no fire beneath it.', 'One witch’s broom was found snapped across the standing stones.']
    },
    ar: {
      title: 'المحفل الأجوف', hook: 'محفل ساحرات تمنح فيه الأسماء الحقيقية القوة. ساحرة واحدة تستخدمها ضد البقية.',
      intro: 'في عمق التلال يجتمع المحفل الأجوف في ظلام كل قمر. لا تبوح الساحرات بأسمائهن الحقيقية أبداً، فالاسم الحقيقي يمنح السلطة على صاحبه، ويُعرفن بنباتات حرفتهن. انقلبت إحداهن على البقية. يُعثر على ساحرات تحت الأحجار القائمة وأفواههن محشوة بأعشابهن.',
      death: 'وُجدت تحت الأحجار القائمة، وفمها محشو بأعشابها.', quiet: 'غلى المرجل طوال الليل وحضرت كل ساحرة حلقة الفجر.', listLabel: 'أسماء الحرفة في كتاب المحفل',
      names: ['ست الحسن', 'شوكران', 'لفاح', 'قفاز الثعلب', 'شيح', 'بنج', 'بلادونا', 'أخيليا', 'سذاب', 'أرطماسيا', 'رعي الحمام', 'حشيشة الدود', 'فاشرا', 'خمان', 'حشيشة الملاك', 'سنفيتون', 'ناردين', 'زوفا'],
      places: ['تجويف المرجل', 'الأحجار القائمة', 'سقيفة الأعشاب', 'البركة السوداء', 'حظيرة الرفاق', 'علية الكتب السحرية', 'مفترق الطرق'],
      beats: ['وُجد كتاب المحفل مفتوحاً على صفحة ربط الأسماء.', 'رفض غراب رفيق أن يحط على كتف ساحرة بعينها.', 'امتلأت البركة السوداء بالملح هذا الصباح.', 'تركت إحداهن دمية من الشوكران عند مفترق الطرق وعليها اسم حرفة.', 'فار المرجل ولا نار تحته.', 'وُجدت مكنسة ساحرة مكسورة فوق الأحجار القائمة.']
    }
  },

  mourningtide: {
    level: 'Medium', world: 'fantasy',
    look: { bg: '#0e1114', surface: '#151a1f', rule: '#2d3640', fg: '#e8eef2', dim: '#9aa7b2', accent: '#9fd3c7', onAccent: '#0e1114', danger: '#ff6b6b', good: '#e0c97a', paper: 'notebook', texture: 'rain', display: 'Pirata One', displayAr: 'Rakkas', body: 'Courier Prime' },
    emblem: '<path d="M18 80h84L90 98H30z"/><path d="M60 80V18M60 22l30 30H60M60 30L34 56h26"/>',
    en: {
      title: 'The Mourning Tide', hook: 'A ghost ship whose crew cannot die. Something aboard is unmaking them anyway.',
      intro: 'The Mourning Tide has sailed the fog for two hundred years with a crew of the drowned, who cannot die again. Or so they thought. Something aboard has learned how to finish what the sea started, and crew members are fading into mist one by one. Sailors here go by the names the sea gave them, and one of them is not as dead as the rest.',
      death: 'faded into the fog at the rail, leaving only a wet coat.', quiet: 'Every ghost answered the midnight bell.', listLabel: 'Names carved on the mast',
      names: ['the Drowned Mate', 'Pale Jack', 'Old Barnacle', 'Salt Annie', 'the Fiddler', 'Crooked Tom', 'Lantern Meg', 'the Bosun’s Ghost', 'Silent Pete', 'Rope Neck', 'Grey Molly', 'Bilge Rat', 'One-Eye Sal', 'the Cabin Girl', 'Weeping Will', 'Iron Kate', 'Dead Calm', 'Tar Hands'],
      places: ['the Quarterdeck', 'the Bilges', 'the Crow’s Nest', 'the Galley', 'the Brig', 'the Captain’s Cabin', 'the Figurehead'],
      beats: ['The ship’s bell rang thirteen times at midnight.', 'Footprints of a living sailor were found on deck. None of you have living feet.', 'The figurehead has turned its head toward the quarterdeck.', 'Someone scattered salt in the bilges. Ghosts cannot cross salt.', 'The captain’s log writes new lines by itself, in a hand that matches one of yours.', 'A foghorn sounded from a ship that isn’t there.']
    },
    ar: {
      title: 'مد الحداد', hook: 'سفينة أشباح لا يموت طاقمها. شيء على متنها يمحوهم رغم ذلك.',
      intro: 'تبحر سفينة مد الحداد في الضباب منذ مئتي عام بطاقم من الغرقى، لا يموتون مرة أخرى. أو هكذا ظنوا. شيء على متنها تعلّم كيف يُتم ما بدأه البحر، والبحارة يتلاشون في الضباب واحداً تلو الآخر. يُعرف البحارة هنا بالأسماء التي منحهم إياها البحر، وأحدهم ليس ميتاً مثل البقية.',
      death: 'تلاشى في الضباب عند الحاجز، ولم يترك إلا معطفاً مبتلاً.', quiet: 'أجاب كل شبح جرس منتصف الليل.', listLabel: 'الأسماء المنقوشة على الصاري',
      names: ['الرفيق الغريق', 'جاك الشاحب', 'العجوز برنقيل', 'آني المالحة', 'عازف الكمان', 'توم الأعوج', 'ميغ الفانوس', 'شبح رئيس البحارة', 'بيت الصامت', 'رقبة الحبل', 'مولي الرمادية', 'جرذ القاع', 'سال العوراء', 'فتاة المقصورة', 'ويل الباكي', 'كيت الحديدية', 'السكون الميت', 'أيدي القار'],
      places: ['سطح المؤخرة', 'قاع السفينة', 'عش الغراب', 'المطبخ', 'السجن', 'مقصورة القبطان', 'تمثال المقدمة'],
      beats: ['رن جرس السفينة ثلاث عشرة مرة عند منتصف الليل.', 'وُجدت آثار أقدام بحار حي على السطح. لا أحد منكم له قدمان حيتان.', 'أدار تمثال المقدمة رأسه نحو سطح المؤخرة.', 'نثر أحدهم ملحاً في قاع السفينة. الأشباح لا تعبر الملح.', 'يكتب سجل القبطان أسطراً جديدة وحده، بخط يطابق خط أحدكم.', 'دوّى بوق ضباب من سفينة غير موجودة.']
    }
  },

  blackthorn: {
    level: 'Easy', world: 'fantasy',
    look: { bg: '#121010', surface: '#1b1717', rule: '#3a3131', fg: '#f1ebe6', dim: '#b0a49b', accent: '#d9d2c5', onAccent: '#121010', danger: '#e04848', good: '#8fd29a', paper: 'manila', texture: 'snow', display: 'Special Elite', displayAr: 'Reem Kufi', body: 'Alegreya' },
    emblem: '<circle cx="60" cy="46" r="30"/><path d="M30 110l14-34 8 10 8-18 8 18 8-10 14 34"/>',
    en: {
      title: 'Blackthorn Village', hook: 'A cursed village where a wolf walks out of the forest every full moon. This month, the moon won’t wane.',
      intro: 'Blackthorn has been cursed since the witch was burned on the green. Every full moon a wolf walks out of the forest, and someone does not wake. The villagers stopped using names long ago, believing the curse can hear them; they go by their trades. This month the moon has been full for seven nights in a row.',
      death: 'was found torn on the doorstep, wolf tracks leading back to the forest.', quiet: 'The wolf howled from the forest but never came out.', listLabel: 'Trades on the parish roll',
      names: ['the Miller', 'the Baker', 'the Smith', 'the Weaver', 'the Shepherd', 'the Innkeeper', 'the Woodcutter', 'the Midwife', 'the Tanner', 'the Priest', 'the Fletcher', 'the Cooper', 'the Herbalist', 'the Gravedigger', 'the Thatcher', 'the Potter', 'the Brewer', 'the Hunter'],
      places: ['the Village Green', 'the Mill', 'the Church', 'the Inn', 'the Sheepfold', 'the Well', 'the Forest Edge'],
      beats: ['The witch’s ashes on the green were found swept into a perfect circle.', 'The mill wheel turned all night, though the river is frozen.', 'The church bell rope was greased so no one could ring it.', 'Wolf tracks lead out of the forest, into the inn, and back out again.', 'A silver spoon is missing from every house in the village.', 'The sheep in the fold were found standing in a ring, facing inward.']
    },
    ar: {
      title: 'قرية الشوك الأسود', hook: 'قرية ملعونة يخرج فيها ذئب من الغابة كل بدر. هذا الشهر لا يريد القمر أن ينقص.',
      intro: 'القرية ملعونة منذ أُحرقت الساحرة في الساحة. كل بدر يخرج ذئب من الغابة، ولا يستيقظ أحدهم. توقف القرويون عن استعمال الأسماء منذ زمن، معتقدين أن اللعنة تسمعها، ويُعرفون بحرفهم. هذا الشهر بقي القمر بدراً سبع ليال متتالية.',
      death: 'وُجد ممزقاً على عتبة بابه، وآثار الذئب تعود إلى الغابة.', quiet: 'عوى الذئب من الغابة لكنه لم يخرج.', listLabel: 'الحرف في سجل الأبرشية',
      names: ['الطحان', 'الخباز', 'الحداد', 'الحائك', 'الراعي', 'صاحب النزل', 'الحطاب', 'القابلة', 'الدباغ', 'الكاهن', 'صانع السهام', 'صانع البراميل', 'العشاب', 'حفار القبور', 'مسقف البيوت', 'الفخاري', 'صانع الجعة', 'الصياد'],
      places: ['ساحة القرية', 'الطاحونة', 'الكنيسة', 'النزل', 'حظيرة الغنم', 'البئر', 'حافة الغابة'],
      beats: ['وُجد رماد الساحرة في الساحة مكنوساً في دائرة كاملة.', 'دار دولاب الطاحونة طوال الليل، والنهر متجمد.', 'دُهن حبل جرس الكنيسة بالشحم فلا يستطيع أحد قرعه.', 'آثار ذئب تخرج من الغابة، وتدخل النزل، ثم تخرج ثانية.', 'ملعقة فضية مفقودة من كل بيت في القرية.', 'وُجدت الغنم في الحظيرة واقفة في حلقة، تواجه الداخل.']
    }
  },

  silentbells: {
    level: 'Medium', world: 'fantasy',
    look: { bg: '#13110e', surface: '#1c1915', rule: '#3b342a', fg: '#f2ece2', dim: '#b3a792', accent: '#c8a46b', onAccent: '#13110e', danger: '#ff6b5a', good: '#8fd29a', paper: 'papyrus', texture: 'chalk', display: 'Cinzel', displayAr: 'Amiri', body: 'Alegreya' },
    emblem: '<path d="M38 82c0-34 8-52 22-52s22 18 22 52zM32 82h56"/><path d="M48 96l24 14M72 96l-24 14"/>',
    en: {
      title: 'The Abbey of Silent Bells', hook: 'An abbey whose bells were taken down. The empty belfry tolls at midnight, and someone ends up among the bones.',
      intro: 'The abbey bells were taken down a hundred years ago, after they rang on their own and the whole valley went mad. The brothers and sisters who stayed are named after the bells they once rang. Now, at midnight, the empty belfry tolls again, and each time it does, one of them is found in the ossuary, laid out among the bones.',
      death: 'was found in the ossuary, laid out neatly among the old bones.', quiet: 'The belfry stayed silent and every bell name answered at dawn.', listLabel: 'Bell names in the abbey ledger',
      names: ['Toll', 'Peal', 'Chime', 'Knell', 'Clang', 'Ding', 'Hum', 'Ring', 'Tinkle', 'Bong', 'Clapper', 'Rope', 'Carillon', 'Tenor', 'Treble', 'Gong', 'Echo', 'Dirge'],
      places: ['the Empty Belfry', 'the Cloister', 'the Refectory', 'the Ossuary', 'the Bell Pit', 'the Library Tower', 'the Gatehouse'],
      beats: ['The empty belfry tolled at midnight. The ropes are still coiled on the floor.', 'Bone dust was found on the refectory table, in the shape of a bell.', 'One of the old bells, buried a century ago, has been dug up.', 'The gatehouse ledger lists one more brother than are living.', 'Someone chalked the bell names on the ossuary wall and crossed one out.', 'The only copy of the bell-casting book is missing from the library tower.']
    },
    ar: {
      title: 'دير الأجراس الصامتة', hook: 'دير أُنزلت أجراسه. يقرع برج الأجراس الفارغ عند منتصف الليل، وينتهي أحدهم بين العظام.',
      intro: 'أُنزلت أجراس الدير قبل مئة عام، بعد أن قرعت وحدها وجُنّ الوادي كله. الإخوة والأخوات الذين بقوا يحملون أسماء الأجراس التي كانوا يقرعونها. والآن عند منتصف الليل يقرع برج الأجراس الفارغ من جديد، وكل مرة يُعثر على أحدهم في بيت العظام، ممدداً بين العظام.',
      death: 'وُجد في بيت العظام، ممدداً بعناية بين العظام القديمة.', quiet: 'بقي برج الأجراس صامتاً وأجاب كل اسم جرس عند الفجر.', listLabel: 'أسماء الأجراس في سجل الدير',
      names: ['قرعة', 'رنة', 'دندنة', 'ناقوس الموت', 'صلصلة', 'طنين', 'همهمة', 'رنين', 'جلجلة', 'دوي', 'مطرقة الجرس', 'حبل الجرس', 'كاريون', 'الجهير', 'الحاد', 'صنج', 'صدى', 'مرثية'],
      places: ['برج الأجراس الفارغ', 'الرواق', 'قاعة الطعام', 'بيت العظام', 'حفرة الجرس', 'برج المكتبة', 'بيت البوابة'],
      beats: ['قرع برج الأجراس الفارغ عند منتصف الليل. والحبال لا تزال ملفوفة على الأرض.', 'وُجد غبار عظام على مائدة الطعام، على شكل جرس.', 'نُبش أحد الأجراس القديمة المدفونة منذ قرن.', 'يذكر سجل بيت البوابة أخاً أكثر من عدد الأحياء.', 'كتب أحدهم أسماء الأجراس بالطباشير على جدار بيت العظام وشطب واحداً.', 'النسخة الوحيدة من كتاب صب الأجراس مفقودة من برج المكتبة.']
    }
  }
});
