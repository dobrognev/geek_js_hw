// Что-то я увлекся немного
// TODOO Первая задачка
function mrNum_999() {
    return Math.round(Math.random() * 999)
}

let numberBox = {}

function numParser(num) {
    num += "";
    if (num > 999) {
        console.log("Сгенерите число меньше чем 999")
        return {};
    }
    let numParse = num.split("");
    console.log(numParse);
    if (numParse.length == 1) {
        return numberBox.hundreds = "0", numberBox.dozens = "0",
            numberBox.units = numParse[0]
    } else if (numParse.length == 2) {
        return numberBox.hundreds = "0", numberBox.dozens = numParse[0],
            numberBox.units = numParse[1]
    } else {
        return numberBox.hundreds = numParse[0], numberBox.dozens = numParse[1],
            numberBox.units = numParse[2]
    }
}

numParser(mrNum_999());
console.log(numberBox);


// TODOO Вторая задачка

// Там на уроке все показано было - не стал делать.

// TODOO Третья задачка
//! Кто хочет стать миллионером