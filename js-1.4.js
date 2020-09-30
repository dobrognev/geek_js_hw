// Что-то я увлекся немного
// TODOO Первая задачка
'use strict';

function mrNum999() {
    return Math.round(Math.random() * 999);
}

let numberBox = {};

function numParser(num) {
    num += "";
    if (num > 999) {
        console.log("Сгенерите число меньше чем 999");
        return {};
    }
    let numParse = num.split("");
    console.log(numParse);
    if (numParse.length == 1) {
        return numberBox.hundreds = "0", numberBox.dozens = "0",
            numberBox.units = numParse[0];
    } else if (numParse.length == 2) {
        return numberBox.hundreds = "0", numberBox.dozens = numParse[0],
            numberBox.units = numParse[1];
    } else {
        return numberBox.hundreds = numParse[0], numberBox.dozens = numParse[1],
            numberBox.units = numParse[2];
    }
}

numParser(mrNum999());
console.log(numberBox);


// TODOO Вторая задачка

// Там на уроке все показано было - не стал делать.

// TODOO Третья задачка
//! Кто хочет стать миллионером

let user = "";
alert(prompt(user = "Введи свое имя, смертный !", "Dobrognev"));
alert(`Добро пожаловать на игру, ${user}`);
alert(`Сейчас вам будет задано 5 вопросов, каждый последующий из них добавляет не только сложности, но и денег`);

let sumCash;