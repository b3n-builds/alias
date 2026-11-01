// World cases, part two.
Object.assign(SCENARIOS_DATA, {
  polar: {
    level: 'Hard',
    look: { bg: '#0d1a22', surface: '#132530', rule: '#28465a', fg: '#e9f4fa', dim: '#94b0bf', accent: '#9fe3ff', onAccent: '#0b1820', danger: '#ff6b6b', good: '#7fe0b0', paper: 'badge', texture: 'snow', display: 'Michroma', displayAr: 'Reem Kufi', body: 'IBM Plex Mono' },
    emblem: '<path d="M60 12v96M18 36l84 48M18 84l84-48"/><path d="M50 18l10 10 10-10M50 102l10-10 10 10M16 48l14-2-4-14M104 72l-14 2 4 14M16 72l14 2-4 14M104 48l-14-2 4-14"/>',
    en: {
      title: 'Station Aurora', hook: 'Antarctica, the long night. A whiteout, a radio that only hisses, and call signs that blur together.',
      intro: 'Station Aurora is six months into the polar night and three days into a whiteout. The crew use radio call signs, and after half a year in the dark nobody remembers which is which. Someone has started switching off heaters in single bunks. Out here, cold is a perfect murder weapon.',
      death: 'was found in a bunk gone cold, the heater switched off at the wall.', quiet: 'Every heater was still humming at the morning radio check.', listLabel: 'Call signs on the radio log',
      names: ['Frost', 'Frostbite', 'Polar', 'Polaris', 'Aurora', 'Aurelia', 'Glacier', 'Glacio', 'Tundra', 'Tundro', 'Husky', 'Huskie', 'Blizzard', 'Blizz', 'Penguin', 'Pinguino', 'Icefall', 'Icefield'],
      places: ['the Radio Room', 'the Generator Shed', 'the Galley', 'the Ice Core Lab', 'the Garage', 'the Observation Dome', 'the Fuel Store'],
      beats: ['The generator coughed twice at 3 a.m. Someone was in the shed with a torch.', 'A set of footprints leads out into the whiteout and does not come back. Every boot is still on the rack.', 'The radio picked up a voice reading call signs, then static.', 'One of the ice cores was swapped for a fake made of frozen tap water.', 'The med kit is missing its sleeping pills.', 'The dogs howled at the observation dome for an hour, at nothing anyone could see.'],
    },
    ar: {
      title: 'محطة أورورا', hook: 'القارة القطبية الجنوبية، الليل الطويل. عاصفة ثلجية، وراديو لا يصدر إلا الفحيح، ورموز نداء تختلط ببعضها.',
      intro: 'مرّت ستة أشهر على محطة أورورا في الليل القطبي، وثلاثة أيام في عاصفة ثلجية بيضاء. يستخدم الطاقم رموز نداء لاسلكية، وبعد نصف عام في الظلام لم يعد أحد يتذكر أيها لمن. أحدهم بدأ يطفئ المدافئ في أسرّة بعينها. هنا، البرد سلاح قتل مثالي.',
      death: 'وُجد في سرير متجمد، والمدفأة مطفأة من المقبس.', quiet: 'كل المدافئ كانت لا تزال تعمل عند فحص الراديو الصباحي.', listLabel: 'رموز النداء في سجل الراديو',
      names: ['صقيع', 'لسعة الصقيع', 'قطبي', 'النجم القطبي', 'أورورا', 'أوريليا', 'جليد', 'جليدي', 'تندرا', 'تندرو', 'هاسكي', 'هاسكو', 'عاصفة', 'عاصف', 'بطريق', 'بطريقو', 'شلال جليد', 'حقل جليد'],
      places: ['غرفة الراديو', 'سقيفة المولّد', 'المطبخ', 'مختبر عينات الجليد', 'المرآب', 'قبة المراقبة', 'مخزن الوقود'],
      beats: ['سعل المولّد مرتين في الثالثة فجراً. كان أحدهم في السقيفة ومعه مصباح.', 'آثار أقدام تمتد إلى العاصفة البيضاء ولا تعود. وكل الأحذية لا تزال على الرف.', 'التقط الراديو صوتاً يقرأ رموز نداء، ثم تشويشاً.', 'استُبدلت إحدى عينات الجليد بعينة مزيفة من ماء الصنبور المجمد.', 'حبوب النوم مفقودة من حقيبة الإسعافات.', 'عوت الكلاب نحو قبة المراقبة لمدة ساعة، نحو لا شيء يراه أحد.'],
    }
  },

  neon: {
    level: 'Hard',
    look: { bg: '#0b0a14', surface: '#141226', rule: '#2c2850', fg: '#efeaff', dim: '#9d97c2', accent: '#ff3ea5', onAccent: '#0b0a14', danger: '#ff5a5a', good: '#3ef0c4', paper: 'badge', texture: 'scan', display: 'Chakra Petch', displayAr: 'Lalezar', body: 'IBM Plex Mono' },
    emblem: '<path d="M12 60s20-30 48-30 48 30 48 30-20 30-48 30-48-30-48-30z"/><circle cx="60" cy="60" r="14"/><path d="M60 46V12M60 74v34M74 60h34"/>',
    en: {
      title: 'Neon District', hook: '2089. A hacker crew, look-alike handles, and someone deleting people from the grid.',
      intro: 'Level 9 of the Neon District, where the rain is warm and the ads never sleep. Your crew only ever meets by handle, and half the handles are one keystroke apart. Someone is flatlining crew members through their own implants, one handle at a time. Check every character.',
      death: 'flatlined. Their implant log ends in a single line of static.', quiet: 'Every handle pinged back online at dawn.', listLabel: 'Handles on the crew channel',
      names: ['Zer0', 'Zero', 'Glitch', 'Gl1tch', 'Cipher', 'Cypher', 'Neon', 'Ne0n', 'Byte', 'Bite', 'Vector', 'Vektor', 'Ghost', 'Gh0st', 'Pixel', 'Pixl', 'Static', 'Statik'],
      places: ['the Noodle Bar', 'the Server Farm', 'the Rooftop Antenna', 'the Black Clinic', 'the Arcade', 'the Maglev Platform', 'the Safehouse'],
      beats: ['The safehouse door logged an entry with a key that was revoked last week.', 'A drone was found replaying footage of the crew meeting, from an angle nobody was standing at.', 'Someone bought every implant firmware patch in the district in one night.', 'The noodle bar owner says one of you paid with a dead man’s account.', 'The crew channel shows a message sent from a handle that does not exist yet.', 'The black clinic reports someone asked for a crew member’s implant serial number.'],
    },
    ar: {
      title: 'حي النيون', hook: '2089. فريق قراصنة، وأسماء مستعارة متشابهة، وشخص يحذف الناس من الشبكة.',
      intro: 'الطابق التاسع من حي النيون، حيث المطر دافئ والإعلانات لا تنام. فريقكم لا يلتقي إلا بالأسماء المستعارة، ونصف الأسماء لا يفصلها إلا حرف واحد. أحدهم يوقف قلوب أفراد الفريق عبر زرعاتهم الإلكترونية، اسماً بعد اسم. افحصوا كل حرف.',
      death: 'توقف قلبه. سجل زرعته ينتهي بسطر واحد من التشويش.', quiet: 'كل الأسماء عادت متصلة بالشبكة عند الفجر.', listLabel: 'الأسماء على قناة الفريق',
      names: ['صفر', 'الصفر', 'خلل', 'الخلل', 'شيفرة', 'شفرة', 'نيون', 'نيونا', 'بايت', 'بايتة', 'فيكتور', 'فكتور', 'شبح', 'الشبح', 'بكسل', 'بكسلة', 'ستاتيك', 'ستاتيكا'],
      places: ['مطعم النودلز', 'مزرعة الخوادم', 'هوائي السطح', 'العيادة السرية', 'صالة الألعاب', 'رصيف القطار المغناطيسي', 'المخبأ'],
      beats: ['سجّل باب المخبأ دخولاً بمفتاح أُلغي الأسبوع الماضي.', 'وُجدت طائرة مسيّرة تعيد تشغيل لقطات من اجتماع الفريق، من زاوية لم يقف فيها أحد.', 'أحدهم اشترى كل تحديثات برامج الزرعات في الحي في ليلة واحدة.', 'يقول صاحب مطعم النودلز إن أحدكم دفع من حساب رجل ميت.', 'تظهر على قناة الفريق رسالة من اسم لم يُنشأ بعد.', 'تقول العيادة السرية إن أحدهم سأل عن الرقم التسلسلي لزرعة أحد أفراد الفريق.'],
    }
  },

  casino: {
    level: 'Medium',
    look: { bg: '#0d1f17', surface: '#132b20', rule: '#295240', fg: '#f2efe2', dim: '#a8bcae', accent: '#e8c35a', onAccent: '#0d1f17', danger: '#e85d5d', good: '#8ee0a8', paper: 'card', texture: 'diamonds', display: 'Limelight', displayAr: 'Rakkas', body: 'Alegreya Sans' },
    emblem: '<rect x="30" y="16" width="52" height="76" rx="6"/><path d="M56 36c-10 12-16 18-16 26a8 8 0 0 0 14 4l-4 12h12l-4-12a8 8 0 0 0 14-4c0-8-6-14-16-26z"/><circle cx="92" cy="96" r="12"/><circle cx="92" cy="96" r="5"/>',
    en: {
      title: 'The Grand Casino', hook: 'Monte Carlo, high-roller night. Everyone plays under a table name. Someone is cashing out players for good.',
      intro: 'The private salon of the Grand Casino opens only once a year, and every player sits under a table name printed on their chips. The house always wins, but tonight someone else is collecting. Players keep leaving the table and never coming back for their winnings.',
      death: 'never came back for their chips. Their stack is still on the felt.', quiet: 'Every seat was filled when the dealer called the next hand.', listLabel: 'Table names on the chips',
      names: ['Royal Flush', 'Snake Eyes', 'High Roller', 'The Croupier', 'Lady Luck', 'Double Down', 'Black Jack', 'Red Seven', 'The Whale', 'Poker Face', 'Wild Card', 'The Shark', 'Jackpot', 'Ace High', 'Velvet Rope', 'Chip Stack', 'Roulette', 'The Bluff'],
      places: ['the Roulette Table', 'the Baccarat Room', 'the Terrace Bar', 'the Cashier’s Cage', 'the Powder Room', 'the Security Office', 'the Valet Stand'],
      beats: ['A roulette wheel hit zero five times in a row. The croupier swears it was not rigged.', 'Security footage from the cashier’s cage skips eleven minutes.', 'A marked deck was found in the powder room bin.', 'Someone left a single chip on the bar with a name scratched into it.', 'The valet parked a car that nobody came to collect.', 'A high stakes player tipped the band to play the same song three times. Then left.'],
    },
    ar: {
      title: 'الكازينو الكبير', hook: 'مونت كارلو، ليلة كبار اللاعبين. الجميع يلعب باسم طاولة. وأحدهم يُخرج اللاعبين من اللعبة نهائياً.',
      intro: 'لا يفتح الصالون الخاص في الكازينو الكبير إلا مرة في السنة، وكل لاعب يجلس باسم طاولة مطبوع على رقائقه. الكازينو يربح دائماً، لكن الليلة هناك من يجمع لحسابه. اللاعبون يتركون الطاولة ولا يعودون أبداً لأخذ أرباحهم.',
      death: 'لم يعد أبداً لأخذ رقائقه. كومته لا تزال على الطاولة.', quiet: 'كل المقاعد كانت ممتلئة عندما نادى الموزع على الجولة التالية.', listLabel: 'أسماء الطاولة على الرقائق',
      names: ['الفلاش الملكي', 'عيون الأفعى', 'المقامر الكبير', 'الموزّع', 'سيدة الحظ', 'المضاعفة', 'البلاك جاك', 'السبعة الحمراء', 'الحوت', 'الوجه الجامد', 'الورقة الجامحة', 'القرش', 'الجائزة الكبرى', 'الآس الأعلى', 'الحبل المخملي', 'كومة الرقائق', 'الروليت', 'الخدعة'],
      places: ['طاولة الروليت', 'غرفة الباكارا', 'بار الشرفة', 'شباك الصرّاف', 'غرفة التجميل', 'مكتب الأمن', 'موقف السيارات'],
      beats: ['توقفت عجلة الروليت على الصفر خمس مرات متتالية. يقسم الموزّع أنها لم تكن مغشوشة.', 'لقطات كاميرا شباك الصرّاف تقفز إحدى عشرة دقيقة.', 'وُجدت مجموعة ورق معلّمة في سلة غرفة التجميل.', 'أحدهم ترك رقاقة واحدة على البار وعليها اسم محفور.', 'ركن عامل الموقف سيارة لم يأتِ أحد لأخذها.', 'لاعب كبير أعطى الفرقة بقشيشاً لتعزف الأغنية نفسها ثلاث مرات. ثم غادر.'],
    }
  },

  hotel: {
    level: 'Easy',
    look: { bg: '#1c1418', surface: '#281c22', rule: '#4b3540', fg: '#f6ebe9', dim: '#bfa7ab', accent: '#f0a37a', onAccent: '#1c1418', danger: '#e85f5f', good: '#9fd4a4', paper: 'card', texture: 'diamonds', display: 'Playfair Display', displayAr: 'Rakkas', body: 'Alegreya' },
    emblem: '<path d="M24 86h72M30 86c0-20 12-34 30-34s30 14 30 34"/><path d="M60 52v-8M52 44h16"/><path d="M14 98h92"/>',
    en: {
      title: 'Hotel Mirage', hook: 'A seaside hotel in 1958, out of season. The guests use room-number nicknames. Not all of them check out.',
      intro: 'Hotel Mirage is empty in winter except for a handful of regulars who come every year and call each other by their favourite rooms. The elevator creaks, the sea is loud, and the night porter has seen things he will not talk about. This week, guests have begun to check out without taking their luggage.',
      death: 'checked out in the night without their luggage. Their key was left on the desk.', quiet: 'Every key was still on its hook at breakfast.', listLabel: 'Room nicknames in the guest book',
      names: ['Sea View', 'Honeymoon Suite', 'The Attic', 'Room Seven', 'Balcony', 'Corner Room', 'The Penthouse', 'Garden Room', 'Twin Beds', 'The Turret', 'Lighthouse Room', 'Number Nine', 'Blue Room', 'The Annex', 'Rose Room', 'Basement', 'Room Thirteen', 'The Bridal Suite'],
      places: ['the Lobby', 'the Ballroom', 'the Elevator', 'the Laundry', 'the Pier', 'the Bar', 'the Kitchen'],
      beats: ['The elevator stopped at the fourth floor at midnight. The hotel has three floors.', 'The night porter found the guest book open, with one page torn out.', 'A room service tray was delivered to a room that has been locked for years.', 'Someone rang the reception bell eleven times and was gone when the porter arrived.', 'The piano in the ballroom was found with the lid closed and still warm.', 'The pier lights went out. When they came back, there was a coat hanging on the rail.'],
    },
    ar: {
      title: 'فندق السراب', hook: 'فندق على البحر في 1958، خارج الموسم. النزلاء يتنادون بأسماء غرفهم. وليس كلهم سيغادرون.',
      intro: 'فندق السراب خالٍ في الشتاء إلا من بضعة نزلاء دائمين يأتون كل عام وينادون بعضهم بأسماء غرفهم المفضلة. المصعد يصرّ، والبحر صاخب، والبواب الليلي رأى أشياء لا يريد الحديث عنها. هذا الأسبوع، بدأ النزلاء يغادرون دون أن يأخذوا حقائبهم.',
      death: 'غادر في الليل دون حقائبه. تُرك مفتاحه على المكتب.', quiet: 'كل المفاتيح كانت معلقة في مكانها عند الفطور.', listLabel: 'أسماء الغرف في سجل النزلاء',
      names: ['إطلالة البحر', 'جناح العرسان', 'العلّية', 'الغرفة سبعة', 'الشرفة', 'غرفة الزاوية', 'البنتهاوس', 'غرفة الحديقة', 'السريران', 'البرج', 'غرفة المنارة', 'رقم تسعة', 'الغرفة الزرقاء', 'الملحق', 'غرفة الورد', 'القبو', 'الغرفة ثلاثة عشر', 'جناح العروس'],
      places: ['الردهة', 'قاعة الرقص', 'المصعد', 'المغسلة', 'الرصيف البحري', 'البار', 'المطبخ'],
      beats: ['توقف المصعد في الطابق الرابع عند منتصف الليل. والفندق فيه ثلاثة طوابق فقط.', 'وجد البواب الليلي سجل النزلاء مفتوحاً، وصفحة منه ممزقة.', 'وصلت صينية خدمة الغرف إلى غرفة مغلقة منذ سنوات.', 'أحدهم دقّ جرس الاستقبال إحدى عشرة مرة، واختفى قبل أن يصل البواب.', 'وُجد البيانو في قاعة الرقص مغلقاً ولا يزال دافئاً.', 'انطفأت أضواء الرصيف. وعندما عادت، كان هناك معطف معلق على السياج.'],
    }
  },

  studio: {
    level: 'Easy',
    look: { bg: '#141414', surface: '#1f1f1f', rule: '#3d3d3d', fg: '#f3f0ea', dim: '#aaa6a0', accent: '#ff5c5c', onAccent: '#141414', danger: '#ff7b57', good: '#9ad69a', paper: 'manila', texture: 'film', display: 'Limelight', displayAr: 'Lalezar', body: 'Courier Prime' },
    emblem: '<rect x="20" y="48" width="80" height="54" rx="4"/><path d="M20 48l76-22 4 14-76 22"/><path d="M38 43l8 12M58 37l8 12M78 31l8 12"/><path d="M34 70h52M34 84h36"/>',
    en: {
      title: 'Silver Screen Studios', hook: 'Hollywood, 1952. A murder mystery film where the murders are real.',
      intro: 'Silver Screen Studios is shooting a murder mystery on a closed set, and the director insists the cast use their character names at all times. It was a good idea until the cast started dying for real between takes. The director will not stop filming. The schedule is the schedule.',
      death: 'missed their call time. The wardrobe department found their costume on the floor.', quiet: 'Every actor hit their mark for the first take of the day.', listLabel: 'Character names on the call sheet',
      names: ['The Starlet', 'The Butler', 'The Inspector', 'The Heiress', 'The Gangster', 'The Widow', 'The Ingénue', 'The Stuntman', 'The Crooner', 'The Mad Scientist', 'The Leading Man', 'The Chorus Girl', 'The Producer', 'The Script Girl', 'The Villain', 'The Twin', 'The Cowboy', 'The Old Flame'],
      places: ['Sound Stage 4', 'the Makeup Trailer', 'the Commissary', 'the Prop Room', 'the Editing Bay', 'the Backlot Street', 'the Director’s Office'],
      beats: ['A prop gun was swapped for a real one. Someone noticed just in time.', 'Pages of tomorrow’s script were found burned in a dressing room ashtray.', 'The film from yesterday’s shoot shows a figure in the background who was not in the cast.', 'Someone rewrote the ending of the script. The new ending names a killer.', 'A spotlight crashed onto the stage two seconds after the lead stepped off their mark.', 'The studio guard logged a car leaving the lot at 3 a.m. with its headlights off.'],
    },
    ar: {
      title: 'استوديوهات الشاشة الفضية', hook: 'هوليوود، 1952. فيلم جريمة غامض، لكن الجرائم حقيقية.',
      intro: 'تصوّر استوديوهات الشاشة الفضية فيلم جريمة غامضاً في موقع مغلق، ويصرّ المخرج على أن يستخدم الممثلون أسماء شخصياتهم طوال الوقت. كانت فكرة جيدة، حتى بدأ الممثلون يموتون فعلاً بين اللقطات. المخرج يرفض إيقاف التصوير. الجدول هو الجدول.',
      death: 'تأخر عن موعد التصوير. وجد قسم الملابس زيّه ملقى على الأرض.', quiet: 'وقف كل ممثل في مكانه في أول لقطة من اليوم.', listLabel: 'أسماء الشخصيات في جدول التصوير',
      names: ['النجمة الصاعدة', 'كبير الخدم', 'المفتش', 'الوريثة', 'رجل العصابات', 'الأرملة', 'البريئة', 'رجل المخاطر', 'المطرب', 'العالم المجنون', 'البطل', 'فتاة الاستعراض', 'المنتج', 'مساعدة النص', 'الشرير', 'التوأم', 'راعي البقر', 'الحب القديم'],
      places: ['البلاتوه 4', 'عربة المكياج', 'الكافتيريا', 'غرفة الإكسسوارات', 'غرفة المونتاج', 'شارع الديكور الخلفي', 'مكتب المخرج'],
      beats: ['استُبدل مسدس الإكسسوار بمسدس حقيقي. لاحظ أحدهم ذلك في اللحظة الأخيرة.', 'وُجدت صفحات من نص الغد محروقة في منفضة غرفة الملابس.', 'فيلم تصوير البارحة يُظهر شخصاً في الخلفية لم يكن من الممثلين.', 'أحدهم أعاد كتابة نهاية النص. النهاية الجديدة تسمّي قاتلاً.', 'سقط كشاف ضوء على المسرح بعد ثانيتين من ابتعاد البطل عن مكانه.', 'سجّل حارس الاستوديو سيارة تغادر في الثالثة فجراً وأنوارها مطفأة.'],
    }
  }
});
