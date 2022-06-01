import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DocListInterface } from '../types/interface';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {
  
  @Input() doctorsList!: DocListInterface[]; 
  @Output() deleteDoctor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  delete (index: number) {
    this.deleteDoctor.emit(index);
  }

}
