const sumUp = (a, b, ...numbers) => {
    let sum = 0;
    for (const num of numbers)
    {
        sum += num;
    }
    return sum;
 };

 const subUp = function() {
    let sub = 0;
    for (const num of arguments){
        sub -= num;
    }
    return sub;
 };


console.log(sumUp(1,5,10,2,5,3));
console.log(subUp(99.56,21,4,66));


