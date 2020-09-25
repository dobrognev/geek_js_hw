function mrRandom() {
    return parseInt(Math.round(Math.random() * 500))
}

function primeNumbers(n) { // TODO Сюда будет вставляться рандомное число
    let mrNum = n - (n - 1)
    console.log(`Вычисляем все простые числа до ${n}`)
    while (n > mrNum) {
        let numRoot = Math.ceil(Math.sqrt(n));

        while (numRoot > 1) {
            if (mrNum % numRoot === 0) {
                console.log(`${mrNum} - составное число`)
            }
            numRoot--;
        }

    }
    console.log(numRoot)
}


primeNumbers(mrRandom());