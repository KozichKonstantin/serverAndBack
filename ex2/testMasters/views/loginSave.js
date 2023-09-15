async function loginSave(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST", 
       body: JSON.stringify(data), 
    headers: {
      "Content-Type": "application/json",
            },
        });
        const json = await response;
    }
let obj = new Object();
obj.login = document.getElementsByName('login').textcontent;
obj.password = document.getElementsByName('password').textcontent;
document.querySelector(".subButton").addEventListener("click", ()=>{
    loginSave('/login/saveLogin', obj)
})