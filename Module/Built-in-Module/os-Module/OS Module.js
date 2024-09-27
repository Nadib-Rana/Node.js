const os = require('os');

// console.log(os); // Logs the entire os module
// console.log(os.userInfo()); // Logs information about the current user
// console.log(os.homedir());  // Logs the path to the home directory of the current user
// console.log(os.hostname()); // Logs the hostname of the operating system
// console.log(os.totalmem()); // Logs the total system memory in bytes
// console.log(os.freemem());  // Logs the free memory in bytes
console.log(os.arch()); //System architecture (indirectly refers to "mode" as 32-bit or 64-bit)