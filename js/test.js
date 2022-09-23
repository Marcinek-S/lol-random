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
  imgID.alt = itemsToPick[type].name[picked] + "icon";
  nameID.innerHTML = itemsToPick[type].name[picked];
};

const getBuild = () => {
  generateItems("mystic", yourItemName1, yourItemImg1);
  generateItems("normal", yourItemName2, yourItemImg2);
  generateItems("normal", yourItemName3, yourItemImg3);
  generateItems("normal", yourItemName4, yourItemImg4);

  if (selectedPosition === "support") {
    generateItems("support", yourItemName5, yourItemImg5);
    log("supp");
  } else {
    generateItems("normal", yourItemName5, yourItemImg5);
    log("normal");
  }
  generateItems("boots", yourItemName6, yourItemImg6);
};

itemPicker.addEventListener("click", getBuild);
