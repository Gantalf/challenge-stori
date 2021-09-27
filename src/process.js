const csv = require('csv-parser');
const fs = require('fs');
const { totalBalance, average, date, sendEmail } = require('./moduls');


let saveData = [];

fs.createReadStream('/src/data.csv')
  .pipe(csv())
  .on('data', (row) => {
    saveData.push(row);
  })
  .on('end', () => {

    const resultBalance = totalBalance(saveData);

    const resultAverageDebit = average(saveData, 1);
    const resultAverajeCretit = average(saveData, -1);

    const months = date(saveData);

    sendEmail(resultBalance, resultAverageDebit, resultAverajeCretit, months);

  })





