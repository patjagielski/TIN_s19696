console.log(whatType(1));
console.log(whatType('string'));
console.log(whatType(true));

function whatType(arg){
    return typeof(arg);
}