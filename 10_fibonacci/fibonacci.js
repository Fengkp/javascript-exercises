const fibonacci = function(num) {
    let num1 = 0;
    let num2 = 1;
    let fib = num1 + num2;

    if (num < 0) 
        return 'OOPS';

    for (let i = 0; i < Number(num) - 1; i++) {
        fib = num1 + num2;
        num1 = num2;
        num2 = fib;
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
