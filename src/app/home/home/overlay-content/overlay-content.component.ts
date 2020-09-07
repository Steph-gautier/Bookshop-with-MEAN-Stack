import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HomeComponent } from '../home.component';

@Component({
    selector: 'app-overlay-content',
    templateUrl: './overlay-content.component.html',
    styleUrls: ['./overlay-content.component.css']
  })
  export class OverlayContentComponent implements OnInit {
  
    constructor(
      private modalRef:MatDialogRef<HomeComponent>,
      @Inject(MAT_DIALOG_DATA) public data: OverlayContentModel) { }
  
    ngOnInit() {
    }
    
    close(): void {
      this.modalRef.close();
    }
  }
  export class OverlayContentModel {
  
    constructor() {
    }
  }