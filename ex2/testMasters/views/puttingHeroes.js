// import {data} from './data.js';
fetch('/putCard').then(function(response){
    response.json().then(function(data){
        console.log('data', data);
    })
    .catch(function (error){
        console.log('error', error);
    })
})


for (let i=0; i<=(localStorage.getItem("number") - 1); i++){
    let savedBase = JSON.parse(localStorage.getItem(`card${i}`));
    document.getElementsByClassName('savedCardNameText')[i].textContent = savedBase[2].class ;
    document.getElementsByClassName('savedCardPictureImg')[i].src = savedBase[1].img+ ".jpg";
    for(let j=0; j<6; j++){
        document.getElementsByClassName('savedCardSpecs')[i].children[j].lastChild.textContent = savedBase[0].valued[j];
    }
    }

