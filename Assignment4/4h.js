console.log(secondLargeSecondSmall([1,2,3,4]));
console.log(secondLargeSecondSmall([5,2,3,4]));
console.log(secondLargeSecondSmall([5,4,3,2]));
console.log(secondLargeSecondSmall([1,1,3,4]));

function secondLargeSecondSmall(numbers){
    numbers.sort(function(a,b){ return a - b}).pop();
    var secondLargest = numbers.sort(function(a,b){return a - b}).pop();
    var secondSmallest = numbers.sort(function(a,b){ return a < b}).pop();

    return [secondSmallest, secondLargest];
}