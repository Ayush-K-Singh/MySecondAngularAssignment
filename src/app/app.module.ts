import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonModule } from './person/person.module';
import { StudentListModule } from './student-list/student-list.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColoringDirective } from './coloring.directive';

@NgModule({
  declarations: [
    AppComponent,
    // ColoringDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PersonModule,
    StudentListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
