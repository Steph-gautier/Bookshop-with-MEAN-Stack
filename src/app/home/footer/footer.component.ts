import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EmailSubscriptionService } from './subscription.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers:[EmailSubscriptionService]
})
export class FooterComponent implements OnInit {
  newsletterForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private emailSub: EmailSubscriptionService) { }

  clearNewsletterForm(){
    this.newsletterForm = this.formBuilder.group({
      userEmail: ['']
    });
  }
  errorMessage: string;
  isSubscribed: boolean;
  get subs(){return this.newsletterForm.controls;} 
  ngOnInit() {
    this.newsletterForm = this.formBuilder.group({
      userEmail: ['', Validators.email]
    });
  }
  onSubmit(){
    this.isSubscribed = true;
    if(this.newsletterForm.invalid){
      return;
    }
    else{
      this.emailSub.subscribeNewsletter(this.newsletterForm.value).subscribe((res) => {
        this.clearNewsletterForm();
      }, (err) => {
        if(err.status == 422){
          this.errorMessage = err.error.join('<br/>');
          this.clearNewsletterForm();
        }
        else{
          this.errorMessage = "Something went wrong!";
          this.clearNewsletterForm();
        }
      });
    }
  }

}
