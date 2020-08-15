/* //1
function letterCount ( word, letter ) {
    let count = 0;
    word = prompt( "type word" );
    letter = prompt(" type wanted letter ");
    for( let i = 0; i<word.length; i++ ) {
        if (word.charAt(i) == letter) {
            debugger;
            count = count + 1;
        }
    }
    console.log(count)
}
console.log(letterCount())


//2
function randomNames() {
    let names = [ "ahmed", "mostafa", "yasser", "sandra" ]
    let picker = Math.floor(Math.random() * Math.floor(4));
    let spicker = Math.floor(Math.random() * Math.floor(4));
    console.log(names[picker], names[spicker])
}
console.log(randomNames()) */




//5
class circle {
    radius;
    color;

    set Radius(radius) {
        this.radius = radius;
    }

    set Color(color) {
        this.color = color;
    }

    get Radius() {
        return this.radius
    }

    get Color() {
        return this.color
    }

    Area() {
        return Math.PI * Math.pow(this.radius , 2);
    }


    get allCircleInfo(){
        return `Raduis = ${this.radius} \n Color = ${this.color}`;
    }

}

let c = new circle;
c.Radius = 10
c.Color = "blue"
console.log(c.allCircleInfo)
console.log(c.Area())





//6
class Employee {

    constructor( id, firstName, lastName, salary){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

/*    get Id() {
        this.id = id;
    }

    get FirstName() {
        this.firstName = firstName;
    }

    get LastName() {
        this.lastName = lastName;
    }

    get Salary() {
        this.salary = salary;
    }

    set Id(id) {
        this.id = id;
    }

    set FirstName(firstName) {
        this.firstName = firstName;
    }

    set LastName(lastName) {
        this.lastName = lastName;
    }

    set Salary(salary) {
        this.salary = salary;
    } */


    get Name() {
        return this.firstName + " " + this.lastName
    }

    get AnnualSalary() {
        return (this.salary) *12
    }

    get RaiseSalary() {
        // let newSalary = 4400;
        // return ( (newSalary) - (this.salary) ) / (this.salary*100)
    }

    get EmployeeInfo() {
            return `ID = ${this.id} \n Name = ${this.Name}
            \n Salary= ${this.salary}`;
    }



}

let e = new Employee(1, "Ahmed", "Mohamed", 4000);

console.log(e.Name)

console.log(e.AnnualSalary)

// console.log(e.RaiseSalary)

console.log(e.EmployeeInfo)