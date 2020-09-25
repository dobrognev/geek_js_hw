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
    document.write(`Вычисляем все простые числа в промежутке от 0 до ${n} : <br \/>`);
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