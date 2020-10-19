var arr = [1,2,3,4,5,6,7,8,9,10];
console.log(binarySearch(arr, 4, 0,arr.length-1));
console.log(binarySearch(arr, 5, 0,arr.length-1));
console.log(binarySearch(arr, 7, 0,arr.length-1));
console.log(binarySearch(arr, 41, 0,arr.length-1));

function binarySearch(arr, key, start, end){
    if(start > end)
        return `${key} does not exist in this array.`;
    var middle = Math.floor((start+end)/2);
    if(arr[middle] === key)
        return `Found at index: ${middle}`;
    if(arr[middle] > key)
        return binarySearch(arr, key, start, middle-1);
    else
        return binarySearch(arr, key, middle+1, end);
}