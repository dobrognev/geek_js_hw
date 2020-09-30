// Что-то я увлекся немного
// TODOO Первая задачка
function mrRandom() {
    return Math.round(Math.random() * 500)
}

function primeNumber(n) {
    if (n < 1) {
        console.log(`Число должно быть больше единиы`)
    }
    let numRoot = Math.ceil(Math.sqrt(n));
    while (numRoot > 1) {
        if (n % numRoot === 0) {
            return false
        }
        numRoot--;
    }
    return true;
}
// primeNumber(mrRandom());

function primeNumRange(n) {

    let mrNum = n - (n - 2);
    let arrNum = [];
    document.write(`Вычисляем все простые числа в промежутке от 0 до ${n} : <br \/><br \/>`);
    while (n >= mrNum) {
        if (primeNumber(mrNum) == true) {
            console.log(`Число ${mrNum} - простое`);
            arrNum.push('  ' + mrNum + '  ');
        }
        mrNum++;
    }
    document.write(arrNum);
}
primeNumRange(mrRandom());

// TODOO Вторая задачка

const basketGoods = [{
        "title": "Шлепанцы",
        "cost": mrRandom(),
        "count": mrRandom()
    },
    {
        "title": "Трусы",
        "cost": mrRandom(),
        "count": mrRandom()
    },
    {
        "title": "Галстук",
        "cost": mrRandom(),
        "count": mrRandom()
    },
    {
        "title": "Носки",
        "cost": mrRandom(),
        "count": mrRandom()
    },
    {
        "title": "Подтяжки",
        "cost": mrRandom(),
        "count": mrRandom()
    },
    {
        "title": "Очки",
        "cost": mrRandom(),
        "count": mrRandom()
    },
    {
        "title": "Ремень",
        "cost": mrRandom(),
        "count": mrRandom()
    }
]

function countBasketPrice(items) {

    document.write(`<br \/><br \/>Считаем сумму покупок вашего заказа<br \/>`);;
    let sum = 0;
    let count = 0;

    for (let item of items) {
        sum += item.cost * item.count;
        count += item.count;
    }
    document.write(`Кол-во товара в корзине ${count} шт.<br \/>Сумма заказа ${sum} руб.`);
    return sum;
}

countBasketPrice(basketGoods);

// TODOO Третья задачкаё

for (let i = 0; i <= 10; console.log(" - " + i++ + " - ")) {

}

// TODOO Четвертая задачка

for (let i = 0, str = ""; i <= 20; console.log(str), str += "X", i++) {

}