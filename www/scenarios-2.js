// Egyptian and Arab cases.
Object.assign(SCENARIOS_DATA, {
  nile: {
    level: 'Medium',
    look: { bg: '#0f2027', surface: '#16303a', rule: '#2c4f5c', fg: '#f1eadb', dim: '#a9b9b6', accent: '#e8b867', onAccent: '#14252b', danger: '#e2725b', good: '#8fd1a5', paper: 'ticket', texture: 'waves', display: 'Playfair Display', displayAr: 'Aref Ruqaa', body: 'Alegreya' },
    emblem: '<path d="M14 78h92l-10 16H26z"/><path d="M30 78V58h50v20M40 58V46h20v12"/><circle cx="86" cy="70" r="9"/><path d="M48 46V32M48 32c6-6 14-6 18-12"/><path d="M10 106c10-6 20 6 30 0s20 6 30 0 20 6 30 0"/>',
    en: {
      title: 'The Nile Steamer', hook: 'A 1930s paddle steamer from Luxor to Aswan. Not every cabin will arrive.',
      intro: 'The steamer Cleopatra’s Pearl churns south from Luxor with first-class guests who all travel under pet names, the fashion of the season. On the second night a passenger vanished from the deck and nobody heard a splash. The purser has a list of pet names. So does someone else.',
      death: 'did not answer the breakfast gong. Their cabin was empty and the window open.', quiet: 'Every cabin answered the breakfast gong.', listLabel: 'Pet names on the passenger list',
      names: ['Lotus', 'The Colonel', 'Duchess', 'Scarab', 'Sunshade', 'Papyrus', 'Little Sphinx', 'Monocle', 'Gin Fizz', 'The Painter', 'Bunny', 'Crocodile', 'Silver Spoon', 'Pharaoh', 'Tiara', 'Nightingale', 'The Professor', 'Kitten'],
      places: ['the Sun Deck', 'the Dining Saloon', 'the Card Room', 'the Engine Room', 'the Bow', 'the Library Cabin', 'the Paddle Wheel Gallery'],
      beats: ['The steamer ran aground on a sandbar for an hour. Someone used the dark to move between decks.', 'A telegram arrived at Edfu addressed to a passenger nobody has heard of.', 'The ship’s cat was found locked inside the Colonel’s trunk, unharmed and furious.', 'A sketchbook was left on the sun deck. The last page shows the passenger list with names crossed out.', 'Somebody switched the place cards at dinner. Two guests ended up next to the wrong people.', 'At Kom Ombo, a guide counted the group twice and got two different numbers.'],
      questions: ['Why are you really on this cruise?', 'Who did you dance with last night?', 'What did you bring back from the temple?', 'Who at dinner keeps staring at you?', 'What would you throw overboard if nobody was looking?', 'Who was not at their table during dessert?']
    },
    ar: {
      title: 'باخرة النيل', hook: 'باخرة بعجلة جانبية من الأقصر إلى أسوان في الثلاثينيات. ليست كل الكبائن ستصل.',
      intro: 'تشق الباخرة «لؤلؤة كليوباترا» النيل جنوباً من الأقصر، وعلى متنها ركاب الدرجة الأولى، وكلهم يسافرون بأسماء دلع على موضة الموسم. في الليلة الثانية اختفى راكب من على السطح ولم يسمع أحد صوت سقوط في الماء. لدى المضيف قائمة بأسماء الدلع. ولدى شخص آخر أيضاً.',
      death: 'لم يرد على جرس الإفطار. كانت كابينته فارغة ونافذتها مفتوحة.', quiet: 'ردّت كل الكبائن على جرس الإفطار.', listLabel: 'أسماء الدلع في قائمة الركاب',
      names: ['اللوتس', 'الكولونيل', 'الدوقة', 'الجعران', 'المظلة', 'البردي', 'أبو الهول الصغير', 'المونوكل', 'الشربات', 'الرسام', 'الأرنب', 'التمساح', 'الملعقة الفضية', 'الفرعون', 'التاج', 'العندليب', 'البروفيسور', 'القطة'],
      places: ['السطح المشمس', 'صالة الطعام', 'غرفة الورق', 'غرفة المحركات', 'مقدمة الباخرة', 'كابينة المكتبة', 'شرفة العجلة'],
      beats: ['جنحت الباخرة على كثيب رملي لمدة ساعة. أحدهم استغل الظلام للتنقل بين الطوابق.', 'وصلت برقية في إدفو باسم راكب لم يسمع به أحد.', 'وُجدت قطة الباخرة محبوسة داخل حقيبة الكولونيل، سليمة وغاضبة جداً.', 'دفتر رسم تُرك على السطح المشمس. آخر صفحة فيه تُظهر قائمة الركاب وعليها أسماء مشطوبة.', 'أحدهم بدّل بطاقات الأماكن على العشاء. جلس ضيفان بجوار الأشخاص الخطأ.', 'في كوم أمبو، عدّ المرشد المجموعة مرتين وحصل على رقمين مختلفين.'],
      questions: ['لماذا أنت حقاً في هذه الرحلة؟', 'مع من رقصت الليلة الماضية؟', 'ماذا أحضرت معك من المعبد؟', 'من على العشاء يظل يحدّق فيك؟', 'ماذا سترمي في النيل لو لم يكن أحد ينظر؟', 'من لم يكن على طاولته وقت الحلوى؟']
    }
  },

  metro: {
    level: 'Easy',
    look: { bg: '#141a24', surface: '#1c2533', rule: '#33415a', fg: '#eef1f6', dim: '#9aa6b8', accent: '#ffcc33', onAccent: '#141a24', danger: '#ff6b5e', good: '#7dd99a', paper: 'ticket', texture: 'grid', display: 'Chakra Petch', displayAr: 'Lalezar', body: 'Alegreya Sans' },
    emblem: '<rect x="30" y="18" width="60" height="72" rx="12"/><path d="M30 56h60M42 32h36v14H42z"/><circle cx="44" cy="72" r="5"/><circle cx="76" cy="72" r="5"/><path d="M40 90l-10 16M80 90l10 16M34 100h52"/>',
    en: {
      title: 'The Last Metro', hook: 'The last train on Cairo’s Line 1 stops in a tunnel. The lights flicker.',
      intro: 'It is past midnight and the last metro has stopped between Sadat and Nasser stations. The driver says it is a signal fault. The regulars in this carriage only know each other by nicknames from years of riding together. Every time the lights flicker, someone else is gone.',
      death: 'was not in the carriage when the lights came back on.', quiet: 'The lights came back on. Everyone was still in their seat.', listLabel: 'Nicknames of the regulars',
      names: ['Headphones', 'The Student', 'Uncle Tea', 'Sunglasses', 'Newspaper', 'The Engineer', 'Peanut Seller', 'Backpack', 'Sleepy', 'The Nurse', 'Football Shirt', 'Umbrella Lady', 'Gamer', 'Red Scarf', 'The Accountant', 'Guitar Case', 'Night Guard', 'Grandma Rose'],
      places: ['the First Carriage', 'the Women’s Carriage', 'the Middle Doors', 'the Last Carriage', 'the Driver’s Door', 'the Emergency Phone', 'the Folding Seats'],
      beats: ['The intercom crackled and read out a station that does not exist on Line 1.', 'A ticket was found on the floor, stamped tomorrow’s date.', 'Someone’s phone kept ringing in a bag that nobody claims.', 'The emergency handle was pulled, but the seal is unbroken.', 'A trail of sunflower seed shells leads to the connecting door and stops.', 'The driver swears he counted one more passenger than the carriage can seat.'],
      questions: ['What station were you going to, and why so late?', 'Who did you see get on at the last stop?', 'What is in your bag right now?', 'Who on this train do you see every day but never talk to?', 'What were you doing on your phone when the lights went out?', 'Who moved seats after the train stopped?']
    },
    ar: {
      title: 'آخر مترو', hook: 'آخر قطار على الخط الأول في القاهرة يتوقف في النفق. والأنوار تومض.',
      intro: 'تجاوزت الساعة منتصف الليل، وآخر مترو توقف بين محطتي السادات وجمال عبد الناصر. يقول السائق إنه عطل في الإشارة. ركاب هذه العربة الدائمون لا يعرفون بعضهم إلا بألقاب من سنين الركوب معاً. وكلما ومضت الأنوار، يختفي أحدهم.',
      death: 'لم يكن في العربة عندما عادت الأنوار.', quiet: 'عادت الأنوار. وكان الجميع في مقاعدهم.', listLabel: 'ألقاب الركاب الدائمين',
      names: ['السماعات', 'الطالب', 'عم الشاي', 'النظارة السوداء', 'الجرنال', 'المهندس', 'بياع السوداني', 'الشنطة', 'النعسان', 'الممرضة', 'تيشرت الكورة', 'ست الشمسية', 'الجيمر', 'الكوفية الحمراء', 'المحاسب', 'شنطة الجيتار', 'الغفير', 'تيتة ورد'],
      places: ['العربة الأولى', 'عربة السيدات', 'الأبواب الوسطى', 'العربة الأخيرة', 'باب السائق', 'هاتف الطوارئ', 'المقاعد القابلة للطي'],
      beats: ['خشخش الميكروفون وأعلن اسم محطة غير موجودة على الخط الأول.', 'وُجدت تذكرة على الأرض مختومة بتاريخ الغد.', 'هاتف ظل يرن في حقيبة لا يعترف بها أحد.', 'سُحبت يد الطوارئ، لكن الختم لم ينكسر.', 'أثر من قشر اللب يقود إلى باب الوصلة ثم يتوقف.', 'يقسم السائق أنه عدّ راكباً زائداً عن عدد مقاعد العربة.'],
      questions: ['إلى أي محطة كنت ذاهباً، ولماذا متأخراً هكذا؟', 'من رأيته يركب في المحطة الأخيرة؟', 'ماذا في حقيبتك الآن؟', 'من في هذا القطار تراه كل يوم ولا تكلمه أبداً؟', 'ماذا كنت تفعل على هاتفك عندما انطفأت الأنوار؟', 'من غيّر مقعده بعد توقف القطار؟']
    }
  },

  library: {
    level: 'Hard',
    look: { bg: '#1e1a14', surface: '#29231a', rule: '#4d4130', fg: '#f2e8d2', dim: '#b5a688', accent: '#7fb3d5', onAccent: '#141210', danger: '#de6b4f', good: '#a8cf86', paper: 'papyrus', texture: 'dots', display: 'Marcellus', displayAr: 'Amiri', body: 'Alegreya' },
    emblem: '<path d="M34 22h52a8 8 0 0 1 0 16H34"/><path d="M34 22a8 8 0 0 0 0 16v58a8 8 0 0 0 8 8h52a8 8 0 0 1-8-8V38"/><path d="M46 54h30M46 66h30M46 78h22"/>',
    en: {
      title: 'The Great Library', hook: 'Alexandria, 48 BC. Scholars with near-identical epithets. A scroll thief who kills.',
      intro: 'Smoke from the harbour drifts over the Great Library of Alexandria. The scholars here sign their work with epithets, and many are maddeningly alike. One of them is erasing rivals from the catalogue and then from the world. Read carefully. A single letter may be the difference.',
      death: 'was found slumped over an unrolled scroll, the lamp still burning.', quiet: 'Every reading desk was occupied at dawn.', listLabel: 'Epithets in the catalogue',
      names: ['Theon the Elder', 'Theon the Younger', 'Hypatos', 'Hypatia’s Pupil', 'Ptolemaios', 'Ptolemais', 'Callimachus', 'Callinicus', 'Aristarchos', 'Aristobulos', 'Eratos', 'Eratostratos', 'Heron', 'Herophilos', 'Demetrios', 'Demetria', 'Philo', 'Philon'],
      places: ['the Reading Hall', 'the Copying Room', 'the Harbour Steps', 'the Observatory Roof', 'the Garden of the Muses', 'the Scroll Vaults', 'the Lecture Hall'],
      beats: ['A catalogue entry was scraped clean and rewritten in a steadier hand.', 'Ink of Tyrian purple, worth more than gold, was spilled across the copying room floor.', 'A ship from Rhodes delivered a crate of scrolls addressed to a scholar who died last year.', 'The water clock in the lecture hall stopped exactly at the third hour.', 'Someone borrowed every scroll on poisons and returned them in the wrong order.', 'Two scholars signed the same commentary. Each swears the other is lying.'],
      questions: ['Which scroll are you copying, and for whom?', 'Who corrected your work this week?', 'What did you argue about in the lecture hall?', 'Which scholar would you most like to see leave Alexandria?', 'Where do you go when the lamps are lit?', 'Whose handwriting do you recognise on the catalogue?']
    },
    ar: {
      title: 'المكتبة العظمى', hook: 'الإسكندرية، 48 قبل الميلاد. علماء بألقاب شبه متطابقة. وسارق مخطوطات يقتل.',
      intro: 'يتسلل دخان الميناء فوق مكتبة الإسكندرية العظمى. يوقّع العلماء هنا أعمالهم بألقاب، وكثير منها متشابه إلى حد مزعج. أحدهم يمحو منافسيه من الفهرس، ثم من الدنيا. اقرأوا بعناية. حرف واحد قد يصنع الفرق.',
      death: 'وُجد منكفئاً على مخطوطة مفتوحة، والمصباح لا يزال مشتعلاً.', quiet: 'كل طاولات القراءة كانت مشغولة عند الفجر.', listLabel: 'الألقاب في الفهرس',
      names: ['ثيون الأكبر', 'ثيون الأصغر', 'هيباتوس', 'تلميذ هيباتيا', 'بطليموس', 'بطليمايس', 'كاليماخوس', 'كالينيكوس', 'أرسطرخس', 'أرسطوبولس', 'إراتوس', 'إراتوستراتوس', 'هيرون', 'هيروفيلوس', 'ديمتريوس', 'ديمتريا', 'فيلو', 'فيلون'],
      places: ['قاعة القراءة', 'غرفة النسخ', 'درج الميناء', 'سطح المرصد', 'حديقة ربات الفنون', 'أقبية المخطوطات', 'قاعة المحاضرات'],
      beats: ['مُسح مدخل في الفهرس وأعيدت كتابته بيد أكثر ثباتاً.', 'حبر أرجواني صوري، أغلى من الذهب، انسكب على أرض غرفة النسخ.', 'سفينة من رودس سلّمت صندوق مخطوطات باسم عالم مات العام الماضي.', 'توقفت الساعة المائية في قاعة المحاضرات عند الساعة الثالثة تماماً.', 'أحدهم استعار كل مخطوطات السموم وأعادها بترتيب خاطئ.', 'عالمان وقّعا الشرح نفسه. كل منهما يقسم أن الآخر يكذب.'],
      questions: ['أي مخطوطة تنسخ، ولمن؟', 'من صحّح عملك هذا الأسبوع؟', 'على ماذا تجادلت في قاعة المحاضرات؟', 'أي عالم تتمنى أكثر أن يغادر الإسكندرية؟', 'أين تذهب عندما تُشعل المصابيح؟', 'خط من تعرفه في الفهرس؟']
    }
  },

  caravan: {
    level: 'Medium',
    look: { bg: '#2a1a10', surface: '#362316', rule: '#61422a', fg: '#fbe9cf', dim: '#c9a983', accent: '#f08c3a', onAccent: '#24150c', danger: '#e45a4a', good: '#b9d77e', paper: 'parchment', texture: 'dunes', display: 'Reem Kufi', displayAr: 'Rakkas', body: 'Alegreya' },
    emblem: '<path d="M14 94c14-10 28-10 42 0s28 10 42 0"/><path d="M30 78c0-14 8-22 16-22s10 8 16 8 8-10 16-10 10 6 10 14v10"/><path d="M88 68l8-14 7 2M38 78v14M54 78v14M72 78v14M86 78v14"/><circle cx="96" cy="24" r="8"/>',
    en: {
      title: 'The Siwa Caravan', hook: 'Forty camels, one sandstorm, and travellers who only use desert names.',
      intro: 'The caravan left the Nile valley for the oasis of Siwa nine days ago. Out here people go by desert names, and asking for a real one is an insult. Last night the sandstorm came, and when it cleared, one bedroll was empty. The guide says the desert takes the careless. The desert does not write lists.',
      death: 'was gone at dawn. Only footprints walking out into the dunes.', quiet: 'At dawn the guide counted every bedroll. None were empty.', listLabel: 'Desert names in the caravan',
      names: ['Falcon', 'Mirage', 'The Salt Trader', 'Scorpion', 'Date Palm', 'North Star', 'The Water Bearer', 'Sandstorm', 'Oasis', 'Jackal', 'The Poet', 'Copper Kettle', 'Gazelle', 'Dune Walker', 'The Healer', 'Camel Bell', 'Wind Song', 'Black Tent'],
      places: ['the Lead Camels', 'the Cooking Fire', 'the Water Skins', 'the Guide’s Tent', 'the Lookout Dune', 'the Rear Guard', 'the Salt Bags'],
      beats: ['Two water skins were found slashed. There is enough left, if nobody else drinks too much.', 'The guide’s compass was turned to face the wrong north while he slept.', 'A camel came back alone from the east, still saddled.', 'Someone buried something under the cooking fire. The sand is still warm.', 'A traveller from another caravan passed by and asked for someone by a name nobody here uses.', 'The stars were clear all night, yet someone says they got lost going to the water.'],
      questions: ['Why are you crossing the desert?', 'Who shared your water yesterday?', 'What did you see from the lookout dune?', 'Who talks in their sleep?', 'What would you trade your camel for?', 'Who was awake during the storm?']
    },
    ar: {
      title: 'قافلة سيوة', hook: 'أربعون جملاً، وعاصفة رملية واحدة، ومسافرون لا يستخدمون إلا أسماء الصحراء.',
      intro: 'غادرت القافلة وادي النيل نحو واحة سيوة قبل تسعة أيام. هنا يتنادى الناس بأسماء الصحراء، وسؤال أحدهم عن اسمه الحقيقي إهانة. الليلة الماضية هبّت العاصفة الرملية، وعندما انقشعت كان أحد الفُرش خالياً. يقول الدليل إن الصحراء تأخذ المهملين. لكن الصحراء لا تكتب قوائم.',
      death: 'اختفى مع الفجر. لم يبق إلا آثار أقدام تمشي نحو الكثبان.', quiet: 'عند الفجر عدّ الدليل كل الفُرش. لم يكن أي منها خالياً.', listLabel: 'أسماء الصحراء في القافلة',
      names: ['الصقر', 'السراب', 'تاجر الملح', 'العقرب', 'النخلة', 'نجم الشمال', 'حامل الماء', 'العاصفة', 'الواحة', 'ابن آوى', 'الشاعر', 'الإبريق النحاسي', 'الغزال', 'ماشي الكثبان', 'الحكيم', 'جرس الجمل', 'أغنية الريح', 'الخيمة السوداء'],
      places: ['الجمال الأولى', 'نار الطبخ', 'قِرب الماء', 'خيمة الدليل', 'كثيب المراقبة', 'مؤخرة القافلة', 'أكياس الملح'],
      beats: ['وُجدت قربتا ماء مشقوقتين. ما تبقى يكفي، إن لم يشرب أحد أكثر من حقه.', 'أُديرت بوصلة الدليل نحو شمال خاطئ وهو نائم.', 'عاد جمل وحده من الشرق، وسرجه لا يزال عليه.', 'أحدهم دفن شيئاً تحت نار الطبخ. الرمل لا يزال دافئاً.', 'مرّ مسافر من قافلة أخرى وسأل عن شخص باسم لا يستخدمه أحد هنا.', 'كانت النجوم صافية طوال الليل، ومع ذلك يقول أحدهم إنه ضلّ الطريق إلى الماء.'],
      questions: ['لماذا تعبر الصحراء؟', 'من شاركك ماءه البارحة؟', 'ماذا رأيت من كثيب المراقبة؟', 'من يتكلم وهو نائم؟', 'بماذا تقايض جملك؟', 'من كان مستيقظاً أثناء العاصفة؟']
    }
  },

  ramadan: {
    level: 'Easy',
    look: { bg: '#170f2a', surface: '#221838', rule: '#3f3163', fg: '#f6efff', dim: '#b4a7cf', accent: '#ffc65c', onAccent: '#1b1230', danger: '#ff7a6b', good: '#8fe3b0', paper: 'card', texture: 'lanterns', display: 'Aref Ruqaa', displayAr: 'Aref Ruqaa', body: 'Alegreya Sans' },
    emblem: '<path d="M80 14a26 26 0 1 0 26 36 22 22 0 1 1-26-36z"/><path d="M40 42h22l6 10H34zM36 52h30l-4 32H40zM40 84h22l-4 8H44zM51 30v12"/>',
    en: {
      title: 'Ramadan Nights', hook: 'Khan el-Khalili after iftar. Lanterns, sweets, and one person who isn’t fasting from murder.',
      intro: 'After iftar the old streets of Khan el-Khalili fill with lanterns, music and the smell of konafa. Tonight a group of friends is out until suhoor, everyone wearing a nickname from childhood. Then the musaharati’s drum sounded, and one of you never came back to the table.',
      death: 'never came back to the suhoor table. Their tea went cold.', quiet: 'Everyone was back at the table when the musaharati passed.', listLabel: 'Childhood nicknames',
      names: ['Konafa', 'Fanoos', 'Qatayef', 'Mesaharati', 'Kharoub', 'Tamr Hindi', 'Basbousa', 'Little Moon', 'Sobia', 'Lantern Seller', 'Fawazeer', 'Cannon', 'Yamish', 'Sahlab', 'Dates', 'Drummer', 'Mint Tea', 'Crescent'],
      places: ['El-Fishawy Café', 'the Lantern Stalls', 'the Hussein Square', 'the Sweets Shop', 'the Rooftop', 'the Spice Lane', 'the Old Gate of Bab el-Futuh'],
      beats: ['The iftar cannon fired a second time an hour late. Nobody knows who lit it.', 'A lantern seller swears someone bought every red lantern he had and paid in old coins.', 'A plate of konafa was found untouched with a name written in syrup across it.', 'The musaharati’s drum was found abandoned in an alley, its skin cut.', 'Someone’s phone sent a voice note to the whole group. It was only street noise and a laugh.', 'The waiter at El-Fishawy says he served one more tea than there were people at the table.'],
      questions: ['What was the best thing you ate at iftar?', 'Who did you sneak away with after the prayers?', 'What did you buy at the lantern stalls?', 'Who at this table would make the worst musaharati?', 'What did you wish for when the cannon fired?', 'Who left the table during the music, and for how long?']
    },
    ar: {
      title: 'ليالي رمضان', hook: 'خان الخليلي بعد الإفطار. فوانيس وحلويات، وشخص واحد لا يصوم عن القتل.',
      intro: 'بعد الإفطار تمتلئ شوارع خان الخليلي القديمة بالفوانيس والموسيقى ورائحة الكنافة. الليلة تسهر مجموعة أصدقاء حتى السحور، وكل واحد يحمل لقباً من أيام الطفولة. ثم دقّ طبل المسحراتي، وواحد منكم لم يعد إلى الطاولة أبداً.',
      death: 'لم يعد إلى طاولة السحور. وبرد شايه.', quiet: 'كان الجميع على الطاولة عندما مرّ المسحراتي.', listLabel: 'ألقاب الطفولة',
      names: ['كنافة', 'فانوس', 'قطايف', 'مسحراتي', 'خروب', 'تمر هندي', 'بسبوسة', 'قمر صغير', 'سوبيا', 'بياع الفوانيس', 'فوازير', 'مدفع', 'ياميش', 'سحلب', 'بلح', 'الطبال', 'شاي بالنعناع', 'هلال'],
      places: ['قهوة الفيشاوي', 'دكاكين الفوانيس', 'ميدان الحسين', 'محل الحلويات', 'السطح', 'حارة العطارين', 'باب الفتوح'],
      beats: ['انطلق مدفع الإفطار مرة ثانية بعد ساعة من موعده. لا أحد يعرف من أشعله.', 'يقسم بائع الفوانيس أن أحدهم اشترى كل فوانيسه الحمراء ودفع بعملات قديمة.', 'وُجد طبق كنافة لم يُلمس، وعليه اسم مكتوب بالشربات.', 'وُجد طبل المسحراتي متروكاً في حارة وجلده مقطوع.', 'هاتف أحدهم أرسل رسالة صوتية للمجموعة كلها. لم يكن فيها إلا ضجيج الشارع وضحكة.', 'يقول عامل الفيشاوي إنه قدّم كوب شاي زائداً عن عدد الجالسين.'],
      questions: ['ما أحلى شيء أكلته على الإفطار؟', 'مع من تسللت بعد الصلاة؟', 'ماذا اشتريت من دكاكين الفوانيس؟', 'من على هذه الطاولة سيكون أسوأ مسحراتي؟', 'بماذا تمنيت عندما انطلق المدفع؟', 'من ترك الطاولة أثناء الموسيقى، وكم غاب؟']
    }
  },

  dig: {
    level: 'Hard',
    look: { bg: '#201a12', surface: '#2b2318', rule: '#544531', fg: '#f4e6c8', dim: '#bba886', accent: '#d9a441', onAccent: '#1e170e', danger: '#d9574a', good: '#9cc77f', paper: 'manila', texture: 'dunes', display: 'Special Elite', displayAr: 'Rakkas', body: 'Courier Prime' },
    emblem: '<path d="M20 100V52l40-32 40 32v48"/><path d="M46 100V68h28v32"/><path d="M12 104h96"/><path d="M60 38v14M54 44h12"/>',
    en: {
      title: 'The Valley Dig', hook: 'Valley of the Kings, 1922. A sealed tomb, a dig team with code names, and a curse that keeps its own list.',
      intro: 'Behind a sealed door in the Valley of the Kings lies a tomb nobody has entered for three thousand years. The expedition uses code names so the newspapers cannot follow the story. Since the seal was broken, team members have started to die, and the locals say it is the curse. Curses do not keep handwritten lists.',
      death: 'was found at the bottom of the shaft, lantern still in hand.', quiet: 'Every lamp was lit at the morning briefing.', listLabel: 'Code names on the expedition roster',
      names: ['Lord C', 'Lady C', 'Doctor H', 'Doctor B', 'Mister L', 'Mister M', 'Reis Ahmed', 'Reis Hamid', 'The Photographer', 'The Draughtsman', 'The Chemist', 'The Conservator', 'Professor N', 'Professor W', 'Miss E', 'Miss R', 'The Journalist', 'The Translator'],
      places: ['the Burial Chamber', 'the Antechamber', 'the Darkroom', 'the Mess Tent', 'the Spoil Heap', 'the Rest House', 'the Donkey Track'],
      beats: ['The burial chamber’s new padlock was found open, with no key missing.', 'A photographic plate shows a figure in the antechamber at an hour when nobody was there.', 'The canary in the dig house was found dead. The locals will not enter the tomb today.', 'A telegram to London was sent from the dig house, signed with a code name nobody admits to.', 'Three small objects are missing from the inventory. The handwriting in the ledger has changed.', 'The Translator found a new line painted on the tomb wall. The paint is modern.'],
      questions: ['What did you find in the antechamber today?', 'Who do you think sold the story to the newspapers?', 'What would you take from the tomb if nobody was watching?', 'Who was the last one out of the tomb yesterday?', 'Do you believe in the curse, and why?', 'Whose notes do you never get to read?']
    },
    ar: {
      title: 'حفرية الوادي', hook: 'وادي الملوك، 1922. مقبرة مختومة، وفريق تنقيب بأسماء رمزية، ولعنة تحتفظ بقائمتها الخاصة.',
      intro: 'خلف باب مختوم في وادي الملوك ترقد مقبرة لم يدخلها أحد منذ ثلاثة آلاف عام. تستخدم البعثة أسماء رمزية حتى لا تتبع الصحف القصة. ومنذ كُسر الختم، بدأ أعضاء الفريق يموتون، ويقول أهل القرية إنها اللعنة. لكن اللعنات لا تكتب قوائم بخط اليد.',
      death: 'وُجد في قاع البئر، والفانوس لا يزال في يده.', quiet: 'كل المصابيح كانت مضاءة في اجتماع الصباح.', listLabel: 'الأسماء الرمزية في سجل البعثة',
      names: ['اللورد ك', 'الليدي ك', 'الدكتور هـ', 'الدكتور ب', 'السيد ل', 'السيد م', 'الريس أحمد', 'الريس حامد', 'المصور', 'الرسام', 'الكيميائي', 'المرمم', 'البروفيسور ن', 'البروفيسور و', 'الآنسة إ', 'الآنسة ر', 'الصحفي', 'المترجم'],
      places: ['حجرة الدفن', 'الحجرة الأمامية', 'الغرفة المظلمة', 'خيمة الطعام', 'كومة الردم', 'استراحة البعثة', 'طريق الحمير'],
      beats: ['وُجد القفل الجديد لحجرة الدفن مفتوحاً، ولم يُفقد أي مفتاح.', 'لوح فوتوغرافي يُظهر شخصاً في الحجرة الأمامية في ساعة لم يكن فيها أحد هناك.', 'وُجد الكناري في بيت البعثة ميتاً. لن يدخل العمال المقبرة اليوم.', 'أُرسلت برقية إلى لندن من بيت البعثة، موقعة باسم رمزي لا يعترف به أحد.', 'ثلاث قطع صغيرة مفقودة من سجل الجرد. وتغيّر الخط في الدفتر.', 'وجد المترجم سطراً جديداً مرسوماً على جدار المقبرة. والطلاء حديث.'],
      questions: ['ماذا وجدت في الحجرة الأمامية اليوم؟', 'من تظن أنه باع القصة للصحف؟', 'ماذا كنت ستأخذ من المقبرة لو لم يكن أحد يراقب؟', 'من كان آخر من خرج من المقبرة البارحة؟', 'هل تؤمن باللعنة، ولماذا؟', 'ملاحظات من لا يُسمح لك بقراءتها أبداً؟']
    }
  },

  deir: {
    level: 'Medium',
    look: { bg: '#1f1913', surface: '#2a2219', rule: '#51432f', fg: '#f6ead3', dim: '#bfab88', accent: '#3fb0a5', onAccent: '#14110c', danger: '#e0644f', good: '#b0d082', paper: 'papyrus', texture: 'dots', display: 'Cinzel', displayAr: 'Aref Ruqaa', body: 'Alegreya' },
    emblem: '<path d="M60 52c-12 0-18-10-18-20s8-18 18-18 18 8 18 18-6 20-18 20z"/><path d="M36 58h48M60 52v56"/>',
    en: {
      title: 'Village of the Tomb Builders', hook: 'Deir el-Medina, 1150 BC. The workers who carve the pharaoh’s tomb are dying one by one.',
      intro: 'In the walled village of Deir el-Medina live the craftsmen who build the royal tombs, sworn to secrecy about everything they see. They are paid in grain and known by their work names. Someone has started marking names on a limestone flake and leaving them at the doors of the dead. The scribe of the tomb wants answers before the pharaoh hears.',
      death: 'did not come down the path to the tomb at dawn.', quiet: 'The whole crew walked down to the tomb at dawn.', listLabel: 'Work names in the village',
      names: ['The Stonecutter', 'The Painter', 'The Scribe', 'Ostracon', 'The Sculptor', 'Plasterer', 'The Foreman', 'Lamp Keeper', 'Water Carrier', 'Chisel', 'Blue Paint', 'The Draftsman', 'Gold Leaf', 'Little Ra', 'The Guard', 'Basket Weaver', 'The Baker', 'Night Watch'],
      places: ['the Workers’ Path', 'the Village Well', 'the Shrine of Hathor', 'the Grain Store', 'the Tomb Shaft', 'the Rooftop Kitchens', 'the Scribe’s House'],
      beats: ['The grain ration was short by exactly one man’s share.', 'A flake of limestone was found with a sketch of the village and one house scratched out.', 'The lamps given to the tomb crew were counted back in. One was still warm, though nobody had used it.', 'Someone painted the eye of Horus on the well cover overnight.', 'The guards at the valley entrance say a worker passed them twice in one night.', 'A strike is being whispered about, and someone wants it to happen.'],
      questions: ['What did you carve or paint today?', 'Who shorted you on your grain ration?', 'What did you see in the tomb that you swore not to tell?', 'Who in the village owes you a favour?', 'What offering did you leave at the shrine?', 'Who walks the path at night?']
    },
    ar: {
      title: 'قرية بناة المقابر', hook: 'دير المدينة، 1150 قبل الميلاد. العمال الذين ينحتون مقبرة الفرعون يموتون واحداً تلو الآخر.',
      intro: 'في قرية دير المدينة المسوّرة يعيش الحرفيون الذين يبنون المقابر الملكية، وقد أقسموا على كتمان كل ما يرونه. يتقاضون أجرهم حبوباً، ويُعرفون بأسماء صنعتهم. أحدهم بدأ يكتب أسماء على شقفة من الحجر الجيري ويتركها عند أبواب الموتى. كاتب المقبرة يريد إجابات قبل أن يسمع الفرعون.',
      death: 'لم ينزل الطريق إلى المقبرة عند الفجر.', quiet: 'نزل الطاقم كله إلى المقبرة عند الفجر.', listLabel: 'أسماء الصنعة في القرية',
      names: ['قاطع الحجر', 'الرسام', 'الكاتب', 'الشقفة', 'النحّات', 'المليّس', 'رئيس العمال', 'حارس المصابيح', 'حامل الماء', 'الإزميل', 'اللون الأزرق', 'المخطّط', 'ورق الذهب', 'رع الصغير', 'الحارس', 'صانع السلال', 'الخبّاز', 'حارس الليل'],
      places: ['طريق العمال', 'بئر القرية', 'مقصورة حتحور', 'مخزن الغلال', 'بئر المقبرة', 'مطابخ الأسطح', 'بيت الكاتب'],
      beats: ['نقصت حصة الحبوب بمقدار حصة رجل واحد بالضبط.', 'وُجدت شقفة حجرية عليها رسم للقرية وبيت واحد مشطوب.', 'أُعيد عدّ مصابيح طاقم المقبرة. أحدها كان لا يزال دافئاً، مع أن أحداً لم يستخدمه.', 'أحدهم رسم عين حورس على غطاء البئر خلال الليل.', 'يقول حراس مدخل الوادي إن عاملاً مرّ بهم مرتين في ليلة واحدة.', 'هناك همس عن إضراب، وأحدهم يريده أن يحدث.'],
      questions: ['ماذا نحتّ أو رسمت اليوم؟', 'من أنقص حصتك من الحبوب؟', 'ماذا رأيت في المقبرة وأقسمت ألا تحكيه؟', 'من في القرية مدين لك بمعروف؟', 'أي قربان تركت عند المقصورة؟', 'من يمشي على الطريق ليلاً؟']
    }
  }
});
