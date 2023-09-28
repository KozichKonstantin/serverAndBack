
document.getElementsByClassName('loginP')[0].addEventListener('click', ()=>{
    chosedPage('/loginPAge');
});
document.getElementsByClassName('regP')[0].addEventListener('click', ()=>{
    chosedPage('/registrationPage');
});
function chosedPage(addres){
    console.log(addres);
    localStorage.setItem('addres', addres);
}