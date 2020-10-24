function addRow(){
    var table = document.getElementById('table_body');
    var xrow = table.insertRow();

    for(var x = 0; x<5; x++){
        // var td = document.createElement('td');          
        // td = tr.insertCell(x);
        
        var row = document.createElement('input');
        row.setAttribute('type', 'text');
        row.setAttribute('placeholder', `something ${x}`);
        xrow.insertCell();
        table.appendChild(row);
    }
    
}

window.onload = function () {
    document.getElementById("submit_button").onclick = addRow;
};