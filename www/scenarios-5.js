// Fantasy cases, part one: classic high fantasy and the sky.
Object.assign(SCENARIOS_DATA, {
  ninthtower: {
    level: 'Easy', world: 'fantasy',
    look: { bg: '#141026', surface: '#1d1834', rule: '#3a3060', fg: '#efe9ff', dim: '#a79fc8', accent: '#b49cff', onAccent: '#141026', danger: '#ff6b81', good: '#7fe0b0', paper: 'parchment', texture: 'stars', display: 'Cinzel', displayAr: 'Aref Ruqaa', body: 'Alegreya' },
    emblem: '<path d="M44 108V44h32v64M40 44l20-30 20 30M52 60h16M52 76h16"/><circle cx="60" cy="96" r="6"/>',
    en: {
      title: 'The Ninth Tower', hook: 'A wizard academy where apprentices go by their familiars’ names, and someone has learned the spell that turns a name to stone.',
      intro: 'The Ninth Tower trains apprentices who give up their names at the gate and take the name of their familiar instead. Tonight the wards fell silent, the headmaster vanished into a mirror, and apprentices have begun turning to stone in their beds, one familiar name at a time. Whoever is doing it knows the old naming spell.',
      death: 'was found turned to grey stone, still holding a candle.', quiet: 'Every apprentice answered the morning bell, warm and breathing.', listLabel: 'Familiar names on the tower roll',
      names: ['Raven', 'Toad', 'Moth', 'Owl', 'Newt', 'Ferret', 'Cricket', 'Beetle', 'Lynx', 'Bat', 'Spider', 'Salamander', 'Hare', 'Crow', 'Viper', 'Weasel', 'Badger', 'Stoat'],
      places: ['the Spell Library', 'the Potion Cellar', 'the Observatory', 'the Duelling Hall', 'the Familiar Stables', 'the Great Stair', 'the Headmaster’s Study'],
      beats: ['The forbidden shelf was opened. Only one book is missing: Of True Names.', 'A familiar was found wandering the Great Stair without its apprentice.', 'Someone drew a circle of salt around the observatory door, then smudged it.', 'The potion cellar is short three vials of nightshade. The lock was opened, not broken.', 'The headmaster’s mirror shows a figure in apprentice robes, but no face.', 'The stone statues in the courtyard have moved. Everyone swears they faced the gate.']
    },
    ar: {
      title: 'البرج التاسع', hook: 'أكاديمية سحر يتخذ فيها المتدربون أسماء رفاقهم من الحيوانات، وأحدهم تعلّم التعويذة التي تحوّل الاسم إلى حجر.',
      intro: 'يدرّب البرج التاسع متدربين يتركون أسماءهم عند البوابة ويحملون اسم رفيقهم السحري بدلاً منها. الليلة صمتت التعاويذ الحارسة، واختفى المدير داخل مرآة، وبدأ المتدربون يتحجرون في أسرّتهم، اسماً بعد اسم. من يفعل ذلك يعرف تعويذة التسمية القديمة.',
      death: 'وُجد متحجراً كالصخر الرمادي، ولا يزال ممسكاً بشمعة.', quiet: 'أجاب كل المتدربين جرس الصباح، دافئين يتنفسون.', listLabel: 'أسماء الرفاق في سجل البرج',
      names: ['غراب', 'ضفدع', 'عثة', 'بومة', 'سمندل', 'نمس', 'صرصار الليل', 'خنفساء', 'وشق', 'خفاش', 'عنكبوت', 'سلمندر', 'أرنب بري', 'زاغ', 'أفعى', 'ابن عرس', 'غرير', 'قاقم'],
      places: ['مكتبة التعاويذ', 'قبو الجرعات', 'المرصد', 'قاعة المبارزة', 'إسطبل الرفاق', 'الدرج الكبير', 'مكتب المدير'],
      beats: ['فُتح الرف المحظور. كتاب واحد فقط مفقود: في الأسماء الحقيقية.', 'وُجد رفيق سحري يتجول على الدرج الكبير بلا متدربه.', 'رسم أحدهم دائرة ملح حول باب المرصد، ثم مسحها.', 'ينقص قبو الجرعات ثلاث قوارير من ست الحسن. القفل فُتح ولم يُكسر.', 'تُظهر مرآة المدير شخصاً بثياب المتدربين، لكن بلا وجه.', 'تحركت التماثيل الحجرية في الفناء. الكل يقسم إنها كانت تواجه البوابة.']
    }
  },

  hoard: {
    level: 'Easy', world: 'fantasy',
    look: { bg: '#1a120a', surface: '#251a10', rule: '#4a3518', fg: '#fbefd9', dim: '#c4a982', accent: '#f2b84b', onAccent: '#1a120a', danger: '#ff6b4a', good: '#9ad69a', paper: 'parchment', texture: 'dunes', display: 'Pirata One', displayAr: 'Rakkas', body: 'Alegreya' },
    emblem: '<path d="M12 60s20-28 48-28 48 28 48 28-20 28-48 28-48-28-48-28z"/><path d="M60 36v48"/>',
    en: {
      title: 'The Sleeping Hoard', hook: 'A treasure crew in a sleeping dragon’s lair. Somebody is burning the others, and the dragon hasn’t opened an eye.',
      intro: 'The guild sent you down into the mountain while the old dragon sleeps its hundred-year sleep. Nobody uses real names below ground; the dragon is said to wake when it hears one. Now hunters are being found burned to ash in the dark, and the dragon has not moved. One of you is using its fire.',
      death: 'was found burned to ash beside a heap of gold. The gold was untouched.', quiet: 'The dragon breathed slowly all night, and everyone came back to camp.', listLabel: 'Guild nicknames chalked on the camp wall',
      names: ['Lockpick', 'Rope', 'Lantern', 'Shovel', 'Torch', 'Compass', 'Grapple', 'Chisel', 'Satchel', 'Whistle', 'Crowbar', 'Map', 'Flint', 'Hammer', 'Mirror', 'Bell', 'Candle', 'Spade'],
      places: ['the Gold Cavern', 'the Bone Gallery', 'the Dragon’s Ear', 'the Underground Lake', 'the Collapsed Stair', 'the Egg Chamber', 'the Camp'],
      beats: ['A gold crown was found in a hunter’s pack. Nobody admits to taking it.', 'The dragon’s eye opened for a moment at midnight, then closed.', 'Someone left fresh footprints in the egg chamber, where nobody is allowed.', 'A rope on the collapsed stair was cut halfway through.', 'Half the lantern oil is gone. Someone has been walking the tunnels alone.', 'A scale the size of a shield was found in the camp, still warm.']
    },
    ar: {
      title: 'الكنز النائم', hook: 'فريق صيد كنوز في عرين تنين نائم. أحدهم يحرق الآخرين، والتنين لم يفتح عيناً.',
      intro: 'أرسلتكم النقابة إلى جوف الجبل بينما ينام التنين العجوز نومته المئوية. لا أحد يستعمل اسمه الحقيقي تحت الأرض، فيقال إن التنين يستيقظ إذا سمع واحداً. والآن يُعثر على الصيادين رماداً في الظلام، والتنين لم يتحرك. أحدكم يستخدم ناره.',
      death: 'وُجد رماداً بجانب كومة ذهب. والذهب لم يُمس.', quiet: 'تنفس التنين ببطء طوال الليل، وعاد الجميع إلى المخيم.', listLabel: 'ألقاب النقابة المكتوبة بالطباشير على جدار المخيم',
      names: ['مفتاح القفل', 'حبل', 'فانوس', 'مجرفة', 'شعلة', 'بوصلة', 'خطاف', 'إزميل', 'حقيبة', 'صفارة', 'عتلة', 'خريطة', 'صوان', 'مطرقة', 'مرآة', 'جرس', 'شمعة', 'معول'],
      places: ['كهف الذهب', 'رواق العظام', 'أذن التنين', 'البحيرة الجوفية', 'الدرج المنهار', 'حجرة البيض', 'المخيم'],
      beats: ['وُجد تاج ذهبي في حقيبة أحد الصيادين. لا أحد يعترف بأخذه.', 'انفتحت عين التنين لحظة عند منتصف الليل، ثم أُغلقت.', 'ترك أحدهم آثار أقدام جديدة في حجرة البيض، حيث يُمنع الدخول.', 'حبل على الدرج المنهار قُطع حتى منتصفه.', 'نصف زيت الفوانيس اختفى. أحدهم يمشي في الأنفاق وحده.', 'وُجدت حرشفة بحجم درع في المخيم، ولا تزال دافئة.']
    }
  },

  thornwatch: {
    level: 'Easy', world: 'fantasy',
    look: { bg: '#0f1712', surface: '#16211a', rule: '#2e4434', fg: '#e8f2e9', dim: '#9fb5a3', accent: '#c9a96e', onAccent: '#0f1712', danger: '#e8604c', good: '#8fd29a', paper: 'manila', texture: 'rain', display: 'Marcellus', displayAr: 'Reem Kufi', body: 'Alegreya' },
    emblem: '<path d="M60 110V50M60 70L38 52M60 62l20-20M60 84l18-10M40 40l-6-8M82 34l6-8"/><path d="M30 110h60"/>',
    en: {
      title: 'The Thornwatch', hook: 'A fort on the edge of a cursed forest. Wardens are dying of thorns, and the forest never crossed the wall.',
      intro: 'The Thornwatch is the last fort before the Blackwood, where the trees move at night. Wardens swear their oath under a watch name and never speak the one they were born with. Since the snows came, wardens have been found on the wall walk with thorns grown through their hearts. The forest never got over the wall. Someone let it in.',
      death: 'was found on the wall walk with black thorns grown through the heart.', quiet: 'The signal fire burned all night, and every warden answered the roll.', listLabel: 'Watch names on the oath board',
      names: ['Hawk', 'Wolfsbane', 'Ironbark', 'Ember', 'Brook', 'Stone', 'Thistle', 'Ash', 'Fern', 'Arrow', 'Heron', 'Bramble', 'Moss', 'Rowan', 'Briar', 'Pike', 'Sorrel', 'Wren'],
      places: ['the Gate Tower', 'the Armoury', 'the Mess Hall', 'the Kennels', 'the Wall Walk', 'the Signal Fire', 'the Infirmary'],
      beats: ['The gate was found unbarred at dawn. The guard swears he never moved.', 'A black seed was found in the mess hall stew.', 'The dogs howled at one warden in particular, then fell silent.', 'Someone fed the signal fire with green wood. It smoked instead of burning.', 'A warden’s cloak was found hanging in the Blackwood, on the wrong side of the wall.', 'The healing herbs in the infirmary were swapped for thorn leaves.']
    },
    ar: {
      title: 'حصن الأشواك', hook: 'حصن على حافة غابة ملعونة. يموت الحراس بالأشواك، والغابة لم تعبر السور قط.',
      intro: 'حصن الأشواك آخر قلعة قبل الغابة السوداء، حيث تتحرك الأشجار ليلاً. يقسم الحراس يمينهم باسم الحراسة ولا ينطقون أبداً بالاسم الذي وُلدوا به. منذ نزل الثلج، يُعثر على حراس فوق ممشى السور وقد نبتت الأشواك في قلوبهم. الغابة لم تتجاوز السور. أحدهم أدخلها.',
      death: 'وُجد على ممشى السور وقد نبتت أشواك سوداء في قلبه.', quiet: 'اشتعلت نار الإشارة طوال الليل، وأجاب كل حارس عند النداء.', listLabel: 'أسماء الحراسة على لوح اليمين',
      names: ['صقر', 'خانق الذئب', 'لحاء الحديد', 'جمرة', 'جدول', 'صخر', 'شوك الجمل', 'رماد', 'سرخس', 'سهم', 'بلشون', 'عليق', 'طحلب', 'غبيراء', 'ورد بري', 'رمح', 'حماض', 'نمنمة'],
      places: ['برج البوابة', 'مخزن السلاح', 'قاعة الطعام', 'بيت الكلاب', 'ممشى السور', 'نار الإشارة', 'المشفى'],
      beats: ['وُجدت البوابة بلا مزلاج عند الفجر. يقسم الحارس إنه لم يتحرك.', 'وُجدت بذرة سوداء في حساء قاعة الطعام.', 'نبحت الكلاب على حارس بعينه، ثم سكتت.', 'أشعل أحدهم نار الإشارة بخشب أخضر. فدخّنت بدل أن تشتعل.', 'وُجد معطف حارس معلقاً في الغابة السوداء، على الجانب الخطأ من السور.', 'استُبدلت أعشاب الشفاء في المشفى بأوراق شوك.']
    }
  },

  emberkeep: {
    level: 'Medium', world: 'fantasy',
    look: { bg: '#1c0f0c', surface: '#271612', rule: '#4c2a22', fg: '#fde9df', dim: '#c9a194', accent: '#ff8a3d', onAccent: '#1c0f0c', danger: '#ff5050', good: '#9ad69a', paper: 'parchment', texture: 'film', display: 'Cinzel', displayAr: 'Aref Ruqaa', body: 'Alegreya' },
    emblem: '<path d="M24 108V56h16V44h12v12h16V44h12v12h16v52z"/><path d="M60 20c8 10 8 18 0 24-8-6-8-14 0-24z"/>',
    en: {
      title: 'Emberkeep', hook: 'A castle under siege by a dragon. Knights burn in rooms with no windows, so the fire came from inside.',
      intro: 'The dragon has circled Emberkeep for nine days, and the gates stay shut. Inside, the knights of the keep go only by the device on their shields, as the old law demands in times of siege. Someone inside the walls is helping the dragon, and every night another knight is found burned in a room with no window.',
      death: 'was found burned in a locked room with no window.', quiet: 'The dragon screamed at the walls all night, but nobody inside was touched.', listLabel: 'Shield devices in the hall of banners',
      names: ['the Red Lance', 'the Grey Shield', 'the Silver Hart', 'the Iron Glove', 'the Golden Boar', 'the Black Rook', 'the Green Knight', 'the White Swan', 'the Bronze Helm', 'the Blue Lion', 'the Copper Bell', 'the Pale Rider', 'the Crimson Fox', 'the Amber Owl', 'the Stone Bear', 'the Ivory Horn', 'the Night Hawk', 'the Ember Crown'],
      places: ['the Great Hall', 'the Chapel', 'the Battlements', 'the Well', 'the Smithy', 'the Dungeon', 'the Stables'],
      beats: ['A banner on the battlements was turned to show the dragon the way in.', 'The well water tastes of smoke.', 'The smith says someone forged a key to the dungeon last night.', 'The chapel candles were lit with no flame anyone brought.', 'A horse in the stables has been scorched along one side.', 'Someone left a dragon scale on the great hall table, in the lord’s seat.']
    },
    ar: {
      title: 'حصن الجمر', hook: 'قلعة يحاصرها تنين. يحترق الفرسان في غرف بلا نوافذ، فالنار جاءت من الداخل.',
      intro: 'يحوم التنين حول حصن الجمر منذ تسعة أيام، والبوابات مغلقة. في الداخل لا يُعرف فرسان الحصن إلا بالشعار المرسوم على دروعهم، كما يقضي القانون القديم في زمن الحصار. أحد من داخل الأسوار يساعد التنين، وكل ليلة يُعثر على فارس محترق في غرفة بلا نافذة.',
      death: 'وُجد محترقاً في غرفة مقفلة بلا نافذة.', quiet: 'صرخ التنين عند الأسوار طوال الليل، لكن لم يُمس أحد في الداخل.', listLabel: 'شعارات الدروع في قاعة الرايات',
      names: ['الرمح الأحمر', 'الدرع الرمادي', 'الأيل الفضي', 'القفاز الحديدي', 'الخنزير الذهبي', 'الرخ الأسود', 'الفارس الأخضر', 'البجعة البيضاء', 'الخوذة البرونزية', 'الأسد الأزرق', 'الجرس النحاسي', 'الفارس الشاحب', 'الثعلب القرمزي', 'البومة الكهرمانية', 'الدب الحجري', 'القرن العاجي', 'صقر الليل', 'تاج الجمر'],
      places: ['القاعة الكبرى', 'الكنيسة', 'الأسوار', 'البئر', 'الحدادة', 'الزنزانة', 'الإسطبل'],
      beats: ['أُديرت راية على الأسوار لتدل التنين على طريق الدخول.', 'ماء البئر طعمه دخان.', 'يقول الحداد إن أحدهم صاغ مفتاحاً للزنزانة الليلة الماضية.', 'أُشعلت شموع الكنيسة بلهب لم يحمله أحد.', 'حصان في الإسطبل محروق على جانب واحد.', 'ترك أحدهم حرشفة تنين على مائدة القاعة الكبرى، في مقعد السيد.']
    }
  },

  deepdelve: {
    level: 'Medium', world: 'fantasy',
    look: { bg: '#12110f', surface: '#1b1916', rule: '#3a352c', fg: '#efe8dc', dim: '#aea38f', accent: '#e0a458', onAccent: '#12110f', danger: '#ff6b5a', good: '#8fd29a', paper: 'card', texture: 'planks', display: 'Marcellus', displayAr: 'Lalezar', body: 'Alegreya Sans' },
    emblem: '<path d="M22 44c20-18 56-18 76 0"/><path d="M60 36v72"/>',
    en: {
      title: 'Deepdelve', hook: 'A dwarf mine where something old woke up. Miners are crushed in tunnels that never collapsed.',
      intro: 'Deepdelve has been mined by the same clan for nine hundred years, and its dwarves go by the names their beards earn them. Something woke in the lowest gallery when the miners broke into an old tomb, and since then dwarves have been found crushed in tunnels that never fell. The rock didn’t move. A hand did.',
      death: 'was found crushed in a tunnel whose roof was perfectly sound.', quiet: 'Every lamp came back up the shaft at the change of shift.', listLabel: 'Beard names on the shift board',
      names: ['Pickbeard', 'Coalhand', 'Gemsight', 'Anvilbrow', 'Silverseam', 'Deepdigger', 'Lampjaw', 'Orebelly', 'Stonefist', 'Goldvein', 'Rockhorn', 'Ironknuckle', 'Copperbraid', 'Saltpick', 'Tinwhistle', 'Granitegrin', 'Mudboot', 'Quartzeye'],
      places: ['the Main Shaft', 'the Forge Hall', 'the Ale Cellar', 'the Gem Vault', 'the Flooded Gallery', 'the Lift Cage', 'the Ancestor Tombs'],
      beats: ['The lift cage went down to the lowest gallery by itself at midnight.', 'A gem the size of a fist is missing from the vault, and the vault door was locked.', 'Someone has been carving the old clan runes backwards on the tunnel walls.', 'The ale cellar flooded with black water that smells of iron.', 'One of the ancestor tombs is open. The bones are arranged facing the door.', 'A miner’s pick was found buried point-first in solid granite.']
    },
    ar: {
      title: 'المنجم العميق', hook: 'منجم أقزام استيقظ فيه شيء قديم. يُسحق عمال المنجم في أنفاق لم تنهر قط.',
      intro: 'تعمل العشيرة نفسها في المنجم العميق منذ تسعمئة عام، ويُعرف أقزامه بالأسماء التي تكسبها لحاهم. استيقظ شيء في أعمق رواق حين اقتحم العمال قبراً قديماً، ومنذ ذلك الحين يُعثر على أقزام مسحوقين في أنفاق لم تسقط. الصخر لم يتحرك. يدٌ تحركت.',
      death: 'وُجد مسحوقاً في نفق سقفه سليم تماماً.', quiet: 'عادت كل المصابيح إلى أعلى البئر عند تبديل النوبة.', listLabel: 'أسماء اللحى على لوح النوبات',
      names: ['لحية المعول', 'يد الفحم', 'عين الجوهرة', 'حاجب السندان', 'عرق الفضة', 'حفار الأعماق', 'فك المصباح', 'بطن الخام', 'قبضة الحجر', 'عرق الذهب', 'قرن الصخر', 'مفصل الحديد', 'ضفيرة النحاس', 'معول الملح', 'صفارة القصدير', 'ابتسامة الصوان', 'حذاء الطين', 'عين المرو'],
      places: ['البئر الرئيسي', 'قاعة الصهر', 'قبو الجعة', 'خزنة الجواهر', 'الرواق المغمور', 'قفص المصعد', 'قبور الأسلاف'],
      beats: ['نزل قفص المصعد إلى أعمق رواق وحده عند منتصف الليل.', 'جوهرة بحجم القبضة مفقودة من الخزنة، وباب الخزنة كان مقفلاً.', 'أحدهم ينقش رموز العشيرة القديمة معكوسة على جدران الأنفاق.', 'غمر قبو الجعة ماء أسود رائحته حديد.', 'أحد قبور الأسلاف مفتوح. والعظام مرتبة تواجه الباب.', 'وُجد معول عامل مغروساً برأسه في صخر الصوان الصلب.']
    }
  },

  blacktourney: {
    level: 'Medium', world: 'fantasy',
    look: { bg: '#0e0e10', surface: '#18181c', rule: '#34343c', fg: '#ececf0', dim: '#a3a3ad', accent: '#d4af37', onAccent: '#0e0e10', danger: '#e84a5f', good: '#8fd29a', paper: 'card', texture: 'diamonds', display: 'Cinzel', displayAr: 'Aref Ruqaa', body: 'Alegreya' },
    emblem: '<path d="M18 102L102 18M18 18l84 84"/><circle cx="60" cy="60" r="14"/>',
    en: {
      title: 'The Black Tourney', hook: 'A masked tournament where the prize is a wish. Champions are dying in their tents before they ever ride.',
      intro: 'Once a generation, the Black Tourney is held at the edge of the world, and every champion rides masked, known only by the name sewn on their banner. The prize is a wish. This year, champions are being found dead in their tents before they ever reach the lists, a black ribbon tied around each throat.',
      death: 'was found in their tent with a black ribbon tied around the throat.', quiet: 'Every banner still flew over the tents at the morning trumpet.', listLabel: 'Names sewn on the champions’ banners',
      names: ['Weeping', 'Laughing', 'Silent', 'Burning', 'Drowned', 'Thorn', 'Broken', 'Mirror', 'Candle', 'Raven', 'Salt', 'Ash', 'Bell', 'Moth', 'Glass', 'Rust', 'Frost', 'Hollow-Eyed'],
      places: ['the Lists', 'the Champions’ Tents', 'the Royal Box', 'the Armourer’s Stall', 'the Chapel of Vows', 'the Horse Lines', 'the Feast Pavilion'],
      beats: ['A lance in the armourer’s stall was sawn almost through, then painted over.', 'The herald read out the name of a champion who never entered.', 'A horse was found loose, wearing a stranger’s colours.', 'The wish-cup in the royal box was found turned upside down.', 'Someone stole every black ribbon from the seamstress’s stall.', 'A champion’s mask was found in the chapel, with nobody’s face behind it.']
    },
    ar: {
      title: 'البطولة السوداء', hook: 'بطولة مقنّعة جائزتها أمنية. يموت الأبطال في خيامهم قبل أن يركبوا خيولهم.',
      intro: 'مرة في كل جيل تُقام البطولة السوداء عند حافة العالم، ويركب كل بطل مقنّعاً، لا يُعرف إلا بالاسم المخيط على رايته. الجائزة أمنية. هذا العام يُعثر على الأبطال موتى في خيامهم قبل أن يبلغوا الميدان، وحول كل عنق شريطة سوداء.',
      death: 'وُجد في خيمته وحول عنقه شريطة سوداء.', quiet: 'كانت كل الرايات لا تزال ترفرف فوق الخيام عند بوق الصباح.', listLabel: 'الأسماء المخيطة على رايات الأبطال',
      names: ['الفارس الباكي', 'الفارس الضاحك', 'الفارس الصامت', 'الفارس المحترق', 'الفارس الغريق', 'فارس الشوك', 'الفارس المكسور', 'فارس المرآة', 'فارس الشمعة', 'فارس الغراب', 'فارس الملح', 'فارس الرماد', 'فارس الجرس', 'فارس العثة', 'فارس الزجاج', 'فارس الصدأ', 'فارس الصقيع', 'الفارس أجوف العينين'],
      places: ['الميدان', 'خيام الأبطال', 'المقصورة الملكية', 'دكان صانع الدروع', 'كنيسة النذور', 'مربط الخيول', 'سرادق الوليمة'],
      beats: ['نُشر رمح في دكان صانع الدروع حتى كاد ينقطع، ثم طُلي فوق الشق.', 'قرأ المنادي اسم بطل لم يشترك قط.', 'وُجد حصان طليق يحمل ألوان غريب.', 'وُجدت كأس الأمنيات في المقصورة الملكية مقلوبة.', 'سرق أحدهم كل الشرائط السوداء من دكان الخياطة.', 'وُجد قناع بطل في الكنيسة، وليس خلفه وجه أحد.']
    }
  },

  ashcourt: {
    level: 'Hard', world: 'fantasy',
    look: { bg: '#11141a', surface: '#181d25', rule: '#323b4a', fg: '#eef1f6', dim: '#a6afbd', accent: '#c7d2e0', onAccent: '#11141a', danger: '#ff7a7a', good: '#8fe0c0', paper: 'parchment', texture: 'snow', display: 'Marcellus', displayAr: 'Amiri', body: 'Alegreya' },
    emblem: '<path d="M60 108C30 80 30 40 60 12c30 28 30 68 0 96z"/><path d="M60 24v84M60 50L46 40M60 70l14-10"/>',
    en: {
      title: 'The Court of Ash Leaves', hook: 'An elven court choosing an heir. Titles that sound almost the same, and poisoned ash that falls on one guest at a time.',
      intro: 'The elven court has gathered for the Ash Festival, when the old queen chooses an heir. Elves never give their true names; at court they wear titles so alike that even they stumble over them. Someone is poisoning the candidates one by one with ash that falls only on them. Take great care with every letter.',
      death: 'was found asleep forever beneath the falling ash, smiling.', quiet: 'The ash fell softly on everyone, and everyone woke.', listLabel: 'Court titles written in silver',
      names: ['Lady Ash', 'Lady Ashe', 'Lord Vael', 'Lord Vale', 'Thistledown', 'Thistledew', 'Moonwhisper', 'Moonwhistle', 'Silverleaf', 'Silverlief', 'Starfall', 'Starfell', 'Dawnsong', 'Dawnstrong', 'Mistweave', 'Mistwreath', 'Elara', 'Elera'],
      places: ['the Moon Garden', 'the Hall of Roots', 'the Singing Pool', 'the Throne of Bark', 'the Archive of Leaves', 'the Silver Bridge', 'the Queen’s Bower'],
      beats: ['The singing pool fell silent for an hour. Elves say it stops only when it sees a lie.', 'An heir’s silver circlet was found at the bottom of the pool.', 'The queen’s taster refuses to eat anything with ash on it, and everything has ash on it.', 'A page was burned out of the book of lineages in the Archive of Leaves.', 'Someone walked across the silver bridge barefoot. The footprints are human.', 'The old queen whispered a title in her sleep. Two of you answer to it.']
    },
    ar: {
      title: 'بلاط أوراق الرماد', hook: 'بلاط الجان يختار وريثاً. ألقاب متشابهة حد التطابق، ورماد مسموم يسقط على ضيف واحد في كل مرة.',
      intro: 'اجتمع بلاط الجان لمهرجان الرماد، حين تختار الملكة العجوز وريثاً. لا يبوح الجان بأسمائهم الحقيقية أبداً، وفي البلاط يحملون ألقاباً متشابهة حتى إنهم يتعثرون بها. أحدهم يسمم المرشحين واحداً تلو الآخر برماد لا يسقط إلا عليهم. انتبه لكل حرف.',
      death: 'وُجد نائماً إلى الأبد تحت الرماد المتساقط، مبتسماً.', quiet: 'سقط الرماد برفق على الجميع، واستيقظ الجميع.', listLabel: 'ألقاب البلاط المكتوبة بالفضة',
      names: ['السيدة رماد', 'السيدة رمادة', 'اللورد فايل', 'اللورد فيل', 'زغب الشوك', 'ندى الشوك', 'همسة القمر', 'صفارة القمر', 'ورقة الفضة', 'ورق الفضة', 'سقوط النجم', 'سقط النجم', 'أغنية الفجر', 'أغنية الفجر القوية', 'نسيج الضباب', 'إكليل الضباب', 'إلارا', 'إليرا'],
      places: ['حديقة القمر', 'قاعة الجذور', 'البركة المغنية', 'عرش اللحاء', 'أرشيف الأوراق', 'الجسر الفضي', 'خميلة الملكة'],
      beats: ['صمتت البركة المغنية ساعة. يقول الجان إنها لا تصمت إلا حين ترى كذبة.', 'وُجد إكليل وريث فضي في قاع البركة.', 'يرفض متذوق الملكة أكل أي شيء عليه رماد، وكل شيء عليه رماد.', 'احترقت صفحة من كتاب الأنساب في أرشيف الأوراق.', 'عبر أحدهم الجسر الفضي حافياً. وآثار الأقدام بشرية.', 'همست الملكة العجوز بلقب في نومها. واثنان منكم يجيبان عليه.']
    }
  },

  kingswake: {
    level: 'Hard', world: 'fantasy',
    look: { bg: '#150f14', surface: '#1f161d', rule: '#3e2d3a', fg: '#f4eaf1', dim: '#b9a4b3', accent: '#c9a227', onAccent: '#150f14', danger: '#ff5f6d', good: '#8fd29a', paper: 'parchment', texture: 'film', display: 'Playfair Display', displayAr: 'Aref Ruqaa', body: 'Alegreya' },
    emblem: '<path d="M20 88l8-48 18 22 14-30 14 30 18-22 8 48z"/><path d="M24 100h72"/>',
    en: {
      title: 'The King’s Wake', hook: 'Nobles at a dead king’s wake, the crown waiting, and titles that differ by a single letter.',
      intro: 'The old king lies in the throne room and the crown sits on a cushion beside him, waiting. Every lord of the realm has come to the wake, and by custom each is announced only by title. Before the bells ring for the burial, someone means to be the last noble standing. The titles are close. Read them twice.',
      death: 'was found slumped at the long table, a wine cup still in hand.', quiet: 'Every noble took their place at the morning vigil.', listLabel: 'Titles announced at the wake',
      names: ['Lord Harrow', 'Lord Harlow', 'Lady Morwen', 'Lady Morwyn', 'Sir Corvin', 'Sir Corwin', 'Duke Aldric', 'Duke Aldrick', 'Lady Isolde', 'Lady Isold', 'Baron Vey', 'Baron Vay', 'Countess Rhea', 'Countess Rhee', 'Sir Gareth', 'Sir Garret', 'Lord Edric', 'Lord Edrick'],
      places: ['the Throne Room', 'the Crypt', 'the Kitchens', 'the Long Gallery', 'the Map Room', 'the Bell Tower', 'the Queen’s Garden'],
      beats: ['The crown moved an inch on its cushion overnight. The guards saw nothing.', 'The king’s seal is missing from his hand.', 'The cook says one noble asked which cups go to which seats.', 'A map of the realm was found with half the castles crossed out.', 'The crypt door was open. The king’s tomb has two names carved on it.', 'The bell tower rope was cut. The burial bells cannot ring.']
    },
    ar: {
      title: 'عزاء الملك', hook: 'نبلاء في عزاء ملك ميت، والتاج ينتظر، وألقاب لا يفرقها إلا حرف واحد.',
      intro: 'يرقد الملك العجوز في قاعة العرش، والتاج على وسادة بجانبه ينتظر. جاء كل لوردات المملكة إلى العزاء، وبحسب العرف لا يُنادى أحد إلا بلقبه. قبل أن تُقرع أجراس الدفن، ينوي أحدهم أن يكون آخر النبلاء الواقفين. الألقاب متقاربة. اقرأها مرتين.',
      death: 'وُجد منهاراً على المائدة الطويلة، وكأس النبيذ لا تزال في يده.', quiet: 'اتخذ كل النبلاء أماكنهم في سهرة الصباح.', listLabel: 'الألقاب التي نودي بها في العزاء',
      names: ['اللورد هارو', 'اللورد هارلو', 'السيدة مورين', 'السيدة موروين', 'السير كورفن', 'السير كوروين', 'الدوق ألدرك', 'الدوق ألدريك', 'السيدة إيزولد', 'السيدة إيزول', 'البارون في', 'البارون فاي', 'الكونتيسة ريا', 'الكونتيسة رية', 'السير غاريث', 'السير غاريت', 'اللورد إدرك', 'اللورد إدريك'],
      places: ['قاعة العرش', 'السرداب', 'المطابخ', 'الرواق الطويل', 'غرفة الخرائط', 'برج الجرس', 'حديقة الملكة'],
      beats: ['تحرك التاج على وسادته مقدار إصبع خلال الليل. والحراس لم يروا شيئاً.', 'خاتم الملك مفقود من يده.', 'يقول الطاهي إن أحد النبلاء سأل أي كأس تذهب إلى أي مقعد.', 'وُجدت خريطة للمملكة وقد شُطب نصف قلاعها.', 'باب السرداب كان مفتوحاً. وعلى قبر الملك اسمان منقوشان.', 'قُطع حبل برج الجرس. أجراس الدفن لا تستطيع أن تُقرع.']
    }
  },

  driftisle: {
    level: 'Medium', world: 'fantasy',
    look: { bg: '#0f1622', surface: '#162033', rule: '#2c3e5c', fg: '#eef4ff', dim: '#a3b4cf', accent: '#7fd1ff', onAccent: '#0f1622', danger: '#ff6b6b', good: '#8fe0b0', paper: 'ticket', texture: 'stars', display: 'Marcellus', displayAr: 'Reem Kufi', body: 'Alegreya Sans' },
    emblem: '<path d="M20 56h80L76 96H44z"/><path d="M36 56c0-14 10-22 24-22s24 8 24 22M50 100v12M70 100v12"/>',
    en: {
      title: 'The Drifting Isle', hook: 'A floating island sinking through the clouds. Every death dims the stone that holds it up.',
      intro: 'The Drifting Isle has floated above the clouds for a thousand years, held up by a single glowing stone. This week the stone began to dim, and the isle sinks a little lower each night. Islanders go by wind names, and someone among them is feeding the stone’s light to the dark, one life at a time.',
      death: 'was found grey and cold beside the levitation stone, which glowed a little dimmer.', quiet: 'The isle held its height all night. Nobody fell.', listLabel: 'Wind names carved on the edge rail',
      names: ['Kite', 'Gust', 'Updraft', 'Cirrus', 'Nimbus', 'Feather', 'Zephyr', 'Squall', 'Sparrow', 'Thermal', 'Halo', 'Vane', 'Drift', 'Lark', 'Breeze', 'Swift', 'Cumulus', 'Mistral'],
      places: ['the Edge Rail', 'the Anchor Chains', 'the Sky Garden', 'the Wind Temple', 'the Balloon Docks', 'the Levitation Stone', 'the Market Bridge'],
      beats: ['One of the anchor chains was found cut, swinging over nothing.', 'The wind temple’s chimes rang a name nobody recognised.', 'A balloon left the docks at midnight with nobody aboard.', 'The sky garden’s flowers all turned to face the levitation stone.', 'Someone has been chipping glowing flakes off the stone and hiding them.', 'The clouds below parted for a moment. There was a city down there, looking up.']
    },
    ar: {
      title: 'الجزيرة الطافية', hook: 'جزيرة طافية تغرق عبر الغيوم. كل موت يخفت به الحجر الذي يحملها.',
      intro: 'تطفو الجزيرة فوق الغيوم منذ ألف عام، يحملها حجر واحد مضيء. هذا الأسبوع بدأ الحجر يخفت، والجزيرة تهبط قليلاً كل ليلة. يُعرف أهل الجزيرة بأسماء الرياح، وأحدهم يُطعم ضوء الحجر للظلام، روحاً بعد روح.',
      death: 'وُجد رمادياً بارداً بجانب حجر الطفو، الذي خفت ضوؤه قليلاً.', quiet: 'حافظت الجزيرة على ارتفاعها طوال الليل. لم يسقط أحد.', listLabel: 'أسماء الرياح المنقوشة على سياج الحافة',
      names: ['طائرة ورقية', 'هبة', 'تيار صاعد', 'سمحاق', 'مزن', 'ريشة', 'نسيم الغرب', 'زوبعة', 'دوري', 'دفء صاعد', 'هالة', 'دوارة', 'انجراف', 'قبرة', 'نسيم', 'سنونو', 'ركام', 'ريح الشمال'],
      places: ['سياج الحافة', 'سلاسل المرساة', 'حديقة السماء', 'معبد الريح', 'مرفأ المناطيد', 'حجر الطفو', 'جسر السوق'],
      beats: ['وُجدت إحدى سلاسل المرساة مقطوعة، تتأرجح فوق الفراغ.', 'رنت أجراس معبد الريح باسم لم يعرفه أحد.', 'غادر منطاد المرفأ عند منتصف الليل وليس على متنه أحد.', 'استدارت كل زهور حديقة السماء نحو حجر الطفو.', 'أحدهم يكشط رقائق مضيئة من الحجر ويخبئها.', 'انشقت الغيوم في الأسفل لحظة. كانت هناك مدينة، تنظر إلى أعلى.']
    }
  },

  giltgale: {
    level: 'Easy', world: 'fantasy',
    look: { bg: '#16120c', surface: '#211b12', rule: '#45381f', fg: '#fbf1dc', dim: '#c7b48c', accent: '#e9b949', onAccent: '#16120c', danger: '#ff6b4a', good: '#8fd29a', paper: 'ticket', texture: 'grid', display: 'Limelight', displayAr: 'Rakkas', body: 'Alegreya' },
    emblem: '<ellipse cx="60" cy="44" rx="44" ry="18"/><path d="M44 62l4 16h24l4-16M48 78h24"/>',
    en: {
      title: 'The Gilded Gale', hook: 'An airship trapped above a storm. People are going over the rail, and nobody hears them fall.',
      intro: 'The Gilded Gale carries passengers across the Sea of Clouds, three weeks from any port. Aboard, everyone goes by their post, never their name: the oldest rule of the air. A storm has trapped the ship above the eye of a cyclone, and crew are going over the rail in the night, though nobody hears them fall.',
      death: 'is gone. Only their boots were found, set neatly by the rail.', quiet: 'Every post answered the dawn bell.', listLabel: 'Posts on the crew roster',
      names: ['Captain', 'Navigator', 'Rigger', 'Stoker', 'Cook', 'Gunner', 'Lookout', 'Surgeon', 'Quartermaster', 'Cabin Boy', 'Bosun', 'Purser', 'Steward', 'Mechanic', 'Chaplain', 'Signalman', 'Helmsman', 'Carpenter'],
      places: ['the Bridge', 'the Gas Envelope', 'the Engine Deck', 'the Galley', 'the Observation Gondola', 'the Cargo Hold', 'the Captain’s Cabin'],
      beats: ['The compass on the bridge spins whenever one particular post walks past.', 'Someone slashed a small hole in the gas envelope, then patched it badly.', 'A crate in the cargo hold is breathing.', 'The ship’s log has a page torn out from the night the storm began.', 'Lightning lit the gondola, and for a second there was one passenger too many.', 'The stoker swears the engine was fed something that wasn’t coal.']
    },
    ar: {
      title: 'العاصفة المذهبة', hook: 'منطاد عالق فوق عاصفة. يسقط الناس من فوق الحاجز، ولا أحد يسمع سقوطهم.',
      intro: 'تحمل العاصفة المذهبة ركاباً عبر بحر الغيوم، على بعد ثلاثة أسابيع من أي ميناء. على متنها يُعرف الجميع بمواقعهم لا بأسمائهم، وهي أقدم قواعد الجو. حبست عاصفة السفينة فوق عين إعصار، والطاقم يسقطون من فوق الحاجز ليلاً، ولا أحد يسمع سقوطهم.',
      death: 'اختفى. لم يُعثر إلا على حذائه، موضوعاً بعناية عند الحاجز.', quiet: 'أجاب كل موقع جرس الفجر.', listLabel: 'المواقع في قائمة الطاقم',
      names: ['القبطان', 'الملاح', 'مثبت الحبال', 'الوقاد', 'الطاهي', 'المدفعي', 'الرقيب', 'الجراح', 'أمين المؤن', 'صبي المقصورة', 'رئيس البحارة', 'أمين الصندوق', 'المضيف', 'الميكانيكي', 'القس', 'عامل الإشارة', 'قائد الدفة', 'النجار'],
      places: ['منصة القيادة', 'كيس الغاز', 'سطح المحرك', 'المطبخ', 'جندول المراقبة', 'عنبر الشحن', 'مقصورة القبطان'],
      beats: ['تدور بوصلة منصة القيادة كلما مر موقع بعينه.', 'شق أحدهم ثقباً صغيراً في كيس الغاز، ثم رقعه بإهمال.', 'صندوق في عنبر الشحن يتنفس.', 'نُزعت صفحة من سجل السفينة من ليلة بدء العاصفة.', 'أضاء البرق الجندول، وللحظة كان هناك راكب زائد.', 'يقسم الوقاد إن المحرك أُطعم شيئاً ليس فحماً.']
    }
  }
});
