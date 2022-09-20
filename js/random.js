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
    championPool = champs.test;
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
  yourChampName.innerHTML = championPool[randomChampion].name;
  yourChampImg.src = championPool[randomChampion].icon;
  yourChampImg.alt = championPool[randomChampion].name;
};

championPicker.addEventListener("click", generateChampion);

//! Item randomizer
