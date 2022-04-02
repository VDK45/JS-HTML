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

console.log('============ 6.2 Функция как аргументы =============');  

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










