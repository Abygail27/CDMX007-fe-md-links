

fs.readFile('./README.md', 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
  
      const regex = /(https?:\/\/[^\s]+)/g;
      const result = data.match(regex)
      console.log(result)
  
    }
  
  
  
  });
  