import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { DocListInterface, NewDocInterface } from '../types/interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public doctorsList!: DocListInterface[];
  public latitude: string = "";
  public longitude: string = "";

  constructor (private appService: ServiceService ) {}

  ngOnInit(): void {
    this.appService.getDoctorList().subscribe((data: any)=> {
      this.doctorsList = data;
    });
    navigator.geolocation.getCurrentPosition(this.setLocation);
  }

  setLocation =(location: any)=> {
    let coord = location.coords;
    this.latitude = coord.latitude;
    this.longitude = coord.longitude;
  }
  

  addDoctor (newDoctor: NewDocInterface) {
    let { latitude, longitude } = this;
    let { name, email, username, phone, website, street, suite, city, zipcode, companyName, catchPhrase, bs } = newDoctor;
    let id = +this.doctorsList.length + 1;
    let address = { street, suite, city, zipcode, geo: {lat: latitude, lng: longitude } };
    let company = { name: companyName, catchPhrase, bs};
    let newDetails = { id, name, email, username, phone, website, address, company };
    this.doctorsList.unshift(newDetails);
    console.log(this.doctorsList);
  }

  deleteDoctor (index: number) {
    this.doctorsList = this.doctorsList.filter((_: any, i: number)=> i !== index);
  }
  

}
