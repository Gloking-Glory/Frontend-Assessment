import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DocListInterface } from '../types/interface';
import Swal from 'sweetalert2';

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
    Swal.fire({
      icon: "info",
      title: 'Are you sure you want to delete the selected doctor?',
      showDenyButton: true,
      confirmButtonText: 'YES',
      denyButtonText: `NO`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteDoctor.emit(index);
        Swal.fire('Saved!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }

}
