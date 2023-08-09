function parseCount(count) {
    let resultCount = Number.parseFloat(count);
    if (isNaN(resultCount)) {
        throw new Error('Невалидное значение');
    }
    return resultCount;
}

function validateCount(count) {
    try {
        return parseCount(count);
    } catch (error) {
        return error;
    }
}



