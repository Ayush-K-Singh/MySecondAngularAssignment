import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { FormsModule, NgForm } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatError } from '@angular/material/form-field';



@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
  ],
  exports: [
    PersonComponent,NgForm
  ]
})
export class PersonModule { }
