var championName = [
  "Aatrox",
  "Ahri",
  "Akali",
  "Alistar",
  "Amumu",
  "Anivia",
  "Annie",
  "Aphelios",
  "Ashe",
  "Aurelion Sol",
  "Azir",
  "Bard",
  "Blitzcrank",
  "Brand",
  "Braum",
  "Caitlyn",
  "Camille",
  "Cassiopeia",
  "Cho'Gath",
  "Corki",
  "Darius",
  "Diana",
  "Dr.Mundo",
  "Draven",
  "Ekko",
  "Elise",
  "Evelynn",
  "Ezreal",
  "Fiddlesticks",
  "Fiora",
  "Fizz",
  "Galio",
  "Gangplank",
  "Garen",
  "Gnar",
  "Gragas",
  "Graves",
  "Gwen",
  "Hecarim",
  "Heimerdinger",
  "Illaoi",
  "Irelia",
  "Ivern",
  "Janna",
  "Jarvan IV",
  "Jax",
  "Jayce",
  "Jhin",
  "Jinx",
  "Kai'Sa",
  "Kalista",
  "Karma",
  "Karthus",
  "Kassadin",
  "Katarina",
  "Kayle",
  "Kayn",
  "Kennen",
  "Kha'Zix",
  "Kindred",
  "Kled",
  "Kog Maw",
  "LeBlanc",
  "Lee Sin",
  "Leona",
  "Lillia",
  "Lissandra",
  "Lucian",
  "Lulu",
  "Lux",
  "Malphite",
  "Malzahar",
  "Maokai",
  "Master Yi",
  "Miss Fortune",
  "Mordekaiser",
  "Morgana",
  "Nami",
  "Nasus",
  "Nautilus",
  "Neeko",
  "Nidalee",
  "Nocturne",
  "Nunu and Willump",
  "Olaf",
  "Orianna",
  "Ornn",
  "Pantheon",
  "Poppy",
  "Pyke",
  "Qiyana",
  "Quinn",
  "Rakan",
  "Rammus",
  "Rek'Sai",
  "Rell",
  "Renekton",
  "Rengar",
  "Riven",
  "Rumble",
  "Ryze",
  "Samira",
  "Sejuani",
  "Senna",
  "Seraphine",
  "Sett",
  "Shaco",
  "Shen",
  "Shyvana",
  "Singed",
  "Sion",
  "Sivir",
  "Skarner",
  "Sona",
  "Soraka",
  "Swain",
  "Sylas",
  "Syndra",
  "Tahm Kench",
  "Taliyah",
  "Talon",
  "Taric",
  "Teemo",
  "Thresh",
  "Tristana",
  "Trundle",
  "Tryndamere",
  "Twisted Fate",
  "Twitch",
  "Udyr",
  "Urgot",
  "Varus",
  "Vayne",
  "Veigar",
  "Vel'Koz",
  "Vi",
  "Viego",
  "Viktor",
  "Vladimir",
  "Volibear",
  "Warwick",
  "Wukong",
  "Xayah",
  "Xerath",
  "Xin Zhao",
  "Yasuo",
  "Yone",
  "Yorick",
  "Yuumi",
  "Zac",
  "Zed",
  "Ziggs",
  "Zilean",
  "Zoe",
  "Zyra",
];

var mysticItem = [
  "Divine Sunderer",
  "Duskblade of Draktharr",
  "Eclipse",
  "Everfrost",
  "Frostfire Gauntlet",
  "Galeforce",
  "Goredrinker",
  "Hextech Rocketbelt",
  "Immortal Shieldbow",
  "Imperial Mandate",
  "Kraken Slayer",
  "Liandry's Anguish",
  "Locket of the Iron Solari",
  "Luden's Tempest",
  "Moonstone Renewer",
  "Night Harvester",
  "Prowler's Claw",
  "Riftmaker",
  "Shurelya's Battlesong",
  "Stridebreaker",
  "Sunfire Aegis",
  "Trinity Force",
  "Turbo Chemtank",
];

var items = [
  "The Collector",
  "Navori Quickblades",
  "Force of Nature",
  "Serpent’s Fang",
  "Horizon Focus",
  "Cosmic Drive",
  "Demonic Embrace",
  "Abyssal Mask",
  "Archangel's Staff",
  "Ardent Censer",
  "Banshee's Veil",
  "Black Cleaver",
  "BOTRK",
  "Bloodthirster",
  "Chempunk Chainsword",
  "Chemtech Putrifier",
  "Dead Man's Plate",
  "Death's Dance",
  "Edge of Night",
  "Essence Reaver",
  "Frozen Heart",
  "Gargoyle Stoneplate",
  "Guradian Angel",
  "Guinsoo's Rageblade",
  "Infinity Edge",
  "Knight's Vow",
  "Lich Bane",
  "Lord Dominik's Regards",
  "Manamune",
  "Maw of Malmortius",
  "Mejai's Soulstraler",
  "Mercurial Scimitar",
  "Mikael's Blessing",
  "Morellonomicon",
  "Mortal Reminder",
  "Muramana",
  "Nashor's Tooth",
  "Phantom Dancer",
  "Rabadon's Deathcap",
  "Randuin's Omen",
  "Rapid Firecannon",
  "Ravenous Hydra",
  "Redemption",
  "Runaan's Hurricane",
  "Rylai's Crystal Scepter",
  "Sanguine Blade",
  "Serylda's Grudge",
  "Silvermere Dawn",
  "Spirit Visage",
  "Sterak's Gage",
  "Stormrazor",
  "Thornmail",
  "Titanic Hydra",
  "Umbral Glaive",
  "Void Staff",
  "Warmog's Armor",
  "Wit's End",
  "Youmuu's Ghostblade",
  "Zeke's Convergence",
  "Zhonya's Hourglass",
];

var suppitems = [
  "Spellthief’s Edge",
  "Steel Shoulderguards",
  "Relic Shield",
  "Spectral Sickle",
];

var boots = [
  "Berserker's Greaves",
  "Boots of Swiftness",
  "Ionian Boots of Lucidity",
  "Mercury's Treads",
  "Mobility Boots",
  "Plated Steelcaps",
  "Sorcerer's Shoes",
];

var championNameTop = [
  "Aatrox",
  "Akali",
  "Alistar",
  "Amumu",
  "Camille",
  "Cassiopeia",
  "Cho'Gath",
  "Darius",
  "Dr.Mundo",
  "Ezreal",
  "Fiddlesticks",
  "Fiora",
  "Galio",
  "Gangplank",
  "Garen",
  "Gnar",
  "Gragas",
  "Graves",
  "Gwen",
  "Hecarim",
  "Heimerdinger",
  "Illaoi",
  "Irelia",
  "Ivern",
  "Jarvan IV",
  "Jax",
  "Jayce",
  "Karma",
  "Kayle",
  "Kayn",
  "Kennen",
  "Kled",
  "LeBlanc",
  "Lee Sin",
  "Lillia",
  "Lucian",
  "Malphite",
  "Maokai",
  "Quinn",
  "Mordekaiser",
  "Nasus",
  "Nunu and Willump",
  "Olaf",
  "Ornn",
  "Pantheon",
  "Poppy",
  "Rammus",
  "Renekton",
  "Rengar",
  "Riven",
  "Rumble",
  "Ryze",
  "Sett",
  "Shaco",
  "Shen",
  "Singed",
  "Sion",
  "Soraka",
  "Sylas",
  "Tahm Kench",
  "Taric",
  "Teemo",
  "Trundle",
  "Tryndamere",
  "Udyr",
  "Urgot",
  "Vayne",
  "Viego",
  "Vladimir",
  "Volibear",
  "Warwick",
  "Wukong",
  "Xin Zhao",
  "Yasuo",
  "Yone",
  "Yorick",
];

var championNameJg = [
  "Amumu",
  "Cho'Gath",
  "Darius",
  "Diana",
  "Dr.Mundo",
  "Ekko",
  "Elise",
  "Evelynn",
  "Fiddlesticks",
  "Gragas",
  "Graves",
  "Hecarim",
  "Ivern",
  "Jarvan IV",
  "Jax",
  "Karthus",
  "Kayn",
  "Kha'Zix",
  "Kindred",
  "Lee Sin",
  "Lillia",
  "Master Yi",
  "Morgana",
  "Nautilus",
  "Nidalee",
  "Nocturne",
  "Nunu and Willump",
  "Olaf",
  "Rammus",
  "Rek'Sai",
  "Rengar",
  "Rumble",
  "Sejuani",
  "Shaco",
  "Shyvana",
  "Skarner",
  "Taliyah",
  "Trundle",
  "Udyr",
  "Vi",
  "Viego",
  "Volibear",
  "Warwick",
  "Xin Zhao",
  "Yasuo",
  "Yone",
  "Zac",
];

var championNameMid = [
  "Ahri",
  "Akali",
  "Anivia",
  "Annie",
  "Aurelion Sol",
  "Azir",
  "Bard",
  "Blitzcrank",
  "Brand",
  "Cassiopeia",
  "Corki",
  "Diana",
  "Draven",
  "Ekko",
  "Elise",
  "Fiddlesticks",
  "Fizz",
  "Galio",
  "Gangplank",
  "Heimerdinger",
  "Irelia",
  "Jayce",
  "Karthus",
  "Lee Sin",
  "Kassadin",
  "Katarina",
  "LeBlanc",
  "Lissandra",
  "Lucian",
  "Lux",
  "Malzahar",
  "Qiyana",
  "Neeko",
  "Orianna",
  "Pantheon",
  "Pyke",
  "Rumble",
  "Ryze",
  "Senna",
  "Seraphine",
  "Swain",
  "Sylas",
  "Syndra",
  "Taliyah",
  "Talon",
  "Twisted Fate",
  "Veigar",
  "Vel'Koz",
  "Viego",
  "Viktor",
  "Vladimir",
  "Ziggs",
  "Zilean",
  "Zoe",
  "Zyra",
];

var championNameADC = [
  "Caitlyn",
  "Aphelios",
  "Ashe",
  "Azir",
  "Bard",
  "Draven",
  "Ezreal",
  "Gnar",
  "Graves",
  "Jhin",
  "Jinx",
  "Kai'Sa",
  "Kalista",
  "Kindred",
  "Kog Maw",
  "Lucian",
  "Quinn",
  "Miss Fortune",
  "Vayne",
  "Veigar",
  "Xayah",
  "Xerath",
  "Yasuo",
  "Yone",
  "Ziggs",
  "Heimerdinger",
];

var championNameSupp = [
  "Alistar",
  "Anivia",
  "Annie",
  "Braum",
  "Bard",
  "Blitzcrank",
  "Brand",
  "Fiddlesticks",
  "Galio",
  "Gragas",
  "Ivern",
  "Janna",
  "Karma",
  "Leona",
  "Lissandra",
  "Lulu",
  "Lux",
  "Malphite",
  "Malzahar",
  "Maokai",
  "Morgana",
  "Nami",
  "Nautilus",
  "Nunu and Willump",
  "Pantheon",
  "Pyke",
  "Rakan",
  "Rell",
  "Senna",
  "Seraphine",
  "Sett",
  "Shaco",
  "Shen",
  "Sion",
  "Sona",
  "Soraka",
  "Swain",
  "Tahm Kench",
  "Taric",
  "Thresh",
  "Vel'Koz",
  "Yuumi",
  "Zilean",
  "Zoe",
  "Zyra",
];

function generate() {
  var position = document.getElementById("position");
  var select = position.value;

  if (select == "Top") {
    var randChampionTop = Math.floor(Math.random() * championNameTop.length);
    document.getElementById("champion").innerHTML =
      "<h1>Your champion:</h1><div><h2>" +
      championNameTop[randChampionTop] +
      "</h2></div>";
  } else if (select == "Jungle") {
    var randChampionJg = Math.floor(Math.random() * championNameJg.length);
    document.getElementById("champion").innerHTML =
      "<h1>Your champion:</h1><div><h2>" +
      championNameJg[randChampionJg] +
      "</h2></div>";
  } else if (select == "Mid") {
    var randChampionMid = Math.floor(Math.random() * championNameMid.length);
    document.getElementById("champion").innerHTML =
      "<h1>Your champion:</h1><div><h2>" +
      championNameMid[randChampionMid] +
      "</h2></div>";
  } else if (select == "ADC") {
    var randchampionADC = Math.floor(Math.random() * championNameADC.length);
    document.getElementById("champion").innerHTML =
      "<h1>Your champion:</h1><div><h2>" +
      championNameADC[randchampionADC] +
      "</h2></div>";
  } else if (select == "Support") {
    var randchampionSupp = Math.floor(Math.random() * championNameSupp.length);
    document.getElementById("champion").innerHTML =
      "<h1>Your champion:</h1><div><h2>" +
      championNameSupp[randchampionSupp] +
      "</h2></div>";
  } else if (select == "None") {
    var randchampion = Math.floor(Math.random() * championName.length);
    document.getElementById("champion").innerHTML =
      "<h1>Your champion:</h1><div><h2>" +
      championName[randchampion] +
      "</h2></div>";
  }
}

function generate1() {
  var randMystic = Math.floor(Math.random() * mysticItem.length);
  var randBoots1 = Math.floor(Math.random() * boots.length);
  var randItems1 = Math.floor(Math.random() * items.length);
  var randItems2 = Math.floor(Math.random() * items.length);
  var randItems3 = Math.floor(Math.random() * items.length);
  var randItems4 = Math.floor(Math.random() * items.length);
  var randSuppItem = Math.floor(Math.random() * suppitems.length);
  var position = document.getElementById("position");
  var select = position.value;

  if (randItems1 == randItems2) {
    randItems2 = Math.floor(Math.random() * items.length);
  }

  if (randItems1 == randItems3) {
    randItems3 = Math.floor(Math.random() * items.length);
  }

  if (randItems1 == randItems4) {
    randItems4 = Math.floor(Math.random() * items.length);
  }

  if (randItems2 == randItems3) {
    randItems3 = Math.floor(Math.random() * items.length);
  }

  if (randItems2 == randItems4) {
    randItems4 = Math.floor(Math.random() * items.length);
  }

  if (randItems3 == randItems4) {
    randItems4 = Math.floor(Math.random() * items.length);
  }

  document.getElementById("mystic").innerHTML =
    "<h1>Your items:</h1><div><h2>" +
    mysticItem[randMystic] +
    "</h2></div>" +
    "<h3><button onclick='othermystic()'>Generate other mystic</button></h3>";
  document.getElementById("item1").innerHTML =
    "<div ><h2>" +
    items[randItems1] +
    "</h2></div>" +
    "<h3><button onclick='otheritem1()'>Generate other item</button></h3>";
  document.getElementById("item2").innerHTML =
    "<div ><h2>" +
    items[randItems2] +
    "</h2></div>" +
    "<h3><button onclick='otheritem2()'>Generate other item</button></h3>";
  document.getElementById("item3").innerHTML =
    "<div ><h2>" +
    items[randItems3] +
    "</h2></div>" +
    "<h3><button onclick='otheritem3()'>Generate other item</button></h3>";
  document.getElementById("item4").innerHTML =
    "<div ><h2>" +
    items[randItems4] +
    "</h2></div>" +
    "<h3><button onclick='otheritem4()'>Generate other item</button></h3>";
  document.getElementById("boots1").innerHTML =
    "<h1>Your boots:</h1><div><h2>" +
    boots[randBoots1] +
    "</h2></div>" +
    "<h3><button onclick='otherboots1()'>Generate other boots</button></h3>";

  if (select == "Support") {
    document.getElementById("item1").innerHTML =
      "<div ><h2>" +
      suppitems[randSuppItem] +
      "</h2></div>" +
      "<h3><button onclick='othersuppitem()'>Generate other item</button></h3>";
  }
}

function othermystic() {
  var randMystic = Math.floor(Math.random() * mysticItem.length);

  document.getElementById("mystic").innerHTML =
    "<h1>Your items:</h1><div><h2>" +
    mysticItem[randMystic] +
    "</h2></div>" +
    "<h3><button onclick='othermystic()'>Generate other mystic</button></h3>";
}

function othersuppitem() {
  var randSuppItem = Math.floor(Math.random() * suppitems.length);
  document.getElementById("item1").innerHTML =
    "<div ><h2>" +
    suppitems[randSuppItem] +
    "</h2></div>" +
    "<h3><button onclick='othersuppitem()'>Generate other item</button></h3>";
}

function otheritem1() {
  var randItems1 = Math.floor(Math.random() * items.length);
  document.getElementById("item1").innerHTML =
    "<div ><h2>" +
    items[randItems1] +
    "</h2></div>" +
    "<h3><button onclick='otheritem1()'>Generate other item</button></h3>";
}

function otheritem2() {
  var randItems2 = Math.floor(Math.random() * items.length);
  document.getElementById("item2").innerHTML =
    "<div ><h2>" +
    items[randItems2] +
    "</h2></div>" +
    "<h3><button onclick='otheritem2()'>Generate other item</button></h3>";
}

function otheritem3() {
  var randItems3 = Math.floor(Math.random() * items.length);
  document.getElementById("item3").innerHTML =
    "<div ><h2>" +
    items[randItems3] +
    "</h2></div>" +
    "<h3><button onclick='otheritem3()'>Generate other item</button></h3>";
}

function otheritem4() {
  var randItems4 = Math.floor(Math.random() * items.length);
  document.getElementById("item4").innerHTML =
    "<div ><h2>" +
    items[randItems4] +
    "</h2></div>" +
    "<h3><button onclick='otheritem4()'>Generate other item</button></h3>";
}

function otherboots1() {
  var randBoots1 = Math.floor(Math.random() * boots.length);
  document.getElementById("boots1").innerHTML =
    "<h1>Your boots:</h1><div><h2>" +
    boots[randBoots1] +
    "</h2></div>" +
    "<h3><button onclick='otherboots1()'>Generate other boots</button></h3>";
}
// tablica.filter(Boolean);
