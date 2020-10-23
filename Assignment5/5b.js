function student(firstName, lastName, id, grades){
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;
    this.studentInfo = function(){
        var gpa = 0;
        for(grade in grades){
            gpa = gpa+grades[grade];
        }
        gpa = gpa/grades.length;
        console.log(`${this.firstName} ${this.lastName} with a GPA of: ${gpa}`);
    };
};

var studenta = new student("Ethan", "Doe", "1", [1,2,3,4]);
studenta.studentInfo();
console.log(studenta);