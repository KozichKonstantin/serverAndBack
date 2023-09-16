async function loginSave(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST", 
       body: JSON.stringify(data), 
    headers: {
      "Content-Type": "application/json",
            },
        });
        const json = await response.json();
        localStorage.setItem('login', json.login)
    }
    let obj = new Object();
document.querySelector(".subButton").addEventListener("click", ()=>{
    obj.login = document.getElementsByName('login')[0].value;
    obj.password = document.getElementsByName('password')[0].value;
    
    // console.log(obj)
    loginSave('/login/saveLogin', obj)
})