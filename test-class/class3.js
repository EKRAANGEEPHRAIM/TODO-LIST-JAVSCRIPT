class Person {
    constructor(name) {
        this.name = name;
    }
}

 class Employee extends Person {
        constructor(name, salary){
            super(name);
            this.salary = salary ;
        }

        work() {
           return `${this.name} is working` 
        }
    }

    const emp = new Employee("Ephraim" , 30000000);

    console.log(emp.work());