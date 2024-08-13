/**
 * ! You are developing a simple employee management system for a company. Implement the following requirements using TypeScript:
 *
 * TODO: 1. Class Definition: Create a class Employee with the following properties:
 ** -  name (string, public)
 ** -  age (number, public)
 ** -  salary (number, private)
 ** -  id (number, protected)
 *
 * TODO: 2. Use shorthand syntax in the constructor to initialize the properties name and age.
 *
 * TODO: 3. Implement getter and setter methods for the salary property. The setter should ensure the salary is a positive number.
 *
 * TODO: 4. Add a static property companyName (string, public) and a static method getCompanyName that returns the company name.
 *
 * TODO: 5. Create a subclass Manager that extends the Employee class. Add an additional property department (string, public).
 *
 * TODO: 6. Override a method getDetails in the Manager class to include the department information along with the employee details.
 */

 class Employee {
    public static companyName: string;
    constructor(public name:string, public age:number, private salary:number, protected id:number){}

    get getSalary(): number{
        return this.salary;
    }
    set setSalary(newSalary:number){
        this.salary = newSalary;
    }
    get getCompanyName(): string{
        return Employee.companyName;
    }

    getDetails():string{
        return `name: ${this.name}, age: ${this.age}, salary: ${this.salary}, id: ${this.id}, company name: ${Employee.companyName}`;
    }
 }

 class Manager extends Employee{
    constructor( name:string,  age:number,  salary:number, id:number,public department:string){
        super(name, age, salary, id);
    }

    getDetails():string{
        return `${super.getDetails()}, department: ${this.department}`;
    }  
 }