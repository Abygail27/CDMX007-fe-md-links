const fs = require('fs');

fs.readFile('./README.md', (err,data) => { /*utf-8, data enconding*/
    if(err){
        console.log(err);
        }
        console.log(data.toString()); 
        
}); 
