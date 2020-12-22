module.exports = function doCalculations(distInput, from, to){
    if(from !== to){
        if(from === "Miles"){
            //F -> C
            return (distInput * 1.609344);
            console.log("this calculation happened")
        

        }else if(from === "Kilometers"){
            //C -> F
            
            return (distInput/ 1.609344);
            
        }
    }else{
        return "Please make sure you are not converting from to the same distance"
    }
    
}