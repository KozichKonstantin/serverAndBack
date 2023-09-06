import {data} from './data.js'
// import {savedHeroesBase} from './data.js'
import {d} from './generatecard.js';

// const postData = async (url='', info ={}) =>
// {const response = await fetch(url, {
//      method: 'POST',
//       headers: {
//         'Accept': 'application/json, text/plain, */*', 
//         'Content-Type': 'application/json'
//     },
//        body: 'json=' + JSON.stringify(info)
//     });
//     return response.json();
// }
// postData('/saveCard', {'answer': 123, 'border': 36, 'xline': 18})
let elementsMassive = document.querySelector('.toSecondPage');
let a , b;
let myData ={
    ammo: 122,
    massive: [
        a= 12,
        b=1
    ],
    romeo: 'Julietta'
}
let savingHeroesButtons = document.getElementsByClassName('saveHero');
for (let i=0; i < data.length; i++){
    savingHeroesButtons[i].addEventListener('click', function() {
         fetch('/saveCard', {
            method: 'post',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: 'json=' +JSON.stringify(myData)
        })
        .then(res => res.json())
       
        let number =  localStorage.getItem('number') - (-1);
        localStorage.setItem('number',`${number}`)
            d("h2", 'message', elementsMassive, "NEW")} 
            
    )
}




// localStorage.clear();


let valued = [];
let savedHeroesBase = {};

for(let i=0; i< data.length; i++){

    savingHeroesButtons[i].addEventListener('click', function() {

        const currentHeroButton = savingHeroesButtons[i];
        let savedClass = currentHeroButton.className.toString().slice(9, (currentHeroButton.length))
        if(savedClass == data[i]['name']){


            let stats_input = document.getElementsByClassName(('quantity ' + savedClass + 'Spec'));
            for(let j=0; j < 6; j++){
            valued[j] =+ stats_input[j].value;
            savedHeroesBase = [
                        {"valued" : valued},
                        {"img" : `${(data[i]['img'] + '/' + data[i]['currentPicture'])}`}, 
                        {"class" : `${savedClass}`}]
                        console.log(savedHeroesBase)
            }


        }
        return(localStorage.setItem(`card${localStorage.getItem("number") - 1}`, JSON.stringify(savedHeroesBase)));
    })

}

