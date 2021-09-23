const csv = require('csv-parser');
const fs = require('fs');

let saveData = [];

fs.createReadStream('./data.csv')
  .pipe(csv())
  .on('data', (row) => {
    saveData.push(row);
  })
  .on('end', () => {
    console.log('saveData', saveData);
    let suma = saveData.map(e => {
      return parseFloat(e.Transaction);
    })

    console.log('suma', suma)
    console.log('finished');
  })





