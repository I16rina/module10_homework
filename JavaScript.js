/*задание №1 Напишите программу, которая работала бы следующим образом: в prompt вводится значение.
С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью
typeof, принадлежит ли оно к множеству Number.
Если это число, то вывести в консоль чётное оно или нечётное.
Если передано не число, выведите: «Упс, кажется, вы ошиблись».
*NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.*/

const result = +prompt('Введите число', '')
    if (typeof +result !=='number') {
        alert('Упс, кажется, вы ошиблись')
    } else if (isNaN(result % 2)) {
        alert('Ошибка, введено НЕ ЧИСЛО')
    } else if (result % 2 === 0) {
        alert('Число четное')
    } else {
        alert('число нечетное')
    }


/*задание №2 Дана переменная x, которая может принимать любое значение. Написать программу,
которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».*/

let x = 1,
  res;
switch (typeof x !== 'symbol' && (isFinite(x) || typeof(x) === "string") && typeof(x)) {
  case "number":
    res = "x - число";
    break;
  case "string":
    res = "x - строка";
    break;
  case "boolean":
    res = "x - логическое";
    break;
  default:
    res = "Тип x не определен";
}
console.log(res);


//задание №3 Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

alert(reverseString("Hello"));


//задание №4 Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.

function getRandomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(100);
  return Math.floor(Math.random() * (max - min)) + min;
}

alert(getRandomInt(""));


/*задание №5 Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его
и вывести в консоль каждый элемент массива.*/

//6, 13, 15, 37, 42, 67

const lostNums = [6, 13, 15, 37, 42, 67]
console.log(lostNums)
for (let i = 0; i <= lostNums.length - 1; i++) {
	console.log(lostNums[i]);
}


/* задание №6 Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.*/

function checkArrayType(arr) {
  let arr1 = arr.map(e=>typeof e);
  return [...new Set(arr1)].length === 1;
}

function checkArrayType1(arr) {
  return arr.every((e,i,a) => typeof e === typeof a[0]);
}

console.log(checkArrayType([3,6,7,'3']));
console.log(checkArrayType1([3,6,7,3]));


/* задание №7 Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.  При выполнении задания необходимо учесть,
что массив может содержать не только числа, но и, например, знаки, null и так далее.*/

let arr = [8, 3, 0.6, null, 2, 0.8, 67,undefined, ];
let zerocount = 0;
let numbercount = 0;
let evencount = 0;
let oddcount = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" || !isNaN(arr[i])) {
        numbercount += 1;
        if (arr[i] === 0) {
            zerocount += 1;
        } else if (arr[i] % 2 === 0) {
            evencount += 1;
        } else {
            oddcount += 1;
        }
    }
}
console.log(`В массиве: ${numbercount} цифр, ${zerocount} нулей, ${evencount} чётных, ${oddcount} нечётных!`);


/*задание №8 Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде
«Ключ — Х, значение — Y». Используйте шаблонные строки.*/

1.

let animals = new Map([
    ["dog", "good"],
    ["cat", "bad"],
    ["parrot", "kind"]
]);
animals.forEach((key) => {
    console.log(`${key} - x`);
});
animals.forEach((value) => {
    console.log(` ${value} - y`);
});

2.

let animals2 = new Map([
    ["dog", "good"],
    ["cat", "bad"],
    ["parrot", "kind"]
]);
animals.forEach((value, key) => {
    console.log(`${key} - x = ${value} - y`);
});

