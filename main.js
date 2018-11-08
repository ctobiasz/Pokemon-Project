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
     return getLucario();
   } else if (name == "gengar") {
     return getGengar();
   } else if (name == "scizor") {
         return getScizor();
       }
     }
}

let trainer = new Trainer('Elite 4 Chris');


class Pokemon {
  constructor(name, hp, atk, def, abilities) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.abilities = [];

  }
}
// ============================
//GETING LUCARIO FROM POKEMONAPI
function getLucario() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        data =  JSON.parse(this.responseText);
          // console.log(data);
          {
          let lucario = {
              name: data.name,
              hp: data.stats[5].base_stat,
              attack: data.stats[4].base_stat,
              defense: data.stats[3].base_stat,
              ability1: data.abilities[0].ability.name,
              ability2: data.abilities[1].ability.name,
              ability3: data.abilities[2].ability.name
            }
            console.log(lucario);
          POKEMON.push(lucario);

      }
         }
    };
    xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/lucario.json", true);
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
            }
            console.log(gengar);
            POKEMON.push(gengar);
          }

        }
    };
    xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/gengar.json", true);
    xhttp.send();
}


// ===========================
//GETING SCIZOR FROM POKEMONAPI

function getScizor() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          data = JSON.parse(this.responseText);
          // console.log(data);
            let scizor = {
              name: data.name,
              attack: data.stats[4].base_stat,
              defense: data.stats[3].base_stat,
              ability1: data.abilities[0].ability.name,
              ability2: data.abilities[1].ability.name,
              ability3: data.abilities[2].ability.name
            }
            console.log(scizor);
            POKEMON.push(scizor);

            writeToScreen(scizor);

        }
    };
    xhttp.open("GET", "http://fizal.me/pokeapi/api/v2/name/scizor.json", true);
    xhttp.send();

}


function writeToScreen(pokemon) {
  // grab html elements
  // change innerHTML for each element to current pokemon property

   var sprite = document.getElementById("sprite");
   var pokeName = document.getElementById("pokeName");
   var pokeAttack = document.getElementById("pokeAttack");
   var pokeDefense = document.getElementById("pokeDefense");
   var pokeAbility1 = document.getElementById("");
   // var pokeAbility2 = document.getElementById("pokeName");
   // var pokeAbility3 = document.getElementById("pokeName");

   pokeName.innerHTML = pokemon.name;
   pokeAttack.innerHTML = pokemon.attack;



}
