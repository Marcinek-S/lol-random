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

  fetch(
    "http://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion.json"
  )
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

fetch("http://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/item.json")
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

const generateItems = (type, nameID, imgID) => {
  let picked = Math.floor(Math.random() * itemsToPick[type].name.length);

  imgID.src =
    "http://ddragon.leagueoflegends.com/cdn/12.18.1/img/item/" +
    itemsToPick[type].img[picked];
  imgID.alt = itemsToPick[type].name[picked] + " icon";
  nameID.innerHTML = itemsToPick[type].name[picked];
};

const getBuild = () => {
  let selectedPosition = position.value;
  generateItems("mystic", yourItemName1, yourItemImg1);
  generateItems("normal", yourItemName2, yourItemImg2);
  generateItems("normal", yourItemName3, yourItemImg3);
  generateItems("normal", yourItemName4, yourItemImg4);
  generateItems("boots", yourItemName6, yourItemImg6);
  if (selectedPosition === "support") {
    generateItems("support", yourItemName5, yourItemImg5);
    log("supp");
  } else {
    generateItems("normal", yourItemName5, yourItemImg5);
    log("normal");
  }
};

itemPicker.addEventListener("click", getBuild);
