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
        for(let i=0; i < localStorage.getItem("number"); i++){
            localStorage.setItem(`card${i}`, JSON.stringify(json))
        }
        console.log("Успех:", JSON.stringify(json));
    } 

    
for (let i=0; i<=(localStorage.getItem("number") - 1); i++){
    let postForToServ = {
        numb : i
    }
    postData('/putCard', postForToServ);
}    
    
for (let i=0; i<=(localStorage.getItem("number") - 1); i++){
    // let postForToServ = {
    //     numb : i
    // }
    // postData('/putCard', postForToServ);
    let savedBase = JSON.parse(localStorage.getItem(`card${i}`));
    document.getElementsByClassName('savedCardNameText')[i].textContent = savedBase.class ;
    document.getElementsByClassName('savedCardPictureImg')[i].src = savedBase.image+ ".jpg";
    for(let j=3; j<9; j++){
        document.getElementsByClassName('savedCardSpecs')[i].children[j].lastChild.textContent = savedBase[j];
    }
    }

