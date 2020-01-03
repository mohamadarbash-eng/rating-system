import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './pipes/sort.pipe';



@NgModule({
  declarations: [SortPipe],
  exports: [SortPipe],
  imports: [
    CommonModule
  ]
})
export class UtilModule { }
