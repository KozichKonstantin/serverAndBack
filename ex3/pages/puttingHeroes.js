import {data} from './data.js';
// JSON.parse(localStorage.getItem(`help${i}`));



// console.log(savedHeroesBase[3]["class"]);



for (let i=1; i<=localStorage.getItem("number"); i++){
let savedHeroesBase = localStorage.getItem(`card${i}`);
let savedBase = JSON.parse(savedHeroesBase);
document.getElementsByClassName('savedCardNameText')[i-1].textContent = savedBase[2].class ;
document.getElementsByClassName('savedCardPictureImg')[i-1].src = savedBase[1].img+ ".jpg";
for(let j=0; j<6; j++){
    document.getElementsByClassName('savedCardSpecs')[i-1].children[j].lastChild.textContent = savedBase[0].valued[j];
}
}