import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from './newsletter.model';

@Injectable({
  providedIn: 'root'
})
export class EmailSubscriptionService{

  readonly base = 'http://localhost:3000/api/newsletter';

  constructor(private http: HttpClient) { }

  subscribeNewsletter(email: News){
    return this.http.post(this.base, email);
  }
}