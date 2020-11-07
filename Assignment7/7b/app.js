const fs = require('fs');

fs.watch('data',{recursive: true},(eventType, fileName) => {
  
  console.log(`Event: ${eventType}`);
  console.log(`File Name: ${fileName}`);
});


