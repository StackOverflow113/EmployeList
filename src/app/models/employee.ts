export class Employee {
    ID: number;
    Name: string;
    LastName: string;
    Sex: string;
    Salary: number;

    constructor(ID: number, Name: string, LastName: string, Sex: string, Salary: number) {
        this.ID = ID;
        this.Name = Name;
        this.LastName = LastName;
        this.Sex = Sex;
        this.Salary = Salary;
    }
}