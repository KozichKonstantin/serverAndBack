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
        function createAllCardElements(type, createdClass, id, place, text=""){
            const createdType = document.createElement(type);
            return createdClass && createdType.classList.add(...createdClass.split(" ")), id && createdType.setAttribute(`id`,`${id}`), text && (createdType.textContent = text), place.append(createdType)
        }
        let savedList = document.querySelector(".savedList");
        createAllCardElements('div', `savedCard`, `${json.id}`, savedList);
        let savedCard = document.querySelector(`${json.id}`,`.savedCard`);
        console.log(savedCard, 'ada')
        console.log(json.id)
        createAllCardElements('div', `savedCardName`, `${json.id}`, savedCard);
        let saveCardText =document.querySelector(`.savedCardName`, `#${json.id}`);
        createAllCardElements('h1', `savedCardNameText`, `${json.id}`, saveCardText);
        createAllCardElements('div', `savedCardPicture`, `${json.id}`, savedCard);
        saveCardText = document.querySelector(`.savedCardPicture`, `#${json.id}`);
        createAllCardElements('img', `savedCardPictureImg`, `${json.id}`, saveCardText);
        createAllCardElements('div', `savedCardSpecs`, `${json.id}`, savedCard);
        saveCardText = document.querySelector(`.savedCardSpecs`, `#${json.id}`);
        for(let i=0; i < 6; i++){
            createAllCardElements('div', `specText ${stats[i].stat}`, `${json.id}`, saveCardText);
        }
        saveCardText = document.querySelector(`.specText`, `#${json.id}`)
        createAllCardElements('h2', `specName`, `${json.id}`, saveCardText)

        let cardsMassive = document.querySelector(`.specText`, `#${json.id}`)
        let h2Fills = document.querySelector(`.specName`, `#${json.id}`)
        for( let i = 0; i < cardsMassive.length; i++){
            h2Fills.textContent = cardsMassive[i].classList.toString().substring(9);
        }
        for(let i =0; i < h2Fills.length; i++){
            createAllCardElements('p', `specValue`, `${json.id}`, saveCardText)
        }
        createAllCardElements('div', `activityButtons_case`, `${json.id}`, savedCard)
        let activityButtons_case = document.querySelector(`.activityButtons_case`, `#${json.id}`)
        createAllCardElements('div', `activityButton reedFull`, `${json.id}`, activityButtons_case)
        saveCardText = document.querySelector(`.readFull`, `#${json.id}`)
        saveCardText.setAttribute('src', 'data/addit_images/free-file-icon-1453-thumb.png')
        createAllCardElements('div', `activityButton printTo`, `${json.id}`, activityButtons_case)
        saveCardText = document.querySelector(`.printTo`, `#${json.id}`)
        createAllCardElements('img', `printToImg`, `${json.id}`, saveCardText);
        saveCardText = document.querySelector(`.printToImg`, `#${json.id}`);
        saveCardText.setAttribute('src', 'data/addit_images/4305625.png');
        createAllCardElements('div', `activityButton delete`, `${json.id}`, activityButtons_case )
        saveCardText= document.querySelector(`.delete`, `#${json.id}`)
        createAllCardElements('img', `deleteImg`, saveCardText);
        saveCardText = document.querySelector(`.deleteImg`, `#${json.id}`);
        createAllCardElements('src', 'data/addit_images/3481306.png')


        console.log("Успех:", JSON.stringify(json));
    } 

    
for (let i=0; i<=(localStorage.getItem("number") - 1); i++){
    let postForToServ = {
        numb : i
    }
    postData('/putCard', postForToServ);
}    
    
// for (let i=0; i<=(localStorage.getItem("number") - 1); i++){
    // let postForToServ = {
    //     numb : i
    // }
    // postData('/putCard', postForToServ);
    // let savedBase = JSON.parse(localStorage.getItem(`card${i}`));
    // document.getElementsByClassName('savedCardNameText')[i].textContent = savedBase.class ;
    // document.getElementsByClassName('savedCardPictureImg')[i].src = savedBase.image+ ".jpg";
    // for(let j=3; j<9; j++){
    //     document.getElementsByClassName('savedCardSpecs')[i].children[j].lastChild.textContent = savedBase[j];
    // }
    // }






    // function createElementSecond(e, t, o, r="") {
    //     const l = document.createElement(e);
    //     return t && l.classList.add(...t.split(" ")),r && (l.textContent = r), o.append(l)
    // }
    // let savedlist = document.querySelector(".savedList");
    // createElementSecond("div", `savedCard ${e}`, savedlist);
    // let savecard = document.querySelectorAll(".savedCard");
    // createElementSecond("div", `savedCardName`, savecard[e]);
    // let aded = document.querySelectorAll(".savedCardName");
    // createElementSecond("h1", `savedCardNameText`, aded[e]);
    // createElementSecond("div", `savedCardPicture`, savecard[e]);
    // aded = document.querySelectorAll(".savedCardPicture");
    // createElementSecond("img", `savedCardPictureImg`, aded[e]);
    // createElementSecond("div", `savedCardSpecs`, savecard[e]);
    // aded = document.querySelectorAll(".savedCardSpecs");
    // for(let i = 0; i< 6; i++){
    //     createElementSecond("div", `specText ${stats[i].stat}`, aded[e]);
    // }
    // aded = document.querySelectorAll(".specText");
    // createElementSecond("h2", `specName`, aded[e], "");
    // let cardsMassive = document.getElementsByClassName('specText');
    // let h2Fills = document.getElementsByClassName('specName');
    // for (let i=0; i < cardsMassive.length; i++){
    //     h2Fills[i].textContent = cardsMassive[i].classList.toString().substring(9);
    // }
    // createElementSecond("p", `specValue`, aded[e], "1");
    // createElementSecond("div", `activityButtons_case`, savecard[e]);
    // let activityButtons_case = document.querySelectorAll(".activityButtons_case");
    // createElementSecond("div", `activityButton reedFull`, activityButtons_case[e]);
    // aded = document.querySelectorAll(".reedFull");
    // createElementSecond("img", `reedFullImg`, aded[e]);
    // aded = document.querySelectorAll(".reedFullImg");
    // aded[i].setAttribute('src', 'data/addit_images/free-file-icon-1453-thumb.png');
    