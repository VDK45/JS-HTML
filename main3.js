// Пример fetch с промисами получение данных по API
// https://www.cbr-xml-daily.ru/

// Получить данные с сервера

const response = fetch('https://www.cbr-xml-daily.ru/daily_json.js');

console.log(response);

async function getCurrencies() {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    console.log(data.Valute.USD.Value.toFixed(2));
    console.log(data.Valute.EUR.Value.toFixed(2));

    const usdRate = data.Valute.USD.Value.toFixed(2);
    const eurRate = data.Valute.EUR.Value.toFixed(2);

    const usdElement = document.querySelector('#usd');
    const eurElement = document.querySelector('#eur');

    usdElement.innerText = usdRate;
    eurElement.innerText = eurRate;
};

getCurrencies();










