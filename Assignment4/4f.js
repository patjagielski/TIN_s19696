console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(10));
console.log(isPrime(13));

function isPrime(num){
    if(num === 1 || num === 2){
        return true;
    }
    else{
        for(var i = 2; i<num; i++)
            if(num % i === 0) return false;
        return num > 1;
    }
}