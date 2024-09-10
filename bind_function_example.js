const combine = ( resultHandler, operation, ...numbers) => {
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number
    };

    let sum = 0;
    for (const num of numbers)
     {
        if (operation === 'ADD'){
            sum += validateNumber(num);
        }
        else {
            sum -= validateNumber(num);
        }
        
    }
    resultHandler(sum);
 };

const showResult = (messageText, result) => {
    alert(messageText + '' + result);
};

combine(showResult.bind(this, 'The result after adding all number is : '),'ADD',1,5,10,2,5,3); 
combine(showResult.bind(this, 'The result after subtracting all number is : '),'SUBTRACT',99,12,34,51,6); 
