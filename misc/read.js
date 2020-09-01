const fs = require('fs');

fs.readFile("C:/Users/fyzni/OneDrive/Desktop/new-payee.spec.js",'utf-8',(err, data) => { 
    if (err) throw err;
    console.log(data);
 })

 fs.writeFile()
