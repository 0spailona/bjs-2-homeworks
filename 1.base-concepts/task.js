"use strict"

function solveEquation(a, b, c) {
    let arr = [];
    let x;
    let d = (b ** 2 - 4 * a * c);

     if (d === 0) {
        x = -b / (2 * a);
        arr.push(x);
    } else if (d > 0) {
        x = (-b + Math.sqrt(d)) / (2 * a);
        arr.push(x);
        x = (-b - Math.sqrt(d)) / (2 * a);
        arr.push(x);
    }

    return arr;
}

function checkAndConvert(a) {
    if (typeof (a) === 'string') {
        a = Number(a);

    }
    if (typeof (a) === 'number') {
        return a;
    }

    return NaN;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

    percent = checkAndConvert(percent);
    contribution = checkAndConvert(contribution);
    amount = checkAndConvert(amount);
    countMonths = checkAndConvert(countMonths);

    if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
        return false;
    }

    let changePercent = percent / 100 / 12;
    let creditBody = amount - contribution;
    let everyMonthAmount = creditBody * (changePercent + (changePercent / (((1 + changePercent) ** countMonths) - 1)));
    let allAmount = everyMonthAmount * countMonths;

    return Math.round(allAmount * 100) / 100;
}

calculateTotalMortgage(10, 0, 50000, 12);//52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12));//51694.54
console.log(calculateTotalMortgage(10, 20000, 20000, 48));//0
console.log(calculateTotalMortgage(10, 0, 10000, 36));//1616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36));//12479.52