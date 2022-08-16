import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { ColoringDirective } from '../coloring.directive';



@NgModule({
  declarations: [
    StudentListComponent,
    ColoringDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StudentListComponent
  ]
})
export class StudentListModule { }
