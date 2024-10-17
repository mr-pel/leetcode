/**
 * @param {string} s
 * @return {number}
 */

var secondHighest = function (s) {
    // Преобразуем строку в массив чисел, отфильтруем нечисловые значения
    let numArr = s.split('').map(Number).filter(num => !isNaN(num));

    // Удаляем дубликаты
    numArr = [...new Set(numArr)];

    // Сортируем массив в порядке убывания
    numArr.sort((a, b) => b - a);

    // Возвращаем второе по величине число, если оно существует
    return numArr.length > 1 ? numArr[1] : -1;
};


console.log(secondHighest('dfa123213afd'));
console.log(secondHighest('11111'));
