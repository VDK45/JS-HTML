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
    constructor(userName, userAge, isMarried) {
    this.name = userName;
    this.age = userAge;
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

// ============ 13. Выбор DOM элементов   =============
console.log('============ 13. Выбор DOM элементов =============');  
console.log('=== 13.1 Выбор одного DOM элемента по селекту ===');  

// qs -> TAB (installed js snippets)
// Выбор одного DOM элемента по селекту
// document.querySelector('Selector') 
// Находит только первый элемент по селекту

// document.querySelector('h1');               // Find tag: h1
// document.querySelector('.myClass');         // Find class: myClass
// document.querySelector('#myId');              // Find id: myId
// document.querySelector('h1.myClass #myID');     // 

const heading1 = document.querySelector('.tag_p');     
console.log(heading1);

const heading2 = document.querySelector('p');    
heading2.classList.add('.tag_p');        // Добавить в теге p класс tag_p

console.log('=== 13.2 Выбор колекции элементов ===');  

// Масив 
const headers = document.querySelectorAll('.h1');
console.log(headers)

// переборы масива по селекту с добавлением элементов
for (let item of headers ) {
    item.classList.add('red_text');
};

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(function (item) {item.classList.add('green_text')})

console.log('=== 13.3 ещё методы ===');  

document.getElementsByClassName('my_class');  // Без точки '.my_class'
document.getElementsByTagName('myTag');         
document.getElementById('myid');              // Без #  '#myid'

//  ============ 14. Работа с CSS class  =============
console.log('============ 14. Работа с CSS class =============');  

/*
element.classList.add()
element.classList.remove()
element.classList.toggle()
element.classList.contains()
*/

const head = document.querySelector('button');

head.classList.add('green_text');
head.classList.remove('green_text');
head.classList.toggle('green_text');
console.log(head.classList.contains('green_text'));     // true & false

//  ============ 15. Работа с атрибутами   =============
console.log('============ 15. Работа с атрибутами =============');  

/*
    getAttribute(attrName)          - Возвращает значение указаного атрибута
    setAttribute(attrName. value)   - Добавляет атрибут и  значение к элементу
    hasAttribute(attrName)          - Возвращает true или false
    removeAttribute(attrName)       - Удаляет атрибут

    toggleAttribute(attrName, force) - Добавляет атрибут если нет или наобарот
    hasAttributes()                  - Возвращает true если есть атрибуты
    getAttributesNames()             - Возвращает название атрибута

*/

const img = document.querySelector('#logoJs');
console.log(img);

const srcValue = img.getAttribute('src');
console.log(srcValue);

img.setAttribute('src', './img/new_js.png');
img.setAttribute('width', '200');
img.src = 'js.png';         // Напрямую

(document.getElementById('logo_js')).removeAttribute('width');  
(document.getElementById('logo_js')).setAttribute('width', '50');  


console.log(img.hasAttribute('id'));
console.log(img.hasAttribute('false'));

const button =  document.getElementById('button');
console.log(button);
button.setAttribute('value', 'SEND')
button.value = 'Send button'

//  ============ 16. Работа с прослушкой событий  =============
console.log('============ 16. Работа с прослушкой событий =============');  

const inputText =  document.querySelector('#input-text');
const textBlock =  document.getElementById('text-block');

console.log(inputText);
console.log(textBlock);

const logoJs = document.querySelector('#logoJs');
const delButton = document.querySelector('#delLogoButton');

delButton.value = 'Delete logoJS';

// Одно действия 
// delButton.onclick = function () {
//     console.log('click');
//     logoJs.remove();
// }

// Много действия 
delButton.addEventListener('click', function() {
    console.log('действие 1');
    logoJs.remove();
});

delButton.addEventListener('click', function() {
    console.log('действие 2');
    logoJs.remove();
});


console.log('=== Работа с прослушкой событий по форме ===');  

/*
// Краткая запись
inputText.addEventListener('input', function() {
    console.log(':Input!')
    //console.log(inputText.value)
    textBlock.innerText = inputText.value;
} );
*/

// Полная запись функция
inputText.addEventListener('input', inputHandler);  // функция без скобок inputHandler()

function inputHandler() {
    console.log(':Input!')
    //console.log(inputText.value)
    textBlock.innerText = inputText.value;
};

console.log('=== Работа с прослушкой событий по event ===');  

const list = document.querySelector('#list');

list.addEventListener('click', function(event) {
    // console.log(this);
    // console.log(event);
    console.log(event.target);
})

console.log('=== Работа с элементами ===');  

/*
// Создать элемент
document.createElement('tag-name')

// Изменить HTML содержимое внутри элемента
element.innerHTML = ''

// Изменить текстовое содержимое внутри элемента
node.innerText = ''

// Клонирование элемента
node.cloneNode()    // true - с внутреним содержимым (текст или теги),
                    // false - без внутреннего содержимого

// Вставить элемент внутри другово элемента
element.append(nodesrDOMStrings)

// Удалить элемент
element.remove()
*/

// Выбор контейнера
const container = document.querySelector('#elementsContainer');

// Создание заголовка
const newHeader =  document.createElement('h2');
newHeader.innerText = 'Новый заголовок';
container.append(newHeader);

// Копирование шапки
const mainHeader = document.querySelector('header');
const headerCopy = mainHeader.cloneNode(true);  // true & false
container.append(headerCopy);

// Вставка разметка через строки
const htmlExample = '<h3>Вставка разметка через строки</h3>';
container.insertAdjacentHTML('beforeend', htmlExample);

const text_1 = 'My text afterbegin';
container.insertAdjacentText('afterbegin', text_1);

// Вставка разметка через шаблонные метки
const title = 'Текст заголовка';
const htmlExample2 = `<h2>${title}</h2>`;

container.insertAdjacentHTML('beforeend', htmlExample2);

// TODO список задач

const todo_list = document.querySelector('#todo-list');
const todo_form = document.querySelector('#todo-form');
const todo_input = document.querySelector('#todo-input');

// Сулушать событие submit
todo_form.addEventListener('submit', formHandler); 

function formHandler(event) {
    // Отменяет перезагрузку страницы по стандарту
    event.preventDefault();     
    
    // Получаем текст из todo-input
    const valueTodoInput = todo_input.value;

    // Создать тег <li> через шаблонные метки
    // const htmlTodoInput = `<li>${valueTodoInput}</li>`;

    // add task
    // todo_list.insertAdjacentHTML('beforeend', htmlTodoInput);

    // Создать тег <li> спомощью создания элемента
    const newTask = document.createElement('li');
    newTask.innerText = valueTodoInput;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('role', 'button');
    deleteButton.innerText = 'Удалить';
    deleteButton.style['margin-left'] = '15px';
    newTask.append(deleteButton);

    // Событие по клику
    // deleteButton.addEventListener('click', deleteTask)
    deleteButton.addEventListener('click', function() {
        this.closest('li').remove();
    })


    // add task
    todo_list.append(newTask);

    // Очищать поле ввода
    todo_input.value = '';

    // Перевод фокуса обратно в поле ввода
    todo_input.focus();
};

// deleteTask
function deleteTask () {
    this.closest('li').remove();
}

// ======= setInterval ========

const timerIntervalId = setInterval(function() {
    console.log('Set interval');
}, 1000);

clearInterval(timerIntervalId)

// ======= setTimeOut ========

const timerTimeOut = setTimeout(function () {
    console.log("Set time out");
}, 5000)

clearInterval(timerTimeOut)

// ======= setInterval + setTimeOut ========

// const timerSIID = setInterval(function() {
//     console.log('Set interval 2');
// }, 1000);

// setTimeout(function () {
//     console.log("Stop timerSIID");
//     clearInterval(timerSIID)
// }, 5000)

// ===== Секундомер ======

const divCounter = document.querySelector('#counter');
const idStart = document.querySelector('#start');
const idPause = document.querySelector('#pause');
const idReset = document.querySelector('#reset');

let counter = 0;
let idTimer;

// Start button
idStart.onclick = function() {  
    idTimer = setInterval(function() {
    // counter += 1;
    counter++;
    divCounter.innerText = counter;
    console.log('idTimer', idTimer);
}, 1000);
};

// Pause button
idPause.onclick = function() {
    clearInterval(idTimer)
};

// Reset button
idReset.onclick = function() {
    clearInterval(idTimer)
    counter = 0;
    divCounter.innerText = counter;

};

// ======== Callback. Callback hell ========

// // Asynchrony - Асинхроность
// setTimeout(() => {
//     console.log('Step 1');
//     setTimeout(() => {
//         console.log('Step 2');
//         setTimeout(() => {
//             console.log('Step 3');
//         }, 1000);
//     }, 2000);
// }, 3000);

// ============ Asynchrony - Асинхроность ===========

// function checkRoom (success, failed) {
//     setTimeout(function(){

//         console.log('Проверяем номера в отеле...')
//         const availableRooms = true;

//         if (availableRooms) {
//             let message = 'Номера есть';
//             success(message);
//         }   else {
//             let message = 'Нет свободных номеров';
//             failed(message);
//         }
//     }, 1000)
    
// };

// function checkAirTicket(message, success, failed) {
//     setTimeout(function() {
//         console.log("--- Functions checkAirTicket ----");
//         console.log('Ответ на предыдущем шаге:', message);
//         console.log('Проверяем авиа билет...')
//         const availableTicket = true;

//         if (availableTicket) {
//             let message = 'Билеты есть';
//             success(message); 
//         }   else {
//             let message = 'Билетов нет';
//             failed(message); 
//         }


//     },500)
// };

// function cancelVacation(message) {
//     console.log('--- cancelVacation ---');
//     console.log('Ответ на предыдущем шаге:', message);
//     console.log('Отпуск отменяется :(');
// };

// function submitVacation(message) {
//     console.log('--- submitVacation ---');
//     console.log('Ответ на предыдущем шаге:', message);
//     console.log('Едем в отпуск! :)');
// };


// checkRoom(
//     function(messageFromCheckRooms) {
//     //submitVacation(messageFromCheckRooms)
//     checkAirTicket(
//         messageFromCheckRooms, 
//         function(messageFromCheckTiket) {
//             submitVacation(messageFromCheckTiket)
//         },
//         function(messageFromCheckTiket) {
//             cancelVacation(messageFromCheckTiket)

//         })
//     }, 
//     function(messageFromCheckRooms) {
//         cancelVacation(messageFromCheckRooms)
// });

// ============ Создание промиса ==============
console.log('=================== Создание промиса Promise async (Цепочка promise асинхронная) =====================')

const myPromise = new Promise(function(resolve, reject) {
    console.log('Promise created');
    setTimeout(function() {
        // request to server
        const response = true;
        if (response) {
            let message = 'SUCCESS';
            resolve(message);
        }   else {
            let message = 'FAILED';
            reject(message);
        }
    }, 1500)
}) // .then(function(data) {  // Можно и так 

myPromise.then(function(data) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('Then 1');
            console.log(data);

            // Передать then 2 
            const response = true;
            if (response) {
                let message = 'SUCCESS from then 1';
                resolve(message);
            }   else {
                let message = 'FAILED from then 1';
                reject(message);
            }


        }, 1000);
    })

}).then(function(data2) {
    setTimeout(() => {
        console.log('Then 2');
        console.log(data2);
    }, 500);

}).catch(function (data) {
    console.log('Catch');
    console.log(data);
});



























