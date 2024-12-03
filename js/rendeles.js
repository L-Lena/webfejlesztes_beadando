const rangeInput = document.getElementById("quantityRange");
const rangeValueDisplay = document.getElementById("rangeValue");

function updateRangeValue() {
    rangeValueDisplay.textContent = rangeInput.value;
}
rangeInput.addEventListener("input", updateRangeValue);

//termék fajta+altípus
function gyumolcsAltipusokBetoltese() {
    const altipusok = {
      alma: [
        "Goldrush Coop38",
        "Wiltons Red Jonaprince",
        "Jeromine",
        "Red Idared",
        "Idared",
        "Florina",
        "Allegro UEB-3802 6",
        "Galiwa CH 101",
        "Galarina",
        "Bay 3341",
        "Devil Gala",
      ],
      szilva: [
        "Topend Plus",
        "Jofela Nr. 7346",
        "Toptaste Kulinaria",
        "Elena",
        "Tophit",
        "Topfive",
        "Stanley",
        "Bluefree",
        "President",
        "Cacanska Lepotica",
        "Topfirst",
      ],
      meggy: [
        "Érdi bőtermő",
        "Újfehértói fürtös",
        "Oblacsinszka",
        "Erika",
        "Debreceni Bőtermő",
        "Cigánymeggy klónok",
        "Kántorjánosi 3",
      ],
      cseresznye: [
        "Carmen",
        "Regina",
        "Kordia",
        "Erika",
        "Katalin",
        "Van",
        "Linda",
        "Bigarreau Burlat",
        "Germersdorfi 3",
      ],
      kajszi: [
        "Magyar Kajszi C235",
        "Gönczi Magyar Kajszi",
        "Ceglédi Óriás",
        "Flavor Cot",
        "Wonder Cot",
        "Magic Cot",
        "Jumbo Cot",
        "Lady Cot",
        "Lilly Cot",
        "Flash Cot",
        "Tsunami",
        "Flavorcot",
        "Kioto",
      ],
      körte: ["Bosk kobak körte", "Vilmos körte"],
      birs: [
        "Konstantinápolyi birs",
        "Cydora Robusta",
        "Vranja",
        "Leskováci",
        "Angersi",
        "Berecki bőtermő",
      ],
    };
  
    const gyumolcsSelect = document.getElementById("gyumolcsFajta");
    const altipusSelect = document.getElementById("gyumolcsAltipus");
    const kivalasztottGyumolcs = gyumolcsSelect.value;
  
    // Legördülő lista alaphelyzetbe állítása
    altipusSelect.innerHTML = '<option value="">Válassz altípust</option>';
  
    // Altípusok betöltése, ha van
    if (altipusok[kivalasztottGyumolcs]) {
        altipusok[kivalasztottGyumolcs].forEach(function (altipus) {
        const option = document.createElement("option");
        option.value = altipus;
        option.textContent = altipus;
        altipusSelect.appendChild(option);
      });
    }
  }

 
 
