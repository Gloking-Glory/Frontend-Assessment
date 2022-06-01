import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { DocListInterface } from '../types/interface';

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent implements OnInit {
  @Input() doctorsList!: DocListInterface[];

  public searchResult: DocListInterface = {
    address: {
      city: "",
      geo: {
          lat: "",
          lng: "",
      },
      street: "",
      suite: "",
      zipcode: ""
    },
    company: {
        bs: "",
        catchPhrase: "",
        name: "",
    },
    email: "",
    id: 0,
    name: "",
    phone: "",
    username: "",
    website: "",
  };
  public searchName: string = "";
  
  constructor( ) { }

  ngOnInit(): void {
  }

  searchDoctor() {
    this.searchResult = this.doctorsList.find()
  }

}
