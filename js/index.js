    let number = '';
    for (let i = 20; i <=30; i = i+ 0.5) {
        if(number !== '') {
            number += ', '
        }
        number += i;
    }

    let dataWithTheCalculationOfTheCost  = '';
    for (let dollar = 10; dollar <=100; dollar += 10) {
        let dollarRate = 27;
        let costInUah = `${dollar} * ${dollarRate} = ${dollar * dollarRate}<br>`;
        dataWithTheCalculationOfTheCost += costInUah;
    }

    let integer= 30;
    let naturalNumberDivisors = '';
    for (let i = 1; i <= 100; i++) {
        let naturalNumber = i * i;
        if (naturalNumber <= integer) {
            if(naturalNumberDivisors !== '') {
                naturalNumberDivisors += ', '
            }
            naturalNumberDivisors += i;
        }
    }

    let simpleNumber = 5;
    function isPrime(simpleNumber) {
        if (simpleNumber <= 1) {
            return "Not simple number";
        }

        for (let i = 2; i < simpleNumber; i++) {
                if (simpleNumber % i === 0) {
                    return "Not simple number";
                }
        }
            return "simple number";
    }
    let resultNumber = isPrime(simpleNumber);

    let someNumber = 81;
    let power = 0;
    let resultNumberToThePower = 1;

    for (; resultNumberToThePower < someNumber; power++) {
        resultNumberToThePower *= 3;
    }

    let result = `1. Output the numbers from 20 to 30 through the gap using a step of 0.5 (20 20.5 21 21.5….) : ${number}`
        + '<br>'
    + `2. One dollar is worth 27 hryvnias. Output data with the calculation of the cost of 10, 20, 30... 100 dollars : 
        <br>${dataWithTheCalculationOfTheCost}`
    + `3. This is an integer. Output all integers from 1 to 100 whose square does not exceed N numbers : ${naturalNumberDivisors}`
        + '<br>'
    + `4. This is an integer. Find out if it is prime (prime is a number greater than 1 that has no divisors other than 1 and itself) :
        ${simpleNumber} ${resultNumber === 'simple number' ? 'is simple number' : 'is not simple number'}`
        + '<br>'
    + `5. Given some number. Determine whether it is possible to obtain this number by reducing the number 3 to a certain power. 
        (For example, the numbers 9, 81 can be obtained, and 13 cannot be obtained) :${someNumber} 
        ${resultNumberToThePower === someNumber ? 'can be obtained as 3^' + power : 'can\'t be obtained as 3^х'}`

    document.write(result)
