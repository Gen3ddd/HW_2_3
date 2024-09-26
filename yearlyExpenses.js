let expencesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ]
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

function calculateExpenses(yearlyExpences) {
  let sum = 0;
  for (let i = 0; i < yearlyExpences.length ; i++) {
    if (yearlyExpences[i] > 1000) {
      sum += yearlyExpences[i];
    }
  }
  return sum;
}

//calculateExpenses(expencesExamples.yearlyExpences);
let expense = expencesExamples[0];
console.log(expense);
console.log(expense.yearlyExpences);
console.log(calculateExpenses(expencesExamples.yearlyExpences))
 
function testCalculateExpenses(yearlyExpences, expected) {
    const result = calculateExpenses(yearlyExpences);
    console.log(`Расчет: ${result}, ожидалось: ${expected}. Тест ${result === expected ? 'пройден' : 'не пройден'}`);
  }

  expencesExamples.forEach(example => testCalculateExpenses(example.yearlyExpences, 0)); 