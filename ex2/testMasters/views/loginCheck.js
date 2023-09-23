import { createAllCardElements } from "./puttingHeroes.js";
function loginCheck (login){
    if(login != null ){
        ///вывод логина
        console.log('ok', login);
        console.log(document.getElementsByClassName("signInText")[0].textContent = login);
    }else{
        ///ошибка, не зарегестрирован
        console.log('not ok', login);
        let part = document.getElementsByClassName('block_1')[0];
        createAllCardElements('div', 'loginFail', part);
        createAllCardElements('div', 'backgroundBlock', part);
        part = document.getElementsByClassName('loginFail')[0];
        createAllCardElements('div', 'needToAuthorize', part);
        part = document.getElementsByClassName('needToAuthorize')[0];
        createAllCardElements('p', 'textAuthoruze', part,'','You need to authorize');
        createAllCardElements('a', 'buttonToSignUp', part,'','Sign In');
        document.getElementsByClassName('buttonToSignUp')[0].href = '/registration';
    }
}
window.onload = loginCheck(localStorage.getItem('login'));
