import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit {
  listEmployes: Employee[] = [
    { ID: 1, Name: 'juan', LastName: 'Perez', Sex: 'Male', Salary: 40000 },
    { ID: 2, Name: 'gustavo', LastName: 'gonzales', Sex: 'Male', Salary: 60000 },
    { ID: 3, Name: 'henrry', LastName: 'garcia', Sex: 'Male', Salary: 70000 },
    { ID: 4, Name: 'froid', LastName: 'camacho', Sex: 'Male', Salary: 90000 },
    { ID: 5, Name: 'liliana', LastName: 'moreno', Sex: 'Female', Salary: 90000 },
    { ID: 6, Name: 'teresa', LastName: 'betancourt', Sex: 'Female', Salary: 110000 },
    { ID: 7, Name: 'jennifer', LastName: 'avala', Sex: 'Female', Salary: 20000 }
  ]
  radioButtonSelected = 'All';
  constructor() { }

  ngOnInit(): void {
  }

  getEmployees(): number {
    return this.listEmployes.length;
  }
  getMale(): number {
    return this.listEmployes.filter(list => list.Sex == 'Male').length;
  }
  getFemale(): number {
    return this.listEmployes.filter(list => list.Sex == 'Female').length;
  }

  employeRadioButton(radioButtonSelec: string): void {
    this.radioButtonSelected = radioButtonSelec;
  }

}
