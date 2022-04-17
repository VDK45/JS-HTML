// == Цепочка промисов. Отдельные функции ==
console.log('==== Цепочка промисов. Отдельные функции ====')

/*

checkRoom()
    .then(checkTiket)
    .then(success)
    .catch(failed);

function checkRoom() {
    return  new Promise(function (resolve, reject) {
        console.log('---- Checking rooms ----')
        setTimeout(() => {
            const room = true;
            if (room) {
                let message = 'Есть комната';
                resolve(message);
            }   else {
                let message = 'Нет свободных комнат';
                reject(message);
            }
        }, 1500);
    })
};


function checkTiket(data) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log(data);
            console.log('Проверяем авиабилеты');

            // Передать then 2 
            const response = true;
            if (response) {
                let message = 'Есть авиабилеты';
                resolve(message);
            }   else {
                let message = 'Нет билетов';
                reject(message);
            }

        }, 1000);
    });
};

function success(data) {
    console.log(data);
    console.log('Всё ок едем отдыхать!');
};

function failed(data) {
    console.log(data);
    console.log('Отдых отменяется');
};

*/

// == Async function. Потребление промиса ==
console.log('==== Async function. Потребление промиса ====')

/*
function promiseFunction() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const res = false;
            if (res) {
                resolve('DONE!');
            } else {
                reject('FALSE!');
            }
        }, 500);
    });
};

// Async function
async function startPromise() {
    try {
        const result = await promiseFunction();
        console.log(result)
    } catch (error) {
        console.log(error)
    }
    
}

startPromise();

*/

// == Async function. Example ==
console.log('==== Async function. Example ====')


function checkRoom() {
    return  new Promise(function (resolve, reject) {
        console.log('---- Checking rooms ----')
        setTimeout(() => {
            const room = true;      // true & false
            if (room) {
                let message = 'Есть комната';
                resolve(message);
            }   else {
                let message = 'Нет свободных комнат';
                reject(message);
            }
        }, 1500);
    })
};


function checkTikets(data) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log(data);
            console.log('Проверяем авиабилеты');

            const response = true;      // true & false
            if (response) {
                let message = 'Есть авиабилеты';
                resolve(message);
            }   else {
                let message = 'Нет билетов';
                reject(message);
            }

        }, 1000);
    });
};


function submitVacation(data) {
    console.log(data);
    console.log('Всё ок едем отдыхать!');
};

function cancelVacation(data) {
    console.log(data);
    console.log('Отдых отменяется');
};

// Async function.
async function checkVacation() {

    try {
        const roomResult =  await checkRoom();
        const ticketResult = await checkTikets(roomResult);
        submitVacation(ticketResult);
    } catch (err) {
        cancelVacation(err);
    }
}

checkVacation();

