function getArrayParams(...arr) {
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    let avg;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
        sum = sum + arr[i];
    }

    avg = +((sum / arr.length).toFixed(2))


    return {min, max, avg};
}


function summElementsWorker(...arr) {
    return arr.reduce((sum, x) => sum + x, 0);
}

function differenceMaxMinWorker(...arr) {

    if (arr.length === 0) {
        return 0;
    }

    // let minmax = arr.reduce((result, x) => [Math.min(result, x), Math.max(result, x)], [Infinity, -Infinity]);
    //return minmax[1] - minmax[0];

    let max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
    let min = arr.reduce((a, b) => Math.min(a, b), Infinity);

    return max - min;
}

function differenceEvenOddWorker(...arr) {

    //let sum = arr.reduce((res, x) => x % 2 ? [res[0] + x, res[1]] : [res[0], res[1] + x], [0, 0])
    //return sum[1] - sum[0];

    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEvenElement = sumEvenElement + arr[i];
        } else {
            sumOddElement = sumOddElement + arr[i];
        }
    }

    return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {

    //let even = arr.filter(x => x % 2 === 0);
    //return summElementsWorker(even) / even.length;

    let sumEvenElement = 0;
    let countEvenElement = 0;
    if (arr.length === 0) {
        return 0;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEvenElement = sumEvenElement + arr[i];
            countEvenElement++;
        }
    }

    return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {

    //return arrOfArr.reduce((res, arr) => Math.max(res, func(...arr)), -Infinity);

    let maxWorkerResult = -Infinity;
    for (let i = 0; i < arrOfArr.length; i++) {
        let x = func(...arrOfArr[i]);
        if (maxWorkerResult < x) {
            maxWorkerResult = x;
        }
    }

    return maxWorkerResult;
}


