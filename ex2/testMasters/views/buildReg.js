// import { loginSave } from "./loginSave";
editting(localStorage.getItem('addres'));
function editting (reqName){
    if (reqName == '/login/loginSucces'){
        document.getElementsByClassName('varaity')[0].action  = reqName;
    }    
    else{
        console.error('failed transition')
    }
    if(reqName == '/registrationPage/registrationSucces'){
        document.getElementsByClassName('head')[0].children[0].textContent = 'Registration'
        document.getElementsByClassName('varaity')[0].action = reqName;
        localStorage.removeItem('addres');
    }
    else{
        console.error('failed transition')
    }   
}

