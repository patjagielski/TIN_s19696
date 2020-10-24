function validation(){
    
    var regex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var p = document.getElementById('email').value;

    if(p.match(regex)){
        var amount = document.getElementById('amount').value;
        if(amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            return window.alert(`Hello ${p} adding ${amount} dollars to account`);
        }else{
            document.getElementById('amount').style.background = "red";
            return window.alert(false)
        }
    }else{
        document.getElementById('email').style.background = "red";
        return window.alert(false)
    }
}
window.onload = function () {
    document.getElementById("submit_button").onclick = validation;
};