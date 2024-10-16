/**
 * @param {number[]} nums
 * @param {number[]} moveFrom
 * @param {number[]} moveTo
 * @return {number[]}
 */
var relocateMarbles = function(nums, moveFrom, moveTo) {
    let marbleSet = new Set(nums); // Используем Set для хранения уникальных шариков

    for (let i = 0; i < moveFrom.length; i++) {
        if (marbleSet.has(moveFrom[i])) {
            marbleSet.delete(moveFrom[i]);  // Удаляем шарик из moveFrom
            marbleSet.add(moveTo[i]);       // Добавляем шарик в moveTo
        }
    }

    // Преобразуем Set обратно в массив и сортируем его
    return Array.from(marbleSet).sort((a, b) => a - b);
};


console.log(relocateMarbles([1,6,7,8],[1,7,2],[2,9,5]))
