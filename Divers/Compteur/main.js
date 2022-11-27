const texte = document.getElementById('texte');
const submit_texte = document.getElementById('submit_texte');
const display = document.getElementById('display');
const liste_mots = document.getElementById("liste_mots");

// function Dictionary(){
//     this.dico = [];

//     this.add = function(key, value){
//         this.dico.push({
//             key : key,
//             value : value
//         })
//         return this.dico;
//     }
//     this.show = function(){
//         return this.dico;
//     }
//     this.equal = function(elem){
//         for(var i = 0; i < this.dico.length; i++ ){
//             if(elem = this.dico[i].key){
//                 this.dico[i].value = this.dico[i].value + 1;
//                 console.log(this.dico[i].value);
//             }
//         }
//         return false;
//     }
//     this.taille= function(){
//         return this.dico.length;
//     }
// }


submit_texte.addEventListener('click', function(){
    let dict = [{mot :"mot", occ: 1}];     // Pour pouvoir parcourir le dico car sinon vide
    let liste = texte.value.split(/[\s']+/);
    let taille = liste.length;
    let ajout = true;
    liste_mots.innerHTML = "";
    for (let e=0; e<liste.length;e++){
        if(liste[e] === "" || e===" "){
            taille--;
            liste.splice(e, 1);     // Si espace on retire de la liste
        }
    }
    for(let i = 0; i < liste.length; i++){      // On parcout tous les mots
        for(let a = 0; a < dict.length; a++){   //On parcourt le dico pour voir si le mot existe déja
            if(liste[i] == dict[a].mot){        // Si le mot existe déjà, on ajoute +1 à sa valeur
                ajout = false;
                dict[a].occ++;
            }
        }
        if(ajout == true){      // Si le mot n'est pas présent dans le dico, on l'ajoute
            dict.push({mot: liste[i], occ:1});
        }
        ajout = true;
    }
    display.innerHTML = `&#8594 ${taille} mots 	&#8592; `;
    liste_mots.innerHTML += "Occurence des mots : <br>";
    dict.splice(0, 1);      // On retire le 1er elem qui etait inutile
    dict.sort((a,b)=> {return b.occ - a.occ})   // tri
    for (let i = 1; i < dict.length; i++){
        liste_mots.innerHTML += `${dict[i].mot} : ${dict[i].occ} fois <br>`;
    }
})


// monObj = [
//     {mot : "valeur" , occ : 1},
//     {mot : "mot" , occ : 2},
//     {mot : "super mot" , occ : 1},
//     {mot : "giga mot" , occ : 4}
// ]

// monObj.sort((a,b)=>{        //tri
//     return b.occ - a.occ
// })
// //console.log(monObj);

// //monObj.push({mot:"test", occ:3});   // Acceder 
// //console.log(monObj[2].occ++)        // Maj


// console.log(monObj.length);

// for(let i=0; i < monObj.length; i++){
//     console.log(monObj[i].mot, "valeur")
//     if(monObj[i].mot == "valeur"){
//         console.log("ajout");
//         monObj[i].occ ++;
//     }
// }

// console.log(monObj);