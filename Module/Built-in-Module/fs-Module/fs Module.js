// File System (fs) Module
const { error } = require('console');
const fs = require('fs');

fs.writeFile('Fs.txt','This twxt is come from Fs.txt file', (err) => {
  if(err){
    console.log(err);
  }
  else{
    console.log("write successfull in fs.text");
  }
});

fs.readFile('Fs.txt','utf-8', (err , data) => {
  if(err){
    console.log(err);
  }
  else{
    console.log("Read successfull:", data);
  }
});


fs.readFile('texOfFs.txt','utf-8', (err , data) => {
  if(err){
    console.log(err);
  }
  else{
    console.log("Read 1st file is successfull.The file name is the txtOfFs.js:", data);
  }
});