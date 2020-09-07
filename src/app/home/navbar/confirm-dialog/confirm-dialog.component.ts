import { MatDialogRef, MAT_DIALOG_DATA, MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import { UserDetailService } from 'src/app/shared/user-detail.service';
import { SuccessComponent } from './success/success.component';
import { WrongComponent } from './wrong/wrong.component';
import { MustMatch } from './_helper/must-match.validator';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css'],
  providers: [UserDetailService]
})
export class ConfirmDialogComponent {
  hide: boolean;
  loginForm: FormGroup;
  registrationForm: FormGroup;
  //emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-ZA-Z\-0-9]+\.)+[a-Za-Z]{2,}))$/;
  constructor(
    private _bottomSheetf: MatBottomSheet,
    private _bottomSheets: MatBottomSheet,
    private formbuilder: FormBuilder,
    private formBuilder: FormBuilder,
    private userdetailService: UserDetailService,
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel
    ) {
      this.hide = true;
      this.clearRegisterForm();
  }
  openBottomSheets(): void {
    this._bottomSheets.open(SuccessComponent);
  }
  openBottomSheetf(): void {
    this._bottomSheetf.open(WrongComponent);
  }

  ngOnInit(){
    //WE INITIALISE OUR FORMS
    this.loginForm = this.formbuilder.group({
      loginEmail: ['', Validators.email],
      loginPassword: ['', Validators.required, Validators.minLength(8)]
    });

    this.registrationForm = this.formBuilder.group({
      userName: ['', Validators.required, Validators.minLength(4)],
      fullName: ['', Validators.required, Validators.minLength(6)],  
      email: ['', Validators.email],
      password: ['',Validators.minLength(8), Validators.required],
      password1: ['', Validators.minLength(8), Validators.required]
      },
      {
        validator: MustMatch('password', 'password1')
      });
  }
  onLogin(){
    
  }
  clearLoginForm(){
    this.loginForm = this.formbuilder.group({
      loginEmail: [''],
      loginPassword: ['']
    });
  }
 
  



  clearRegisterForm(){
    this.registrationForm = this.formBuilder.group({
      userName: [''],
      fullName: [''],  
      email: [''],
      password: [''],
      password1: ['']
    });
  }
  errorMessage:string;
  isSubmitted: boolean;

  get register(){return this.registrationForm.controls;} 

  onSubmit(){
    this.isSubmitted = true;
    if (this.registrationForm.invalid){
      return;
    }
    else{
      this.userdetailService.postUserDetail(this.registrationForm.value).subscribe((res) => {
        this.clearRegisterForm();
        this.openBottomSheets();
        }, (err) => {
          if(err.status == 422){
            this.errorMessage = err.error.join('<br/>');
            this.clearRegisterForm();
            this.openBottomSheetf();
          }
          else{
            this.errorMessage = "Something went wrong!";
            this.clearRegisterForm();
            this.openBottomSheetf();
          }
    });
    }
  }


}

export class ConfirmDialogModel {

  constructor() {
  }
}
