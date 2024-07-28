
// let object1 =  {
//     date1: '2024-06-10', 
//     date2: '2024-07-17', 
//     idSum: '#sum', 
//     idStartSum: '#startSum', 
//     proc: 0.05, 
//     Ssum: 500
// }
function calc({date1, date2, idSum, idStartSum, proc, Ssum}) {
const startSum = parseInt(document.querySelector(idStartSum).textContent);
let sum = parseInt(document.querySelector(idSum).textContent);
// Установка дат
const loanDate = new Date(date1);
const interestStartDate = new Date(date2);
const currentDate = new Date();

// Расчет количества дней между датами
const daysDiff = Math.ceil((currentDate - interestStartDate) / (1000 * 60 * 60 * 24));

// Расчет процентной ставки в день
const dailyInterestRate = proc; // Например, 1% в день

if (currentDate >= interestStartDate && currentDate >= loanDate) {
    const loanAmount = Ssum; // Сумма займа

    // Расчет процентов за каждый день
    const interestAmount = loanAmount * dailyInterestRate * daysDiff;
    sum = startSum + parseInt(interestAmount.toFixed(2))
  
    // console.log(`Проценты к оплате: ${interestAmount.toFixed(2)}`);
} 

document.querySelector(idSum).textContent = sum
console.log('ok')
}

calc( {
    date1: '2024-06-10', 
        date2: '2024-07-17', 
        idSum: '#sum', 
        idStartSum: '#startSum', 
        proc: 0.05, 
        Ssum: 500
}
    )

    calc( {
        date1: '2024-05-29', 
            date2: '2024-07-06', 
            idSum: '#sum-2', 
            idStartSum: '#startSum2', 
            proc: 0.05, 
            Ssum: 700
    }
        )






