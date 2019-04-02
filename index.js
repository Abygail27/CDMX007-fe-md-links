const fs = require('fs');

fs.readFile('./README.md', (err,data) => {
    if(err){
        console.log(err);
        }
        console.log(data.toString()); 
        
}); 
