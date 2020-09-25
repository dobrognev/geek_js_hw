// Что-то я увлекся немного
// TODOO Первая задачка
function mrRandom() {
    return parseInt(Math.round(Math.random() * 500))
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

    let mrNum = n - (n - 1);
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
        "coast": 300,
        "count": 1
    },
    {
        "title": "Трусы",
        "coast": 500,
        "count": 3
    },
    {
        "title": "Галстук",
        "coast": 750,
        "count": 2
    },
    {
        "title": "Носки",
        "coast": 250,
        "count": 2
    },
    {
        "title": "Подтяжки",
        "coast": 150,
        "count": 2
    },
    {
        "title": "Очки",
        "coast": 300,
        "count": 1
    },
    {
        "title": "Ремень",
        "coast": 400,
        "count": 1
    }
]

function countBasketPrice(basket) {
    document.write(`<br \/><br \/>Считаем сумму покупок вашего заказа<br \/>`);
    console.log(basket);
    var sum = 0;
    var count = 0;
    for (var k of basket) {
        sum = sum + basket.coast * basket.count;
        count = count + basket.count;
    }
    document.write(`Кол-во товара в корзине ${count} шт.<br \/>Сумма заказа ${sum} руб.`)
    return sum;
}

countBasketPrice(basketGoods);