// Custom middleware that logs out the type and path of each request to the server
const clog = (req, res, next) => {
    const fgCyan = '\x1b[36m';
    const fgGreen = '\x1b[32m';
    const fgYellow = '\x1b[33m';
    const fgRed = '\x1b[31m';
    const fgMagenta = '\x1b[35m';
    const fgPurple = '\x1b[38;5;141m';
    const fgHotPink = '\x1b[38;5;200m';
    const fgWhite = '\x1b[37m';
    const fgBlack = '\x1b[30m';
    const fgBlue = '\x1b[34m';
    const fgOrange = '\x1b[38;5;208m';
    const bgRed = '\x1b[41m';
    const bgGreen = '\x1b[42m';
    const bgYellow = '\x1b[43m';
    const bgBlue = '\x1b[44m';
    const bgMagenta = '\x1b[45m';
    const bgCyan = '\x1b[46m';
    const bgWhite = '\x1b[47m';
    const bgBlack = '\x1b[40m';
  
    switch (req.method) {
      case 'GET': {
        console.log(`${fgWhite} ----------------------------`);
        console.info(`🟪 ${fgPurple}${req.method} request to ${req.path}`);
        break;
      }
      case 'POST': {
        console.log(`${fgWhite} ----------------------------`);
        console.info(`📗 ${fgGreen}${req.method} request to ${req.path}`);
        break;
      }
      case 'PUT': {
        console.log(`${fgWhite} ----------------------------`);
        console.log(`📙 ${fgOrange}${req.method} request to ${req.path}`);
        break;
      }
      default:
        console.log(`${fgWhite} ----------------------------`);
        console.log(`🗑️🔥  ${fgHotPink}${req.method} request to ${req.path}`);
    }
  
    next();
  };
  
  exports.clog = clog;
  