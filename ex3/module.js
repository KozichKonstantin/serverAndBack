const os = require('os');

const {userName: Usr, call} = require('./test2'); //в скобках пишешь имя файла откуда идет экспорт 
const name = 'Tommy';
console.log(call(name));
module.exports = name;
console.log(os.platform(), os.release())