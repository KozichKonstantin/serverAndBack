// import {data} from './data.js';
import{stats} from './data.js';
// fetch('/putCard', function(response){
//     method: "POST", 
//     response.json().then(function(data){
        
//         console.log('data', data);
//     })
//     .catch(function (error){
//         console.log('error', error);
//     })
// })
function createAllCardElements(type, createdClass, place, id="", text=""){
    const createdType = document.createElement(type);
    return createdClass && createdType.classList.add(...createdClass.split(" ")), text && (createdType.textContent = text), place.append(createdType), id && createdType.setAttribute(`id`,`${id}`)
}
async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST", 
       body: JSON.stringify(data), 
    headers: {
      "Content-Type": "application/json",
            },
        });
        const json = await response.json();
        // for(let i=0; i < localStorage.getItem("number"); i++){
        // localStorage.setItem(`card${json.id}`, JSON.stringify(json))
        // }
        
        let savedList = document.querySelector(".savedList");
        createAllCardElements('div', `savedCard`, savedList, `${json.id}`);
        let savedCard = document.querySelectorAll(`.savedCard`);
        for(let i=0; i < savedCard.length; i++){
            if (savedCard[i].id == json.id){
                console.log(savedCard[i].id, 'ada');
                createAllCardElements('div', `savedCardName`, savedCard[i]);
                let saveCardText =document.querySelectorAll(`.savedCardName`);
                createAllCardElements('h1', `savedCardNameText`, saveCardText[i]);
                createAllCardElements('div', `savedCardPicture`, savedCard[i]);
                saveCardText = document.querySelectorAll(`.savedCardPicture`);
                createAllCardElements('img', `savedCardPictureImg`, saveCardText[i]);
                createAllCardElements('div', `savedCardSpecs`, savedCard[i]);
                saveCardText = document.querySelectorAll(`.savedCardSpecs`);
                for(let j=0; j < 6; j++){
                    createAllCardElements('div', `specText ${stats[j].stat}`, saveCardText[i]);
                }
                saveCardText = document.querySelectorAll(`.specText`)
                // for (let j = 0; j < saveCardText.length; j++) createAllCardElements('h2', `specName`, saveCardText[j])
                // let cardsMassive = document.querySelectorAll(`.specText`)
                // let h2Fills = document.querySelectorAll(`.specName`)
                // for( let j = 0; j < cardsMassive.length; j++){
                //         h2Fills[j].textContent = cardsMassive[j].classList.toString().substring(9);
                // }
                // for(let j =0; j < h2Fills.length; j++) createAllCardElements('p', `specValue`, saveCardText[j])
                
                // createAllCardElements('div', `activityButtons_case`, savedCard[i])
                // let activityButtons_case = document.querySelectorAll(`.activityButtons_case`)
                // createAllCardElements('div', `activityButton readFull`, activityButtons_case[i])
                // saveCardText = document.querySelectorAll(`.readFull`)
                // createAllCardElements('img', 'readFullimg', saveCardText[i])
                // saveCardText = document.querySelectorAll(`.readFullImg`)
                // for(let j=0; j < saveCardText.length; j++){
                //     saveCardText[j].setAttribute('src', 'data/addit_images/free-file-icon-1453-thumb.png')
                // }
                // createAllCardElements('div', `activityButton printTo`, activityButtons_case[i])
                // saveCardText = document.querySelectorAll(`.printTo`)
                // createAllCardElements('img', `printToImg`, saveCardText[i]);
                // saveCardText = document.querySelectorAll(`.printToImg`);
                // for(let j=0; j < saveCardText.length; j++){
                //     saveCardText[j].setAttribute('src', 'data/addit_images/4305625.png');
                // }
                // createAllCardElements('div', `activityButton delete`, activityButtons_case[i] )
                // saveCardText= document.querySelectorAll(`.delete`)
                // createAllCardElements('img', `deleteImg`, saveCardText[i]);
                // saveCardText = document.querySelectorAll(`.deleteImg`);
                // for(let j=0; j < saveCardText.length; j++){
                //     saveCardText[j].setAttribute('src', 'data/addit_images/3481306.png')
                // }
            }
        }
        
    } 

// console.log("Успех:", JSON.stringify(json));



for (let i=0; i<=(localStorage.getItem("number") - 1); i++){
    let postForToServ = {
        numb : i
    }
    postData('/putCard', postForToServ);
    
    
}    

let saveCardText = document.querySelectorAll(`.specText`)
console.log(document.querySelectorAll(`.specText`))        
for (let j = 0; j < saveCardText.length; j++) createAllCardElements('h2', `specName`, saveCardText[j])
let cardsMassive = document.querySelectorAll(`.specText`)
let h2Fills = document.querySelectorAll(`.specName`)
for( let j = 0; j < cardsMassive.length; j++){
            h2Fills[j].textContent = cardsMassive[j].classList.toString().substring(9);
}
for(let j =0; j < h2Fills.length; j++) createAllCardElements('p', `specValue`, saveCardText[j])

    