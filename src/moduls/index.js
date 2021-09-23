require('dotenv').config();

const nodemailer = require('nodemailer');

const { HOST_NAME, PORT, USER_EMAIL, PASS } = process.env;


function totalBalance(data) {
  let dataParseNum = data.map(e => {
    return parseFloat(e.Transaction);
  });

  let dataSum = 0;
  dataParseNum.forEach(element => {
    dataSum += element;
  });

  let result = dataSum / dataParseNum.length

  return result.toFixed(2);

}

function average(data, iswhat) {
  let dataFilter = data.filter(e => Math.sign(e.Transaction) == iswhat);

  let parseData = dataFilter.map(e => parseFloat(e.Transaction))

  let average = 0;
  parseData.forEach(e => {
    average += e;
  })

  return average / parseData.length;

}

function date(data) {
  let dataParseNum = data.map(e => {
    return parseFloat(e.Date.split('/')[0]);
  });

  /**
   * let obj = {
   *    date: numRepeated
   * }
  */

  let counts = {};

  dataParseNum.forEach(function (e) {
    counts[e] = (counts[e] || 0) + 1;
  })

  return counts;
}

function sendEmail(balance, averageDebit, averageCredit, months) {

  let nameMonths = ['0', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


  let txt = '';

  for (let key in months) {
    txt += `Number of transactions in ${nameMonths[parseFloat(key)]}: ${months[key]}\n`;
  }

  console.log('este es el txt', txt);

  let transport = nodemailer.createTransport({
    host: `${HOST_NAME}`,
    port: `${PORT}`,
    auth: {
      user: `${USER_EMAIL}`,
      pass: `${PASS}`
    }
  })

  const message = {
    from: 'stori@support.com',
    to: 'user@gmail.com',
    subject: 'prueba',
    text: `Total balance is ${balance}
Average debit amount: ${averageDebit}
Average credit amount: ${averageCredit}
${txt}`
  };

  transport.sendMail(message, function (err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info)
    }
  })
}

module.exports = {
  totalBalance,
  average,
  date,
  sendEmail
}