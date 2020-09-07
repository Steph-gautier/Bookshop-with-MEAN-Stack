import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    MatButtonModule, MatDialogModule
  ],
  exports: [
    MatButtonModule, MatDialogModule
  ]
})
export class CustomModalModule { }
