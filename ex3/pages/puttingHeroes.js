import {data} from './data.js';
// JSON.parse(localStorage.getItem(`help${i}`));



// console.log(savedHeroesBase[3]["class"]);



for (let i=1; i<=localStorage.getItem("number"); i++){
let savedHeroesBase = localStorage.getItem(`card${i}`);
let savedBase = JSON.parse(savedHeroesBase);
document.getElementsByClassName('savedCardNameText')[i-1].textContent = savedBase[2].class ;
document.getElementsByClassName('savedCardPictureImg')[i-1].src = savedBase[1].img+ ".jpg";
// for(let j=1*savedBase[3].id-1; j<6*savedBase[3].id; j++){
//         document.querySelectorAll('.specValue')[j].textContent = ;
//         console.log(savedBase[0].valued[j])
//     }
}




// 1*savedBase[3].id-1

// console.log(document.getElementsByClassName('.savedCardPictureImg')[i-1]);
// for(let j=0; j<6*localStorage.getItem("number"); j++){
//     document.getElementsByClassName('specValue')[j].textContent = savedBase[]
// }











// for(let j =0; j< document.querySelectorAll('.savedCardNameText').length; j++){
//     document.getElementsByClassName('savedCardNameText')[j].textContent = savedHeroesBase[i]["class"];
//     console.log("lox")
//     }







// for(let k=0; k < localStorage.getItem('number'); k++){
//     document.getElementsByClassName('savedCardPictureImg')[k].src = savedHeroesBase["bard1"].img + '.jpg';
//     for (let h=0; h < 6 ; h++){
//         document.getElementsByClassName('specValue')[h].textContent = savedHeroesBase["bard1"].valued[j];
//     }
// }


// let cardNumber = document.getElementsByClassName('savedCard')[i].classList.toString().substring(10);
// cardNumber = cardNumber -(-1)
// console.log(cardNumber)
// console.log(document.getElementsByClassName('specName')[j].textContent.slice(0, -1))
//         let cuttedText = document.getElementsByClassName('specName')[j].textContent.slice(0, -1) 
//         cuttedText += localStorage.getItem(`stats${j}`);
//         console.log(cuttedText);