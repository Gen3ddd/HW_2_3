//create array of students and their points
const baseNames = [
  "Ivan",
  "Petr",
  "Vadim",
  "Olga",
  "George",
  "John",
  "Paul",
  "Ringo",
  "Mick",
  "Keith",
  "David",
  "Freddie",
  "Roger",
  "Janis",
  "Jimi",
  "Tom",
  "Jerry",
  "Charlie",
  "Michael",
  "Brian",
  "Natali",
  "Igor",
  "Maksim",
  "Valera",
];

let students = baseNames.map((name, index) => {
  return {
    id: index + 1,
    name: name,
    mathPoints: Math.floor(Math.random() * 100),
    itPoints: Math.floor(Math.random() * 100),
    biologyPoints: Math.floor(Math.random() * 100),
  };
});

//Выводим в консоль всех наших студентов и их оценки по предметам
console.log(students);

// Создаем новый массив и в него заносим сумму оценок по математике и информатике
let sumOfMathAndItPoints = students.map(
  (student) => student.mathPoints + student.itPoints
);

//Выводим в консоль наш новый массив
console.log(sumOfMathAndItPoints);

//Пузырьковая сортировка для нашего массива и вывод в консоль для наглядности

for (let i = sumOfMathAndItPoints.length - 1; i >= 0; i--) {
  for (let j = 1; j <= i; j++) {
    console.log("__________новая итерация");
    console.log(
      "сравниваем пару " +
        sumOfMathAndItPoints[j - 1] +
        " и " +
        sumOfMathAndItPoints[j]
    );
    console.log(
      "сравниваем индексы " +
        sumOfMathAndItPoints.indexOf(sumOfMathAndItPoints[j - 1]) +
        " и " +
        sumOfMathAndItPoints.indexOf(sumOfMathAndItPoints[j])
    );

    if (sumOfMathAndItPoints[j - 1] > sumOfMathAndItPoints[j]) {
      let temp = sumOfMathAndItPoints[j - 1];
      console.log("работаем с массивом " + sumOfMathAndItPoints);

      sumOfMathAndItPoints[j - 1] = sumOfMathAndItPoints[j];

      sumOfMathAndItPoints[j] = temp;
    }
    console.log("получился промежуточный массив " + sumOfMathAndItPoints);
  }
}
console.log(sumOfMathAndItPoints);
