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

// let TripPlanner = function (_car) {
//     distance = prompt("What is the total distance of your trip. in km");
//     hours = distance / _car.averageSpeed;

//     if ((hours > 4) && (hours % 4)) {
//         hours = hours + (hours / 4);
//     }

// alert(`You will cover ${distance} km in ${hours} hours with the average speed of ${_car.averageSpeed}`);

// }

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

let AddFractions = function (_fractionOne, _fractionTwo) {

    if ((_fractionOne.denominator) == (_fractionTwo.denominator)) {
        fractionThree.denominator = _fractionOne.denominator
        fractionThree.numerator = Number(_fractionOne.numerator) + Number(_fractionTwo.numerator)

        if (fractionThree.denominator == fractionThree.numerator) {
            fractionThree.denominator = 1;
            fractionThree.numerator = 1;
        }

        // else if (fractionThree.numerator % fractionThree.denominator) {
        //     fractionThree.denominator = fractionThree.denominator / fractionThree.numerator;
        //     fractionThree.numerator = 1;
        // }

        alert(`${fractionOne.numerator}/${fractionOne.denominator} + ${fractionTwo.numerator}/${fractionTwo.denominator} = ${fractionThree.numerator}/${fractionThree.denominator}`);

    }

    else {
        fractionThree.denominator = fractionOne.denominator * fractionTwo.denominator;
        fractionThree.numerator = Number(fractionOne.numerator * fractionTwo.denominator) + Number(fractionTwo.numerator * fractionOne.denominator);

        // if (fractionThree.numerator % fractionThree.denominator) {
        //     fractionThree.denominator = fractionThree.denominator / fractionThree.numerator;
        //     fractionThree.numerator = 1;
        // }


        alert(`${fractionOne.numerator}/${fractionOne.denominator} + ${fractionTwo.numerator}/${fractionTwo.denominator} = ${fractionThree.numerator}/${fractionThree.denominator}`);

    }

};

let MultiplyFractions = function (_fractionOne, _fractionTwo) {

    fractionThree.denominator = fractionOne.denominator * fractionTwo.denominator;
    fractionThree.numerator = fractionOne.numerator * fractionTwo.numerator;

    if (fractionThree.denominator == fractionThree.numerator) {
        fractionThree.denominator = 1;
        fractionThree.numerator = 1;
    }

    // else if (fractionThree.numerator % fractionThree.denominator) {
    //     fractionThree.denominator = fractionThree.denominator / fractionThree.numerator;
    //     fractionThree.numerator = 1;
    // }

    alert(`${fractionOne.numerator}/${fractionOne.denominator} * ${fractionTwo.numerator}/${fractionTwo.denominator} = ${fractionThree.numerator}/${fractionThree.denominator}`);

};

let DivideFractions = function (_fractionOne, _fractionTwo) {
    fractionThree.numerator = _fractionOne.numerator * _fractionTwo.denominator;
    fractionThree.denominator = _fractionOne.denominator * _fractionTwo.numerator;

    if (fractionThree.denominator == fractionThree.numerator) {
        fractionThree.denominator = 1;
        fractionThree.numerator = 1;
    }

    // else if (fractionThree.numerator % fractionThree.denominator) {
    //     fractionThree.denominator = fractionThree.denominator / fractionThree.numerator;
    //     fractionThree.numerator = 1;
    // }

    alert(`${fractionOne.numerator}/${fractionOne.denominator} / ${fractionTwo.numerator}/${fractionTwo.denominator} = ${fractionThree.numerator}/${fractionThree.denominator}`);

};

let SubstractFractions = function (_fractionOne, _fractionTwo) {

    if ((_fractionOne.denominator) == (_fractionTwo.denominator)) {
        fractionThree.denominator = _fractionOne.denominator
        fractionThree.numerator = Number(_fractionOne.numerator) - Number(_fractionTwo.numerator)

        if (fractionThree.denominator == fractionThree.numerator) {
            fractionThree.denominator = 1;
            fractionThree.numerator = 1;
        }

        alert(`${fractionOne.numerator}/${fractionOne.denominator} - ${fractionTwo.numerator}/${fractionTwo.denominator} = ${fractionThree.numerator}/${fractionThree.denominator}`);

    }

    else {

        fractionThree.denominator = fractionOne.denominator * fractionTwo.denominator;
        fractionThree.numerator = Number(fractionOne.numerator * fractionTwo.denominator) - Number(fractionTwo.numerator * fractionOne.denominator);

        // if (fractionThree.numerator % fractionThree.denominator) {
        //     fractionThree.denominator = fractionThree.denominator / fractionThree.numerator;
        //     fractionThree.numerator = 1;
        // }
        alert(`${fractionOne.numerator}/${fractionOne.denominator} - ${fractionTwo.numerator}/${fractionTwo.denominator} = ${fractionThree.numerator}/${fractionThree.denominator}`);

    }

}




    // let fractionOne = {
    //     numerator: prompt("Enter numerator of fraction one"),
    //     denominator: prompt("Enter denominator of fraction two")
    // };

    // let fractionTwo = {
    //     numerator: prompt("Enter numerator of fraction two"),
    //     denominator: prompt("Enter denominator of fraction two")
    // }


