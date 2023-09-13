async function deleteing(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST", 
       body: JSON.stringify(data), 
    headers: {
      "Content-Type": "application/json",
            },
        });
        const json = await response.json();
    }

function test() {
    let deleteBtn = document.querySelectorAll(".delete")
    console.log(deleteBtn)
    console.log(deleteBtn.length)
    for(let i =0; i < deleteBtn.length; i++){
        doc[i].addEventListener('click', ()=>{
            let cards = deleteBtn[i].parentNode.parentNode;
                cards.classList.add("none");
                console.log('deleting');
                console.log('deletedBtn id = ', deleteBtn[i].parentNode.parentNode.id)
                deleting('/deleteCard', deleteBtn[i].parentNode.parentNode.id)
            
        })
    }
}

setTimeout(test, 500)


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