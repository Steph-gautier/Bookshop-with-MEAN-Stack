import { Component, Input } from '@angular/core';
import { ConfirmDialogComponent } from '../confirm-dialog.component';

@Component({
  selector: 'app-wrong',
  templateUrl: './wrong.component.html',
  styleUrls: ['./wrong.component.css']
})
export class WrongComponent {
  @Input() name: string;
  constructor() { }
  x: ConfirmDialogComponent;
  ngOnInit() {
  }

}
