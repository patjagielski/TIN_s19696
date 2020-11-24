
$(document).ready(function(){
    $("form").submit(function(e){
        e.preventDefault();
        var n1 = $("#n1").val();
        var n2 = $("#n2").val();
        var op = $("#op").val();
        switch(op){
            case "+":
                var answer = parseInt(n1)+parseInt(n2);
            break;
            case "-":
                var answer = parseInt(n1)-parseInt(n2);
            break;
            case "*":
                var answer = parseInt(n1)*parseInt(n2);
            break;
            case "/":
                var answer = parseInt(n1)/parseInt(n2);
            break;
        }

        $.ajax({
            url :  "/ajaxtest",
            data : {
                n1,
                n2,
                op,
                answer,
            },
            method: "POST",
            contentType: "application/x-www-form-urlencoded",
            success : function(res){
                $("form").append("<br/>"+res);
            }, error: function(err){
                console.log(err);
            }
        })
    })
}); 