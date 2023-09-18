import{stats} from './data.js';
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
        console.log(json);
        let savedList = document.querySelector(".savedList");

        for(let k = 0; k < json.length; k++){
        createAllCardElements('div', `savedCard`, savedList, `${json[k].id}`);
        let savedCard = document.querySelectorAll(`.savedCard`);
        for(let i=0; i < savedCard.length; i++){
            if (savedCard[i].id == json[k].id){
                let cardSpecs = new Object();
                cardSpecs[0] = json[k].strength;
                cardSpecs[1] = json[k].dexterity;
                cardSpecs[2] = json[k].constitution;
                cardSpecs[3] = json[k].intelligence;
                cardSpecs[4] = json[k].wisdom;
                cardSpecs[5] = json[k].charisma;
                createAllCardElements('div', `savedCardName`, savedCard[i]);
                let saveCardText =document.querySelectorAll(`.savedCardName`);
                createAllCardElements('h1', `savedCardNameText`, saveCardText[i], '', `${json[k].class}`);
                createAllCardElements('div', `savedCardPicture`, savedCard[i]);
                saveCardText = document.querySelectorAll(`.savedCardPicture`);
                createAllCardElements('img', `savedCardPictureImg`, saveCardText[i]);
                document.querySelectorAll('.savedCardPictureImg')[i].src = json[k].image + '.jpg';
                createAllCardElements('div', `savedCardSpecs`, savedCard[i]);
                saveCardText = document.querySelectorAll(`.savedCardSpecs`);
                for(let j=0; j < 6; j++){
                    createAllCardElements('div', `specText ${stats[j].stat}`, saveCardText[i]);
                }
                for (let j = 0; j < 6; j++){ ///переделать все таким же макаром
                    saveCardText = document.querySelectorAll(`.${stats[j].stat}`);
                    createAllCardElements('h2', 'specName', saveCardText[i], '',  `${stats[j].stat}`)
                    createAllCardElements('p', `specValue`, saveCardText[i], '', `${cardSpecs[j]}`)
                }
                createAllCardElements('div', `activityButtons_case`, savedCard[i])
                let activityButtons_case = document.querySelectorAll(`.activityButtons_case`)
                createAllCardElements('div', `activityButton readFull`, activityButtons_case[i])
                saveCardText = document.querySelectorAll(`.readFull`)
                createAllCardElements('img', 'readFullimg', saveCardText[i])
                saveCardText = document.querySelectorAll(`.readFullImg`)
                for(let j=0; j < saveCardText.length; j++){
                    saveCardText[j].setAttribute('src', 'data/addit_images/free-file-icon-1453-thumb.png')
                }
                createAllCardElements('div', `activityButton printTo`, activityButtons_case[i])
                saveCardText = document.querySelectorAll(`.printTo`)
                createAllCardElements('img', `printToImg`, saveCardText[i]);
                saveCardText = document.querySelectorAll(`.printToImg`);
                for(let j=0; j < saveCardText.length; j++){
                    saveCardText[j].setAttribute('src', 'data/addit_images/4305625.png');
                }
                createAllCardElements('div', `activityButton delete`, activityButtons_case[i] )
                saveCardText= document.querySelectorAll(`.delete`)
                
                createAllCardElements('img', `deleteImg`, saveCardText[i]);
                saveCardText = document.querySelectorAll(`.deleteImg`);
                for(let j=0; j < saveCardText.length; j++){
                    saveCardText[j].setAttribute('src', 'data/addit_images/3481306.png')
                }

            }
        }

        }
    } 
// console.log("Успех:", JSON.stringify(json));


        let userLogin = localStorage.getItem('login');
        let postForToServ = {
            login: userLogin
        }
        postData('/putCard', postForToServ);
 
    // let deleteButton = document.querySelectorAll(".delete");
    // for ( let i =0; i < deleteButton.length; i++){
    //     deleteButton[i].addEventListener('click', ()=>{
    //         console.log('deleting')
    //         let cards = deleteButton[i].parentNode.parentNode;
    //                 cards.classList.add("none");
    //                 console.log('deleted_btn id = ', deleteButton[i].parentNode.parentNode.id);
    //                 let user = localStorage.getItem('login');
    //                 let sended = new Object();
    //                 sended.id = deleteButton[i].parentNode.parentNode.id;
    //                 sended.login = user;
    //                 deleting('/deleteCard', sended);
    //                 console.log(sended, 'sended');
    //     })
    // } 