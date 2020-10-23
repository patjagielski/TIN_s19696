var student = {
    name: 'Ethan',
    age: 15,
    study: 'IT',
    year: 2,
    canGraduate: function(year){
        if(year > 4)
            return true;
        else
            return false;
    },
    tuitionCost: function(year){
        return year*1000;
    }
};

function printObject(object){
    var objectValue;
    for(var part in object){
        objectValue = object[part]
        console.log(`${part} : ${objectValue}`);
    }
}

printObject(student);