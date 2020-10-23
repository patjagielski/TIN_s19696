class Student{
    constructor(firstName, lastName, id, grades){
        this._firstName = firstName;
        this._lastName = lastName;
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
    get StudentInfo(){
        return this.studentInfo();
    }
}

var Matthew = new Student('Matthew', 'Perps', 1, [5,5,2,4]);
Matthew.StudentInfo;