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
      log(name);
      yourChampImg.src =
        "http://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/" +
        id +
        ".png";
      yourChampName.innerHTML = name;
      yourChampImg.alt = name;
    });
};

championPicker.addEventListener("click", generateChampion);

//! Item randomizer

const generateItmes = (mystic, items, boots) => {
  // log(championPool);
  mystic = mysticItem;
  let randomItems = Math.floor(Math.random() * championPool.length);
  const yourChampName = document.getElementById("yourChampName");
  const yourChampImg = document.getElementById("yourChampImg");

  fetch("http://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/item.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(data.data);
      let name = data.data[championPool[randomChampion]].name;
      let id = data.data[championPool[randomChampion]].id;
      log(name);
      yourChampImg.src =
        "http://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/" +
        id +
        ".png";
      yourChampName.innerHTML = name;
      yourChampImg.alt = name;
    });
};

championPicker.addEventListener("click", generateChampion);
