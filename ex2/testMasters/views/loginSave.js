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
document.querySelector(".subButton").addEventListener("click", ()=>{
    obj.login = document.getElementsByName('login').value;
    obj.password = document.getElementsByName('password');
    console.log(obj)
    loginSave('/login/saveLogin', obj)
})