import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  public API =  'https://jsonplaceholder.typicode.com/users';

  getDoctorList () {
    return this.http.get(this.API);
  }

}
