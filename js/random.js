//! Champion randomizer and position picker

const championPicker = document.getElementById("championPicker");
let position = document.getElementById("position");

const generateChampion = (championPool) => {
  let selectedPosition = position.value;
  if (selectedPosition === "all") {
    championPool = championName;
  } else if (selectedPosition === "top") {
    championPool = championNameTop;
  } else if (selectedPosition === "jungle") {
    championPool = championNameJg;
  } else if (selectedPosition === "mid") {
    championPool = championNameMid;
  } else if (selectedPosition === "adc") {
    championPool = championNameADC;
  } else if (selectedPosition === "support") {
    championPool = championNameSupp;
  }

  let randomChampion = Math.floor(Math.random() * championPool.length);
  document.getElementById("yourChamp").innerHTML = championPool[randomChampion];
};

championPicker.addEventListener("click", generateChampion);

//! Item randomizer
