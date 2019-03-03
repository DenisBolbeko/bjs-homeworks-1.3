  "use strict" // Строгий режим
  
  // Задача № 1

// Создание функцию getSolutions( a, b, c ), которая принимает аргументы - коэффициенты квадратного уравнения.
function  getSolutions(a, b, c) {
    let x1 = '';
    let x2 = '';
    // Добавление в функцию переменной D для вычисления дискриминанта
    let D = b**2 - 4 * a * c; 
    // Возвращение функцией getSolutions объекта в зависимости от значения дискриминанта 
    if (D < 0) { 
      return { 
        D: D 
      };
    } else if (D == 0) {
      x1 = (-b + Math.sqrt(D)) / (2*a);
      return { 
        roots: [x1], 
        D: D 
      };
    } else if (D > 0) {
      x1 = (-b + Math.sqrt(D)) / (2*a) 
      x2 = (-b - Math.sqrt(D)) / (2*a);
      return { 
        roots: [x1, x2], 
        D: D 
      };
      
   }
  
}

// Создание функцию showSolutionsMessage( a, b, c ), которая, как и функция getSolutions, принимает 3 аргумента.
function showSolutionsMessage(a, b, c) {
// Создание переменной result, в которой храниться результат работы getSolutions( a, b, c ).
  let result =  getSolutions(a, b, c);
//  Вывод сообщений
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
//  Вывод сообщений в зависимости от дискриминанта
  if (result.D < 0) { 
  console.log("Уравнение не имеет вещественных корней")
  } else if (result.D == 0) {
       console.log(`Уравнение имеет один корень X₁ = ${result.roots}`)
  } else if (result.D > 0) {
      console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
      
  }

}
// Вызов функции
showSolutionsMessage(1, -4, 3); 



// Задача № 2

// Создание функцию getPersonData( secretData ), которая имеет аргумент secretData, в котором храниться информация о пирате.
function getPersonData(secretData) {
  if (secretData.aaa === 0 && secretData.bbb === 0) {
    return secretData = {firstName: "Родриго", lastName: "Родриго"};
  } else if (secretData.aaa === 1 && secretData.bbb === 1) {
    return secretData = {firstName: "Эмильо", lastName: "Эмильо"};
  } else if (secretData.aaa === 0 && secretData.bbb === 1) {
    return secretData = {firstName: "Родриго", lastName: "Эмильо"};
  } else if (secretData.aaa === 1 && secretData.bbb === 0) {
    return secretData = {firstName: "Эмильо", lastName: "Родриго"};
  } 
}

//  Вывод результата
console.log(getPersonData({aaa: 0, bbb: 0}));
console.log(getPersonData({aaa: 1, bbb: 1}));
console.log(getPersonData({aaa: 0, bbb: 1}));
console.log(getPersonData({aaa: 1, bbb: 0}));



// Задача № 3

// Создание функцию getAverageScore( data ), которая имеет аргумент data. В нём хранятся данные об оценках по предметам.
function getAverageScore(data) {
//  Создание переменной для хранения суммы оценок по всем предметам
  let allAverage = 0;
//  Создание переменной для хранения длиный объекта data
  let objectLength  = 0;
// Обход свойств объекта data
  for ( let averageMark in data ) {
//  Создание переменных для вычисления средней оценки за предмет
    let value = data[ averageMark ];
    let sumResult = 0;
//  Вычисление средней оценки за предмет
    for (let i = 0; i < value.length; i++) {
      sumResult = sumResult + value[i];
    }
    data[ averageMark ] = sumResult / value.length;
//  Вычисление средней оценки по всем предметам с добавлением нового свойства average в объект
    allAverage = allAverage + data[ averageMark ];
    objectLength++ 
    data.average = allAverage / objectLength;
  }
//  Вовзрат в функцию аргумента data
  return data

}


console.log(getAverageScore({
  algebra: [3,4,5,4,5],
  music: [3,4,5],
  chemistry: [3,2,4,5],
  geometry: [3,4,5,4,5],
  russian: [3],
  physics: [3,4,4,5],
  english: [3,4,5],
  poetry: [3,4,5,2,5],
  french: [3,3,4,5],
  geography: [3,4,5]

}));


