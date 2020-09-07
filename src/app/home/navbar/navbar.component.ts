import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { CartService} from '../../Services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  cartItemCount:number=null;

  constructor(
    public dialog: MatDialog,
    private cartservice: CartService
      ) {}

  ngOnInit() {
    var arrayOfProducts = JSON.parse(localStorage.getItem("product"));
    this.cartItemCount = arrayOfProducts.length;
    this.cartservice.currentMessage.subscribe(msg => this.cartItemCount = msg);
    
  }
  register(): void{
    const dialogData = new ConfirmDialogModel();

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: "420px",
      data: dialogData
    });  
  }
    

}

