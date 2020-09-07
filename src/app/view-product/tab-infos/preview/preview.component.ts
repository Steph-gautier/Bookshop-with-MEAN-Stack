import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  hide: boolean;
  src = "/assets/img/sample.pdf";
  constructor(public dialogRef: MatDialogRef<PreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PreviewModalModel) {
      this.hide = true;
  }

  ngOnInit() {
  }

}

export class PreviewModalModel {

  constructor() {
  }

}
