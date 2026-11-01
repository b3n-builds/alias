// World cases, part one.
Object.assign(SCENARIOS_DATA, {
  venice: {
    level: 'Hard',
    look: { bg: '#1a0f1c', surface: '#251628', rule: '#4a2d4f', fg: '#f7e9f3', dim: '#bba0b6', accent: '#e9c46a', onAccent: '#1a0f1c', danger: '#ef6461', good: '#9ad1a8', paper: 'card', texture: 'diamonds', display: 'Playfair Display', displayAr: 'Aref Ruqaa', body: 'Alegreya' },
    emblem: '<path d="M16 46c14-10 30-6 44 4 14-10 30-14 44-4 0 20-10 36-26 36-10 0-14-10-18-10s-8 10-18 10C26 82 16 66 16 46z"/><path d="M34 58c4-4 10-4 14 0M72 58c4-4 10-4 14 0"/><path d="M60 50V22M60 22c10 0 16-8 20-14"/>',
    en: {
      title: 'The Masquerade', hook: 'Venice, Carnival, 1750. Every guest wears a mask with a name, and the names are nearly the same.',
      intro: 'In a palazzo on the Grand Canal, the Carnival ball has run past midnight. Every guest wears a mask and answers only to the mask’s name, and the mask-maker clearly ran out of ideas. One of the dancers carries a list of names and a thin blade. When the music stops, someone is always missing.',
      death: 'was found floating in the canal beneath the ballroom window, mask still on.', quiet: 'When the music stopped, every mask was still dancing.', listLabel: 'Mask names at the ball',
      names: ['Columbina', 'Columbino', 'Bauta Nera', 'Bauta Bianca', 'Volto d’Oro', 'Volto d’Argento', 'Moretta', 'Moretto', 'Arlecchino', 'Arlecchina', 'Medico Rosso', 'Medico Verde', 'Gatto', 'Gatta', 'Luna Piena', 'Luna Nuova', 'Pierrot', 'Pierrette'],
      places: ['the Ballroom', 'the Gondola Landing', 'the Card Tables', 'the Hall of Mirrors', 'the Balcony', 'the Wine Cellar', 'the Musicians’ Gallery'],
      beats: ['A gondolier swears he rowed two guests in identical masks to two different doors at the same moment.', 'The orchestra played a waltz nobody requested. The sheet music was left on a chair, signed with a mask name.', 'A glove was found in the Hall of Mirrors with a list sewn into its lining.', 'The host’s ring is missing. The host is not saying who he last danced with.', 'Someone ordered the candles snuffed in the east wing ten minutes early.', 'A love letter was delivered to the wrong mask. Both claim it was meant for them.'],
      questions: ['Who did you dance with first tonight?', 'What colour are the ribbons on your mask?', 'Who have you been avoiding all evening?', 'What did you whisper on the balcony?', 'Which mask would you never trust, and why?', 'Who left the ballroom during the last waltz?']
    },
    ar: {
      title: 'الحفل التنكري', hook: 'البندقية، الكرنفال، 1750. كل ضيف يرتدي قناعاً باسم، والأسماء تكاد تكون متطابقة.',
      intro: 'في قصر على القناة الكبرى، امتد حفل الكرنفال إلى ما بعد منتصف الليل. كل ضيف يرتدي قناعاً ولا يجيب إلا باسم قناعه، ويبدو أن صانع الأقنعة نفدت أفكاره. أحد الراقصين يحمل قائمة بالأسماء ونصلاً رفيعاً. وكلما توقفت الموسيقى، يغيب أحدهم.',
      death: 'وُجد طافياً في القناة تحت نافذة القاعة، وقناعه لا يزال على وجهه.', quiet: 'عندما توقفت الموسيقى، كانت كل الأقنعة لا تزال ترقص.', listLabel: 'أسماء الأقنعة في الحفل',
      names: ['كولومبينا', 'كولومبينو', 'باوتا السوداء', 'باوتا البيضاء', 'الوجه الذهبي', 'الوجه الفضي', 'موريتا', 'موريتو', 'أرليكينو', 'أرليكينا', 'الطبيب الأحمر', 'الطبيب الأخضر', 'القط', 'القطة', 'البدر', 'الهلال', 'بييرو', 'بييريت'],
      places: ['قاعة الرقص', 'مرسى الجندول', 'طاولات الورق', 'قاعة المرايا', 'الشرفة', 'قبو النبيذ', 'شرفة العازفين'],
      beats: ['يقسم صاحب جندول أنه نقل ضيفين بقناعين متطابقين إلى بابين مختلفين في اللحظة نفسها.', 'عزفت الفرقة رقصة فالس لم يطلبها أحد. تُركت النوتة على كرسي، موقعة باسم قناع.', 'وُجد قفاز في قاعة المرايا وفي بطانته قائمة مخيطة.', 'خاتم المضيف مفقود. والمضيف لا يقول مع من رقص آخر مرة.', 'أحدهم أمر بإطفاء الشموع في الجناح الشرقي قبل موعدها بعشر دقائق.', 'رسالة حب وصلت إلى القناع الخطأ. وكلاهما يقول إنها كانت له.'],
      questions: ['مع من رقصت أولاً الليلة؟', 'ما لون الشرائط على قناعك؟', 'من تتجنبه طوال السهرة؟', 'ماذا همست على الشرفة؟', 'أي قناع لن تثق به أبداً، ولماذا؟', 'من غادر القاعة أثناء رقصة الفالس الأخيرة؟']
    }
  },

  train: {
    level: 'Medium',
    look: { bg: '#18120f', surface: '#231a16', rule: '#4a3830', fg: '#f5e9de', dim: '#b9a596', accent: '#c9a96e', onAccent: '#18120f', danger: '#d9534f', good: '#9fc98a', paper: 'ticket', texture: 'planks', display: 'Limelight', displayAr: 'Rakkas', body: 'Alegreya' },
    emblem: '<rect x="22" y="44" width="62" height="40" rx="6"/><path d="M84 56h14v28H84M34 44V28h20v16M30 84v10M58 84v10M82 84v10M12 104h96"/><circle cx="46" cy="64" r="8"/>',
    en: {
      title: 'The Night Train', hook: 'A sleeper train through the Alps, snowed in. Passengers booked under assumed names.',
      intro: 'The sleeper from Vienna to Venice has stopped in a snowdrift somewhere in the Alps. The conductor has a sealed envelope of passenger names, because everyone in first class booked under a false one. By morning, a compartment door was locked from the inside and nobody answered.',
      death: 'did not open their compartment door. The conductor had to break the lock.', quiet: 'Every compartment door opened for the morning coffee.', listLabel: 'Names in the conductor’s envelope',
      names: ['Mr Black', 'Madame Rouge', 'The Countess', 'Herr Doktor', 'Mr Grey', 'Signora Neve', 'The Diplomat', 'Miss Violet', 'The Banker', 'Professor Stern', 'The Courier', 'Baron Weiss', 'The Governess', 'Mr Ashby', 'Lady Frost', 'The Valet', 'Captain Ross', 'Miss Penny'],
      places: ['the Dining Car', 'the Observation Car', 'the Luggage Van', 'the Corridor', 'the Smoking Saloon', 'the Conductor’s Cabin', 'the Platform Door'],
      beats: ['The emergency brake was pulled at 2 a.m. The conductor found no one near it.', 'A cufflink was found in the luggage van, engraved with initials nobody owns.', 'Footprints in the snow lead from the train to the trees and back again.', 'The telegraph wire was cut at the last station, before the snow came.', 'Someone ordered breakfast for a compartment that is supposed to be empty.', 'The coal man says someone paid him to keep the heat off in carriage three.'],
      questions: ['Why did you book under a false name?', 'Who did you share a table with at dinner?', 'What did you hear in the corridor after midnight?', 'Who on this train have you met before?', 'What is in the case you never let out of your sight?', 'Who was smoking alone when the brake was pulled?']
    },
    ar: {
      title: 'قطار الليل', hook: 'قطار نوم يعبر جبال الألب، محاصر بالثلج. ركاب حجزوا بأسماء مستعارة.',
      intro: 'توقف قطار النوم من فيينا إلى البندقية في كومة ثلج في مكان ما من جبال الألب. لدى قاطع التذاكر ظرف مختوم بأسماء الركاب، لأن كل من في الدرجة الأولى حجز باسم مزيف. وفي الصباح، كان باب إحدى المقصورات مغلقاً من الداخل ولم يجب أحد.',
      death: 'لم يفتح باب مقصورته. اضطر قاطع التذاكر إلى كسر القفل.', quiet: 'فُتحت كل أبواب المقصورات لقهوة الصباح.', listLabel: 'الأسماء في ظرف قاطع التذاكر',
      names: ['السيد بلاك', 'مدام روج', 'الكونتيسة', 'الهير دكتور', 'السيد غراي', 'السينيورا نيفي', 'الدبلوماسي', 'الآنسة فايوليت', 'المصرفي', 'البروفيسور شتيرن', 'الساعي', 'البارون فايس', 'المربية', 'السيد آشبي', 'الليدي فروست', 'الخادم', 'الكابتن روس', 'الآنسة بيني'],
      places: ['عربة الطعام', 'عربة المشاهدة', 'عربة الأمتعة', 'الممر', 'صالون التدخين', 'كابينة قاطع التذاكر', 'باب الرصيف'],
      beats: ['سُحبت فرامل الطوارئ في الثانية فجراً. لم يجد قاطع التذاكر أحداً بقربها.', 'وُجد زر قميص في عربة الأمتعة محفور عليه أحرف لا يملكها أحد.', 'آثار أقدام في الثلج تمتد من القطار إلى الأشجار ثم تعود.', 'قُطع سلك التلغراف في المحطة الأخيرة، قبل أن يأتي الثلج.', 'أحدهم طلب فطوراً لمقصورة يُفترض أنها فارغة.', 'يقول عامل الفحم إن أحدهم دفع له ليبقي التدفئة مطفأة في العربة الثالثة.'],
      questions: ['لماذا حجزت باسم مزيف؟', 'مع من تشاركت الطاولة على العشاء؟', 'ماذا سمعت في الممر بعد منتصف الليل؟', 'من في هذا القطار قابلته من قبل؟', 'ماذا في الحقيبة التي لا تغيب عن عينك؟', 'من كان يدخن وحده عندما سُحبت الفرامل؟']
    }
  },

  pirate: {
    level: 'Easy',
    look: { bg: '#0e1b22', surface: '#15272f', rule: '#2d4a55', fg: '#f3ecd9', dim: '#a6b7b3', accent: '#f2b33d', onAccent: '#0e1b22', danger: '#ef5b4b', good: '#8bd49a', paper: 'parchment', texture: 'waves', display: 'Pirata One', displayAr: 'Lalezar', body: 'Alegreya' },
    emblem: '<circle cx="60" cy="22" r="8"/><path d="M60 30v74M40 44h40M24 76c4 18 18 28 36 28s32-10 36-28M24 76l-6 6M24 76l8 4M96 76l6 6M96 76l-8 4"/>',
    en: {
      title: 'The Gilded Gull', hook: 'A pirate ship, a buried treasure map torn into pieces, and a mutineer in the crew.',
      intro: 'The Gilded Gull sails for an island nobody else can find, guided by a treasure map torn into pieces and shared among the crew. Pirates here go by their sea names, and the captain says that is good enough. But crew members keep going overboard at night, and their pieces of the map go with them.',
      death: 'went over the rail in the night. Only their boots were left on deck.', quiet: 'Every hammock was full at the morning bell.', listLabel: 'Sea names on the ship’s articles',
      names: ['Peg Leg', 'Barnacle', 'One-Eye', 'Powder Monkey', 'Bilge Rat', 'Salty', 'Cutlass', 'Parrot', 'The Cook', 'Rum Barrel', 'Seagull', 'Hook', 'Black Flag', 'Doubloon', 'Crow’s Nest', 'Plank', 'Tide', 'Anchor'],
      places: ['the Crow’s Nest', 'the Galley', 'the Powder Room', 'the Captain’s Cabin', 'the Rum Hold', 'the Bow', 'the Brig'],
      beats: ['The rum ration was watered down. Someone wants the crew sloppy tonight.', 'A piece of the map was found nailed to the mast with a dagger.', 'The parrot keeps repeating a name nobody admits to teaching it.', 'The ship’s compass was found in the bilge, smashed.', 'A rowboat is missing from the stern. Every pirate claims they were asleep.', 'Fresh footprints of salt water lead into the captain’s cabin, and the captain was on deck.'],
      questions: ['How did you lose your last ship?', 'Who would you never share a rum barrel with?', 'What did you see from the crow’s nest?', 'Which piece of the map do you guard?', 'Who sings the loudest shanties, and why do you think so?', 'Who was on deck when the rowboat went missing?']
    },
    ar: {
      title: 'النورس المذهّب', hook: 'سفينة قراصنة، وخريطة كنز ممزقة إلى قطع، ومتمرد بين الطاقم.',
      intro: 'تبحر سفينة «النورس المذهّب» نحو جزيرة لا يجدها أحد غيرهم، بإرشاد خريطة كنز ممزقة إلى قطع موزعة على الطاقم. القراصنة هنا يتنادون بأسماء البحر، والقبطان يقول إن هذا يكفي. لكن أفراد الطاقم يسقطون في البحر ليلاً، وقطعهم من الخريطة تذهب معهم.',
      death: 'سقط من فوق السياج في الليل. لم يبقَ على السطح إلا حذاؤه.', quiet: 'كل الأراجيح كانت ممتلئة عند جرس الصباح.', listLabel: 'أسماء البحر في عقد السفينة',
      names: ['الرجل الخشبية', 'البرنقيل', 'الأعور', 'قرد البارود', 'فأر القاع', 'المالح', 'السيف المعقوف', 'الببغاء', 'الطباخ', 'برميل الرم', 'النورس', 'الخطّاف', 'العلم الأسود', 'الدبلون', 'عش الغراب', 'اللوح', 'المدّ', 'المرساة'],
      places: ['عش الغراب', 'المطبخ', 'مخزن البارود', 'كابينة القبطان', 'مخزن الرم', 'مقدمة السفينة', 'الزنزانة'],
      beats: ['خُففت حصة الرم بالماء. أحدهم يريد الطاقم متراخياً الليلة.', 'وُجدت قطعة من الخريطة مسمّرة على الصاري بخنجر.', 'الببغاء يكرر اسماً لا يعترف أحد بأنه علّمه إياه.', 'وُجدت بوصلة السفينة محطمة في قاع السفينة.', 'قارب تجديف مفقود من المؤخرة. وكل قرصان يقول إنه كان نائماً.', 'آثار أقدام مبللة بماء البحر تقود إلى كابينة القبطان، والقبطان كان على السطح.'],
      questions: ['كيف خسرت سفينتك الأخيرة؟', 'مع من لن تتقاسم برميل رم أبداً؟', 'ماذا رأيت من عش الغراب؟', 'أي قطعة من الخريطة تحرس؟', 'من يغني أعلى أغاني البحارة، ولماذا برأيك؟', 'من كان على السطح عندما اختفى القارب؟']
    }
  },

  west: {
    level: 'Medium',
    look: { bg: '#24170f', surface: '#2f2015', rule: '#5c412b', fg: '#f8e7cc', dim: '#c3a685', accent: '#e07a3f', onAccent: '#1f140d', danger: '#d94f3d', good: '#b4cf7a', paper: 'parchment', texture: 'planks', display: 'Rye', displayAr: 'Lalezar', body: 'Courier Prime' },
    emblem: '<path d="M60 14l12 26 28 2-21 18 7 28-26-15-26 15 7-28-21-18 28-2z"/><circle cx="60" cy="56" r="10"/>',
    en: {
      title: 'Dustwater', hook: 'A frontier town, a saloon full of strangers, and a gunslinger with a list.',
      intro: 'Dustwater is one street, one saloon and one well, and the stagecoach only comes on Sundays. Out here nobody asks your real name, so everyone goes by a handle. Since the new moon, folks have been found at dawn by the water trough. The sheriff is drunk. You will have to settle this yourselves.',
      death: 'was found by the water trough at sunrise.', quiet: 'Sunrise in Dustwater. Every chair at the saloon was full by noon.', listLabel: 'Handles in town',
      names: ['Tumbleweed', 'Rattlesnake', 'Whiskey Pete', 'Dusty', 'The Preacher', 'Silver Spur', 'Calamity', 'Coyote', 'Deadeye', 'Lucky Lou', 'The Undertaker', 'Buckshot', 'Sundown', 'The Blacksmith', 'Prairie Rose', 'Mule Skinner', 'Ace of Spades', 'Doc'],
      places: ['the Saloon', 'the Livery Stable', 'the General Store', 'the Jailhouse', 'the Church', 'the Water Trough', 'the Gold Assay Office'],
      beats: ['Somebody shot out the saloon lamp during a card game. Nobody heard the shot.', 'A wanted poster was nailed to the church door with a name torn off.', 'The stagecoach brought a letter for someone who does not exist in Dustwater.', 'The blacksmith says someone had a horse reshod backwards to fool trackers.', 'A pouch of gold dust was found buried under the jailhouse steps.', 'The piano player swears he saw two shadows leave the saloon and only one come back.'],
      questions: ['What brought you to Dustwater?', 'Who did you lose to at cards last night?', 'What do you keep in your saddlebags?', 'Who in town carries two guns?', 'Where were you when the lamp was shot out?', 'Who would you hire to watch your back?']
    },
    ar: {
      title: 'داستووتر', hook: 'بلدة على الحدود، وحانة مليئة بالغرباء، ومسلّح يحمل قائمة.',
      intro: 'داستووتر شارع واحد وحانة واحدة وبئر واحدة، والعربة لا تأتي إلا يوم الأحد. هنا لا يسأل أحد عن اسمك الحقيقي، فالجميع يُعرف بلقب. ومنذ المحاق، يُعثر على الناس عند الفجر قرب حوض الماء. الشريف سكران. عليكم أن تحلوا الأمر بأنفسكم.',
      death: 'وُجد قرب حوض الماء عند الشروق.', quiet: 'أشرقت الشمس على داستووتر. وامتلأت كل كراسي الحانة قبل الظهر.', listLabel: 'الألقاب في البلدة',
      names: ['الشوك الطائر', 'الأفعى المجلجلة', 'بيت الويسكي', 'المغبّر', 'الواعظ', 'المهماز الفضي', 'الكارثة', 'الذئب', 'العين القاتلة', 'لو المحظوظ', 'الحانوتي', 'الخرطوش', 'الغروب', 'الحدّاد', 'وردة البراري', 'سائس البغال', 'آس البستوني', 'الدكتور'],
      places: ['الحانة', 'إسطبل الخيول', 'المتجر العام', 'السجن', 'الكنيسة', 'حوض الماء', 'مكتب فحص الذهب'],
      beats: ['أحدهم أطلق النار على مصباح الحانة أثناء لعب الورق. لم يسمع أحد الطلقة.', 'سُمّر ملصق «مطلوب» على باب الكنيسة والاسم ممزق.', 'أحضرت العربة رسالة لشخص غير موجود في داستووتر.', 'يقول الحدّاد إن أحدهم ركّب لحصانه حدوات معكوسة ليخدع المتعقبين.', 'وُجد كيس من غبار الذهب مدفوناً تحت درج السجن.', 'يقسم عازف البيانو أنه رأى ظلين يغادران الحانة وظلاً واحداً يعود.'],
      questions: ['ما الذي جاء بك إلى داستووتر؟', 'أمام من خسرت في الورق الليلة الماضية؟', 'ماذا تحمل في خرج حصانك؟', 'من في البلدة يحمل مسدسين؟', 'أين كنت عندما أُطلق النار على المصباح؟', 'من ستستأجر ليحمي ظهرك؟']
    }
  },

  castle: {
    level: 'Medium',
    look: { bg: '#15161a', surface: '#1f2026', rule: '#3d3f4a', fg: '#ecebe6', dim: '#a7a6a0', accent: '#c8433a', onAccent: '#f6f2ea', danger: '#e2584c', good: '#94c27f', paper: 'parchment', texture: 'diamonds', display: 'Cinzel', displayAr: 'Amiri', body: 'Alegreya' },
    emblem: '<path d="M24 104V40h14v10h12V40h20v10h12V40h14v64z"/><path d="M50 104V82a10 10 0 0 1 20 0v22"/><path d="M60 40V14l16 6-16 6"/>',
    en: {
      title: 'Castle Ravensholm', hook: 'A winter court, a dying king, and courtiers known only by their heraldry.',
      intro: 'Snow has sealed the passes to Castle Ravensholm, and the old king will not live to see spring. His court speaks in heraldry: each noble is called by the beast on their banner. Since the first snowfall, nobles have been dying in their chambers, and someone at court is crossing banners off the roll of arms.',
      death: 'was found cold in their chamber, the fire long dead.', quiet: 'Every banner still hung in the great hall at dawn.', listLabel: 'Banners on the roll of arms',
      names: ['The White Stag', 'The Black Boar', 'The Silver Wolf', 'The Red Fox', 'The Golden Lion', 'The Grey Heron', 'The Blue Falcon', 'The Green Serpent', 'The Iron Bear', 'The Twin Swans', 'The Crowned Hare', 'The Raven', 'The Bronze Bull', 'The Night Owl', 'The Sea Horse', 'The Rose', 'The Unicorn', 'The Old Hound'],
      places: ['the Great Hall', 'the Chapel', 'the Kitchens', 'the Armoury', 'the Library Tower', 'the Battlements', 'the King’s Antechamber'],
      beats: ['The king’s physician was found asleep at his post. His wine cup smells of herbs.', 'A banner in the great hall was turned upside down during the night.', 'The castle’s ravens were let out of their cages. Nobody admits to having the key.', 'A letter sealed with the king’s ring was sent south. The ring is still on the king’s hand.', 'Someone has been practising the king’s signature on the backs of old maps.', 'The jester refuses to perform tonight. He says a song he wrote has come true.'],
      questions: ['What do you want when the old king dies?', 'Which house have you sworn secretly to support?', 'Who did you see on the battlements last night?', 'What did the king say to you in private?', 'Which noble would you trust with your sword?', 'Who has been visiting the library tower at night?']
    },
    ar: {
      title: 'قلعة رافنزهولم', hook: 'بلاط شتوي، وملك يحتضر، ونبلاء لا يُعرفون إلا بشعاراتهم.',
      intro: 'أغلق الثلج الممرات إلى قلعة رافنزهولم، والملك العجوز لن يعيش ليرى الربيع. بلاطه يتكلم بلغة الشعارات: كل نبيل يُنادى باسم الحيوان المرسوم على رايته. ومنذ أول تساقط للثلج، بدأ النبلاء يموتون في غرفهم، وأحد رجال البلاط يشطب الرايات من سجل الشعارات.',
      death: 'وُجد بارداً في غرفته، والنار منطفئة منذ زمن.', quiet: 'كل الرايات كانت لا تزال معلقة في القاعة الكبرى عند الفجر.', listLabel: 'الرايات في سجل الشعارات',
      names: ['الأيل الأبيض', 'الخنزير الأسود', 'الذئب الفضي', 'الثعلب الأحمر', 'الأسد الذهبي', 'مالك الحزين الرمادي', 'الصقر الأزرق', 'الأفعى الخضراء', 'الدب الحديدي', 'البجعتان', 'الأرنب المتوّج', 'الغراب', 'الثور البرونزي', 'بومة الليل', 'حصان البحر', 'الوردة', 'وحيد القرن', 'كلب الصيد العجوز'],
      places: ['القاعة الكبرى', 'الكنيسة', 'المطابخ', 'مخزن السلاح', 'برج المكتبة', 'الأسوار', 'غرفة انتظار الملك'],
      beats: ['وُجد طبيب الملك نائماً في مكانه. كأس نبيذه تفوح منه رائحة أعشاب.', 'قُلبت راية في القاعة الكبرى رأساً على عقب خلال الليل.', 'أُطلقت غربان القلعة من أقفاصها. لا أحد يعترف بأن المفتاح معه.', 'أُرسلت رسالة مختومة بخاتم الملك إلى الجنوب. والخاتم لا يزال في يد الملك.', 'أحدهم يتدرب على توقيع الملك على ظهور خرائط قديمة.', 'المهرج يرفض أن يقدّم عرضه الليلة. يقول إن أغنية كتبها قد تحققت.'],
      questions: ['ماذا تريد عندما يموت الملك العجوز؟', 'أي بيت أقسمت سراً على دعمه؟', 'من رأيت على الأسوار الليلة الماضية؟', 'ماذا قال لك الملك على انفراد؟', 'أي نبيل تأتمنه على سيفك؟', 'من يزور برج المكتبة ليلاً؟']
    }
  }
});
