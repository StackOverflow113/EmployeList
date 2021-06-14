import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-count-employe',
  templateUrl: './count-employe.component.html',
  styleUrls: ['./count-employe.component.css']
})
export class CountEmployeComponent implements OnInit {
  @Input() all: number
  @Input() male: number
  @Input() female: number
  @Output() RadioButtonChanged = new EventEmitter<string>();
  constructor() {
    this.all = 0;
    this.male = 0;
    this.female = 0;
  }

  ngOnInit(): void {
    console.log(this.all);
  }
  radioButtonSelected = 'All';

  radioChange(): void {
    this.RadioButtonChanged.emit(this.radioButtonSelected);
  }


}
