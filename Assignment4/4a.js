
var factorial_recursive = function(number){
    if(number <= 1){
        return(1);
    }
    return number*factorial_recursive(number-1);
};

console.log(factorial_recursive(4));
console.log(factorial_iterative(3));

function factorial_iterative(number){
    for(i = 0; i < number; i++){
        var result = number*(number-1)
    }
    return result;
}