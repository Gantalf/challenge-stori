const csv = require('csv-parser');
const fs = require('fs');
const { totalBalance, average, date, sendEmail } = require('./moduls');


let saveData = [];

fs.createReadStream('./data.csv')
  .pipe(csv())
  .on('data', (row) => {
    saveData.push(row);
  })
  .on('end', async () => {

    const resultBalance = totalBalance(saveData);

    const resultAverageDebit = average(saveData, 1);
    const resultAverajeCretit = average(saveData, -1);

    const months = date(saveData);

    await sendEmail(resultBalance, resultAverageDebit, resultAverajeCretit, months);

    console.log('result', months)
    console.log('finished');
  })





