module.exports = function doCalculations(tempInput, fromOp, toOp){
    if(fromOp !== toOp){
        if(fromOp === "Fahrenheit"){
            //F -> C
            if(toOp === "Celsius"){
                return (tempInput - 32)*(5/9);
                console.log("this calculation happened")
            }
            //F -> K
            else{
                return (tempInput - 32)*(5/9)+273.15;
            }
        }else if(fromOp === "Celsius"){
            //C -> F
            if(toOp === "Fahrenheit"){
                return (tempInput * 9/5)+32;
            }
            //C -> K
            else{
                return (parseInt(tempInput) + 273.15);
            }
        }else{
            //K -> C
            if(toOp === "Celsius"){
                return (tempInput - 273.15);
            }
            //K -> F
            else{
                return (tempInput - 273.15)*(9/5)+32;
            }
        }
    }else{
        var result = "Please make sure you are not converting from to the same temp"
        return result;
    }
}        