async function deleting(url = "", data = {}) {
    console.log('deleting')
    console.log(data)
    const response = await fetch(url, {
      method: "POST", 
       body: JSON.stringify(data), 
        headers: {
      "Content-Type": "application/json",
            },
        });
        const json = await response;
    }
    
function deletingFunc(){
    let deleteBtn = document.querySelectorAll(".delete")
    // console.log(deleteBtn)
    // console.log(deleteBtn.length)
    let cardId = new Object();
    for(let i =0; i < deleteBtn.length; i++){
        deleteBtn[i].addEventListener('click', ()=>{
            let cards = deleteBtn[i].parentNode.parentNode;
                cards.classList.add("none");
                // console.log('deleting');
                // console.log('deletedBtn id = ', deleteBtn[i].parentNode.parentNode.id);
                // cardId.id = deleteBtn[i].parentNode.parentNode.id;
                // cardId.login = localStorage.getItem('login');
                // return(deleting('http://localhost:3500/deleteCard', cardId));
            
        })
    }
}
function deleteFromDB(){
    let deleteBtn = document.querySelectorAll(".delete");
    for(let i=0; i < deleteBtn.length; i++){
        deleteBtn[i].addEventListener('click', ()=>{
        let cardId = new Object();
        cardId.id = deleteBtn[i].parentNode.parentNode.id;
        cardId.login = localStorage.getItem('login');
        deleting('http://localhost:3500/deleteCard', cardId);
        }
    )}
}
setInterval(deletingFunc, 500);
setInterval(deleteFromDB, 500);


// for(let i = 0; i< delete_btn.length; i++){
//     delete_btn[i].addEventListener('click', function() {
//     let cards = delete_btn[i].parentNode.parentNode;
//     let number = delete_btn[i].parentNode.parentNode.className.toString().slice(10 , cards.length);
//     cards.classList.add("none");
//         console.log('deleting');
//         console.log('deleted_btn id = ', )
//         deleting('/deleteCard', delete_btn[i].parentNode.parentNode.id)
        
   
//     })
// } 


 // localStorage.removeItem(`card${number}`)
    // let num = (localStorage.getItem("number") -1);
    // localStorage.setItem("number",num)