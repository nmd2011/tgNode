const fs = require('fs');

const content = "Blah blah lipsu"

 console.log("Going to write into existing file");
// Open a new file with name input.txt and write Simply Easy Learning! to it.
 fs.writeFile('C:/node/read/testingtwo.txt', content, function(err) {
    if (err) {
       return console.error(err);
    }
  
 });

fs.readFile("C:/node/read/testingtwo.txt", 'utf-8', (err, data) => { 
    if (err) throw err; 
  
    // Converting Raw Buffer to text 
    // data using tostring function. 
    console.log(`This is the file data........ ${data}`); 
})

