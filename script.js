// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
// Функция для вывода на экран информации об автомобиле;
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

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

let time = {
    CurrentHours: "",
    CurrentMinutes: "",
    CurrentSeconds: ""
};

let GenerateTime = function () {

    do {
        time.CurrentHours = +prompt("Please enter valid hours. Between 0 and 23");
    } while ((time.CurrentHours < 0) || (time.CurrentHours > 23));

    do {
        time.CurrentMinutes = +prompt("Please enter valid minutes. Between 0 and 59");
    } while ((time.CurrentMinutes < 0) || (time.CurrentMinutes > 60));

    do {
        time.CurrentSeconds = +prompt("Please enter valid seconds. Between 0 and 59");
    } while ((time.CurrentSeconds < 0) || (time.CurrentSeconds > 60));

    document.getElementById("root").innerHTML = (`<pre> Current time is ${time.CurrentHours}:${time.CurrentMinutes}:${time.CurrentSeconds} </pre>`)


};


let ChangeSeconds = function (_secondsDiff) {

    _secondsDiff = +prompt("How many seconds do you want to you want to add or subtract?");
    let additionalMinutes;
    time.CurrentSeconds += _secondsDiff;

    if ((time.CurrentSeconds > 0) && (time.CurrentSeconds < 60)) {
        document.getElementById("root").innerHTML = (`<pre> Current time is ${time.CurrentHours}:${time.CurrentMinutes}:${time.CurrentSeconds} </pre>`);
    }

    else if ((time.CurrentSeconds > 0) && (time.CurrentSeconds >= 60)) {
        for (let i = 1; time.CurrentSeconds >= 60; i++) {
            time.CurrentSeconds -= 60;
            additionalMinutes = i;
        };
        ChangeMinutesNoPrompt(additionalMinutes);
        document.getElementById("root").innerHTML = (`<pre> Current time is ${time.CurrentHours}:${time.CurrentMinutes}:${time.CurrentSeconds} </pre>`);
    };


};

// else if ((time.CurrentSeconds < 0))

let ChangeMinutes = function (_minutesDiff) {

    _minutesDiff = +prompt("How many minutes do you want to you want to add or subtract?");
    let additionalHours;
    time.CurrentMinutes += _minutesDiff;

    if ((time.CurrentMinutes > 0) && (time.CurrentMinutes < 60)) {
        document.getElementById("root").innerHTML = (`<pre> Current time is ${time.CurrentHours}:${time.CurrentMinutes}:${time.CurrentSeconds} </pre>`);
    }

    else if ((time.CurrentMinutes > 0) && (time.CurrentMinutes >= 60)) {
        for (let j = 1; time.CurrentMinutes >= 60; j++) {
            time.CurrentMinutes = time.CurrentMinutes - 60;
            additionalHours = j;
        };
        ChangeHoursNoPrompt(additionalHours);
        document.getElementById("root").innerHTML = (`<pre> Current time is ${time.CurrentHours}:${time.CurrentMinutes}:${time.CurrentSeconds} </pre>`);

    };
};

let ChangeHours = function (_hoursDiff) {

    _hoursDiff = +prompt("How many hours do you want to you want to add or subtract?");

    time.CurrentHours += _hoursDiff;

    if ((time.CurrentHours > 0) && (time.CurrentHours < 24)) {
        document.getElementById("root").innerHTML = (`<pre> Current time is ${time.CurrentHours}:${time.CurrentMinutes}:${time.CurrentSeconds} </pre>`);
    }

    else if ((time.CurrentHours > 0) && (time.CurrentHours >= 24)) {
        for (let h = 0; time.CurrentHours >= 24; time.CurrentHours = time.CurrentHours - 24) {
        };
        document.getElementById("root").innerHTML = (`<pre> Current time is ${time.CurrentHours}:${time.CurrentMinutes}:${time.CurrentSeconds} </pre>`);
    };
};

let ChangeMinutesNoPrompt = function (_minutesDif) {

    time.CurrentMinutes += _minutesDif;

    if ((time.CurrentMinutes > 0) && (time.CurrentMinutes < 60)) {
        document.getElementById("root").innerHTML = (`<pre> Current time is ${time.CurrentHours}:${time.CurrentMinutes}:${time.CurrentSeconds} </pre>`);
    }

    else if ((time.CurrentMinutes > 0) && (time.CurrentMinutes >= 60)) {
        for (let j = 0; time.CurrentMinutes >= 60; time.CurrentMinutes = time.CurrentMinutes - 60) {
        };
        document.getElementById("root").innerHTML = (`<pre> Current time is ${time.CurrentHours}:${time.CurrentMinutes}:${time.CurrentSeconds} </pre>`);
    };
};

let ChangeHoursNoPrompt = function (_hoursDif) {

    time.CurrentHours += _hoursDif;

    if ((time.CurrentHours > 0) && (time.CurrentHours < 24)) {
        document.getElementById("root").innerHTML = (`<pre> Current time is ${time.CurrentHours}:${time.CurrentMinutes}:${time.CurrentSeconds} </pre>`);
    }

    else if ((time.CurrentHours > 0) && (time.CurrentHours >= 24)) {
        for (let h = 0; time.CurrentHours >= 24; h++) {
            time.CurrentHours = time.CurrentHours - 24;
        };
        document.getElementById("root").innerHTML = (`<pre> Current time is ${time.CurrentHours}:${time.CurrentMinutes}:${time.CurrentSeconds} </pre>`);
    };
};
