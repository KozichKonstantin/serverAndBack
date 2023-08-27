const Logger = require('./log.js')
const logger = new Logger();
logger.on('some_event', (arg)=>{
    const { id , text} = arg;
    console.log(id , text);
});
logger.log('User logged!');
