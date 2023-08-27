const fs = require('fs');
fs.readFile('./page.dat', 'utf-8', (error,data) => {
    fs.mkdirSync('./files2', ( )=>{ 

    
    fs.writeFileSync('./files2/test2.html', `${data} new text`, () =>{
        error ? console.log(error) : null; //лог ошибки
    });
})
})
setTimeout(()=>{
    if(fs.existsSync('./files2/test2.html')){ //проверка существования деректории
    fs.unlink('./files2/test2.html', ()=>{}) // создание файла в папке
                }
            },4000);
        setTimeout(()=>{
            if(fs.existsSync('./files2')){ 
            fs.rmdir('./files2', ()=>{}) //удаление папки
                        }
                    },6000);
