const startSum = parseInt(document.querySelector('#startSum').textContent);
let sum = parseInt(document.querySelector('#sum').textContent);


// Установка дат
const loanDate = new Date('2024-06-10');
const interestStartDate = new Date('2024-07-17');
const currentDate = new Date();

// Расчет количества дней между датами
const daysDiff = Math.ceil((currentDate - interestStartDate) / (1000 * 60 * 60 * 24));

// Расчет процентной ставки в день
const dailyInterestRate = 0.05; // Например, 1% в день

if (currentDate >= interestStartDate && currentDate >= loanDate) {
    const loanAmount = 500; // Сумма займа

    // Расчет процентов за каждый день
    const interestAmount = loanAmount * dailyInterestRate * daysDiff;
    sum = startSum + parseInt(interestAmount.toFixed(2))
  
    // console.log(`Проценты к оплате: ${interestAmount.toFixed(2)}`);
} 

document.querySelector('#sum').textContent = sum




