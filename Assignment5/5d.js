var Student = function(id, grades){
    this.firstName = undefined;
    this.setName = function(name){ this.firstName = name;}
    this.getName = function(){return this.firstName;}
    this.lastName = undefined;
    this.setLastName = function(surname){ this.lastName = surname;}
    this.getLastName = function(){return this.lastName;}
    this.id = id;
    this.grades = grades;
    this.getStudentInfo = function(){
        var gpa = 0;
        for(grade in grades){
            gpa = gpa+grades[grade];
        }
        gpa = gpa/grades.length;
        console.log(`${this.firstName} ${this.lastName} with a GPA of: ${gpa}`);
    };
};

var studenta = new Student(1, [1,2,3,4]);
studenta.setName('Ethan');
studenta.setLastName('Doe');
studenta.getStudentInfo();
console.log(studenta);