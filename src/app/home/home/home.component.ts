import { Component, OnInit, Input } from '@angular/core';
import { OverlayContentComponent, OverlayContentModel } from './overlay-content/overlay-content.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private modal:MatDialog) { 

  }

  ngOnInit() {
    this.openOverlay();
  }
  openOverlay(): void{
    const dialogData = new OverlayContentModel();

    const modalRef = this.modal.open(OverlayContentComponent, {
      width: "650px",
      height: "450px",
      data: dialogData,
      panelClass: 'background'
    });
  }
}
