let variableLocal =200
var variableglobal = 100
variableglobal = "Hello"
console.log(variableglobal)

// Prototypes: one-time use object created from base
//prototypes called object
const newObject = {
    prop1: "Travis",
    prop2: "comp3123",
    printer: function (param1) {
        console.log(param1)
    }
}

console.log(newObject)
console.log(newObject.prop1)
console.log(newObject.prop2)
newObject.printer("pizza")

//prototypes: constructor
function Student(Student_name, course, lunch){
    this.prop1 = Student_name
    this.prop2 = course
    this.prop3 = lunch

    this.method1 = function (param1) {
        console.log(param1)
    }

}

const student_morning = new Student("Travis", "comp3123", "burger");
console.log(student_morning)
console.log(student_morning.prop1)
console.log(student_morning.prop2)
student_morning.method1(student_morning.prop3)

//Optinal Homework:

//
//
Student.prototype.prop4 = "hard-coded value"
Student.prototype.method2 = function (param1){
    return param1
}
console.log(student_morning.prop4)
console.log(student_morning.method2("chow mein"))

//class
 class prof {
    constructor(prof_name_p,){
        this.prof_name = prof_name_p

    }
    method1 (param1){
        return param1
    }

    
 }

 const morning_prof = new prof("Travis")
 console.log(morning_prof)
