// class log4jsconfig{

//   static Log() {
//       const log4js = require('log4js');
//       log4js.configure('./config/log4js.json');
//       // const log = log4js.getLogger(); 
//       //for both console and file
//       const log = log4js.getLogger("default");
//       return log;
//   }

//   // Log a message
//   // logger.trace('Trace, log4js!');
//   // logger.debug('Debug, log4js!');
//   // logger.info('Hello, log4js!');
//   // logger.warn('Heads up, log4js!');
//   // logger.error('Danger, log4js!');
//   // logger.fatal('Fatal, log4js!');
// }

const log4js = require('log4js');
log4js.configure('./config/log4js.json');
// const log = log4js.getLogger(); 
//for both console and file
// const log4jsconfig = log4js.getLogger("default");
const log4jsconfig = log4js.getLogger("file");

module.exports = log4jsconfig;