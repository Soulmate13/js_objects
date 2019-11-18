let car = {
    manufacturer: "Tesla, Inc",
    model: "Tesla Model S",
    year: 2012,
    averageSpeed: 100

};

let distance, hours;

let ShowInfo = function (_car) {
    alert(`manufacturer: ${_car.manufacturer}\nmodel: ${_car.model}\nyear: ${_car.year}\naverage speed: ${_car.averageSpeed}`)
};

let TripPlanner = function (_car) {
    distance = prompt("What is the total distance of your trip. in km");

    hours = distance / _car.averageSpeed;

    if (hours <= 4) {
        alert(`You will cover ${distance} km in ${hours} hours with the average speed of ${_car.averageSpeed}`);
    }

    else {
        hours = hours + Math.trunc(hours / 4);
        alert(`You will cover ${distance} km in ${hours} hours with the average speed of ${_car.averageSpeed}`);
    }


}

let numeratorOne, denominatorOne, numeratorTwo, denominatorTwo, fractionOne, fractionTwo, fractionThree;

let GenerateFractions = function () {

    numeratorOne = +prompt("Enter the numerator of the first fraction");

    do {
        denominatorOne = +prompt("Enter the denominator of the first fraction");
    }

    while (denominatorOne == 0);

    numeratorTwo = +prompt("Enter the numerator of the second fraction");

    do {
        denominatorTwo = +prompt("Enter the denominator of the second fraction");

    }

    while (denominatorTwo == 0);

    fractionOne = {
        numerator: `${numeratorOne}`,
        denominator: `${denominatorOne}`
    };

    fractionTwo = {
        numerator: `${numeratorTwo}`,
        denominator: `${denominatorTwo}`
    };

    fractionThree = {
        numerator: "",
        denominator: ""
    };

    alert(`Your fractions are ${fractionOne.numerator}/${fractionOne.denominator} and ${fractionTwo.numerator}/${fractionTwo.denominator}. Use buttons to do some quick math.`);

};

let ReduceFraction = function (_numerator, _denominator) {
    firstNumber = Number(_numerator);
    secondNumber = Number(_denominator);
    let remainder;

    if ((firstNumber % secondNumber) == 0) {
        firstNumber = firstNumber / secondNumber;
        secondNumber = 1;

        _numerator = firstNumber;
        _denominator = secondNumber;
    }

    else {

        while ((firstNumber % secondNumber) > 0) {

            remainder = (firstNumber % secondNumber);

            firstNumber = secondNumber;
            secondNumber = remainder;
        };

        _numerator = Number(_numerator) / remainder;
        _denominator = Number(_denominator) / remainder;

    }

    fractionThree.numerator = _numerator;
    fractionThree.denominator = _denominator;

};

let ReduceFractions = function (_fractionOne, _fractionTwo) {

    let firstNumber = Number(_fractionOne.numerator);
    let secondNumber = Number(_fractionOne.denominator);
    let remainder;

    if ((firstNumber % secondNumber) == 0) {
        firstNumber = firstNumber / secondNumber;
        secondNumber = 1;

        _fractionOne.numerator = firstNumber;
        _fractionOne.denominator = secondNumber;
    }

    else {
        while ((firstNumber % secondNumber) > 0) {

            remainder = (firstNumber % secondNumber);

            firstNumber = secondNumber;
            secondNumber = remainder;
        };

        _fractionOne.numerator = Number(_fractionOne.numerator) / remainder;
        _fractionOne.denominator = Number(_fractionOne.denominator) / remainder;

    }

    firstNumber = Number(_fractionTwo.numerator);
    secondNumber = Number(_fractionTwo.denominator);
    remainder = 0;

    if ((firstNumber % secondNumber) == 0) {
        firstNumber = firstNumber / secondNumber;
        secondNumber = 1;

        _fractionTwo.numerator = firstNumber;
        _fractionTwo.denominator = secondNumber;
    }

    else {
        while ((firstNumber % secondNumber) > 0) {

            remainder = (firstNumber % secondNumber);

            firstNumber = secondNumber;
            secondNumber = remainder;
        };

        _fractionTwo.numerator = Number(_fractionTwo.numerator) / remainder;
        _fractionTwo.denominator = Number(_fractionTwo.denominator) / remainder;

    }

    alert(`Your reduced fractions are ${fractionOne.numerator}/${fractionOne.denominator} and ${fractionTwo.numerator}/${fractionTwo.denominator}`);

};

let AddFractions = function (_fractionOne, _fractionTwo) {

    if ((_fractionOne.denominator) == (_fractionTwo.denominator)) {
        fractionThree.denominator = Number(_fractionOne.denominator);
        fractionThree.numerator = Number(_fractionOne.numerator) + Number(_fractionTwo.numerator);
    }

    else {
        fractionThree.denominator = fractionOne.denominator * fractionTwo.denominator;
        fractionThree.numerator = Number(fractionOne.numerator * fractionTwo.denominator) + Number(fractionTwo.numerator * fractionOne.denominator);
    };

    ReduceFraction(fractionThree.numerator, fractionThree.denominator);

    alert(`${fractionOne.numerator}/${fractionOne.denominator} + ${fractionTwo.numerator}/${fractionTwo.denominator} = ${fractionThree.numerator}/${fractionThree.denominator}`);

};

let MultiplyFractions = function (_fractionOne, _fractionTwo) {

    fractionThree.denominator = fractionOne.denominator * fractionTwo.denominator;
    fractionThree.numerator = fractionOne.numerator * fractionTwo.numerator;

    ReduceFraction(fractionThree.numerator, fractionThree.denominator);

    alert(`${fractionOne.numerator}/${fractionOne.denominator} * ${fractionTwo.numerator}/${fractionTwo.denominator} = ${fractionThree.numerator}/${fractionThree.denominator}`);

};

let DivideFractions = function (_fractionOne, _fractionTwo) {
    fractionThree.numerator = _fractionOne.numerator * _fractionTwo.denominator;
    fractionThree.denominator = _fractionOne.denominator * _fractionTwo.numerator;

    firstNumber = Number(fractionThree.numerator);
    secondNumber = Number(fractionThree.denominator);

    ReduceFraction(fractionThree.numerator, fractionThree.denominator);

    alert(`${fractionOne.numerator}/${fractionOne.denominator} / ${fractionTwo.numerator}/${fractionTwo.denominator} = ${fractionThree.numerator}/${fractionThree.denominator}`);

};

let SubstractFractions = function (_fractionOne, _fractionTwo) {

    if ((_fractionOne.denominator) == (_fractionTwo.denominator)) {
        fractionThree.denominator = _fractionOne.denominator;
        fractionThree.numerator = Number(_fractionOne.numerator) - Number(_fractionTwo.numerator);

    }

    else {

        fractionThree.denominator = fractionOne.denominator * fractionTwo.denominator;
        fractionThree.numerator = Number(fractionOne.numerator * fractionTwo.denominator) - Number(fractionTwo.numerator * fractionOne.denominator);

    };

    ReduceFraction(fractionThree.numerator, fractionThree.denominator);

    alert(`${fractionOne.numerator}/${fractionOne.denominator} - ${fractionTwo.numerator}/${fractionTwo.denominator} = ${fractionThree.numerator}/${fractionThree.denominator}`);
};