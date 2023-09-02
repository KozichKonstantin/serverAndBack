const type = [
    {
        'id':1,
        'class': 'barbarian',
        'strength': 3
    },
    {
        'id':2,
        'class': 'bard',
        'strength': 2
    },
    {
        'id':3,
        'class': 'spy',
        'strength': 1
    }
]
// function sendRequest(method, url){
//     return new Promise(  (resolve,reject)=>{
//         const xhr = new XMLHttpRequest();
//         xhr.responseType ='JSON';
//         xhr.onload =() =>{
//             if(xhr.status >= 400){
//                 reject(xhr.response);
//             }else{
//                 resolve(xhr.response);
//             }
//             xhr.send(type);
//         }
//     })
// }
// sendRequest('POST', '127.0.0.1:3000/about');

const getResourse = async (url) =>{

    const response = await fetch(url);
    if(!response.ok){
        throw new Error(`${url}`, 'error', `${response.status}`)
    }
    return await response.json();
}
getResourse('127.0.0.1:3000/about').then(()=> console.log(data))
