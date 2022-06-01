import { Component, OnInit, Input } from '@angular/core';
import { DocListInterface } from '../types/interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent implements OnInit {
  @Input() doctorsList!: DocListInterface[];

  public searchOn: boolean = false;
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
    let { searchName } = this;
    let result = this.doctorsList.find((details: any)=> details.name == searchName || details.username == searchName);
    if (!result) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'User not found!',
      });
      this.searchName = "";
      this.searchOn = false;
      return;
    }
    this.searchOn = true;
    this.searchResult = result;
    this.searchName = "";
  }

}
