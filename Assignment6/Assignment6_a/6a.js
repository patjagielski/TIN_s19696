function calcTemp(){
    var option = document.getElementsByName('FC')[0].value;
    if(option === 'F'){
        var tempF = document.getElementById("TempF").value;
        var result = (5/9)*(tempF-32);
        window.alert(result);
    } else if(option === 'C'){
        var tempF = document.getElementById("TempF").value;
        var result = (9/5)*tempF+32;
        window.alert(result);
    }
    
}

window.onload = function () {
    document.getElementById("submit_button").onclick = calcTemp;
};