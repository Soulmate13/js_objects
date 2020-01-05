// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
// Функция для вывода на экран информации об автомобиле;
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

let car = {
    manufacturer: "Tesla, Inc",
    model: "Tesla Model S",
    year: 2012,
    averageSpeed: 100
};

let distance, hours, resthours;

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
        resthours = Math.trunc(distance / 400);
        hours = hours + resthours;
        alert(`You will cover ${distance} km in ${hours} hours with the average speed of ${_car.averageSpeed}`);
    }


}

// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 
// Функция сложения 2-х объектов-дробей;
// Функция вычитания 2-х объектов-дробей;
// Функция умножения 2-х объектов-дробей;
// Функция деления 2-х объектов-дробей;
// Функция сокращения объекта-дроби.

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

    document.getElementById("desk").innerHTML = (`<pre> Your fractions are ${fractionOne.numerator}/${fractionOne.denominator} and ${fractionTwo.numerator}/${fractionTwo.denominator}. Use buttons to do some quick math.</pre>`);


};

let ReduceFraction = function (_numerator, _denominator) {
    firstNumber = Number(_numerator);
    secondNumber = Number(_denominator);

    let remainder;

    if (firstNumber < 0) {
        firstNumber = -firstNumber;
    };

    if (secondNumber < 0) {
        secondNumber = -secondNumber;
    };

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

    if (firstNumber < 0) {
        firstNumber = -firstNumber;
    };

    if (secondNumber < 0) {
        secondNumber = -secondNumber;
    };

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

    if (firstNumber < 0) {
        firstNumber = -firstNumber;
    };

    if (secondNumber < 0) {
        secondNumber = -secondNumber;
    };

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
    document.getElementById("desk").innerHTML = (`<pre>Your reduced fractions are ${fractionOne.numerator}/${fractionOne.denominator} and ${fractionTwo.numerator}/${fractionTwo.denominator}</pre>`);

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

    document.getElementById("desk").innerHTML = (`<pre>${fractionOne.numerator}/${fractionOne.denominator} + ${fractionTwo.numerator}/${fractionTwo.denominator} = ${fractionThree.numerator}/${fractionThree.denominator}</pre>`);


};

let MultiplyFractions = function (_fractionOne, _fractionTwo) {

    fractionThree.denominator = fractionOne.denominator * fractionTwo.denominator;
    fractionThree.numerator = fractionOne.numerator * fractionTwo.numerator;

    ReduceFraction(fractionThree.numerator, fractionThree.denominator);

    document.getElementById("desk").innerHTML = (`<pre>${fractionOne.numerator}/${fractionOne.denominator} * ${fractionTwo.numerator}/${fractionTwo.denominator} = ${fractionThree.numerator}/${fractionThree.denominator}</pre>`);

};

let DivideFractions = function (_fractionOne, _fractionTwo) {
    fractionThree.numerator = _fractionOne.numerator * _fractionTwo.denominator;
    fractionThree.denominator = _fractionOne.denominator * _fractionTwo.numerator;

    firstNumber = Number(fractionThree.numerator);
    secondNumber = Number(fractionThree.denominator);

    ReduceFraction(fractionThree.numerator, fractionThree.denominator);

    document.getElementById("desk").innerHTML = (`<pre>${fractionOne.numerator}/${fractionOne.denominator} / ${fractionTwo.numerator}/${fractionTwo.denominator} = ${fractionThree.numerator}/${fractionThree.denominator}</pre>`);

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

    document.getElementById("desk").innerHTML = (`<pre>${fractionOne.numerator}/${fractionOne.denominator} - ${fractionTwo.numerator}/${fractionTwo.denominator} = ${fractionThree.numerator}/${fractionThree.denominator}</pre>`);

};

// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
// Функция вывода времени на экран;
// Функция изменения времени на переданное количество секунд;
// Функция изменения времени на переданное количество минут;
// Функция изменения времени на переданное количество часов. 
// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

let time = {  // time object
    CurrentHours: "",
    CurrentMinutes: "",
    CurrentSeconds: ""
};

let OutputTime = function () { //function that outputs time
    document.getElementById("root").innerHTML = (`<pre> Current time is ${time.CurrentHours}:${time.CurrentMinutes}:${time.CurrentSeconds} </pre>`);
};

let GenerateTime = function () { // genereting valid time with prompt

    do {
        time.CurrentHours = +prompt("Please enter valid hours. Between 0 and 23");
    } while ((time.CurrentHours < 0) || (time.CurrentHours > 23));

    do {
        time.CurrentMinutes = +prompt("Please enter valid minutes. Between 0 and 59");
    } while ((time.CurrentMinutes < 0) || (time.CurrentMinutes > 60));

    do {
        time.CurrentSeconds = +prompt("Please enter valid seconds. Between 0 and 59");
    } while ((time.CurrentSeconds < 0) || (time.CurrentSeconds > 60));

    OutputTime();
};

let ChangeSeconds = function () { // function that changes seconds

    _secondsDiff = +prompt("How many seconds do you want to you want to add or subtract?"); // promting
    let additionalMinutes; // new variable for additional hours in case seconds equal to 60 / -60 or more / less
    time.CurrentSeconds += _secondsDiff;

    if ((time.CurrentSeconds > 0) && (time.CurrentSeconds < 60)) { // if seconds are within 0 < seconds 60 frame we just print time
        OutputTime();
    }

    else if ((time.CurrentSeconds > 0) && (time.CurrentSeconds >= 60)) { // if seconds are < 60 we need to add an additional minute
        for (i = 1; time.CurrentSeconds >= 60; i++) { // looping to get the amount of additional minutes
            time.CurrentSeconds -= 60;
            additionalMinutes = i;
        };
        ChangeMinutesNoPrompt(additionalMinutes); // we need to change the minutes before printing
        OutputTime();
    }

    else if (time.CurrentSeconds < 0) { // if seconds are negative we need to count negative minutes
        for (k = -1; time.CurrentSeconds < 0; k--) { // looping to get negative minutes
            time.CurrentSeconds += 60;
            additionalMinutes = k;
        };
        ChangeMinutesNoPrompt(additionalMinutes); // we need to subtract munutes before printing
        OutputTime();
    }

    else if (time.CurrentSeconds == 0) {
        OutputTime(); // if seconds are 0 we just print
    }

};

let ChangeMinutesNoPrompt = function (_minutesDif) {
    let additionalHours; // additional hours variable in case the hour changes
    time.CurrentMinutes += _minutesDif;

    if ((time.CurrentMinutes > 0) && (time.CurrentMinutes < 60)) {
        OutputTime(); // if minutes are within 0 < seconds 60 frame we just print time
    }

    else if ((time.CurrentMinutes > 0) && (time.CurrentMinutes >= 60)) {
        for (let j = 1; time.CurrentMinutes >= 60; j++) { // if minutes are < 60 we need to add an additional hour
            time.CurrentMinutes = time.CurrentMinutes - 60; // looping to get the amount of additional hours
            additionalHours = j;
        };
        ChangeHoursNoPrompt(additionalHours); // we need to change hours before printing
        OutputTime();
    }

    else if (time.CurrentMinutes == 0) {
        OutputTime(); // if minutes are 0 we just print
    }

    else if (time.CurrentMinutes < 0) { // if minutes are negative we need to count negative hours
        for (m = -1; time.CurrentMinutes < 0; m--) {
            time.CurrentMinutes += 60;
            additionalHours = m;
        };
        ChangeHoursNoPrompt(additionalHours); // we need to change hours before printing
        OutputTime();
    }
};

let ChangeMinutes = function () {

    _minutesDiff = +prompt("How many minutes do you want to you want to add or subtract?");
    ChangeMinutesNoPrompt(_minutesDiff)
};

let ChangeHoursNoPrompt = function () {

    time.CurrentHours += _hoursDiff;

    if ((time.CurrentHours > 0) && (time.CurrentHours < 24)) {
        OutputTime(); // if hours are within 0 - 23 range we just print
    }

    else if ((time.CurrentHours > 0) && (time.CurrentHours >= 24)) { // if hours are > 24 we need to loop until hours are less than 24
        for (time.CurrentHours; time.CurrentHours >= 24; time.CurrentHours = time.CurrentHours - 24) {
        };
        OutputTime();
    }

    else if (time.CurrentHours == 0) { // if hours are 0 we print
        OutputTime();
    }

    else if (time.CurrentHours < 0) { // if hours are < 0 we need to loop until hours are 0 or more
        for (time.CurrentHours; time.CurrentHours < 0; time.CurrentHours = time.CurrentHours + 24) {
        };
        OutputTime();
    }
};

let ChangeHours = function () {
    _hoursDiff = +prompt("How many hours do you want to you want to add or subtract?");
    ChangeHoursNoPrompt(_hoursDiff)
};

