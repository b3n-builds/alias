// Fantasy cases, part three: the grave, the marsh and the strange.
Object.assign(SCENARIOS_DATA, {
  gravewardens: {
    level: 'Hard', world: 'fantasy',
    look: { bg: '#0f1110', surface: '#171a18', rule: '#2f3530', fg: '#e9ede9', dim: '#a2aba3', accent: '#b8c4a0', onAccent: '#0f1110', danger: '#e05555', good: '#d9c27a', paper: 'manila', texture: 'chalk', display: 'Special Elite', displayAr: 'Reem Kufi', body: 'Courier Prime' },
    emblem: '<path d="M36 108V44c0-16 10-26 24-26s24 10 24 26v64z"/><path d="M60 46v32M48 58h24"/>',
    en: {
      title: 'The Gravewardens', hook: 'Guardians of a city of the dead, buried alive one by one, with names that are almost the same.',
      intro: 'The Gravewardens guard the City of the Dead, where the buried don’t always stay buried. Wardens take names from their trade, and after four hundred years of handing them down, the names are almost the same. Someone is putting wardens into fresh graves and filling them in while they still breathe. Do not misread the stones.',
      death: 'was dug up from a fresh grave at dawn, too late.', quiet: 'Every lantern in the lodge was still lit at dawn.', listLabel: 'Warden names on the lodge stones',
      names: ['Mort', 'Mortt', 'Graves', 'Grave', 'Spade', 'Spades', 'Shroud', 'Shrood', 'Coffin', 'Coffyn', 'Wraith', 'Wrath', 'Barrow', 'Burrow', 'Ashes', 'Ashen', 'Tomb', 'Tome'],
      places: ['the Lychgate', 'the Charnel House', 'the Yew Walk', 'the Mausoleum', 'the Lantern Lodge', 'the Paupers’ Field', 'the Bell Post'],
      beats: ['A fresh grave was dug in the paupers’ field last night. Nobody is in it, yet.', 'The lychgate lantern was put out, and the dead walked the yew path till dawn.', 'Two names on the lodge stones were scratched out and re-carved, one letter different.', 'Someone left a shovel in the mausoleum, still wet with earth.', 'The charnel house count is one skull over.', 'The bell post rang at three in the morning. Wardens say only the buried ring it.']
    },
    ar: {
      title: 'حراس القبور', hook: 'حراس مدينة الموتى يُدفنون أحياء واحداً تلو الآخر، بأسماء تكاد تتطابق.',
      intro: 'يحرس حراس القبور مدينة الموتى، حيث لا يبقى المدفونون دائماً في قبورهم. يأخذ الحراس أسماءهم من حرفتهم، وبعد أربعمئة عام من تناقلها صارت الأسماء متطابقة تقريباً. أحدهم يضع الحراس في قبور جديدة ويهيل عليهم التراب وهم يتنفسون. لا تخطئ في قراءة الشواهد.',
      death: 'نُبش من قبر جديد عند الفجر، بعد فوات الأوان.', quiet: 'كانت كل فوانيس البيت لا تزال مضاءة عند الفجر.', listLabel: 'أسماء الحراس على حجارة البيت',
      names: ['موت', 'موات', 'قبور', 'قبر', 'مجرفة', 'مجارف', 'كفن', 'أكفان', 'تابوت', 'توابيت', 'طيف', 'طيوف', 'رابية', 'روابي', 'رماد', 'رمادي', 'ضريح', 'أضرحة'],
      places: ['بوابة المقبرة', 'بيت العظام', 'ممشى الطقسوس', 'الضريح الكبير', 'بيت الفوانيس', 'حقل الفقراء', 'عمود الجرس'],
      beats: ['حُفر قبر جديد في حقل الفقراء الليلة الماضية. لا أحد فيه، حتى الآن.', 'أُطفئ فانوس بوابة المقبرة، فمشى الموتى في ممشى الطقسوس حتى الفجر.', 'خُدش اسمان على حجارة البيت وأعيد نقشهما بحرف مختلف.', 'ترك أحدهم مجرفة في الضريح الكبير، ولا يزال عليها تراب رطب.', 'في بيت العظام جمجمة زائدة عن العدد.', 'رن عمود الجرس في الثالثة فجراً. يقول الحراس إن المدفونين وحدهم يقرعونه.']
    }
  },

  lanternmarsh: {
    level: 'Medium', world: 'fantasy',
    look: { bg: '#0c120f', surface: '#121b16', rule: '#27392f', fg: '#e6f1ea', dim: '#98ada0', accent: '#f5c542', onAccent: '#0c120f', danger: '#ff6b6b', good: '#8fe0b0', paper: 'notebook', texture: 'lanterns', display: 'Cabin Sketch', displayAr: 'Lalezar', body: 'Alegreya' },
    emblem: '<path d="M44 40h32v48H44zM52 40V28h16v12M44 88l-6 12h44l-6-12"/><circle cx="60" cy="64" r="8"/>',
    en: {
      title: 'The Lantern Marsh', hook: 'Marsh folk on stilts and lights that lure people into the pools. Someone is guiding the lights to their doors.',
      intro: 'The marsh folk live in houses on stilts and never walk out after dark, for the marsh lights lead travellers into the deep pools. They go by marsh names so the lights cannot call them. This autumn the lights have come right up to the stilt houses, and marsh folk are being found face down in the shallows, a lantern still burning in one hand.',
      death: 'was found face down in the shallows, a lantern still burning in one hand.', quiet: 'The marsh lights kept their distance all night.', listLabel: 'Marsh names on the causeway post',
      names: ['Bogbean', 'Reed', 'Peat', 'Mire', 'Sedge', 'Cattail', 'Heron', 'Leech', 'Fen', 'Quag', 'Rush', 'Duckweed', 'Mudwort', 'Snipe', 'Bittern', 'Wisp', 'Sphagnum', 'Moor'],
      places: ['the Stilt Houses', 'the Causeway', 'the Drowned Church', 'the Peat Cuttings', 'the Eel Traps', 'the Lantern Post', 'the Island Graveyard'],
      beats: ['A marsh light was seen inside a stilt house, then went out.', 'The causeway planks were loosened near the deep pool.', 'Every eel trap was found empty and turned inside out.', 'Someone has been cutting peat at night and stacking it like a grave.', 'The drowned church bell rang underwater. The whole marsh heard it.', 'A lantern with no wick is still burning on the island graveyard.']
    },
    ar: {
      title: 'مستنقع الفوانيس', hook: 'أهل مستنقع في بيوت على ركائز، وأضواء تستدرج الناس إلى البرك. أحدهم يقود الأضواء إلى أبوابهم.',
      intro: 'يعيش أهل المستنقع في بيوت على ركائز ولا يخرجون بعد الظلام أبداً، فأضواء المستنقع تقود المسافرين إلى البرك العميقة. يُعرفون بأسماء المستنقع حتى لا تناديهم الأضواء. هذا الخريف اقتربت الأضواء حتى البيوت، ويُعثر على أهل المستنقع منكبين على وجوههم في المياه الضحلة، وفانوس لا يزال مشتعلاً في أيديهم.',
      death: 'وُجد منكباً على وجهه في المياه الضحلة، وفانوس لا يزال مشتعلاً في يده.', quiet: 'حافظت أضواء المستنقع على بعدها طوال الليل.', listLabel: 'أسماء المستنقع على عمود الممر',
      names: ['فول المستنقع', 'قصب', 'خث', 'وحل', 'سعد', 'بردي', 'مالك الحزين', 'علقة', 'هور', 'رمال متحركة', 'أسل', 'عدس الماء', 'عشبة الطين', 'شنقب', 'واق', 'شعلة تائهة', 'طحلب الخث', 'بور'],
      places: ['البيوت المرفوعة', 'الممر', 'الكنيسة الغارقة', 'مقاطع الخث', 'مصائد الأنقليس', 'عمود الفانوس', 'مقبرة الجزيرة'],
      beats: ['شوهد ضوء مستنقع داخل أحد البيوت المرفوعة، ثم انطفأ.', 'فُكت ألواح الممر قرب البركة العميقة.', 'وُجدت كل مصائد الأنقليس فارغة ومقلوبة.', 'أحدهم يقطع الخث ليلاً ويكدسه على شكل قبر.', 'رن جرس الكنيسة الغارقة تحت الماء. سمعه المستنقع كله.', 'فانوس بلا فتيل لا يزال يشتعل في مقبرة الجزيرة.']
    }
  },

  waxworks: {
    level: 'Easy', world: 'fantasy',
    look: { bg: '#170f0c', surface: '#221713', rule: '#47302a', fg: '#fbece6', dim: '#c6a59a', accent: '#f0a35e', onAccent: '#170f0c', danger: '#ff5f5f', good: '#8fd29a', paper: 'ticket', texture: 'film', display: 'Limelight', displayAr: 'Rakkas', body: 'Alegreya' },
    emblem: '<path d="M44 108V48h32v60z"/><path d="M60 48c-6-10-4-18 0-28 4 10 6 18 0 28z"/><path d="M52 70h4M64 70h4M54 86c4 4 8 4 12 0"/>',
    en: {
      title: 'Lord Vell’s Waxworks', hook: 'A night locked in a wax museum. New figures keep appearing, and they look like the missing guests.',
      intro: 'Lord Vell invited eighteen strangers to spend a night in his waxworks, promising a fortune to whoever lasted till morning. Each was given a card with a character to play and told never to use their real name inside. The doors locked at midnight. Now new wax figures are appearing in the halls, and they look exactly like the guests who went missing.',
      death: 'is missing. A new wax figure in the Hall of Kings wears their face.', quiet: 'No new figures appeared, and every guest came to breakfast.', listLabel: 'Characters on the guests’ cards',
      names: ['the Painter', 'the Poet', 'the Juggler', 'the Widow', 'the Professor', 'the Dancer', 'the Clockmaker', 'the Sailor', 'the Duchess', 'the Magician', 'the Soldier', 'the Gardener', 'the Singer', 'the Doctor', 'the Fortune Teller', 'the Sculptor', 'the Lamplighter', 'the Orphan'],
      places: ['the Hall of Kings', 'the Chamber of Horrors', 'the Melting Room', 'the Mould Store', 'the Ticket Booth', 'the Mirror Corridor', 'Lord Vell’s Studio'],
      beats: ['A new figure stands in the Hall of Kings. It is wearing a guest’s scarf.', 'The vat in the melting room is warm, though nobody lit the fire.', 'One of the moulds in the store has a guest’s face, made before they arrived.', 'The ticket booth lists nineteen tickets sold. There were eighteen of you.', 'The mirror corridor showed a figure walking behind the group, then didn’t.', 'Lord Vell’s studio smells of fresh wax and lavender, his favourite scent.']
    },
    ar: {
      title: 'متحف الشمع للورد فيل', hook: 'ليلة محبوسين في متحف شمع. تظهر تماثيل جديدة، وهي تشبه الضيوف المفقودين.',
      intro: 'دعا اللورد فيل ثمانية عشر غريباً لقضاء ليلة في متحف الشمع، ووعد بثروة لمن يصمد حتى الصباح. أُعطي كل منهم بطاقة بشخصية يؤديها وطُلب منه ألا يستعمل اسمه الحقيقي في الداخل أبداً. أُقفلت الأبواب عند منتصف الليل. والآن تظهر تماثيل شمعية جديدة في القاعات، تشبه تماماً الضيوف الذين اختفوا.',
      death: 'مفقود. وتمثال شمعي جديد في قاعة الملوك يحمل وجهه.', quiet: 'لم يظهر أي تمثال جديد، وحضر كل الضيوف الفطور.', listLabel: 'الشخصيات على بطاقات الضيوف',
      names: ['الرسام', 'الشاعر', 'لاعب الخفة', 'الأرملة', 'الأستاذ', 'الراقصة', 'صانع الساعات', 'البحار', 'الدوقة', 'الساحر', 'الجندي', 'البستاني', 'المغنية', 'الطبيب', 'قارئة البخت', 'النحات', 'مشعل المصابيح', 'اليتيم'],
      places: ['قاعة الملوك', 'غرفة الرعب', 'غرفة الصهر', 'مخزن القوالب', 'كشك التذاكر', 'رواق المرايا', 'مرسم اللورد فيل'],
      beats: ['تمثال جديد يقف في قاعة الملوك. يرتدي وشاح أحد الضيوف.', 'وعاء غرفة الصهر دافئ، ولم يشعل أحد النار.', 'أحد القوالب في المخزن يحمل وجه ضيف، صُنع قبل وصوله.', 'يذكر كشك التذاكر بيع تسع عشرة تذكرة. وكنتم ثمانية عشر.', 'أظهر رواق المرايا شخصاً يمشي خلف المجموعة، ثم لم يعد يظهر.', 'رائحة مرسم اللورد فيل شمع جديد وخزامى، عطره المفضل.']
    }
  },

  clockwork: {
    level: 'Hard', world: 'fantasy',
    look: { bg: '#14110c', surface: '#1e1a12', rule: '#40371f', fg: '#f6eedb', dim: '#bdae86', accent: '#d9a441', onAccent: '#14110c', danger: '#ff6b5a', good: '#8fd29a', paper: 'badge', texture: 'grid', display: 'Michroma', displayAr: 'Reem Kufi', body: 'IBM Plex Mono' },
    emblem: '<circle cx="60" cy="60" r="22"/><circle cx="60" cy="60" r="6"/><path d="M60 22V12M60 108V98M22 60H12M108 60H98M33 33l-7-7M94 94l-7-7M33 87l-7 7M94 26l-7 7"/>',
    en: {
      title: 'The Clockwork City', hook: 'A city of brass people with worn name-stamps. Someone is unwinding them in their sleep.',
      intro: 'The Clockwork City runs on one enormous spring, wound each night by its brass citizens, who were built with their names stamped on their chests. Many stamps are worn now, and the names blur together. Someone is unwinding citizens in their sleep, leaving them still and silent. If enough of them stop, the great spring stops too.',
      death: 'was found stopped in the street, key removed, spring slack.', quiet: 'Every citizen ticked through the night and wound the great spring at dawn.', listLabel: 'Names stamped on brass chests',
      names: ['Spring', 'Sprung', 'Pinion', 'Pinon', 'Ratchet', 'Rachet', 'Sprocket', 'Socket', 'Piston', 'Pistol', 'Bolt', 'Volt', 'Rivet', 'Rivett', 'Tick', 'Tock', 'Gear', 'Gearwright'],
      places: ['the Great Escapement', 'the Oil Baths', 'the Winding House', 'the Brass Market', 'the Pendulum Square', 'the Foundry', 'the Mainspring Vault'],
      beats: ['The great spring slipped a notch at midnight and the whole city stuttered.', 'A winding key was found in the oil baths, filed to fit any back.', 'The foundry cast one more brass body last night. It has no name stamp yet.', 'Someone has been polishing the worn stamps of sleeping citizens, changing a letter.', 'The pendulum in the square swung backwards for a full minute.', 'The mainspring vault was opened with the mayor’s own key, and the mayor has been stopped for a week.']
    },
    ar: {
      title: 'المدينة الآلية', hook: 'مدينة من أناس نحاسيين بأسماء مختومة باهتة. أحدهم يفك نوابضهم وهم نائمون.',
      intro: 'تعمل المدينة الآلية على نابض هائل واحد، يشده كل ليلة مواطنوها النحاسيون الذين صُنعوا وأسماؤهم مختومة على صدورهم. كثير من الأختام باهتة الآن، والأسماء تختلط ببعضها. أحدهم يفك نوابض المواطنين وهم نائمون، فيتركهم ساكنين صامتين. إن توقف عدد كافٍ منهم، توقف النابض العظيم أيضاً.',
      death: 'وُجد متوقفاً في الشارع، والمفتاح منزوع والنابض مرتخٍ.', quiet: 'دق كل مواطن طوال الليل وشدوا النابض العظيم عند الفجر.', listLabel: 'الأسماء المختومة على الصدور النحاسية',
      names: ['نابض', 'نوابض', 'ترس صغير', 'ترس صغار', 'سقاطة', 'سقاطات', 'عجلة مسننة', 'عجلة مسنونة', 'مكبس', 'مقبس', 'مسمار', 'مسمارة', 'برشام', 'برشامة', 'تك', 'توك', 'ترس', 'صانع التروس'],
      places: ['الميزان العظيم', 'حمامات الزيت', 'بيت الشد', 'السوق النحاسي', 'ساحة البندول', 'المسبك', 'خزنة النابض الرئيسي'],
      beats: ['انزلق النابض العظيم درجة عند منتصف الليل فتعثرت المدينة كلها.', 'وُجد مفتاح شد في حمامات الزيت، مبرود ليناسب أي ظهر.', 'صب المسبك جسداً نحاسياً إضافياً الليلة الماضية. لا ختم اسم عليه بعد.', 'أحدهم يلمّع الأختام الباهتة للمواطنين النائمين، ويغير حرفاً.', 'تأرجح بندول الساحة إلى الخلف دقيقة كاملة.', 'فُتحت خزنة النابض الرئيسي بمفتاح العمدة نفسه، والعمدة متوقف منذ أسبوع.']
    }
  },

  whisperwood: {
    level: 'Medium', world: 'fantasy',
    look: { bg: '#0d140d', surface: '#142014', rule: '#2a4029', fg: '#e9f5e6', dim: '#9fb89b', accent: '#8fd16a', onAccent: '#0d140d', danger: '#ff6b6b', good: '#e0c97a', paper: 'parchment', texture: 'dots', display: 'Marcellus', displayAr: 'Aref Ruqaa', body: 'Alegreya' },
    emblem: '<path d="M60 110V62M60 62C30 62 22 30 60 14c38 16 30 48 0 48z"/><path d="M50 40h4M66 40h4M54 50c4 3 8 3 12 0"/>',
    en: {
      title: 'The Whispering Wood', hook: 'A living forest that keeps any name spoken aloud. Someone is whispering names to the trees.',
      intro: 'The Whispering Wood is alive: its trees listen, its paths move, and its roots remember every name spoken under them. The small folk who live there go by forest names, because a name said aloud in the wood becomes the wood’s to keep. Now the trees are taking them. Folk are found wrapped in roots by morning, and one of you is whispering their names to the trees.',
      death: 'was found wrapped in roots at the foot of the Heart Tree.', quiet: 'The trees were quiet all night and every path led home.', listLabel: 'Forest names carved in the Heart Tree',
      names: ['Acorn', 'Bark', 'Bracken', 'Burl', 'Catkin', 'Dewdrop', 'Gall', 'Hazel', 'Lichen', 'Mistletoe', 'Nettle', 'Pinecone', 'Quill', 'Root', 'Sap', 'Toadstool', 'Twig', 'Willow'],
      places: ['the Heart Tree', 'the Mushroom Ring', 'the Hollow Log', 'the Root Caves', 'the Spring', 'the Thorn Gate', 'the Owl’s Perch'],
      beats: ['A path that has always led home now leads to the Heart Tree.', 'Someone put salt around their bed. The roots stopped at the line.', 'The mushroom ring grew a new circle overnight, with a gap in it.', 'An owl repeated a forest name over and over until dawn.', 'The spring tastes of sap this morning.', 'A new carving appeared on the Heart Tree: a name, half finished.']
    },
    ar: {
      title: 'غابة الهمس', hook: 'غابة حية تحتفظ بأي اسم يُنطق بصوت عالٍ. أحدهم يهمس بالأسماء للأشجار.',
      intro: 'غابة الهمس حية: أشجارها تصغي، ودروبها تتحرك، وجذورها تتذكر كل اسم يُنطق تحتها. يُعرف الصغار الذين يسكنونها بأسماء الغابة، لأن الاسم الذي يُقال بصوت عالٍ في الغابة يصبح ملكاً لها. والآن تأخذهم الأشجار. يُعثر عليهم ملفوفين بالجذور كل صباح، وأحدكم يهمس بأسمائهم للأشجار.',
      death: 'وُجد ملفوفاً بالجذور عند قدم شجرة القلب.', quiet: 'سكتت الأشجار طوال الليل وقاد كل درب إلى البيت.', listLabel: 'أسماء الغابة المنقوشة على شجرة القلب',
      names: ['بلوطة', 'لحاء', 'سرخس', 'عقدة الخشب', 'هرة الصفصاف', 'قطرة ندى', 'عفصة', 'بندق', 'أشنة', 'دبق', 'قراص', 'كوز الصنوبر', 'ريشة القلم', 'جذر', 'نسغ', 'فطر الضفدع', 'غصين', 'صفصاف'],
      places: ['شجرة القلب', 'حلقة الفطر', 'الجذع الأجوف', 'كهوف الجذور', 'النبع', 'بوابة الشوك', 'مجثم البومة'],
      beats: ['درب كان يقود دائماً إلى البيت صار يقود إلى شجرة القلب.', 'وضع أحدهم ملحاً حول سريره. توقفت الجذور عند الخط.', 'نمت لحلقة الفطر دائرة جديدة في الليل، وفيها فجوة.', 'ردد بوم اسم غابة مرة بعد مرة حتى الفجر.', 'طعم النبع نسغ هذا الصباح.', 'ظهر نقش جديد على شجرة القلب: اسم لم يكتمل.']
    }
  },

  sleepersinn: {
    level: 'Medium', world: 'fantasy',
    look: { bg: '#100f1c', surface: '#18162a', rule: '#33305a', fg: '#eeeaff', dim: '#a6a0cf', accent: '#c3a6ff', onAccent: '#100f1c', danger: '#ff6b81', good: '#8fe0b0', paper: 'notebook', texture: 'stars', display: 'Playfair Display', displayAr: 'Amiri', body: 'Alegreya' },
    emblem: '<path d="M44 108V56c0-10 6-16 16-16s16 6 16 16v52z"/><path d="M78 16a14 14 0 1 0 14 22 12 12 0 1 1-14-22z"/>',
    en: {
      title: 'The Sleepers’ Inn', hook: 'An inn inside a dream, where guests vanish from their beds and the building loses a room each night.',
      intro: 'Everyone at the Sleepers’ Inn arrived the same way: they fell asleep somewhere else and woke up here. The innkeeper gave each of you a dream name and warned you never to say your waking name, or you might never wake again. Guests have started vanishing from their beds, and each morning the inn has one room fewer.',
      death: 'did not come down to breakfast. Their room is gone, and the wall is smooth.', quiet: 'Every guest woke in the inn again, and every room was still there.', listLabel: 'Dream names in the guest book',
      names: ['Lullaby', 'Nightcap', 'Featherbed', 'Moonbeam', 'Yawn', 'Slumber', 'Drowse', 'Pillow', 'Snore', 'Daydream', 'Nightlight', 'Stardust', 'Quilt', 'Hush', 'Blanket', 'Reverie', 'Doze', 'Candlewick'],
      places: ['the Common Room', 'the Endless Stair', 'the Room That Wasn’t There', 'the Clock Without Hands', 'the Cellar of Old Dreams', 'the Upside-Down Garden', 'the Front Door'],
      beats: ['The clock without hands struck thirteen.', 'A guest woke with sand from a beach they have never been to.', 'The endless stair has one step fewer than yesterday.', 'Someone wrote a waking name on the front door, then wiped it off.', 'The upside-down garden grew a flower that is really a closed eye.', 'The innkeeper has stopped answering, and the guest book has a new page in a stranger’s hand.']
    },
    ar: {
      title: 'نزل النائمين', hook: 'نزل داخل حلم، يختفي ضيوفه من أسرّتهم ويخسر المبنى غرفة كل ليلة.',
      intro: 'وصل كل من في نزل النائمين بالطريقة نفسها: ناموا في مكان آخر واستيقظوا هنا. أعطى صاحب النزل كلاً منكم اسم حلم وحذره من أن ينطق اسمه في اليقظة أبداً، وإلا فقد لا يستيقظ مرة أخرى. بدأ الضيوف يختفون من أسرّتهم، وكل صباح يصبح في النزل غرفة أقل.',
      death: 'لم ينزل إلى الفطور. اختفت غرفته، والجدار أملس.', quiet: 'استيقظ كل ضيف في النزل من جديد، وبقيت كل الغرف.', listLabel: 'أسماء الأحلام في سجل الضيوف',
      names: ['تهويدة', 'قبعة النوم', 'فراش الريش', 'شعاع القمر', 'تثاؤب', 'سبات', 'نعاس', 'وسادة', 'شخير', 'حلم يقظة', 'ضوء الليل', 'غبار النجوم', 'لحاف', 'سكون', 'بطانية', 'شرود', 'غفوة', 'فتيل الشمعة'],
      places: ['القاعة العامة', 'الدرج اللانهائي', 'الغرفة التي لم تكن هناك', 'الساعة بلا عقارب', 'قبو الأحلام القديمة', 'الحديقة المقلوبة', 'الباب الأمامي'],
      beats: ['دقت الساعة بلا عقارب ثلاث عشرة دقة.', 'استيقظ ضيف وعليه رمل من شاطئ لم يزره قط.', 'في الدرج اللانهائي درجة أقل من الأمس.', 'كتب أحدهم اسم يقظة على الباب الأمامي، ثم مسحه.', 'أنبتت الحديقة المقلوبة زهرة هي في الحقيقة عين مغمضة.', 'توقف صاحب النزل عن الرد، وفي سجل الضيوف صفحة جديدة بخط غريب.']
    }
  },

  endlesslibrary: {
    level: 'Hard', world: 'fantasy',
    look: { bg: '#120f0b', surface: '#1b1711', rule: '#3b3224', fg: '#f4ecdc', dim: '#b8a886', accent: '#d8b26e', onAccent: '#120f0b', danger: '#ff6b5a', good: '#8fd29a', paper: 'card', texture: 'tiles', display: 'Playfair Display', displayAr: 'Amiri', body: 'Alegreya' },
    emblem: '<path d="M60 32c-14-8-30-8-44-4v68c14-4 30-4 44 4 14-8 30-8 44-4V28c-14-4-30-4-44 4zM60 32v68"/>',
    en: {
      title: 'The Endless Library', hook: 'A library with no end and shelves that move at night. Keepers are crushed between them, their names in the margins.',
      intro: 'Nobody has found the end of the Endless Library, and nobody who works there remembers the world outside. Its keepers go by titles of the trade, copied so many times that they have drifted a letter here and a letter there. At night the shelves move. In the morning a keeper is found pressed between two of them, their title written in every margin.',
      death: 'was found pressed flat between two shelves, their title written in every margin.', quiet: 'The shelves stayed where they were and every keeper signed the morning ledger.', listLabel: 'Keepers’ titles in the catalogue',
      names: ['the Archivist', 'the Archivest', 'the Binder', 'the Blinder', 'the Copyist', 'the Copist', 'the Curator', 'the Curater', 'the Indexer', 'the Indexter', 'the Lector', 'the Rector', 'the Margin', 'the Marginal', 'the Quire', 'the Quill', 'the Scribe', 'the Scrive'],
      places: ['the Reading Room', 'the Shelves That Move', 'the Map of Aisles', 'the Bindery', 'the Silent Wing', 'the Catalogue Hall', 'the Lamp Gallery'],
      beats: ['A book titled with a keeper’s name appeared on the shelf of the dead.', 'The map of aisles was redrawn in the night. One aisle now ends in a wall.', 'The glue pot in the bindery holds something red that is not glue.', 'Someone has borrowed the same book every night: the catalogue of keepers.', 'The lamps in the lamp gallery went out in a row, ending at one keeper’s desk.', 'A margin note in a random book reads: I know which of you I am.']
    },
    ar: {
      title: 'المكتبة اللامتناهية', hook: 'مكتبة بلا نهاية ورفوف تتحرك ليلاً. يُسحق الأمناء بينها، وألقابهم في الهوامش.',
      intro: 'لم يجد أحد نهاية المكتبة اللامتناهية، ولا يتذكر أحد ممن يعملون فيها العالم الخارجي. يحمل أمناؤها ألقاب المهنة، وقد نُسخت مرات كثيرة حتى انحرفت حرفاً هنا وحرفاً هناك. في الليل تتحرك الرفوف. وفي الصباح يُعثر على أمين مضغوط بين رفين، ولقبه مكتوب في كل هامش.',
      death: 'وُجد مسطحاً بين رفين، ولقبه مكتوب في كل هامش.', quiet: 'بقيت الرفوف في أماكنها ووقّع كل أمين سجل الصباح.', listLabel: 'ألقاب الأمناء في الفهرس',
      names: ['أمين الأرشيف', 'أمين الأرشيفات', 'المجلد', 'المجلدات', 'الناسخ', 'النساخ', 'القيم', 'القيمة', 'المفهرس', 'المفهرسة', 'القارئ', 'القارئة', 'الهامش', 'الهوامش', 'الملزمة', 'الريشة', 'الكاتب', 'الكتبة'],
      places: ['قاعة القراءة', 'الرفوف المتحركة', 'خريطة الممرات', 'قسم التجليد', 'الجناح الصامت', 'قاعة الفهارس', 'رواق المصابيح'],
      beats: ['ظهر كتاب بعنوان لقب أحد الأمناء على رف الموتى.', 'أعيد رسم خريطة الممرات في الليل. ممر واحد ينتهي الآن بجدار.', 'في وعاء الغراء بقسم التجليد شيء أحمر ليس غراء.', 'أحدهم يستعير الكتاب نفسه كل ليلة: فهرس الأمناء.', 'انطفأت مصابيح الرواق واحداً تلو الآخر، حتى مكتب أحد الأمناء.', 'ملاحظة في هامش كتاب عشوائي تقول: أعرف أياً منكم أنا.']
    }
  },

  mirrorhouse: {
    level: 'Hard', world: 'fantasy',
    look: { bg: '#0f1013', surface: '#17191e', rule: '#33363f', fg: '#f0f1f5', dim: '#a8abb6', accent: '#cfd6e6', onAccent: '#0f1013', danger: '#ff6b6b', good: '#8fe0b0', paper: 'card', texture: 'diamonds', display: 'Marcellus', displayAr: 'Aref Ruqaa', body: 'Alegreya Sans' },
    emblem: '<ellipse cx="60" cy="52" rx="28" ry="38"/><path d="M60 90v18M44 108h32M48 36l18 30"/>',
    en: {
      title: 'The House of Mirrors', hook: 'A house where reflections step out of the mirrors. Guests shatter like glass, and someone isn’t who they were yesterday.',
      intro: 'In the House of Mirrors every guest has a reflection, and on the night of the black moon some of the reflections step out. Nobody here uses a real name, because a reflection that learns your name can take your place. Guests are being found shattered like glass, and someone at the table is not the person they were yesterday. The names are mirror-close. Look twice.',
      death: 'was found shattered across the floor like a broken mirror.', quiet: 'Every reflection stayed in its glass, and every guest still cast one at dawn.', listLabel: 'Names written in the mirror steam',
      names: ['Silver', 'Sliver', 'Gleam', 'Glean', 'Shine', 'Shrine', 'Image', 'Imago', 'Echo', 'Ecco', 'Shade', 'Shard', 'Glass', 'Gloss', 'Facet', 'Facette', 'Prism', 'Prim'],
      places: ['the Hall of a Thousand Faces', 'the Silvering Room', 'the Cracked Gallery', 'the Dark Mirror', 'the Twin Stairs', 'the Ballroom of Reflections', 'the Back of the Glass'],
      beats: ['A guest’s reflection waved before the guest did.', 'The silvering room is short a whole jar of quicksilver.', 'The twin stairs now have the same number of steps. They never did before.', 'A cracked mirror in the gallery shows the room as it will look tomorrow.', 'Someone covered the dark mirror with a sheet. It was found uncovered at dawn.', 'One guest has started parting their hair on the other side.']
    },
    ar: {
      title: 'بيت المرايا', hook: 'بيت تخرج فيه الانعكاسات من المرايا. يتحطم الضيوف كالزجاج، وأحدهم ليس من كان بالأمس.',
      intro: 'في بيت المرايا لكل ضيف انعكاس، وفي ليلة القمر الأسود تخرج بعض الانعكاسات. لا أحد هنا يستعمل اسماً حقيقياً، لأن الانعكاس الذي يعرف اسمك يستطيع أن يأخذ مكانك. يُعثر على ضيوف متحطمين كالزجاج، وأحد الجالسين إلى المائدة ليس الشخص الذي كانه بالأمس. الأسماء متقاربة كالمرآة. انظر مرتين.',
      death: 'وُجد متحطماً على الأرض كمرآة مكسورة.', quiet: 'بقي كل انعكاس في زجاجه، وظل لكل ضيف انعكاس عند الفجر.', listLabel: 'الأسماء المكتوبة على بخار المرآة',
      names: ['فضة', 'شظية فضة', 'وميض', 'لمعة', 'بريق', 'بريقة', 'صورة', 'صور', 'صدى', 'أصداء', 'ظل', 'ظلال', 'زجاج', 'زجاجة', 'وجه', 'أوجه', 'منشور', 'مناشير'],
      places: ['قاعة الألف وجه', 'غرفة التفضيض', 'الرواق المتشقق', 'المرآة المظلمة', 'الدرجان التوأمان', 'قاعة رقص الانعكاسات', 'خلف الزجاج'],
      beats: ['لوّح انعكاس ضيف قبل أن يلوّح الضيف.', 'ينقص غرفة التفضيض جرة كاملة من الزئبق.', 'صار للدرجين التوأمين عدد الدرجات نفسه. لم يكن كذلك من قبل.', 'تُظهر مرآة متشققة في الرواق الغرفة كما ستبدو غداً.', 'غطى أحدهم المرآة المظلمة بملاءة. ووُجدت مكشوفة عند الفجر.', 'بدأ أحد الضيوف يفرق شعره على الجهة الأخرى.']
    }
  },

  mooncarnival: {
    level: 'Easy', world: 'fantasy',
    look: { bg: '#120c18', surface: '#1b1224', rule: '#3a2650', fg: '#f6ecff', dim: '#bba6cf', accent: '#ff9ed2', onAccent: '#120c18', danger: '#ff6b6b', good: '#8fe0b0', paper: 'ticket', texture: 'lanterns', display: 'Rye', displayAr: 'Rakkas', body: 'Alegreya' },
    emblem: '<path d="M60 18L18 94h84z"/><path d="M60 18v76M40 94l20-34 20 34M60 18l6-8"/>',
    en: {
      title: 'The Moonlit Carnival', hook: 'A fae carnival that should have vanished by dawn. Dawn won’t come, and performers freeze mid-act.',
      intro: 'The Moonlit Carnival appears in a field only on nights with no wind, and leaves before dawn. Its performers are fae who took human shapes and human jobs, and none of them has a name of their own, only their act. Tonight the carnival has not left, the dawn has not come, and performers are being found frozen mid-act, smiling.',
      death: 'was found frozen mid-act in the big top, still smiling.', quiet: 'The music played all night and every act took a bow.', listLabel: 'Acts painted on the wagons',
      names: ['the Ringmaster', 'the Fire Eater', 'the Tightrope Walker', 'the Strongman', 'the Fortune Wheel', 'the Knife Thrower', 'the Clown', 'the Puppeteer', 'the Acrobat', 'the Beast Tamer', 'the Mime', 'the Contortionist', 'the Stilt Walker', 'the Organ Grinder', 'the Escape Artist', 'the Sword Swallower', 'the Bearded Lady', 'the Ticket Seller'],
      places: ['the Big Top', 'the Carousel', 'the Fortune Tent', 'the Menagerie', 'the Wagons', 'the Ghost Train', 'the Ferris Wheel'],
      beats: ['The carousel turned all night with no music and no riders.', 'The fortune teller’s cards all came up blank.', 'A beast escaped the menagerie and was found sitting quietly by one wagon.', 'The ghost train came back with one more car than it left with.', 'Someone has been stopping the clocks in the wagons, one by one.', 'The Ferris wheel stopped at the top, and an empty seat swings as if someone just left it.']
    },
    ar: {
      title: 'كرنفال ضوء القمر', hook: 'كرنفال جنيات كان يجب أن يختفي قبل الفجر. الفجر لا يأتي، ويتجمد المؤدون في منتصف عروضهم.',
      intro: 'يظهر كرنفال ضوء القمر في حقل في الليالي التي لا ريح فيها فقط، ويرحل قبل الفجر. مؤدوه جنيات اتخذن أشكال البشر وأعمالهم، ولا اسم لأي منهم، بل عرضه فقط. الليلة لم يرحل الكرنفال، ولم يأت الفجر، ويُعثر على مؤدين متجمدين في منتصف عروضهم، مبتسمين.',
      death: 'وُجد متجمداً في منتصف عرضه داخل الخيمة الكبرى، ولا يزال مبتسماً.', quiet: 'عزفت الموسيقى طوال الليل وانحنى كل عرض للتحية.', listLabel: 'العروض المرسومة على العربات',
      names: ['مدير الحلبة', 'آكل النار', 'سائر الحبل', 'الرجل القوي', 'عجلة الحظ', 'رامي السكاكين', 'المهرج', 'محرك الدمى', 'البهلوان', 'مروض الوحوش', 'الإيمائي', 'المتلوي', 'سائر العصي', 'عازف الأرغن', 'فنان الهروب', 'بالع السيوف', 'السيدة الملتحية', 'بائع التذاكر'],
      places: ['الخيمة الكبرى', 'الدوامة', 'خيمة البخت', 'حديقة الوحوش', 'العربات', 'قطار الأشباح', 'العجلة الدوارة'],
      beats: ['دارت الدوامة طوال الليل بلا موسيقى ولا ركاب.', 'خرجت كل أوراق قارئة البخت بيضاء.', 'هرب وحش من حديقة الوحوش ووُجد جالساً بهدوء قرب عربة بعينها.', 'عاد قطار الأشباح بعربة أكثر مما خرج بها.', 'أحدهم يوقف الساعات في العربات، واحدة تلو الأخرى.', 'توقفت العجلة الدوارة في القمة، ومقعد فارغ يتأرجح كأن أحداً غادره للتو.']
    }
  },

  glassdesert: {
    level: 'Medium', world: 'fantasy',
    look: { bg: '#17110b', surface: '#221910', rule: '#4a3519', fg: '#fdf0dc', dim: '#cbb08a', accent: '#ffb347', onAccent: '#17110b', danger: '#ff5f5f', good: '#8fd29a', paper: 'papyrus', texture: 'dunes', display: 'Limelight', displayAr: 'Lalezar', body: 'Alegreya Sans' },
    emblem: '<circle cx="60" cy="40" r="16"/><path d="M8 90c18-14 34-14 52 0s34 14 52 0M8 106c18-10 34-10 52 0s34 10 52 0"/>',
    en: {
      title: 'The Glass Desert', hook: 'A caravan crossing a desert melted to glass by wizards. Travellers burn from the inside.',
      intro: 'Long ago a war of wizards melted the desert into glass, and now only the caravans cross it, travelling by night when the glass is cool. Caravan folk give up their names at the edge and take names of fire and light. Three nights out, travellers are being found burned from the inside, as if the old wizard fire still lives in one of you.',
      death: 'was found burned from the inside, skin untouched, eyes like coals.', quiet: 'The glass stayed cool all night and every traveller woke at moonrise.', listLabel: 'Fire names on the caravan roll',
      names: ['Mirage', 'Cinder', 'Shimmer', 'Sunstone', 'Glint', 'Dune Glass', 'Heatwave', 'Obsidian', 'Sandglass', 'Scorch', 'Ember Fly', 'Saltpan', 'Quicksilver', 'Sunflare', 'Dustdevil', 'Kiln', 'Furnace', 'Lodestone'],
      places: ['the Lead Wagon', 'the Water Tanks', 'the Shade Tent', 'the Glass Spires', 'the Star Map', 'the Beast Lines', 'the Melted Ruins'],
      beats: ['The water tanks are lower than they should be, and the sand around them is dry.', 'Someone scratched a wizard’s sigil into the glass under the shade tent.', 'The beasts refuse to walk near one wagon.', 'The star map was turned so the caravan drove in a circle for an hour.', 'A melted statue in the ruins has a face from the caravan roll.', 'At moonrise the glass sang, and one traveller sang back.']
    },
    ar: {
      title: 'صحراء الزجاج', hook: 'قافلة تعبر صحراء صهرها السحرة زجاجاً. يحترق المسافرون من الداخل.',
      intro: 'منذ زمن بعيد صهرت حرب بين السحرة الصحراء زجاجاً، والآن لا تعبرها إلا القوافل، تسافر ليلاً حين يبرد الزجاج. يترك أهل القافلة أسماءهم عند الحافة ويأخذون أسماء من النار والضوء. بعد ثلاث ليال من الرحلة يُعثر على مسافرين محترقين من الداخل، كأن نار السحرة القديمة لا تزال تعيش في أحدكم.',
      death: 'وُجد محترقاً من الداخل، جلده سليم وعيناه كالجمر.', quiet: 'بقي الزجاج بارداً طوال الليل واستيقظ كل مسافر عند طلوع القمر.', listLabel: 'أسماء النار في سجل القافلة',
      names: ['سراب', 'جمر', 'لمعان', 'حجر الشمس', 'بريق', 'زجاج الكثبان', 'موجة حر', 'سبج', 'ساعة رملية', 'لفحة', 'ذبابة الجمر', 'ملاحة', 'زئبق', 'وهج الشمس', 'إعصار الغبار', 'فرن الفخار', 'أتون', 'حجر المغناطيس'],
      places: ['العربة الأولى', 'خزانات الماء', 'خيمة الظل', 'أبراج الزجاج', 'خريطة النجوم', 'مربط الدواب', 'الأطلال الذائبة'],
      beats: ['خزانات الماء أقل مما يجب، والرمل حولها جاف.', 'خدش أحدهم ختم ساحر في الزجاج تحت خيمة الظل.', 'ترفض الدواب أن تمشي قرب عربة بعينها.', 'أُديرت خريطة النجوم فسارت القافلة في دائرة ساعة كاملة.', 'تمثال ذائب في الأطلال يحمل وجهاً من سجل القافلة.', 'عند طلوع القمر غنى الزجاج، وغنى له مسافر.']
    }
  }
});
