//! Champion randomizer and position picker

function log(text) {
  console.log(text);
}

let position = document.getElementById("position");
const championPicker = document.getElementById("championPicker");

const generateChampion = (championPool) => {
  let selectedPosition = position.value;
  // log(selectedPosition);
  if (selectedPosition === "all") {
    championPool = champs.all;
  } else if (selectedPosition === "top") {
    championPool = champs.top;
  } else if (selectedPosition === "jungle") {
    championPool = champs.jungle;
  } else if (selectedPosition === "mid") {
    championPool = champs.mid;
  } else if (selectedPosition === "adc") {
    championPool = champs.adc;
  } else if (selectedPosition === "support") {
    championPool = champs.support;
  }

  // log(championPool);

  let randomChampion = Math.floor(Math.random() * championPool.length);
  const yourChampName = document.getElementById("yourChampName");
  const yourChampImg = document.getElementById("yourChampImg");

  fetch("/js/champions.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(data.data);
      let name = data.data[championPool[randomChampion]].name;
      let id = data.data[championPool[randomChampion]].id;

      yourChampImg.src =
        "http://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/" +
        id +
        ".png";
      yourChampName.innerHTML = name;
      yourChampImg.alt = name + " icon";
    });
};

championPicker.addEventListener("click", generateChampion);

//! Item randomizer

const itemPicker = document.getElementById("itemPicker");

let itemsToPick = {
  mystic: { name: [], img: [] },
  normal: { name: [], img: [] },
  boots: { name: [], img: [] },
  support: { name: [], img: [] },
};

fetch("/js/items.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const items = data.data;
    const newItems = Object.keys(items).map(function (key) {
      return items[key];
    });

    newItems.forEach(function (item) {
      if (mysticItem.includes(item.name) === true) {
        itemsToPick.mystic.name.push(item.name);
        itemsToPick.mystic.img.push(item.image.full);
      } else if (normalItems.includes(item.name) === true) {
        itemsToPick.normal.name.push(item.name);
        itemsToPick.normal.img.push(item.image.full);
      } else if (suppitems.includes(item.name) === true) {
        itemsToPick.support.name.push(item.name);
        itemsToPick.support.img.push(item.image.full);
      } else if (boots.includes(item.name) === true) {
        itemsToPick.boots.name.push(item.name);
        itemsToPick.boots.img.push(item.image.full);
      }
    });
  });

const generateMysticBootsSupport = (type, nameID, imgID) => {
  let picked = Math.floor(Math.random() * itemsToPick[type].name.length);

  imgID.src =
    "http://ddragon.leagueoflegends.com/cdn/12.18.1/img/item/" +
    itemsToPick[type].img[picked];
  imgID.alt = itemsToPick[type].name[picked] + " icon";
  nameID.innerHTML = itemsToPick[type].name[picked];
};

const generateNormalItems = (type, nameID, imgID, array, index) => {
  imgID.src =
    "http://ddragon.leagueoflegends.com/cdn/12.18.1/img/item/" +
    itemsToPick[type].img[array[index]];
  nameID.alt = itemsToPick[type].name[array[index]] + " icon";
  nameID.innerHTML = itemsToPick[type].name[array[index]];
};

const generateNormal = (type1) => {
  let selectedPosition = position.value;
  let number = [];
  while (number.length < 4) {
    let picked = Math.floor(Math.random() * itemsToPick[type1].name.length);
    if (number.indexOf(picked) === -1) number.push(picked);
  }
  generateNormalItems("normal", yourItemName2, yourItemImg2, number, 0);
  generateNormalItems("normal", yourItemName3, yourItemImg3, number, 1);
  generateNormalItems("normal", yourItemName4, yourItemImg4, number, 2);
  if (selectedPosition === "support") {
    generateMysticBootsSupport("support", yourItemName5, yourItemImg5);
  } else {
    generateNormalItems("normal", yourItemName5, yourItemImg5, number, 3);
  }
};

const getBuild = () => {
  generateMysticBootsSupport("mystic", yourItemName1, yourItemImg1);
  generateNormal("normal", "support");
  generateMysticBootsSupport("boots", yourItemName6, yourItemImg6);
};

itemPicker.addEventListener("click", getBuild);
