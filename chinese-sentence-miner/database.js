const sentences = [
	{
		id: 0,
		zh: "这个主意好极了",
		pi: "Zhège zhǔyì hǎo jíle",
		en: "This idea is perfect"
	},
	{
		id: 1,
		zh: "味道好极了",
		pi: "Wèidào hǎo jíle",
		en: "The taste is perfect"
	},
	{
		id: 2,
		zh: "他的英文棒极了",
		pi: "Tā de Yīngwén bàng jíle",
		en: "His English is perfect"
	},
	{
		id: 3,
		zh: "婚礼热闹极了",
		pi: "Hūnlǐ rènao jíle",
		en: "The wedding was very lively"
	},
	{
		id: 4,
		zh: "一点声音都没有，安静极了",
		pi: "Yīdiǎn shēngyīn dōu méiyǒu, ānjìng jíle",
		en: "There is no sound at all. It's extremely quiet"
	},
	{
		id: 5,
		zh: "昨天的派对无聊极了",
		pi: "Zuótiān de pàiduì wúliáo jíle",
		en: "Yesterday's party was so boring"
	},
	{
		id: 6,
		zh: "他那么生气，我们都害怕极了",
		pi: "Tā nàme shēngqì, wǒmen dōu hàipà jíle",
		en: "He was so angry. We were all so scared"
	},
	{
		id: 7,
		zh: "高考那天，我紧张极了",
		pi: "Gāokǎo nà tiān, wǒ jǐnzhāng jíle",
		en: "I was super nervous the day I took the college entrance examination"
	},
	{
		id: 8,
		zh: "这件事让我们都尴尬极了",
		pi: "Zhè jiàn shì ràng wǒmen dōu gāngà jíle",
		en: "This incident made us all extremely embarrassed"
	},
	{
		id: 9,
		zh: "那个男孩讨厌极了",
		pi: "Nàge nánhái tǎoyàn jíle",
		en: "That boy is super annoying"
	},
	{
		id: 10,
		zh: "最近不怎么忙",
		pi: "Zuìjìn bù zěnme máng",
		en: "It hasn't been very busy lately"
	},
	{
		id: 11,
		zh: "这里的冬天不怎么冷",
		pi: "Zhèlǐ de dōngtiān bù zěnme lěng",
		en: "It's not very cold here in winter"
	},
	{
		id: 12,
		zh: "他们好像不怎么高兴",
		pi: "Tāmen hǎoxiàng bù zěnme gāoxìng",
		en: "They don't seem to be very happy"
	},
	{
		id: 13,
		zh: "这个学生不怎么努力",
		pi: "Zhège xuéshēng bù zěnme nǔlì",
		en: "This student isn't very hard-working"
	},
	{
		id: 14,
		zh: "那家餐厅不怎么干净",
		pi: "Nà jiā cāntīng bù zěnme gānjìng",
		en: "That restaurant isn't very clean"
	},
	{
		id: 15,
		zh: "这个老师不怎么专业",
		pi: "Zhège lǎoshī bù zěnme zhuānyè",
		en: "This teacher isn't very professional"
	},
	{
		id: 16,
		zh: "你是不是昨天睡得不怎么好？",
		pi: "Nǐ shì bu shì zuótiān shuì de bù zěnme hǎo?",
		en: "Did you not sleep very well last night?"
	},
	{
		id: 17,
		zh: "我不怎么喜欢咖啡",
		pi: "Wǒ bù zěnme xǐhuan kāfēi",
		en: "I'm not very into coffee"
	},
	{
		id: 18,
		zh: "他跟他父母长得不怎么像",
		pi: "Tā gēn tā fùmǔ zhǎng de bù zěnme xiàng",
		en: "He and his parents don't look very much alike"
	},
	{
		id: 19,
		zh: "他去美国一年多了，不过不怎么想家",
		pi: "Tā qù Měiguó yì nián duō le, búguò bù zěnme xiǎngjiā",
		en: "He's been in the USA for more than one year, but he's not very homesick"
	},
	{
		id: 20,
		zh: "我没有问题",
		pi: "Wǒ méiyǒu wèntí",
		en: "I don't have any questions"
	},
	{
		id: 21,
		zh: "我们现在没有钱",
		pi: "Wǒmen xiànzài méiyǒu qián",
		en: "We don't have money now"
	},
	{
		id: 22,
		zh: "他没有工作吗？",
		pi: "Tā méiyǒu gōngzuò ma?",
		en: "Does he not have a job?"
	},
	{
		id: 23,
		zh: "他们没有爸爸妈妈",
		pi: "Tāmen méiyǒu bàba māma",
		en: "They don't have parents"
	},
	{
		id: 24,
		zh: "我们在北京没有房子",
		pi: "Wǒmen zài Běijīng méiyǒu fángzi",
		en: "We don't have a house in Beijing"
	},
	{
		id: 25,
		zh: "你爸爸没有手机吗？",
		pi: "Nǐ bàba méiyǒu shǒujī ma?",
		en: "Does your dad not have a cell phone?"
	},
	{
		id: 26,
		zh: "你们在上海没有朋友吗？",
		pi: "Nǐmen zài Shànghǎi méiyǒu péngyou ma?",
		en: "Do you not have friends in Shanghai?"
	},
	{
		id: 27,
		zh: "我的老师现在没有男朋友",
		pi: "Wǒ de lǎoshī xiànzài méiyǒu nánpéngyou",
		en: "My teacher doesn't have a boyfriend now"
	},
	{
		id: 28,
		zh: "他们都没有电脑吗？",
		pi: "Tāmen dōu méiyǒu diànnǎo ma?",
		en: "Do they all not have computers?"
	},
	{
		id: 29,
		zh: "这个周末你们都没有时间吗？",
		pi: "Zhège zhōumò nǐmen dōu méiyǒu shíjiān ma?",
		en: "Do you all not have time this weekend?"
	},
	{
		id: 30,
		zh: "我没钱",
		pi: "Wǒ méi qián",
		en: "I don't have money"
	},
	{
		id: 31,
		zh: "你没男朋友吗？",
		pi: "Nǐ méi nánpéngyou ma?",
		en: "Do you not have a boyfriend?"
	},
	{
		id: 32,
		zh: "你们没车吗？",
		pi: "Nǐmen méi chē ma?",
		en: "You don't have a car?"
	},
	{
		id: 33,
		zh: "老板现在没时间",
		pi: "Lǎobǎn xiànzài méi shíjiān",
		en: "The boss doesn't have time right now"
	},
	{
		id: 34,
		zh: "我没工作，我老公也没工作",
		pi: "Wǒ méi gōngzuò, wǒ lǎogōng yě méi gōngzuò",
		en: "I don't have a job. My husband doesn't have a job either"
	},
	{
		id: 35,
		zh: "他们不是坏孩子",
		pi: "Tāmen bù shì huài háizi",
		en: "They are not bad kids"
	},
	{
		id: 36,
		zh: "我们不喝酒",
		pi: "Wǒmen bù hējiǔ",
		en: "We don't drink alcohol"
	},
	{
		id: 37,
		zh: "我今天不想工作",
		pi: "Wǒ jīntiān bù xiǎng gōngzuò",
		en: "I don't want to work today"
	},
	{
		id: 38,
		zh: "你不喜欢我吗？",
		pi: "Nǐ bù xǐhuan wǒ ma?",
		en: "Do you not like me?"
	},
	{
		id: 39,
		zh: "为什么你不喜欢喝咖啡？",
		pi: "Wèishénme nǐ bù xǐhuan hē kāfēi?",
		en: "Why don't you like to drink coffee?"
	},
	{
		id: 40,
		zh: "我不饿",
		pi: "Wǒ bù è",
		en: "I'm not hungry"
	},
	{
		id: 41,
		zh: "这个不贵",
		pi: "Zhège bù guì",
		en: "This is not expensive"
	},
	{
		id: 42,
		zh: "公司不大",
		pi: "Gōngsī bù dà",
		en: "The company is not big"
	},
	{
		id: 43,
		zh: "老板今天很不高兴",
		pi: "Lǎobǎn jīntiān hěn bù gāoxìng",
		en: "The boss is very unhappy today"
	},
	{
		id: 44,
		zh: "我哥哥不高，但是很帅",
		pi: "Wǒ gēge bù gāo , dànshì hěn shuài",
		en: "My older brother is not tall, but he is very handsome"
	},
	{
		id: 45,
		zh: "他们都在上海",
		pi: "Tāmen dōu zài Shànghǎi",
		en: "They are all in Shanghai"
	},
	{
		id: 46,
		zh: "明天我们都可以去",
		pi: "Míngtiān wǒmen dōu kěyǐ qù",
		en: "Tomorrow we all can go"
	},
	{
		id: 47,
		zh: "我们都要冰水",
		pi: "Wǒmen dōu yào bīngshuǐ",
		en: "We all want ice water"
	},
	{
		id: 48,
		zh: "我们两个都爱你",
		pi: "Wǒmen liǎng gè dōu ài nǐ",
		en: "The two of us both love you"
	},
	{
		id: 49,
		zh: "你爸爸和你妈妈都是美国人吗？",
		pi: "Nǐ bàba hé nǐ māma dōu shì Měiguó rén ma?",
		en: "Are your father and your mother both Americans?"
	},
	{
		id: 50,
		zh: "我和我太太都不吃肉",
		pi: "Wǒ hé wǒ tàitai dōu bù chī ròu",
		en: "Neither my wife nor I eat meat"
	},
	{
		id: 51,
		zh: "你们两个都喜欢中国菜吗？",
		pi: "Nǐmen liǎng gè dōu xǐhuan Zhōngguó cài ma?",
		en: "Do you both like Chinese food?"
	},
	{
		id: 52,
		zh: "她和她老公都没有工作",
		pi: "Tā hé tā lǎogōng dōu méiyǒu gōngzuò",
		en: "Neither she nor her husband has a job"
	},
	{
		id: 53,
		zh: "我也喜欢",
		pi: "Wǒ yě xǐhuan",
		en: "I also like it"
	},
	{
		id: 54,
		zh: "我也是学生",
		pi: "Wǒ yě shì xuésheng",
		en: "I am a student too"
	},
	{
		id: 55,
		zh: "她也有一个儿子",
		pi: "Tā yě yǒu yī gè érzi",
		en: "She also has a son"
	},
	{
		id: 56,
		zh: "他们也是法国人吗？",
		pi: "Tāmen yě shì Fǎguó rén ma?",
		en: "Are they also French?"
	},
	{
		id: 57,
		zh: "我也想学中文",
		pi: "Wǒ yě xiǎng xué Zhōngwén",
		en: "I also want to study Chinese"
	},
	{
		id: 58,
		zh: "他们也会去吗？",
		pi: "Tāmen yě huì qù ma?",
		en: "Are they also going?"
	},
	{
		id: 59,
		zh: "我妈妈也喜欢吃饺子",
		pi: "Wǒ māma yě xǐhuan chī jiǎozi",
		en: "My mother likes to eat boiled dumplings too"
	},
	{
		id: 60,
		zh: "孩子也可以喝酒吗？",
		pi: "Háizi yě kěyǐ hējiǔ ma?",
		en: "Can kids drink alcohol too?"
	},
	{
		id: 61,
		zh: "你也想来我家吗？",
		pi: "Nǐ yě xiǎng lái wǒ jiā ma?",
		en: "Do you want to come to my house too?"
	},
	{
		id: 62,
		zh: "她也觉得这个老师不好",
		pi: "Tā yě juéde zhège lǎoshī bù hǎo",
		en: "She also thinks this teacher isn't good"
	},
	{
		id: 63,
		zh: "我也不喜欢",
		pi: "Wǒ yě bù xǐhuan",
		en: "I don't like it either"
	},
	{
		id: 64,
		zh: "我也不知道",
		pi: "Wǒ yě bù zhīdào",
		en: "I don't know either"
	},
	{
		id: 65,
		zh: "他也没有",
		pi: "Tā yě méiyǒu",
		en: "He doesn't have it either"
	},
	{
		id: 66,
		zh: "你也不想来我家吗？",
		pi: "Nǐ yě bù xiǎng lái wǒ jiā ma?",
		en: "You don't want to come to my house either?"
	},
	{
		id: 67,
		zh: "你也很高",
		pi: "Nǐ yě hěn gāo",
		en: "You are also tall"
	},
	{
		id: 68,
		zh: "他也很胖",
		pi: "Tā yě hěn pàng",
		en: "He is also fat"
	},
	{
		id: 69,
		zh: "我爸爸也很帅",
		pi: "Wǒ bàba yě hěn shuài",
		en: "My dad is also handsome"
	},
	{
		id: 70,
		zh: "湖南菜也很辣",
		pi: "Húnán cài yě hěn là",
		en: "Hunan food is very spicy too"
	},
	{
		id: 71,
		zh: "这种酒也很好喝",
		pi: "Zhè zhǒng jiǔ yě hěn hǎohē",
		en: "This kind of alcohol is also good"
	},
	{
		id: 72,
		zh: "这个地方也很漂亮",
		pi: "Zhège dìfang yě hěn piàoliang",
		en: "This place is also pretty"
	},
	{
		id: 73,
		zh: "昨天很冷，今天也很冷",
		pi: "Zuótiān hěn lěng, jīntiān yě hěn lěng",
		en: "Yesterday was cold, and today is also cold"
	},
	{
		id: 74,
		zh: "他生气了？我也很生气！",
		pi: "Tā shēngqì le? Wǒ yě hěn shēngqì!",
		en: "He got angry? I'm also angry!"
	},
	{
		id: 75,
		zh: "这个问题也很麻烦",
		pi: "Zhège wèntí yě hěn máfan",
		en: "This problem is also very troublesome"
	},
	{
		id: 76,
		zh: "我觉得这个餐厅也很好",
		pi: "Wǒ juéde zhège cāntīng yě hěn hǎo",
		en: "I think that this restaurant is also good"
	},
	{
		id: 77,
		zh: "你和我",
		pi: "nǐ hé wǒ",
		en: "you and I"
	},
	{
		id: 78,
		zh: "老板喜欢咖啡和茶",
		pi: "Lǎobǎn xǐhuan kāfēi hé chá",
		en: "The boss likes coffee and tea"
	},
	{
		id: 79,
		zh: "我的爷爷和奶奶都70岁",
		pi: "Wǒ de yéye hé nǎinai dōu qīshí suì",
		en: "My grandpa and grandma are both 70 years old"
	},
	{
		id: 80,
		zh: "他和他女朋友都喜欢中国菜",
		pi: "Tā hé tā nǚpéngyou dōu xǐhuan Zhōngguó cài",
		en: "He and his girlfriend both like Chinese food"
	},
	{
		id: 81,
		zh: "手机和电脑都很贵",
		pi: "Shǒujī hé diànnǎo dōu hěn guì",
		en: "Cell phones and computers are both expensive"
	},
	{
		id: 82,
		zh: "德语和法语都很难吗？",
		pi: "Déyǔ hé Fǎyǔ dōu hěn nán ma?",
		en: "Are both German and French difficult?"
	},
	{
		id: 83,
		zh: "今天和明天都可以吗？",
		pi: "Jīntiān hé míngtiān dōu kěyǐ ma?",
		en: "Are today and tomorrow both OK?"
	},
	{
		id: 84,
		zh: "我还是他？",
		pi: "Wǒ háishì tā?",
		en: "Me or him?"
	},
	{
		id: 85,
		zh: "一个还是两个？",
		pi: "Yī gè háishì liǎng gè?",
		en: "One or two?"
	},
	{
		id: 86,
		zh: "辣的还是不辣的？",
		pi: "Là de háishì bù là de?",
		en: "Spicy or non-spicy?"
	},
	{
		id: 87,
		zh: "冰的还是热的？",
		pi: "Bīng de háishì rè de?",
		en: "Cold or hot?"
	},
	{
		id: 88,
		zh: "上海还是北京？",
		pi: "Shànghǎi háishì Běijīng?",
		en: "Shanghai or Beijing?"
	},
	{
		id: 89,
		zh: "这是水还是酒？",
		pi: "Zhè shì shuǐ háishì jiǔ?",
		en: "Is this water or alcohol?"
	},
	{
		id: 90,
		zh: "他是美国人还是英国人？",
		pi: "Tā shì Měiguó rén háishì Yīngguó rén?",
		en: "Is he American or British?"
	},
	{
		id: 91,
		zh: "你喜欢我还是我的钱？",
		pi: "Nǐ xǐhuan wǒ háishì wǒ de qián?",
		en: "Do you like me or my money?"
	},
	{
		id: 92,
		zh: "你要喝茶还是咖啡？",
		pi: "Nǐ yào hē chá háishì kāfēi?",
		en: "Do you want to drink tea or coffee?"
	},
	{
		id: 93,
		zh: "你们想吃中国菜还是法国菜？",
		pi: "Nǐmen xiǎng chī Zhōngguó cài háishì Fǎguó cài?",
		en: "Do you want to eat Chinese food or French food?"
	},
	{
		id: 94,
		zh: "我20岁",
		pi: "Wǒ èrshí suì",
		en: "I am 20 years old"
	},
	{
		id: 95,
		zh: "我儿子一岁",
		pi: "Wǒ érzi yī suì",
		en: "My son is one year old"
	},
	{
		id: 96,
		zh: "我妈妈今年45岁",
		pi: "Wǒ māma jīnnián sìshí-wǔ suì",
		en: "My mother is 45 years old this year"
	},
	{
		id: 97,
		zh: "你爷爷今年80岁吗？",
		pi: "Nǐ yéye jīnnián bāshí suì ma？",
		en: "Is your grandpa eighty years old this year?"
	},
	{
		id: 98,
		zh: "他女朋友也20岁吗？",
		pi: "Tā nǚpéngyou yě èrshí suì ma?",
		en: "Is his girlfriend also twenty years old?"
	},
	{
		id: 99,
		zh: "她两岁半",
		pi: "Tā liǎng suì bàn",
		en: "She is two and a half years old"
	},
	{
		id: 100,
		zh: "我儿子一岁半",
		pi: "Wǒ érzi yī suì bàn",
		en: "My son is one and a half years old"
	},
	{
		id: 101,
		zh: "一个人",
		pi: "yī gè rén",
		en: "one person"
	},
	{
		id: 102,
		zh: "四个朋友",
		pi: "sì gè péngyou",
		en: "four friends"
	},
	{
		id: 103,
		zh: "三个苹果手机",
		pi: "sān gè Píngguǒ shǒujī",
		en: "three iPhones"
	},
	{
		id: 104,
		zh: "五个星期",
		pi: "wǔ gè xīngqī",
		en: "five weeks"
	},
	{
		id: 105,
		zh: "六个月",
		pi: "liù gè yuè",
		en: "six months"
	},
	{
		id: 106,
		zh: "两个老婆",
		pi: "liǎng gè lǎopo",
		en: "two wives"
	},
	{
		id: 107,
		zh: "十个男人，七个傻，八个坏",
		pi: "Shí gè nánrén, qī gè shǎ, bā gè huài",
		en: "Ten men: seven are fools, and eight are bad"
	},
	{
		id: 108,
		zh: "他是个老外",
		pi: "Tā shì gè lǎowài",
		en: "He is a foreigner"
	},
	{
		id: 109,
		zh: "我有个儿子",
		pi: "Wǒ yǒu gè érzi",
		en: "I have a son"
	},
	{
		id: 110,
		zh: "她是个好老师",
		pi: "Tā shì gè hǎo lǎoshī",
		en: "She is a good teacher"
	},
	{
		id: 111,
		zh: "你想吃个包子吗？",
		pi: "Nǐ xiǎng chī gè bāozi ma?",
		en: "Would you like to eat a stuffed steamed bun?"
	},
	{
		id: 112,
		zh: "老师，我有个问题",
		pi: "Lǎoshī, wǒ yǒu gè wèntí",
		en: "Teacher, I have a question"
	},
	{
		id: 113,
		zh: "1868年1月18号",
		pi: "Yī-bā-liù-bā nián Yīyuè shíbā hào",
		en: "January 18, 1868"
	},
	{
		id: 114,
		zh: "1910年8月9号",
		pi: "Yī-jiǔ-yī-líng nián Bāyuè jiǔ hào",
		en: "August 9, 1910"
	},
	{
		id: 115,
		zh: "2001年7月20日",
		pi: "èr-líng-líng-yī nián Qīyuè èrshí rì",
		en: "July 20th, 2001"
	},
	{
		id: 116,
		zh: "1月1日是新年",
		pi: "Yīyuè yī rì shì Xīnnián",
		en: "January 1st is New Year's Day"
	},
	{
		id: 117,
		zh: "12月24日是平安夜",
		pi: "Shí-èryuè èrshí-sì rì shì Píng'ān Yè",
		en: "December 24th is Christmas Eve"
	},
	{
		id: 118,
		zh: "10月1号我们去上海",
		pi: "Shíyuè yī hào wǒmen qù Shànghǎi",
		en: "We will go to Shanghai on October 1st"
	},
	{
		id: 119,
		zh: "我1990年7月出生",
		pi: "Wǒ Yī-jiǔ-jiǔ-líng nián Qīyuè chūshēng",
		en: "I was born in July 1990"
	},
	{
		id: 120,
		zh: "你的生日是11月11号吗？",
		pi: "Nǐ de shēngrì shì Shíyīyuè shíyī hào ma?",
		en: "Is your birthday November 11th?"
	},
	{
		id: 121,
		zh: "我2006年4月17号认识了他",
		pi: "Wǒ èr-líng-líng-liù nián Sìyuè shíqī hào rènshi le tā",
		en: "I met him on April 17, 2006"
	},
	{
		id: 122,
		zh: "1980年9月4号我们结婚了",
		pi: "Yī-jiǔ-bā-líng nián Jiǔyuè sì hào wǒmen jiéhūn le",
		en: "We got married on September 4th, 1980"
	},
	{
		id: 123,
		zh: "今天是星期一吗？",
		pi: "Jīntiān shì Xīngqīyī ma?",
		en: "Is today Monday?"
	},
	{
		id: 124,
		zh: "明天星期五，太高兴了",
		pi: "Míngtiān Xīngqīwǔ, tài gāoxìng le",
		en: "Tomorrow is Friday. I'm so happy"
	},
	{
		id: 125,
		zh: "星期三我不在上海",
		pi: "Xīngqīsān wǒ bù zài Shànghǎi",
		en: "I'm not here in Shanghai on Wednesday"
	},
	{
		id: 126,
		zh: "星期二早上我很忙",
		pi: "Xīngqī'èr zǎoshang wǒ hěn máng",
		en: "I am busy on Tuesday morning"
	},
	{
		id: 127,
		zh: "你星期天要做什么？",
		pi: "Nǐ Xīngqītiān yào zuò shénme?",
		en: "What are you doing on Sunday?"
	},
	{
		id: 128,
		zh: "上个星期五我跟他见面了",
		pi: "Shàng gè Xīngqīwǔ wǒ gēn tā jiànmiàn le",
		en: "I met him last Friday"
	},
	{
		id: 129,
		zh: "这个星期三晚上你有空吗？",
		pi: "Zhège Xīngqīsān wǎnshang nǐ yǒu kòng ma?",
		en: "Are you free this Wednesday evening?"
	},
	{
		id: 130,
		zh: "下个星期四是我的生日",
		pi: "Xià gè Xīngqīsì shì wǒ de shēngrì",
		en: "My birthday is on next Thursday"
	},
	{
		id: 131,
		zh: "这个星期五晚上我们要去酒吧",
		pi: "Zhège Xīngqīwǔ wǎnshang wǒmen yào qù jiǔbā",
		en: "We're going to a bar this Friday night"
	},
	{
		id: 132,
		zh: "星期六和星期天我们不上班",
		pi: "Xīngqīliù hé Xīngqītiān wǒmen bù shàngbān",
		en: "Saturday and Sunday we don't work"
	},
	{
		id: 133,
		zh: "九点",
		pi: "jiǔ diǎn",
		en: "9 o'clock"
	},
	{
		id: 134,
		zh: "上午七点",
		pi: "shàngwǔ qī diǎn",
		en: "7 o'clock a.m."
	},
	{
		id: 135,
		zh: "下午四点",
		pi: "xiàwǔ sì diǎn",
		en: "4 o'clock p.m."
	},
	{
		id: 136,
		zh: "中午十二点",
		pi: "zhōngwǔ shí'èr diǎn",
		en: "12 o'clock noon"
	},
	{
		id: 137,
		zh: "明天晚上七点",
		pi: "míngtiān wǎnshang qī diǎn",
		en: "7 o'clock p.m. tomorrow evening"
	},
	{
		id: 138,
		zh: "9月9号早上六点",
		pi: "jiǔ yuè jiǔ hào zǎoshang liù diǎn",
		en: "September 9th, 6 o'clock a.m."
	},
	{
		id: 139,
		zh: "星期三上午九点",
		pi: "Xīngqīsān shàngwǔ jiǔ diǎn",
		en: "Wednesday at 9 o'clock a.m."
	},
	{
		id: 140,
		zh: "五点半",
		pi: "wǔ diǎn bàn",
		en: "5:30"
	},
	{
		id: 141,
		zh: "下午两点半",
		pi: "xiàwǔ liǎng diǎn bàn",
		en: "2:30 p.m."
	},
	{
		id: 142,
		zh: "星期天上午十点半",
		pi: "Xīngqītiān shàngwǔ shí diǎn bàn",
		en: "Sunday at 10:30 a.m."
	},
	{
		id: 143,
		zh: "昨天晚上七点半",
		pi: "zuótiān wǎnshang qī diǎn bàn",
		en: "7:30 yesterday evening"
	},
	{
		id: 144,
		zh: "今天下午四点半",
		pi: "jīntiān xiàwǔ sì diǎn bàn",
		en: "4:30 p.m. this afternoon"
	},
	{
		id: 145,
		zh: "我家很大",
		pi: "Wǒ jiā hěn dà",
		en: "My house is very big"
	},
	{
		id: 146,
		zh: "你哥哥很高",
		pi: "Nǐ gēge hěn gāo",
		en: "Your big brother is very tall"
	},
	{
		id: 147,
		zh: "这是我女朋友",
		pi: "Zhè shì wǒ nǚpéngyou",
		en: "This is my girlfriend"
	},
	{
		id: 148,
		zh: "她妈妈很漂亮",
		pi: "Tā māma hěn piàoliang",
		en: "Her mom is very pretty"
	},
	{
		id: 149,
		zh: "我们学校很大",
		pi: "Wǒmen xuéxiào hěn dà",
		en: "Our school is big"
	},
	{
		id: 150,
		zh: "他们公司在北京",
		pi: "Tāmen gōngsī zài Běijīng",
		en: "Their company is in Bejing"
	},
	{
		id: 151,
		zh: "你男朋友很帅",
		pi: "Nǐ nánpéngyou hěn shuài",
		en: "Your boyfriend is very handsome"
	},
	{
		id: 152,
		zh: "他儿子很有名",
		pi: "Tā érzi hěn yǒumíng",
		en: "His son is really famous"
	},
	{
		id: 153,
		zh: "我女儿会说英语",
		pi: "Wǒ nǚ'ér huì shuō Yīngyǔ",
		en: "My daughter can speak English"
	},
	{
		id: 154,
		zh: "他爸爸是我们公司的老板",
		pi: "Tā bàba shì wǒmen gōngsī de lǎobǎn",
		en: "His dad is the boss of our company"
	},
	{
		id: 155,
		zh: "我的老师",
		pi: "wǒ de lǎoshī",
		en: "my teacher"
	},
	{
		id: 156,
		zh: "你的手机",
		pi: "nǐ de shǒujī",
		en: "your cell phone"
	},
	{
		id: 157,
		zh: "我们的钱",
		pi: "wǒmen de qián",
		en: "our money"
	},
	{
		id: 158,
		zh: "他们的东西",
		pi: "tāmen de dōngxi",
		en: "their stuff"
	},
	{
		id: 159,
		zh: "爸爸的车",
		pi: "bàba de chē",
		en: "dad's car"
	},
	{
		id: 160,
		zh: "你们的菜",
		pi: "nǐmen de cài",
		en: "your food"
	},
	{
		id: 161,
		zh: "北京的空气",
		pi: "Běijīng de kōngqì",
		en: "Beijing's air"
	},
	{
		id: 162,
		zh: "公司的老板",
		pi: "gōngsī de lǎobǎn",
		en: "the company's boss"
	},
	{
		id: 163,
		zh: "上海的天气",
		pi: "Shànghǎi de tiānqì",
		en: "Shanghai's weather"
	},
	{
		id: 164,
		zh: "老师的朋友",
		pi: "lǎoshī de péngyou",
		en: "teacher's friend"
	},
	{
		id: 165,
		zh: "这个很好，那个呢？",
		pi: "Zhège hěn hǎo, nàge ne?",
		en: "This one is good. What about that one?"
	},
	{
		id: 166,
		zh: "这个用中文怎么说？那个呢？",
		pi: "Zhège yòng Zhōngwén zěnme shuō? Nàge ne?",
		en: "How do I say this in Chinese? And that?"
	},
	{
		id: 167,
		zh: "我在家，你呢？",
		pi: "Wǒ zài jiā. Nǐ ne?",
		en: "I'm at home. What about you?"
	},
	{
		id: 168,
		zh: "你爸爸是上海人，你妈妈呢？",
		pi: "Nǐ bàba shì Shànghǎi rén, nǐ māma ne?",
		en: "Your father is Shanghainese. And your mom?"
	},
	{
		id: 169,
		zh: "你哥哥有工作，弟弟呢？",
		pi: "Nǐ gēge yǒu gōngzuò. Dìdi ne?",
		en: "Your big brother has a job. What about your little brother?"
	},
	{
		id: 170,
		zh: "北京下雨了。上海呢？",
		pi: "Běijīng xiàyǔ le. Shànghǎi ne?",
		en: "It's raining in Beijing. How about in Shanghai?"
	},
	{
		id: 171,
		zh: "我现在要出去。你呢？",
		pi: "Wǒ xiànzài yào chūqù. Nǐ ne?",
		en: "I'm going to go out now. How about you?"
	},
	{
		id: 172,
		zh: "我知道你会说中文。你老公呢？",
		pi: "Wǒ zhīdào nǐ huì shuō Zhōngwén. Nǐ lǎogōng ne?",
		en: "I know you can speak Chinese. What about your husband?"
	},
	{
		id: 173,
		zh: "这个周末我想去酒吧。你们呢？",
		pi: "Zhège zhōumò wǒ xiǎng qù jiǔbā. Nǐmen ne?",
		en: "I want to go to a bar this weekend. What about you all?"
	},
	{
		id: 174,
		zh: "今天晚上没空？明天晚上呢？",
		pi: "Jīntiān wǎnshang méi kòng? Míngtiān wǎnshang ne?",
		en: "You don't have time tonight? What about tomorrow evening?"
	},
	{
		id: 175,
		zh: "钱呢？",
		pi: "Qián ne?",
		en: "Where's the money?"
	},
	{
		id: 176,
		zh: "你妈妈呢？",
		pi: "Nǐ māma ne?",
		en: "Where's your mom?"
	},
	{
		id: 177,
		zh: "我的手机呢？",
		pi: "Wǒ de shǒujī ne?",
		en: "Where's my cell phone?"
	},
	{
		id: 178,
		zh: "我们走吧",
		pi: "Wǒmen zǒu ba",
		en: "Let's go"
	},
	{
		id: 179,
		zh: "你说吧",
		pi: "Nǐ shuō ba",
		en: "You say it"
	},
	{
		id: 180,
		zh: "快点吃吧",
		pi: "Kuài diǎn chī ba",
		en: "Hurry up and eat"
	},
	{
		id: 181,
		zh: "给我两个吧",
		pi: "Gěi wǒ liǎng gè ba",
		en: "Give me two"
	},
	{
		id: 182,
		zh: "喝水吧",
		pi: "Hē shuǐ ba",
		en: "Have some water"
	},
	{
		id: 183,
		zh: "我们去香港吧",
		pi: "Wǒmen qù Xiānggǎng ba",
		en: "Let's go to Hong Kong"
	},
	{
		id: 184,
		zh: "我们六点去吧？",
		pi: "Wǒmen liù diǎn qù ba?",
		en: "We're going at 6 o'clock (right)?"
	},
	{
		id: 185,
		zh: "休息一下吧",
		pi: "Xiūxi yīxià ba",
		en: "Take a break"
	},
	{
		id: 186,
		zh: "我们结婚吧",
		pi: "Wǒmen jiéhūn ba",
		en: "Let's get married"
	},
	{
		id: 187,
		zh: "老板，便宜一点吧",
		pi: "Lǎobǎn, piányi yīdiǎn ba",
		en: "Boss, can you make it cheaper"
	},
	{
		id: 188,
		zh: "我在上海",
		pi: "Wǒ zài Shànghǎi",
		en: "I'm in Shanghai"
	},
	{
		id: 189,
		zh: "他们在英国",
		pi: "Tāmen zài Yīngguó",
		en: "They're in England"
	},
	{
		id: 190,
		zh: "老板在外面",
		pi: "Lǎobǎn zài wàimiàn",
		en: "The boss is outside"
	},
	{
		id: 191,
		zh: "他不在学校",
		pi: "Tā bù zài xuéxiào",
		en: "He's not at school"
	},
	{
		id: 192,
		zh: "她现在在家吗？",
		pi: "Tā xiànzài zài jiā ma？",
		en: "Is she at home now?"
	},
	{
		id: 193,
		zh: "你在公司吗？",
		pi: "Nǐ zài gōngsī ma?",
		en: "Are you at the office?"
	},
	{
		id: 194,
		zh: "老师不在办公室吗？",
		pi: "Lǎoshī bù zài bàngōngshì ma?",
		en: "Is the teacher not in the office?"
	},
	{
		id: 195,
		zh: "谁在楼上？",
		pi: "Shéi zài lóushàng?",
		en: "Who is upstairs?"
	},
	{
		id: 196,
		zh: "我和朋友在酒吧",
		pi: "Wǒ hé péngyou zài jiǔbā",
		en: "I'm with a friend at a bar"
	},
	{
		id: 197,
		zh: "你们明天在北京吗？",
		pi: "Nǐmen míngtiān zài Běijīng ma?",
		en: "Are you guys in Beijing tomorrow?"
	},
	{
		id: 198,
		zh: "我家有很多小狗",
		pi: "Wǒ jiā yǒu hěn duō xiǎo gǒu",
		en: "There are a lot of puppies in my home"
	},
	{
		id: 199,
		zh: "我们学校有很多帅哥",
		pi: "Wǒmen xuéxiào yǒu hěn duō shuàigē",
		en: "There are a lot of cute guys in our school"
	},
	{
		id: 200,
		zh: "日本有很多中国人",
		pi: "Rìběn yǒu hěn duō Zhōngguó rén",
		en: "There are many Chinese people in Japan"
	},
	{
		id: 201,
		zh: "这个酒吧有很多美女",
		pi: "Zhège jiǔbā yǒu hěn duō měinǚ",
		en: "There are a lot of pretty girls in this bar"
	},
	{
		id: 202,
		zh: "你家有牛奶吗？",
		pi: "Nǐ jiā yǒu niúnǎi ma?",
		en: "Is there milk in your house?"
	},
	{
		id: 203,
		zh: "这里有一个问题",
		pi: "Zhèlǐ yǒu yī gè wèntí",
		en: "There is a problem here"
	},
	{
		id: 204,
		zh: "房间里有人吗？",
		pi: "Fángjiān lǐ yǒu rén ma?",
		en: "Is there anyone in the room?"
	},
	{
		id: 205,
		zh: "杯子里有水吗？",
		pi: "Bēizi lǐ yǒu shuǐ ma?",
		en: "Is there any water in the cup?"
	},
	{
		id: 206,
		zh: "我的手机里有你的号码",
		pi: "Wǒ de shǒujī lǐ yǒu nǐ de hàomǎ",
		en: "Your number is in my cell phone"
	},
	{
		id: 207,
		zh: "现在办公室里有人吗？",
		pi: "Xiànzài bàngōngshì lǐ yǒu rén ma?",
		en: "Is there anyone in the office now?"
	},
	{
		id: 208,
		zh: "我有钱",
		pi: "Wǒ yǒu qián",
		en: "I have money"
	},
	{
		id: 209,
		zh: "你有房子吗？",
		pi: "Nǐ yǒu fángzi ma?",
		en: "Do you have a house?"
	},
	{
		id: 210,
		zh: "她没有车",
		pi: "Tā méi yǒu chē",
		en: "She doesn't have a car"
	},
	{
		id: 211,
		zh: "他有女朋友吗？",
		pi: "Tā yǒu nǚpéngyou ma?",
		en: "Does he have a girlfriend?"
	},
	{
		id: 212,
		zh: "我们有三个女儿",
		pi: "Wǒmen yǒu sān gè nǚ'ér",
		en: "We have three daughters"
	},
	{
		id: 213,
		zh: "我们家有两个公司",
		pi: "Wǒmen jiā yǒu liǎng gè gōngsī",
		en: "Our family has two companies"
	},
	{
		id: 214,
		zh: "你有一百块钱吗？",
		pi: "Nǐ yǒu yī bǎi kuài qián ma?",
		en: "Do you have 100 kuài RMB?"
	},
	{
		id: 215,
		zh: "我爸爸没有工作",
		pi: "Wǒ bàba méi yǒu gōngzuò",
		en: "My dad doesn't have a job"
	},
	{
		id: 216,
		zh: "今天你有课吗？",
		pi: "Jīntiān nǐ yǒu kè ma?",
		en: "Do you have classes today?"
	},
	{
		id: 217,
		zh: "他叫李小龙",
		pi: "Tā jiào Lǐ Xiǎolóng",
		en: "His name is Li Xiaolong"
	},
	{
		id: 218,
		zh: "那个叫什么？",
		pi: "Nàge jiào shénme?",
		en: "What is that called?"
	},
	{
		id: 219,
		zh: "你爸爸叫什么？",
		pi: "Nǐ bàba jiào shénme?",
		en: "What is your dad's name?"
	},
	{
		id: 220,
		zh: "这个地方叫外滩",
		pi: "Zhège dìfang jiào Wàitān",
		en: "This place is called the Bund"
	},
	{
		id: 221,
		zh: "你叫什么名字？",
		pi: "Nǐ jiào shénme míngzi?",
		en: "What's your name?"
	},
	{
		id: 222,
		zh: "我去公司",
		pi: "Wǒ qù gōngsī",
		en: "I'm going to the office"
	},
	{
		id: 223,
		zh: "你去洗手间吗？",
		pi: "Nǐ qù xǐshǒujiān ma?",
		en: "Are you going to the restroom?"
	},
	{
		id: 224,
		zh: "下午我会去超市",
		pi: "Xiàwǔ wǒ huì qù chāoshì",
		en: "In the afternoon, I'll go to the supermarket"
	},
	{
		id: 225,
		zh: "我们现在去公园",
		pi: "Wǒmen xiànzài qù gōngyuán",
		en: "We're going to the park now"
	},
	{
		id: 226,
		zh: "晚上我们去酒吧。你去吗？",
		pi: "Wǎnshang wǒmen qù jiǔbā. Nǐ qù ma?",
		en: "Tonight we're going to the bar. Are you going?"
	},
	{
		id: 227,
		zh: "我去工作",
		pi: "Wǒ qù gōngzuò",
		en: "I'm going to work"
	},
	{
		id: 228,
		zh: "他去上课",
		pi: "Tā qù shàngkè",
		en: "He's going to class"
	},
	{
		id: 229,
		zh: "你想去旅行吗？",
		pi: "Nǐ xiǎng qù lǚxíng ma?",
		en: "Would you like to go travel?"
	},
	{
		id: 230,
		zh: "我们去吃饭吧",
		pi: "Wǒmen qù chīfàn ba",
		en: "Let's go eat"
	},
	{
		id: 231,
		zh: "九点我们去买",
		pi: "Jiǔ diǎn wǒmen qù mǎi",
		en: "At 9 o'clock, we'll go buy it"
	},
	{
		id: 232,
		zh: "你去哪儿？",
		pi: "Nǐ qù nǎr ?",
		en: "Where are you going?"
	},
	{
		id: 233,
		zh: "你去我家吗？",
		pi: "Nǐ qù wǒ jiā ma ?",
		en: "Are you going to my place?"
	},
	{
		id: 234,
		zh: "我姓王",
		pi: "Wǒ xìng Wáng",
		en: "My family name is Wang"
	},
	{
		id: 235,
		zh: "你老板姓李吗？",
		pi: "Nǐ lǎobǎn xìng Lǐ ma?",
		en: "Is your boss's last name Li?"
	},
	{
		id: 236,
		zh: "那个帅哥姓张",
		pi: "Nàge shuàigē xìng Zhāng",
		en: "That handsome guy's last name is Zhang"
	},
	{
		id: 237,
		zh: "我爸爸姓周，我妈妈姓林",
		pi: "Wǒ bàba xìng Zhōu, wǒ māma xìng Lín",
		en: "My father's family name is Zhou. My mother's family name is Lin"
	},
	{
		id: 238,
		zh: "他女朋友姓钱",
		pi: "Tā nǚpéngyou xìng Qián",
		en: "His girlfriend's last name is Qian"
	},
	{
		id: 239,
		zh: "你好，我姓毛",
		pi: "Nǐ hǎo, wǒ xìng Máo",
		en: "Hello. My last name is Mao"
	},
	{
		id: 240,
		zh: "我姓赵，我太太也姓赵",
		pi: "Wǒ xìng Zhào, wǒ tàitai yě xìng Zhào",
		en: "My last name is Zhao. My wife's last name is also Zhao"
	},
	{
		id: 241,
		zh: "我的中文老师姓陈",
		pi: "Wǒ de Zhōngwén lǎoshī xìng Chén",
		en: "My Chinese teacher's surname is Chen"
	},
	{
		id: 242,
		zh: "你奶奶也姓陈吗？",
		pi: "Nǐ nǎinai yě xìng Chén ma?",
		en: "Is your grandma's family name also Chen?"
	},
	{
		id: 243,
		zh: "他们都姓李",
		pi: "Tāmen dōu xìng Lǐ",
		en: "All of their surnames are Li"
	},
	{
		id: 244,
		zh: "你姓什么?",
		pi: "Nǐ xìng shénme?",
		en: "What is your last name?"
	},
	{
		id: 245,
		zh: "您贵姓？",
		pi: "Nín guì xìng?",
		en: "What is your honorable surname?"
	},
	{
		id: 246,
		zh: "我能吃四十个饺子",
		pi: "Wǒ néng chī sìshí gè jiǎozi",
		en: "I can eat 40 dumplings"
	},
	{
		id: 247,
		zh: "他能工作24个小时",
		pi: "Tā néng gōngzuò èrshí-sì gè xiǎoshí",
		en: "He can work 24 hours"
	},
	{
		id: 248,
		zh: "你能帮我找到他吗？",
		pi: "Nǐ néng bāng wǒ zhǎodào tā ma?",
		en: "Can you help me find him?"
	},
	{
		id: 249,
		zh: "你的手机能上网吗？",
		pi: "Nǐ de shǒujī néng shàngwǎng ma?",
		en: "Can your cell phone go on the internet?"
	},
	{
		id: 250,
		zh: "一岁的宝宝能说话吗？",
		pi: "Yī suì de bǎobao néng shuōhuà ma?",
		en: "Can a one year old baby talk?"
	},
	{
		id: 251,
		zh: "开车一个小时能到家吗？",
		pi: "Kāichē yī gè xiǎoshí néng dào jiā ma?",
		en: "Is it possible to drive home in one hour?"
	},
	{
		id: 252,
		zh: "他们明天能早点来吗？",
		pi: "Tāmen míngtiān néng zǎo diǎn lái ma?",
		en: "Would it be possible for them to come a little earlier tomorrow?"
	},
	{
		id: 253,
		zh: "你们能小声一点吗？",
		pi: "Nǐmen néng xiǎo shēng yīdiǎn ma?",
		en: "Could you all lower your voices a bit?"
	},
	{
		id: 254,
		zh: "你能告诉我她的手机号码吗？",
		pi: "Nǐ néng gàosu wǒ tā de shǒujī hàomǎ ma?",
		en: "Could you tell me her cell phone number?"
	},
	{
		id: 255,
		zh: "一千块能买一个手机吗？",
		pi: "Yīqiān kuài néng mǎi yī gè shǒujī ma?",
		en: "Is it possible to buy a cell phone with one thousand RMB?"
	},
	{
		id: 256,
		zh: "我能问你一个问题吗？",
		pi: "Wǒ néng wèn nǐ yī gè wèntí ma?",
		en: "Could I ask you a question?"
	},
	{
		id: 257,
		zh: "我能坐在这里吗？",
		pi: "Wǒ néng zuò zài zhèlǐ ma?",
		en: "Could I sit here?"
	},
	{
		id: 258,
		zh: "这里不能游泳",
		pi: "Zhèlǐ bù néng yóuyǒng",
		en: "You can't swim here"
	},
	{
		id: 259,
		zh: "上课的时候不能说英文",
		pi: "Shàngkè de shíhou bù néng shuō Yīngwén",
		en: "In class, you can't speak English"
	},
	{
		id: 260,
		zh: "工作的时候不能玩手机",
		pi: "Gōngzuò de shíhou bù néng wán shǒujī",
		en: "When working, you can't play with your cell phone"
	},
	{
		id: 261,
		zh: "他会说中文",
		pi: "Tā huì shuō Zhōngwén",
		en: "He can speak Chinese"
	},
	{
		id: 262,
		zh: "我会写汉字",
		pi: "Wǒ huì xiě Hànzì",
		en: "I can write Chinese characters"
	},
	{
		id: 263,
		zh: "你会做饭吗？",
		pi: "Nǐ huì zuòfàn ma?",
		en: "Can you cook food？"
	},
	{
		id: 264,
		zh: "狗会唱歌吗？",
		pi: "Gǒu huì chànggē ma?",
		en: "Can dogs sing？"
	},
	{
		id: 265,
		zh: "爸爸会开车",
		pi: "Bàba huì kāichē",
		en: "Dad can drive"
	},
	{
		id: 266,
		zh: "我不会说英文",
		pi: "Wǒ bù huì shuō Yīngwén",
		en: "I can't speak English"
	},
	{
		id: 267,
		zh: "妈妈不会做中国菜",
		pi: "Māma bù huì zuò Zhōngguó cài",
		en: "Mom can't cook Chinese food"
	},
	{
		id: 268,
		zh: "你不会游泳吗？",
		pi: "Nǐ bù huì yóuyǒng ma?",
		en: "You can't swim?"
	},
	{
		id: 269,
		zh: "我奶奶不会用电脑",
		pi: "Wǒ nǎinai bù huì yòng diànnǎo",
		en: "My grandmother can't use a computer"
	},
	{
		id: 270,
		zh: "你不会开车吗？",
		pi: "Nǐ bù huì kāichē ma?",
		en: "You can't drive a car?"
	},
	{
		id: 271,
		zh: "你们现在要出去吗？",
		pi: "Nǐmen xiànzài yào chūqù ma?",
		en: "Are you all going out now?"
	},
	{
		id: 272,
		zh: "我们今年要去美国",
		pi: "Wǒmen jīnnián yào qù Měiguó",
		en: "We are planning to go to the U.S. this year"
	},
	{
		id: 273,
		zh: "他下个月要来中国工作",
		pi: "Tā xià gè yuè yào lái Zhōngguó gōngzuò",
		en: "He is coming to China to work next month"
	},
	{
		id: 274,
		zh: "你下个星期要去她家吃晚饭吗？",
		pi: "Nǐ xià gè xīngqī yào qù tā jiā chī wǎnfàn ma?",
		en: "Are you going to her place for dinner next week?"
	},
	{
		id: 275,
		zh: "这个星期天你要做什么？",
		pi: "Zhège Xīngqītiān nǐ yào zuò shénme?",
		en: "What are you doing this Sunday?"
	},
	{
		id: 276,
		zh: "我晚上要给妈妈打电话",
		pi: "Wǒ wǎnshang yào gěi māma dǎ diànhuà",
		en: "I am going to call my mom this evening"
	},
	{
		id: 277,
		zh: "下午老师要来我家",
		pi: "Xiàwǔ lǎoshī yào lái wǒ jiā",
		en: "The teacher is coming to my place this afternoon"
	},
	{
		id: 278,
		zh: "老板明天要见他们吗？",
		pi: "Lǎobǎn míngtiān yào jiàn tāmen ma?",
		en: "Is the boss going to meet them tomorrow?"
	},
	{
		id: 279,
		zh: "下班以后你要回家吗？",
		pi: "Xiàbān yǐhòu nǐ yào huíjiā ma?",
		en: "Are you planning to go home after getting off work?"
	},
	{
		id: 280,
		zh: "我可以进来吗？",
		pi: "Wǒ kěyǐ jìnlái ma?",
		en: "May I come in?"
	},
	{
		id: 281,
		zh: "二十一岁以后可以喝酒",
		pi: "Èrshí-yī suì yǐhòu kěyǐ hējiǔ",
		en: "After you are 21 years old, you may drink alcohol"
	},
	{
		id: 282,
		zh: "妈妈，我可以出去玩吗？",
		pi: "Māma, wǒ kěyǐ chūqù wán ma?",
		en: "Mom, may I go out and play?"
	},
	{
		id: 283,
		zh: "我们可以在办公室吃饭吗？",
		pi: "Wǒmen kěyǐ zài bàngōngshì chīfàn ma?",
		en: "Can we eat in the office?"
	},
	{
		id: 284,
		zh: "我可以在这里停车吗？",
		pi: "Wǒ kěyǐ zài zhèlǐ tíngchē ma?",
		en: "Can I park here?"
	},
	{
		id: 285,
		zh: "孩子不可以看这个",
		pi: "Háizi bù kěyǐ kàn zhège",
		en: "Children can't watch this"
	},
	{
		id: 286,
		zh: "你现在不可以进去",
		pi: "Nǐ xiànzài bù kěyǐ jìnqù",
		en: "You can't go in right now"
	},
	{
		id: 287,
		zh: "这里不可以抽烟",
		pi: "Zhèlǐ bù kěyǐ chōuyān",
		en: "You can't smoke here"
	},
	{
		id: 288,
		zh: "我们都不可以去",
		pi: "Wǒmen dōu bù kěyǐ qù",
		en: "None of us may go"
	},
	{
		id: 289,
		zh: "你不可以说脏话",
		pi: "Nǐ bù kěyǐ shuō zānghuà",
		en: "You can't say swear words"
	},
	{
		id: 290,
		zh: "他要学中文",
		pi: "Tā yào xué Zhōngwén",
		en: "He wants to study Chinese"
	},
	{
		id: 291,
		zh: "宝宝要睡觉",
		pi: "Bǎobao yào shuìjiào",
		en: "The baby wants to sleep"
	},
	{
		id: 292,
		zh: "早饭我要吃肉",
		pi: "Zǎofàn wǒ yào chī ròu",
		en: "For breakfast I want to eat meat"
	},
	{
		id: 293,
		zh: "今天很累，我要休息",
		pi: "Jīntiān hěn lèi, wǒ yào xiūxi",
		en: "Today I'm very tired. I want to rest"
	},
	{
		id: 294,
		zh: "这个周末你们要做什么？",
		pi: "Zhège zhōumò nǐmen yào zuò shénme?",
		en: "This weekend what do you want to do?"
	},
	{
		id: 295,
		zh: "我要喝咖啡",
		pi: "Wǒ yào hē kāfēi",
		en: "I want to drink coffee"
	},
	{
		id: 296,
		zh: "我想喝咖啡",
		pi: "Wǒ xiǎng hē kāfēi",
		en: "I'd like to drink coffee"
	},
	{
		id: 297,
		zh: "你要吃什么？",
		pi: "Nǐ yào chī shénme?",
		en: "What do you want to eat?"
	},
	{
		id: 298,
		zh: "你想吃什么？",
		pi: "Nǐ xiǎng chī shénme?",
		en: "What would you like to eat?"
	},
	{
		id: 299,
		zh: "你们怎么学中文？",
		pi: "Nǐmen zěnme xué Zhōngwén?",
		en: "How do you study Chinese?"
	},
	{
		id: 300,
		zh: "你怎么上班？坐地铁吗？",
		pi: "Nǐ zěnme shàngbān? Zuò dìtiě ma?",
		en: "How do you get to work? By metro?"
	},
	{
		id: 301,
		zh: "你知道怎么去外滩吗？",
		pi: "Nǐ zhīdào zěnme qù​ Wàitān ma?",
		en: "Do you know how to get to the Bund?"
	},
	{
		id: 302,
		zh: "你怎么知道我喜欢旅行？",
		pi: "Nǐ zěnme zhīdào wǒ xǐhuan lǚxíng?",
		en: "How did you know I like to travel?"
	},
	{
		id: 303,
		zh: "我不知道怎么跟女孩子说话",
		pi: "Wǒ bù zhīdào zěnme gēn nǚháizi shuōhuà",
		en: "I don't know how to talk to girls"
	},
	{
		id: 304,
		zh: "芒果怎么吃？",
		pi: "Mángguǒ zěnme chī?",
		en: "How do you eat mangos?"
	},
	{
		id: 305,
		zh: "语法怎么学？",
		pi: "Yǔfǎ zěnme xué?",
		en: "How do you study grammar?"
	},
	{
		id: 306,
		zh: "中国菜怎么做？",
		pi: "Zhōngguó cài zěnme zuò?",
		en: "How do you cook Chinese food?"
	},
	{
		id: 307,
		zh: "我没有去上班",
		pi: "Wǒ méiyǒu qù shàngbān",
		en: "I didn't go to work"
	},
	{
		id: 308,
		zh: "他们没有说话",
		pi: "Tāmen méiyǒu shuōhuà",
		en: "They didn't speak"
	},
	{
		id: 309,
		zh: "我没有喝你的啤酒",
		pi: "Wǒ méiyǒu hē nǐ de píjiǔ",
		en: "I didn't drink your beer"
	},
	{
		id: 310,
		zh: "她没有看到你",
		pi: "Tā méiyǒu kàndào nǐ",
		en: "She didn't see you"
	},
	{
		id: 311,
		zh: "我没有吃早饭",
		pi: "Wǒ méiyǒu chī zǎofàn",
		en: "I didn't eat breakfast"
	},
	{
		id: 312,
		zh: "宝宝没哭",
		pi: "Bǎobao méi kū",
		en: "The baby didn't cry"
	},
	{
		id: 313,
		zh: "你昨天没回家吗？",
		pi: "Nǐ zuótiān méi huíjiā ma?",
		en: "You didn't go back home yesterday?"
	},
	{
		id: 314,
		zh: "老板今天没来吗？",
		pi: "Lǎobǎn jīntiān méi​ lái ma?",
		en: "The boss didn't come today?"
	},
	{
		id: 315,
		zh: "老师今天没生气",
		pi: "Lǎoshī jīntiān méi shēngqì",
		en: "The teacher didn't get angry today"
	},
	{
		id: 316,
		zh: "妈妈晚上没做饭",
		pi: "Māma wǎnshang méi zuòfàn",
		en: "Mom didn't cook food this evening"
	},
	{
		id: 317,
		zh: "不要走",
		pi: "Bùyào zǒu",
		en: "Don't leave"
	},
	{
		id: 318,
		zh: "不要打我！",
		pi: "Bùyào dǎ wǒ!",
		en: "Don't hit me!"
	},
	{
		id: 319,
		zh: "不要生气，好吗？",
		pi: "Bùyào shēngqì, hǎo ma?",
		en: "Don't get angry, OK?"
	},
	{
		id: 320,
		zh: "不要哭！",
		pi: "Bùyào kū!",
		en: "Don't cry!"
	},
	{
		id: 321,
		zh: "不要吃很多肉",
		pi: "Bùyào chī hěn duō ròu",
		en: "Don't eat a lot of meat"
	},
	{
		id: 322,
		zh: "你们不要喝酒",
		pi: "Nǐmen bùyào hējiǔ",
		en: "You guys, don't drink alcohol"
	},
	{
		id: 323,
		zh: "不要说英文",
		pi: "Bùyào shuō Yīngwén",
		en: "Don't speak English"
	},
	{
		id: 324,
		zh: "晚上不要喝咖啡",
		pi: "Wǎnshang bùyào hē kāfēi",
		en: "Don't drink coffee at night"
	},
	{
		id: 325,
		zh: "上课的时候不要玩手机！",
		pi: "Shàngkè de shíhou bùyào wán shǒujī!",
		en: "In class don't play with your phone!"
	},
	{
		id: 326,
		zh: "不要很晚睡觉！",
		pi: "Bùyào hěn wǎn shuìjiào.",
		en: "Don't go to bed too late."
	},
	{
		id: 327,
		zh: "你们吃",
		pi: "Nǐmen chī",
		en: "You eat"
	},
	{
		id: 328,
		zh: "他笑",
		pi: "Tā xiào",
		en: "He laughs"
	},
	{
		id: 329,
		zh: "我读",
		pi: "Wǒ dú",
		en: "I read"
	},
	{
		id: 330,
		zh: "你去",
		pi: "Nǐ qù",
		en: "You go"
	},
	{
		id: 331,
		zh: "你们看",
		pi: "Nǐmen kàn",
		en: "You look"
	},
	{
		id: 332,
		zh: "你来",
		pi: "Nǐ lái",
		en: "You come here!"
	},
	{
		id: 333,
		zh: "我说",
		pi: "Wǒ shuō",
		en: "I speak"
	},
	{
		id: 334,
		zh: "孩子哭",
		pi: "Háizi kū",
		en: "Children cry"
	},
	{
		id: 335,
		zh: "谁要学？",
		pi: "Shéi yào xué?",
		en: "Who wants to study?"
	},
	{
		id: 336,
		zh: "谁想玩？",
		pi: "Shéi xiǎng wán?",
		en: "Who wants to play?"
	},
	{
		id: 337,
		zh: "他们吃肉",
		pi: "Tāmen chī ròu",
		en: "They eat meat"
	},
	{
		id: 338,
		zh: "你喝茶吗？",
		pi: "Nǐ hē chá ma?",
		en: "Do you drink tea?"
	},
	{
		id: 339,
		zh: "我去学校",
		pi: "Wǒ qù xuéxiào",
		en: "I go to school"
	},
	{
		id: 340,
		zh: "他说中文",
		pi: "Tā shuō Zhōngwén",
		en: "He speaks Chinese"
	},
	{
		id: 341,
		zh: "你喜欢孩子吗？",
		pi: "Nǐ xǐhuan háizi ma?",
		en: "Do you like kids?"
	},
	{
		id: 342,
		zh: "我们要买电脑",
		pi: "Wǒmen yào mǎi diànnǎo",
		en: "We want to buy a computer"
	},
	{
		id: 343,
		zh: "你们想吃中国菜吗？",
		pi: "Nǐmen xiǎng chī Zhōngguó cài ma?",
		en: "Do you want to eat Chinese food?"
	},
	{
		id: 344,
		zh: "我爱你和爸爸",
		pi: "Wǒ ài nǐ hé bàba",
		en: "I love you and dad"
	},
	{
		id: 345,
		zh: "他们要做什么？",
		pi: "Tāmen yào zuò shénme?",
		en: "What do they want to do?"
	},
	{
		id: 346,
		zh: "你想去什么地方？",
		pi: "Nǐ xiǎng qù shénme dìfang?",
		en: "What place do you want to go to?"
	},
	{
		id: 347,
		zh: "我是学生",
		pi: "Wǒ shì xuésheng",
		en: "I am a student"
	},
	{
		id: 348,
		zh: "他们是有钱人",
		pi: "Tāmen shì yǒuqián rén.",
		en: "They are rich people."
	},
	{
		id: 349,
		zh: "你是老板吗？",
		pi: "Nǐ shì lǎobǎn ma?",
		en: "Are you the boss?"
	},
	{
		id: 350,
		zh: "这是我男朋友",
		pi: "Zhè shì wǒ nánpéngyou",
		en: "This is my boyfriend"
	},
	{
		id: 351,
		zh: "那是你们公司吗？",
		pi: "Nà shì nǐmen gōngsī ma?",
		en: "Is that your company?"
	},
	{
		id: 352,
		zh: "你妈妈是老师吗？",
		pi: "Nǐ māma shì lǎoshī ma?",
		en: "Is your mother a teacher?"
	},
	{
		id: 353,
		zh: "这都是你的钱",
		pi: "Zhè dōu shì nǐ de qián",
		en: "This is all your money"
	},
	{
		id: 354,
		zh: "那是什么菜？",
		pi: "Nà shì shénme cài?",
		en: "What food is that?"
	},
	{
		id: 355,
		zh: "我也是他的朋友",
		pi: "Wǒ yě shì tā de péngyou",
		en: "I am also his friend"
	},
	{
		id: 356,
		zh: "他没听到，是不是？",
		pi: "Tā méi tīngdào, shì bu shì?",
		en: "He didn't hear you, right?"
	},
	{
		id: 357,
		zh: "你是不是还没吃饭？",
		pi: "Nǐ shì bu shì hái méi chīfàn?",
		en: "Haven't you eaten yet?"
	},
	{
		id: 358,
		zh: "你们是不是中国人？",
		pi: "Nǐmen shì bu shì Zhōngguó rén?",
		en: "Are you Chinese?"
	},
	{
		id: 359,
		zh: "你到了，是吗？",
		pi: "Nǐ dào le, shì ma?",
		en: "You have arrived, yeah?"
	},
	{
		id: 360,
		zh: "你有两个孩子，是吗？",
		pi: "Nǐ yǒu liǎng gè háizi, shì ma?",
		en: "You have two kids, yeah?"
	},
	{
		id: 361,
		zh: "米饭太多了",
		pi: "Mǐfàn tài duō le",
		en: "There is too much rice."
	},
	{
		id: 362,
		zh: "现在太晚了",
		pi: "Xiànzài tài wǎn le",
		en: "Now it's too late"
	},
	{
		id: 363,
		zh: "老板太忙了",
		pi: "Lǎobǎn tài máng le",
		en: "The boss is too busy"
	},
	{
		id: 364,
		zh: "老师太累了",
		pi: "Lǎoshī tài lèi le",
		en: "The teacher is too tired"
	},
	{
		id: 365,
		zh: "这个厕所太脏了",
		pi: "Zhège cèsuǒ tài zāng le",
		en: "This restroom is too dirty"
	},
	{
		id: 366,
		zh: "你太好了",
		pi: "Nǐ tài hǎo le",
		en: "You are so great"
	},
	{
		id: 367,
		zh: "他太帅了",
		pi: "Tā tài shuài le",
		en: "He is very handsome"
	},
	{
		id: 368,
		zh: "这个女孩太漂亮了",
		pi: "Zhège nǚhái tài piàoliang le",
		en: "This girl is so pretty"
	},
	{
		id: 369,
		zh: "小猫太可爱了",
		pi: "Xiǎomāo tài kě'ài le",
		en: "The kitten is so cute"
	},
	{
		id: 370,
		zh: "你的孩子太聪明了",
		pi: "Nǐ de háizi tài cōngming le",
		en: "Your kid is wicked smart"
	},
	{
		id: 371,
		zh: "我很好",
		pi: "Wǒ hěn hǎo",
		en: "I'm good"
	},
	{
		id: 372,
		zh: "你很漂亮",
		pi: "Nǐ hěn piàoliang",
		en: "You are pretty"
	},
	{
		id: 373,
		zh: "他很高兴",
		pi: "Tā hěn gāoxìng",
		en: "He is happy"
	},
	{
		id: 374,
		zh: "中文很难",
		pi: "Zhōngwén hěn nán",
		en: "Chinese is difficult"
	},
	{
		id: 375,
		zh: "老板很生气",
		pi: "Lǎobǎn hěn shēngqì",
		en: "The boss is angry"
	},
	{
		id: 376,
		zh: "我们很累",
		pi: "Wǒmen hěn lèi",
		en: "We're tired"
	},
	{
		id: 377,
		zh: "我哥哥也很高",
		pi: "Wǒ gēge yě hěn gāo",
		en: "My older brother is also tall"
	},
	{
		id: 378,
		zh: "你家也很远吗？",
		pi: "Nǐ jiā yě hěn yuǎn ma?",
		en: "Is your house also far away?"
	},
	{
		id: 379,
		zh: "爸爸很忙，妈妈也很忙",
		pi: "Bàba hěn máng, māma yě hěn máng",
		en: "Dad is busy, and mom is also busy"
	},
	{
		id: 380,
		zh: "他和他弟弟都很帅",
		pi: "Tā hé tā dìdi dōu hěn shuài",
		en: "He and his younger brother are both handsome"
	},
	{
		id: 381,
		zh: "他很高",
		pi: "Tā hěn gāo",
		en: "He is tall"
	},
	{
		id: 382,
		zh: "他非常高",
		pi: "Tā fēicháng gāo",
		en: "He is very tall"
	},
	{
		id: 383,
		zh: "是不是？",
		pi: "Shì bu shì?",
		en: "Is it (or not)?"
	},
	{
		id: 384,
		zh: "他们来不来？",
		pi: "Tāmen lái bu lái?",
		en: "Are they going to come or not?"
	},
	{
		id: 385,
		zh: "你想不想我？",
		pi: "Nǐ xiǎng bu xiǎng wǒ?",
		en: "Do you or do you not miss me?"
	},
	{
		id: 386,
		zh: "我们要去酒吧，你去不去？",
		pi: "Wǒmen yào qù jiǔbā, nǐ qù bu qù?",
		en: "We are going to the bar. Do you want to go?"
	},
	{
		id: 387,
		zh: "我去买咖啡，你要不要？",
		pi: "Wǒ qù mǎi kāfēi, nǐ yào bu yào?",
		en: "I'm going to buy coffee. Do you want some?"
	},
	{
		id: 388,
		zh: "你回不回家？",
		pi: "Nǐ huí bu huíjiā?",
		en: "Are you coming back home or not?"
	},
	{
		id: 389,
		zh: "她吃不吃鱼？",
		pi: "Tā chī bu chī yú?",
		en: "Does she eat fish?"
	},
	{
		id: 390,
		zh: "你们要不要米饭？",
		pi: "Nǐmen yào bu yào mǐfàn?",
		en: "Do you want rice?"
	},
	{
		id: 391,
		zh: "你爸爸喝不喝酒？",
		pi: "Nǐ bàba ​hē bu hējiǔ?",
		en: "Does your dad drink alcohol or not?"
	},
	{
		id: 392,
		zh: "今天老板来不来办公室？",
		pi: "Jīntiān lǎobǎn lái bu lái bàngōngshì?",
		en: "Is the boss coming to the office today?"
	},
	{
		id: 393,
		zh: "好不好？",
		pi: "Hǎo bu hǎo?",
		en: "Is it good?"
	},
	{
		id: 394,
		zh: "热不热？",
		pi: "Rè bu rè?",
		en: "Is it hot?"
	},
	{
		id: 395,
		zh: "他帅不帅？",
		pi: "Tā shuài bu shuài?",
		en: "Is he handsome?"
	},
	{
		id: 396,
		zh: "这里的咖啡贵不贵？",
		pi: "Zhèlǐ de kāfēi gùi bu gùi?",
		en: "Is the coffee expensive here?"
	},
	{
		id: 397,
		zh: "中国菜辣不辣？",
		pi: "Zhōngguó cài là bu là?",
		en: "Is Chinese food spicy?"
	},
	{
		id: 398,
		zh: "喜欢不喜欢？",
		pi: "Xǐhuan bu xǐhuan?",
		en: "Do you like it?"
	},
	{
		id: 399,
		zh: "喜不喜欢？",
		pi: "Xǐ bu xǐhuan?",
		en: "Do you like it?"
	},
	{
		id: 400,
		zh: "高兴不高兴？",
		pi: "Gāoxìng bu gāoxìng?",
		en: "Are you happy?"
	},
	{
		id: 401,
		zh: "高不高兴？",
		pi: "Gāo bu gāoxìng?",
		en: "Are you happy?"
	},
	{
		id: 402,
		zh: "他女朋友漂亮不漂亮？",
		pi: "Tā nǚpéngyou piàoliang bu piàoliang?",
		en: "Is his girlfriend pretty?"
	},
	{
		id: 403,
		zh: "他女朋友漂不漂亮？",
		pi: "Tā nǚpéngyou piào bu piàoliang?",
		en: "Is his girlfriend pretty?"
	},
	{
		id: 404,
		zh: "中国菜好吃不好吃？",
		pi: "Zhōngguó cài hǎochī bu hǎochī?",
		en: "Is Chinese food good?"
	},
	{
		id: 405,
		zh: "中国菜好不好吃？",
		pi: "Zhōngguó cài hǎo bu hǎochī?",
		en: "Is Chinese food good?"
	},
	{
		id: 406,
		zh: "那个地方好玩不好玩？",
		pi: "Nàge dìfang hǎowán bu hǎowán?",
		en: "Is that place fun?"
	},
	{
		id: 407,
		zh: "那个地方好不好玩？",
		pi: "Nàge dìfang hǎo bu hǎowán?",
		en: "Is that place fun?"
	},
	{
		id: 408,
		zh: "你哥哥有没有女朋友？",
		pi: "Nǐ gēge yǒu méiyǒu nǚpéngyou?",
		en: "Does your older brother have a girlfriend?"
	},
	{
		id: 409,
		zh: "你们有没有孩子？",
		pi: "Nǐmen yǒu méiyǒu háizi?",
		en: "Do you have children?"
	},
	{
		id: 410,
		zh: "奶奶有没有坐过飞机？",
		pi: "Nǎinai yǒu méiyǒu zuò guo fēijī?",
		en: "Has grandma been on a plane?"
	},
	{
		id: 411,
		zh: "他有没有上过大学？",
		pi: "Tā yǒu méiyǒu shàng guo dàxué?",
		en: "Has he been to college?"
	},
	{
		id: 412,
		zh: "我是小李",
		pi: "Wǒ shì Xiǎo Lǐ",
		en: "I am Xiao Li"
	},
	{
		id: 413,
		zh: "你是谁？",
		pi: "Nǐ shì shéi?",
		en: "Who are you? (you are who?)"
	},
	{
		id: 414,
		zh: "这是什么？",
		pi: "Zhè shì shénme?",
		en: "What is this?"
	},
	{
		id: 415,
		zh: "你喜欢吃什么菜？",
		pi: "Nǐ xǐhuan chī shénme cài?",
		en: "What kind of food do you like?"
	},
	{
		id: 416,
		zh: "我喜欢吃中国菜",
		pi: "Wǒ xǐhuan chī Zhōngguó cài",
		en: "I like Chinese food"
	},
	{
		id: 417,
		zh: "你用什么手机？",
		pi: "Nǐ yòng shénme shǒujī?",
		en: "What kind of cell phone do you use?"
	},
	{
		id: 418,
		zh: "你在看什么书？",
		pi: "Nǐ zài kàn shénme shū?",
		en: "What kind of book are you reading?"
	},
	{
		id: 419,
		zh: "我在看小说",
		pi: "Wǒ zài kàn xiǎoshuō",
		en: "I am reading a novel"
	},
	{
		id: 420,
		zh: "他开什么车？",
		pi: "Tā kāi shénme chē?",
		en: "What kind of car does he drive?"
	},
	{
		id: 421,
		zh: "他开宝马",
		pi: "Tā kāi Bǎomǎ",
		en: "He drives a BMW"
	},
	{
		id: 422,
		zh: "你在哪里？",
		pi: "Nǐ zài nǎlǐ?",
		en: "Where are you?"
	},
	{
		id: 423,
		zh: "我在家",
		pi: "Wǒ zài jiā",
		en: "I'm at home"
	},
	{
		id: 424,
		zh: "你要去哪儿？",
		pi: "Nǐ yào qù nǎr?",
		en: "Where are you going now?"
	},
	{
		id: 425,
		zh: "我要去洗手间",
		pi: "Wǒ yào qù xǐshǒujiān",
		en: "I'm going to the bathroom"
	},
	{
		id: 426,
		zh: "我们在哪儿？",
		pi: "Wǒmen zài nǎr?",
		en: "Where are we?"
	},
	{
		id: 427,
		zh: "我们在南京西路",
		pi: "Wǒmen zài Nánjīng Xī Lù",
		en: "We are at West Nanjing road"
	},
	{
		id: 428,
		zh: "这个周末你想去哪儿？",
		pi: "Zhège zhōumò nǐ xiǎng qù nǎr?",
		en: "Where do you want to go this weekend?"
	},
	{
		id: 429,
		zh: "我想去公园",
		pi: "Wǒ xiǎng qù gōngyuán",
		en: "I want to go to the park"
	},
	{
		id: 430,
		zh: "你好，你要去哪儿？",
		pi: "Nǐhǎo, nǐ yào qù nǎr?",
		en: "Hello, where do you want to go?"
	},
	{
		id: 431,
		zh: "我要去外滩",
		pi: "Wǒ yào qù Wàitān",
		en: "I want to go to the Bund"
	},
	{
		id: 432,
		zh: "你要哪个？",
		pi: "Nǐ yào nǎge?",
		en: "Which one do you want?"
	},
	{
		id: 433,
		zh: "我要这个",
		pi: "Wǒ yào zhège",
		en: "I want this one"
	},
	{
		id: 434,
		zh: "你喜欢哪个菜？",
		pi: "Nǐ xǐhuan nǎge cài?",
		en: "Which dish do you like?"
	},
	{
		id: 435,
		zh: "我喜欢这个菜",
		pi: "Wǒ xǐhuan zhège cài",
		en: "I like this dish"
	},
	{
		id: 436,
		zh: "我们去哪个饭店？",
		pi: "Wǒmen qù nǎge fàndiàn?",
		en: "Which restaurant are we going to?"
	},
	{
		id: 437,
		zh: "我们去你妈妈的饭店",
		pi: "Wǒmen qù nǐ māma de fàndiàn",
		en: "We are going to your mom's restaurant"
	},
	{
		id: 438,
		zh: "你在哪个房间？",
		pi: "Nǐ zài nǎge fángjiān?",
		en: "Which room are you in?"
	},
	{
		id: 439,
		zh: "我在你的房间",
		pi: "Wǒ zài nǐ de fángjiān",
		en: "I'm in your room"
	},
	{
		id: 440,
		zh: "你住在哪个区？",
		pi: "Nǐ zhù zài nǎge qū?",
		en: "Which district do you live in?"
	},
	{
		id: 441,
		zh: "我住在静安区",
		pi: "Wǒ zhù zài Jìng'ān Qū",
		en: "I live in Jing'an District"
	},
	{
		id: 442,
		zh: "我是他女朋友",
		pi: "Wǒ shì tā nǚpéngyou",
		en: "I'm his girlfriend"
	},
	{
		id: 443,
		zh: "她是谁？",
		pi: "Tā shì shéi?",
		en: "Who is she?"
	},
	{
		id: 444,
		zh: "她是我的老师",
		pi: "Tā shì wǒ de lǎoshī",
		en: "She‘s my teacher"
	},
	{
		id: 445,
		zh: "你不喜欢谁？",
		pi: "Nǐ bù xǐhuan shéi?",
		en: "Who do you not like?"
	},
	{
		id: 446,
		zh: "我不喜欢我的老板",
		pi: "Wǒ bù xǐhuan wǒ de lǎobǎn",
		en: "I don't like my boss"
	},
	{
		id: 447,
		zh: "谁想去？",
		pi: "Shéi xiǎng qù?",
		en: "Who wants to go?"
	},
	{
		id: 448,
		zh: "我想去",
		pi: "Wǒ xiǎng qù",
		en: "I want to go"
	},
	{
		id: 449,
		zh: "谁想喝咖啡？",
		pi: "Shéi xiǎng hē kāfēi?",
		en: "Who wants to drink coffee?"
	},
	{
		id: 450,
		zh: "你什么时候来？",
		pi: "Nǐ shénme shíhou lái?",
		en: "When are you coming?"
	},
	{
		id: 451,
		zh: "我明天来",
		pi: "Wǒ míngtiān lái",
		en: "I'm coming tomorrow"
	},
	{
		id: 452,
		zh: "你们什么时候走？",
		pi: "Nǐmen shénme shíhou zǒu?",
		en: "When are you guys leaving?"
	},
	{
		id: 453,
		zh: "我们下个月走",
		pi: "Wǒmen xià gè yuè zǒu",
		en: "We're leaving next month"
	},
	{
		id: 454,
		zh: "我们什么时候吃饭？",
		pi: "Wǒmen shénme shíhou chīfàn?",
		en: "When are we eating?"
	},
	{
		id: 455,
		zh: "我们6点吃饭",
		pi: "Wǒmen liù diǎn chīfàn",
		en: "We're eating at 6:00"
	},
	{
		id: 456,
		zh: "爸爸什么时候回来？",
		pi: "Bàba shénme shíhou huílái?",
		en: "When is dad coming back?"
	},
	{
		id: 457,
		zh: "爸爸周末回来",
		pi: "Bàba zhōumò huílái",
		en: "Dad is coming back this weekend"
	},
	{
		id: 458,
		zh: "你的飞机什么时候到上海？",
		pi: "Nǐ de fēijī shénme shíhou dào Shànghǎi?",
		en: "When is your airplane arriving in Shanghai?"
	},
	{
		id: 459,
		zh: "晚上八点",
		pi: "Wǎnshang bā diǎn",
		en: "Eight o'clock this evening"
	},
	{
		id: 460,
		zh: "你为什么学中文？",
		pi: "Nǐ wèishénme xué Zhōngwén?",
		en: "Why do you study Chinese?"
	},
	{
		id: 461,
		zh: "因为我在中国工作",
		pi: "Yīnwèi wǒ zài Zhōngguó gōngzuò",
		en: "Because I'm working in China"
	},
	{
		id: 462,
		zh: "他们为什么不喝咖啡？",
		pi: "Tāmen wèishénme bù hē kāfēi?",
		en: "Why don't they drink coffee?"
	},
	{
		id: 463,
		zh: "因为咖啡很苦",
		pi: "Yīnwèi kāfēi hěn kǔ",
		en: "Because coffee is bitter"
	},
	{
		id: 464,
		zh: "他为什么不来？",
		pi: "Tā wèishénme bù lái?",
		en: "Why isn't he coming?"
	},
	{
		id: 465,
		zh: "因为他很忙",
		pi: "Yīnwèi tā hěn máng",
		en: "Because he is busy"
	},
	{
		id: 466,
		zh: "你早上为什么不在？",
		pi: "Nǐ zǎoshang wèishénme bù zài?",
		en: "Why were you not here this morning?"
	},
	{
		id: 467,
		zh: "因为我出去见朋友了",
		pi: "Yīnwèi wǒ chūqù jiàn péngyou le",
		en: "Because I went out to meet some friends"
	},
	{
		id: 468,
		zh: "这些外国人为什么不喜欢中国？",
		pi: "Zhèxiē wàiguó rén wèishénme bù xǐhuan Zhōngguó?",
		en: "Why do these foreigners not like China?"
	},
	{
		id: 469,
		zh: "因为中国人太多",
		pi: "Yīnwèi Zhōngguó rén tài duō",
		en: "Because China has a lot of people"
	},
	{
		id: 470,
		zh: "你怎么学习中文？",
		pi: "Nǐ zěnme xuéxí Zhōngwén?",
		en: "How do you study Chinese?"
	},
	{
		id: 471,
		zh: "你怎么上网？",
		pi: "Nǐ zěnme shàngwǎng?",
		en: "How do you go online?"
	},
	{
		id: 472,
		zh: "我用手机上网",
		pi: "Wǒ yòng shǒujī shàngwǎng",
		en: "I use my cell phone to go online"
	},
	{
		id: 473,
		zh: "你怎么去北京？",
		pi: "Nǐ zěnme qù Běijīng?",
		en: "How do you go to Beijing?"
	},
	{
		id: 474,
		zh: "我坐火车去北京",
		pi: "Wǒ zuò huǒchē qù Běijīng",
		en: "I take the train to go to Beijing"
	},
	{
		id: 475,
		zh: "你们怎么回家？",
		pi: "Nǐmen zěnme huíjiā?",
		en: "How are you guys going to get home?"
	},
	{
		id: 476,
		zh: "我开车回家",
		pi: "Wǒ kāichē huíjiā",
		en: "I‘m driving home"
	},
	{
		id: 477,
		zh: "你怎么买票？",
		pi: "Nǐ zěnme mǎi piào?",
		en: "How do you buy tickets?"
	},
	{
		id: 478,
		zh: "我上网买票",
		pi: "Wǒ shàngwǎng mǎi piào",
		en: "I go online to buy tickets."
	},
	{
		id: 479,
		zh: "你会说中文，对不对？",
		pi: "Nǐ huì shuō Zhōngwén, duì bu duì?",
		en: "You speak Chinese, right?"
	},
	{
		id: 480,
		zh: "他是你的老板，对不对？",
		pi: "Tā shì nǐ de lǎobǎn, duì bu duì?",
		en: "He's your boss, right?"
	},
	{
		id: 481,
		zh: "我们是好朋友，对不对？",
		pi: "Wǒmen shì hǎo péngyou, duì bu duì?",
		en: "We are good friends, right?"
	},
	{
		id: 482,
		zh: "你昨天没回家，对不对？",
		pi: "Nǐ zuótiān méi huíjiā, duì bu duì?",
		en: "You didn't come back home yesterday, right?"
	},
	{
		id: 483,
		zh: "你有新女朋友了，是不是？",
		pi: "Nǐ yǒu xīn nǚpéngyou le, shì bu shì?",
		en: "You have a new girlfriend, right?"
	},
	{
		id: 484,
		zh: "九点开会，是不是？",
		pi: "Jiǔ diǎn kāihuì, shì bu shì",
		en: "We are going to hold a meeting at 9, right?"
	},
	{
		id: 485,
		zh: "你姓王，是不是？",
		pi: "Nǐ xìng Wáng, shì bu shì?",
		en: "Your last name is Wang, is it not?"
	},
	{
		id: 486,
		zh: "我们回家吧，好不好？",
		pi: "Wǒmen huíjiā ba, hǎo bu hǎo?",
		en: "Let's go home, OK?"
	},
	{
		id: 487,
		zh: "周末去看电影，好不好？",
		pi: "Zhōumò qù kàn diànyǐng, hǎo bu hǎo?",
		en: "Let's go to a movie this weekend, OK?"
	},
	{
		id: 488,
		zh: "你们明天来，好不好？",
		pi: "Nǐmen míngtiān lái, hǎo bu hǎo?",
		en: "You come here tomorrow, OK?"
	},
	{
		id: 489,
		zh: "这样做，对吗？",
		pi: "Zhèyàng zuò, duì ma?",
		en: "Do it like this, right?"
	},
	{
		id: 490,
		zh: "你们见过，对吗？",
		pi: "Nǐmen jiàn guo, duì ma?",
		en: "You’ve met, right?"
	},
	{
		id: 491,
		zh: "他们昨天都没去，是吗？",
		pi: "Tāmen zuótiān dōu méi qù, shì ma?",
		en: "They didn't go yesterday, right?"
	},
	{
		id: 492,
		zh: "你没来过，是吗？",
		pi: "Nǐ méi lái guo, shì ma?",
		en: "You haven't been here, right?"
	},
	{
		id: 493,
		zh: "你喜欢我妹妹，是吗？",
		pi: "Nǐ xǐhuan wǒ mèimei, shì ma?",
		en: "You like my younger sister, huh?"
	},
	{
		id: 494,
		zh: "我们去你家，好吗？",
		pi: "Wǒmen qù nǐ jiā, hǎo ma?",
		en: "Let's go to your place, OK?"
	},
	{
		id: 495,
		zh: "不要告诉他，好吗？",
		pi: "Bùyào gàosu tā, hǎo ma?",
		en: "Don't tell him, OK?"
	},
	{
		id: 496,
		zh: "今天我们都不喝酒，好吗？",
		pi: "Jīntiān wǒmen dōu bù hējiǔ​, hǎo ma?",
		en: "Let's all not drink alcohol today, OK?"
	},
	{
		id: 497,
		zh: "我现在想去洗手间，可以吗？",
		pi: "Wǒ xiànzài xiǎng qù xǐshǒujiān, kěyǐ ma?",
		en: "I want to go to the bathroom now. Is that OK?"
	},
	{
		id: 498,
		zh: "妈妈，我要吃巧克力，可以吗？",
		pi: "Māma, wǒ yào chī qiǎokèlì, kěyǐ ma?",
		en: "Mom, I want to eat chocolate. May I?"
	},
	{
		id: 499,
		zh: "你喜欢咖啡",
		pi: "Nǐ xǐhuan kāfēi",
		en: "You like coffee"
	},
	{
		id: 500,
		zh: "你喜欢咖啡吗？",
		pi: "Nǐ xǐhuan kāfēi ma?",
		en: "Do you like coffee?"
	},
	{
		id: 501,
		zh: "你是大学生吗？",
		pi: "Nǐ shì dàxuéshēng ma?",
		en: "Are you a college student?"
	},
	{
		id: 502,
		zh: "他是老板吗？",
		pi: "Tā shì lǎobǎn ma?",
		en: "Is he the boss?"
	},
	{
		id: 503,
		zh: "你喜欢她吗？",
		pi: "Nǐ xǐhuan tā ma?",
		en: "Do you like her?"
	},
	{
		id: 504,
		zh: "你想家吗？",
		pi: "Nǐ xiǎng jiā ma?",
		en: "Do you miss home?"
	},
	{
		id: 505,
		zh: "你们明天见面吗？",
		pi: "Nǐmen míngtiān jiànmiàn ma?",
		en: "Are you going to meet tomorrow?"
	},
	{
		id: 506,
		zh: "你们也去吗？",
		pi: "Nǐmen yě qù ma?",
		en: "Are you also going?"
	},
	{
		id: 507,
		zh: "他在你们学校学中文吗？",
		pi: "Tā zài nǐmen xuéxiào xué Zhōngwén ma?",
		en: "Does he study Chinese in your school?"
	},
	{
		id: 508,
		zh: "妈妈会做饭吗？",
		pi: "Māma huì zuòfàn ma?",
		en: "Does mom know how to cook?"
	},
	{
		id: 509,
		zh: "你没有工作吗？",
		pi: "Nǐ méiyǒu gōngzuò ma?",
		en: "Do you not have a job?"
	},
	{
		id: 510,
		zh: "你明天不来吗？",
		pi: "Nǐ míngtiān bù lái ma?",
		en: "You're not coming tomorrow?"
	},
	{
		id: 511,
		zh: "你喜欢中国菜吗？",
		pi: "Nǐ xǐhuan Zhōngguó cài ma?",
		en: "Do you like Chinese food?"
	},
	{
		id: 512,
		zh: "你不喜欢中国菜吗？",
		pi: "Nǐ bù xǐhuan Zhōngguó cài ma?",
		en: "Don't you like Chinese food?"
	},
	{
		id: 513,
		zh: "第二",
		pi: "dì-èr",
		en: "#2; second"
	},
	{
		id: 514,
		zh: "第二个",
		pi: "dì-èr gè",
		en: "the second one"
	},
	{
		id: 515,
		zh: "第二次",
		pi: "dì-èr cì",
		en: "the second time"
	},
	{
		id: 516,
		zh: "二号",
		pi: "èr hào",
		en: "#2; the second (of the month)"
	},
	{
		id: 517,
		zh: "二号线",
		pi: "èr hào xiàn",
		en: "Line 2 (of the metro)"
	},
	{
		id: 518,
		zh: "二楼",
		pi: "èr lóu",
		en: "second floor"
	},
	{
		id: 519,
		zh: "两次",
		pi: "liǎng cì",
		en: "two times / twice"
	},
	{
		id: 520,
		zh: "两百",
		pi: "liǎngbǎi",
		en: "200"
	},
	{
		id: 521,
		zh: "两千",
		pi: "liǎng qiān",
		en: "2,000"
	},
	{
		id: 522,
		zh: "我两个都要",
		pi: "Wǒ liǎng gè dōu yào",
		en: "I want both of them"
	},
	{
		id: 523,
		zh: "我饿死了",
		pi: "Wǒ è sǐ le",
		en: "I'm starving"
	},
	{
		id: 524,
		zh: "今天累死了",
		pi: "Jīntiān lèi sǐ le",
		en: "Today was so exhausting"
	},
	{
		id: 525,
		zh: "热死了",
		pi: "Rè sǐ le",
		en: "It's ridiculously hot"
	},
	{
		id: 526,
		zh: "这几天忙死了",
		pi: "Zhè jǐ tiān máng sǐ le",
		en: "It's been so terribly busy these days"
	},
	{
		id: 527,
		zh: "这件衣服丑死了",
		pi: "Zhè jiàn yīfu chǒu sǐ le",
		en: "This clothing is totally hideous"
	},
	{
		id: 528,
		zh: "你的房间脏死了",
		pi: "Nǐ de fángjiān zāng sǐ le",
		en: "Your room is absolutely filthy"
	},
	{
		id: 529,
		zh: "吵死了",
		pi: "Chǎo sǐ le",
		en: "It's so terribly noisy"
	},
	{
		id: 530,
		zh: "这里的东西贵死了",
		pi: "Zhèlǐ de dōngxi guì sǐ le",
		en: "The things here are criminally expensive"
	},
	{
		id: 531,
		zh: "我们都急死了",
		pi: "Wǒmen dōu jí sǐ le",
		en: "We are all so terribly anxious"
	},
	{
		id: 532,
		zh: "这个孩子烦死了",
		pi: "Zhège háizi fán sǐ le",
		en: "This kid is so freaking annoying"
	},
	{
		id: 533,
		zh: "哇，可爱死了",
		pi: "Wā, kě'ài sǐ le",
		en: "OMG, adorbs"
	},
	{
		id: 534,
		zh: "漂亮死了",
		pi: "Piàoliang sǐ le",
		en: "Drop-dead gorgeous"
	},
	{
		id: 535,
		zh: "这个蛋糕好吃死了",
		pi: "Zhège dàngāo hǎochī sǐ le",
		en: "This cake is to die for"
	},
	{
		id: 536,
		zh: "这几个地方都差不多",
		pi: "Zhè jǐ gè dìfang dōu chàbuduō",
		en: "These places are all pretty much the same"
	},
	{
		id: 537,
		zh: "这两个词的意思差不多",
		pi: "Zhè liǎng gè cí de yìsi chàbuduō",
		en: "The meanings of these two words are pretty much the same"
	},
	{
		id: 538,
		zh: "我们的想法差不多",
		pi: "Wǒmen de xiǎngfǎ chàbuduō",
		en: "Our ways of thinking are pretty much the same"
	},
	{
		id: 539,
		zh: "那两家餐厅的菜差不多",
		pi: "Nà liǎng jiā cāntīng de cài chàbuduō",
		en: "Those two restaurants' dishes are almost the same"
	},
	{
		id: 540,
		zh: "你们的中文水平差不多",
		pi: "Nǐmen de Zhōngwén shuǐpíng chàbuduō",
		en: "Your Chinese levels are almost the same"
	},
	{
		id: 541,
		zh: "上海和纽约差不多",
		pi: "Shànghǎi hé Niǔyuē chàbuduō",
		en: "Shanghai and New York are basically the same"
	},
	{
		id: 542,
		zh: "这里的天气跟台湾的天气差不多",
		pi: "Zhèlǐ de tiānqì gēn Táiwān de tiānqì chàbuduō",
		en: "The weather here is pretty much like Taiwan's"
	},
	{
		id: 543,
		zh: "你的工作跟我的工作差不多",
		pi: "Nǐ de gōngzuò gēn wǒ de gōngzuò chàbuduō",
		en: "Your job and my job are almost the same"
	},
	{
		id: 544,
		zh: "你的新手机跟我的旧手机差不多",
		pi: "Nǐ de xīn shǒujī gēn wǒ de jiù shǒujī chàbuduō",
		en: "Your new cell phone is pretty much like my old cell phone"
	},
	{
		id: 545,
		zh: "这两个孩子差不多大",
		pi: "Zhè liǎng gè háizi chàbuduō dà",
		en: "These two children are more or less the same age"
	},
	{
		id: 546,
		zh: "我跟我哥哥差不多高",
		pi: "Wǒ gēn wǒ gēge chàbuduō gāo",
		en: "My older brother and I are more or less the same height"
	},
	{
		id: 547,
		zh: "我差不多到公园门口了",
		pi: "Wǒ chàbuduō dào gōngyuán ménkǒu le",
		en: "I'm almost at the entrance of the park"
	},
	{
		id: 548,
		zh: "电影差不多要开始了",
		pi: "Diànyǐng chàbuduō yào kāishǐ le",
		en: "The movie is almost about to start"
	},
	{
		id: 549,
		zh: "今天的工作差不多做完了",
		pi: "Jīntiān de gōngzuò chàbuduō zuò wán le",
		en: "Today's work is almost done"
	},
	{
		id: 550,
		zh: "你儿子差不多五岁了吧？",
		pi: "Nǐ érzi chàbuduō wǔ suì le ba?",
		en: "Your son should be about 5 years old, right?"
	},
	{
		id: 551,
		zh: "他住在上海差不多三个月了",
		pi: "Tā zhù zài Shànghǎi chàbuduō sān gè yuè le",
		en: "He has lived in Shanghai for about three months"
	},
	{
		id: 552,
		zh: "我在这家公司工作了差不多十年了",
		pi: "Wǒ zài zhè jiā gōngsī gōngzuò le chàbuduō shí nián le",
		en: "I've worked for this company for almost ten years"
	},
	{
		id: 553,
		zh: "我父母结婚差不多二十年了",
		pi: "Wǒ fùmǔ jiéhūn chàbuduō èrshí nián le",
		en: "My parents have been married for about twenty years"
	},
	{
		id: 554,
		zh: "差不多两个星期以前，我在北京见过他",
		pi: "Chàbuduō liǎng gè xīngqī yǐqián, wǒ zài Běijīng jiàn guo tā",
		en: "About two weeks ago I met with him in Beijing"
	},
	{
		id: 555,
		zh: "我的很多朋友都有车",
		pi: "Wǒ de hěn duō péngyou dōu yǒu chē",
		en: "A lot of my friends have cars"
	},
	{
		id: 556,
		zh: "很多美国人都喜欢喝咖啡",
		pi: "Hěn duō Měiguó rén dōu xǐhuan hē kāfēi",
		en: "A lot of Americans like drinking coffee"
	},
	{
		id: 557,
		zh: "很多孩子都不喜欢上学",
		pi: "Hěn duō háizi dōu bù xǐhuan shàngxué",
		en: "A lot of kids don't like to go to school"
	},
	{
		id: 558,
		zh: "很多年轻人都想在大城市工作",
		pi: "Hěn duō niánqīng rén dōu xiǎng zài dà chéngshì gōngzuò",
		en: "A lot of young people want to go to work in big cities"
	},
	{
		id: 559,
		zh: "大家都来了吗？",
		pi: "Dàjiā dōu lái le ma?",
		en: "Is everyone here?"
	},
	{
		id: 560,
		zh: "大家都应该知道",
		pi: "Dàjiā dōu yīnggāi zhīdào",
		en: "Everyone should know"
	},
	{
		id: 561,
		zh: "大家都说你很聪明",
		pi: "Dàjiā dōu shuō nǐ hěn cōngming",
		en: "Everyone says you're smart"
	},
	{
		id: 562,
		zh: "大家都忘了他的名字",
		pi: "Dàjiā dōu wàng le tā de míngzi",
		en: "Everyone forgot his name"
	},
	{
		id: 563,
		zh: "大家都喜欢吃辣吗？",
		pi: "Dàjiā dōu xǐhuan chī là ma?",
		en: "Does everyone like eating spicy food?"
	},
	{
		id: 564,
		zh: "我每天都要上班",
		pi: "Wǒ měi tiān dōu yào shàngbān",
		en: "I have to go to work every day"
	},
	{
		id: 565,
		zh: "老师每天都迟到",
		pi: "Lǎoshī měi tiān dōu chídào",
		en: "The teacher comes late every day"
	},
	{
		id: 566,
		zh: "她每天都不吃早饭",
		pi: "Tā měi tiān dōu bù chī zǎofàn",
		en: "Every day, she does not eat breakfast"
	},
	{
		id: 567,
		zh: "我女朋友每天都上淘宝",
		pi: "Wǒ nǚpéngyou měi tiān dōu shàng Táobǎo",
		en: "My girlfriend goes on Taobao every day"
	},
	{
		id: 568,
		zh: "妈妈每天都给我们做晚饭",
		pi: "Māma měi tiān dōu gěi wǒmen zuò wǎnfàn",
		en: "Mom cooks dinner for us every day"
	},
	{
		id: 569,
		zh: "美国人都说英文",
		pi: "Měiguó rén dōu shuō Yīngwén",
		en: "Americans all speak English"
	},
	{
		id: 570,
		zh: "我们五个人都去",
		pi: "Wǒmen wǔ gè rén dōu qù",
		en: "All five of us are going"
	},
	{
		id: 571,
		zh: "四川人都喜欢吃辣",
		pi: "Sìchuān rén dōu xǐhuan chī là",
		en: "Sichuanese people all like eating spicy food"
	},
	{
		id: 572,
		zh: "我的家人都没去过中国",
		pi: "Wǒ de jiārén dōu méi qù guo Zhōngguó",
		en: "None of my family members has been to China"
	},
	{
		id: 573,
		zh: "我的学生都喜欢问问题",
		pi: "Wǒ de xuéshēng dōu xǐhuan wèn wèntí",
		en: "My students all like to ask questions"
	},
	{
		id: 574,
		zh: "她在看书",
		pi: "Tā zài kànshū",
		en: "She is reading"
	},
	{
		id: 575,
		zh: "妈妈在打电话",
		pi: "Māma zài dǎ diànhuà",
		en: "Mom is making a phone call"
	},
	{
		id: 576,
		zh: "谁在里面洗澡？",
		pi: "Shéi zài lǐmiàn xǐzǎo?",
		en: "Who is taking a shower in there?"
	},
	{
		id: 577,
		zh: "阿姨正在打扫我们的房间",
		pi: "Āyí zhèngzài dǎsǎo wǒmen de fángjiān",
		en: "The cleaning lady is cleaning our room right now"
	},
	{
		id: 578,
		zh: "昨天晚上七点，我们在吃饭",
		pi: "Zuótiān wǎnshang qīdiǎn, wǒmen zài chīfàn",
		en: "Yesterday at 7pm, we were eating dinner"
	},
	{
		id: 579,
		zh: "老板在开会，没有时间见你",
		pi: "Lǎobǎn zài kāihuì, méiyǒu shíjiān jiàn nǐ",
		en: "The boss is currently in a meeting. He doesn't have time to see you"
	},
	{
		id: 580,
		zh: "我现在在上班，不方便离开",
		pi: "Wǒ xiànzài zài shàngbān, bù fāngbiàn líkāi",
		en: "I am working now. It's not convenient for me to leave"
	},
	{
		id: 581,
		zh: "我们正在上课，请你等一会儿",
		pi: "Wǒmen zhèngzài shàngkè, qǐng nǐ děng yīhuìr",
		en: "We are in class right now; please wait a moment"
	},
	{
		id: 582,
		zh: "你正在开车，不可以玩手机",
		pi: "Nǐ zhèngzài kāichē, bù kěyǐ wán shǒujī",
		en: "You're driving right now; you can't play with your cell phone"
	},
	{
		id: 583,
		zh: "你给我打电话的时候，我正在跟朋友打游戏",
		pi: "Nǐ gěi wǒ dǎ diànhuà de shíhou, wǒ zhèngzài gēn péngyou dǎ yóuxì",
		en: "When you called me, I was playing video games with friends"
	},
	{
		id: 584,
		zh: "我一直在学习中文",
		pi: "Wǒ yīzhí zài xuéxí Zhōngwén",
		en: "I've been studying Chinese all along"
	},
	{
		id: 585,
		zh: "昨天晚上我一直在做作业",
		pi: "Zuótiān wǎnshang wǒ yīzhí zài zuò zuòyè",
		en: "Yesterday evening I was continuously doing homework"
	},
	{
		id: 586,
		zh: "老板一直很忙",
		pi: "Lǎobǎn yīzhí hěn máng",
		en: "The boss is always very busy"
	},
	{
		id: 587,
		zh: "我一直很喜欢你",
		pi: "Wǒ yīzhí hěn xǐhuan nǐ",
		en: "I've always liked you a lot"
	},
	{
		id: 588,
		zh: "爸爸一直都不抽烟",
		pi: "Bàba yīzhí dōu bù chōuyān",
		en: "Dad has never smoked cigarettes"
	},
	{
		id: 589,
		zh: "我男朋友一直在中国教英文",
		pi: "Wǒ nánpéngyou yīzhí zài Zhōngguó jiāo Yīngwén",
		en: "My boyfriend has always been teaching English in China"
	},
	{
		id: 590,
		zh: "18岁以后，他一直一个人住",
		pi: "Shíbā suì yǐhòu, tā yīzhí yīgèrén zhù",
		en: "Since he was 18, he has always lived alone"
	},
	{
		id: 591,
		zh: "你一直在这家公司工作吗？",
		pi: "Nǐ yīzhí zài zhè jiā gōngsī gōngzuò ma?",
		en: "Have you always worked in this company?"
	},
	{
		id: 592,
		zh: "你们一直住在一起吗？",
		pi: "Nǐmen yīzhí zhù zài yīqǐ ma?",
		en: "Have you always been living together?"
	},
	{
		id: 593,
		zh: "北京的空气一直很不好",
		pi: "Běijīng de kōngqì yīzhí hěn bù hǎo",
		en: "The air in Beijing has been bad for a while"
	},
	{
		id: 594,
		zh: "他们已经走了",
		pi: "Tāmen yǐjīng zǒu le",
		en: "They've already left"
	},
	{
		id: 595,
		zh: "我已经有男朋友了",
		pi: "Wǒ yǐjīng yǒu nánpéngyou le",
		en: "I already have a boyfriend"
	},
	{
		id: 596,
		zh: "宝宝已经会说话了",
		pi: "Bǎobao yǐjīng huì shuōhuà le",
		en: "The baby can already speak"
	},
	{
		id: 597,
		zh: "妈妈已经回来了",
		pi: "Māma yǐjīng huílái le",
		en: "Mom has already come back"
	},
	{
		id: 598,
		zh: "他已经上飞机了",
		pi: "Tā yǐjīng shàng fēijī le",
		en: "He's already gotten on the plane"
	},
	{
		id: 599,
		zh: "爸爸妈妈已经老了",
		pi: "Bàba māma yǐjīng lǎo le",
		en: "Mom and dad are already old"
	},
	{
		id: 600,
		zh: "已经很便宜了",
		pi: "Yǐjīng hěn piányi le",
		en: "It is already very cheap"
	},
	{
		id: 601,
		zh: "你女朋友已经很漂亮了",
		pi: "Nǐ nǚpéngyou yǐjīng hěn piàoliang le",
		en: "Your girlfriend is already very beautiful"
	},
	{
		id: 602,
		zh: "你的感冒已经好了吗？",
		pi: "Nǐ de gǎnmào yǐjīng hǎo le ma?",
		en: "Is your cold already better?"
	},
	{
		id: 603,
		zh: "已经很晚了，我们走吧",
		pi: "Yǐjīng hěn wǎn le, wǒmen zǒu ba",
		en: "It's already really late. Let's go"
	},
	{
		id: 604,
		zh: "已经11点了，女儿还没回来",
		pi: "Yǐjīng shíyī diǎn le, nǚ'ér hái méi huílái",
		en: "It is already 11 o'clock, and my daughter has not returned"
	},
	{
		id: 605,
		zh: "爷爷已经八十五岁了",
		pi: "Yéye yǐjīng bāshí-wǔ suì le",
		en: "Grandpa is already eighty-five years old"
	},
	{
		id: 606,
		zh: "我学习中文已经一年了",
		pi: "Wǒ xuéxí Zhōngwén yǐjīng yī nián le",
		en: "I have already been studying Chinese for a year"
	},
	{
		id: 607,
		zh: "他在洗手间里已经半个小时了",
		pi: "Tā zài xǐshǒujiān lǐ yǐjīng bàn gè xiǎoshí le",
		en: "He has already been in the bathroom for half an hour"
	},
	{
		id: 608,
		zh: "爸爸去北京出差已经两天了",
		pi: "Bàba qù Běijīng chūchāi yǐjīng liǎng tiān le",
		en: "It has already been two days since dad went to Beijing on business trip"
	},
	{
		id: 609,
		zh: "我已经不喜欢你了",
		pi: "Wǒ yǐjīng bù xǐhuan nǐ le",
		en: "I don't like you anymore"
	},
	{
		id: 610,
		zh: "他已经不爱他的猫了",
		pi: "Tā yǐjīng bù ài tā de māo le",
		en: "He doesn't love his cat anymore"
	},
	{
		id: 611,
		zh: "他们已经不住在中国了",
		pi: "Tāmen yǐjīng bù zhù zài Zhōngguó le",
		en: "They don't live in China anymore"
	},
	{
		id: 612,
		zh: "我已经不需要父母的钱了",
		pi: "Wǒ yǐjīng bù xūyào fùmǔ de qián le",
		en: "I don't need my parents' money anymore"
	},
	{
		id: 613,
		zh: "他总是迟到",
		pi: "Tā zǒngshì chídào",
		en: "He is always late"
	},
	{
		id: 614,
		zh: "我总是忘记这个词",
		pi: "Wǒ zǒngshì wàngjì zhège cí",
		en: "I always forget this word."
	},
	{
		id: 615,
		zh: "他总是一个人吃饭",
		pi: "Tā zǒngshì yīgèrén chīfàn",
		en: "He always eats alone"
	},
	{
		id: 616,
		zh: "你男朋友总是说脏话",
		pi: "Nǐ nánpéngyou zǒngshì shuō zānghuà",
		en: "Your boyfriend always uses foul language"
	},
	{
		id: 617,
		zh: "我的学生总是问我很多有意思的问题",
		pi: "Wǒ de xuéshēng zǒngshì wèn wǒ hěn duō yǒu yìsi de wèntí",
		en: "My students always ask me lots of interesting questions"
	},
	{
		id: 618,
		zh: "他总是很累",
		pi: "Tā zǒngshì hěn lèi",
		en: "He is always tired"
	},
	{
		id: 619,
		zh: "你为什么总是很忙？",
		pi: "Nǐ wèishénme zǒngshì hěn máng?",
		en: "Why are you always very busy?"
	},
	{
		id: 620,
		zh: "你家总是很干净",
		pi: "Nǐ jiā zǒngshì hěn gānjìng",
		en: "Your house is always very clean"
	},
	{
		id: 621,
		zh: "孩子们总是非常开心",
		pi: "Háizi men zǒngshì fēicháng kāixīn",
		en: "The children are always very happy"
	},
	{
		id: 622,
		zh: "我的学生总是特别努力",
		pi: "Wǒ de xuéshēng zǒngshì tèbié nǔlì",
		en: "My students are always very hard-working"
	},
	{
		id: 623,
		zh: "她有一个弟弟，还有一个妹妹",
		pi: "Tā yǒu yī gè dìdi, hái yǒu yī gè mèimei",
		en: "She has a younger brother and also has a younger sister"
	},
	{
		id: 624,
		zh: "我老板会说法语，还会说日语",
		pi: "Wǒ lǎobǎn huì shuō Fǎyǔ, hái huì shuō Rìyǔ",
		en: "My boss can speak French and can also speak Japanese"
	},
	{
		id: 625,
		zh: "你要一杯咖啡，还要什么？",
		pi: "Nǐ yào yī bēi kāfēi, hái yào shénme?",
		en: "You want a cup of coffee, and what else do you want?"
	},
	{
		id: 626,
		zh: "我想吃冰淇淋，还想吃汉堡",
		pi: "Wǒ xiǎng chī bīngqílín, hái xiǎng chī hànbǎo",
		en: "I want to eat ice cream and I also want to eat a hamburger"
	},
	{
		id: 627,
		zh: "你晚上在家做了作业，还做了什么？",
		pi: "Nǐ wǎnshang zài jiā zuò le zuòyè, hái zuò le shénme?",
		en: "You did your homework at home tonight, and what else did you do?"
	},
	{
		id: 628,
		zh: "他结婚的时候，请了同事，还请了谁？",
		pi: "Tā jiéhūn de shíhou, qǐng le tóngshì, hái qǐng le shéi?",
		en: "When he got married, he invited his co-workers. Who else did he invite?"
	},
	{
		id: 629,
		zh: "生日的时候，我们会吃蛋糕，还要送礼物",
		pi: "Shēngrì de shíhou, wǒmen huì chī dàngāo, hái yào sòng lǐwù",
		en: "During a birthday, we eat cake and also give presents"
	},
	{
		id: 630,
		zh: "去美国要带钱、护照，还要带什么？",
		pi: "Qù Měiguó yào dài qián, hùzhào, hái yào dài shénme?",
		en: "To go to the USA, you need to take money and a passport. What else do you need to take with you?"
	},
	{
		id: 631,
		zh: "他做了饭，还洗了碗",
		pi: "Tā zuò le fàn, hái xǐ le wǎn",
		en: "He fixed dinner and also washed the dishes"
	},
	{
		id: 632,
		zh: "她也洗了碗",
		pi: "Tā yě xǐ le wǎn",
		en: "She washed the dishes too"
	},
	{
		id: 633,
		zh: "我洗了澡，还洗了衣服",
		pi: "Wǒ xǐ le zǎo, hái xǐ le yīfu",
		en: "I took a shower and also did my laundry"
	},
	{
		id: 634,
		zh: "她也洗了衣服",
		pi: "Tā yě xǐ le yīfu",
		en: "She did her laundry too"
	},
	{
		id: 635,
		zh: "我们今天晚上出去吃饭了，还看了电影",
		pi: "Wǒmen jīntiān wǎnshang chūqù chīfàn le, hái kàn le diànyǐng",
		en: "We went out for dinner tonight and also watched a movie"
	},
	{
		id: 636,
		zh: "他们今天晚上也看了电影",
		pi: "Tāmen jīntiān wǎnshang yě kàn le diànyǐng",
		en: "They watched a movie tonight too"
	},
	{
		id: 637,
		zh: "我们刚知道",
		pi: "Wǒmen gāng zhīdào",
		en: "We just found out"
	},
	{
		id: 638,
		zh: "她们刚走",
		pi: "Tāmen gāng zǒu",
		en: "They just left"
	},
	{
		id: 639,
		zh: "老板刚刚到办公室",
		pi: "Lǎobǎn gānggāng dào bàngōngshì",
		en: "The boss just arrived at the office"
	},
	{
		id: 640,
		zh: "我老婆刚生完孩子",
		pi: "Wǒ lǎopo gāng shēng wán háizi",
		en: "My wife just finished giving birth to our baby"
	},
	{
		id: 641,
		zh: "你刚刚下班吗？",
		pi: "Nǐ gānggāng xiàbān ma?",
		en: "Did you just get off work?"
	},
	{
		id: 642,
		zh: "我刚认识她十天",
		pi: "Wǒ gāng rènshi tā shí tiān",
		en: "I just met her ten days ago"
	},
	{
		id: 643,
		zh: "他刚来中国两个月",
		pi: "Tā gāng lái Zhōngguó liǎng gè yuè",
		en: "He just got to China two months ago"
	},
	{
		id: 644,
		zh: "我弟弟刚工作半年",
		pi: "Wǒ dìdi gāng gōngzuò bàn nián",
		en: "My younger brother just started working half a year ago"
	},
	{
		id: 645,
		zh: "她刚结婚三个月",
		pi: "Tā gāng jiéhūn sān gè yuè",
		en: "She just got married three months ago"
	},
	{
		id: 646,
		zh: "我的车刚买两天，开的时候小心点",
		pi: "Wǒ de chē gāng mǎi liǎng tiān, kāi de shíhou xiǎoxīn diǎn",
		en: "I just bought the car two days ago. Be careful when you drive"
	},
	{
		id: 647,
		zh: "我只有一个哥哥",
		pi: "Wǒ zhǐ yǒu yī gè gēge",
		en: "I only have one older brother"
	},
	{
		id: 648,
		zh: "我们只有十块钱",
		pi: "Wǒmen zhǐ yǒu shí kuài qián",
		en: "We only have ten RMB"
	},
	{
		id: 649,
		zh: "我们公司只有两个员工",
		pi: "Wǒmen gōngsī zhǐ yǒu liǎng gè yuángōng",
		en: "Our company only has two employees"
	},
	{
		id: 650,
		zh: "你只爱吃肉吗？",
		pi: "Nǐ zhǐ ài chī ròu ma?",
		en: "Do you only like eating meat?"
	},
	{
		id: 651,
		zh: "他们只会说英文",
		pi: "Tāmen zhǐ huì shuō Yīngwén",
		en: "They can only speak English"
	},
	{
		id: 652,
		zh: "我只能说两句中文",
		pi: "Wǒ zhǐ néng shuō liǎng jù Zhōngwén",
		en: "I can only say two sentences in Chinese"
	},
	{
		id: 653,
		zh: "你们只要咖啡吗？",
		pi: "Nǐmen zhǐ yào kāfēi ma?",
		en: "Do you only want coffee?"
	},
	{
		id: 654,
		zh: "我老婆只要一个孩子",
		pi: "Wǒ lǎopo zhǐ yào yī gè háizi",
		en: "My wife only wants one child"
	},
	{
		id: 655,
		zh: "宝宝只会走，不会跑",
		pi: "Bǎobao zhǐ huì zǒu, bù huì pǎo",
		en: "The baby can only walk. He can't run"
	},
	{
		id: 656,
		zh: "我只想跟你在一起",
		pi: "Wǒ zhǐ xiǎng gēn nǐ zài yīqǐ",
		en: "I only want to be with you"
	},
	{
		id: 657,
		zh: "你喜欢喝奶茶，我们就买奶茶吧",
		pi: "Nǐ xǐhuan hē nǎichá, wǒmen jiù mǎi nǎichá ba",
		en: "So you like milk tea. Then we'll buy milk tea"
	},
	{
		id: 658,
		zh: "你最有经验，就听你的吧",
		pi: "Nǐ zuì yǒu jīngyàn, jiù tīng nǐ de ba",
		en: "You have the most experience. We'll just listen to you"
	},
	{
		id: 659,
		zh: "我听到这个坏消息，就给你打电话了",
		pi: "Wǒ tīngdào zhège huài xiāoxi, jiù gěi nǐ dǎ diànhuà le",
		en: "As soon as I heard this bad news, I called you"
	},
	{
		id: 660,
		zh: "你现在身体不好，就不要喝酒了",
		pi: "Nǐ xiànzài shēntǐ bù hǎo, jiù bùyào hē jiǔ le",
		en: "Your health isn't good now. So just stop drinking"
	},
	{
		id: 661,
		zh: "他最近太累了，就生病了",
		pi: "Tā zuìjìn tài lèi le, jiù shēngbìng le",
		en: "He's been too tired recently, and then he got sick"
	},
	{
		id: 662,
		zh: "今天下雨，我们就不出去了",
		pi: "Jīntiān xiàyǔ, wǒmen jiù bù chūqù le",
		en: "It's going to rain today. So let's just not go out"
	},
	{
		id: 663,
		zh: "他妈妈没有给他买书包，他就哭了",
		pi: "Tā māma méiyǒu gěi tā mǎi shūbāo, tā jiù kū le",
		en: "His mom didn't buy him the backpack, and then he just started crying"
	},
	{
		id: 664,
		zh: "就在这家店吃饭吧，那家店人太多了",
		pi: "Jiù zài zhè jiā diàn chīfàn ba, nà jiā diàn rén tài duō le",
		en: "Let's just eat at this restaurant. That one is too crowded"
	},
	{
		id: 665,
		zh: "就去看电影吧",
		pi: "Jiù qù kàn diànyǐng ba",
		en: "Let's just go watch a movie"
	},
	{
		id: 666,
		zh: "别走",
		pi: "Bié zǒu",
		en: "Don't leave"
	},
	{
		id: 667,
		zh: "别说话",
		pi: "Bié shuōhuà",
		en: "Don't speak"
	},
	{
		id: 668,
		zh: "别笑",
		pi: "Bié xiào",
		en: "Don't laugh"
	},
	{
		id: 669,
		zh: "别动",
		pi: "Bié dòng",
		en: "Don't move"
	},
	{
		id: 670,
		zh: "别过来",
		pi: "Bié guòlái",
		en: "Don't come over here"
	},
	{
		id: 671,
		zh: "别打孩子",
		pi: "Bié dǎ háizi",
		en: "Don't hit the child"
	},
	{
		id: 672,
		zh: "别喝太多",
		pi: "Bié hē tài duō",
		en: "Don't drink too much"
	},
	{
		id: 673,
		zh: "喝酒以后别开车",
		pi: "Hējiǔ yǐhòu bié kāichē",
		en: "After drinking alcohol, don't drive"
	},
	{
		id: 674,
		zh: "吃饭的时候别玩手机",
		pi: "Chīfàn de shíhou bié wán shǒujī",
		en: "When eating, don't play with your cell phone"
	},
	{
		id: 675,
		zh: "上课的时候别说英文",
		pi: "Shàngkè de shíhou bié shuō Yīngwén",
		en: "Don't speak English in class"
	},
	{
		id: 676,
		zh: "不要一边吃东西，一边说话",
		pi: "Bùyào yībiān chī dōngxi, yībiān shuōhuà",
		en: "Don't speak while eating"
	},
	{
		id: 677,
		zh: "我常常一边洗澡，一边唱歌",
		pi: "Wǒ chángcháng yībiān xǐzǎo, yībiān chànggē",
		en: "I often sing songs while I take a shower"
	},
	{
		id: 678,
		zh: "孩子喜欢一边吃饭，一边玩",
		pi: "Háizi xǐhuan yībiān chīfàn, yībiān wán",
		en: "Children like to play while eating"
	},
	{
		id: 679,
		zh: "你喜欢一边听音乐，一边做作业吗？",
		pi: "Nǐ xǐhuan yībiān tīng yīnyuè, yībiān zuò zuòyè ma?",
		en: "Do you like to listen to music while doing homework?"
	},
	{
		id: 680,
		zh: "我们一边走一边聊吧",
		pi: "Wǒmen yībiān zǒu yībiān liáo ba",
		en: "Let's walk while we talk"
	},
	{
		id: 681,
		zh: "请你一边读一边写",
		pi: "Qǐng nǐ yībiān dú yībiān xiě",
		en: "Please write as you read"
	},
	{
		id: 682,
		zh: "不要一边开车，一边打电话",
		pi: "Bùyào yībiān kāichē, yībiān dǎ diànhuà",
		en: "Don't talk on the phone while you drive"
	},
	{
		id: 683,
		zh: "老板喜欢一边抽烟，一边工作",
		pi: "Lǎobǎn xǐhuan yībiān chōuyān, yībiān gōngzuò",
		en: "The boss likes to smoke while working"
	},
	{
		id: 684,
		zh: "很多人都一边上班，一边玩手机",
		pi: "Hěn duō rén dōu yībiān shàngbān, yībiān wán shǒujī",
		en: "Many people play with their cell phones while working"
	},
	{
		id: 685,
		zh: "她常常一边做饭，一边带孩子",
		pi: "Tā chángcháng yībiān zuòfàn, yībiān dài háizi",
		en: "She often looks after the baby while cooking food"
	},
	{
		id: 686,
		zh: "她多高？",
		pi: "Tā duō gāo?",
		en: "How tall is she?"
	},
	{
		id: 687,
		zh: "你家多大？",
		pi: "Nǐ jiā duō dà?",
		en: "How large is your house?"
	},
	{
		id: 688,
		zh: "你的孩子多大？",
		pi: "Nǐ de háizi duō dà?",
		en: "How old is your child?"
	},
	{
		id: 689,
		zh: "黄河多长？",
		pi: "Huánghé duō cháng?",
		en: "How long is the Yellow River?"
	},
	{
		id: 690,
		zh: "你家离这儿多远？",
		pi: "Nǐ jiā lí zhèr duō yuǎn?",
		en: "How far is your house away from here?"
	},
	{
		id: 691,
		zh: "你要在美国待多久？",
		pi: "Nǐ yào zài Měiguó dāi duō jiǔ?",
		en: "How long are you going to stay in the USA?"
	},
	{
		id: 692,
		zh: "这些东西多重？",
		pi: "Zhèxiē dōngxi duō zhòng?",
		en: "How heavy are these things?"
	},
	{
		id: 693,
		zh: "你知道我们现在多胖吗？",
		pi: "Nǐ zhīdào wǒmen xiànzài duō pàng ma?",
		en: "Do you know how fat we are now?"
	},
	{
		id: 694,
		zh: "你知道这里的冬天多冷吗？",
		pi: "Nǐ zhīdào zhèlǐ de dōngtiān duō lěng ma?",
		en: "Do you know how cold it is here in winter?"
	},
	{
		id: 695,
		zh: "你知道上海的房子多贵吗？",
		pi: "Nǐ zhīdào Shànghǎi de fángzi duō guì ma?",
		en: "Do you know how expensive housing is in Shanghai?"
	},
	{
		id: 696,
		zh: "我和你一样",
		pi: "Wǒ hé nǐ yīyàng",
		en: "I am the same as you"
	},
	{
		id: 697,
		zh: "他的性格跟他妈妈一样",
		pi: "Tā de xìnggé gēn tā māma yīyàng",
		en: "He has the same personality as his mom"
	},
	{
		id: 698,
		zh: "北京的天气和上海不一样",
		pi: "Běijīng de tiānqì hé Shànghǎi bù yīyàng",
		en: "The weather in Beijing and the weather in Shanghai are not alike"
	},
	{
		id: 699,
		zh: "这个词的意思和那个词一样吗？",
		pi: "Zhège cí de yìsi hé nàge cí yīyàng ma?",
		en: "Are the meanings of this word and that word the same?"
	},
	{
		id: 700,
		zh: "美国文化跟中国文化不一样",
		pi: "Měiguó wénhuà gēn Zhōngguó wénhuà bù yīyàng",
		en: "American culture and Chinese culture are not the same"
	},
	{
		id: 701,
		zh: "你家跟我家一样大",
		pi: "Nǐ jiā gēn wǒ jiā yīyàng dà",
		en: "Your house is just as big as mine"
	},
	{
		id: 702,
		zh: "她和她哥哥一样高",
		pi: "Tā hé tā gēge yīyàng gāo",
		en: "She and her older brother are equally tall"
	},
	{
		id: 703,
		zh: "你的头发和我的头发一样长",
		pi: "Nǐ de tóufa hé wǒ de tóufa yīyàng cháng",
		en: "You hair is as long as mine"
	},
	{
		id: 704,
		zh: "这里的天气跟我老家一样舒服",
		pi: "Zhèlǐ de tiānqì gēn wǒ lǎojiā yīyàng shūfu",
		en: "The weather here is just as comfortable as my hometown's"
	},
	{
		id: 705,
		zh: "你跟老板一样忙吗？",
		pi: "Nǐ gēn lǎobǎn yīyàng máng ma?",
		en: "Are you as busy as the boss is?"
	},
	{
		id: 706,
		zh: "我有点饿",
		pi: "Wǒ yǒudiǎn è",
		en: "I'm a little hungry"
	},
	{
		id: 707,
		zh: "这个菜有点辣",
		pi: "Zhège cài yǒudiǎn là",
		en: "This dish is a little too spicy"
	},
	{
		id: 708,
		zh: "昨天有一点热",
		pi: "Zuótiān yǒuyīdiǎn rè",
		en: "Yesterday it was a little too hot"
	},
	{
		id: 709,
		zh: "上海的冬天有一点冷",
		pi: "Shànghǎi de dōngtiān yǒuyīdiǎn lěng",
		en: "Winter in Shanghai is a bit too cold"
	},
	{
		id: 710,
		zh: "我弟弟有点胖",
		pi: "Wǒ dìdi yǒudiǎn pàng",
		en: "My younger brother is a bit fat"
	},
	{
		id: 711,
		zh: "今天有点累",
		pi: "Jīntiān yǒudiǎn lèi",
		en: "Today I am a little bit tired"
	},
	{
		id: 712,
		zh: "这个月公司有点忙",
		pi: "Zhège yuè gōngsī yǒudiǎn máng",
		en: "This month the company is a little bit busy"
	},
	{
		id: 713,
		zh: "这个地方有点吵，我们走吧",
		pi: "Zhège dìfang yǒudiǎn chǎo, wǒmen zǒu ba",
		en: "This place is a little too noisy. Let's go"
	},
	{
		id: 714,
		zh: "爸爸回来有点晚，妈妈有点不高兴",
		pi: "Bàba huílái yǒudiǎn wǎn, māma yǒudiǎn bù gāoxìng",
		en: "Dad came back home a bit too late, so mom was a little unhappy"
	},
	{
		id: 715,
		zh: "老师今天有点不舒服，所以没来上课",
		pi: "Lǎoshī jīntiān yǒudiǎn bù shūfu, suǒyǐ méi lái shàngkè",
		en: "Today, the teacher felt a little unwell, so she didn't come to class"
	},
	{
		id: 716,
		zh: "她男朋友又高又帅",
		pi: "Tā nánpéngyou yòu gāo yòu shuài",
		en: "Her boyfriend is both tall and handsome"
	},
	{
		id: 717,
		zh: "这个房子又大又亮",
		pi: "Zhège fángzi yòu dà yòu liàng",
		en: "This house is both big and bright"
	},
	{
		id: 718,
		zh: "妈妈的头发又黑又亮",
		pi: "Māma de tóufa yòu hēi yòu liàng",
		en: "Mom's hair is both black and shiny"
	},
	{
		id: 719,
		zh: "我姐姐又聪明又漂亮",
		pi: "Wǒ jiějie yòu cōngming yòu piàoliang",
		en: "My older sister is both smart and beautiful"
	},
	{
		id: 720,
		zh: "中国菜又便宜又好吃",
		pi: "Zhōngguó cài yòu piányi yòu hǎochī",
		en: "Chinese food is both cheap and good-tasting"
	},
	{
		id: 721,
		zh: "你们老板又年轻又有钱",
		pi: "Nǐmen lǎobǎn yòu niánqīng yòu yǒuqián",
		en: "Your boss is both young and rich"
	},
	{
		id: 722,
		zh: "这里的咖啡又贵又难喝",
		pi: "Zhèlǐ de kāfēi yòu guì yòu nánhē",
		en: "The coffee here is both expensive and bad-tasting"
	},
	{
		id: 723,
		zh: "我家小狗又可爱又听话",
		pi: "Wǒ jiā xiǎogǒu yòu kě'ài yòu tīnghuà",
		en: "My family's dog is both cute and obedient"
	},
	{
		id: 724,
		zh: "上海的冬天又冷又湿",
		pi: "Shànghǎi de dōngtiān yòu lěng yòu shī",
		en: "Winter here in Shanghai is both cold and humid"
	},
	{
		id: 725,
		zh: "她小时候又矮又瘦",
		pi: "Tā xiǎoshíhou yòu ǎi yòu shòu",
		en: "She was both short and thin when she was young"
	},
	{
		id: 726,
		zh: "我家离公司很近",
		pi: "Wǒ jiā lí gōngsī hěn jìn",
		en: "My house is close to my office"
	},
	{
		id: 727,
		zh: "美国离中国很远",
		pi: "Měiguó lí Zhōngguó hěn yuǎn",
		en: "The USA is far from China"
	},
	{
		id: 728,
		zh: "这个酒店离火车站很近",
		pi: "Zhège jiǔdiàn lí huǒchēzhàn hěn jìn",
		en: "This hotel is very close to the train station"
	},
	{
		id: 729,
		zh: "那个酒吧离这儿太远了，我不想去",
		pi: "Nàge jiǔbā lí zhèr tài yuǎn le, wǒ bù xiǎng qù",
		en: "That bar is too far away from here. I don't want to go"
	},
	{
		id: 730,
		zh: "我不想去离家很远的地方工作",
		pi: "Wǒ bù xiǎng qù lí jiā hěn yuǎn de dìfang gōngzuò",
		en: "I don't want to go work at a place very far away from home"
	},
	{
		id: 731,
		zh: "你家离超市远吗？",
		pi: "Nǐ jiā lí chāoshì yuǎn ma?",
		en: "Is your house far away from the supermarket?"
	},
	{
		id: 732,
		zh: "你的大学离你老家很远吗？",
		pi: "Nǐ de dàxué lí nǐ lǎojiā hěn yuǎn ma?",
		en: "Is your college very far away from your hometown?"
	},
	{
		id: 733,
		zh: "你们公司离地铁站近吗？",
		pi: "Nǐmen gōngsī lí dìtiězhàn jìn ma?",
		en: "Is your company close to the metro station?"
	},
	{
		id: 734,
		zh: "你家离学校多远？",
		pi: "Nǐ jiā lí xuéxiào duō yuǎn?",
		en: "How far is it from your home to school?"
	},
	{
		id: 735,
		zh: "这个酒店离机场有多远？",
		pi: "Zhège jiǔdiàn lí jīchǎng yǒu duō yuǎn?",
		en: "How far is it from this hotel to the airport?"
	},
	{
		id: 736,
		zh: "你离我远点儿",
		pi: "Nǐ lí wǒ yuǎn diǎnr",
		en: "Stay away from me"
	},
	{
		id: 737,
		zh: "这两个银行哪个更近？",
		pi: "Zhè liǎng gè yínháng nǎge gèng jìn?",
		en: "Between these two banks, which one is closer?"
	},
	{
		id: 738,
		zh: "我想找一个更帅的男朋友",
		pi: "Wǒ xiǎng zhǎo yī gè gèng shuài de nánpéngyou",
		en: "I want to find a more handsome boyfriend"
	},
	{
		id: 739,
		zh: "我喜欢在网上买书，因为更便宜",
		pi: "Wǒ xǐhuan zài wǎngshàng mǎi shū, yīnwèi gèng piányi",
		en: "I like buying books online because it's cheaper"
	},
	{
		id: 740,
		zh: "不要太高兴，我们还有更多的工作要做",
		pi: "Bùyào tài gāoxìng, wǒmen hái yǒu gèng duō de gōngzuò yào zuò",
		en: "Don't get too excited. We still have more work to do"
	},
	{
		id: 741,
		zh: "结婚以后，她变得更漂亮了",
		pi: "Jiéhūn yǐhòu, tā biàn de gèng piàoliang le",
		en: "She's become more beautiful after she got married"
	},
	{
		id: 742,
		zh: "北京的房子比上海更贵",
		pi: "Běijīng de fángzi bǐ Shànghǎi gèng guì",
		en: "The houses in Beijing are even more expensive than those in Shanghai"
	},
	{
		id: 743,
		zh: "春节比中秋节更热闹",
		pi: "Chūnjié bǐ Zhōngqiūjié gèng rènao",
		en: "Spring Festival is even more boisterous than Mid-autumn Festival"
	},
	{
		id: 744,
		zh: "汉字比声调更难",
		pi: "Hànzì bǐ shēngdiào gèng nán",
		en: "Chinese characters are even more difficult than tones"
	},
	{
		id: 745,
		zh: "他现在的女朋友比以前的更漂亮",
		pi: "Tā xiànzài de nǚpéngyou bǐ yǐqián de gèng piàoliang",
		en: "His current girlfriend is even more beautiful than his previous one"
	},
	{
		id: 746,
		zh: "中国的高铁比飞机更方便",
		pi: "Zhōngguó de gāotiě bǐ fēijī gèng fāngbiàn",
		en: "China's high-speed trains are even more convenient than airplanes"
	},
	{
		id: 747,
		zh: "我家不太大",
		pi: "Wǒ jiā bù tài dà",
		en: "My house is not too big"
	},
	{
		id: 748,
		zh: "那个地方不太远",
		pi: "Nàge dìfang bù tài yuǎn",
		en: "That place is not very far away"
	},
	{
		id: 749,
		zh: "老板今天不太高兴",
		pi: "Lǎobǎn jīntiān bù tài gāoxìng",
		en: "The boss is not very happy today"
	},
	{
		id: 750,
		zh: "这个店的衣服不太贵",
		pi: "Zhège diàn de yīfu bù tài guì",
		en: "The clothes in this shop are not too expensive"
	},
	{
		id: 751,
		zh: "我觉得他不太聪明",
		pi: "Wǒ juéde tā bù tài cōngming",
		en: "I think he is not too smart"
	},
	{
		id: 752,
		zh: "我不太懂",
		pi: "Wǒ bù tài dǒng",
		en: "I don't really understand"
	},
	{
		id: 753,
		zh: "我不太会说英语",
		pi: "Wǒ bù tài huì shuō Yīngyǔ",
		en: "I can't really speak English"
	},
	{
		id: 754,
		zh: "他们不太想去",
		pi: "Tāmen bù tài xiǎng qù",
		en: "They don't really want to go"
	},
	{
		id: 755,
		zh: "我哥哥不太喜欢他的工作",
		pi: "Wǒ gēge bù tài xǐhuan tā de gōngzuò",
		en: "My older brother doesn't really like his job"
	},
	{
		id: 756,
		zh: "他不太明白老板的意思",
		pi: "Tā bù tài míngbai lǎobǎn de yìsi",
		en: "He didn't really understand what the boss meant"
	},
	{
		id: 757,
		zh: "你真好",
		pi: "Nǐ zhēn hǎo",
		en: "You are so nice"
	},
	{
		id: 758,
		zh: "你女朋友真漂亮",
		pi: "Nǐ nǚpéngyou zhēn piàoliang",
		en: "Your girlfriend is really pretty"
	},
	{
		id: 759,
		zh: "他家真有钱",
		pi: "Tā jiā zhēn yǒuqián",
		en: "His family is really rich"
	},
	{
		id: 760,
		zh: "小狗真可爱",
		pi: "Xiǎogǒu zhēn kě'ài",
		en: "This puppy is really cute"
	},
	{
		id: 761,
		zh: "今天真热",
		pi: "Jīntiān zhēn rè",
		en: "It's truly hot today"
	},
	{
		id: 762,
		zh: "你妈妈真爱你",
		pi: "Nǐ māma zhēn ài nǐ",
		en: "Your mother really loves you"
	},
	{
		id: 763,
		zh: "我真喜欢住在中国",
		pi: "Wǒ zhēn xǐhuan zhù zài Zhōngguó",
		en: "I really like living in China"
	},
	{
		id: 764,
		zh: "我真讨厌这种男人",
		pi: "Wǒ zhēn tǎoyàn zhè zhǒng nánrén",
		en: "I really hate this kind of guy"
	},
	{
		id: 765,
		zh: "你真会说话",
		pi: "Nǐ zhēn huì shuōhuà",
		en: "You are so good with words"
	},
	{
		id: 766,
		zh: "你真能吃",
		pi: "Nǐ zhēn néng chī",
		en: "You can really eat"
	},
	{
		id: 767,
		zh: "一个人多好",
		pi: "Yīgèrén duō hǎo",
		en: "It's so nice being alone"
	},
	{
		id: 768,
		zh: "你女儿多聪明啊",
		pi: "Nǐ nǚér duō cōngming a",
		en: "Your daughter is so smart"
	},
	{
		id: 769,
		zh: "今天天气多舒服",
		pi: "Jīntiān tiānqì duō shūfu",
		en: "Today's weather is so nice"
	},
	{
		id: 770,
		zh: "你看这个地方，多美啊",
		pi: "Nǐ kàn zhège dìfang, duō měi a",
		en: "Look at this place, it is so beautiful"
	},
	{
		id: 771,
		zh: "学中文多有意思啊",
		pi: "Xué Zhōngwén duō yǒu yìsi a",
		en: "Studying Chinese is so interesting"
	},
	{
		id: 772,
		zh: "坐地铁多方便",
		pi: "Zuò dìtiě duō fāngbiàn",
		en: "How convenient it is to take the metro"
	},
	{
		id: 773,
		zh: "你看这个小狗，多可爱",
		pi: "Nǐ kàn zhège xiǎogǒu, duō kě'ài",
		en: "Look at this puppy! It is so cute"
	},
	{
		id: 774,
		zh: "这样做多麻烦",
		pi: "Zhèyàng zuò duō máfan",
		en: "Doing it this way is so troublesome"
	},
	{
		id: 775,
		zh: "这些菜多好吃啊",
		pi: "Zhèxiē cài duō hǎochī a",
		en: "These foods are so delicious"
	},
	{
		id: 776,
		zh: "你男朋友多帅啊",
		pi: "Nǐ nánpéngyou duō shuài a",
		en: "Your boyfriend is so handsome"
	},
	{
		id: 777,
		zh: "我还好",
		pi: "Wǒ hái hǎo",
		en: "I'm OK"
	},
	{
		id: 778,
		zh: "爸爸做的菜还可以",
		pi: "Bàba zuò de cài hái kěyǐ",
		en: "The food that dad cooks is OK"
	},
	{
		id: 779,
		zh: "我们老板还不错",
		pi: "Wǒmen lǎobǎn hái bùcuò",
		en: "Our boss is not too bad"
	},
	{
		id: 780,
		zh: "这家店还行，不太贵",
		pi: "Zhè jiā diàn hái xíng, bù tài guì",
		en: "This shop is OK. It's not too expensive"
	},
	{
		id: 781,
		zh: "我男朋友的工资还可以",
		pi: "Wǒ nánpéngyou de gōngzī hái kěyǐ",
		en: "My boyfriend's salary is OK"
	},
	{
		id: 782,
		zh: "新的办公室还不错",
		pi: "Xīn de bàngōngshì hái bùcuò",
		en: "The new office is OK"
	},
	{
		id: 783,
		zh: "我觉得这里的菜还可以，没有那么难吃",
		pi: "Wǒ juéde zhèlǐ de cài hái kěyǐ, méiyǒu nàme nánchī",
		en: "I think the food here is OK, it is not too bad-tasting"
	},
	{
		id: 784,
		zh: "这个牌子还不错，很多年轻人喜欢",
		pi: "Zhège páizi hái bùcuò，hěn duō niánqīng rén xǐhuan",
		en: "This brand is not too bad. Many young people like it"
	},
	{
		id: 785,
		zh: "房子还可以，但是有点贵",
		pi: "Fángzi hái kěyǐ, dànshì yǒudiǎn guì",
		en: "The apartment is not too bad, but it is a bit expensive"
	},
	{
		id: 786,
		zh: "漂亮的女孩儿",
		pi: "piàoliang de nǚháir",
		en: "beautiful girl"
	},
	{
		id: 787,
		zh: "辣的菜",
		pi: "là de cài",
		en: "spicy food"
	},
	{
		id: 788,
		zh: "可爱的宝宝",
		pi: "kě'ài de bǎobao",
		en: "a cute baby"
	},
	{
		id: 789,
		zh: "我喜欢新鲜的果汁",
		pi: "Wǒ xǐhuan xīnxiān de guǒzhī",
		en: "I like fresh fruit juice"
	},
	{
		id: 790,
		zh: "他常常买便宜的东西",
		pi: "Tā chángcháng mǎi piányi de dōngxi",
		en: "He often buys cheap stuff"
	},
	{
		id: 791,
		zh: "孩子喜欢吃什么东西？",
		pi: "Háizi xǐhuan chī shénme dōngxi?",
		en: "What food do children like to eat?"
	},
	{
		id: 792,
		zh: "你喜欢哪种女孩？",
		pi: "Nǐ xǐhuan nǎ zhǒng nǚhái?",
		en: "What kind of girls do you like?"
	},
	{
		id: 793,
		zh: "你要喝冷水还是热水？",
		pi: "Nǐ yào hē lěng shuǐ háishì rè shuǐ ?",
		en: "Do you want to drink cold or hot water?"
	},
	{
		id: 794,
		zh: "你想找什么样的男朋友？",
		pi: "Nǐ xiǎng zhǎo shénmeyàng de nánpéngyou?",
		en: "What kind of boyfriend do you want to find?"
	},
	{
		id: 795,
		zh: "你不喜欢吃什么菜？",
		pi: "Nǐ bù xǐhuan chī shénme cài?",
		en: "Which foods do you not like to eat?"
	},
	{
		id: 796,
		zh: "妈妈做的菜",
		pi: "māma zuò de cài",
		en: "the food that mom cooks / cooked"
	},
	{
		id: 797,
		zh: "去北京的火车",
		pi: "qù Běijīng de huǒchē",
		en: "the train that goes / went to Beijing"
	},
	{
		id: 798,
		zh: "你教的学生",
		pi: "nǐ jiāo de xuésheng",
		en: "the students that you teach / taugh"
	},
	{
		id: 799,
		zh: "老板请的朋友",
		pi: "lǎobǎn qǐng de péngyou",
		en: "the friends that the boss invites / invited"
	},
	{
		id: 800,
		zh: "我画的画",
		pi: "wǒ huà de huà",
		en: "the pictures that I draw / drew"
	},
	{
		id: 801,
		zh: "他写的书",
		pi: "tā xiě de shū",
		en: "the books that he wrote"
	},
	{
		id: 802,
		zh: "妈妈给我买的衣服",
		pi: "māma gěi wǒ mǎi de yīfu",
		en: "the clothes that mom buys / bought for me"
	},
	{
		id: 803,
		zh: "客户问的问题",
		pi: "kèhù wèn de wèntí",
		en: "the questions that the client asks / asked"
	},
	{
		id: 804,
		zh: "不喜欢中国菜的老外",
		pi: "bù xǐhuan Zhōngguó cài de lǎowài",
		en: "the foreigners that don't / didn't like Chinese food"
	},
	{
		id: 805,
		zh: "妈妈做的",
		pi: "māma zuò de",
		en: "what mom cooks / cooked"
	},
	{
		id: 806,
		zh: "我画的",
		pi: "wǒ huà de",
		en: "what I draw / drew"
	},
	{
		id: 807,
		zh: "他写的",
		pi: "tā xiě de",
		en: "what he writes / wrote"
	},
	{
		id: 808,
		zh: "你教的",
		pi: "nǐ jiāo de",
		en: "who/what you teach / taught"
	},
	{
		id: 809,
		zh: "哪个老师最好？",
		pi: "Nǎge lǎoshī zuì hǎo?",
		en: "Which teacher is the best?"
	},
	{
		id: 810,
		zh: "你们家谁最漂亮？",
		pi: "Nǐmen jiā shéi zuì piàoliang?",
		en: "In your family who is the most beautiful?"
	},
	{
		id: 811,
		zh: "谁最有钱？",
		pi: "Shéi zuì yǒuqián?",
		en: "Who is the richest?"
	},
	{
		id: 812,
		zh: "汉语最难",
		pi: "Hànyǔ zuì nán",
		en: "The Chinese language is the most difficult"
	},
	{
		id: 813,
		zh: "这种事最麻烦",
		pi: "Zhè zhǒng shì zuì máfan",
		en: "These kind of things are the most troublesome"
	},
	{
		id: 814,
		zh: "小狗最可爱了",
		pi: "Xiǎogǒu zuì kě'ài le",
		en: "The puppy is the cutest"
	},
	{
		id: 815,
		zh: "四川菜最辣了",
		pi: "Sìchuān cài zuì là le",
		en: "Sichuan food is the spiciest"
	},
	{
		id: 816,
		zh: "我的中国朋友最热情了",
		pi: "Wǒ de Zhōngguó péngyou zuì rèqíng le",
		en: "My Chinese friend is the most enthusiastic"
	},
	{
		id: 817,
		zh: "他的学生最认真了",
		pi: "Tā de xuésheng zuì rènzhēn le",
		en: "His student is the most serious."
	},
	{
		id: 818,
		zh: "黄山的风景最美了",
		pi: "Huángshān de fēngjǐng zuì měi le",
		en: "Huang Mountain's landscape is the most beautiful"
	},
	{
		id: 819,
		zh: "老板最喜欢你了",
		pi: "Lǎobǎn zuì xǐhuan nǐ le",
		en: "The boss likes you the best"
	},
	{
		id: 820,
		zh: "你最怕什么？",
		pi: "Nǐ zuì pà shénme?",
		en: "What do you most fear?"
	},
	{
		id: 821,
		zh: "我最爱中国菜",
		pi: "Wǒ zuì ài Zhōngguó cài",
		en: "I love Chinese food most"
	},
	{
		id: 822,
		zh: "谁最了解你？",
		pi: "Shéi zuì liǎojiě nǐ?",
		en: "Who knows you best?"
	},
	{
		id: 823,
		zh: "她最讨厌抽烟的男人了",
		pi: "Tā zuì tǎoyàn chōuyān de nánrén le",
		en: "She most hates men that smoke"
	},
	{
		id: 824,
		zh: "你最喜欢什么颜色？",
		pi: "Nǐ zuì xǐhuan shénme yánsè?",
		en: "What is your favorite color?"
	},
	{
		id: 825,
		zh: "你最喜欢什么动物？",
		pi: "Nǐ zuì xǐhuan shénme dòngwù?",
		en: "What is your favorite animal?"
	},
	{
		id: 826,
		zh: "我喝咖啡或者茶，都行",
		pi: "Wǒ hē kāfēi huòzhě chá, dōu xíng",
		en: "I drink coffee or tea. Either is OK"
	},
	{
		id: 827,
		zh: "星期六或者星期天，都可以",
		pi: "Xīngqīliù huòzhě Xīngqītiān, dōu kěyǐ",
		en: "Saturday or Sunday are both OK"
	},
	{
		id: 828,
		zh: "今天晚上我想吃披萨或者寿司",
		pi: "Jīntiān wǎnshang wǒ xiǎng chī pīsà huòzhě shòusī",
		en: "Tonight I would like to eat pizza or sushi"
	},
	{
		id: 829,
		zh: "周末的时候，我喜欢在家做饭或者看电影",
		pi: "Zhōumò de shíhou, wǒ xǐhuan zài jiā zuòfàn huòzhě kàn diànyǐng",
		en: "During the weekend, I like to cook or watch movies at home"
	},
	{
		id: 830,
		zh: "你去或者她去，都可以",
		pi: "Nǐ qù huòzhě tā qù, dōu kěyǐ",
		en: "You go or she goes, either way is fine"
	},
	{
		id: 831,
		zh: "下班以后我去你家或者你来我家，都可以",
		pi: "Xiàbān yǐhòu wǒ qù nǐ jiā huòzhě nǐ lái wǒ jiā, dōu kěyǐ",
		en: "After work I will go to your house, or you can come to my house, either way is fine"
	},
	{
		id: 832,
		zh: "下个月我打算去杭州或者苏州旅行",
		pi: "Xià gè yuè wǒ dǎsuàn qù Hángzhōu huòzhě Sūzhōu lǚxíng",
		en: "Next month I plan to go to Hangzhou or Suzhou to travel"
	},
	{
		id: 833,
		zh: "我们可以坐飞机或者坐高铁去",
		pi: "Wǒmen kěyǐ zuò fēijī huòzhě zuò gāotiě qù",
		en: "We can go by plane or by high-speed train"
	},
	{
		id: 834,
		zh: "晚饭以后我和家人聊天或者看电视",
		pi: "Wǎnfàn yǐhòu wǒ hé jiārén liáotiān huòzhě kàn diànshì",
		en: "After dinner I chat with or watch TV with my family"
	},
	{
		id: 835,
		zh: "你可以用手机或者电脑上网",
		pi: "Nǐ kěyǐ yòng shǒujī huòzhě diànnǎo shàngwǎng",
		en: "You can use either a cell phone or computer to go online"
	},
	{
		id: 836,
		zh: "我昨天跟朋友去海滩了",
		pi: "Wǒ zuótiān gēn péngyou qù hǎitān le",
		en: "I went to the beach with friends yesterday"
	},
	{
		id: 837,
		zh: "不要跟我说话",
		pi: "Bùyào gēn wǒ shuōhuà",
		en: "Don't talk to me"
	},
	{
		id: 838,
		zh: "我明天要跟新客户见面",
		pi: "Wǒ míngtiān yào gēn xīn kèhù jiànmiàn",
		en: "I'm going to meet new clients tomorrow"
	},
	{
		id: 839,
		zh: "你什么时候跟你女朋友结婚？",
		pi: "Nǐ shénme shíhou gēn nǐ nǚpéngyou jiéhūn?",
		en: "When are you gonna marry your girlfriend?"
	},
	{
		id: 840,
		zh: "你喜欢跟你父母聊天吗？",
		pi: "Nǐ xǐhuan gēn nǐ fùmǔ liáotiān ma?",
		en: "Do you like to talk with your parents?"
	},
	{
		id: 841,
		zh: "你想跟我一起去吗？",
		pi: "Nǐ xiǎng gēn wǒ yīqǐ qù ma?",
		en: "Do you want to go with me?"
	},
	{
		id: 842,
		zh: "请你们跟老师一起读",
		pi: "Qǐng nǐmen gēn lǎoshī yīqǐ dú",
		en: "Please read together with the teacher"
	},
	{
		id: 843,
		zh: "下周谁跟老板一起出差？",
		pi: "Xià zhōu shéi gēn lǎobǎn yīqǐ chūchāi?",
		en: "Who is going on a business trip together with the boss next week?"
	},
	{
		id: 844,
		zh: "结婚以后，你想跟父母一起住吗？",
		pi: "Jiéhūn yǐhòu, nǐ xiǎng gēn fùmǔ yīqǐ zhù ma?",
		en: "Do you want live together with your parents after you get married?"
	},
	{
		id: 845,
		zh: "今年中秋节你会跟家人一起过吗？",
		pi: "Jīnnián Zhōngqiūjié nǐ huì gēn jiārén yīqǐ guò ma?",
		en: "Are you going to spend this Mid-Autumn Festival with your family?"
	},
	{
		id: 846,
		zh: "我要跟你见面",
		pi: "Wǒ yào gēn nǐ jiànmiàn",
		en: "I want to meet with you"
	},
	{
		id: 847,
		zh: "我昨天跟他见面了",
		pi: "Wǒ zuótiān gēn tā jiànmiàn le",
		en: "I met with him yesterday"
	},
	{
		id: 848,
		zh: "你什么时候跟她见面？",
		pi: "Nǐ shénme shíhou gēn tā jiànmiàn?",
		en: "When are you going to meet with her?"
	},
	{
		id: 849,
		zh: "明天我要跟我男朋友的家人见面",
		pi: "Míngtiān wǒ yào gēn wǒ nánpéngyou de jiārén jiànmiàn",
		en: "Tomorrow I am going to meet my boyfriend's family"
	},
	{
		id: 850,
		zh: "跟我读",
		pi: "Gēn wǒ dú",
		en: "Read after me"
	},
	{
		id: 851,
		zh: "和我一起读",
		pi: "Hé wǒ yīqǐ dú",
		en: "Read with me"
	},
	{
		id: 852,
		zh: "跟我一起读",
		pi: "Gēn wǒ yīqǐ dú",
		en: "Read with me"
	},
	{
		id: 853,
		zh: "那个 ⋯⋯ 我不跟你们一起去了，可以吗？",
		pi: "Nèige... wǒ bù gēn nǐmen yīqǐ qù le, kěyǐ ma?",
		en: "So, ummm... I won't go with you guys, OK?"
	},
	{
		id: 854,
		zh: "我想吃那个 ⋯⋯ 那个 ⋯⋯ 湖南菜",
		pi: "Wǒ xiǎng chī nèige... nèige... Húnán cài",
		en: "I want to eat that... ummm, you know... Hunan cuisine"
	},
	{
		id: 855,
		zh: "那个 ⋯⋯ 我明天不来了",
		pi: "Nèige... wǒ míngtiān bù lái le",
		en: "Ummm... I'm not coming tomorrow"
	},
	{
		id: 856,
		zh: "那个 ⋯⋯ 这样做不好吧？",
		pi: "Nèige... zhèyàng zuò bù hǎo ba?",
		en: "Ummm, it's not good to do it this way?"
	},
	{
		id: 857,
		zh: "那个 ⋯⋯ 你可以做我的女朋友吗？",
		pi: "Nèige... nǐ kěyǐ zuò wǒ de nǚpéngyou ma?",
		en: "Like... could you be my girlfriend?"
	},
	{
		id: 858,
		zh: "那个 ⋯⋯ 不好意思，我要走了",
		pi: "Nèige... bù hǎoyìsi, wǒ yào zǒu le",
		en: "Ummmm... sorry, but I've gotta go"
	},
	{
		id: 859,
		zh: "她很漂亮，就像那个 ⋯⋯ 明星一样",
		pi: "Tā hěn piàoliang, jiù xiàng nèige... míngxīng yīyàng",
		en: "She's very pretty, just like, you know, a celebrity"
	},
	{
		id: 860,
		zh: "那个 ⋯⋯ 我要去开会了",
		pi: "Nèige... wǒ yào qù kāihuì le",
		en: "Ummm... I have to attend a meeting"
	},
	{
		id: 861,
		zh: "昨天那个 ⋯⋯ 那个 ⋯⋯ 小笼包真好吃",
		pi: "Zuótiān nèige... nèige... xiǎolóngbāo zhēn hǎochī",
		en: "Yesterday the, you know, steamed soup dumplings were so delicious"
	},
	{
		id: 862,
		zh: "我喜欢他，可是他不喜欢我",
		pi: "Wǒ xǐhuan tā, kěshì tā bù xǐhuan wǒ",
		en: "I like him, but he doesn't like me"
	},
	{
		id: 863,
		zh: "我很想去，但是我太忙了",
		pi: "Wǒ hěn xiǎng qù, dànshì wǒ tài máng le",
		en: "I really want to go, but I am too busy"
	},
	{
		id: 864,
		zh: "中文很有意思，但是也很难",
		pi: "Zhōngwén hěn yǒuyìsi, dànshì yě hěn nán",
		en: "Chinese is very interesting, but it is also very hard"
	},
	{
		id: 865,
		zh: "我喜欢这件衬衫，可是太贵了",
		pi: "Wǒ xǐhuan zhè jiàn chènshān, kěshì tài guì le",
		en: "I like this shirt, but it is too expensive"
	},
	{
		id: 866,
		zh: "老板昨天给他打电话，可是他没接",
		pi: "Lǎobǎn zuótiān gěi tā dǎ diànhuà, kěshì tā méi jiē",
		en: "The boss gave him a call yesterday, but he didn't answer"
	},
	{
		id: 867,
		zh: "你们可以在这里看书，可是不可以说话",
		pi: "Nǐ kěyǐ zài zhèlǐ kàn shū, kěshì bù kěyǐ shuōhuà",
		en: "You can read books here, but you can't talk"
	},
	{
		id: 868,
		zh: "你可以吃，但是不可以吃太多",
		pi: "Nǐ kěyǐ chī, dànshì bù kěyǐ chī tài duō",
		en: "You can eat, but you can't eat too much"
	},
	{
		id: 869,
		zh: "他说五点来见我，但是他没来",
		pi: "Tā shuō wǔ diǎn lái jiàn wǒ, dànshì tā méi lái",
		en: "He said he would come to see me at five, but he didn't"
	},
	{
		id: 870,
		zh: "这个地方很漂亮，但是人太多了",
		pi: "Zhège dìfang hěn piàoliang, dànshì rén tài duō le",
		en: "his place is beautiful, but there are too many people"
	},
	{
		id: 871,
		zh: "下午三点以后，我不在家",
		pi: "Xiàwǔ sāndiǎn yǐhòu, wǒ bù zài jiā",
		en: "After three p.m., I will not be at home"
	},
	{
		id: 872,
		zh: "来中国以后，她认识了她的老公",
		pi: "Lái Zhōngguó yǐhòu, tā rènshi le tā de lǎogōng",
		en: "After coming to China, she met her husband"
	},
	{
		id: 873,
		zh: "她一个月以后开始上班",
		pi: "Tā yī gè yuè yǐhòu kāishǐ shàngbān",
		en: "After one month, she will start working"
	},
	{
		id: 874,
		zh: "吃完午饭以后，我们要开会",
		pi: "Chī wán wǔfàn yǐhòu, wǒmen yào kāihuì",
		en: "We are going to have a meeting after we finish lunch"
	},
	{
		id: 875,
		zh: "几年以后，我们公司会更大",
		pi: "Jǐ nián yǐhòu, wǒmen gōngsī huì gèng dà",
		en: "In a few years, our company will be even bigger"
	},
	{
		id: 876,
		zh: "老板半个小时以后回来",
		pi: "Lǎobǎn bàn gè xiǎoshí yǐhòu huílái",
		en: "After half an hour, the boss will return"
	},
	{
		id: 877,
		zh: "下班以后你想跟我们一起去打球吗?",
		pi: "Xiàbān yǐhòu, nǐ xiǎng gēn wǒmen yīqǐ qù dǎqiú ma?",
		en: "After we get off work, would you like to go play ball with us?"
	},
	{
		id: 878,
		zh: "老板来了以后，大家都不说话了",
		pi: "Lǎobǎn lái le yǐhòu, dàjiā dōu bù shuōhuà le",
		en: "After the boss came, everyone stopped talking"
	},
	{
		id: 879,
		zh: "你到家以后给我打电话",
		pi: "Nǐ dào jiā yǐhòu gěi wǒ dǎ diànhuà",
		en: "After you get home, call me"
	},
	{
		id: 880,
		zh: "结婚以后爸爸不喝酒了",
		pi: "Jiéhūn yǐhòu bàba bù hējiǔ le",
		en: "After he got married, dad stopped drinking"
	},
	{
		id: 881,
		zh: "吃饭以前，你洗手了吗？",
		pi: "Chīfàn yǐqián, nǐ xǐ shǒu le ma?",
		en: "Did you wash your hands before eating?"
	},
	{
		id: 882,
		zh: "睡觉以前，不要吃东西",
		pi: "Shuìjiào yǐqián, bùyào chī dōngxi",
		en: "Don't eat anything before you go to sleep"
	},
	{
		id: 883,
		zh: "两年以前，你认识他吗？",
		pi: "Liǎng nián yǐqián, nǐ rènshi tā ma?",
		en: "Did you know him two years ago?"
	},
	{
		id: 884,
		zh: "星期五以前，你要做完这些工作",
		pi: "Xīngqīwǔ yǐqián, nǐ yào zuò wán zhèxiē gōngzuò",
		en: "You need to finish this work before Friday"
	},
	{
		id: 885,
		zh: "上大学以前，你来过上海吗？",
		pi: "Shàng dàxué yǐqián, nǐ lái guo shànghǎi ma?",
		en: "Before you went to college, did you ever come to Shanghai?"
	},
	{
		id: 886,
		zh: "结婚以前，你应该先买房子",
		pi: "Jiéhūn yǐqián, nǐ yīnggāi xiān mǎi fángzi",
		en: "Before getting married, you should first buy a house"
	},
	{
		id: 887,
		zh: "二十年以前，这里是一个公园",
		pi: "Èrshí nián yǐqián, zhèlǐ shì yī gè gōngyuán",
		en: "Twenty years ago, this was a park"
	},
	{
		id: 888,
		zh: "几个月以前，他们分手了",
		pi: "Jǐ gè yuè yǐqián, tāmen fēnshǒu le",
		en: "They broke up a few months ago"
	},
	{
		id: 889,
		zh: "毕业以前，我要找到工作",
		pi: "Bìyè yǐqián, wǒ yào zhǎodào gōngzuò",
		en: "I need to find a job before graduation"
	},
	{
		id: 890,
		zh: "以前我不会说中文",
		pi: "Yǐqián wǒ bù huì shuō Zhōngwén",
		en: "Before, I could not speak Chinese"
	},
	{
		id: 891,
		zh: "你以前住在哪儿？",
		pi: "Nǐ yǐqián zhù zài nǎr?",
		en: "Before, where did you live?"
	},
	{
		id: 892,
		zh: "以前我不认识他",
		pi: "Yǐqián wǒ bù rènshi tā",
		en: "Before, I didn't know him"
	},
	{
		id: 893,
		zh: "以前他是我们的客户吗？",
		pi: "Yǐqián tā shì wǒmen de kèhù ma?",
		en: "Was he our client before?"
	},
	{
		id: 894,
		zh: "以前他是一个服务员，现在是老板",
		pi: "Yǐqián tā shì yī gè fúwùyuán, xiànzài shì lǎobǎn",
		en: "Before, he was a waiter. Now, he is a boss"
	},
	{
		id: 895,
		zh: "我父母以前都是老师",
		pi: "Wǒ fùmǔ yǐqián dōu shì lǎoshī",
		en: "Before, both of my parents were teachers"
	},
	{
		id: 896,
		zh: "爸爸以前很喜欢抽烟",
		pi: "Bàba yǐqián hěn xǐhuan chōuyān",
		en: "Before, dad really liked smoking"
	},
	{
		id: 897,
		zh: "姐姐以前有一个很有钱的男朋友",
		pi: "Jiějie yǐqián yǒu yī gè hěn yǒuqián de nánpéngyou",
		en: "My older sister had a very rich boyfriend before"
	},
	{
		id: 898,
		zh: "他们以前没有钱，可是很快乐",
		pi: "Tāmen yǐqián méiyǒu qián, kěshì hěn kuàilè",
		en: "They didn't have much money before, but they were happy"
	},
	{
		id: 899,
		zh: "我男朋友以前在美国工作，现在在中国工作",
		pi: "Wǒ nánpéngyou yǐqián zài Měiguó gōngzuò, xiànzài zài Zhōngguó gōngzuò",
		en: "Before, my boyfriend worked in the USA. Now, he works in China"
	},
	{
		id: 900,
		zh: "你刚才说什么了？",
		pi: "Nǐ gāngcái shuō shénme le?",
		en: "What did you just say?"
	},
	{
		id: 901,
		zh: "刚才谁来了？",
		pi: "Gāngcái shéi lái le?",
		en: "Who came just now?"
	},
	{
		id: 902,
		zh: "刚才你去哪儿了？",
		pi: "Gāngcái nǐ qù nǎr le?",
		en: "Where did you go just now?"
	},
	{
		id: 903,
		zh: "刚才我去洗手间了",
		pi: "Gāngcái wǒ qù xǐshǒujiān le",
		en: "I just went to the restroom"
	},
	{
		id: 904,
		zh: "老板刚才生气了",
		pi: "Lǎobǎn gāngcái shēngqì le",
		en: "The boss just got angry"
	},
	{
		id: 905,
		zh: "你们刚才在看什么？",
		pi: "Nǐmen gāngcái zài kàn shénme?",
		en: "What were you looking at just now?"
	},
	{
		id: 906,
		zh: "不好意思，我刚才出去了",
		pi: "Bù hǎoyìsi, wǒ gāngcái chūqù le",
		en: "I'm sorry, I just now stepped out"
	},
	{
		id: 907,
		zh: "宝宝刚才哭了",
		pi: "Bǎobao gāngcái kū le",
		en: "The baby just cried"
	},
	{
		id: 908,
		zh: "他们刚才去开会了",
		pi: "Tāmen gāngcái qù kāihuì le",
		en: "They just went to a meeting"
	},
	{
		id: 909,
		zh: "刚才有人找你",
		pi: "Gāngcái yǒu rén zhǎo nǐ",
		en: "Just now, there was someone looking for you"
	},
	{
		id: 910,
		zh: "你不在的时候，我会想你",
		pi: "Nǐ bù zài de shíhou, wǒ huì xiǎng nǐ",
		en: "When you are not here, I'll miss you"
	},
	{
		id: 911,
		zh: "我上大学的时候，有很多朋友",
		pi: "Wǒ shàng dàxué de shíhou, yǒu hěn duō péngyou",
		en: "When I was in college, I had a lot of friends"
	},
	{
		id: 912,
		zh: "上课的时候不要吃东西",
		pi: "Shàngkè de shíhou bùyào chī dōngxi",
		en: "Don't eat when you are in class"
	},
	{
		id: 913,
		zh: "老板工作的时候喜欢喝咖啡",
		pi: "Lǎobǎn gōngzuò de shíhou xǐhuan hē kāfēi",
		en: "When the boss works, he likes to drink coffee"
	},
	{
		id: 914,
		zh: "我生气的时候，请你不要笑",
		pi: "Wǒ shēngqì de shíhou, qǐng nǐ bùyào xiào",
		en: "Please don't laugh when I'm angry"
	},
	{
		id: 915,
		zh: "妈妈不在家的时候，我自己做饭",
		pi: "Māma bù zài jiā de shíhou, wǒ zìjǐ zuòfàn",
		en: "When mom is not home, I cook for myself"
	},
	{
		id: 916,
		zh: "开会的时候不要聊天",
		pi: "Kāihuì de shíhou bùyào liáotiān",
		en: "Don't chat when you are in a meeting"
	},
	{
		id: 917,
		zh: "吃东西的时候不要说话",
		pi: "Chī dōngxi de shíhou bùyào shuōhuà",
		en: "Don't talk when eating"
	},
	{
		id: 918,
		zh: "你开车的时候会打电话吗？",
		pi: "Nǐ kāichē de shíhou huì dǎ diànhuà ma?",
		en: "Do you talk on the phone when you're driving?"
	},
	{
		id: 919,
		zh: "走路的时候不要玩手机",
		pi: "Zǒulù de shíhou bùyào wán shǒujī",
		en: "Don't play with your phone while walking"
	},
	{
		id: 920,
		zh: "以后你们会想我吗？",
		pi: "Yǐhòu nǐmen huì xiǎng wǒ ma?",
		en: "In the future, will you miss me?"
	},
	{
		id: 921,
		zh: "以后你想来中国吗？",
		pi: "Yǐhòu nǐ xiǎng lái Zhōngguó ma?",
		en: "In the future, do you want to come to China?"
	},
	{
		id: 922,
		zh: "我以后不喝酒了",
		pi: "Wǒ yǐhòu bù hējiǔ le",
		en: "I will not drink alcohol in the future"
	},
	{
		id: 923,
		zh: "我们以后不在这里工作了",
		pi: "Wǒmen yǐhòu bù zài zhèlǐ gōngzuò le",
		en: "We will not work here in the future"
	},
	{
		id: 924,
		zh: "你儿子以后想做什么？",
		pi: "Nǐ érzi yǐhòu xiǎng zuò shénme?",
		en: "In the future, what does your son want to do?"
	},
	{
		id: 925,
		zh: "以后你们想去哪儿工作？",
		pi: "Yǐhòu nǐmen xiǎng qù nǎr gōngzuò?",
		en: "In the future, where would you like to work?"
	},
	{
		id: 926,
		zh: "以后我们会有一些新的同事",
		pi: "Yǐhòu wǒmen huì yǒu yīxiē xīn de tóngshì",
		en: "We will have some new co-workers in the future"
	},
	{
		id: 927,
		zh: "以后你可以住在这里",
		pi: "Yǐhòu nǐ kěyǐ zhù zài zhèlǐ",
		en: "In the future, you can live here"
	},
	{
		id: 928,
		zh: "他们以后会结婚吗？",
		pi: "Tāmen yǐhòu huì jiéhūn ma?",
		en: "Will they get married in the future?"
	},
	{
		id: 929,
		zh: "你以后不要跟他见面了",
		pi: "Nǐ yǐhòu bùyào gēn tā jiànmiàn le",
		en: "In the future, stop seeing him"
	},
	{
		id: 930,
		zh: "昨天我去了酒吧",
		pi: "Zuótiān wǒ qù le jiǔbā",
		en: "Yesterday I went to the bar"
	},
	{
		id: 931,
		zh: "我昨天去了酒吧",
		pi: "Wǒ zuótiān qù le jiǔbā",
		en: "I went to the bar yesterday"
	},
	{
		id: 932,
		zh: "下个星期他要回国",
		pi: "Xià gè xīngqī tā yào huí guó",
		en: "Next week he is going back to his country"
	},
	{
		id: 933,
		zh: "他下个星期要回国",
		pi: "Tā xià gè xīngqī yào huí guó",
		en: "He is going back to his country next week"
	},
	{
		id: 934,
		zh: "明年我要开一个公司",
		pi: "Míngnián wǒ yào kāi yī gè gōngsī",
		en: "Next year I want to open a company"
	},
	{
		id: 935,
		zh: "我明年要开一个公司",
		pi: "Wǒ míngnián yào kāi yī gè gōngsī",
		en: "I want to open a company next year"
	},
	{
		id: 936,
		zh: "下个月我们结婚吧？",
		pi: "Xià gè yuè wǒmen jiéhūn ba?",
		en: "Next month shall we get married?"
	},
	{
		id: 937,
		zh: "我们下个月结婚吧？",
		pi: "Wǒmen xià gè yuè jiéhūn ba?",
		en: "Shall we get married next month?"
	},
	{
		id: 938,
		zh: "现在你能来我办公室吗？",
		pi: "Xiànzài nǐ néng lái wǒ bàngōngshì ma?",
		en: "Now you can come to my office?"
	},
	{
		id: 939,
		zh: "你现在能来我办公室吗？",
		pi: "Nǐ xiànzài néng lái wǒ bàngōngshì ma?",
		en: "Can you come to my office now?"
	},
	{
		id: 940,
		zh: "一两天",
		pi: "yī liǎng tiān",
		en: "one or two days"
	},
	{
		id: 941,
		zh: "三四个人",
		pi: "sān sì gè rén",
		en: "three or four people"
	},
	{
		id: 942,
		zh: "老板昨天喝了七八瓶胡萝卜汁",
		pi: "Lǎobǎn zuótiān hē le qī bā píng húluóbo zhī.",
		en: "The boss drank 7 or 8 bottles of carrot juice yesterday"
	},
	{
		id: 943,
		zh: "这个词我们学过两三次了",
		pi: "Zhège cí wǒmen xué guo liǎng sān cì le",
		en: "We've studied this word two or three times now"
	},
	{
		id: 944,
		zh: "我等了你三四个小时",
		pi: "Wǒ děng le nǐ sān sì gè xiǎoshí",
		en: "I waited for you for three or four hours"
	},
	{
		id: 945,
		zh: "他们七八年没见面了",
		pi: "Tāmen qī bā nián méi jiànmiàn le",
		en: "They haven't seen each other for seven or eight years"
	},
	{
		id: 946,
		zh: "要做完这个工作需要一两个月",
		pi: "Yào zuò wán zhège gōngzuò xūyào yī liǎng gè yuè",
		en: "To complete this work, you need one to two months"
	},
	{
		id: 947,
		zh: "他们家的孩子五六岁了吧",
		pi: "Tāmen jiā de háizi wǔ liù suì le ba",
		en: "Their child is about five or six years old"
	},
	{
		id: 948,
		zh: "这件衣服只要七八十块钱",
		pi: "Zhè jiàn yīfu zhǐ yào qī bā shí kuài qián",
		en: "This clothing only costs seventy to eighty kuai"
	},
	{
		id: 949,
		zh: "这几本书花了我两三百",
		pi: "Zhè jǐ běn shū huā le wǒ liǎng sān bǎi",
		en: "These few books cost me two or three hundred kuai"
	},
	{
		id: 950,
		zh: "一万",
		pi: "yīwàn",
		en: "10.000"
	},
	{
		id: 951,
		zh: "一万二",
		pi: "yīwàn èr",
		en: "12.000"
	},
	{
		id: 952,
		zh: "一万三千两百",
		pi: "yīwàn sānqiān liǎngbǎi",
		en: "13.200"
	},
	{
		id: 953,
		zh: "五万六千七百",
		pi: "wǔwàn liùqiān qībǎi",
		en: "56.700"
	},
	{
		id: 954,
		zh: "十亿",
		pi: "shí yì",
		en: "Billion"
	},
	{
		id: 955,
		zh: "亿",
		pi: "yì",
		en: "Hundred million"
	},
	{
		id: 956,
		zh: "千万",
		pi: "qiān wàn",
		en: "Ten million"
	},
	{
		id: 957,
		zh: "百万",
		pi: "bǎi wàn",
		en: "Million"
	},
	{
		id: 958,
		zh: "十万",
		pi: "shí wàn",
		en: "Hundred thousand"
	},
	{
		id: 959,
		zh: "万",
		pi: "wàn",
		en: "Ten thousand"
	},
	{
		id: 960,
		zh: "千",
		pi: "qiān",
		en: "Thousand"
	},
	{
		id: 961,
		zh: "百",
		pi: "bǎi",
		en: "Hundred"
	},
	{
		id: 962,
		zh: "一百万",
		pi: "yībǎi wàn",
		en: "1 million"
	},
	{
		id: 963,
		zh: "十四亿",
		pi: "shísì yì",
		en: "1.4 billion"
	},
	{
		id: 964,
		zh: "五万两千一百五十二",
		pi: "wǔwàn liǎngqiān yībǎi wǔshí-èr",
		en: "52,152"
	},
	{
		id: 965,
		zh: "二百九十一万四千六百八十",
		pi: "èrbǎi jiǔshí-yī wàn sìqiān liùbǎi bāshí",
		en: "2,914,680"
	},
	{
		id: 966,
		zh: "七百八十九万零二百九十八",
		pi: "qībǎi bāshí-jiǔ wàn líng èrbǎi jiǔshí-bā",
		en: "7,890,298"
	},
	{
		id: 967,
		zh: "两千七百二十一万四千八百九十六",
		pi: "liǎngqiān qībǎi èrshí-yī wàn sìqiān bābǎi jiǔshí-liù",
		en: "27,214,896"
	},
	{
		id: 968,
		zh: "五千三百七十九万八千两百五十",
		pi: "wǔqiān sānbǎi qīshí-jiǔ wàn bāqiān liǎngbǎi wǔshí",
		en: "53,798,250"
	},
	{
		id: 969,
		zh: "两百五十一亿五千八百三十六万七千二百",
		pi: "liǎngbǎi wǔshí-yī yì wǔqiān bābǎi sānshí-liù wàn qīqiān èrbǎi",
		en: "25,158,367,200"
	},
	{
		id: 970,
		zh: "两点零九分",
		pi: "liǎng diǎn líng jiǔ fēn",
		en: "2:09"
	},
	{
		id: 971,
		zh: "三点零八分",
		pi: "sān diǎn líng bā fēn",
		en: "3:08"
	},
	{
		id: 972,
		zh: "五点零三分",
		pi: "wǔ diǎn líng sān fēn",
		en: "5:03"
	},
	{
		id: 973,
		zh: "七点零一分",
		pi: "qī diǎn líng yī fēn",
		en: "7:01"
	},
	{
		id: 974,
		zh: "八点零五分",
		pi: "bā diǎn líng wǔ fēn",
		en: "8:05"
	},
	{
		id: 975,
		zh: "一点四十分",
		pi: "yī diǎn sìshí fēn",
		en: "1:40"
	},
	{
		id: 976,
		zh: "九点一刻",
		pi: "jiǔ diǎn yī kè",
		en: "9:15"
	},
	{
		id: 977,
		zh: "十二点一刻",
		pi: "shí'èr diǎn yī kè",
		en: "12:15"
	},
	{
		id: 978,
		zh: "六点三刻",
		pi: "liù diǎn sān kè",
		en: "6:45"
	},
	{
		id: 979,
		zh: "差五分三点",
		pi: "chà wǔ fēn sān diǎn",
		en: "five minutes til 3 o'clock"
	},
	{
		id: 980,
		zh: "十二点差三分",
		pi: "shí'èr diǎn chà sān fēn",
		en: "three minutes til 12 o'clock"
	},
	{
		id: 981,
		zh: "差五分八点半",
		pi: "chà wǔ fēn bā diǎn bàn",
		en: "five minutes til 8:30"
	},
	{
		id: 982,
		zh: "十点差两分",
		pi: "shí diǎn chà liǎng fēn",
		en: "two minutes til 10:00"
	},
	{
		id: 983,
		zh: "桌子上有几本书",
		pi: "Zhuōzi shàng yǒu jǐ běn shū",
		en: "There are a few books on the table"
	},
	{
		id: 984,
		zh: "只有几个人去过那个地方",
		pi: "Zhǐyǒu jǐ gè rén qù guo nàge dìfang",
		en: "Only a few people have been to that place"
	},
	{
		id: 985,
		zh: "从上海到东京坐飞机只要几个小时",
		pi: "Cóng Shànghǎi dào Dōngjīng zuò fēijī zhǐ yào jǐ gè xiǎoshí",
		en: "Flying from Shanghai to Tokyo only takes a few hours"
	},
	{
		id: 986,
		zh: "我每天都要喝几杯咖啡",
		pi: "Wǒ měi tiān dōu yào hē jǐ bēi kāfēi",
		en: "Every day I have to drink a couple cups of coffee"
	},
	{
		id: 987,
		zh: "老板今天开了几个重要的会",
		pi: "Lǎobǎn jīntiān kāi le jǐ gè zhòngyào de huì",
		en: "The boss had a few important meetings today"
	},
	{
		id: 988,
		zh: "他只想学几十个汉字",
		pi: "Tā zhǐ xiǎng xué jǐ shí gè Hànzì",
		en: "He only wants to study a few dozen Chinese characters"
	},
	{
		id: 989,
		zh: "我们公司有几十个员工",
		pi: "Wǒmen gōngsī yǒu jǐ shí gè yuángōng",
		en: "Our company has a few dozen employees"
	},
	{
		id: 990,
		zh: "他写过几十本书，我都喜欢",
		pi: "Tā xiě guo jǐ shí běn shū, wǒ dōu xǐhuan",
		en: "He wrote a few dozen books. I like them all"
	},
	{
		id: 991,
		zh: "这个年轻的演员演了几十部电影，我都喜欢",
		pi: "Zhège niánqīng de yǎnyuán yǎn le jǐ shí bù diànyǐng. Wǒ dōu xǐhuan",
		en: "This young actor has acted in dozens of movies. I like them all"
	},
	{
		id: 992,
		zh: "老板在国外有几十套房子",
		pi: "Lǎobǎn zài guówài yǒu jǐ shí tào fángzi",
		en: "The boss has a few dozen houses abroad"
	},
	{
		id: 993,
		zh: "妈妈每个月都给我几百块钱",
		pi: "Māma měi gè yuè dōu gěi wǒ jǐ bǎi kuài qián",
		en: "Mom gives me a couple hundred dollars every month"
	},
	{
		id: 994,
		zh: "这个月我们卖了几千本书",
		pi: "Zhège yuè wǒmen mài le jǐ qiān běn shū",
		en: "We sold a couple thousand books this month"
	},
	{
		id: 995,
		zh: "几百家外国公司参加了这个大会",
		pi: "Jǐ bǎi jiā wàiguó gōngsī cānjiā le zhège dàhuì",
		en: "Several hundred foreign companies attended this conference"
	},
	{
		id: 996,
		zh: "这篇文章有几万个字，太长了",
		pi: "Zhè piān wénzhāng yǒu jǐ wàn gè zì, tài cháng le",
		en: "This article has tens of thousands of characters. It's too long"
	},
	{
		id: 997,
		zh: "我认识一个朋友，她有几百双鞋",
		pi: "Wǒ rènshi yī gè péngyou, tā yǒu jǐ bǎi shuāng xié",
		en: "I have a friend that has a couple hundred pairs of shoes"
	},
	{
		id: 998,
		zh: "他读了好几遍",
		pi: "Tā dú le hǎojǐ biàn",
		en: "He's read quite a few times"
	},
	{
		id: 999,
		zh: "我有好几个室友",
		pi: "Wǒ yǒu hǎojǐ gè shìyǒu",
		en: "I have quite a few roommates"
	},
	{
		id: 1000,
		zh: "我奶奶有好几个孩子",
		pi: "Wǒ nǎinai yǒu hǎojǐ gè háizi",
		en: "My grandma has quite a few children"
	},
	{
		id: 1001,
		zh: "他吃了好几碗米饭",
		pi: "Tā chī le hǎojǐ wǎn mǐfàn",
		en: "He ate quite a few bowls of rice"
	},
	{
		id: 1002,
		zh: "我们去过好几次北京",
		pi: "Wǒmen qù guo hǎojǐ cì Běijīng",
		en: "We've been to Beijing quite a few times"
	},
	{
		id: 1003,
		zh: "我饿了",
		pi: "Wǒ è le",
		en: "I'm hungry"
	},
	{
		id: 1004,
		zh: "孩子们都累了",
		pi: "Háizi men dōu lèi le",
		en: "The kids are all tired"
	},
	{
		id: 1005,
		zh: "妈妈老了",
		pi: "Māma lǎo le",
		en: "Mom has gotten old"
	},
	{
		id: 1006,
		zh: "你胖了",
		pi: "Nǐ pàng le",
		en: "You've gotten fat"
	},
	{
		id: 1007,
		zh: "你是不是生气了？",
		pi: "Nǐ shì bu shì shēngqì le?",
		en: "Are you mad?"
	},
	{
		id: 1008,
		zh: "下雨了",
		pi: "Xià yǔ le",
		en: "It's raining"
	},
	{
		id: 1009,
		zh: "宝宝会说话了",
		pi: "Bǎobao huì shuōhuà le",
		en: "The baby can speak now"
	},
	{
		id: 1010,
		zh: "他当经理了",
		pi: "Tā dāng jīnglǐ le",
		en: "He became a manager"
	},
	{
		id: 1011,
		zh: "你有女朋友了？",
		pi: "Nǐ yǒu nǚpéngyou le?",
		en: "You have a girlfriend now?"
	},
	{
		id: 1012,
		zh: "我男朋友找到新工作了",
		pi: "Wǒ nánpéngyou zhǎodào xīn gōngzuò le",
		en: "My boyfriend has found a new job"
	},
	{
		id: 1013,
		zh: "我不买了",
		pi: "Wǒ bù mǎi le",
		en: "I'm not buying it now"
	},
	{
		id: 1014,
		zh: "我不回家吃晚饭了",
		pi: "Wǒ bù huí jiā chī wǎnfàn le",
		en: "I'm not going to go home for dinner tonight"
	},
	{
		id: 1015,
		zh: "我不去看电影了",
		pi: "Wǒ bù qù kàn diànyǐng le",
		en: "I decided not to go to the movies"
	},
	{
		id: 1016,
		zh: "我不结婚了",
		pi: "Wǒ bù jiéhūn le",
		en: "I'm not getting married"
	},
	{
		id: 1017,
		zh: "太贵了",
		pi: "Tài guì le",
		en: "That's too expensive"
	},
	{
		id: 1018,
		zh: "好吧，我们可以看看别的",
		pi: "Hǎo ba, wǒmen kěyǐ kànkan biéde",
		en: "All right, we can take a look at something else"
	},
	{
		id: 1019,
		zh: "下午我不在家，你可以晚上来吗？",
		pi: "Xiàwǔ wǒ bù zài jiā, nǐ kěyǐ wǎnshang lái ma?",
		en: "This afternoon I won't be home. Can you come by this evening?"
	},
	{
		id: 1020,
		zh: "行吧",
		pi: "Xíng ba",
		en: "All right"
	},
	{
		id: 1021,
		zh: "雨太大了，明天再去买吧",
		pi: "Yǔ tài dà le, míngtiān zài qù mǎi ba",
		en: "It's raining heavily. Let's go buy it tomorrow"
	},
	{
		id: 1022,
		zh: "好吧，但是明天一定要买到",
		pi: "Hǎo ba, dànshì míngtiān yídìng yào mǎidào",
		en: "Fine, but tomorrow we definitely have to buy it"
	},
	{
		id: 1023,
		zh: "可以带朋友吗？",
		pi: "Kěyǐ dài péngyou ma ?",
		en: "Can I bring friends?"
	},
	{
		id: 1024,
		zh: "行吧，但是不能带女孩",
		pi: "Xíng ba, dànshì bù néng dài nǚhái",
		en: "All right, but you can't bring girls"
	},
	{
		id: 1025,
		zh: "我今天不太舒服，你可以自己去吗？",
		pi: "Wǒ jīntiān bù tài shūfu, nǐ kěyǐ zìjǐ qù ma?",
		en: "I'm not feeling well today. Can you go by yourself?"
	},
	{
		id: 1026,
		zh: "好吧，那你休息吧",
		pi: "Hǎo ba, nà nǐ xiūxi ba",
		en: "All right, rest well then"
	},
	{
		id: 1027,
		zh: "A: 老板呢？ B: 他走了",
		pi: "A: Lǎobǎn ne? B: Tā zǒu le",
		en: "A: Where is the boss? B: He has (already) left"
	},
	{
		id: 1028,
		zh: "A: 孩子还在上大学吗？ B: 他们工作了",
		pi: "A: Háizi hái zài shàng dàxué ma? B: Tāmen gōngzuò le",
		en: "A: Are your kids still in college? B: They (already) work"
	},
	{
		id: 1029,
		zh: "A: 用我的车吧？ B: 谢谢，我们有车了",
		pi: "A: Yòng wǒ de chē ba? B: Xièxie, wǒmen yǒu chē le",
		en: "A: How about using my car? B: Thanks. We (already) have a car"
	},
	{
		id: 1030,
		zh: "A: 你要不要告诉他？ B: 他知道了",
		pi: "A: Nǐ yào bu yào gàosu tā? B: Tā zhīdào le",
		en: "A: Are you going to tell him? B: He (already) knows"
	},
	{
		id: 1031,
		zh: "A: 你应该问老师 B: 我问了",
		pi: "A: Nǐ yīnggāi wèn lǎoshī B: Wǒ wèn le",
		en: "A: You should ask the teacher B: I've (already) asked"
	},
	{
		id: 1032,
		zh: "他们到了",
		pi: "Tāmen dào le",
		en: "They have arrived"
	},
	{
		id: 1033,
		zh: "我买了",
		pi: "Wǒ mǎi le",
		en: "I've bought it"
	},
	{
		id: 1034,
		zh: "我们都去了",
		pi: "Wǒmen dōu qù le",
		en: "We all went"
	},
	{
		id: 1035,
		zh: "我找到了",
		pi: "Wǒ zhǎodào le",
		en: "I found it"
	},
	{
		id: 1036,
		zh: "我今天吃了早饭",
		pi: "Wǒ jīntiān chī le zǎofàn",
		en: "This morning I ate breakfast"
	},
	{
		id: 1037,
		zh: "她上个月去了北京",
		pi: "Tā shàng gè yuè qù le Běijīng",
		en: "Last month she went to Beijing"
	},
	{
		id: 1038,
		zh: "中午我见了朋友",
		pi: "Zhōngwǔ wǒ jiàn le péngyou",
		en: "At noon I met a friend"
	},
	{
		id: 1039,
		zh: "老师问了五个问题",
		pi: "Lǎoshī wèn le wǔ gè wèntí",
		en: "The teacher asked five questions"
	},
	{
		id: 1040,
		zh: "我买了三本书",
		pi: "Wǒ mǎi le sān běn shū",
		en: "I bought three books"
	},
	{
		id: 1041,
		zh: "我喝了两杯咖啡",
		pi: "Wǒ hē le liǎng bēi kāfēi",
		en: "I drank two cups of coffee"
	},
	{
		id: 1042,
		zh: "上个月我去台湾了",
		pi: "Shàng gè yuè wǒ qù Táiwān le",
		en: "I went to Taiwan last month"
	},
	{
		id: 1043,
		zh: "昨天她来我家吃饭了",
		pi: "Zuótiān tā lái wǒ jiā chīfàn le",
		en: "She came to my place and ate dinner yesterday"
	},
	{
		id: 1044,
		zh: "我们上周去北京开会了",
		pi: "Wǒmen shàng zhōu qù Běijīng kāihuì le",
		en: "We went to Beijing and had a meeting there last week"
	},
	{
		id: 1045,
		zh: "我和朋友去商场买衣服了",
		pi: "Wǒ hé péngyou qù shāngchǎng mǎi yīfu le",
		en: "I went to the mall with my friend and bought some clothes"
	},
	{
		id: 1046,
		zh: "你学过中文吗？",
		pi: "Nǐ xué guo Zhōngwén ma?",
		en: "Have you ever studied Chinese?"
	},
	{
		id: 1047,
		zh: "你见过那个人吗？",
		pi: "Nǐ jiàn guo nàge rén ma?",
		en: "Have you seen that person before?"
	},
	{
		id: 1048,
		zh: "我们来过这个地方",
		pi: "Wǒmen lái guo zhège dìfang",
		en: "We've been to this place before"
	},
	{
		id: 1049,
		zh: "我也吃过日本菜",
		pi: "Wǒ yě chī guo Rìběn cài",
		en: "I've also eaten Japanese food before"
	},
	{
		id: 1050,
		zh: "你看过这个电影吗？",
		pi: "Nǐ kàn guo zhège diànyǐng ma?",
		en: "Have you seen this movie?"
	},
	{
		id: 1051,
		zh: "我没想过这个问题",
		pi: "Wǒ méi xiǎng guo zhège wèntí",
		en: "I've never thought about this question before"
	},
	{
		id: 1052,
		zh: "我没学过这个词",
		pi: "Wǒ méi xué guo zhège cí",
		en: "I have never studied this word before"
	},
	{
		id: 1053,
		zh: "妈妈没买过很贵的衣服",
		pi: "Māma méi mǎi guo hěn guì de yīfu",
		en: "Mom has never bought any expensive clothes before"
	},
	{
		id: 1054,
		zh: "我们都没坐过飞机",
		pi: "Wǒmen dōu méi zuò guo fēijī",
		en: "None of us has ever been on a airplane before"
	},
	{
		id: 1055,
		zh: "你们没见过美女吗？",
		pi: "Nǐmen méi jiàn guo měinǚ ma?",
		en: "Have you never seen beautiful girls before?"
	},
	{
		id: 1056,
		zh: "我不想吃了",
		pi: "Wǒ bù xiǎng chī le",
		en: "I don't want to eat anymore"
	},
	{
		id: 1057,
		zh: "你不喜欢我了吗？",
		pi: "Nǐ bù xǐhuan wǒ le ma?",
		en: "You don't like me anymore?"
	},
	{
		id: 1058,
		zh: "你们不能打了",
		pi: "Nǐmen bù néng dǎ le",
		en: "You can't fight anymore"
	},
	{
		id: 1059,
		zh: "没有纸了",
		pi: "Méiyǒu zhǐ le",
		en: "There's no paper anymore"
	},
	{
		id: 1060,
		zh: "手机没电了",
		pi: "Shǒujī méi diàn le",
		en: "My cell phone has run out of power"
	},
	{
		id: 1061,
		zh: "他没有家了",
		pi: "Tā méiyǒu jiā le",
		en: "He doesn't have a home anymore"
	},
	{
		id: 1062,
		zh: "我已经不住这里了",
		pi: "Wǒ yǐjīng bù zhù zhèlǐ le",
		en: "I don't live here anymore"
	},
	{
		id: 1063,
		zh: "他已经不在这儿工作了",
		pi: "Tā yǐjīng bù zài zhèr gōngzuò le",
		en: "He doesn't work here anymore"
	},
	{
		id: 1064,
		zh: "他们已经不在一起了",
		pi: "Tāmen yǐjīng bù zài yīqǐ le",
		en: "They are no longer together"
	},
	{
		id: 1065,
		zh: "我们已经没有钱了",
		pi: "Wǒmen yǐjīng méiyǒu qián le",
		en: "We all don't have money anymore"
	},
	{
		id: 1066,
		zh: "知道了",
		pi: "Zhīdào le",
		en: "Got it. / I see"
	},
	{
		id: 1067,
		zh: "懂了",
		pi: "Dǒng le",
		en: "Now I understand"
	},
	{
		id: 1068,
		zh: "我20岁了",
		pi: "Wǒ èrshí suì le",
		en: "I'm 20 years old now"
	},
	{
		id: 1069,
		zh: "吃饭了",
		pi: "Chīfàn le",
		en: "Time to eat"
	},
	{
		id: 1070,
		zh: "我走了",
		pi: "Wǒ zǒu le",
		en: "I'm leaving now"
	},
	{
		id: 1071,
		zh: "他来了",
		pi: "Tā lái le",
		en: "He's coming over now. / He's on the way"
	},
	{
		id: 1072,
		zh: "上课了",
		pi: "Shàngkè le",
		en: "Class begins now"
	},
	{
		id: 1073,
		zh: "我去睡觉了",
		pi: "Wǒ qù shuìjiào le",
		en: "I'm going to bed now"
	},
	{
		id: 1074,
		zh: "快点儿，开会了",
		pi: "Kuài diǎnr, kāihuì le",
		en: "Hurry up, it's time for the meeting now"
	},
	{
		id: 1075,
		zh: "到你了",
		pi: "Dào nǐ le",
		en: "It's your turn now"
	},
	{
		id: 1076,
		zh: "我不要回家。还早呢",
		pi: "Wǒ bù yào huíjiā. Hái zǎo ne",
		en: "I don't want to go home. It's still early"
	},
	{
		id: 1077,
		zh: "太远了，坐火车要十个小时呢",
		pi: "Tài yuǎn le, zuò huǒchē yào shí gè xiǎoshí ne",
		en: "It's too far. By train, it'll take 10 hours"
	},
	{
		id: 1078,
		zh: "我找了你很久呢，你去哪里了？",
		pi: "Wǒ zhǎo le nǐ hěn jiǔ ne, nǐ qù nǎlǐ le?",
		en: "I looked for you for quite a while. Where did you go?"
	},
	{
		id: 1079,
		zh: "雨还很大呢，我们不要出去了",
		pi: "Yǔ hái hěn dàne, wǒmen bùyào chūqù le",
		en: "And it's raining really heavily. Let's just not go out"
	},
	{
		id: 1080,
		zh: "你喝吧，还有很多可乐呢",
		pi: "Nǐ hē ba, háiyǒu hěn duō kělène",
		en: "Drink some. There's a lot of cola left"
	},
	{
		id: 1081,
		zh: "爸爸在工作呢，不能和你一起玩",
		pi: "Bàba zài gōngzuò ne, bù néng hé nǐ yīqǐ wán",
		en: "Daddy's working. He can't play with you"
	},
	{
		id: 1082,
		zh: "他还没回来呢",
		pi: "Tā hái méi huílái ne",
		en: "He hasn't come back yet"
	},
	{
		id: 1083,
		zh: "我们的工作还有很多呢",
		pi: "Wǒmen de gōngzuò hái yǒu hěn duō ne",
		en: "We still have a lot of work"
	},
	{
		id: 1084,
		zh: "我们一起吃饭吧，时间还有很多呢",
		pi: "Wǒmen yīqǐ chīfàn ba, shíjiān háiyǒu hěn duō ne",
		en: "Let's eat together. We still have a lot of time"
	},
	{
		id: 1085,
		zh: "你怎么还在吃呢？",
		pi: "Nǐ zěnme hái zài chī ne?",
		en: "How is it that you're still eating?"
	},
	{
		id: 1086,
		zh: "对啊",
		pi: "Duì a",
		en: "You're right"
	},
	{
		id: 1087,
		zh: "这里好漂亮啊",
		pi: "Zhèlǐ hǎo piàoliang a",
		en: "This place is so pretty"
	},
	{
		id: 1088,
		zh: "你家真大啊",
		pi: "Nǐ jiā zhēn dà a",
		en: "Your house is so big"
	},
	{
		id: 1089,
		zh: "学中文真难啊",
		pi: "Xué Zhōngwén zhēn nán a",
		en: "Learning Chinese is so hard"
	},
	{
		id: 1090,
		zh: "好香啊！什么东西？",
		pi: "Hǎo xiāng a! Shénme dōngxi?",
		en: "It smells great! What is it?"
	},
	{
		id: 1091,
		zh: "是啊，我也觉得",
		pi: "Shì a, wǒ yě juéde",
		en: "Definitely, I think so too"
	},
	{
		id: 1092,
		zh: "行啊",
		pi: "Xíng a",
		en: "All right"
	},
	{
		id: 1093,
		zh: "可以啊",
		pi: "Kěyǐ a",
		en: "It's fine"
	},
	{
		id: 1094,
		zh: "小心啊",
		pi: "Xiǎoxīn a",
		en: "Be careful"
	},
	{
		id: 1095,
		zh: "吃啊",
		pi: "Chī a",
		en: "Eat some"
	},
	{
		id: 1096,
		zh: "你走不走啊？",
		pi: "Nǐ zǒu bu zǒu a?",
		en: "Are you going or what?"
	},
	{
		id: 1097,
		zh: "你吃不吃啊？",
		pi: "Nǐ chī bu chī a?",
		en: "Are you eating or not?"
	},
	{
		id: 1098,
		zh: "谁说的啊？",
		pi: "Shéi shuō de a?",
		en: "Who said so?"
	},
	{
		id: 1099,
		zh: "你傻啊？",
		pi: "Nǐ shǎ a?",
		en: "What are you, stupid?"
	},
	{
		id: 1100,
		zh: "看什么啊？没见过漂亮姑娘啊？",
		pi: "Kàn shénme a? Méi jiàn guo piàoliang gūniang a?",
		en: "What are you looking at? Have you never seen a pretty girl before?"
	},
	{
		id: 1101,
		zh: "这不太好吧",
		pi: "Zhè bù tài hǎo ba",
		en: "This isn't so good"
	},
	{
		id: 1102,
		zh: "算了吧",
		pi: "Suàn le ba",
		en: "Let's forget it"
	},
	{
		id: 1103,
		zh: "应该是吧",
		pi: "Yīnggāi shì ba",
		en: "It should be"
	},
	{
		id: 1104,
		zh: "钱太少了吧",
		pi: "Qián tài shǎo le ba",
		en: "It's too little money"
	},
	{
		id: 1105,
		zh: "再等一等吧",
		pi: "Zài děng yī děng ba",
		en: "Wait a little longer"
	},
	{
		id: 1106,
		zh: "太晚了，不要走了吧",
		pi: "Tài wǎn le, bùyào zǒu le ba",
		en: "It's too late now, don't leave"
	},
	{
		id: 1107,
		zh: "你们早点来吧",
		pi: "Nǐmen zǎo diǎn lái ba",
		en: "Come a little earlier"
	},
	{
		id: 1108,
		zh: "快点吧，要迟到了",
		pi: "Kuài diǎn ba, yào chídào le",
		en: "Please hurry, we're going to be late"
	},
	{
		id: 1109,
		zh: "太贵了吧，我不买了",
		pi: "Tài guì le ba, wǒ bù mǎi le",
		en: "It's too expensive. I'm not buying it"
	},
	{
		id: 1110,
		zh: "那个地方太远了吧，我不想去",
		pi: "Nàge dìfang tài yuǎn le ba，wǒ bù xiǎng qù",
		en: "That place is too far away. I don't want to go"
	},
	{
		id: 1111,
		zh: "小李的房子",
		pi: "Xiǎo Lǐ de fángzi",
		en: "Xiao Li's house"
	},
	{
		id: 1112,
		zh: "红色的自行车",
		pi: "hóngsè de zìxíngchē",
		en: "red bicycle"
	},
	{
		id: 1113,
		zh: "我的手机",
		pi: "wǒ de shǒujī",
		en: "my cell phone"
	},
	{
		id: 1114,
		zh: "我们的老师",
		pi: "wǒmen de lǎoshī",
		en: "our teacher"
	},
	{
		id: 1115,
		zh: "漂亮的衣服",
		pi: "piàoliang de yīfu",
		en: "beautiful clothes"
	},
	{
		id: 1116,
		zh: "热闹的酒吧",
		pi: "rènao de jiǔbā",
		en: "a boisterous bar"
	},
	{
		id: 1117,
		zh: "我女朋友的公司",
		pi: "wǒ nǚpéngyou de gōngsī",
		en: "my girlfriend's company"
	},
	{
		id: 1118,
		zh: "做得很好",
		pi: "zuò de hěn hǎo",
		en: "do very well"
	},
	{
		id: 1119,
		zh: "说得太快",
		pi: "shuō de tài kuài",
		en: "speak too fast"
	},
	{
		id: 1120,
		zh: "玩得很开心",
		pi: "wán de hěn kāixīn",
		en: "play very happily"
	},
	{
		id: 1121,
		zh: "开得很快",
		pi: "kāi de hěn kuài",
		en: "drive very fast"
	},
	{
		id: 1122,
		zh: "住得很舒服",
		pi: "zhù de hěn shūfu",
		en: "live very comfortably"
	},
	{
		id: 1123,
		zh: "生气地说",
		pi: "shēngqì de shuō",
		en: "angrily say"
	},
	{
		id: 1124,
		zh: "开心地笑",
		pi: "kāixīn de xiào",
		en: "happily laugh"
	},
	{
		id: 1125,
		zh: "慢慢地走",
		pi: "mànmàn de zǒu",
		en: "slowly walk"
	},
	{
		id: 1126,
		zh: "伤心地哭",
		pi: "shāngxīn de kū",
		en: "sadly cry"
	},
	{
		id: 1127,
		zh: "认真地听",
		pi: "rènzhēn de tīng",
		en: "carefully listen"
	},
	{
		id: 1128,
		zh: "今天的作业你做得不好，因为你没认真地听课",
		pi: "Jīntiān de zuòyè nǐ zuò de bù hǎo, yīnwèi nǐ méi rènzhēn de tīngkè",
		en: "You didn't do today's homework well because you didn't listen attentively in class"
	},
	{
		id: 1129,
		zh: "她吃过了",
		pi: "Tā chī guo le",
		en: "She has eaten (already)"
	},
	{
		id: 1130,
		zh: "牙刷过了",
		pi: "Yá shuā guo le",
		en: "I've brushed my teeth (already)"
	},
	{
		id: 1131,
		zh: "洗过了",
		pi: "Xǐ guo le",
		en: "I've showered (already)"
	},
	{
		id: 1132,
		zh: "我们看过了",
		pi: "Wǒmen kàn guo le",
		en: "We've seen it (already)"
	},
	{
		id: 1133,
		zh: "他们见过了",
		pi: "Tāmen jiàn guo le",
		en: "They've met (already)"
	},
	{
		id: 1134,
		zh: "你吃过饭了吗？",
		pi: "Nǐ chī guo fàn le ma?",
		en: "Have you eaten (already)?"
	},
	{
		id: 1135,
		zh: "我刷过牙了",
		pi: "Wǒ shuā guo yá le",
		en: "I have brushed my teeth (already)"
	},
	{
		id: 1136,
		zh: "他洗过澡了",
		pi: "Tā xǐ guo zǎo le",
		en: "He has showered (already)"
	},
	{
		id: 1137,
		zh: "我给他打过电话了",
		pi: "Wǒ gěi tā dǎ guo diànhuà le",
		en: "I called him (already)"
	},
	{
		id: 1138,
		zh: "客户看过合同了吗？",
		pi: "Kèhù kàn guo hétong le ma?",
		en: "Has the client read the contract (already)?"
	},
	{
		id: 1139,
		zh: "她已经吃过饭了",
		pi: "Tā yǐjīng chī guo fàn le",
		en: "She has already eaten (a meal)"
	},
	{
		id: 1140,
		zh: "我已经刷过牙了",
		pi: "Wǒ yǐjīng shuā guo yá le",
		en: "I have already brushed my teeth"
	},
	{
		id: 1141,
		zh: "他已经洗过澡了",
		pi: "Tā yǐjīng xǐ guo zǎo le",
		en: "He has already had a shower"
	},
	{
		id: 1142,
		zh: "A: 她想吃饭吗？ B: 她已经吃过饭了",
		pi: "A: Tā xiǎng chīfàn ma? B: Tā yǐjīng chī guo fàn le",
		en: "A: Does she want to eat? B: She has already eaten"
	},
	{
		id: 1143,
		zh: "A: 别忘记刷牙 B: 我已经刷过牙了",
		pi: "A: Bié wàngjì shuā yá B: Wǒ yǐjīng shuā guo yá le",
		en: "A: Don't forget to brush your teeth B: I have already brushed my teeth"
	},
	{
		id: 1144,
		zh: "A: 他应该洗澡 B: 他已经洗过了",
		pi: "A: Tā yīnggāi xǐzǎo B: Tā yǐjīng xǐ guo le",
		en: "A: He should take a shower B: He has already showered"
	},
	{
		id: 1145,
		zh: "小李比小张高",
		pi: "Xiǎo Lǐ bǐ Xiǎo Zhāng gāo",
		en: "Xiao Li is taller than Xiao Zhang"
	},
	{
		id: 1146,
		zh: "小张比小李矮",
		pi: "Xiǎo Zhāng bǐ Xiǎo Lǐ ǎi",
		en: "Xiao Zhang is shorter than Xiao Li"
	},
	{
		id: 1147,
		zh: "他比老师聪明",
		pi: "Tā bǐ lǎoshī cōngming",
		en: "He is smarter than the teacher"
	},
	{
		id: 1148,
		zh: "上海比纽约大吗？",
		pi: "Shànghǎi bǐ Niǔyuē dà ma?",
		en: "Is Shanghai bigger than New York?"
	},
	{
		id: 1149,
		zh: "她比她妈妈漂亮",
		pi: "Tā bǐ tā māma piàoliang",
		en: "She is prettier than her mother"
	},
	{
		id: 1150,
		zh: "星巴克的咖啡比这里的咖啡贵",
		pi: "Xīngbākè de kāfēi bǐ zhèlǐ de kāfēi guì",
		en: "The coffee at Starbucks is more expensive than the coffee here"
	},
	{
		id: 1151,
		zh: "地铁比公交车方便",
		pi: "Dìtiě bǐ gōngjiāochē fāngbiàn",
		en: "The subway is more convenient than the bus"
	},
	{
		id: 1152,
		zh: "他比我高",
		pi: "Tā bǐ wǒ gāo",
		en: "He's taller than me"
	},
	{
		id: 1153,
		zh: "我跟他一样高",
		pi: "Wǒ gēn tā yīyàng gāo",
		en: "I'm as tall as him"
	},
	{
		id: 1154,
		zh: "小李比小张更高",
		pi: "Xiǎo Lǐ bǐ Xiǎo Zhāng gèng gāo",
		en: "Xiao Li is even taller than Xiao Zhang"
	},
	{
		id: 1155,
		zh: "我哥哥比我更高",
		pi: "Wǒ gēge bǐ wǒ gèng gāo",
		en: "My big brother is even taller than me"
	},
	{
		id: 1156,
		zh: "你男朋友比我男朋友更帅",
		pi: "Nǐ nánpéngyou bǐ wǒ nánpéngyou gèng shuài",
		en: "Your boyfriend is even more handsome than mine"
	},
	{
		id: 1157,
		zh: "这里的冬天比纽约的冬天更冷",
		pi: "Zhèlǐ de dōngtiān bǐ Niǔyuē de dōngtiān gèng lěng",
		en: "The winter here is even colder than it is in New York"
	},
	{
		id: 1158,
		zh: "中文语法比汉字更好玩",
		pi: "Zhōngwén yǔfǎ bǐ Hànzì gèng hǎowán",
		en: "Chinese grammar is even more fun than Chinese characters"
	},
	{
		id: 1159,
		zh: "你的问题比我的问题更麻烦",
		pi: "Nǐ de wèntí bǐ wǒ de wèntí gèng máfan",
		en: "Your problem is even more troublesome than mine"
	},
	{
		id: 1160,
		zh: "从2004年到2008年",
		pi: "cóng èr-líng-líng-sì nián dào èr-líng-líng-bā nián",
		en: "from 2004 to 2008"
	},
	{
		id: 1161,
		zh: "从一号到五号都在下雨",
		pi: "Cóng yī hào dào wǔ hào dōu zài xiàyǔ",
		en: "From the first to the fifth, it's been raining non-stop"
	},
	{
		id: 1162,
		zh: "老板从周二到周五都要出差",
		pi: "Lǎobǎn cóng Zhōuèr dào Zhōuwǔ dōu yào chūchāi",
		en: "From Tuesday until Friday the boss will go on a business trip"
	},
	{
		id: 1163,
		zh: "她从18岁到现在都一个人住",
		pi: "Tā cóng shíbā suì dào xiànzài dōu yīgèrén zhù",
		en: "She's lived alone since she was 18 until now"
	},
	{
		id: 1164,
		zh: "你不能从早到晚不吃东西",
		pi: "Nǐ bù néng cóng zǎo dào wǎn bù chī dōngxi",
		en: "You can't eat nothing from morning to night"
	},
	{
		id: 1165,
		zh: "从南京西路到南京东路",
		pi: "cóng Nánjīng Xī Lù dào Nánjīng Dōng Lù",
		en: "from West Nanjing Road to East Nanjing Road"
	},
	{
		id: 1166,
		zh: "从酒店到机场不太远",
		pi: "Cóng jiǔdiàn dào jīchǎng bù tài yuǎn",
		en: "From the hotel to the airport is not too far"
	},
	{
		id: 1167,
		zh: "从上海到北京要几个小时",
		pi: "Cóng Shànghǎi dào Běijīng yào jǐ gè xiǎoshí",
		en: "From Shanghai to Beijing it takes a few hours"
	},
	{
		id: 1168,
		zh: "从你家到机场可以坐地铁吗？",
		pi: "Cóng nǐ jiā dào jīchǎng kěyǐ zuò dìtiě ma?",
		en: "From your place to the airport, can I take the subway?"
	},
	{
		id: 1169,
		zh: "从这里到我们公司，你会看见很多美女",
		pi: "Cóng zhèlǐ dào wǒmen gōngsī, nǐ huì kànjiàn hěn duō měinǚ",
		en: "From here to our company, you'll see many beautiful girls"
	},
	{
		id: 1170,
		zh: "小张没有小李高",
		pi: "Xiǎo Zhāng méiyǒu Xiǎo Lǐ gāo",
		en: "Xiao Zhang is not as tall as Xiao Li"
	},
	{
		id: 1171,
		zh: "小李没有小张矮",
		pi: "Xiǎo Lǐ méiyǒu Xiǎo Zhāng ǎi",
		en: "Xiao Li is not as short as Xiao Zhang"
	},
	{
		id: 1172,
		zh: "这个地方没有上海好玩",
		pi: "Zhège dìfang méiyǒu Shànghǎi hǎowán",
		en: "This place is not as fun as Shanghai"
	},
	{
		id: 1173,
		zh: "火车没有飞机快",
		pi: "Huǒchē méiyǒu fēijī kuài",
		en: "Trains are not as fast as airplanes"
	},
	{
		id: 1174,
		zh: "他没有他弟弟聪明",
		pi: "Tā méiyǒu tā dìdi cōngming",
		en: "He's not as smart as his younger brother"
	},
	{
		id: 1175,
		zh: "你们公司没有我们公司大",
		pi: "Nǐmen gōngsī méiyǒu wǒmen gōngsī dà",
		en: "Your company is not as big as ours"
	},
	{
		id: 1176,
		zh: "拼音没有汉字难",
		pi: "Pīnyīn méiyǒu Hànzì nán",
		en: "Pinyin is not as difficult as Chinese characters"
	},
	{
		id: 1177,
		zh: "坐公交车没有坐地铁方便",
		pi: "Zuò gōngjiāochē méiyǒu zuò dìtiě fāngbiàn",
		en: "Taking the bus is not as convenient as taking the metro"
	},
	{
		id: 1178,
		zh: "爸爸做的菜没有妈妈做的菜好吃",
		pi: "Bàba zuò de cài méiyǒu māma zuò de cài hǎochī",
		en: "The food dad cooks is not as tasty as the food mom cooks"
	},
	{
		id: 1179,
		zh: "妈妈要去超市",
		pi: "Māma yào qù chāoshì",
		en: "Mom will go to the supermarket"
	},
	{
		id: 1180,
		zh: "老板今天来公司吗？",
		pi: "Lǎobǎn jīntiān lái gōngsī ma?",
		en: "Is the boss coming into the office today?"
	},
	{
		id: 1181,
		zh: "你现在来南京路吧",
		pi: "Nǐ xiànzài lái Nánjīng Lù ba",
		en: "Come to Nanjing Road now"
	},
	{
		id: 1182,
		zh: "你不想来我们公司工作吗？",
		pi: "Nǐ bù xiǎng lái wǒmen gōngsī gōngzuò ma?",
		en: "Do you not want to come to work for our company?"
	},
	{
		id: 1183,
		zh: "去年她去美国工作了几个月",
		pi: "Qùnián tā qù Měiguó gōngzuò le jǐ gè yuè",
		en: "Last year she went to work in the USA for a few months"
	},
	{
		id: 1184,
		zh: "周末我喜欢去朋友家",
		pi: "Zhōumò wǒ xǐhuan qù péngyou jiā",
		en: "I like to go to my friends' places on the weekends"
	},
	{
		id: 1185,
		zh: "爸爸明天去北京出差",
		pi: "Bàba míngtiān qù Běijīng chūchāi",
		en: "Dad will go to Beijing on a business trip tomorrow"
	},
	{
		id: 1186,
		zh: "我今天不上班，你们可以来我家吃饭",
		pi: "Wǒ jīntiān bù shàngbān, nǐmen kěyǐ lái wǒ jiā chīfàn",
		en: "I don't have to go to work today. You can come to my home to eat dinner"
	},
	{
		id: 1187,
		zh: "请进",
		pi: "Qǐng jìn",
		en: "Please come in"
	},
	{
		id: 1188,
		zh: "请坐",
		pi: "Qǐng zuò",
		en: "Please sit down"
	},
	{
		id: 1189,
		zh: "请说",
		pi: "Qǐng shuō",
		en: "Please speak"
	},
	{
		id: 1190,
		zh: "请喝茶",
		pi: "Qǐng hē chá",
		en: "Please have some tea"
	},
	{
		id: 1191,
		zh: "请不要迟到",
		pi: "Qǐng bùyào chídào",
		en: "Please do not be late"
	},
	{
		id: 1192,
		zh: "请尝一尝",
		pi: "Qǐng cháng yī cháng",
		en: "Please have a taste"
	},
	{
		id: 1193,
		zh: "请你说得慢一点",
		pi: "Qǐng nǐ shuō de màn yīdiǎn",
		en: "Please speak more slowly"
	},
	{
		id: 1194,
		zh: "请你听老师的话",
		pi: "Qǐng nǐ tīng lǎoshī de huà",
		en: "Please listen to the teacher"
	},
	{
		id: 1195,
		zh: "请你离开",
		pi: "Qǐng nǐ líkāi",
		en: "Please leave"
	},
	{
		id: 1196,
		zh: "请问，洗手间在哪里？",
		pi: "Qǐng wèn, xǐshǒujiān zài nǎlǐ?",
		en: "Excuse me, where is the restroom?"
	},
	{
		id: 1197,
		zh: "你要什么？",
		pi: "Nǐ yào shénme?",
		en: "What do you want?"
	},
	{
		id: 1198,
		zh: "我要一杯水",
		pi: "Wǒ yào yī bēi shuǐ",
		en: "I want a cup of water"
	},
	{
		id: 1199,
		zh: "你们都要冰可乐吗？",
		pi: "Nǐmen dōu yào bīng kělè ma?",
		en: "Do you all want coke with ice?"
	},
	{
		id: 1200,
		zh: "你要茶还是咖啡？",
		pi: "Nǐ yào chá háishì kāfēi?",
		en: "Do you want tea or coffee?"
	},
	{
		id: 1201,
		zh: "我们要三碗米饭",
		pi: "Wǒmen yào sān wǎn mǐfàn",
		en: "We want three bowls of rice"
	},
	{
		id: 1202,
		zh: "你要喝什么酒？",
		pi: "Nǐ yào hē shénme jiǔ?",
		en: "What kind of wine do you want to drink?"
	},
	{
		id: 1203,
		zh: "爸爸要买一个新手机",
		pi: "Bàba yào mǎi yī gè xīn shǒujī",
		en: "Dad wants to buy a new cell phone"
	},
	{
		id: 1204,
		zh: "我要跟你一起去",
		pi: "Wǒ yào gēn nǐ yīqǐ qù",
		en: "I want to go with you"
	},
	{
		id: 1205,
		zh: "她要去大城市找工作",
		pi: "Tā yào qù dà chéngshì zhǎo gōngzuò",
		en: "She wants to go to a big city to find a job"
	},
	{
		id: 1206,
		zh: "周末你们要一起看电影吗？",
		pi: "Zhōumò nǐmen yào yīqǐ kàn diànyǐng ma?",
		en: "Do you want to go see a movie together this weekend?"
	},
	{
		id: 1207,
		zh: "你要早点睡觉",
		pi: "Nǐ yào zǎo diǎn shuìjiào",
		en: "You need to go to bed earlier"
	},
	{
		id: 1208,
		zh: "我们明天要上班",
		pi: "Wǒmen míngtiān yào shàngbān",
		en: "We need to work tomorrow"
	},
	{
		id: 1209,
		zh: "老板今天要见一个新客户",
		pi: "Lǎobǎn jīntiān yào jiàn yī gè xīn kèhù",
		en: "Today the boss needs to see a new client"
	},
	{
		id: 1210,
		zh: "老师太累了，要好好休息",
		pi: "Lǎoshī tài lèi le, yào hǎohǎo xiūxi",
		en: "The teacher is too tired. She needs to rest well"
	},
	{
		id: 1211,
		zh: "明天下雨，你要带伞",
		pi: "Míngtiān xiàyǔ, nǐ yào dài sǎn",
		en: "It's going to rain tomorrow; you need to bring an umbrella"
	},
	{
		id: 1212,
		zh: "星期五我们要开会",
		pi: "Xīngqīwǔ wǒmen yào kāihuì",
		en: "We are going to have a meeting on Friday"
	},
	{
		id: 1213,
		zh: "12点我要去吃饭",
		pi: "Shí'èr diǎn wǒ yào qù chīfàn",
		en: "I am going to go eat at 12 o'clock"
	},
	{
		id: 1214,
		zh: "老板下周要出差吗？",
		pi: "Lǎobǎn xià zhōu yào chūchāi ma?",
		en: "Is the boss going on a business trip next week?"
	},
	{
		id: 1215,
		zh: "他们明年要结婚了",
		pi: "Tāmen míngnián yào jiéhūn le",
		en: "They are going to get married next year"
	},
	{
		id: 1216,
		zh: "今年你要回家过年吗？",
		pi: "Jīnnián nǐ yào huíjiā guònián ma?",
		en: "Are you going to return home this year to celebrate the Chinese New Year?"
	},
	{
		id: 1217,
		zh: "在中国，你应该喝白酒",
		pi: "Zài Zhōngguó, nǐ yīnggāi hē báijiǔ",
		en: "In China, you should drink baijiu"
	},
	{
		id: 1218,
		zh: "我应该给你多少钱？",
		pi: "Wǒ yīnggāi gěi nǐ duōshao qián?",
		en: "How much money should I give you?"
	},
	{
		id: 1219,
		zh: "感冒的时候应该喝热水",
		pi: "Gǎnmào de shíhou yīnggāi hē rè shuǐ",
		en: "You should drink hot water when you have a cold"
	},
	{
		id: 1220,
		zh: "明天你应该八点半来公司",
		pi: "Míngtiān nǐ yīnggāi bādiǎn bàn lái gōngsī",
		en: "You should come to the office tomorrow at 8:30"
	},
	{
		id: 1221,
		zh: "他太累了，应该回家休息",
		pi: "Tā tài lèi le, yīnggāi huíjiā xiūxi",
		en: "He's too tired. He should go home and rest"
	},
	{
		id: 1222,
		zh: "你不应该告诉他",
		pi: "Nǐ bù yīnggāi gàosu tā",
		en: "You should not tell him"
	},
	{
		id: 1223,
		zh: "他不应该打人",
		pi: "Tā bù yīnggāi dǎ rén",
		en: "He should not hit people"
	},
	{
		id: 1224,
		zh: "我们不应该迟到",
		pi: "Wǒmen bù yīnggāi chídào",
		en: "We shouldn't be late"
	},
	{
		id: 1225,
		zh: "你们不应该笑她",
		pi: "Nǐmen bù yīnggāi xiào tā",
		en: "You shouldn't laugh at her"
	},
	{
		id: 1226,
		zh: "你们不应该拿别人的东西",
		pi: "Nǐmen bù yīnggāi ná biérén de dōngxi",
		en: "You should not take other people's stuff"
	},
	{
		id: 1227,
		zh: "明天你会来吗？",
		pi: "Míngtiān nǐ huì lái ma?",
		en: "Will you come tomorrow?"
	},
	{
		id: 1228,
		zh: "他会来看你吗？",
		pi: "Tā huì lái kàn nǐ ma?",
		en: "Will he come to see you?"
	},
	{
		id: 1229,
		zh: "明天会下雨吗？",
		pi: "Míngtiān huì xiàyǔ ma?",
		en: "Will it rain tomorrow?"
	},
	{
		id: 1230,
		zh: "我出去一下，很快会回来",
		pi: "Wǒ chūqù yīxià, hěnkuài huì huílái",
		en: "I'm going out for a little while. I'll come back very soon"
	},
	{
		id: 1231,
		zh: "老板会同意吗？",
		pi: "Lǎobǎn huì tóngyì ma?",
		en: "Will the boss agree?"
	},
	{
		id: 1232,
		zh: "你女儿会听你的话",
		pi: "Nǐ nǚér huì tīng nǐ de huà",
		en: "Your daughter will listen to you"
	},
	{
		id: 1233,
		zh: "下班以后，我会给你打电话",
		pi: "Xiàbān yǐhòu, wǒ huì gěi nǐ dǎ diànhuà",
		en: "After getting off work, I will give you a call"
	},
	{
		id: 1234,
		zh: "我们不会告诉你",
		pi: "Wǒmen bù huì gàosu nǐ",
		en: "We won't tell you"
	},
	{
		id: 1235,
		zh: "他不会跟你结婚",
		pi: "Tā bù huì gēn nǐ jiéhūn",
		en: "He won't marry you"
	},
	{
		id: 1236,
		zh: "今晚我不会在外面吃饭",
		pi: "Jīnwǎn wǒ bù huì zài wàimiàn chīfàn",
		en: "Tonight I will not eat out"
	},
	{
		id: 1237,
		zh: "你想去吗？",
		pi: "Nǐ xiǎng qù ma?",
		en: "Would you like to go?"
	},
	{
		id: 1238,
		zh: "我想吃面",
		pi: "Wǒ xiǎng chī miàn",
		en: "I would like to eat noodles"
	},
	{
		id: 1239,
		zh: "你想喝水吗？",
		pi: "Nǐ xiǎng hē shuǐ ma?",
		en: "Would you like to drink some water?"
	},
	{
		id: 1240,
		zh: "我们想看电视",
		pi: "Wǒmen xiǎng kàn diànshì",
		en: "We would like to watch TV"
	},
	{
		id: 1241,
		zh: "他想买一个大房子",
		pi: "Tā xiǎng mǎi yī gè dà fángzi",
		en: "He would like to buy a big apartment"
	},
	{
		id: 1242,
		zh: "他们不想去酒吧",
		pi: "Tāmen bù xiǎng qù jiǔbā",
		en: "They wouldn't like to go to the bar"
	},
	{
		id: 1243,
		zh: "你不想认识这个美女吗？",
		pi: "Nǐ bù xiǎng rènshi zhège měinǚ ma?",
		en: "Would you not like to know this beautiful lady?"
	},
	{
		id: 1244,
		zh: "我不想回家",
		pi: "Wǒ bù xiǎng huíjiā",
		en: "I wouldn't like to return home"
	},
	{
		id: 1245,
		zh: "那个地方很近，我不想开车",
		pi: "Nàge dìfang hěn jìn, wǒ bù xiǎng kāichē",
		en: "That place is so close. I would not like to drive"
	},
	{
		id: 1246,
		zh: "他不想花父母的钱",
		pi: "Tā bù xiǎng huā fùmǔ de qián",
		en: "He would not like to spend his parents' money"
	},
	{
		id: 1247,
		zh: "我要回家吃饭",
		pi: "Wǒ yào huíjiā chīfàn",
		en: "I want to go home and eat"
	},
	{
		id: 1248,
		zh: "你要去超市买东西吗？",
		pi: "Nǐ yào qù chāoshì mǎi dōngxi ma?",
		en: "Are you going to the supermarket to buy things?"
	},
	{
		id: 1249,
		zh: "他不想去图书馆看书",
		pi: "Tā bù xiǎng qù túshūguǎn kàn shū",
		en: "He doesn't want to go to the library and read"
	},
	{
		id: 1250,
		zh: "你打电话告诉他了吗？",
		pi: "Nǐ dǎ diànhuà gàosu tā le ma?",
		en: "Did you call and tell him?"
	},
	{
		id: 1251,
		zh: "我们要坐飞机去美国",
		pi: "Wǒmen yào zuò fēijī qù Měiguó",
		en: "We are going to take an airplane to go to the USA"
	},
	{
		id: 1252,
		zh: "你们可以上网买机票吗？",
		pi: "Nǐmen kěyǐ shàng wǎng mǎi jīpiào ma?",
		en: "Can you use the Internet to buy airplane tickets?"
	},
	{
		id: 1253,
		zh: "老板下周去北京开会",
		pi: "Lǎobǎn xià zhōu qù Běijīng kāi huì",
		en: "Next week the boss will go to Beijing to have a meeting"
	},
	{
		id: 1254,
		zh: "中国人都要回家过年",
		pi: "Zhōngguó rén dōu yào huíjiā guònián",
		en: "Chinese people all go back home for Chinese New Year"
	},
	{
		id: 1255,
		zh: "周末我喜欢自己买菜做饭",
		pi: "Zhōumò wǒ xǐhuan zìjǐ mǎi cài zuòfàn",
		en: "I like to buy food to cook for myself on the weekend"
	},
	{
		id: 1256,
		zh: "早上我先刷牙洗脸，再吃早饭",
		pi: "Zǎoshang wǒ xiān shuā yá xǐ liǎn, zài chī zǎofàn",
		en: "In the morning, I first brush my teeth and wash my face, and then I eat breakfast"
	},
	{
		id: 1257,
		zh: "这句话很难懂",
		pi: "Zhè jù huà hěn nán dǒng",
		en: "This sentence is hard to understand"
	},
	{
		id: 1258,
		zh: "汉语很难学",
		pi: "Hànyǔ hěn nán xué",
		en: "Mandarin is hard to learn"
	},
	{
		id: 1259,
		zh: "中国菜很难做",
		pi: "Zhōngguó cài hěn nán zuò",
		en: "Chinese food is hard to make"
	},
	{
		id: 1260,
		zh: "这个东西现在很难买",
		pi: "Zhège dōngxi xiànzài hěn nán mǎi",
		en: "This thing is really difficult to purchase now"
	},
	{
		id: 1261,
		zh: "这个汉字很难写",
		pi: "Zhège Hànzì hěn nán xiě",
		en: "This character is very difficult to write"
	},
	{
		id: 1262,
		zh: "你做的菜很难吃",
		pi: "Nǐ zuò de cài hěn nánchī",
		en: "The dishes you cook taste bad"
	},
	{
		id: 1263,
		zh: "这里的咖啡很难喝",
		pi: "Zhè lǐ de kāfēi hěn nánhē",
		en: "The coffee here tastes bad"
	},
	{
		id: 1264,
		zh: "这首歌很难听",
		pi: "Zhè shǒu gē hěn nántīng",
		en: "This song is terrible (hard to listen to)"
	},
	{
		id: 1265,
		zh: "这种花很难闻",
		pi: "Zhè zhǒng huā hěn nánwén",
		en: "This kind of flower smells bad"
	},
	{
		id: 1266,
		zh: "这件衣服很难看吗？",
		pi: "Zhè jiàn yīfu hěn nánkàn ma?",
		en: "Is this article of clothing ugly?"
	},
	{
		id: 1267,
		zh: "他学了一年中文",
		pi: "Tā xué le yī nián Zhōngwén",
		en: "He studied Chinese for a year"
	},
	{
		id: 1268,
		zh: "我看了一个晚上书",
		pi: "Wǒ kàn le yī gè wǎnshang shū",
		en: "I read books all evening"
	},
	{
		id: 1269,
		zh: "他做了八年经理",
		pi: "Tā zuò le bā nián jīnglǐ",
		en: "He worked as a manager for eight years"
	},
	{
		id: 1270,
		zh: "我们坐了十五个小时的飞机",
		pi: "Wǒmen zuò le shíwǔ gè xiǎoshí de fēijī",
		en: "We took a fifteen hour flight"
	},
	{
		id: 1271,
		zh: "奶奶看了一天的电视",
		pi: "Nǎinai kàn le yī tiān de diànshì",
		en: "Grandma watched TV all day"
	},
	{
		id: 1272,
		zh: "妈妈洗了一上午的衣服",
		pi: "Māma xǐ le yī shàngwǔ de yīfu",
		en: "Mom washed clothes all morning"
	},
	{
		id: 1273,
		zh: "孩子们周六写了一天的作业",
		pi: "Háizi men zhōuliù xiě le yī tiān de zuòyè",
		en: "The kids did their homework all day Saturday"
	},
	{
		id: 1274,
		zh: "我刚才打了半个小时电话",
		pi: "Wǒ gāngcái dǎ le bàn gè xiǎoshí diànhuà",
		en: "I was on the phone for half an hour"
	},
	{
		id: 1275,
		zh: "我昨天玩了一晚上游戏",
		pi: "Wǒ zuótiān wán le yī wǎnshang yóuxì",
		en: "Yesterday, I played games all evening"
	},
	{
		id: 1276,
		zh: "他昨天开了一天的车",
		pi: "Tā zuótiān kāi le yī tiān chē",
		en: "He drove all day yesterday"
	},
	{
		id: 1277,
		zh: "老板今天开了一下午的会",
		pi: "Lǎobǎn jīntiān kāi le yī xiàwǔ de huì",
		en: "The boss had meetings all afternoon today"
	},
	{
		id: 1278,
		zh: "她从来不喝酒",
		pi: "Tā cónglái bù hējiǔ",
		en: "She never drinks"
	},
	{
		id: 1279,
		zh: "我女朋友从不给我打电话",
		pi: "Wǒ nǚpéngyou cóng bù gěi wǒ dǎ diànhuà",
		en: "My girlfriend never calls me"
	},
	{
		id: 1280,
		zh: "这个人很奇怪，他从来不笑",
		pi: "Zhège rén hěn qíguài, tā cónglái bù xiào",
		en: "This person is very strange. He never laughs"
	},
	{
		id: 1281,
		zh: "你父母从来不打你吗？",
		pi: "Nǐ fùmǔ cónglái bù dǎ nǐ ma?",
		en: "Your parents never hit you?"
	},
	{
		id: 1282,
		zh: "他从不关心别人",
		pi: "Tā cóng bù guānxīn biérén",
		en: "He never cares about other people"
	},
	{
		id: 1283,
		zh: "你从来没有想过这个问题吗？",
		pi: "Nǐ cónglái méiyǒu xiǎng guo zhège wèntí ma?",
		en: "Have you never thought about this question?"
	},
	{
		id: 1284,
		zh: "她从来没见过她妈妈",
		pi: "Tā cónglái méi jiàn guo tā māma",
		en: "She has never met her mother"
	},
	{
		id: 1285,
		zh: "我从没学过这个词",
		pi: "Wǒ cóngméi xué guo zhège cí",
		en: "I have never before studied this word"
	},
	{
		id: 1286,
		zh: "你们从来没有听说过这个地方吗？",
		pi: "Nǐmen cónglái méiyǒu tīngshuō guo zhège dìfang ma?",
		en: "Have you never heard about this place before?"
	},
	{
		id: 1287,
		zh: "很多中国人从来没出过国",
		pi: "Hěn duō Zhōngguó rén cónglái méi chū guo guó",
		en: "A lot of Chinese people have never been abroad"
	},
	{
		id: 1288,
		zh: "你睡了一天了",
		pi: "Nǐ shuì le yī tiān le",
		en: "You have been sleeping for the whole day"
	},
	{
		id: 1289,
		zh: "他在北京住了两年了",
		pi: "Tā zài Běijīng zhù le liǎng nián le",
		en: "He has been living in Beijing for two years"
	},
	{
		id: 1290,
		zh: "这个会，他们开了两个小时了",
		pi: "Zhège huì, tāmen kāi le liǎng gè xiǎoshí le",
		en: "They've been holding this meeting for the past two hours"
	},
	{
		id: 1291,
		zh: "我在这儿等了半个小时了",
		pi: "Wǒ zài zhèr děng le bàn gè xiǎoshí le",
		en: "I have been waiting here for half an hour"
	},
	{
		id: 1292,
		zh: "他们在酒吧待了一个晚上了",
		pi: "Tāmen zài jiǔbā dāi le yī gè wǎnshang le",
		en: "They have been staying at the bar for the whole evening"
	},
	{
		id: 1293,
		zh: "我学中文学了一年了",
		pi: "Wǒ xué Zhōngwén xué le yī nián le",
		en: "I have been learning Chinese for a year"
	},
	{
		id: 1294,
		zh: "他打电话打了一个多小时了",
		pi: "Tā dǎ diànhuà dǎ le yī gè duō xiǎoshí le",
		en: "He has been on the phone for more than an hour"
	},
	{
		id: 1295,
		zh: "老板打游戏打了一个上午了",
		pi: "Lǎobǎn dǎ yóuxì dǎ le yī gè shàngwǔ le",
		en: "The boss has been playing video games all morning"
	},
	{
		id: 1296,
		zh: "你洗澡洗了差不多一个小时了",
		pi: "Nǐ xǐzǎo xǐ le chàbuduō yī gè xiǎoshí le",
		en: "You have been showering for almost an hour"
	},
	{
		id: 1297,
		zh: "妈妈看电视看了一晚上了",
		pi: "Māma kàn diànshì kàn le yī wǎnshang le",
		en: "Mom has been watching TV all evening"
	},
	{
		id: 1298,
		zh: "我们一起吃晚饭吧",
		pi: "Wǒmen yīqǐ chī wǎnfàn ba",
		en: "Let's eat dinner together"
	},
	{
		id: 1299,
		zh: "早上我和老公一起去上班",
		pi: "Zǎoshang wǒ hé lǎogōng yīqǐ qù shàngbān",
		en: "In the morning, I go to work together with my husband"
	},
	{
		id: 1300,
		zh: "周末我们一起去看电影，好吗？",
		pi: "Zhōumò wǒmen yīqǐ qù kàn diànyǐng, hǎo ma?",
		en: "Let's go to the movies this weekend, shall we?"
	},
	{
		id: 1301,
		zh: "这两个公司一起做这个产品",
		pi: "Zhè liǎng gè gōngsī yīqǐ zuò zhège chǎnpǐn",
		en: "These two businesses made this product together"
	},
	{
		id: 1302,
		zh: "下班以后，你们一起来我家吧",
		pi: "Xiàbān yǐhòu, nǐmen yīqǐ lái wǒ jiā ba",
		en: "After work, why don't you all come to my home together?"
	},
	{
		id: 1303,
		zh: "下个月我和妈妈一起去旅行",
		pi: "Xià gè yuè wǒ hé māma yīqǐ qù lǚxíng",
		en: "Next month I'll go on a trip together with mom"
	},
	{
		id: 1304,
		zh: "你们有没有一起玩过这个游戏？",
		pi: "Nǐmen yǒu méiyǒu yīqǐ wán guo zhège yóuxì?",
		en: "Have you all ever played this game together?"
	},
	{
		id: 1305,
		zh: "他想和他太太一起学中文",
		pi: "Tā xiǎng hé tā tàitai yīqǐ xué Zhōngwén",
		en: "He wants to study Chinese together with his wife"
	},
	{
		id: 1306,
		zh: "结婚以后，你和父母会一起住吗？",
		pi: "Jiéhūn yǐhòu, nǐ hé fùmǔ huì yīqǐ zhù ma?",
		en: "Will you live together with your parents after you get married?"
	},
	{
		id: 1307,
		zh: "今天晚上老板要和我们一起加班",
		pi: "Jīntiān wǎnshang, lǎobǎn yào hé wǒmen yīqǐ jiābān",
		en: "Tonight the boss is going to work overtime together with us"
	},
	{
		id: 1308,
		zh: "今天太忙了，中午没办法出去吃饭",
		pi: "Jīntiān tài máng le, zhōngwǔ méi bànfǎ chūqù chīfàn",
		en: "It's too busy today. There's no way to go out for lunch"
	},
	{
		id: 1309,
		zh: "他没带手机，没办法给我打电话",
		pi: "Tā méi dài shǒujī, méi bànfǎ gěi wǒ dǎ diànhuà",
		en: "He didn't bring his phone, so he has no way to give me a call"
	},
	{
		id: 1310,
		zh: "没有水，我们没办法洗衣服",
		pi: "Méiyǒu shuǐ, wǒmen méi bànfǎ xǐ yīfu",
		en: "There's no water. There's no way for us to wash clothes"
	},
	{
		id: 1311,
		zh: "这里太吵了，我没办法工作",
		pi: "Zhèlǐ tài chǎo le, wǒ méi bànfǎ gōngzuò",
		en: "It‘s too noisy here. I can't work"
	},
	{
		id: 1312,
		zh: "他不开门，所以她没办法进去",
		pi: "Tā bù kāimén, suǒyǐ tā méi bànfǎ jìnqù",
		en: "He didn't open the door, so she has no way to enter"
	},
	{
		id: 1313,
		zh: "你不会说中文，没办法在我们公司工作",
		pi: "Nǐ bù huì shuō Zhōngwén, méi bànfǎ zài wǒmen gōngsī gōngzuò",
		en: "You can't speak Chinese, so there is no way for you to work for our company"
	},
	{
		id: 1314,
		zh: "事情太多了，我今天没办法做完",
		pi: "Shìqing tài duō le, wǒ jīntiān méi bànfǎ zuò wán",
		en: "There's too much to do. I have no way to finish today"
	},
	{
		id: 1315,
		zh: "老板不同意，我没办法帮你",
		pi: "Lǎobǎn bù tóngyì , wǒ méi bànfǎ bāng nǐ",
		en: "The boss didn't agree, so I have no way to help you"
	},
	{
		id: 1316,
		zh: "他很笨，我没办法跟他一起工作",
		pi: "Tā hěn bèn, wǒ méi bànfǎ gēn tā yīqǐ gōngzuò",
		en: "He's really dumb. There is no way I can work with him"
	},
	{
		id: 1317,
		zh: "我在上海上大学",
		pi: "Wǒ zài Shànghǎi shàng dàxué",
		en: "I went to college in Shanghai"
	},
	{
		id: 1318,
		zh: "我周末想在家睡觉",
		pi: "Wǒ zhōumò xiǎng zài jiā shuìjiào",
		en: "On the weekend, I want to sleep at home"
	},
	{
		id: 1319,
		zh: "不要在床上吃东西",
		pi: "Bùyào zài chuáng shàng chī dōngxi",
		en: "Don't eat food on the bed"
	},
	{
		id: 1320,
		zh: "你想在哪儿开生日派对？",
		pi: "Nǐ xiǎng zài nǎr kāi shēngrì pàiduì?",
		en: "Where do you want to have the birthday party?"
	},
	{
		id: 1321,
		zh: "他喜欢在厕所里抽烟",
		pi: "Tā xǐhuan zài cèsuǒ lǐ chōuyān",
		en: "He likes to smoke in the bathroom"
	},
	{
		id: 1322,
		zh: "很多人在地铁上吃早饭",
		pi: "Hěn duō rén zài dìtiě shàng chī zǎofàn",
		en: "Many people eat breakfast on the subway"
	},
	{
		id: 1323,
		zh: "老板在会议室见客户",
		pi: "Lǎobǎn zài huìyìshì jiàn kèhù",
		en: "The boss is seeing the client in the meeting room"
	},
	{
		id: 1324,
		zh: "你在外面吃过晚饭了吗？",
		pi: "Nǐ zài wàimiàn chī guo wǎnfàn le ma?",
		en: "Did you eat dinner outside?"
	},
	{
		id: 1325,
		zh: "你看看",
		pi: "Nǐ kànkan",
		en: "Take a little look"
	},
	{
		id: 1326,
		zh: "我试试",
		pi: "Wǒ shìshi",
		en: "I'll give it a try"
	},
	{
		id: 1327,
		zh: "说说你的想法",
		pi: "Shuōshuo nǐ de xiǎngfǎ",
		en: "Talk a little bit about your ideas"
	},
	{
		id: 1328,
		zh: "出去玩玩吧",
		pi: "Chūqù wánwan ba",
		en: "Go out and have fun"
	},
	{
		id: 1329,
		zh: "我想出去走走",
		pi: "Wǒ xiǎng chūqù zǒuzou",
		en: "I want to go out and walk for a bit"
	},
	{
		id: 1330,
		zh: "别生气了，笑一笑",
		pi: "Bié shēngqì le, xiào yī xiào!",
		en: "Don't be mad, gimme a smile"
	},
	{
		id: 1331,
		zh: "你去问一问他们厕所在哪里",
		pi: "Nǐ qù wèn yī wèn tāmen cèsuǒ zài nǎlǐ",
		en: "Go and ask them where the bathroom is"
	},
	{
		id: 1332,
		zh: "我可以用一用你的电脑吗？",
		pi: "Wǒ kěyǐ yòng yī yòng nǐ de diànnǎo ma?",
		en: "Can I use your computer for a little bit?"
	},
	{
		id: 1333,
		zh: "你现在有时间吗？我们聊一聊吧",
		pi: "Nǐ xiànzài yǒu shíjiān ma? Wǒmen liáo yī liáo ba",
		en: "Do you have a second? Let's chat for a bit"
	},
	{
		id: 1334,
		zh: "你想尝一尝我做的菜吗？",
		pi: "Nǐ xiǎng cháng yī cháng wǒ zuò de cài ma?",
		en: "Do you want to taste the food that I cooked?"
	},
	{
		id: 1335,
		zh: "考虑考虑",
		pi: "kǎolǜ kǎolǜ",
		en: "think it over"
	},
	{
		id: 1336,
		zh: "讨论讨论",
		pi: "tǎolùn tǎolùn",
		en: "discuss it"
	},
	{
		id: 1337,
		zh: "商量商量",
		pi: "shāngliang shāngliang",
		en: "talk it over"
	},
	{
		id: 1338,
		zh: "打听打听",
		pi: "dǎting dǎting",
		en: "inquire about it"
	},
	{
		id: 1339,
		zh: "你住在上海吗？",
		pi: "Nǐ zhù zài Shànghǎi ma?",
		en: "Do you live in Shanghai?"
	},
	{
		id: 1340,
		zh: "他坐在老板的旁边",
		pi: "Tā zuò zài lǎobǎn de pángbiān",
		en: "He sits next to the boss"
	},
	{
		id: 1341,
		zh: "你应该站在我后面",
		pi: "Nǐ yīnggāi zhàn zài wǒ hòumiàn",
		en: "You should stand behind me"
	},
	{
		id: 1342,
		zh: "不要坐在我的床上",
		pi: "Bùyào zuò zài wǒ de chuáng shàng",
		en: "Don't sit on my bed"
	},
	{
		id: 1343,
		zh: "你的衣服不可以放在这里",
		pi: "Nǐ de yīfu bù kěyǐ fàng zài zhèlǐ",
		en: "You can't put your clothes here"
	},
	{
		id: 1344,
		zh: "不要站在路中间",
		pi: "Bùyào zhàn zài lù zhōngjiān",
		en: "Don't stand in the middle of the road"
	},
	{
		id: 1345,
		zh: "不要坐在地上",
		pi: "Bùyào zuò zài dì shàng",
		en: "Don't sit on the ground"
	},
	{
		id: 1346,
		zh: "那本书我放在桌子上了",
		pi: "Nà běn shū wǒ fàng zài zhuōzi shàng le",
		en: "I placed that book on the table"
	},
	{
		id: 1347,
		zh: "不要走在草地上",
		pi: "Búyào zǒu zài cǎodì shàng",
		en: "Don't walk on the grass"
	},
	{
		id: 1348,
		zh: "周末我不想待在家里",
		pi: "Zhōumò wǒ bù xiǎng dāi zài jiā lǐ",
		en: "I don't want to stay at home on weekends"
	},
	{
		id: 1349,
		zh: "我在上海工作",
		pi: "Wǒ zài Shànghǎi gōngzuò",
		en: "I work in Shanghai"
	},
	{
		id: 1350,
		zh: "我在图书馆学习",
		pi: "Wǒ zài túshūguǎn xuéxí",
		en: "I study in the library"
	},
	{
		id: 1351,
		zh: "我很想你",
		pi: "Wǒ hěn xiǎng nǐ",
		en: "I really miss you"
	},
	{
		id: 1352,
		zh: "他很喜欢你",
		pi: "Tā hěn xǐhuan nǐ",
		en: "He really likes you"
	},
	{
		id: 1353,
		zh: "你应该很小心",
		pi: "Nǐ yīnggāi hěn xiǎoxīn",
		en: "You should be very careful"
	},
	{
		id: 1354,
		zh: "我很怕晚上一个人在家",
		pi: "Wǒ hěn pà wǎnshang yīgèrén zài jiā",
		en: "I fear staying home alone at night"
	},
	{
		id: 1355,
		zh: "你应该很了解自己的孩子",
		pi: "Nǐ yīnggāi hěn liǎojiě zìjǐ de háizi",
		en: "You should know a lot about your child"
	},
	{
		id: 1356,
		zh: "外国人很讨厌中国的公共厕所",
		pi: "Wàiguó rén hěn tǎoyàn Zhōngguó de gōnggòng cèsuǒ",
		en: "Foreigners really hate public toilets in China"
	},
	{
		id: 1357,
		zh: "你两天没回家，妈妈很担心你",
		pi: "Nǐ liǎng tiān méi huíjiā, māma hěn dānxīn nǐ",
		en: "You haven't gone home in two days. Mom is really worried about you"
	},
	{
		id: 1358,
		zh: "父母都很希望我能上一个好大学",
		pi: "Fùmǔ dōu hěn xīwàng wǒ néng shàng yī gè hǎo dàxué",
		en: "Both of my parents really hope that I can go to a good college"
	},
	{
		id: 1359,
		zh: "他们已经到酒吧了",
		pi: "Tāmen yǐjīng dào jiǔbā le",
		en: "They have already arrived at the bar"
	},
	{
		id: 1360,
		zh: "我刚到家",
		pi: "Wǒ gāng dào jiā",
		en: "I just got home"
	},
	{
		id: 1361,
		zh: "你到机场了吗？",
		pi: "Nǐ dào jīchǎng le ma?",
		en: "Have you arrived at the airport?"
	},
	{
		id: 1362,
		zh: "我已经到火车站了",
		pi: "Wǒ yǐjīng dào huǒchēzhàn le",
		en: "I've already arrived at the train station"
	},
	{
		id: 1363,
		zh: "我们先到北京，然后到香港",
		pi: "Wǒmen xiān dào Běijīng, ránhòu dào Xiānggǎng",
		en: "First we'll arrive in Beijing, then in Hong Kong"
	},
	{
		id: 1364,
		zh: "我下午在家，你可以到我家来",
		pi: "Wǒ xiàwǔ zài jiā, nǐ kěyǐ dào wǒ jiā lái",
		en: "I'll be home this afternoon. You can come to my house"
	},
	{
		id: 1365,
		zh: "老板马上到办公室去",
		pi: "Lǎobǎn mǎshàng dào bàngōngshì qù",
		en: "The boss is going to the office right now"
	},
	{
		id: 1366,
		zh: "明天我要到南京路买衣服",
		pi: "Míngtiān wǒ yào dào Nánjīng Lù mǎi yīfu",
		en: "Tomorrow I'll go to Nanjing Road to buy clothes"
	},
	{
		id: 1367,
		zh: "你们晚上到哪儿吃饭啊？",
		pi: "Nǐmen wǎnshang dào nǎr chīfàn a?",
		en: "Where will you all go to eat food this evening?"
	},
	{
		id: 1368,
		zh: "今年春节我要到女朋友家见她的父母",
		pi: "Jīnnián Chūnjié wǒ yào dào nǚpéngyou jiā jiàn tā de fùmǔ",
		en: "This Spring Festival I am going to my girlfriend's house to meet her parents"
	},
	{
		id: 1369,
		zh: "下个月我要到美国出差",
		pi: "Xià gè yuè wǒ yào dào Měiguó chūchāi",
		en: "Next month I need to go to the USA on a business trip"
	},
	{
		id: 1370,
		zh: "这个词的意思很好懂",
		pi: "Zhège cí de yìsi hěn hǎo dǒng",
		en: "The meaning of this word is easy to understand"
	},
	{
		id: 1371,
		zh: "这个汉字很好写",
		pi: "Zhège Hànzì hěn hǎo xiě",
		en: "This Chinese character is easy to write"
	},
	{
		id: 1372,
		zh: "三明治很好做",
		pi: "Sānmíngzhì hěn hǎo zuò",
		en: "Sandwiches are easy to make"
	},
	{
		id: 1373,
		zh: "苹果手机现在很好买",
		pi: "Píngguǒ shǒujī xiànzài hěn hǎo mǎi",
		en: "iPhones are easy to buy now"
	},
	{
		id: 1374,
		zh: "这个笔很好用",
		pi: "Zhège bǐ hěn hǎo yòng",
		en: "This pen is easy to use"
	},
	{
		id: 1375,
		zh: "这首歌很好听",
		pi: "Zhè shǒu gē hěn hǎotīng",
		en: "This song is great"
	},
	{
		id: 1376,
		zh: "这种茶很好闻",
		pi: "Zhè zhǒng chá hěn hǎowén",
		en: "This kind of tea smells good"
	},
	{
		id: 1377,
		zh: "你的新包很好看",
		pi: "Nǐ de xīn bāo hěn hǎokàn",
		en: "Your new bag looks good"
	},
	{
		id: 1378,
		zh: "妈妈做的菜很好吃",
		pi: "Māma zuò de cài hěn hǎochī",
		en: "The food mom makes is delicious"
	},
	{
		id: 1379,
		zh: "我觉得上海很好玩",
		pi: "Wǒ juéde Shànghǎi hěn hǎowán",
		en: "I think Shanghai is a lot of fun"
	},
	{
		id: 1380,
		zh: "请你等一下",
		pi: "Qǐng nǐ děng yīxià",
		en: "Please wait a little bit"
	},
	{
		id: 1381,
		zh: "你看一下",
		pi: "Nǐ kàn yīxià",
		en: "Take a look"
	},
	{
		id: 1382,
		zh: "试一下吧",
		pi: "Shì yīxià ba",
		en: "Try it"
	},
	{
		id: 1383,
		zh: "我要想一下",
		pi: "Wǒ yào xiǎng yīxià",
		en: "I want to think a little"
	},
	{
		id: 1384,
		zh: "开一下门吧",
		pi: "Kāi yīxià mén ba",
		en: "Please open the door"
	},
	{
		id: 1385,
		zh: "请你说一下为什么",
		pi: "Qǐng nǐ shuō yīxià wèishénme",
		en: "Please say why"
	},
	{
		id: 1386,
		zh: "不要生气了，笑一下",
		pi: "Bùyào shēngqì le, xiào yīxià",
		en: "Don't be mad, laugh"
	},
	{
		id: 1387,
		zh: "宝宝，亲一下爸爸",
		pi: "Bǎobao, qīn yīxià bàba",
		en: "Baby, give your dad a kiss"
	},
	{
		id: 1388,
		zh: "你可以来一下我的办公室吗？",
		pi: "Nǐ kěyǐ lái yīxià wǒ de bàngōngshì ma?",
		en: "Could you please come to my office?"
	},
	{
		id: 1389,
		zh: "你能介绍一下自己吗？",
		pi: "Nǐ néng jièshào yīxià zìjǐ ma?",
		en: "Could you introduce yourself briefly?"
	},
	{
		id: 1390,
		zh: "老师，我可以问你一个问题吗？",
		pi: "Lǎoshī, wǒ kěyǐ wèn nǐ yī gè wèntí ma?",
		en: "Teacher, may I ask you a question?"
	},
	{
		id: 1391,
		zh: "大家都叫他\“怪叔叔\”",
		pi: "Dàjiā dōu jiào tā \"guài shūshu\"",
		en: "Everyone calls him \"Uncle Weirdo\""
	},
	{
		id: 1392,
		zh: "我想告诉你一个好消息",
		pi: "Wǒ xiǎng gàosu nǐ yī gè hǎo xiāoxi",
		en: "I want to tell you the good news"
	},
	{
		id: 1393,
		zh: "他们给了你多少钱？",
		pi: "Tāmen gěi le nǐ duōshao qián?",
		en: "How much money did they give you?"
	},
	{
		id: 1394,
		zh: "他送了女朋友很多花",
		pi: "Tā sòng le nǚpéngyou hěn duō huā",
		en: "He gave his girlfriend lots of flowers"
	},
	{
		id: 1395,
		zh: "我想送给你一本书",
		pi: "Wǒ xiǎng sòng gěi nǐ yī běn shū",
		en: "I want to give you a book"
	},
	{
		id: 1396,
		zh: "爸爸要送给我一个很贵的生日礼物",
		pi: "Bàba yào sòng gěi wǒ yī gè hěn guì de shēngrì lǐwù",
		en: "My dad is going to give me a very expensive birthday gift"
	},
	{
		id: 1397,
		zh: "你可以借我两千块钱吗？",
		pi: "Nǐ kěyǐ jiè wǒ liǎng qiān kuài qián ma?",
		en: "Can you lend me 2000 kuai?"
	},
	{
		id: 1398,
		zh: "老板刚发给我上个月的工资",
		pi: "Lǎobǎn gāng fā gěi wǒ shàng gè yuè de gōngzī",
		en: "The boss just gave me my pay for last month"
	},
	{
		id: 1399,
		zh: "这个人骗了我很多钱",
		pi: "Zhège rén piàn le wǒ hěn duō qián",
		en: "This person cheated me out of a lot of money"
	},
	{
		id: 1400,
		zh: "我看不懂这本书",
		pi: "Wǒ kàn bu dǒng zhè běn shū",
		en: "I don't understand the book"
	},
	{
		id: 1401,
		zh: "孩子们看不懂你写的汉字",
		pi: "Háizi men kàn bu dǒng nǐ xiě de Hànzì",
		en: "Kids don't understand the characters that you wrote"
	},
	{
		id: 1402,
		zh: "你看不懂我的邮件吗？",
		pi: "Nǐ kàn bu dǒng wǒ de yóujiàn ma?",
		en: "Do you not understand my emails?"
	},
	{
		id: 1403,
		zh: "老板的中文说得很好，可是他看不懂中文报纸",
		pi: "Lǎobǎn de Zhōngwén shuō de hěn hǎo, kěshì tā kàn bu dǒng Zhōngwén bàozhǐ",
		en: "The boss speaks very good Chinese, but he doesn't understand Chinese newspapers"
	},
	{
		id: 1404,
		zh: "我听不懂上海话",
		pi: "Wǒ tīng bu dǒng Shànghǎi-huà",
		en: "I don't understand Shanghai dialect"
	},
	{
		id: 1405,
		zh: "你们听不懂我的话吗？",
		pi: "Nǐmen tīng bu dǒng wǒ de huà ma?",
		en: "Do you not understand what I say?"
	},
	{
		id: 1406,
		zh: "我听不懂你说的英语",
		pi: "Wǒ tīng bu dǒng nǐ shuō de Yīngyǔ",
		en: "I don't understand your English"
	},
	{
		id: 1407,
		zh: "我们都听不懂你的意思",
		pi: "Wǒmen dōu tīng bu dǒng nǐ de yìsi",
		en: "None of us understand what you mean"
	},
	{
		id: 1408,
		zh: "很多人读不懂这本书",
		pi: "Hěn duō rén dú bu dǒng zhè běn shū",
		en: "Many people don't understand this book"
	},
	{
		id: 1409,
		zh: "这个句子很难，学生们都读不懂",
		pi: "Zhège jùzi hěn nán, xuéshengmen dōu dú bu dǒng",
		en: "This sentence is very difficult. None of the students understand"
	},
	{
		id: 1410,
		zh: "你看见那个帅哥了吗？",
		pi: "Nǐ kànjiàn nàge shuàigē le ma?",
		en: "Did you see that handsome guy?"
	},
	{
		id: 1411,
		zh: "你看到那个帅哥了吗？",
		pi: "Nǐ kàndào nàge shuàigē le ma?",
		en: "Did you see that handsome guy?"
	},
	{
		id: 1412,
		zh: "我看见了",
		pi: "Wǒ kànjiàn le",
		en: "I saw it"
	},
	{
		id: 1413,
		zh: "我看到了",
		pi: "Wǒ kàndào le",
		en: "I saw it"
	},
	{
		id: 1414,
		zh: "你听见了吗？",
		pi: "Nǐ tīngjiàn le ma?",
		en: "Did you hear it?"
	},
	{
		id: 1415,
		zh: "你听到了吗？",
		pi: "Nǐ tīngdào le ma?",
		en: "Did you hear it?"
	},
	{
		id: 1416,
		zh: "你没看到那个帅哥吗？",
		pi: "Nǐ méi kàndào nàge shuàigē ma?",
		en: "You didn't see that handsome guy?"
	},
	{
		id: 1417,
		zh: "你没看见那个帅哥吗？",
		pi: "Nǐ méi kànjiàn nàge shuàigē ma?",
		en: "You didn't see that handsome guy?"
	},
	{
		id: 1418,
		zh: "我没有看到",
		pi: "Wǒ méiyǒu kàndào",
		en: "I didn't see it"
	},
	{
		id: 1419,
		zh: "我没有看见",
		pi: "Wǒ méiyǒu kànjiàn",
		en: "I didn't see it"
	},
	{
		id: 1420,
		zh: "你没听到吗？",
		pi: "Nǐ méi tīngdào ma?",
		en: "You didn't hear it?"
	},
	{
		id: 1421,
		zh: "你没听见吗？",
		pi: "Nǐ méi tīngjiàn ma?",
		en: "You didn't hear it?"
	},
	{
		id: 1422,
		zh: "我们明天可以做完",
		pi: "Wǒmen míngtiān kěyǐ zuò wán",
		en: "We can finish doing it tomorrow"
	},
	{
		id: 1423,
		zh: "你能吃完吗？",
		pi: "Nǐ néng chī wán ma?",
		en: "Can you finish eating all?"
	},
	{
		id: 1424,
		zh: "我今天要写完",
		pi: "Wǒ jīntiān yào xiě wán",
		en: "I need to finish writing it today"
	},
	{
		id: 1425,
		zh: "我没看完",
		pi: "Wǒ méi kàn wán",
		en: "I didn't finish reading it"
	},
	{
		id: 1426,
		zh: "我说完了",
		pi: "Wǒ shuō wán le",
		en: "I am finished talking"
	},
	{
		id: 1427,
		zh: "你吃完了吗？",
		pi: "Nǐ chī wán le ma?",
		en: "Are you done eating?"
	},
	{
		id: 1428,
		zh: "我看完了",
		pi: "Wǒ kàn wán le",
		en: "I have finished watching it"
	},
	{
		id: 1429,
		zh: "卖完了",
		pi: "Mài wán le",
		en: "It's sold out"
	},
	{
		id: 1430,
		zh: "我们打扫完了",
		pi: "Wǒmen dǎsǎo wán le",
		en: "We finished cleaning"
	},
	{
		id: 1431,
		zh: "我做完作业了",
		pi: "Wǒ zuò wán zuòyè le",
		en: "I finished doing my homework"
	},
	{
		id: 1432,
		zh: "老板开完会了",
		pi: "Lǎobǎn kāi wán huì le",
		en: "The boss finished having the meeting"
	},
	{
		id: 1433,
		zh: "我看完这本书了",
		pi: "Wǒ kàn wán zhè běn shū le",
		en: "I finished reading this book"
	},
	{
		id: 1434,
		zh: "我们学完这篇课文了",
		pi: "Wǒmen xué wán zhè piān kèwén le",
		en: "We finished studying this lesson"
	},
	{
		id: 1435,
		zh: "我看完了电影",
		pi: "Wǒ kàn wán le diànyǐng",
		en: "I finished watching the movie"
	},
	{
		id: 1436,
		zh: "妈妈去超市买了一些水果",
		pi: "Māma qù chāoshì mǎi le yīxiē shuǐguǒ",
		en: "Mom went to the supermarket and bought some fruit"
	},
	{
		id: 1437,
		zh: "上个周末他买了一些衣服",
		pi: "Shàng gè zhōumò tā mǎi le yīxiē yīfu",
		en: "He bought some clothes last weekend"
	},
	{
		id: 1438,
		zh: "我们很快会见到一些新同事",
		pi: "Wǒmen hěn kuài huì jiàndào yīxiē xīn tóngshì",
		en: "We're going to meet some new co-workers very soon"
	},
	{
		id: 1439,
		zh: "你饿不饿？这里有一些吃的",
		pi: "Nǐ è bu è? Zhèlǐ yǒu yīxiē chīde",
		en: "Are you hungry or not? There is some food here"
	},
	{
		id: 1440,
		zh: "下课以后，学生们问了一些问题",
		pi: "Xiàkè yǐhòu, xuéshengmen wèn le yīxiē wèntí",
		en: "After class, the students asked some questions"
	},
	{
		id: 1441,
		zh: "给我一些时间，好吗？",
		pi: "Gěi wǒ yīxiē shíjiān, hǎo ma?",
		en: "Give me some time, OK?"
	},
	{
		id: 1442,
		zh: "他给我带了一些书",
		pi: "Tā gěi wǒ dài le yīxiē shū",
		en: "He brought me some books"
	},
	{
		id: 1443,
		zh: "你可以借我一些钱吗？",
		pi: "Nǐ kěyǐ jiè wǒ yīxiē qián ma?",
		en: "Can you lend me some money?"
	},
	{
		id: 1444,
		zh: "你想在咖啡里放一些糖吗？",
		pi: "Nǐ xiǎng zài kāfēi lǐ fàng yīxiē táng ma?",
		en: "Do you want to put some sugar in your coffee?"
	},
	{
		id: 1445,
		zh: "我在中国的时候，去过一些很漂亮的地方",
		pi: "Wǒ zài Zhōngguó de shíhou, qù guo yīxiē hěn piàoliang de dìfang",
		en: "When I was in China, I went to some beautiful places"
	},
	{
		id: 1446,
		zh: "外国人有的很有钱，有的没钱",
		pi: "Wàiguó rén yǒude hěn yǒuqián, yǒude méi qián",
		en: "Some foreigners are rich, but some aren't"
	},
	{
		id: 1447,
		zh: "我们公司有一些电脑，有的是新的，有的是旧的",
		pi: "Wǒmen gōngsī yǒu yīxiē diànnǎo, yǒude shì xīn de, yǒude shì jiù de",
		en: "Our company has some computers. Some are new, and some are old"
	},
	{
		id: 1448,
		zh: "他写了很多书，有的卖得很好，有的卖得不好",
		pi: "Tā xiě le hěn duō shū, yǒude mài de hěn hǎo, yǒude mài de bù hǎo",
		en: "He has written a lot of books. Some sell well, but some don't"
	},
	{
		id: 1449,
		zh: "中国菜有的好吃，有的不好吃",
		pi: "Zhōngguó cài yǒude hāochī, yǒude bù hāochī",
		en: "Some Chinese foods are tasty, while some aren't"
	},
	{
		id: 1450,
		zh: "这家店的衣服有的贵，有的便宜",
		pi: "Zhè jiā diàn de yīfu yǒude guì, yǒude piányi",
		en: "In this shop, some of the clothes are expensive and some are cheap"
	},
	{
		id: 1451,
		zh: "他有很多房子，有的在国内，有的在国外",
		pi: "Tā yǒu hěn duō fángzi, yǒude zài guónèi, yǒude zài guówài",
		en: "He has a lot of houses, some of them are within the country and some are abroad"
	},
	{
		id: 1452,
		zh: "晚上六点以后，有的人下班了，有的人在加班",
		pi: "Wǎnshang liùdiǎn yǐhòu, yǒude rén xiàbān le, yǒude rén zài jiābān",
		en: "After six o'clock some people are off work, while some are still working"
	},
	{
		id: 1453,
		zh: "我的大学老师有的很年轻，有的很老",
		pi: "Wǒ de dàxué lǎoshī yǒude hěn niánqīng, yǒude hěn lǎo",
		en: "Some of my college teachers are young, some are old"
	},
	{
		id: 1454,
		zh: "酒吧里，有的人在喝酒，有的人在跳舞，还有的人在聊天",
		pi: "Jiǔbā lǐ, yǒude rén zài hējiǔ, yǒude rén zài tiàowǔ, hái yǒude rén zài liáotiān",
		en: "In the bar, some people are drinking, some are dancing, and some are chatting"
	},
	{
		id: 1455,
		zh: "多少钱？",
		pi: "Duōshao qián?",
		en: "How much?"
	},
	{
		id: 1456,
		zh: "你的手机多少钱？",
		pi: "Nǐ de shǒujī duōshao qián?",
		en: "How much was your cell phone?"
	},
	{
		id: 1457,
		zh: "我们的午饭多少钱？",
		pi: "Wǒmen de wǔfàn duōshao qián?",
		en: "How much is our lunch?"
	},
	{
		id: 1458,
		zh: "这杯咖啡多少钱？",
		pi: "Zhè bēi kāfēi duōshao qián?",
		en: "How much for this cup of coffee?"
	},
	{
		id: 1459,
		zh: "这件衣服多少钱？",
		pi: "Zhè jiàn yīfu duōshao qián?",
		en: "How much is this clothing?"
	},
	{
		id: 1460,
		zh: "每个菜都好吃",
		pi: "Měi gè cài dōu hěn hǎochī",
		en: "Every dish is delicious"
	},
	{
		id: 1461,
		zh: "你每个人都认识吗？",
		pi: "Nǐ měi gè rén dōu rènshi ma?",
		en: "Do you know every person?"
	},
	{
		id: 1462,
		zh: "老板每个月都出差",
		pi: "Lǎobǎn měi gè yuè dōu chūchāi",
		en: "The boss goes on business trips every month"
	},
	{
		id: 1463,
		zh: "他每天都不吃早饭",
		pi: "Tā měi tiān dōu bù chī zǎofàn",
		en: "Every morning he skips breakfast"
	},
	{
		id: 1464,
		zh: "他每年都来中国",
		pi: "Tā měi nián dōu lái Zhōngguó",
		en: "He comes to China every year"
	},
	{
		id: 1465,
		zh: "我每个星期都给妈妈打电话",
		pi: "Wǒ měi gè xīngqī dōu gěi māma dǎ diànhuà",
		en: "I give mom a phone call every week"
	},
	{
		id: 1466,
		zh: "这个班的每个学生都很聪明",
		pi: "Zhège bān de měi gè xuéshēng dōu hěn cōngming",
		en: "Each of the students in this class are very smart"
	},
	{
		id: 1467,
		zh: "老师每天都给我们很多作业",
		pi: "Lǎoshī měi tiān dōu gěi wǒmen hěn duō zuòyè",
		en: "Every day the teacher gives us a lot of homework"
	},
	{
		id: 1468,
		zh: "我们每周都要开会",
		pi: "Wǒmen měi zhōu dōu yào kāihuì",
		en: "Every week we need to have a meeting"
	},
	{
		id: 1469,
		zh: "他们每个周末都去公园",
		pi: "Tāmen měi gè zhōumò dōu qù gōngyuán",
		en: "Every weekend they go to the park"
	},
	{
		id: 1470,
		zh: "两只猫",
		pi: "liǎng zhī māo",
		en: "two cats"
	},
	{
		id: 1471,
		zh: "三条鱼",
		pi: "sān tiáo yú",
		en: "three fish"
	},
	{
		id: 1472,
		zh: "四杯牛奶",
		pi: "sì bēi niúnǎi",
		en: "four glasses of milk"
	},
	{
		id: 1473,
		zh: "五瓶水",
		pi: "wǔ píng shuǐ",
		en: "five bottles of water"
	},
	{
		id: 1474,
		zh: "六块巧克力",
		pi: "liù kuài qiǎokèlì",
		en: "six pieces of chocolate"
	},
	{
		id: 1475,
		zh: "七盒茶叶",
		pi: "qī hé cháyè",
		en: "seven boxes of tea leaves"
	},
	{
		id: 1476,
		zh: "八台电脑",
		pi: "bā tái diànnǎo",
		en: "eight computers"
	},
	{
		id: 1477,
		zh: "九支玫瑰",
		pi: "jiǔ zhī méiguī",
		en: "nine roses"
	},
	{
		id: 1478,
		zh: "十个美女",
		pi: "shí gè měinǚ",
		en: "ten beautiful women"
	},
	{
		id: 1479,
		zh: "一条狗",
		pi: "yī tiáo gǒu",
		en: "a dog"
	},
	{
		id: 1480,
		zh: "一条河",
		pi: "yī tiáo hé",
		en: "a river"
	},
	{
		id: 1481,
		zh: "一条路",
		pi: "yī tiáo lù",
		en: "a road"
	},
	{
		id: 1482,
		zh: "一条龙",
		pi: "yī tiáo lóng",
		en: "a dragon"
	},
	{
		id: 1483,
		zh: "一条鱼",
		pi: "yī tiáo yú",
		en: "a fish"
	},
	{
		id: 1484,
		zh: "一条短信",
		pi: "yī tiáo duǎnxìn",
		en: "a text (message)"
	},
	{
		id: 1485,
		zh: "一块巧克力",
		pi: "yī kuài qiǎokèlì",
		en: "a piece of chocolate"
	},
	{
		id: 1486,
		zh: "一盒巧克力",
		pi: "yī hé qiǎokèlì",
		en: "a box of chocolate"
	},
	{
		id: 1487,
		zh: "一颗巧克力",
		pi: "yī kē qiǎokèlì",
		en: "a small piece of chocolate"
	},
	{
		id: 1488,
		zh: "他有几个孩子？",
		pi: "Tā yǒu jǐ gè háizi?",
		en: "How many kids does he have?"
	},
	{
		id: 1489,
		zh: "你家有几个房间？",
		pi: "Nǐ jiā yǒu jǐ gè fángjiān?",
		en: "How many rooms are there in your house?"
	},
	{
		id: 1490,
		zh: "他们在这里住几个星期？",
		pi: "Tāmen zài zhèlǐ zhù jǐ gè xīngqī?",
		en: "How many weeks are they staying here?"
	},
	{
		id: 1491,
		zh: "你带了几件衣服？",
		pi: "Nǐ dài le jǐ jiàn yīfu?",
		en: "How many pieces of clothing have you brought?"
	},
	{
		id: 1492,
		zh: "老板每天工作几个小时？",
		pi: "Lǎobǎn měi tiān gōngzuò jǐ gè xiǎoshí?",
		en: "How many hours does the boss work every day?"
	},
	{
		id: 1493,
		zh: "你去过多少个国家？",
		pi: "Nǐ qù guo duōshao gè guójiā?",
		en: "How many countries have you been to?"
	},
	{
		id: 1494,
		zh: "你们班有多少个学生？",
		pi: "Nǐmen bān yǒu duōshao gè xuéshēng?",
		en: "How many students are there in your class?"
	},
	{
		id: 1495,
		zh: "你大学的时候看了多少本书？",
		pi: "Nǐ dàxué de shíhou kàn le duōshao běn shū?",
		en: "How many books did you read when you were in college?"
	},
	{
		id: 1496,
		zh: "他们昨天请了多少个朋友？",
		pi: "Tāmen zuótiān qǐng le duōshao gè péngyou?",
		en: "How many friends did they invite yesterday?"
	},
	{
		id: 1497,
		zh: "上海有多少个外国公司？",
		pi: "Shànghǎi yǒu duōshao gè wàiguó gōngsī?",
		en: "How many foreign companies are there in Shanghai?"
	},
	{
		id: 1498,
		zh: "那个人",
		pi: "nàge rén",
		en: "that person"
	},
	{
		id: 1499,
		zh: "这本书",
		pi: "zhè běn shū",
		en: "this book"
	},
	{
		id: 1500,
		zh: "那件事",
		pi: "nà jiàn shì",
		en: "that matter (in the sense of business, affair, or thing)"
	},
	{
		id: 1501,
		zh: "这瓶啤酒",
		pi: "zhè píng píjiǔ",
		en: "this bottle of beer"
	},
	{
		id: 1502,
		zh: "那个房间",
		pi: "nàge fángjiān",
		en: "that room"
	},
	{
		id: 1503,
		zh: "那台电脑",
		pi: "nà tái diànnǎo",
		en: "that new computer"
	},
	{
		id: 1504,
		zh: "这只猫",
		pi: "zhè zhī māo",
		en: "that cat"
	},
	{
		id: 1505,
		zh: "那条河",
		pi: "nà tiáo hé",
		en: "that river"
	},
	{
		id: 1506,
		zh: "这件衣服",
		pi: "zhè jiàn yīfu",
		en: "this piece of clothing"
	},
	{
		id: 1507,
		zh: "我是第一个到公司的人",
		pi: "Wǒ shì dì-yī gè dào gōngsī de rén",
		en: "I'm the first person that came to the office"
	},
	{
		id: 1508,
		zh: "他要坐早上第一班地铁去上班",
		pi: "Tā yào zuò zǎoshang dì-yī bān dìtiě qù shàngbān",
		en: "He needs to take the first train in the morning to go to work"
	},
	{
		id: 1509,
		zh: "小李是她的第三个男朋友",
		pi: "Xiǎo Lǐ shì tā de dì-sān gè nánpéngyou",
		en: "Little Li is her third boyfriend"
	},
	{
		id: 1510,
		zh: "我的第一个中文老师是美国人",
		pi: "Wǒ de dì-yī gè Zhōngwén lǎoshī shì Měiguó rén",
		en: "My first Chinese teacher was American"
	},
	{
		id: 1511,
		zh: "你的第一个工作是什么？",
		pi: "Nǐ de dì-yī gè gōngzuò shì shénme?",
		en: "What was your first job?"
	},
	{
		id: 1512,
		zh: "到美国的第二个月，我找到了工作",
		pi: "Dào Měiguó de dì-èr gè yuè, wǒ zhǎodào le gōngzuò",
		en: "I found a job the second month I was in the USA"
	},
	{
		id: 1513,
		zh: "第二行第五个汉字怎么读？",
		pi: "Dì-èr háng dì-wǔ gè Hànzì zěnme dú?",
		en: "How do you read the fifth character from the second line?"
	},
	{
		id: 1514,
		zh: "这次考试，我是我们班第一",
		pi: "Zhè cì kǎoshì, wǒ shì wǒmen bān dì-yī",
		en: "On this test, I was first in our class"
	},
	{
		id: 1515,
		zh: "这次比赛，我们班第一，他们班第二",
		pi: "Zhè cì bǐsài, wǒmen bān dì-yī, tāmen bān dì-èr",
		en: "In this contest, our class is the first, their class is the second"
	},
	{
		id: 1516,
		zh: "第一天，我们在宾馆里",
		pi: "Dì-yī tiān, wǒmen zài bīnguǎn lǐ",
		en: "On the first day, we will be in the hotel"
	},
	{
		id: 1517,
		zh: "来上海以后的第二年，他开了这家公司",
		pi: "Lái Shànghǎi yǐhòu de dì-èr nián, tā kāi le zhè jiā gōngsī",
		en: "He started this company his second year after coming to Shanghai"
	},
	{
		id: 1518,
		zh: "下个月的第一周老板要出差",
		pi: "Xià gè yuè de dì-yī zhōu , lǎobǎn yào chūchāi",
		en: "The boss needs to go on a business trip the first week of next month"
	},
	{
		id: 1519,
		zh: "这是我第一次去北京",
		pi: "Zhè shì wǒ dì-yī cì qù Běijīng",
		en: "This is my first time going to Beijing"
	},
	{
		id: 1520,
		zh: "你最近怎么样？",
		pi: "Nǐ zuìjìn zěnmeyàng ?",
		en: "How have you been recently?"
	},
	{
		id: 1521,
		zh: "中国怎么样？",
		pi: "Zhōngguó zěnmeyàng ?",
		en: "How is China?"
	},
	{
		id: 1522,
		zh: "北京冬天怎么样？",
		pi: "Běijīng dōngtiān zěnmeyàng ?",
		en: "How is Beijing in the winter?"
	},
	{
		id: 1523,
		zh: "今天天气怎么样？",
		pi: "Jīntiān tiānqì zěnmeyàng ?",
		en: "How is the weather today?"
	},
	{
		id: 1524,
		zh: "你妹妹的工作怎么样？",
		pi: "Nǐ mèimei dē gōngzuò zěnmeyàng ?",
		en: "How is your little sister's job going?"
	},
	{
		id: 1525,
		zh: "你的新手机怎么样？",
		pi: "Nǐ de xīn shǒujī zěnmeyàng ?",
		en: "How's your new phone?"
	},
	{
		id: 1526,
		zh: "这里的菜怎么样？好吃吗？",
		pi: "Zhèlǐ de cài zěnmeyàng ? Hǎochī ma?",
		en: "How is the food here? Is it good?"
	},
	{
		id: 1527,
		zh: "你觉得上海怎么样？",
		pi: "Nǐ juéde Shànghǎi zěnmeyàng ?",
		en: "What do you think of Shanghai?"
	},
	{
		id: 1528,
		zh: "你觉得我怎么样？",
		pi: "Nǐ juéde wǒ zěnmeyàng ?",
		en: "What do you think of me?"
	},
	{
		id: 1529,
		zh: "你觉得中文怎么样？难学吗？",
		pi: "Nǐ juéde Zhōngwén zěnmeyàng? Nánxué ma?",
		en: "What do you think of Chinese? Is it difficult to learn?"
	},
	{
		id: 1530,
		zh: "他怎么还没来？",
		pi: "Tā zěnme hái méi lái?",
		en: "How come he's not here yet?"
	},
	{
		id: 1531,
		zh: "你们怎么打人？",
		pi: "Nǐmen zěnme dǎ rén?",
		en: "How can you hit people?"
	},
	{
		id: 1532,
		zh: "他帮了你，你怎么不说\“谢谢\”？",
		pi: "Tā bāng le nǐ, nǐ zěnme bù shuō \"xièxie\"?",
		en: "He helped you. How come you didn't say thank you?"
	},
	{
		id: 1533,
		zh: "你结婚的时候怎么不告诉我？",
		pi: "Nǐ jiéhūn de shíhou zěnme bù gàosu wǒ?",
		en: "How come you didn't tell me when you got married?"
	},
	{
		id: 1534,
		zh: "我们还没开始吃，他怎么已经吃完了？",
		pi: "Wǒmen hái méi kāishǐ chī, tā zěnme yǐjīng chī wán le?",
		en: "We haven't started eating yet. How come he has already finished eating?"
	},
	{
		id: 1535,
		zh: "今天是星期一，你怎么不去上班？",
		pi: "Jīntiān shì Xīngqīyī, nǐ zěnme bù qù shàngbān?",
		en: "Today is Monday. Why aren't you going to work?"
	},
	{
		id: 1536,
		zh: "水怎么不热？",
		pi: "Shuǐ zěnme bù rè?",
		en: "Why is the water not hot?"
	},
	{
		id: 1537,
		zh: "这里的川菜怎么不辣？",
		pi: "Zhèlǐ de chuāncài zěnme bù là?",
		en: "Why is the Sichuan food here not spicy?"
	},
	{
		id: 1538,
		zh: "他亲了你，你怎么不高兴？",
		pi: "Tā qīn le nǐ, nǐ zěnme bù gāoxìng?",
		en: "He kissed you. How come you're not happy?"
	},
	{
		id: 1539,
		zh: "她的小猫死了，她怎么不难过？",
		pi: "Tā de xiǎomāo sǐ le, tā zěnme bù nánguò?",
		en: "Her kitten died. Why isn't she sad?"
	},
	{
		id: 1540,
		zh: "每天工作十二个小时，你怎么不累？",
		pi: "Měi tiān gōngzuò shí'èr gè xiǎoshí, nǐ zěnme bù lèi?",
		en: "Every day you work 12 hours. Why are you not tired?"
	},
	{
		id: 1541,
		zh: "他怎么那么懒？",
		pi: "Tā zěnme nàme lǎn?",
		en: "How can he be this lazy?"
	},
	{
		id: 1542,
		zh: "昨天怎么那么冷？",
		pi: "Zuótiān zěnme nàme lěng?",
		en: "How could it be so cold yesterday?"
	},
	{
		id: 1543,
		zh: "这些人怎么这么吵？",
		pi: "Zhèxiē rén zěnme zhème chǎo?",
		en: "How can these people so loud?"
	},
	{
		id: 1544,
		zh: "北京的空气怎么那么差？",
		pi: "Běijīng de kōngqì zěnme nàme chà?",
		en: "How can the air in Beijing be so bad?"
	},
	{
		id: 1545,
		zh: "你的汉语怎么这么好？",
		pi: "Nǐ de Hànyǔ zěnme zhème hǎo?",
		en: "How is your Mandarin so good?"
	},
	{
		id: 1546,
		zh: "你吃饭了吗？",
		pi: "Nǐ chīfàn le ma?",
		en: "Did you eat?"
	},
	{
		id: 1547,
		zh: "老板走了吗？",
		pi: "Lǎobǎn zǒu le ma?",
		en: "Did the boss leave?"
	},
	{
		id: 1548,
		zh: "你男朋友找到新工作了吗？",
		pi: "Nǐ nánpéngyou zhǎodào xīn gōngzuò le ma?",
		en: "Has your boyfriend found a new job yet?"
	},
	{
		id: 1549,
		zh: "妈妈，你昨天给我打电话了吗？",
		pi: "Māma, nǐ zuótiān gěi wǒ dǎ diànhuà le ma?",
		en: "Mom, did you call me yesterday?"
	},
	{
		id: 1550,
		zh: "你今天去上班了吗？",
		pi: "Nǐ jīntiān qù shàngbān le ma?",
		en: "Did you go to work today?"
	},
	{
		id: 1551,
		zh: "晚饭你吃了吗？",
		pi: "Wǎnfàn nǐ chī le ma?",
		en: "Did you eat dinner?"
	},
	{
		id: 1552,
		zh: "衣服你洗好了吗？",
		pi: "Yīfu nǐ xǐ hǎo le ma?",
		en: "Have you finished washing the clothes?"
	},
	{
		id: 1553,
		zh: "作业你写完了吗？",
		pi: "Zuòyè nǐ xiě wán le ma?",
		en: "Have you finishing doing homework?"
	},
	{
		id: 1554,
		zh: "这个电影你看了吗？",
		pi: "Zhège diànyǐng nǐ kàn le ma?",
		en: "Have you seen this movie?"
	},
	{
		id: 1555,
		zh: "我的邮件你收到了吗？",
		pi: "Wǒ de yóujiàn nǐ shōudào le ma?",
		en: "Have you received my email?"
	},
	{
		id: 1556,
		zh: "他学得很快，因为他很聪明",
		pi: "Tā xué de hěn kuài, yīnwèi tā hěn cōngming",
		en: "He learns fast because he is smart"
	},
	{
		id: 1557,
		zh: "我爱吃四川菜，因为很辣",
		pi: "Wǒ ài chī Sìchuān cài, yīnwèi hěn là",
		en: "I love eating Sichuan food because it's very spicy"
	},
	{
		id: 1558,
		zh: "我在学习中文，因为我想去中国",
		pi: "Wǒ zài xuéxí Zhōngwén, yīnwèi wǒ xiǎng qù Zhōngguó",
		en: "I am studying Chinese because I want to go to China"
	},
	{
		id: 1559,
		zh: "我不喜欢她，因为她不友好",
		pi: "Wǒ bù xǐhuan tā, yīnwèi tā bù yǒuhǎo",
		en: "I don't like her because she is very unfriendly"
	},
	{
		id: 1560,
		zh: "今天我们很忙，因为有很多工作",
		pi: "Jīntiān wǒmen hěn máng, yīnwèi yǒu hěn duō gōngzuò",
		en: "We are very busy today because we have lots of work"
	},
	{
		id: 1561,
		zh: "汉字太难了，所以我不想学",
		pi: "Hànzì tài nán le, suǒyǐ wǒ bù xiǎng xué",
		en: "Chinese characters are too hard, so I don't want to study them"
	},
	{
		id: 1562,
		zh: "她很漂亮，所以很多男孩喜欢她",
		pi: "Tā hěn piàoliang, suǒyǐ hěn duō nánhái xǐhuan tā",
		en: "She is beautiful, so a lot of boys like her"
	},
	{
		id: 1563,
		zh: "他找到工作了，所以很高兴",
		pi: "Tā zhǎodào gōngzuò le, suǒyǐ hěn gāoxìng",
		en: "He found a job so he's happy"
	},
	{
		id: 1564,
		zh: "我太忙了，所以没有时间给你打电话",
		pi: "Wǒ tài máng le, suǒyǐ méiyǒu shíjiān gěi nǐ dǎ diànhuà",
		en: "I was too busy, so I didn't have time to give you a call"
	},
	{
		id: 1565,
		zh: "我们公司有很多外国人，所以我们要说英文",
		pi: "Wǒmen gōngsī yǒu hěn duō wàiguó rén, suǒyǐ wǒmen yào shuō Yīngwén",
		en: "There are a lot of foreigners in our company, so we need to speak English."
	},
	{
		id: 1566,
		zh: "因为我有一个中国女朋友，所以我要学中文",
		pi: "Yīnwèi wǒ yǒu yī gè Zhōngguó nǚpéngyou, suǒyǐ wǒ yào xué Zhōngwén",
		en: "Since I have a Chinese girlfriend, I need to study Chinese"
	},
	{
		id: 1567,
		zh: "因为他生病了，所以没去上课",
		pi: "Yīnwèi tā shēngbìng le, suǒyǐ méi qù shàngkè",
		en: "Since he was sick, he didn't go to class"
	},
	{
		id: 1568,
		zh: "因为我很累，所以要休息",
		pi: "Yīnwèi wǒ hěn lèi, suǒyǐ yào xiūxi",
		en: "I'm very tired, so I want to rest"
	},
	{
		id: 1569,
		zh: "因为太远了，所以我不想去",
		pi: "Yīnwèi tài yuǎn le, suǒyǐ wǒ bù xiǎng qù",
		en: "Since it's too far, I don't want to go"
	},
	{
		id: 1570,
		zh: "因为太忙，所以我们没有时间吃中饭",
		pi: "Yīnwèi tài máng, suǒyǐ wǒmen méiyǒu shíjiān chī zhōngfàn",
		en: "We were too busy, so none of us had time to eat lunch"
	},
	{
		id: 1571,
		zh: "我们快到了",
		pi: "Wǒmen kuài dào le",
		en: "We're almost there"
	},
	{
		id: 1572,
		zh: "快下雨了",
		pi: "Kuài xiàyǔ le",
		en: "It's going to rain soon"
	},
	{
		id: 1573,
		zh: "快要过年了，你什么时候回家？",
		pi: "Kuài yào guònián le, nǐ shénme shíhou huíjiā?",
		en: "It's almost Chinese New Year. When are you going back to your hometown?"
	},
	{
		id: 1574,
		zh: "我女朋友快要过生日了",
		pi: "Wǒ nǚpéngyou kuài yào guò shēngrì le",
		en: "My girlfriend is about to have her birthday"
	},
	{
		id: 1575,
		zh: "快下车了，你再等一会儿",
		pi: "Kuài xiàchē le, nǐ zài děng yīhuìr",
		en: "We're about to get off. Just wait a little while"
	},
	{
		id: 1576,
		zh: "天快黑了",
		pi: "Tiān kuài hēi le",
		en: "It’s almost getting dark"
	},
	{
		id: 1577,
		zh: "我快好了",
		pi: "Wǒ kuài hǎo le",
		en: "I'm almost ready"
	},
	{
		id: 1578,
		zh: "饭快凉了",
		pi: "Fàn kuài liáng le",
		en: "The food is about to be cold"
	},
	{
		id: 1579,
		zh: "这些脏衣服快臭了",
		pi: "Zhèxiē zāng yīfu kuài chòu le",
		en: "These dirty clothes are about to smell bad"
	},
	{
		id: 1580,
		zh: "不能再喝了，我快醉了",
		pi: "Bù néng zài hē le, wǒ kuài zuì le",
		en: "I can't drink another, I am almost drunk"
	},
	{
		id: 1581,
		zh: "我要生气了",
		pi: "Wǒ yào shēngqì le",
		en: "I'm going to get angry!"
	},
	{
		id: 1582,
		zh: "他们的孩子要出生了",
		pi: "Tāmen de háizi yào chūshēng le",
		en: "Their child is about to be born"
	},
	{
		id: 1583,
		zh: "9点了，超市要关门了",
		pi: "Jiǔ diǎn le, chāoshì yào guānmén le",
		en: "It's 9 o'clock. The supermarket is about to close"
	},
	{
		id: 1584,
		zh: "我最好的朋友要结婚了",
		pi: "Wǒ zuìhǎo de péngyou yào jiéhūn le",
		en: "My best friend is about to get married"
	},
	{
		id: 1585,
		zh: "圣诞节要到了，你有什么打算？",
		pi: "Shèngdànjié yào dào le, nǐ yǒu shénme dǎsuàn?",
		en: "It's almost Christmas. What plans do you have?"
	},
	{
		id: 1586,
		zh: "我觉得这里的菜什么都好吃",
		pi: "Wǒ juéde zhèlǐ de cài shénme dōu hǎochī",
		en: "I think everything is delicious here"
	},
	{
		id: 1587,
		zh: "中国的历史爸爸什么都知道",
		pi: "Zhōngguó de lìshǐ bàba shénme dōu zhīdào",
		en: "My dad knows everything about Chinese history"
	},
	{
		id: 1588,
		zh: "工作的事情老公什么都跟我说",
		pi: "Gōngzuò de shìqing lǎogōng shénme dōu gēn wǒ shuō",
		en: "My husband tells me everything about work stuff"
	},
	{
		id: 1589,
		zh: "妈妈做的菜我什么都喜欢",
		pi: "Māma zuò de cài wǒ shénme dōu xǐhuan",
		en: "I like everything that mom cook"
	},
	{
		id: 1590,
		zh: "我女朋友觉得外国的东西什么都好",
		pi: "Wǒ nǚpéngyou juéde wàiguó de dōngxi shénme dōu hǎo",
		en: "My girlfriend thinks that all foreign things are good"
	},
	{
		id: 1591,
		zh: "我们什么果汁都喝",
		pi: "Wǒmen shénme guǒzhī dōu hē",
		en: "We drink any kind of fruit juice"
	},
	{
		id: 1592,
		zh: "她什么衣服都是黑色的",
		pi: "Tā shénme yīfu dōu shì hēisè de",
		en: "All of her clothes are black"
	},
	{
		id: 1593,
		zh: "妈妈做的什么菜都好吃",
		pi: "Māma zuò de shénme cài dōu hǎochī",
		en: "All of the dishes mom makes are tasty"
	},
	{
		id: 1594,
		zh: "我男朋友什么运动都喜欢",
		pi: "Wǒ nánpéngyou shénme yùndòng dōu xǐhuan",
		en: "My boyfriend likes all kinds of sports"
	},
	{
		id: 1595,
		zh: "你不应该什么话都跟他说",
		pi: "Nǐ bù yīnggāi shénme huà dōu gēn tā shuō",
		en: "You shouldn't tell him everything"
	},
	{
		id: 1596,
		zh: "生病以后，爸爸什么酒都不能喝了",
		pi: "Shēngbìng yǐhòu, bàba shénme jiǔ dōu bù néng hē le",
		en: "After dad got sick, he can't drink any kind of alcohol"
	},
	{
		id: 1597,
		zh: "老板现在很生气，什么人也不见",
		pi: "Lǎobǎn xiànzài hěn shēngqì, shénme rén yě bù jiàn",
		en: "The boss is very angry. He's doesn't want to see anybody"
	},
	{
		id: 1598,
		zh: "今天我不舒服，什么东西都没吃",
		pi: "Jīntiān wǒ bù shūfu, shénme dōngxi dōu méi chī",
		en: "Today I don't feel well, so I didn't eat anything"
	},
	{
		id: 1599,
		zh: "昨天开会的时候，她什么话也没说",
		pi: "Zuótiān kāihuì de shíhou, tā shénme huà yě méi shuō",
		en: "She didn't say anything at yesterday's meeting"
	},
	{
		id: 1600,
		zh: "你在家里怎么什么事都不做？",
		pi: "Nǐ zài jiālǐ zěnme shénme shì dōu bù zuò?",
		en: "How come you haven't done anything at home?"
	},
	{
		id: 1601,
		zh: "你的手机在包里吗？",
		pi: "Nǐ de shǒujī zài bāo lǐ ma?",
		en: "Is your cell phone in the bag?"
	},
	{
		id: 1602,
		zh: "他在楼下",
		pi: "Tā zài lóuxià",
		en: "He is downstairs"
	},
	{
		id: 1603,
		zh: "我在火车上",
		pi: "Wǒ zài huǒchē shàng",
		en: "I am on the train"
	},
	{
		id: 1604,
		zh: "我在地铁上",
		pi: "Wǒ zài dìtiě shàng",
		en: "I'm on the metro"
	},
	{
		id: 1605,
		zh: "别说了，我不想听",
		pi: "Bié shuō le, wǒ bù xiǎng tīng",
		en: "Stop talking. I don't want to listen"
	},
	{
		id: 1606,
		zh: "别问了，我不想说",
		pi: "Bié wèn le, wǒ bù xiǎng shuō",
		en: "Stop asking. I don't want to say"
	},
	{
		id: 1607,
		zh: "别做了，明天做吧",
		pi: "Bié zuò le, míngtiān zuò ba",
		en: "Stop doing it. Do it tomorrow"
	},
	{
		id: 1608,
		zh: "别看了，睡觉",
		pi: "Bié kàn le, shuìjiào",
		en: "Stop watching. Go to sleep"
	},
	{
		id: 1609,
		zh: "别哭了",
		pi: "Bié kū le",
		en: "Stop crying"
	},
	{
		id: 1610,
		zh: "别笑了，别人都在看你",
		pi: "Bié xiào le, biérén dōu zài kàn nǐ",
		en: "Stop laughing. Other people are looking at you"
	},
	{
		id: 1611,
		zh: "别吃了，我们要迟到了",
		pi: "Bié chī le, wǒmen yào chídào le",
		en: "Stop eating. We're going to be late"
	},
	{
		id: 1612,
		zh: "别玩了，去写作业",
		pi: "Bié wán le, qù xiě zuòyè",
		en: "Stop playing. Do your homework"
	},
	{
		id: 1613,
		zh: "别喝了，你已经醉了",
		pi: "Bié hē le, nǐ yǐjīng zuì le",
		en: "Stop drinking. You're already drunk"
	},
	{
		id: 1614,
		zh: "别买了，太贵了",
		pi: "Bié mǎi le, tài guì le",
		en: "Don't buy it. It's too expensive"
	},
	{
		id: 1615,
		zh: "别做饭了，出去吃吧",
		pi: "Bié zuòfàn le, chūqù chī ba",
		en: "Let's go out for dinner instead of cook"
	},
	{
		id: 1616,
		zh: "下雨了，别出去了",
		pi: "Xiàyǔ le, bié chūqù le",
		en: "It's raining. Let's stay inside instead of going out"
	},
	{
		id: 1617,
		zh: "我今天晚上不喝酒",
		pi: "Wǒ jīntiān wǎnshang bù hējiǔ",
		en: "Tonight I'm not going to drink"
	},
	{
		id: 1618,
		zh: "爸爸不回来吃晚饭",
		pi: "Bàba bù huílái chī wǎnfàn",
		en: "Dad is not coming back to eat dinner"
	},
	{
		id: 1619,
		zh: "老板明天不来",
		pi: "Lǎobǎn míngtiān bù lái",
		en: "The boss won't come tomorrow"
	},
	{
		id: 1620,
		zh: "我知道这个周末不下雨",
		pi: "Wǒ zhīdào zhège zhōumò bù xiàyǔ",
		en: "I know it's not going to rain this weekend"
	},
	{
		id: 1621,
		zh: "你女朋友不跟你一起去吗？",
		pi: "Nǐ nǚpéngyou bù gēn nǐ yīqǐ qù ma?",
		en: "Is your girlfriend not going with you?"
	},
	{
		id: 1622,
		zh: "我不吃肉",
		pi: "Wǒ bù chī ròu",
		en: "I don't eat meat"
	},
	{
		id: 1623,
		zh: "你们都不喝酒吗？",
		pi: "Nǐmen dōu bù hējiǔ ma?",
		en: "Do you all not drink alcohol?"
	},
	{
		id: 1624,
		zh: "他不喜欢说话",
		pi: "Tā bù xǐhuan shuōhuà",
		en: "He doesn't like to speak"
	},
	{
		id: 1625,
		zh: "你不用手机看书吗？",
		pi: "Nǐ bù yòng shǒujī kàn shū ma?",
		en: "Do you not use your phone to read books?"
	},
	{
		id: 1626,
		zh: "你晚上不洗澡吗？",
		pi: "Nǐ wǎnshang bù xǐzǎo ma?",
		en: "Don't you shower at night?"
	},
	{
		id: 1627,
		zh: "我们不饿",
		pi: "Wǒmen bù è",
		en: "We're not hungry"
	},
	{
		id: 1628,
		zh: "你不胖",
		pi: "Nǐ bù pàng",
		en: "You are not fat"
	},
	{
		id: 1629,
		zh: "我家不远",
		pi: "Wǒ jiā bù yuǎn",
		en: "My home is not far"
	},
	{
		id: 1630,
		zh: "今天不冷",
		pi: "Jīntiān bù lěng",
		en: "Today it isn't cold"
	},
	{
		id: 1631,
		zh: "你是不是我的老师？",
		pi: "Nǐ shì bu shì wǒ de lǎoshī?",
		en: "Are you my teacher or not?"
	},
	{
		id: 1632,
		zh: "她想不想来？",
		pi: "Tā xiǎng bu xiǎnglái?",
		en: "Does she want to come?"
	},
	{
		id: 1633,
		zh: "你爱不爱我？",
		pi: "Nǐ ài bu ài wǒ?",
		en: "Do you love me or not?"
	},
	{
		id: 1634,
		zh: "你们周末上不上班？",
		pi: "Nǐmen zhōumò shàng bu shàngbān?",
		en: "Do you all go to work on weekends?"
	},
	{
		id: 1635,
		zh: "你的外国朋友们喜不喜欢吃中国菜？",
		pi: "Nǐ de wàiguó péngyoumen xǐ bu xǐhuan chī Zhōngguó cài?",
		en: "Do your foreign friends like to eat Chinese food?"
	},
	{
		id: 1636,
		zh: "我们去吃饭，好不好？",
		pi: "Wǒmen qù chīfàn, hǎo bu hǎo?",
		en: "Let's go eat, is that OK?"
	},
	{
		id: 1637,
		zh: "你们是好朋友，对不对？",
		pi: "Nǐmen shì hǎo péngyou, duì bu duì?",
		en: "You are good friends, right?"
	},
	{
		id: 1638,
		zh: "他没有打电话给我",
		pi: "Tā méiyǒu dǎ diànhuà gěi wǒ",
		en: "He did not give me a call"
	},
	{
		id: 1639,
		zh: "你没去上班吗？",
		pi: "Nǐ méi qù shàngbān ma?",
		en: "You didn't go to work?"
	},
	{
		id: 1640,
		zh: "我昨天没喝酒",
		pi: "Wǒ zuótiān méi hējiǔ",
		en: "I did not drink alcohol yesterday"
	},
	{
		id: 1641,
		zh: "妈妈没有做晚饭",
		pi: "Māma méiyǒu zuò wǎnfàn",
		en: "Mom did not cook dinner"
	},
	{
		id: 1642,
		zh: "他们吃完饭以后没付钱",
		pi: "Tāmen chī wán fàn yǐhòu méi fù qián",
		en: "They didn't pay after they finished eating"
	},
	{
		id: 1643,
		zh: "我没有钱",
		pi: "Wǒ méiyǒu qián",
		en: "I don't have money"
	},
	{
		id: 1644,
		zh: "他没有女朋友",
		pi: "Tā méiyǒu nǚpéngyou",
		en: "He doesn't have a girlfriend"
	},
	{
		id: 1645,
		zh: "我没办法",
		pi: "Wǒ méi bànfǎ",
		en: "I don't have a way"
	},
	{
		id: 1646,
		zh: "我没有办法",
		pi: "Wǒ méiyǒu bànfǎ",
		en: "I don't have a way"
	},
	{
		id: 1647,
		zh: "你没有我高",
		pi: "Nǐ méiyǒu wǒ gāo",
		en: "You are not as tall as me"
	},
	{
		id: 1648,
		zh: "我的手机没有他的手机贵",
		pi: "Wǒ de shǒujī méiyǒu tā de shǒujī guì",
		en: "My cell phone isn't as expensive as his"
	},
	{
		id: 1649,
		zh: "我们都没有老板忙",
		pi: "Wǒmen dōu méiyǒu lǎobǎn máng",
		en: "We all are not as busy as the boss"
	},
	{
		id: 1650,
		zh: "上海的冬天没有北京的冬天冷",
		pi: "Shànghǎi de dōngtiān méiyǒu Běijīng de dōngtiān lěng",
		en: "Shanghai winters are not as cold Beijing winters"
	},
	{
		id: 1651,
		zh: "他以前不是我的老板",
		pi: "Tā yǐqián bù shì wǒ de lǎobǎn",
		en: "He was not my boss before"
	},
	{
		id: 1652,
		zh: "我不知道他要来",
		pi: "Wǒ bù zhīdào tā yào lái",
		en: "I didn't know he was coming"
	},
	{
		id: 1653,
		zh: "他小时候不认识她",
		pi: "Tā xiǎo shíhou bù rènshi tā",
		en: "He did not know her when he was young"
	},
	{
		id: 1654,
		zh: "昨天我不在家",
		pi: "Zuótiān wǒ bù zài jiā",
		en: "I was not home yesterday"
	},
	{
		id: 1655,
		zh: "你也要茶吗？",
		pi: "Nǐ yě yào chá ma?",
		en: "Do you also want tea?"
	},
	{
		id: 1656,
		zh: "我们都要咖啡",
		pi: "Wǒmen dōu yào kāfēi",
		en: "We all want coffee"
	},
	{
		id: 1657,
		zh: "大家要不要米饭？",
		pi: "Dàjiā yào bù yào mǐfàn?",
		en: "Does everyone want rice?"
	},
	{
		id: 1658,
		zh: "你们要冰水还是热水？",
		pi: "Nǐmen yào bīng shuǐ háishì rè shuǐ?",
		en: "Do you want ice water or hot water?"
	},
	{
		id: 1659,
		zh: "谢谢，我什么都不要",
		pi: "Xièxiè, wǒ shénme dōu bù yào",
		en: "Thank you. I don't need anything"
	},
	{
		id: 1660,
		zh: "我想你",
		pi: "Wǒ xiǎng nǐ",
		en: "I miss you"
	},
	{
		id: 1661,
		zh: "我有点想我的家人",
		pi: "Wǒ yǒudiǎn xiǎng wǒ de jiārén",
		en: "I sort of miss my family"
	},
	{
		id: 1662,
		zh: "你们回美国以后，会想中国菜吗？",
		pi: "Nǐmen huí Měiguó yǐhòu, huì xiǎng Zhōngguó cài ma?",
		en: "Will you all miss Chinese food after you go back to the U.S.?"
	},
	{
		id: 1663,
		zh: "你女朋友不在的时候，你会想她吗？",
		pi: "Nǐ nǚpéngyou bù zài de shíhou, nǐ huì xiǎng tā ma?",
		en: "Do you miss your girlfriend when she is not around?"
	},
	{
		id: 1664,
		zh: "妈妈打电话的时候跟我说，她很想我",
		pi: "Māma dǎ diànhuà de shíhou gēn wǒ shuō, tā hěn xiǎng wǒ",
		en: "Mom called me and said she misses me a lot"
	},
	{
		id: 1665,
		zh: "我要休息",
		pi: "Wǒ yào xiūxi",
		en: "I want to rest"
	},
	{
		id: 1666,
		zh: "你也要回家吗？",
		pi: "Nǐ yě yào huíjiā ma?",
		en: "Do you also want to go home?"
	},
	{
		id: 1667,
		zh: "你们要喝什么？",
		pi: "Nǐmen yào hē shénme?",
		en: "What do you want to drink?"
	},
	{
		id: 1668,
		zh: "我要帮老板做完这些工作",
		pi: "Wǒ yào bāng lǎobǎn zuò wán zhèxiē gōngzuò",
		en: "I want to help the boss finish this work"
	},
	{
		id: 1669,
		zh: "大家晚上要不要出去吃？",
		pi: "Dàjiā wǎnshang yào bu yào chūqù chī?",
		en: "Does everyone want to go out to eat tonight?"
	},
	{
		id: 1670,
		zh: "我不想见她",
		pi: "Wǒ bù xiǎng jiàn tā",
		en: "I wouldn't like to see her"
	},
	{
		id: 1671,
		zh: "周末你们想看电影吗？",
		pi: "Zhōumò nǐmen xiǎng kàn diànyǐng ma?",
		en: "Would you like to see a movie this weekend?"
	},
	{
		id: 1672,
		zh: "我想请你吃饭",
		pi: "Wǒ xiǎng qǐng nǐ chīfàn",
		en: "I'd like to treat you to dinner"
	},
	{
		id: 1673,
		zh: "他们春节不想回家吗？",
		pi: "Tāmen Chūnjié bù xiǎng huíjiā ma?",
		en: "Don't they want to go back home for Spring Festival?"
	},
	{
		id: 1674,
		zh: "星期六我要去北京",
		pi: "Xīngqīliù wǒ yào qù Běijīng",
		en: "I'm going to Beijing on Saturday"
	},
	{
		id: 1675,
		zh: "下个月她要找新工作",
		pi: "Xià gè yuè tā yào zhǎo xīn gōngzuò",
		en: "She is going to look for a new job next month"
	},
	{
		id: 1676,
		zh: "这个周末你们要出去玩吗？",
		pi: "Zhège zhōumò nǐmen yào chūqù wán ma?",
		en: "Are you going out partying this weekend?"
	},
	{
		id: 1677,
		zh: "结婚以后，你要跟父母住在一起吗？",
		pi: "Jiéhūn yǐhòu, nǐ yào gēn nǐ fùmǔ zhù zài yīqǐ ma?",
		en: "Are you going to live together with your parents after you get married?"
	},
	{
		id: 1678,
		zh: "生完孩子以后，你太太要回去工作吗？",
		pi: "Shēng wán háizi yǐhòu, nǐ tàitai yào huíqù gōngzuò ma?",
		en: "Is your wife going back to work after she finishes giving birth to the baby?"
	},
	{
		id: 1679,
		zh: "你想要几个孩子？",
		pi: "Nǐ xiǎngyào jǐ gè háizi?",
		en: "How many kids do you want to have?"
	},
	{
		id: 1680,
		zh: "我老婆总是想要最贵的包",
		pi: "Wǒ lǎopo zǒngshì xiǎngyào zuì guì de bāo",
		en: "My wife always wants the most expensive bags"
	},
	{
		id: 1681,
		zh: "她想要找一个有钱的男朋友",
		pi: "Tā xiǎngyào zhǎo yī gè yǒuqián de nánpéngyou",
		en: "She wants to find a rich boyfriend"
	},
	{
		id: 1682,
		zh: "你们为什么想要离开北京？",
		pi: "Nǐmen wèishénme xiǎngyào líkāi Běijīng?",
		en: "Why do you all want to leave Beijing?"
	},
	{
		id: 1683,
		zh: "他想要帮你找一个更好的工作",
		pi: "Tā xiǎngyào bāng nǐ zhǎo yī gè gèng hǎo de gōngzuò",
		en: "He wants to help you find a better job"
	},
	{
		id: 1684,
		zh: "我们全家都去过北京",
		pi: "Wǒmen quán jiā dōu qù guo Běijīng",
		en: "Our entire family has been to Beijing"
	},
	{
		id: 1685,
		zh: "全公司的人都不喜欢新老板",
		pi: "Quán gōngsī de rén dōu bù xǐhuan xīn lǎobǎn",
		en: "The whole company doesn't like the new boss"
	},
	{
		id: 1686,
		zh: "运动完以后我全身都是汗",
		pi: "Yùndòng wán yǐhòu wǒ quán shēn dōu shì hàn",
		en: "My whole body was sweaty after I finished exercising"
	},
	{
		id: 1687,
		zh: "全校都放假了",
		pi: "Quán xiào dōu fàngjià le",
		en: "The whole school is on break"
	},
	{
		id: 1688,
		zh: "这个地方全年都很热",
		pi: "Zhège dìfang quán nián dōu hěn rè",
		en: "This place is hot all year round"
	},
	{
		id: 1689,
		zh: "大家全都到了",
		pi: "Dàjiā quán dōu dào le",
		en: "Everybody has arrived"
	},
	{
		id: 1690,
		zh: "奶奶的头发全都白了",
		pi: "Nǎinai de tóufà quán dōu bái le",
		en: "All of grandma's hair has turned white"
	},
	{
		id: 1691,
		zh: "我妈妈做的菜全都好吃",
		pi: "Wǒ māma zuò de cài quán dōu hǎochī",
		en: "All of the food that my mother makes is tasty"
	},
	{
		id: 1692,
		zh: "作业全都做完了吗？",
		pi: "Zuòyè quán dōu zuò wán le ma?",
		en: "Have you finished all your homework?"
	},
	{
		id: 1693,
		zh: "你全都拿走吧",
		pi: "Nǐ quán dōu názǒu ba",
		en: "Take them all"
	},
	{
		id: 1694,
		zh: "他们全都没去",
		pi: "Tāmen quán dōu méi qù",
		en: "None of them went"
	},
	{
		id: 1695,
		zh: "这个周末我们全都不在家",
		pi: "Zhège zhōumò wǒmen quán dōu bú zài jiā",
		en: "None of us will be home this weekend"
	},
	{
		id: 1696,
		zh: "你们全都不怕吗？",
		pi: "Nǐmen quán dōu bú pà ma?",
		en: "Are none of you afraid?"
	},
	{
		id: 1697,
		zh: "这些菜全都没熟",
		pi: "Zhèxiē cài quán dōu méi shú",
		en: "None of these dishes is fully cooked"
	},
	{
		id: 1698,
		zh: "他的话我全都不相信",
		pi: "Tā de huà wǒ quán dōu bù xiāngxìn",
		en: "I don't believe anything he says"
	},
	{
		id: 1699,
		zh: "他说得有道理，但我不全都同意",
		pi: "Tā shuō de yǒu dàolǐ, dàn wǒ bù quán dōu tóngyì",
		en: "He has a point, but I don't agree with all of it"
	},
	{
		id: 1700,
		zh: "菜太多了，我们没全都吃完",
		pi: "Cài tài duō le, wǒmen méi quán dōu chī wán",
		en: "The food was too much. We didn't finish eating it all"
	},
	{
		id: 1701,
		zh: "昨天作业太多了，我没全都做完",
		pi: "Zuótiān zuòyè tài duō le, wǒ méi quán dōu zuò wán",
		en: "I had too much homework yesterday. I didn't finish doing it all"
	},
	{
		id: 1702,
		zh: "我的家人没全都来参加我的婚礼",
		pi: "ǒ de jiārén méi quán dōu lái cānjiā wǒ de hūnlǐ",
		en: "Not all of my family came to my wedding"
	},
	{
		id: 1703,
		zh: "你说得太快了，我没全都记下来",
		pi: "Nǐ shuō de tài kuài le, wǒ méi quán dōu jì xiàlái",
		en: "You spoke too fast. I didn't write down all of what you said"
	},
	{
		id: 1704,
		zh: "你的脸红红的",
		pi: "Nǐ de liǎn hóng hóng de",
		en: "Your face is red"
	},
	{
		id: 1705,
		zh: "宝宝的眼睛大大的",
		pi: "Bǎobao de yǎnjīng dà dà de",
		en: "The baby's eyes are big"
	},
	{
		id: 1706,
		zh: "今晚的月亮圆圆的",
		pi: "Jīnwǎn de yuèliàng yuán yuán de",
		en: "The moon is round tonight"
	},
	{
		id: 1707,
		zh: "她爸爸高高胖胖的",
		pi: "Tā bàba gāo gāo pàng pàng de",
		en: "Her father is tall and fat"
	},
	{
		id: 1708,
		zh: "我妹妹瘦瘦小小的",
		pi: "Wǒ mèimei shòu shòu xiǎo xiǎo de",
		en: "My little sister is thin and small"
	},
	{
		id: 1709,
		zh: "我们清清楚楚地看到他跟一个胖胖的男人上车了",
		pi: "Wǒmen qīngqīng-chǔchǔ de kàndào tā gēn yī gè pàng pàng de nánrén shàngchē le",
		en: "We clearly saw him get in the car with a fat man"
	},
	{
		id: 1710,
		zh: "我真想舒舒服服地躺在沙发上看电视",
		pi: "Wǒ zhēn xiǎng shūshū-fūfū de tǎng zài shāfā shàng kàn diànshì",
		en: "I'd really like to comfortably lie on the couch and watch TV"
	},
	{
		id: 1711,
		zh: "你妈妈辛辛苦苦地做了两个小时的饭，你怎么不吃？",
		pi: "Nǐ māma xīnxīn-kǔkǔ de zuò le liǎng gè xiǎoshí de fàn, nǐ zěnme bù chī?",
		en: "Your mother labored over this meal for two hours, and you aren't going to eat it?"
	},
	{
		id: 1712,
		zh: "妹妹快过生日了，我打算给她办一个生日派对，热闹热闹",
		pi: "Mèimei kuài guò shēngrì le, wǒ dǎsuàn gěi tā bàn yī gè shēngrì pàiduì, rènao rènao",
		en: "My little sister's birthday is coming and I plan to throw her a birthday party and have a blast"
	},
	{
		id: 1713,
		zh: "来，喝点酒，高兴高兴",
		pi: "Lái, hē diǎn jiǔ, gāoxìng gāoxìng",
		en: "Come on, have a little wine and enjoy yourself"
	},
	{
		id: 1714,
		zh: "到这里来凉快凉快",
		pi: "Dào zhèlǐ lái liángkuai liángkuai",
		en: "Come over here and cool off"
	},
	{
		id: 1715,
		zh: "我想去外面走走，安静一下",
		pi: "Wǒ xiǎng qù wàimiàn zǒuzou, ānjìng yīxià",
		en: "I'd like to take a walk outside, get some quiet time"
	},
	{
		id: 1716,
		zh: "想不想去做个按摩，放松一下",
		pi: "Xiǎng bu xiǎng qù zuò gè ànmó, fàngsōng yīxià",
		en: "Would you like to go get a massage and unwind?"
	},
	{
		id: 1717,
		zh: "你要努力地学习",
		pi: "Nǐ yào nǔlì de xuéxí",
		en: "You must study hard"
	},
	{
		id: 1718,
		zh: "雨天地滑，慢慢地走",
		pi: "Yǔtiān dì huá, màn màn de zǒu",
		en: "The floor is very slippery on rainy days. Walk slowly"
	},
	{
		id: 1719,
		zh: "他顺利地通过考试了",
		pi: "tā shùnlì de tōngguò kǎoshì le",
		en: "He passed the exam successfully"
	},
	{
		id: 1720,
		zh: "他认真地对我说：\“我喜欢你。\“",
		pi: "Tā rènzhēn de duì wǒ shuō: \"wǒ xǐhuan nǐ\"",
		en: "In all seriousness, he said to me: \"I like you\""
	},
	{
		id: 1721,
		zh: "他热情地拥抱了我",
		pi: "Tā rèqíng de yōngbào le wǒ",
		en: "He gave me a very warm embrace"
	},
	{
		id: 1722,
		zh: "她激动地对我说\“谢谢\”",
		pi: "Tā jīdòng de duì wǒ shuō \"xièxie\"",
		en: "She said \"thank you\" to me excitedly"
	},
	{
		id: 1723,
		zh: "老师生气地看着我们",
		pi: "Lǎoshī shēngqì de kàn zhe wǒmen",
		en: "The teacher is looking at us angrily"
	},
	{
		id: 1724,
		zh: "孩子们开心地唱了起来",
		pi: "Háizi men kāixīn de chàng le qǐlai",
		en: "The children started to sing happily"
	},
	{
		id: 1725,
		zh: "大家都在教室里安安静静地看书",
		pi: "Dàjiā dōu zài jiàoshì lǐ ānān-jìngjìng de kàn shū",
		en: "Everybody is reading quietly in the classroom"
	},
	{
		id: 1726,
		zh: "我希望你快快乐乐地长大",
		pi: "Wǒ xīwàng nǐ kuàikuài-lèlè de zhǎngdà",
		en: "I hope that you grow up happily"
	},
	{
		id: 1727,
		zh: "我正好要出去，垃圾我来扔吧",
		pi: "Wǒ zhènghǎo yào chūqù, lājī wǒ lái rēng ba",
		en: "I'm just about to leave. I'll take out the trash"
	},
	{
		id: 1728,
		zh: "你来了！我正好要找你",
		pi: "Nǐ lái le! Wǒ zhènghǎo yào zhǎo nǐ",
		en: "You are here! I was just looking for you"
	},
	{
		id: 1729,
		zh: "他正好问了我想问的问题",
		pi: "Tā zhènghǎo wèn le wǒ xiǎng wèn de wèntí",
		en: "He happened to ask the question that I wanted to ask"
	},
	{
		id: 1730,
		zh: "我正好也在这里实习",
		pi: "Wǒ zhènghǎo yě zài zhèlǐ shíxí",
		en: "I happen to be interning here too"
	},
	{
		id: 1731,
		zh: "正好你们都是单身",
		pi: "Zhènghǎo nǐmen dōu shì dānshēn",
		en: "You both happen to be single"
	},
	{
		id: 1732,
		zh: "我明天见他，正好可以问问他这件事",
		pi: "Wǒ míngtiān jiàn tā, zhènghǎo kěyǐ wènwen tā zhè jiàn shì",
		en: "I'm going to meet with him tomorrow. I can just ask him about this matter"
	},
	{
		id: 1733,
		zh: "我们正好也要去那儿，一起走吧",
		pi: "Wǒmen zhènghǎo yě yào qù nàr, yīqǐ zǒu ba",
		en: "We just happen to be going there. Let's go together"
	},
	{
		id: 1734,
		zh: "我敲门的时候，他正好出门",
		pi: "Wǒ qiāo mén de shíhou, tā zhènghǎo chūmén",
		en: "He just happened to be leaving the house while I was knocking at the door"
	},
	{
		id: 1735,
		zh: "这件衣服的大小正好",
		pi: "Zhè jiàn yīfu de dà xiǎo zhènghǎo",
		en: "The size of these clothes is just right"
	},
	{
		id: 1736,
		zh: "水温正好，不冷也不热",
		pi: "Shuǐwēn zhènghǎo, bù lěng yě bù rè",
		en: "The temperature of the water is perfect, not too cold, not too hot"
	},
	{
		id: 1737,
		zh: "问我干吗？我又不知道",
		pi: "Wèn wǒ gànmá? Wǒ yòu bù zhīdào",
		en: "Why ask me? I definitely don't know"
	},
	{
		id: 1738,
		zh: "这些菜又没坏，为什么要扔？",
		pi: "Zhèxiē cài yòu méi huài, wèishénme yào rēng?",
		en: "These dishes haven't gone bad. Why would you throw them away?"
	},
	{
		id: 1739,
		zh: "不要生气，我又不是故意的",
		pi: "Bùyào shēngqì, wǒ yòu bù shì gùyì de",
		en: "Don't be mad.It really wasn't on purpose"
	},
	{
		id: 1740,
		zh: "今天又不热，开空调干吗？",
		pi: "Jīntiān yòu bù rè, kāi kōngtiáo gànmá?",
		en: "It's not hot today. Why turn on the air conditioner?"
	},
	{
		id: 1741,
		zh: "明天又不上班，那么早起床干吗？",
		pi: "Míngtiān yòu bù shàngbān, nàme zǎo qǐchuáng gànmá?",
		en: "You don't work tomorrow. Why get up so early?"
	},
	{
		id: 1742,
		zh: "你现在又不忙，来帮我一下",
		pi: "Nǐ xiànzài yòu bù máng, lái bāng wǒ yīxià",
		en: "You're not busy now. Come and help me"
	},
	{
		id: 1743,
		zh: "我又没吃过，怎么知道好不好吃？",
		pi: "Wǒ yòu méi chī guo, zěnme zhīdào hǎo bu hǎochī?",
		en: "I haven't eaten it. How would I know if it is tasty or not?"
	},
	{
		id: 1744,
		zh: "孩子又没做错，打他干吗？",
		pi: "Háizi yòu méi zuò cuò, dǎ tā gànmá?",
		en: "The child didn't do anything wrong. Why are you spanking him?"
	},
	{
		id: 1745,
		zh: "又没下雨，带伞干吗？",
		pi: "Yòu méi xiàyǔ, dài sǎn gànmá?",
		en: "It's not raining. Why are you bringing the umbrella?"
	},
	{
		id: 1746,
		zh: "又不关你的事，问那么多干吗？",
		pi: "Yòu bù guān nǐ de shì, wèn nàme duō gànmá?",
		en: "It's none of your business. Why all the questions?"
	},
	{
		id: 1747,
		zh: "你原来的发型也很可爱",
		pi: "Nǐ yuánlái de fàxíng yě hěn kě'ài",
		en: "Your original hairstyle was also very cute"
	},
	{
		id: 1748,
		zh: "这件衣服原来的价格是999块",
		pi: "Zhè jiàn yīfu yuánlái de jiàgé shì jiǔbǎi jiǔshí-jiǔ kuài",
		en: "The original price of this piece of clothing was 999 RMB"
	},
	{
		id: 1749,
		zh: "她们原来只是邻居，现在是很好的朋友",
		pi: "Tāmen yuánlái zhǐ shì línjū, xiànzài shì hěn hǎo de péngyou",
		en: "Originally they were just neighbors. Now they're very good friends"
	},
	{
		id: 1750,
		zh: "我们原来住在浦东，几个月以前搬到了这里",
		pi: "Wǒmen yuánlái zhù zài Pǔdōng, jǐ gè yuè yǐqián bān dào le zhèlǐ",
		en: "Originally we lived in Pudong. We moved here a few months ago"
	},
	{
		id: 1751,
		zh: "原来她是他的中文老师，现在是他老婆",
		pi: "Yuánlái tā shì tā de Zhōngwén lǎoshī, xiànzài shì tā lǎopo",
		en: "She was originally his Chinese teacher. She is now his wife"
	},
	{
		id: 1752,
		zh: "原来是你",
		pi: "Yuánlái shì nǐ!",
		en: "So it was you all along!"
	},
	{
		id: 1753,
		zh: "原来你们认识",
		pi: "Yuánlái nǐmen rènshi!",
		en: "So you both knew each other this whole time!"
	},
	{
		id: 1754,
		zh: "原来是这样",
		pi: "Yuánlái shì zhèyàng!",
		en: "Oh, so it's like that!"
	},
	{
		id: 1755,
		zh: "原来你这么有钱",
		pi: "Yuánlái nǐ zhème yǒuqián!",
		en: "It turns out you are so rich!"
	},
	{
		id: 1756,
		zh: "原来你在骗我！我怎么那么傻？",
		pi: "Yuánlái nǐ zài piàn wǒ! Wǒ zěnme nàme shǎ?",
		en: "You have been tricking me all along. How could I be so stupid?"
	},
	{
		id: 1757,
		zh: "车差点撞到我",
		pi: "Chē chàdiǎn zhuàngdào wǒ",
		en: "The car almost hit me"
	},
	{
		id: 1758,
		zh: "我们差点相信他",
		pi: "Wǒmen chàdiǎn xiāngxìn tā",
		en: "We almost believed him"
	},
	{
		id: 1759,
		zh: "他们差点打起来",
		pi: "Tāmen chàdiǎn dǎ qǐlái",
		en: "They almost started a fight"
	},
	{
		id: 1760,
		zh: "我差点忘了",
		pi: "Wǒ chàdiǎn wàng le",
		en: "I almost forgot"
	},
	{
		id: 1761,
		zh: "我今天差点迟到了",
		pi: "Wǒ jīntiān chàdiǎn chídào le",
		en: "I was almost late today"
	},
	{
		id: 1762,
		zh: "她差点疯了",
		pi: "Tā chàdiǎn fēng le",
		en: "She almost went crazy"
	},
	{
		id: 1763,
		zh: "他差点就死了",
		pi: "Tā chàdiǎn jiù sǐ le",
		en: "He almost died"
	},
	{
		id: 1764,
		zh: "菜差点糊了",
		pi: "Cài chàdiǎn hú le",
		en: "The food was almost burned"
	},
	{
		id: 1765,
		zh: "我们队差点输了",
		pi: "Wǒmen duì chàdiǎn shū le",
		en: "Our team almost lost"
	},
	{
		id: 1766,
		zh: "我差点就打他了",
		pi: "Wǒ chàdiǎn jiù dǎ tā le",
		en: "I almost hit him"
	},
	{
		id: 1767,
		zh: "他从来都这样",
		pi: "Tā cónglái dōu zhèyàng",
		en: "He's always like this"
	},
	{
		id: 1768,
		zh: "她从来都这么晚睡",
		pi: "Tā cónglái dōu zhème wǎn shuì",
		en: "She's always gone to bed so late"
	},
	{
		id: 1769,
		zh: "他说话从来都很大声",
		pi: "Tā shuōhuà cónglái dōu hěn dàshēng",
		en: "He's always spoken very loudly"
	},
	{
		id: 1770,
		zh: "我们学校的学生从来都只能穿校服",
		pi: "Wǒmen xuéxiào de xuéshēng cónglái dōu zhǐ néng chuān xiàofú",
		en: "Students in our school can only wear school uniforms"
	},
	{
		id: 1771,
		zh: "成功从来都要靠自己努力",
		pi: "Chénggōng cónglái dōu yào kào zìjǐ nǔlì",
		en: "Success always depends on working hard by oneself"
	},
	{
		id: 1772,
		zh: "我们下棋，从来都是他赢",
		pi: "Wǒmen xiàqí, cónglái dōushì tā yíng",
		en: "He always wins when we play chess"
	},
	{
		id: 1773,
		zh: "她买衣服从来都是只买名牌",
		pi: "Tā mǎi yīfu cónglái dōushì zhǐ mǎi míngpái",
		en: "She always buys brand-name clothes when she goes shopping"
	},
	{
		id: 1774,
		zh: "我从来都是一个人住，已经习惯了",
		pi: "Wǒ cónglái dōushì yīgèrén zhù, yǐjīng xíguàn le",
		en: "I've always lived alone; I'm used to it already"
	},
	{
		id: 1775,
		zh: "她穿得很少，结果感冒了",
		pi: "Tā chuān de hěn shǎo, jiéguǒ gǎnmào le",
		en: "She didn't dress warmly enough, and as a result, she caught a cold"
	},
	{
		id: 1776,
		zh: "我太紧张了，结果说错了很多",
		pi: "Wǒ tài jǐnzhāng le, jiéguǒ shuō cuò le hěn duō",
		en: "I was too nervous. As a result, I misspoke a lot"
	},
	{
		id: 1777,
		zh: "他开得太快了，结果撞到了一个人",
		pi: "Tā kāi de tài kuài le, jiéguǒ zhuàngdào le yī gè rén",
		en: "He drove too fast. As a result, he hit someone"
	},
	{
		id: 1778,
		zh: "他没好好复习，结果考试没考好",
		pi: "Tā méi hǎohǎo fùxí, jiéguǒ kǎoshì méi kǎo hǎo",
		en: "He didn't review well. As a result, he didn't do well in the exam"
	},
	{
		id: 1779,
		zh: "他总是迟到，结果老板炒了他的鱿鱼",
		pi: "Tā zǒngshì chídào, jiéguǒ lǎobǎn chǎo le tā de yóuyú",
		en: "He's always late for work. As a result, his boss fired him"
	},
	{
		id: 1780,
		zh: "我去机场接他，结果没接到他",
		pi: "Wǒ qù jīchǎng jiē tā, jiéguǒ méi jiēdào tā",
		en: "I went to the airport to pick him up. But in the end, I didn't find him there"
	},
	{
		id: 1781,
		zh: "我跟朋友打赌，结果我输了",
		pi: "Wǒ gēn péngyou dǎdǔ, jiéguǒ wǒ shū le",
		en: "I made a bet with a friend. I lost in the end"
	},
	{
		id: 1782,
		zh: "我昨天跟朋友去喝酒，结果喝醉了",
		pi: "Wǒ zuótiān gēn péngyou qù hējiǔ, jiéguǒ hēzuì le",
		en: "I went to have a drink with my friends yesterday. I ended up getting drunk"
	},
	{
		id: 1783,
		zh: "他吃了很多药，结果都没有用",
		pi: "Tā chī le hěn duō yào, jiéguǒ dōu méiyǒu yòng",
		en: "He took a lot of pills. None of them worked in the end"
	},
	{
		id: 1784,
		zh: "我点的是牛肉汉堡，结果服务员给了我一个鸡肉的",
		pi: "Wǒ diǎn de shì niúròu hànbǎo, jiéguǒ fúwùyuán gěi le wǒ yī gè jīròu de",
		en: "I ordered a burger. The waiter gave me a chicken sandwich instead"
	},
	{
		id: 1785,
		zh: "我们买了很多菜，够吃了",
		pi: "Wǒmen mǎi le hěn duō cài, gòu chī le",
		en: "We bought a lot of food. It's enough for us to eat"
	},
	{
		id: 1786,
		zh: "这些纸够用吗？",
		pi: "Zhèxiē zhǐ gòu yòng ma?",
		en: "Is this paper enough for us to use?"
	},
	{
		id: 1787,
		zh: "放心吧，我带的钱够花",
		pi: "Fàngxīn ba, wǒ dài de qián gòu huā",
		en: "Don't worry. I've brought enough money to spend"
	},
	{
		id: 1788,
		zh: "我对你够好了",
		pi: "Wǒ duì nǐ gòu hǎo le",
		en: "I've been good enough to you"
	},
	{
		id: 1789,
		zh: "别抱怨了，你够幸运了",
		pi: "Bié bàoyuàn le, nǐ gòu xìngyùn le",
		en: "Stop complaining. You've been lucky enough"
	},
	{
		id: 1790,
		zh: "他觉得他女朋友不够漂亮",
		pi: "Tā juéde tā nǚpéngyou bù gòu piàoliang",
		en: "He thinks his girlfriend is not pretty enough"
	},
	{
		id: 1791,
		zh: "你说得不够清楚",
		pi: "Nǐ shuō de bù gòu qīngchǔ",
		en: "You didn't speak clearly enough"
	},
	{
		id: 1792,
		zh: "这些菜不够吃，再点几个菜",
		pi: "Zhèxiē cài bù gòu chī, zài diǎn jǐ gè cài",
		en: "This food is not enough for us to eat. Let's order a few more dishes"
	},
	{
		id: 1793,
		zh: "这里太小了，不够坐",
		pi: "Zhèlǐ tài xiǎo le, bù gòu zuò",
		en: "It's too cramped here. There's not enough room to sit"
	},
	{
		id: 1794,
		zh: "你的包太小了，这些东西肯定不够放",
		pi: "Nǐ de bāo tài xiǎo le, zhèxiē dōngxi kěndìng bù gòu fàng",
		en: "Your bag is too small. There's definitely not enough room to hold this stuff"
	},
	{
		id: 1795,
		zh: "我受够了",
		pi: "Wǒ shòu gòu le!",
		en: "I've had enough!"
	},
	{
		id: 1796,
		zh: "天天吃外卖，我们都吃够了",
		pi: "Tiāntiān chī wàimài, wǒmen dōu chī gòu le",
		en: "We eat take-out every day. We're sick of eating it"
	},
	{
		id: 1797,
		zh: "你玩够了没有？",
		pi: "Nǐ wán gòu le méiyǒu?",
		en: "Are you done playing?"
	},
	{
		id: 1798,
		zh: "还是明天去吧",
		pi: "Háishì míngtiān qù ba",
		en: "We'd better go tomorrow"
	},
	{
		id: 1799,
		zh: "还是让她进来吧",
		pi: "Háishì ràng tā jìnlái ba",
		en: "We'd better let her come in"
	},
	{
		id: 1800,
		zh: "你还是快点走吧",
		pi: "Nǐ háishì kuài diǎn zǒu ba",
		en: "You'd better leave now"
	},
	{
		id: 1801,
		zh: "我们还是帮帮他吧",
		pi: "Wǒmen háishì bāngbang tā ba",
		en: "We'd better help him"
	},
	{
		id: 1802,
		zh: "太晚了，还是先回家吧",
		pi: "Tài wǎn le, háishì xiān huíjiā ba",
		en: "It's too late. We'd better go home now"
	},
	{
		id: 1803,
		zh: "这里太脏了，我们还是走吧",
		pi: "Zhèlǐ tài zāng le, wǒmen háishì zǒu ba",
		en: "It's too dirty here; we'd better leave"
	},
	{
		id: 1804,
		zh: "快迟到了，我们还是打车吧",
		pi: "Kuài chídào le, wǒmen háishì dǎchē ba",
		en: "We're running late. Let's take a taxi"
	},
	{
		id: 1805,
		zh: "太贵了，还是别买了",
		pi: "Tài guì le, háishì bié mǎi le",
		en: "It's too expensive. You'd better not buy it"
	},
	{
		id: 1806,
		zh: "她不想说，还是不要再问了",
		pi: "Tā bù xiǎng shuō, háishì bùyào zài wèn le",
		en: "She doesn't want to say. We'd better not ask again"
	},
	{
		id: 1807,
		zh: "他一定不同意，还是别跟他说了",
		pi: "Tā yīdìng bù tóngyì, háishì bié gēn tā shuō le",
		en: "He will definitely not agree to it. We'd better not say anything to him"
	},
	{
		id: 1808,
		zh: "你最好先休息一下",
		pi: "Nǐ zuìhǎo xiān xiūxi yīxià",
		en: "You'd better get some rest first"
	},
	{
		id: 1809,
		zh: "你们最好给他打个电话问一下",
		pi: "Nǐmen zuìhǎo gěi tā dǎ gè diànhuà wèn yīxià",
		en: "It would be best for you to give him a call and ask"
	},
	{
		id: 1810,
		zh: "那个地方不好找，我们最好查一下百度地图",
		pi: "Nàge dìfang bù hǎo zhǎo, wǒmen zuìhǎo chá yīxià Bǎidù dìtú",
		en: "It's not easy to find that place. We'd better search for it on Baidu Maps"
	},
	{
		id: 1811,
		zh: "外面挺冷的，最好多穿点",
		pi: "Wàimiàn tǐng lěng de, zuìhǎo duō chuān diǎn",
		en: "It's pretty cold outside. Best to wear some more layers"
	},
	{
		id: 1812,
		zh: "这个活动很重要，我们最好穿得正式一点",
		pi: "Zhège huódòng hěn zhòngyào, wǒmen zuìhǎo chuān de zhèngshì yīdiǎn",
		en: "This is an important event. We'd better wear something more formal"
	},
	{
		id: 1813,
		zh: "最好别去",
		pi: "Zuìhǎo bié qù",
		en: "You'd better not go"
	},
	{
		id: 1814,
		zh: "最好不要这样说",
		pi: "Zuìhǎo bùyào zhèyàng shuō",
		en: "It's best not to say something like this"
	},
	{
		id: 1815,
		zh: "晚饭最好不要吃那么多",
		pi: "Wǎnfàn zuìhǎo bùyào chī nàme duō",
		en: "It's best not to eat so much for dinner"
	},
	{
		id: 1816,
		zh: "雨这么大，最好别出门",
		pi: "Yǔ zhème dà, zuìhǎo bié chūmén",
		en: "It's raining so heavily. It's best not to leave the house"
	},
	{
		id: 1817,
		zh: "这个问题是隐私的，最好不要问",
		pi: "Zhège wèntí shì yǐnsī de, zuìhǎo bùyào wèn",
		en: "This question is private. You'd better not ask"
	},
	{
		id: 1818,
		zh: "别吵，一个一个说",
		pi: "Bié chǎo, yī gè yī gè shuō",
		en: "Don't argue. Speak one by one"
	},
	{
		id: 1819,
		zh: "别着急，一点一点做",
		pi: "Bié zháojí, yī diǎn yī diǎn zuò",
		en: "Don't worry, do it little by little"
	},
	{
		id: 1820,
		zh: "请一个房间一个房间检查",
		pi: "Qǐng yī gè fángjiān yī gè fángjiān jiǎnchá",
		en: "Please inspect room by room"
	},
	{
		id: 1821,
		zh: "别拿那么多，一个一个拿",
		pi: "Bié ná nàme duō, yī gè yī gè ná",
		en: "Don't carry so much. Carry them one at a time"
	},
	{
		id: 1822,
		zh: "宝宝一天一天在长大",
		pi: "Bǎobao yī tiān yī tiān zài zhǎngdà",
		en: "The baby is growing up day by day"
	},
	{
		id: 1823,
		zh: "爸爸妈妈一年一年在变老",
		pi: "Bàba māma yī nián yī nián zài biàn lǎo",
		en: "Year by year, mom and dad are growing old"
	},
	{
		id: 1824,
		zh: "我一次一次问，他就是什么都不说",
		pi: "Wǒ yī cì yī cì wèn, tā jiùshì shénme dōu bù shuō",
		en: "I asked him again and again, but he just wouldn't say anything"
	},
	{
		id: 1825,
		zh: "我一遍一遍地跟他解释，他还是不听",
		pi: "Wǒ yī biàn yī biàn de gēn tā jiěshì, tā háishì bù tīng",
		en: "I explained it to him again and again, but he still won't listen"
	},
	{
		id: 1826,
		zh: "你为什么一遍又一遍地听这首歌？",
		pi: "Nǐ wèishénme yī biàn yòu yī biàn de tīng zhè shǒu gē?",
		en: "Why do you listen to this song over and over again?"
	},
	{
		id: 1827,
		zh: "他们一次又一次犯这种小错误，让经理很头疼",
		pi: "Tāmen yī cì yòu yī cì fàn zhè zhǒng xiǎo cuòwù, ràng jīnglǐ hěn tóuténg",
		en: "They keep making the same mistake over and over again, and it's giving their manager a headache"
	},
	{
		id: 1828,
		zh: "这件事就我知道",
		pi: "Zhè jiàn shì jiù wǒ zhīdào",
		en: "I'm the only person that knows about this"
	},
	{
		id: 1829,
		zh: "我们都忘了，就他还记得",
		pi: "Wǒmen dōu wàng le, jiù tā hái jìde",
		en: "We all forgot. Only he still remembers it"
	},
	{
		id: 1830,
		zh: "大家都下班了，就老板还没走",
		pi: "Dàjiā dōu xiàbān le, jiù lǎobǎn hái méi zǒu",
		en: "Everyone finished work and left. Only the boss hasn't left"
	},
	{
		id: 1831,
		zh: "其他的菜都很好吃，就这两个菜有点咸",
		pi: "Qítā de cài dōu hěn hǎochī, jiù zhè liǎng gè cài yǒudiǎn xián",
		en: "The other dishes are great. Just these two dishes are a little salty"
	},
	{
		id: 1832,
		zh: "你觉得别人都是傻子吗？就你聪明？",
		pi: "Nǐ juéde biérén dōu shì shǎzi ma? Jiù nǐ cōngming?",
		en: "Do you think everyone else is an idiot? That only you are smart?"
	},
	{
		id: 1833,
		zh: "我就去过一次",
		pi: "Wǒ jiù qù guo yī cì",
		en: "I've only been there once"
	},
	{
		id: 1834,
		zh: "我早饭就吃了一片面包",
		pi: "Wǒ zǎofàn jiù chī le yī piàn miànbāo",
		en: "I only had a piece of bread for breakfast"
	},
	{
		id: 1835,
		zh: "你就点了两个菜？",
		pi: "Nǐ jiù diǎn le liǎng gè cài?",
		en: "You ordered only two dishes?"
	},
	{
		id: 1836,
		zh: "他的事，我们就知道一点点",
		pi: "Tā de shì, wǒmen jiù zhīdào yīdiǎndiǎn",
		en: "We only know a little about his business"
	},
	{
		id: 1837,
		zh: "她在我们公司就工作了两个月",
		pi: "Tā zài wǒmen gōngsī jiù gōngzuò le liǎng gè yuè",
		en: "She has worked at our company for only two months"
	},
	{
		id: 1838,
		zh: "这里就一个厕所？",
		pi: "Zhèlǐ jiù yī gè cèsuǒ?",
		en: "Does this place only have one bathroom?"
	},
	{
		id: 1839,
		zh: "你们家就一个孩子吗？",
		pi: "Nǐmen jiā jiù yī gè háizi ma?",
		en: "Does your family only have one child?"
	},
	{
		id: 1840,
		zh: "我就一个哥哥",
		pi: "Wǒ jiù yī gè gēge",
		en: "I only have one brother"
	},
	{
		id: 1841,
		zh: "他在上海就一个朋友",
		pi: "Tā zài Shànghǎi jiù yī gè péngyou",
		en: "He only has one friend in Shanghai"
	},
	{
		id: 1842,
		zh: "我们公司就三个员工",
		pi: "Wǒmen gōngsī jiù sān gè yuángōng",
		en: "There are only three employees in our company"
	},
	{
		id: 1843,
		zh: "先洗手再吃",
		pi: "Xiān xǐ shǒu zài chī",
		en: "Wash your hands first, and then eat"
	},
	{
		id: 1844,
		zh: "我喜欢先洗澡，再睡觉",
		pi: "Wǒ xǐhuan xiān xǐzǎo, zài shuìjiào",
		en: "I prefer to take a bath first and then go to bed"
	},
	{
		id: 1845,
		zh: "请你先买票再进去",
		pi: "Qǐng nǐ xiān mǎi piào zài jìnqù",
		en: "Please buy a ticket first and then enter"
	},
	{
		id: 1846,
		zh: "你要先做作业，再看电视",
		pi: "Nǐ yào xiān zuò zuòyè, zài kàn diànshì",
		en: "You need to do your homework first, and then watch TV"
	},
	{
		id: 1847,
		zh: "我想先找工作，再搬家",
		pi: "Wǒ xiǎng xiān zhǎo gōngzuò, zài bānjiā",
		en: "I want to find a job first, and then move"
	},
	{
		id: 1848,
		zh: "先吃饭再说",
		pi: "Xiān chīfàn zài shuō",
		en: "Let's eat first, then we'll talk"
	},
	{
		id: 1849,
		zh: "先休息一下再说",
		pi: "Xiān xiūxi yīxià zàishuō",
		en: "Let's rest a little first, then we'll see"
	},
	{
		id: 1850,
		zh: "你先看完再说",
		pi: "Nǐ xiān kàn wán zàishuō",
		en: "Finish reading first, and then we'll see"
	},
	{
		id: 1851,
		zh: "我先问一下老板再说",
		pi: "Wǒ xiān wèn yīxià lǎobǎn zàishuō",
		en: "I'm going to ask the boss first before doing anything else"
	},
	{
		id: 1852,
		zh: "你们先讨论一下再说",
		pi: "Nǐmen xiān tǎolùn yīxià zàishuō",
		en: "You guys discuss a little first, then we'll figure out what to do next"
	},
	{
		id: 1853,
		zh: "今天早上我起床以后先准备早饭，再叫孩子们起床，接着我们一起吃早饭，然后我送他们去学校",
		pi: "Jīntiān zǎoshang wǒ qǐchuáng yǐhòu xiān zhǔnbèi zǎofàn, zài jiào háizi men qǐchuáng, jiēzhe wǒmen yīqǐ chī zǎofàn, ránhòu wǒ sòng tāmen qù xuéxiào",
		en: "After I got up this morning, I first prepared breakfast, and then I woke up the kids. Next, we ate breakfast together. After that, I took them to school"
	},
	{
		id: 1854,
		zh: "我很好，我的家人也都很好",
		pi: "Wǒ hěn hǎo, wǒ de jiārén yě dōu hěn hǎo",
		en: "I'm good. So is everyone in my family"
	},
	{
		id: 1855,
		zh: "大人很喜欢这个餐厅，孩子们也都很喜欢",
		pi: "Dàren hěn xǐhuan zhège cāntīng, háizi men yě dōu hěn xǐhuan",
		en: "Adults all like this restaurant, and the children all like it too"
	},
	{
		id: 1856,
		zh: "我老板是美国人，很多客户也都是美国人",
		pi: "Wǒ lǎobǎn shì Měiguó rén, hěn duō kèhù yě dōu shì Měiguó rén",
		en: "My boss is American. Lots of our clients are also Americans"
	},
	{
		id: 1857,
		zh: "他很高，他的两个弟弟也都比较高",
		pi: "Tā hěn gāo, tā de liǎng gè dìdi yě dōu bǐjiào gāo",
		en: "He's tall. His two younger brothers are also pretty tall"
	},
	{
		id: 1858,
		zh: "老板加班，你们也都要加班吗？",
		pi: "Lǎobǎn jiābān, nǐmen yě dōu yào jiābān ma?",
		en: "The boss will be working late. Will you all need to work late too?"
	},
	{
		id: 1859,
		zh: "我们也都没吃饭，一起去吧",
		pi: "Wǒmen yě dōu méi chīfàn, yīqǐ qù ba",
		en: "We all haven't eaten either. Let's go together"
	},
	{
		id: 1860,
		zh: "这些不贵，那些也都不贵",
		pi: "Zhèxiē bù guì, nàxiē yě dōu bù guì",
		en: "These are not expensive. Those aren't expensive, either"
	},
	{
		id: 1861,
		zh: "我不喜欢蝙蝠侠，我的朋友也都不喜欢他",
		pi: "Wǒ bù xǐhuan Biānfú-xiá, wǒ de péngyou yě dōu bù xǐhuan tā",
		en: "I don't like Batman. My friends don't like him, either"
	},
	{
		id: 1862,
		zh: "你觉得你不容易？我们也都不容易",
		pi: "Nǐ juéde nǐ bù róngyì? Wǒmen yě dōu bù róngyì",
		en: "You're saying it isn't easy for you? It isn't easy for us, either"
	},
	{
		id: 1863,
		zh: "我没去过美国，我的家人也都没去过",
		pi: "Wǒ méi qù guo Měiguó, wǒ de jiārén yě dōu méi qù guo",
		en: "I've never been to the USA. My family has never been there, either"
	},
	{
		id: 1864,
		zh: "这件事情我还在考虑",
		pi: "Zhè jiàn shìqing wǒ hái zài kǎolǜ",
		en: "I am still thinking over this matter"
	},
	{
		id: 1865,
		zh: "已经中午了，他还在睡？",
		pi: "Yǐjīng zhōngwǔ le, tā hái zài shuì?",
		en: "It's already noon and he's still sleeping?"
	},
	{
		id: 1866,
		zh: "她还在生气吗？",
		pi: "Tā hái zài shēngqì ma?",
		en: "Is she still mad?"
	},
	{
		id: 1867,
		zh: "你怎么还在用那个旧手机？",
		pi: "Nǐ zěnme hái zài yòng nàge jiù shǒujī?",
		en: "How come you're still using that old cell phone?"
	},
	{
		id: 1868,
		zh: "你还在玩游戏？明天不是有考试吗？",
		pi: "Nǐ hái zài wán yóuxì? Míngtiān bù shì yǒu kǎoshì ma?",
		en: "You're still playing video games? Don't you have an exam tomorrow?"
	},
	{
		id: 1869,
		zh: "我让他不要买，他还是买了",
		pi: "Wǒ ràng tā bùyào mǎi, tā háishì mǎi le",
		en: "I told him not to buy it, but he still bought it"
	},
	{
		id: 1870,
		zh: "他不想离婚，但是最后还是离婚了",
		pi: "Tā bù xiǎng líhūn, dànshì zuìhòu háishì líhūn le",
		en: "He didn't want to get divorced, but in the end he still ended up getting divorced"
	},
	{
		id: 1871,
		zh: "父母不同意他去，可是他还是去了",
		pi: "Fùmǔ bù tóngyì tā qù, kěshì tā háishì qù le",
		en: "His parents didn't agree to it, but he still went"
	},
	{
		id: 1872,
		zh: "医生不让她喝酒，她还是喝",
		pi: "Yīshēng bù ràng tā hējiǔ, tā háishì hē",
		en: "The doctor told her to stop drinking, but she still drinks"
	},
	{
		id: 1873,
		zh: "老师生病了，但是她还是来上课了",
		pi: "Lǎoshī shēngbìng le, dànshì tā háishì lái shàngkè le",
		en: "The teacher is sick, but she still come to class"
	},
	{
		id: 1874,
		zh: "我们等了半个小时了，老师还没到",
		pi: "Wǒmen děng le bàn gè xiǎoshí le. Lǎoshī hái méi dào",
		en: "We've been waiting for half an hour, but the teacher still hasn't arrived"
	},
	{
		id: 1875,
		zh: "电影已经开始了，你还没出门？",
		pi: "Diànyǐng yǐjīng kāishǐ le, nǐ hái méi chūmén?",
		en: "The movie has started already, and you still haven't left the house?"
	},
	{
		id: 1876,
		zh: "你已经四十多了，还不想结婚？",
		pi: "Nǐ yǐjīng sìshí duō le, hái bù xiǎng jiéhūn?",
		en: "You're in your forties, and you still don't want to get married?"
	},
	{
		id: 1877,
		zh: "我解释了这么多遍，你还不懂？",
		pi: "Wǒ jiěshì le zhème duō biàn, nǐ hái bù dǒng?",
		en: "I've explained it so many times, and you still don't get it?"
	},
	{
		id: 1878,
		zh: "我对你这么好，你还不高兴？",
		pi: "Wǒ duì nǐ zhème hǎo, nǐ hái bù gāoxìng?",
		en: "I treat you so well, but you're still not happy?"
	},
	{
		id: 1879,
		zh: "那个人就是她的新男朋友",
		pi: "Nàge rén jiùshì tā de xīn nánpéngyou",
		en: "That guy is her new boyfriend"
	},
	{
		id: 1880,
		zh: "他就是你要找的人",
		pi: "Tā jiùshì nǐ yào zhǎo de rén",
		en: "He's just the person that you're looking for"
	},
	{
		id: 1881,
		zh: "我们就是他的家人",
		pi: "Wǒmen jiùshì tā de jiārén",
		en: "We're his family"
	},
	{
		id: 1882,
		zh: "你就是个笨蛋",
		pi: "Nǐ jiùshì gè bèndàn!",
		en: "A moron is precisely what you are!"
	},
	{
		id: 1883,
		zh: "他就是那个骗子",
		pi: "Tā jiùshì nàge piànzi!",
		en: "That con man is him!"
	},
	{
		id: 1884,
		zh: "他不去旅游就是不想花钱",
		pi: "Tā bù qù lǚyóu jiùshì bù xiǎng huāqián",
		en: "He didn't travel only because he doesn't want to spend the money"
	},
	{
		id: 1885,
		zh: "你不参加比赛就是怕输吗？",
		pi: "Nǐ bù cānjiā bǐsài jiùshì pà shū ma?",
		en: "You're not entering the competition just because you're afraid of losing?"
	},
	{
		id: 1886,
		zh: "他这样说就是不喜欢我",
		pi: "Tā zhèyàng shuō jiùshì bù xǐhuan wǒ",
		en: "He said this only because he doesn't like me"
	},
	{
		id: 1887,
		zh: "她问这么多，就是担心你",
		pi: "Tā wèn zhème duō, jiùshì dānxīn nǐ",
		en: "She asked so many questions only because she's worried about you"
	},
	{
		id: 1888,
		zh: "她就是漂亮，没别的优势",
		pi: "Tā jiùshì piàoliang, méi biéde yōushì",
		en: "She's just pretty; she doesn't have any other strengths"
	},
	{
		id: 1889,
		zh: "我就要去",
		pi: "Wǒ jiù yào qù!",
		en: "I just want to go!"
	},
	{
		id: 1890,
		zh: "我就是喜欢他",
		pi: "Wǒ jiù shì xǐhuan tā",
		en: "I just like him"
	},
	{
		id: 1891,
		zh: "我就不告诉你",
		pi: "Wǒ jiù bù gàosu nǐ",
		en: "I'm just not going to tell you"
	},
	{
		id: 1892,
		zh: "我父母就是不让我一个人去",
		pi: "Wǒ fùmǔ jiùshì bù ràng wǒ yīgèrén qù",
		en: "My parents simply won't let me go alone"
	},
	{
		id: 1893,
		zh: "这个学生就是不听老师的话",
		pi: "Zhège xuéshēng jiùshì bù tīng lǎoshī de huà",
		en: "The student just wouldn't listen to his teacher"
	},
	{
		id: 1894,
		zh: "就要下雨了",
		pi: "Jiù yào xiàyǔ le",
		en: "It's about to rain"
	},
	{
		id: 1895,
		zh: "他们就要结婚了",
		pi: "Tāmen jiù yào jiéhūn le",
		en: "They are about to get married"
	},
	{
		id: 1896,
		zh: "我就要出国了",
		pi: "Wǒ jiù yào chūguó le",
		en: "I'm about to go abroad"
	},
	{
		id: 1897,
		zh: "宝宝就要一岁了",
		pi: "Bǎobao jiù yào yī suì le",
		en: "The baby is about to be one year old"
	},
	{
		id: 1898,
		zh: "就要下课了，还有别的问题吗？",
		pi: "Jiù yào xiàkè le, hái yǒu bié de wèntí ma?",
		en: "The class is almost over. Are there any other questions?"
	},
	{
		id: 1899,
		zh: "还有十分钟我就下班了",
		pi: "Háiyǒu shí fēnzhōng wǒ jiù xiàbān le",
		en: "I get off work in 10 minutes"
	},
	{
		id: 1900,
		zh: "还有两个星期我们就要考试了",
		pi: "Háiyǒu liǎng gè xīngqí wǒmen jiù yào kǎoshì le",
		en: "We're just two weeks away from the exam date"
	},
	{
		id: 1901,
		zh: "还有一个月就要过年了",
		pi: "Háiyǒu yī gè yuè jiù yào guònián le",
		en: "It will be Chinese New Year in another month"
	},
	{
		id: 1902,
		zh: "还有半个小时飞机就起飞了",
		pi: "Háiyǒu bàn gè xiǎoshí fēijī jiù qǐfēi le",
		en: "The plane takes off in half an hour"
	},
	{
		id: 1903,
		zh: "还有五天就要放假了",
		pi: "Háiyǒu wǔ tiān jiù yào fàngjià le",
		en: "I go on vacation in 5 days"
	},
	{
		id: 1904,
		zh: "我们明年再来",
		pi: "Wǒmen míngnián zài lái",
		en: "We'll come again next year"
	},
	{
		id: 1905,
		zh: "再试一下",
		pi: "Zài shì yīxià",
		en: "Try it again"
	},
	{
		id: 1906,
		zh: "你可以再说一遍吗？",
		pi: "Nǐ kěyǐ zài shuō yī biàn ma?",
		en: "Can you please say it again?"
	},
	{
		id: 1907,
		zh: "这本书我要再看一遍",
		pi: "Zhè běn shū wǒ yào zài kàn yī biàn",
		en: "I want to read this book again"
	},
	{
		id: 1908,
		zh: "你应该再复习一遍",
		pi: "Nǐ yīnggāi zài fùxí yī biàn",
		en: "You should review it again"
	},
	{
		id: 1909,
		zh: "再吃一点",
		pi: "Zài chī yīdiǎn",
		en: "Eat some more"
	},
	{
		id: 1910,
		zh: "再点几个菜吧",
		pi: "Zài diǎn jǐ gè cài ba",
		en: "Let's order some more dishes"
	},
	{
		id: 1911,
		zh: "服务员，再来两瓶啤酒",
		pi: "Fúwùyuán, zài lái liǎng píng píjiǔ",
		en: "Waiter, two more bottles of beer, please"
	},
	{
		id: 1912,
		zh: "再给我三天时间",
		pi: "Zài gěi wǒ sān tiān shíjiān",
		en: "Give me another three days"
	},
	{
		id: 1913,
		zh: "我能不能再拿两个？",
		pi: "Wǒ néng bu néng zài ná liǎng gè?",
		en: "Can I take two more?"
	},
	{
		id: 1914,
		zh: "再 找找",
		pi: "Zài zhǎozhao",
		en: "Keep looking"
	},
	{
		id: 1915,
		zh: "你再问问",
		pi: "Nǐ zài wènwen",
		en: "Keep asking"
	},
	{
		id: 1916,
		zh: "别急，再想想",
		pi: "Bié jí, zài xiǎngxiang",
		en: "Don't worry. Keep thinking"
	},
	{
		id: 1917,
		zh: "再聊一会儿",
		pi: "Zài liáo yīhuǐr",
		en: "Keep talking for a little bit"
	},
	{
		id: 1918,
		zh: "再等一会儿",
		pi: "Zài děng yīhuǐr",
		en: "Wait a little longer"
	},
	{
		id: 1919,
		zh: "都九点了，快点起床",
		pi: "Dōu jiǔ diǎn le, kuài diǎn qǐchuáng!",
		en: "It's already nine o'clock. Get out of bed!"
	},
	{
		id: 1920,
		zh: "都十二点了，你还不睡？",
		pi: "Dōu shí'èr diǎn le, nǐ hái bù shuì?",
		en: "It's already 12 o'clock. Aren't you going to bed?"
	},
	{
		id: 1921,
		zh: "都二十一世纪了，你还这么想？",
		pi: "Dōu èrshí-yī shìjì le, nǐ hái zhème xiǎng?",
		en: "It's already the 21st century and you still think this way?"
	},
	{
		id: 1922,
		zh: "都一个小时了，他还在厕所里",
		pi: "Dōu yī gè xiǎoshí le, tā hái zài cèsuǒ lǐ",
		en: "It's already been an hour, and he's still in the bathroom"
	},
	{
		id: 1923,
		zh: "都一个星期了，还在下雨",
		pi: "Dōu yī gè xīngqī le, hái zài xiàyǔ",
		en: "It's been a week and it's still raining"
	},
	{
		id: 1924,
		zh: "饭都凉了，快吃吧",
		pi: "Fàn dōu liáng le, kuài chī ba",
		en: "The food is cold already. Let's eat"
	},
	{
		id: 1925,
		zh: "牛奶都坏了，扔掉吧",
		pi: "Niúnǎi dōu huài le, rēngdiào ba",
		en: "The milk's gone bad. Throw it out"
	},
	{
		id: 1926,
		zh: "我都说了三遍了。别烦我",
		pi: "Wǒ dōu shuō le sān biàn le. Bié fán wǒ!",
		en: "I've said it three times already. Leave me alone!"
	},
	{
		id: 1927,
		zh: "这个电影你都看过了，看别的吧",
		pi: "Zhège diànyǐng nǐ dōu kàn guo le, kàn biéde ba",
		en: "You've seen this movie already. Let's watch something else"
	},
	{
		id: 1928,
		zh: "他都道歉了，你别生气了",
		pi: "Tā dōu dàoqiàn le, nǐ bié shēngqì le",
		en: "He already apologized. Stop being so mad at him"
	},
	{
		id: 1929,
		zh: "我马上就来",
		pi: "Wǒ mǎshàng jiù lái",
		en: "I'll be there in a second"
	},
	{
		id: 1930,
		zh: "米饭二十分钟就好",
		pi: "Mǐfàn èrshí fēnzhōng jiù hǎo",
		en: "The rice will be ready in 20 minutes"
	},
	{
		id: 1931,
		zh: "你们现在就出门吗？",
		pi: "Nǐmen xiànzài jiù chūmén ma?",
		en: "Are you leaving the house right now?"
	},
	{
		id: 1932,
		zh: "他们一会儿就到",
		pi: "Tāmen yīhuìr jiù dào",
		en: "They will be here in a few minutes"
	},
	{
		id: 1933,
		zh: "老板明天就回来",
		pi: "Lǎobǎn míngtiān jiù huílái",
		en: "The boss will be back tomorrow"
	},
	{
		id: 1934,
		zh: "我们九点上课，他八点就来了",
		pi: "Wǒmen jiǔ diǎn shàngkè, tā bā diǎn jiù lái le",
		en: "We have class at nine, but he came in at eight"
	},
	{
		id: 1935,
		zh: "飞机十点起飞，他六点就到机场了",
		pi: "Fēijī shí diǎn qǐfēi, tā liù diǎn jiù dào jīchǎng le",
		en: "The plane takes off at ten o'clock, but he arrived at the airport at six"
	},
	{
		id: 1936,
		zh: "我昨晚八点半就睡觉了",
		pi: "Wǒ zuówǎn bā diǎn bàn jiù shuìjiào le",
		en: "I went to bed at eight thirty last night"
	},
	{
		id: 1937,
		zh: "她十八岁就大学毕业了",
		pi: "Tā shíbā suì jiù dàxué bìyè le",
		en: "She graduated from college when she was only 18 years old"
	},
	{
		id: 1938,
		zh: "你一个晚上就看完了？",
		pi: "Nǐ yī gè wǎnshang jiù kàn wán le?",
		en: "It only took you just one night to finish reading it?"
	},
	{
		id: 1939,
		zh: "他十分钟就做完了",
		pi: "Tā shí fēnzhōng jiù zuò wán le",
		en: "It only took him ten minutes to finish doing it"
	},
	{
		id: 1940,
		zh: "我早就知道了",
		pi: "Wǒ zǎo jiù zhīdào le!",
		en: "I knew that long ago!"
	},
	{
		id: 1941,
		zh: "她早就结婚了",
		pi: "Tā zǎo jiù jiéhūn le",
		en: "She got married a long time ago"
	},
	{
		id: 1942,
		zh: "他们早就分手了",
		pi: "Tāmen zǎo jiù fēnshǒu le",
		en: "They broke up a long time ago"
	},
	{
		id: 1943,
		zh: "我们早就毕业了",
		pi: "Wǒmen zǎo jiù bìyè le",
		en: "We graduated a long time ago!"
	},
	{
		id: 1944,
		zh: "我早就跟你说过，他不是好人",
		pi: "Wǒ zǎo jiù gēn nǐ shuō guo, tā bù shì hǎo rén",
		en: "I told you a long time ago that he's not a good guy"
	},
	{
		id: 1945,
		zh: "又下雨了",
		pi: "Yòu xiàyǔ le!",
		en: "It rained again!"
	},
	{
		id: 1946,
		zh: "你又迟到了",
		pi: "Nǐ yòu chídào le",
		en: "You're late again"
	},
	{
		id: 1947,
		zh: "宝宝又哭了",
		pi: "Bǎobao yòu kū le",
		en: "The baby is crying again"
	},
	{
		id: 1948,
		zh: "我又忘了",
		pi: "Wǒ yòu wàng le",
		en: "I forgot again"
	},
	{
		id: 1949,
		zh: "他又没来上课",
		pi: "Tā yòu méi lái shàngkè",
		en: "He didn't come to class again"
	},
	{
		id: 1950,
		zh: "你们又不付钱？",
		pi: "Nǐmen yòu bù fùqián?",
		en: "You're not paying again?"
	},
	{
		id: 1951,
		zh: "你又不参加？",
		pi: "Nǐ yòu bù cānjiā?",
		en: "You are not going to participate again?"
	},
	{
		id: 1952,
		zh: "对不起，我又没带书",
		pi: "Duìbuqǐ, wǒ yòu méi dài shū",
		en: "Sorry, I forgot to bring the book again"
	},
	{
		id: 1953,
		zh: "今天又要加班了",
		pi: "Jīntiān yòu yào jiābān le!",
		en: "We've got to work overtime again today!"
	},
	{
		id: 1954,
		zh: "老板请客，又可以吃大餐了",
		pi: "Lǎobǎn qǐngkè, yòu kěyǐ chī dàcān le!",
		en: "The boss is going to treat us. We can have a big meal again!"
	},
	{
		id: 1955,
		zh: "快过年了，我们又能拿红包了",
		pi: "Kuài guònián le, wǒmen yòu néng ná hóngbāo le!",
		en: "It's almost Chinese New Year. We can get our red packets [of money] again!"
	},
	{
		id: 1956,
		zh: "他们已经两天没吃东西了",
		pi: "Tāmen yǐjīng liǎng tiān méi chī dōngxi le",
		en: "They haven't eating anything for two days already"
	},
	{
		id: 1957,
		zh: "我们已经十年没见了",
		pi: "Wǒmen yǐjīng shí nián méi jiàn le",
		en: "We haven't seen each other for ten years already"
	},
	{
		id: 1958,
		zh: "他已经一个星期没洗澡了",
		pi: "Tā yǐjīng yī gè xīngqī méi xǐzǎo le",
		en: "He has already gone a whole week without showering"
	},
	{
		id: 1959,
		zh: "你多长时间没刮胡子了？",
		pi: "Nǐ duō cháng shíjiān méi guā húzi le?",
		en: "How long has it been since you last shaved?"
	},
	{
		id: 1960,
		zh: "她半个月没出门了",
		pi: "Tā bàn gè yuè méi chūmén le",
		en: "It's been half a month since she's left the house"
	},
	{
		id: 1961,
		zh: "你们多久没回家了？",
		pi: "Nǐmen duōjiǔ méi huíjiā le?",
		en: "How long has it been since you returned home?"
	},
	{
		id: 1962,
		zh: "你多久没休假了？",
		pi: "Nǐ duōjiǔ méi xiūjià le?",
		en: "How long has it been since your last vacation?"
	},
	{
		id: 1963,
		zh: "买吧，你已经一年多没买新衣服了",
		pi: "Mǎi ba, nǐ yǐjīng yī nián duō méi mǎi xīn yīfu le",
		en: "Just buy it. It's been more than one year since you last bought new clothes"
	},
	{
		id: 1964,
		zh: "你好像很久没这么开心了",
		pi: "Nǐ hǎoxiàng hěnjiǔ méi zhème kāixīn le",
		en: "It seems like it's been a long time since you were this happy"
	},
	{
		id: 1965,
		zh: "我已经十年没来中国了",
		pi: "Wǒ yǐjīng shí nián méi lái Zhōngguó le",
		en: "It's been 10 years since I came to China last"
	},
	{
		id: 1966,
		zh: "我上次来中国是2010年",
		pi: "Wǒ shàngcì lái Zhōngguó shì èr-líng-yī-líng nián",
		en: "The last time I came to China was 2010"
	},
	{
		id: 1967,
		zh: "你终于到了",
		pi: "Nǐ zhōngyú dào le!",
		en: "You've finally arrived!"
	},
	{
		id: 1968,
		zh: "我们终于见面了",
		pi: "Wǒmen zhōngyú jiànmiàn le!",
		en: "We're finally meeting each other!"
	},
	{
		id: 1969,
		zh: "你们终于明白了",
		pi: "Nǐmen zhōngyú míngbai le",
		en: "You've finally understood"
	},
	{
		id: 1970,
		zh: "作业终于做完了",
		pi: "Zuòyè zhōngyú zuò wán le!",
		en: "I've finally finished my homework!"
	},
	{
		id: 1971,
		zh: "飞机终于起飞了",
		pi: "Fēijī zhōngyú qǐfēi le!",
		en: "The plane is finally taking off!"
	},
	{
		id: 1972,
		zh: "你们终于决定了",
		pi: "Nǐmen zhōngyú juédìng le",
		en: "You've finally decided"
	},
	{
		id: 1973,
		zh: "饭终于做好了。我快饿死了",
		pi: "Fàn zhōngyú zuò hǎo le. Wǒ kuài è sǐ le",
		en: "Dinner is finally ready. I'm starving"
	},
	{
		id: 1974,
		zh: "这个愿望终于实现了",
		pi: "Zhège yuànwàng zhōngyú shíxiàn le!",
		en: "This dream has finally come true!"
	},
	{
		id: 1975,
		zh: "我们找了两个多小时，终于找到了那家店",
		pi: "Wǒmen zhǎo le liǎng gè duō xiǎoshí, zhōngyú zhǎodào le nà jiā diàn",
		en: "We'd been looking for more than two hours, and we finally found that shop"
	},
	{
		id: 1976,
		zh: "这些问题终于解决了。我们应该庆祝一下",
		pi: "Zhèxiē wèntí zhōngyú jiějué le. Wǒmen yīnggāi qìngzhù yīxià",
		en: "The problems are finally solved. We should celebrate!"
	},
	{
		id: 1977,
		zh: "我昨天晚上十一点才到家",
		pi: "Wǒ zuótiān wǎnshang shíyī diǎn cái dào jiā",
		en: "I didn't arrive at home until eleven o'clock last night"
	},
	{
		id: 1978,
		zh: "他二十五岁才上大学",
		pi: "Tā èrshí-wǔ suì cái shàng dàxué",
		en: "He didn't go to college until he was 25"
	},
	{
		id: 1979,
		zh: "她四十岁才结婚",
		pi: "Tā sìshí suì cái jiéhūn",
		en: "She didn't get married until she was forty"
	},
	{
		id: 1980,
		zh: "我女儿昨天十二点才睡觉，作业太多了",
		pi: "Wǒ nǚ'ér zuótiān shí'èr diǎn cái shuìjiào, zuòyè tài duō le",
		en: "My daughter didn't go to bed until 12 o'clock yesterday. Too much homework"
	},
	{
		id: 1981,
		zh: "你九点上班，八点半才起床？",
		pi: "Nǐ jiǔ diǎn shàngbān, bā diǎn bàn cái qǐchuáng?",
		en: "You start work at nine o'clock, but don't get up until 8:30?"
	},
	{
		id: 1982,
		zh: "飞机刚刚才起飞，晚点了两个小时",
		pi: "Fēijī gānggāng cái qǐfēi, wǎndiǎn le liǎng gè xiǎoshí",
		en: "The airplane just took off. It was delayed for two hours"
	},
	{
		id: 1983,
		zh: "电影七点半开始，可是因为堵车我们八点才到",
		pi: "Diànyǐng qī diǎn bàn kāishǐ, kěshì yīnwèi dǔchē, wǒmen bā diǎn cái dào",
		en: "The movie began at 7:30, but we didn't arrive until eight because of traffic"
	},
	{
		id: 1984,
		zh: "你怎么才吃晚饭？已经十点了",
		pi: "Nǐ zěnme cái chī wǎnfàn? Yǐjīng shí diǎn le",
		en: "How come you are eating dinner now? It's 10 pm"
	},
	{
		id: 1985,
		zh: "你怎么才来？我们等了半个多小时",
		pi: "Nǐ zěnme cái lái? Wǒmen děng le bàn gè duō xiǎoshí",
		en: "How come you came here so late? We've waited for more than half an hour"
	},
	{
		id: 1986,
		zh: "你怎么老是加班？",
		pi: "Nǐ zěnme lǎoshì jiābān?",
		en: "Why are you always working late?"
	},
	{
		id: 1987,
		zh: "那个孩子老说脏话",
		pi: "Nàge háizi lǎo shuō zānghuà",
		en: "That kid always says bad words"
	},
	{
		id: 1988,
		zh: "你怎么老是不高兴？",
		pi: "Nǐ zěnme lǎoshì bù gāoxìng?",
		en: "How are you always unhappy?"
	},
	{
		id: 1989,
		zh: "你儿子上课的时候老是说话",
		pi: "Nǐ érzi shàngkè de shíhou lǎoshì shuōhuà",
		en: "Your son talks all the time in class"
	},
	{
		id: 1990,
		zh: "这个老师老是这么严肃",
		pi: "Zhège lǎoshī lǎoshì zhème yánsù",
		en: "This teacher is always so serious"
	},
	{
		id: 1991,
		zh: "别老是抱怨",
		pi: "Bié lǎoshì bàoyuàn",
		en: "Stop complaining all the time"
	},
	{
		id: 1992,
		zh: "这个机器老是出问题",
		pi: "Zhège jīqì lǎoshì chū wèntí",
		en: "There is always something wrong with this machine"
	},
	{
		id: 1993,
		zh: "他经常迟到，还老是找借口",
		pi: "Tā jīngcháng chídào, hái lǎoshì zhǎo jièkǒu",
		en: "He's always late. And he always makes excuses"
	},
	{
		id: 1994,
		zh: "奶奶老是忘带钥匙",
		pi: "Nǎinai lǎoshì wàng dài yàoshi",
		en: "Grandma forgets to take her keys all the time"
	},
	{
		id: 1995,
		zh: "你老是这么凶干吗？",
		pi: "Nǐ lǎoshì zhème xiōng gànmá?",
		en: "Why are you always so mean?"
	},
	{
		id: 1996,
		zh: "他真讨厌，老是跟朋友借钱",
		pi: "Tā zhēn tǎoyàn, lǎoshì gēn péngyou jièqián",
		en: "He's such a nuisance. He's always borrowing money from his friends"
	},
	{
		id: 1997,
		zh: "你才二十岁？",
		pi: "Nǐ cái èrshí suì?",
		en: "You're only twenty?"
	},
	{
		id: 1998,
		zh: "这个班才两个学生",
		pi: "Zhège bān cái liǎng gè xuéshēng",
		en: "This class only has two students"
	},
	{
		id: 1999,
		zh: "你的工资才两千？",
		pi: "Nǐ de gōngzī cái liǎng qiān?",
		en: "Your salary is only two thousand?"
	},
	{
		id: 2000,
		zh: "这顿饭才二十块，太便宜了",
		pi: "Zhè dùn fàn cái èrshí kuài. Tài piányi le!",
		en: "This meal only cost twenty kuai. It's too cheap!"
	},
	{
		id: 2001,
		zh: "你才一百斤，还要减肥？",
		pi: "Nǐ cái yī bǎi jīn, hái yào jiǎnféi?",
		en: "You're only 100 jin and you still want to lose some weight?"
	},
	{
		id: 2002,
		zh: "她才来了两个月",
		pi: "Tā cái lái le liǎng gè yuè",
		en: "She's been here for only two months"
	},
	{
		id: 2003,
		zh: "这家店关门了？可是它才开业一个星期",
		pi: "Zhè jiā diàn guānmén le? Kěshì tā cái kāiyè yī gè xīngqī",
		en: "This shop is out of business? But it's only been one week since it opened"
	},
	{
		id: 2004,
		zh: "已经两天了，你才看完一页？",
		pi: "Yǐjīng liǎng tiān le, nǐ cái kàn wán yī yè?",
		en: "It's been two days and you only finished reading one page?"
	},
	{
		id: 2005,
		zh: "我们才玩了一会儿，再玩一会儿吧？",
		pi: "Wǒmen cái wán le yīhuìr, zài wán yīhuìr ba?",
		en: "We've only played for a short while. Can we play a little bit longer?"
	},
	{
		id: 2006,
		zh: "他们结婚了？他们才认识三个月",
		pi: "Tāmen jiéhūn le? Tāmen cái rènshi sān gè yuè!",
		en: "They got married? They've only known each other for three months!"
	},
	{
		id: 2007,
		zh: "天气一下子变冷了",
		pi: "Tiānqì yīxiàzi biàn lěng le",
		en: "The weather suddenly got cold"
	},
	{
		id: 2008,
		zh: "他一下子吃了三碗米饭",
		pi: "Tā yīxiàzi chī le sān wǎn mǐfàn",
		en: "He ate three bowls of rice all at once"
	},
	{
		id: 2009,
		zh: "她下楼的时候一下子摔倒了",
		pi: "Tā xiàlóu de shíhou yīxiàzi shuāidǎo le",
		en: "As she went down the stairs, she suddenly fell"
	},
	{
		id: 2010,
		zh: "我们说话的时候，她一下子哭了",
		pi: "Wǒmen shuōhuà de shíhou, tā yīxiàzi kū le",
		en: "She burst into tears when we were talking"
	},
	{
		id: 2011,
		zh: "她上个月一下子瘦了很多",
		pi: "Tā shàng gè yuè yīxiàzi shòu le hěn duō",
		en: "Last month, she lost a lot of weight all at once"
	},
	{
		id: 2012,
		zh: "老师进来以后，大家一下子就安静了",
		pi: "Lǎoshī jìnlái yǐhòu, dàjiā yīxiàzi jiù ānjìng le",
		en: "Everyone became silent after the teacher came in"
	},
	{
		id: 2013,
		zh: "听他说完，我一下子就明白了",
		pi: "Tīng tā shuō wán, wǒ yīxiàzi jiù míngbai le",
		en: "After hearing him out, I understood everything all at once"
	},
	{
		id: 2014,
		zh: "他是最高的，我一下子就看到他了",
		pi: "Tā shì zuì gāo de, wǒ yīxiàzi jiù kàndào tā le",
		en: "He is the tallest. I spotted him right away"
	},
	{
		id: 2015,
		zh: "拍完那部电影，他一下子就出名了",
		pi: "Pāi wán nà bù diànyǐng, tā yīxiàzi jiù chūmíng le",
		en: "He became very famous soon after that movie came out"
	},
	{
		id: 2016,
		zh: "看到那张照片，我一下子就想起来了",
		pi: "Kàndào nà zhāng zhàopiàn, wǒ yīxiàzi jiù xiǎng qǐlái le",
		en: "It all came back to me when I saw that picture"
	},
	{
		id: 2017,
		zh: "这样做不对",
		pi: "Zhèyàng zuò bù duì",
		en: "Doing it this way is not right"
	},
	{
		id: 2018,
		zh: "这样说不礼貌",
		pi: "Zhèyàng shuō bù lǐmào",
		en: "It's not polite to say this"
	},
	{
		id: 2019,
		zh: "这样走过去更近",
		pi: "Zhèyàng zǒu guòqù gèng jìn",
		en: "If you walk over this way, it's closer"
	},
	{
		id: 2020,
		zh: "你们真的是这样想的吗？",
		pi: "Nǐmen zhēnde shì zhèyàng xiǎng de ma?",
		en: "Do you guys really think so?"
	},
	{
		id: 2021,
		zh: "你要多鼓励学生，这样他们会更有自信",
		pi: "Nǐ yào duō gǔlì xuéshēng, zhèyàng tāmen huì gèng yǒu zìxìn",
		en: "You need to encourage your students more. This will help them become more confident"
	},
	{
		id: 2022,
		zh: "父母应该多陪孩子，这样孩子会更快乐",
		pi: "Fùmǔ yīnggāi duō péi háizi, zhèyàng háizi huì gèng kuàilè",
		en: "Parents should spend more time with their children. This will make the children happier"
	},
	{
		id: 2023,
		zh: "你要多说，这样才能越来越流利",
		pi: "Nǐ yào duō shuō, zhèyàng cái néng yuèláiyuè liúlì",
		en: "You need to speak more. Only in this way will you become more and more fluent"
	},
	{
		id: 2024,
		zh: "让他自己来，这样他才能学会",
		pi: "Ràng tā zìjǐ lái, zhèyàng tā cái néng xuéhuì",
		en: "Let him do it by himself. This is the only way he will learn"
	},
	{
		id: 2025,
		zh: "这样的话，你还想去吗？",
		pi: "Zhèyàng dehuà, nǐ hái xiǎng qù ma?",
		en: "If this is the case, do you still want to go?"
	},
	{
		id: 2026,
		zh: "如果是这样的话，麻烦就大了",
		pi: "Rúguǒ shì zhèyàng dehuà, máfan jiù dà le",
		en: "If this is the case, we're in for a heap of trouble"
	},
	{
		id: 2027,
		zh: "我会住在美国朋友的家里。这样的话，我家人就不那么担心我了",
		pi: "Wǒ huì zhù zài Měiguó péngyou de jiā lǐ. Zhèyàng dehuà, wǒ jiārén jiù bù nàme dānxīn wǒ le",
		en: "I will stay at my American friend's house when I go to visit the US. This way my family won't worry about me so much"
	},
	{
		id: 2028,
		zh: "互相帮助",
		pi: "hùxiāng bāngzhù",
		en: "Help each other"
	},
	{
		id: 2029,
		zh: "互相了解",
		pi: "hùxiāng liǎojiě",
		en: "Know each other"
	},
	{
		id: 2030,
		zh: "互相伤害",
		pi: "hùxiāng shānghài",
		en: "Hurt each other"
	},
	{
		id: 2031,
		zh: "互相尊重",
		pi: "hùxiāng zūnzhòng",
		en: "Respect each other"
	},
	{
		id: 2032,
		zh: "互相支持",
		pi: "hùxiāng zhīchí",
		en: "Support each other"
	},
	{
		id: 2033,
		zh: "互相鼓励",
		pi: "hùxiāng gǔlì",
		en: "Encourage each other"
	},
	{
		id: 2034,
		zh: "互相影响",
		pi: "hùxiāng yǐngxiǎng",
		en: "Influence each other"
	},
	{
		id: 2035,
		zh: "互相看了一眼",
		pi: "hùxiāng kàn le yī yǎn",
		en: "glanced at each other"
	},
	{
		id: 2036,
		zh: "这里什么都没有",
		pi: "Zhèlǐ shénme dōu méiyǒu",
		en: "There's nothing here"
	}
]
