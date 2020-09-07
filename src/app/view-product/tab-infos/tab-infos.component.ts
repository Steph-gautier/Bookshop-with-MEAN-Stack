import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PreviewComponent, PreviewModalModel} from './preview/preview.component';

@Component({
  selector: 'app-tab-infos',
  templateUrl: './tab-infos.component.html',
  styleUrls: ['./tab-infos.component.css']
})
export class TabInfosComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openPreview():void{
    const modal = new PreviewModalModel();

    const dialogRef = this.dialog.open(PreviewComponent, {
      height: "700px",
      data: modal
    });  
  }
}
