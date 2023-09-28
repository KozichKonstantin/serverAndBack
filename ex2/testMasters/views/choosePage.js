
document.getElementsByClassName('loginP')[0].addEventListener('click', ()=>{
    chosedPage('/login/loginSucces');
});
document.getElementsByClassName('regP')[0].addEventListener('click', ()=>{
    chosedPage('/registrationPage/registrationSucces');
});
function chosedPage(addres){
    console.log(addres);
    localStorage.setItem('addres', addres);
}