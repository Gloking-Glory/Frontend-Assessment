import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { DocListInterface, NewDocInterface } from '../types/interface';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  @Input() doctorsList!: DocListInterface[];
  @Output() addDoctor = new EventEmitter();
  
  public formDetails!: FormGroup;
  public submitError: boolean = false;

  constructor(private fb: FormBuilder, private appService: ServiceService) { }

  ngOnInit(): void {
    this.formDetails = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      username: ["", Validators.required],
      phone: ["", [Validators.required, Validators.maxLength(11)]],
      website: ["", [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
      suite: ["", Validators.required],
      street: ["", Validators.required],
      city: ["", Validators.required],
      zipcode: ["", Validators.required],
      companyName: ["", Validators.required],
      catchPhrase: ["", Validators.required],
      bs: ["", Validators.required],
    });

  }

  get form() {
    return this.formDetails.controls;
  }

  regDoctor () {
    if (this.formDetails.valid) {
      let form = this.formDetails.value;
      this.addDoctor.emit(form);

      this.formDetails = this.fb.group({
        name: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        username: ["", Validators.required],
        phone: ["", [Validators.required, Validators.maxLength(11)]],
        website: ["", [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
        suite: ["", Validators.required],
        street: ["", Validators.required],
        city: ["", Validators.required],
        zipcode: ["", Validators.required],
        companyName: ["", Validators.required],
        catchPhrase: ["", Validators.required],
        bs: ["", Validators.required],
      });
    }
  }
}
