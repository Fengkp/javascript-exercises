const sumAll = function(num1, num2) {

    if (num1 >= 0 
        && num2 >= 0 
        && typeof num1 === 'number' 
        && typeof num2 === 'number') {
        let start = num1;
        let end = num2;
        let sum = 0;

        if (num2 < num1) {
            start = num2;
            end = num1;
        }

        for (let i = start; i <= end; i++) 
            sum += i;
        return sum;
    }
    return 'ERROR'
};

// Do not edit below this line
module.exports = sumAll;
