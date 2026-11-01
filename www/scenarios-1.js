// Scenario content. Each case: difficulty level, a look (palette, fonts, texture, paper),
// an emblem (SVG paths in a 120x120 box) and its text in English and Arabic.
// Every names list holds 18 names: 12 players + up to 5 decoys, with one spare.
const SCENARIOS_DATA = {};

Object.assign(SCENARIOS_DATA, {
  noir: {
    level: 'Medium',
    look: { bg: '#15171d', surface: '#1f222b', rule: '#363a48', fg: '#ddd7c8', dim: '#9c9685', accent: '#d8a74f', onAccent: '#15171d', danger: '#d65445', good: '#86b47f', paper: 'manila', texture: 'rain', display: 'Special Elite', displayAr: 'Reem Kufi', body: 'Courier Prime' },
    emblem: '<path d="M44 112V38M44 38h22M66 38v8M56 46h20l-5 11H61z"/><path d="M60 58L48 110M72 58l12 52" opacity=".4"/><path d="M18 14l-6 15M30 34l-6 15M98 12l-6 15M104 50l-6 15M14 70l-6 15M100 86l-6 15"/><path d="M30 112h40"/>',
    en: {
      title: 'Rain City', hook: 'A 1940s city, a vigilante, and a little black ledger.',
      intro: 'It has been raining for eleven days. The city’s crooks are turning up dead, and the papers call it justice. Every soul in this bar goes by an alias, and someone is writing those aliases in a little black ledger. Keep your name to yourself.',
      death: 'was found face-down in the rain.', quiet: 'The rain fell, and nobody fell with it.', listLabel: 'Aliases in the city',
      names: ['The Raven', 'Velvet', 'Ghost Pepper', 'Silk', 'Static', 'Blue Note', 'Cinder', 'Dahlia', 'Fedora', 'Gin Rummy', 'Halflight', 'Ivory', 'Jackknife', 'Lucky Seven', 'Midnight', 'Nickel', 'Porcelain', 'Quill'],
      places: ['the Blue Moon Bar', 'the Pier', 'the All-Night Diner', 'the Train Station', 'the Pawn Shop', 'the Boxing Gym', 'the Old Cinema'],
      beats: ['The jukebox at the Blue Moon played the same song all night. Someone kept feeding it nickels.', 'A wet trench coat was found hanging in the wrong closet at the precinct.', 'The ledger’s ink matches a pen sold at only one shop downtown.', 'A cab driver remembers a fare who paid in silver dollars and never said a word.', 'Someone set fire to the newspaper’s back room. Only the obituaries survived.', 'A torn matchbook was left on the pier with half a phone number burned away.'],
    },
    ar: {
      title: 'مدينة المطر', hook: 'مدينة من الأربعينيات، ومنتقم مجهول، ودفتر أسود صغير.',
      intro: 'المطر لم يتوقف منذ أحد عشر يوماً. مجرمو المدينة يُعثر عليهم موتى واحداً تلو الآخر، والصحف تسمي ذلك عدالة. كل من في هذه الحانة يعيش باسم مستعار، وهناك من يكتب هذه الأسماء في دفتر أسود صغير. احتفظ باسمك لنفسك.',
      death: 'وُجد ملقى على وجهه تحت المطر.', quiet: 'سقط المطر، ولم يسقط أحد معه.', listLabel: 'الأسماء المستعارة في المدينة',
      names: ['الغراب', 'المخمل', 'الفلفل الحار', 'الحرير', 'التشويش', 'النغمة الزرقاء', 'الرماد', 'الداليا', 'القبعة', 'الورقة الرابحة', 'نصف الضوء', 'العاج', 'المطواة', 'السبعة المحظوظة', 'منتصف الليل', 'القرش', 'الخزف', 'الريشة'],
      places: ['حانة القمر الأزرق', 'الرصيف البحري', 'المطعم الساهر', 'محطة القطار', 'محل الرهونات', 'نادي الملاكمة', 'السينما القديمة'],
      beats: ['صندوق الموسيقى في حانة القمر الأزرق عزف الأغنية نفسها طوال الليل. أحدهم ظل يُطعمه العملات.', 'معطف مبلل وُجد معلقاً في الخزانة الخطأ داخل قسم الشرطة.', 'حبر الدفتر يطابق قلماً لا يُباع إلا في متجر واحد وسط المدينة.', 'سائق أجرة يتذكر زبوناً دفع بدولارات فضية ولم ينطق بكلمة.', 'أحدهم أشعل النار في الغرفة الخلفية للجريدة. لم تنجُ إلا صفحة الوفيات.', 'علبة كبريت ممزقة تُركت على الرصيف وعليها نصف رقم هاتف محترق.'],
    }
  },

  school: {
    level: 'Easy',
    look: { bg: '#1b2822', surface: '#233329', rule: '#3e5446', fg: '#eeede4', dim: '#a5b0a2', accent: '#ead66c', onAccent: '#1b2822', danger: '#ec8470', good: '#a6d892', paper: 'notebook', texture: 'chalk', display: 'Cabin Sketch', displayAr: 'Lalezar', body: 'Alegreya' },
    emblem: '<path d="M60 10l40 13v31c0 29-18 45-40 56-22-11-40-27-40-56V23z"/><path d="M38 50c9-5 16-5 22 0 6-5 13-5 22 0v28c-9-5-16-5-22 0-6-5-13-5-22 0z"/><path d="M60 50v28M44 32h32"/>',
    en: {
      title: 'Ashgrove Academy', hook: 'Students vanish from a boarding school after lights-out.',
      intro: 'Ashgrove Academy has stood on its hill for two hundred years. This term, students have started disappearing after lights-out, and every one of them was known only by a nickname. Somebody in this room keeps a list of those nicknames. Find them before the next bell.',
      death: 'was missing from their bed at roll call.', quiet: 'Every bed was full at roll call.', listLabel: 'Nicknames on the register',
      names: ['Prefect', 'Bookworm', 'Head Girl', 'Class Clown', 'Teacher’s Pet', 'Night Owl', 'Captain', 'Chess Kid', 'Daydreamer', 'Lab Rat', 'Choirboy', 'Stargazer', 'New Kid', 'Ink Stain', 'Sleepwalker', 'Prankster', 'Rowing Blue', 'Library Ghost'],
      places: ['the Library', 'the Chapel', 'the Boathouse', 'the Science Lab', 'the Kitchens', 'the Bell Tower', 'the Music Room'],
      beats: ['The bell tower rang at three in the morning. Nobody admits to touching the rope.', 'A page was torn out of the school register. The ink on the next page was still wet.', 'Muddy footprints lead from the boathouse to the dormitory stairs, then stop.', 'A note was left on the headmaster’s desk. It says only: “I know your nickname.”', 'The library’s restricted section was found unlocked, and one shelf was empty.', 'A lantern was seen moving across the playing fields long after midnight.'],
    },
    ar: {
      title: 'أكاديمية آشغروف', hook: 'طلاب يختفون من مدرسة داخلية بعد إطفاء الأنوار.',
      intro: 'تقف أكاديمية آشغروف على تلّتها منذ مئتي عام. هذا الفصل الدراسي، بدأ الطلاب يختفون بعد إطفاء الأنوار، وكل واحد منهم لم يكن يُعرف إلا بلقبه. هناك شخص في هذه الغرفة يحتفظ بقائمة تلك الألقاب. اعثروا عليه قبل الجرس القادم.',
      death: 'لم يكن في سريره عند تفقد الحضور.', quiet: 'كل الأسرّة كانت ممتلئة عند تفقد الحضور.', listLabel: 'الألقاب في سجل المدرسة',
      names: ['العريف', 'دودة الكتب', 'رئيسة الطلاب', 'مهرج الفصل', 'المدلل', 'بومة الليل', 'الكابتن', 'فتى الشطرنج', 'الحالم', 'فأر المختبر', 'فتى الجوقة', 'راصد النجوم', 'الطالب الجديد', 'بقعة الحبر', 'السائر نائماً', 'المشاغب', 'المجدّف', 'شبح المكتبة'],
      places: ['المكتبة', 'الكنيسة الصغيرة', 'مرفأ القوارب', 'مختبر العلوم', 'المطبخ', 'برج الجرس', 'غرفة الموسيقى'],
      beats: ['دقّ جرس البرج في الثالثة فجراً. لا أحد يعترف بأنه لمس الحبل.', 'صفحة انتُزعت من سجل المدرسة. والحبر على الصفحة التالية كان لا يزال رطباً.', 'آثار أقدام موحلة تمتد من مرفأ القوارب إلى درج المهجع، ثم تختفي.', 'تُركت ورقة على مكتب المدير. مكتوب فيها فقط: «أعرف لقبك».', 'وُجد القسم المحظور في المكتبة مفتوحاً، ورف واحد فارغ تماماً.', 'شوهد فانوس يتحرك عبر الملاعب بعد منتصف الليل بوقت طويل.'],
    }
  },

  souk: {
    level: 'Medium',
    look: { bg: '#23150e', surface: '#2f1e15', rule: '#5a3b29', fg: '#f3e4c9', dim: '#bca386', accent: '#4fc4b2', onAccent: '#1d120c', danger: '#e8705a', good: '#9bcf7c', paper: 'parchment', texture: 'tiles', display: 'Reem Kufi', displayAr: 'Reem Kufi', body: 'Alegreya' },
    emblem: '<path d="M60 6v14M48 20h24M44 28h32l-5 9H49z"/><path d="M47 37c-7 11-7 33 0 44h26c7-11 7-33 0-44"/><path d="M49 81h22l-5 11H54zM60 92v12"/><path d="M60 46l7 10-7 10-7-10z"/><path d="M38 59h-6M88 59h-6"/>',
    en: {
      title: 'The Old Souk', hook: 'Merchants, spies and a hired assassin in old Cairo’s bazaar.',
      intro: 'Under the lamps of the old souk, everyone trades under a market name. Now merchants are being found in the alleys behind the spice stalls, and the word is that a hired assassin walks among you. Haggle, listen, and never give away your market name.',
      death: 'was found in the alley behind the spice stalls.', quiet: 'The market opened. Every stall was staffed.', listLabel: 'Market names in the souk',
      names: ['The Spice Seller', 'Brass Lamp', 'The Carpet Weaver', 'Lantern Boy', 'The Perfumer', 'Coppersmith', 'The Calligrapher', 'Hookah Man', 'Date Merchant', 'The Storyteller', 'Saffron', 'The Goldsmith', 'Tea Boy', 'The Scribe', 'Jasmine', 'The Tentmaker', 'Glass Blower', 'Rosewater'],
      places: ['the Spice Market', 'the Coffeehouse', 'the Mosque Courtyard', 'Copper Street', 'the Rooftop Terrace', 'the Old Gate', 'the Bathhouse'],
      beats: ['The lamp-lighter swears one lantern on Copper Street went out on its own.', 'A whole sack of saffron was emptied into the fountain before dawn.', 'A stranger asked three merchants for directions to the same stall.', 'Someone paid for coffee with a coin from another century.', 'The muezzin saw a shadow crossing the rooftops before the dawn call.', 'A carpet was delivered to the wrong house with a note pinned inside.'],
    },
    ar: {
      title: 'السوق القديم', hook: 'تجار وجواسيس وقاتل مأجور في سوق القاهرة القديمة.',
      intro: 'تحت فوانيس السوق القديم، يتاجر الجميع بأسماء السوق. والآن يُعثر على التجار في الأزقة خلف دكاكين التوابل، ويقال إن قاتلاً مأجوراً يمشي بينكم. ساوموا، واستمعوا، ولا تكشفوا اسمكم في السوق أبداً.',
      death: 'وُجد في الزقاق خلف دكاكين التوابل.', quiet: 'فتح السوق أبوابه. كل الدكاكين كان أصحابها فيها.', listLabel: 'أسماء السوق',
      names: ['بائع التوابل', 'المصباح النحاسي', 'ناسج السجاد', 'صبي الفانوس', 'العطّار', 'النحّاس', 'الخطّاط', 'صاحب الشيشة', 'تاجر التمر', 'الحكواتي', 'الزعفران', 'الصائغ', 'صبي الشاي', 'الكاتب', 'الياسمين', 'الخيّامي', 'نافخ الزجاج', 'ماء الورد'],
      places: ['سوق التوابل', 'المقهى', 'صحن المسجد', 'شارع النحاسين', 'السطح', 'البوابة القديمة', 'الحمّام'],
      beats: ['يقسم مُشعل الفوانيس أن فانوساً في شارع النحاسين انطفأ وحده.', 'كيس كامل من الزعفران أُفرغ في النافورة قبل الفجر.', 'غريب سأل ثلاثة تجار عن الطريق إلى الدكان نفسه.', 'أحدهم دفع ثمن القهوة بعملة من قرن آخر.', 'رأى المؤذن ظلاً يعبر الأسطح قبل أذان الفجر.', 'سجادة وصلت إلى البيت الخطأ وفي داخلها ورقة مثبتة.'],
    }
  },

  space: {
    level: 'Hard',
    look: { bg: '#0a111e', surface: '#101a2c', rule: '#21324e', fg: '#d8e6f6', dim: '#8094b0', accent: '#62d6ff', onAccent: '#06101c', danger: '#ff6170', good: '#70e3a8', paper: 'badge', texture: 'stars', display: 'Michroma', displayAr: 'Reem Kufi', body: 'IBM Plex Mono' },
    emblem: '<circle cx="60" cy="62" r="25"/><ellipse cx="60" cy="62" rx="52" ry="14" transform="rotate(-18 60 62)"/><circle cx="98" cy="22" r="5"/><path d="M98 12v-4M98 36v-4M88 22h-4M112 22h-4"/><circle cx="20" cy="100" r="2"/>',
    en: {
      title: 'Kepler Deep', hook: 'A research station far from home. A saboteur. Callsigns that sound alike.',
      intro: 'Kepler Deep Station, four hundred days from home. The crew goes by callsigns, and some of them sound alike. Someone aboard has started cutting life support to single bunks, one callsign at a time. Trust the logs, not the faces.',
      death: 'was found in a sealed bunk with the oxygen cut.', quiet: 'Life support held. Every bunk checked in.', listLabel: 'Callsigns on the crew roster',
      names: ['Nova', 'Nova Two', 'Halo', 'Halos', 'Orbit', 'Orbiter', 'Echo', 'Echo Prime', 'Vega', 'Vela', 'Lyra', 'Lyre', 'Comet', 'Comet Tail', 'Atlas', 'Atlas Nine', 'Ion', 'Iona'],
      places: ['Hydroponics', 'the Observation Deck', 'Engineering', 'the Mess Hall', 'the Med Bay', 'the Airlock Corridor', 'Comms'],
      beats: ['The station AI logged a door opening on a deck nobody was assigned to.', 'Oxygen readings dipped for ninety seconds on Deck 3. Nobody reported it.', 'A crew tablet was wiped clean and left in the airlock corridor.', 'The comms array received a transmission addressed to nobody.', 'Hydroponics lost an entire tray of seedlings overnight.', 'Someone ran the coffee machine at 03:12. The log is missing a name.'],
    },
    ar: {
      title: 'كبلر العميقة', hook: 'محطة أبحاث بعيدة عن الوطن. مخرّب بين الطاقم. ونداءات متشابهة.',
      intro: 'محطة كبلر العميقة، على بعد أربعمئة يوم من الأرض. يتنادى الطاقم برموز نداء، وبعضها متشابه جداً. أحد من على المتن بدأ يقطع الأكسجين عن الأسرّة واحداً تلو الآخر، رمزاً بعد رمز. صدّقوا السجلات، لا الوجوه.',
      death: 'وُجد في حجرة نوم مغلقة والأكسجين مقطوع عنها.', quiet: 'صمد نظام دعم الحياة. كل الحجرات سجلت حضورها.', listLabel: 'رموز النداء في سجل الطاقم',
      names: ['نوفا', 'نوفا الثانية', 'هالة', 'هالات', 'مدار', 'المداري', 'صدى', 'صدى الأول', 'فيغا', 'فيلا', 'ليرا', 'ليرة', 'مذنب', 'ذيل المذنب', 'أطلس', 'أطلس التاسع', 'أيون', 'أيونا'],
      places: ['قسم الزراعة المائية', 'منصة المراقبة', 'غرفة المحركات', 'قاعة الطعام', 'العيادة', 'ممر غرفة الضغط', 'غرفة الاتصالات'],
      beats: ['سجّل حاسوب المحطة فتح باب في طابق لا أحد مكلف به.', 'انخفضت قراءات الأكسجين تسعين ثانية في الطابق الثالث. لم يبلّغ أحد.', 'جهاز لوحي لأحد الطاقم مُسح بالكامل وتُرك في ممر غرفة الضغط.', 'استقبل هوائي الاتصالات رسالة موجهة إلى لا أحد.', 'خسر قسم الزراعة المائية صينية كاملة من الشتلات خلال الليل.', 'أحدهم شغّل آلة القهوة في الساعة 03:12. والسجل لا يذكر اسماً.'],
    }
  }
});
