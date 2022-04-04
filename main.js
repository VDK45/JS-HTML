// ctr + /

// ============ 2.1 Типы перемены =============

// let - Переменная
function area_of_visibility()
{
    let userName = "Mark";
    console.log(userName);
    userName = "Egor";
    console.log(userName);
}

area_of_visibility();

// const - Константа (По умолчаню)

const pi = 3.14;

// var - Переменная (старый стандарт)

{
    var var_area_of_visibility = 'var area of ​​visibility';
}
console.log(var_area_of_visibility);

// ============ 2.2 Типы данных =============
console.log('============ 2.2 Типы данных =============');  


let stroka = 'Hello world';  // string
let number = 9999;  // number 
let bolean = true;  // false / true

stroka = undefined;      // Don't do it
stroka = null;      // reset type

let undefined_type;
console.log(undefined_type); // UNDEFINED type

console.log(typeof '9999');     // string
console.log(typeof 9999);       // number

console.log(Number.MAX_SAFE_INTEGER);   // max int
console.log(90071992547409918n + 90071992547409918n);   // big int

// ============ 3.0 Операторы сравнения и условия =============
console.log('============ 3.0 Операторы сравнения и условия =============');  


console.log(1 > 9999);  // false
console.log(1 < 9999);  // true

let result = 5 == 10;
console.log('result = ' + result);  

console.log('5' == 5);  // true нестрогое сравнение
console.log('5' === 5);  // false строгое сравнение

// Attention
let num5 = null;
if (num5 = 999) // true all time 
{
    console.log('num5 = 999');
}

const time = 12;

if(time < 12 && time >= 00)
{
    console.log('Good morning!');
}
else if (time >= 12 && time <=18)
{
    console.log('Good fternoon!');
}
else (time > 18 && time <= 24)
{
    console.log('Good evening!');
}

// && логическое И
// || логическое ИЛИ
// !true логическое НЕ

// ============ 4.0 тернарный оператор =============
console.log('============  4.0 тернарный оператор =============');  
/*
if (1 < 9) 
{
    console.log('условие верно')
}
else
{
    console.log('условие НЕ верно')

}
*/
// (Условие) ? (условие верно) : (условие НЕ верно)

(1 > 9) ? (console.log('условие верно')) : (console.log('условие НЕ верно'));
(10 > 9) ? (console.log('условие верно')) : (console.log('условие НЕ верно'));

let time_now = 10;
let greeting = time_now <= 12 ? 'Good morning!' : 'Good evening!';
console.log(greeting);

// ============ 5.0 Конкатенация + шаблоные строки + интерполяция =============
console.log('============  5.0 Конкатенация =============');  

const user_name = 'VDK45';
console.log(`Hello World ${user_name}!`);

// ============ 6.0 Функция =============
console.log('============ 6.0 Функция =============');  

// function declaration
say_hi();               // Можно Заранее вызвать
function say_hi()
{
    console.log(`Hello ${user_name}! Function declaration`);  
}


// function expression
const say_hello = function()    // let / const / var 
{
    console.log(`Hello ${user_name}! Function expression`);  
}
say_hello();             // Нельзя Заранее вызвать


// ============ 6.1 Прараметры и аргументы функции =============
console.log('============ 6.1 Прараметры и аргументы функции =============');  

function say_hi_player(user_name)
{
    console.log(`Hello ${user_name}! Function parameter`);  
}
say_hi_player('VDK45');
say_hi_player('Apex');

console.log('============ 6.2 return =============');  

function sum(a, b)
{
    const result = a + b;
    return result;      // Завершён 
}
let res = sum(66, 33);
console.log(res);

console.log('============ 6.3 Функция как аргументы =============');  

function multi(a, b){
    return a * b;
}
console.log(multi(5, 5));

console.log(multi(sum(2, 2), multi(3, 3)));

// Call back / Обратный вызов функции 
function just_do_it(func, x, y){
    let result = func(x, y);
    return result;
}
console.log(`Call back (multi) =  ${just_do_it(multi, 4, 5)}`);
console.log(`Call back (sum) = ${just_do_it(sum, 4, 5)}`);

console.log('============ 6.4 Самовызывающаяся функция (lambda / анонимная функция) IIFE =============');  
// Старый стандарт, нужен (;)

(function () {console.log('Called lambda function')})();

console.log((function (x, y) {return x+y })(4, 5));

// ============ 6.5 Стрелочные функции =============
console.log('============ 6.5 Стрелочные функции =============');  

const sayHi = (yourName) => {
    console.log(`Hi ${yourName}`);
}
sayHi('VDK45');

const sayHi2 = (yourName) => console.log(`Hi ${yourName}`);
sayHi2('VDK45_2')

const sum_2 = (a, b) => a+b;
console.log(sum_2(6, 6))

// ============ 7.0 Массивы =============
console.log('============ 7.0 Массивы  =============');  

const autoBrands = ['Audi', 'BMW', 999, ['Mazda', 88,'Lada'], 'Toyota'];
console.log(autoBrands);

console.log(autoBrands[0] + autoBrands[3])
console.log(autoBrands.length)

// ============ 7.1 Методы массивов =============
console.log('============ 7.1 Методы массивов  =============');  

const array = [1, 2, 3, 4, 5];
array.push(99);         // Добавить элемент в конец массива
console.log(array);
array.pop();            // Удалить последний элемент 
console.log(array);
array.shift();          // Удалить первый элемент
console.log(array);
array.unshift(11, 22);  // Добавить элементы в начале
console.log(array);
array.splice(2, 2);         // ([start], [deleteCount, newElements]) Отрезать от элемента (количество элементов)
console.log(array);

// ============ 8.1 Циклы  =============
console.log('============ 8.1 Циклы  =============');  

console.log('for');

let myArray = [1, 2, 3, 4, 5, 6, 7];

for (let index = 0; index < myArray.length; index++) {
    console.log(index);
}

console.log('');

// ============ 8.2 Цикл for (of)  =============
console.log('============ 8.2 Цикл for (of)  =============');  

for (let item of myArray) 
{
    console.log(item)
};

// ============ 8.3 Цикл forEach()  =============
console.log('============ 8.3 Цикл forEach  =============');  

const cities = ['Hanoi', 'Kiev', 'Moscow', 'Seoul'];

cities.forEach(function (item, index) {
    console.log(`${item} => ${index}`)
});

console.log('====== forEach Функция как аргумент =======');  

cities.forEach(printItem);      // Функция как аргумент без скобок()
function printItem (item, index) {
    console.log(`${item} => ${index}`)
};

console.log('====== forEach Стрелочная функция ======');  

cities.forEach((item, index) => console.log(`${item} => ${index}`));

// ============ 9 Объекты   =============
console.log('============ 9 Объекты    =============');  


// Свойства объектов
const person = {
    user_name: "Liza",
    age: 30,
    isMarried: false
};

console.log(person);
console.log(person.user_name);
console.log(person['user_name']);

let p_name = 'user_name';
console.log(person[p_name]);

// add
person.profession = 'JS developer';
console.log(person);

// delete
delete person.age;
console.log(person);

// ============ 9.2 Методы объектов =============
console.log('============ 9.2 Методы объектов (function) =============');  

const person2 = {
    user_name: "Liza",
    age: 30,
    isMarried: false,
    say1: function (sex) {
        console.log(`Привет. ${sex} Это функция say1 объекта person2`);
    }
};

person2.say2 = function (name) {
    console.log(`Hello. ${name} Это функция say2 объекта person2`);
}

person2.say1('Мужчина');
person2.say2('VDK45');

// ============ 10. Ключевое слово this   =============
console.log('============ 10. Ключевое слово this =============');  

const person3 = {
    user_name: "Liza",
    age: 30,
    isMarried: false,
    say: function (name) {
        console.log(`Привет. ${name} Меня зовут ${this.user_name}`);
    }
};

person3.say('Bob')

// ============ 11. Объекты. Обход циклом for in (Не путать с (for of) не может обходить не итерируемый объект) =============
console.log('============ 11. Объекты. Обход циклом for in (Не путать с for of)   =============');  

const person4 = {
    user_name: "Liza",
    age: 30,
    isMarried: false,
    say: function (name) {
        console.log(`Привет. ${name} Меня зовут ${this.user_name}`);
    }
};

for (let key in person4) {
    console.log(key, '=', person4[key])

};

// ============ 12. Классы. Конструкторы объектов   =============
console.log('============ 12. Классы. Конструкторы объектов  =============');  

class Person {
    constructor(userName, age, isMarried) {
    this.name = userName;
    this.age = age;
    this.isMarried = isMarried;
    }
    sayHi(name) {
        console.log(`Привет. ${name} Меня зовут ${this.name}`);
    }
}

const man1 = new Person('Mark', 35, true);
const man2 = new Person('Jons', 20, false);
console.log(man1);
console.log(man2);
man1.sayHi('VDK45')
man2.sayHi('VDK45')













// ============ 8.4   =============
console.log('============ 8.4   =============');  




