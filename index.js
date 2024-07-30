
// let object1 =  {
//     date1: '2024-06-10', 
//     date2: '2024-07-17', 
//     idSum: '#sum', 
//     idStartSum: '#startSum', 
//     proc: 0.05, 
//     Ssum: 500
// }
function calc({date1, date2, idSum, idStartSum, proc, Ssum}) {

}

// calc( {
//     date1: '2024-06-10', 
//         date2: '2024-07-17', 
//         idSum: '#sum', 
//         idStartSum: '#startSum', 
//         proc: 0.05, 
//         Ssum: 500
// }
//     )

//     calc( {
//         date1: '2024-05-29', 
//             date2: '2024-07-06', 
//             idSum: '#sum-2', 
//             idStartSum: '#startSum2', 
//             proc: 0.05, 
//             Ssum: 700
//     }
//         )

fetch('database.json')
  .then(response => response.json())
  .then(jsonData => {
    console.log(jsonData.length)
   for (let i = 0; i < jsonData.length; i++) {
    const money = document.querySelector('.money');
    const moneyItem = document.createElement('div');
        moneyItem.classList.add('money-item');
    const peopleName = document.createElement('div');
        peopleName.classList.add('name-people');
    const peopleNameInnerSpan = document.createElement('span')
    const moneyBody = document.createElement('div');
        moneyBody.classList.add('money-body');
    const groupDate = document.createElement('div');
        groupDate.classList.add('group-date');
    const dateMinusMoney = document.createElement('div');
        dateMinusMoney.classList.add('date-minus-money')
    const dateMinusMoneyInnerSpan = document.createElement('span');
    const dateStaffMoney = document.createElement('div');
        dateStaffMoney.classList.add('date-staff-money')
    const dateStaffMoneyInnerSpan = document.createElement('span');
    const groupSum = document.createElement('div');
        groupSum.classList.add('group-sum')
    const plusMoney = document.createElement('div');
        plusMoney.classList.add('plus-money')
    const plusMoneyInnerSpan = document.createElement('span');
    const sumMoney = document.createElement('div');
        sumMoney.classList.add('sum-money')
    let sumMoneyInnerSpan = document.createElement('span');

    
    peopleName.textContent = jsonData[i].deptor;
    peopleNameInnerSpan.textContent = '(' + jsonData[i].username + ')';
    dateMinusMoneyInnerSpan.textContent = jsonData[i].dateStart.date;
    dateStaffMoneyInnerSpan.textContent = jsonData[i].datePercentages.date;
    plusMoneyInnerSpan.textContent = jsonData[i].sum + '₽';

    dateMinusMoney.textContent = 'Дата займа ';
    dateStaffMoney.textContent = 'Дата начало(%) ';
    plusMoney.textContent = 'Сумма займа ';
    sumMoney.textContent = 'Общая сумма ';
    
// Установка дат
const loanDate = new Date(jsonData[i].dateStart.js);
const interestStartDate = new Date(jsonData[i].datePercentages.js);
const currentDate = new Date();

// Расчет количества дней между датами
const daysDiff = Math.ceil((currentDate - interestStartDate) / (1000 * 60 * 60 * 24));

// Расчет процентной ставки в день
const dailyInterestRate = 0.05; // Например, 1% в день

if (currentDate >= interestStartDate && currentDate >= loanDate) {
    const loanAmount = parseInt(plusMoneyInnerSpan.textContent); // Сумма займа

    // Расчет процентов за каждый день
    const interestAmount = loanAmount * dailyInterestRate * daysDiff;
    sumMoneyInnerSpan.textContent = parseInt(plusMoneyInnerSpan.textContent) + parseInt(interestAmount.toFixed(2)) + '₽';
} 




    peopleName.append(peopleNameInnerSpan)
    groupDate.append(dateMinusMoney);
    dateMinusMoney.append(dateMinusMoneyInnerSpan);
    dateStaffMoney.append(dateStaffMoneyInnerSpan);
    groupDate.append(dateStaffMoney);
    plusMoney.append(plusMoneyInnerSpan);
    sumMoney.append(sumMoneyInnerSpan)
    groupSum.append(plusMoney);
    groupSum.append(sumMoney);
    moneyBody.append(groupDate);
    moneyBody.append(groupSum);
    moneyItem.append(peopleName);
    moneyItem.append(moneyBody);
    money.append(moneyItem);

 




   

    
        
    
    
   }

   
  })






