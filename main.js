// ALL POKEMON ARE STORED HERE
let POKEMON = [];

class Trainer{
  constructor(name) {
    this.name = name;

  }

  all() {
    return POKEMON;

  }

  get(name){
   if (name == "lucario") {
     return getDusclops();
   } else if (name == "dusclops") {
     return getGengar();
   } else if (name == "haunter") {
         return getHaunters();
       }
     }
}

let trainer = new Trainer('Elite 4 Chris');


class Pokemon {
  constructor(name, hp, atk, def, abilities, image) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.abilities = [];
    this.image = image;

  }
}
// ============================
//GETING LUCARIO FROM POKEMONAPI
function getDusclops() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        data =  JSON.parse(this.responseText);
          // console.log(data);
          {
          let dusclops = {
              name: data.name,
              hp: data.stats[5].base_stat,
              attack: data.stats[4].base_stat,
              defense: data.stats[3].base_stat,
              ability1: data.abilities[0].ability.name,
              ability2: "none",
              ability3: "none",
              image: "dusclops.gif"
            }
            console.log(dusclops);
            POKEMON.push(dusclops);
            writeToScreen(dusclops);
      }
         }
    };
    xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/dusclops.json", true);
    xhttp.send();
};

 // ==========================
//GETING GENGAR FROM POKEMONAPI
function getGengar() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          data = JSON.parse(this.responseText);
          // console.log(data);
          {
            let gengar = {
              name: data.name,
              hp: data.stats[5].base_stat,
              attack: data.stats[4].base_stat,
              defense: data.stats[3].base_stat,
              ability1: data.abilities[0].ability.name,
              ability2: "none",
              ability3: "none",
              image: "https://i.imgur.com/rnebkT1.gif"
            }
            console.log(gengar);
            POKEMON.push(gengar);
            writeToScreen(gengar);
          }

        }
    };
    xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/gengar.json", true);
    xhttp.send();
}


// ===========================
//GETING SCIZOR FROM POKEMONAPI

function getHaunter() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          data = JSON.parse(this.responseText);
          // console.log(data);
            let haunter = {
              name: data.name,
              attack: data.stats[4].base_stat,
              defense: data.stats[3].base_stat,
              ability1: data.abilities[0].ability.name,
              ability2: "none",
              ability3: "none",
              image: "https://media.giphy.com/media/MGndlZYnTsZAA/giphy.gif"
            }
            console.log(haunter);
            POKEMON.push(haunter);
            writeToScreen(haunter);

        }
    };
    xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/haunter.json", true);
    xhttp.send();

}

function writeToScreen(pokemon) {
  // grab html elements
  // change innerHTML for each element to current pokemon property

   var sprite = document.getElementById("sprite");
   var pokeName = document.getElementById("pokeName");
   var pokeAttack = document.getElementById("pokeAttack");
   var pokeDefense = document.getElementById("pokeDefense");
   var pokeAbility1 = document.getElementById("pokeAbility1");
   var pokeAbility2 = document.getElementById("pokeAbility2");
   var pokeAbility3 = document.getElementById("pokeAbility3");

   pokeName.innerHTML = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
   pokeAttack.innerHTML = pokemon.attack;
   pokeDefense.innerHTML = pokemon.defense;
   pokeAbility1.innerHTML = pokemon.ability1.charAt(0).toUpperCase() + pokemon.ability1.slice(1);;
   pokeAbility2.innerHTML = pokemon.ability2.charAt(0).toUpperCase() + pokemon.ability2.slice(1);;
   pokeAbility3.innerHTML = pokemon.ability3.charAt(0).toUpperCase() + pokemon.ability3.slice(1);;
   sprite.src = pokemon.image;

}
