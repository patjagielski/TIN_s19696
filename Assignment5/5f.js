class Person{
    constructor(firstName, lastName){
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(name){
        this._firstName = name;
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(surname){
        this._lastName = surname;
    }
}

class Student extends Person{
    constructor(id, grades){
        super();
        this._id = id;
        this._grades = grades;
        this.studentInfo = function(){
            var gpa = 0;
            for(var grade in grades){
                gpa = gpa+grades[grade];
            }
            gpa = gpa/grades.length;
            console.log(`${this.firstName} ${this.lastName} with a GPA of: ${gpa}`);
        };
    }
    get StudentInfo(){
        return this.studentInfo();
    }
}

var student = new Student(3, [4.5, 4.5, 4, 5]);
student.firstName = 'Pat';
student.lastName = 'Jag';
student.StudentInfo;