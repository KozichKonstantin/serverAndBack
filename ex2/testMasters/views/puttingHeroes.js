// import {data} from './data.js';
// fetch('/putCard', function(response){
//     method: "POST", 
//     response.json().then(function(data){
        
//         console.log('data', data);
//     })
//     .catch(function (error){
//         console.log('error', error);
//     })
// })
async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST", 
       body: JSON.stringify(data), 
    headers: {
      "Content-Type": "application/json",
            },
        });
        const json = await response.json();
        console.log("Успех:", JSON.stringify(json));
    } 
    
    let postForToServ = {
        numb : localStorage.getItem('number')
    }
    
    postData('/putCard', postForToServ);
for (let i=0; i<=(localStorage.getItem("number") - 1); i++){
    
    let savedBase = JSON.parse(localStorage.getItem(`card${i}`));
    document.getElementsByClassName('savedCardNameText')[i].textContent = savedBase[2].class ;
    document.getElementsByClassName('savedCardPictureImg')[i].src = savedBase[1].img+ ".jpg";
    for(let j=0; j<6; j++){
        document.getElementsByClassName('savedCardSpecs')[i].children[j].lastChild.textContent = savedBase[0].valued[j];
    }
    }

