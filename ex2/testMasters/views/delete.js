// let doc = document.querySelectorAll(".delete")
// console.log(doc)
async function deleting(url= "", data = {}){
    let doc = document.querySelectorAll(".delete")
    console.log(doc)
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const json = await response.json();

}

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