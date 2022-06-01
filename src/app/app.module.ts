import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material/material-module/material-module.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDoctorComponent,
    HomeComponent,
    SearchDoctorComponent,
    DoctorsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
