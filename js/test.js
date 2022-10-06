//TODO!: kurwa trezeba jebac logike do pierdolonych przemotow zeby kurwa vt ki haj w gre

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
      }
      // else if (suppitems.includes(item.name) === true) {
      //   itemsToPick.support.name.push(item.name);
      //   itemsToPick.support.img.push(item.image.full);
      // } else if (boots.includes(item.name) === true) {
      //   itemsToPick.boots.name.push(item.name);
      //   itemsToPick.boots.img.push(item.image.full);
      // }
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
//
//
//
//
//
//
//
//
//
//
//

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
  let kurwa = 0;

  // console.log(number);
  console.log(itemsToPick);
  if (yourItemName1.textContent === itemsToPick.mystic.name[0]) {
    kurwa = itemsToPick[type1].name.indexOf("Maw of Malmortius");
    itemsToPick[type1].name.map((item) => {
      if (item === "Maw of Malmortius") {
        itemsToPick.normal.name.splice(kurwa, 1);
      }
    });
    console.log(kurwa);
    console.log(itemsToPick);
  }

  while (number.length < 4) {
    let picked = Math.floor(Math.random() * itemsToPick[type1].name.length);
    if (number.indexOf(picked) === -1) number.push(picked);
  }

  // if (yourItemName1.textContent === itemsToPick.mystic.name[0]) {
  //   while (number.length < 4) {
  //     let picked = Math.floor(Math.random() * itemsToPick[type1].name.length);
  //     if (number.indexOf(picked) === -1) number.push(picked);
  //   }
  //   generateNormalItems("normal", yourItemName2, yourItemImg2, number, 0);
  //   console.log("cipa");
  //   console.log(number);
  // }
  generateNormalItems("normal", yourItemName2, yourItemImg2, number, 0);
  // generateNormalItems("normal", yourItemName3, yourItemImg3, number, 1);
  // generateNormalItems("normal", yourItemName4, yourItemImg4, number, 2);
  // if (selectedPosition === "support") {
  //   generateMysticBootsSupport("support", yourItemName5, yourItemImg5);
  // } else {
  //   generateNormalItems("normal", yourItemName5, yourItemImg5, number, 3);
  // }
};

const getBuild = () => {
  generateMysticBootsSupport("mystic", yourItemName1, yourItemImg1);
  generateNormal("normal", "support");
  // generateMysticBootsSupport("boots", yourItemName6, yourItemImg6);
};

itemPicker.addEventListener("click", getBuild);
