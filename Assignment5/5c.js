var Student = {
    firstName: undefined,
    lastName: undefined,
    id: 0,
    studentInfo: function(){
        console.log(`Hello my name is ${this.firstName} my current subjects are: ${this.subjects}`);
    }
};

//create function which creates objects based on the prototype setting first and last names and ID
function moreStudents(){
    //create prototype of student 
    var StudentProto = Object.create(Student);
    //prototype = array of subjects
    StudentProto.subjects = ['Math', 'English', 'Biology', 'Chemistry'];
    StudentProto.firstName = "John";
    StudentProto.lastName = "Doe";
    StudentProto.id = 2;
    StudentProto.studentInfo();
    console.log(StudentProto);
}
moreStudents();