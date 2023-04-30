module.exports = function reverse (number) {
    let stringFromNumber = String(number);
    let arrayFromString = [];
    let newStringFromArray = 0;
    let reversedNumber = 0;

    for (let element of stringFromNumber) {
        arrayFromString.push(element);
    }

    arrayFromString.reverse();
    newStringFromArray = arrayFromString.join('');

    if (number < 0) {
        reversedNumber = Number(newStringFromArray.slice(0, newStringFromArray.length - 1));
    } else {
        reversedNumber = Number(newStringFromArray);
    }

    return reversedNumber;
}
