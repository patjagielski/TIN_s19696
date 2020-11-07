const fs = require('fs');

fs.watch('data',{recursive: true},(eventType, fileName) => {
  console.log(`Event: ${eventType}`);
  console.log(`File Name: ${fileName}`);
  if(eventType === 'change' && fileName.includes('.')){
    fs.readFile(`data/${fileName}`, {encoding: 'utf-8'}, (err, data) =>{
      return console.log(data);
    })
  }
});
