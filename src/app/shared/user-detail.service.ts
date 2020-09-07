import { Injectable } from '@angular/core';
import { UserDetail } from './user-detail.model';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class UserDetailService {
  selectedUser: UserDetail;
  users: UserDetail[];
  readonly baseURL = 'http://localhost:3000/api/register';
  readonly loginUrl ='http://localhost:3000/api/login';

  constructor(private http: HttpClient) { }

  postUserDetail(user: UserDetail){
    return this.http.post(this.baseURL, user);
  }
  loginVerification(authCredentials){
  }
  setToken(token:string){
    localStorage.setItem('token', token);
  }
  getToken(){
    return localStorage.getItem('token');
  }
  deleteToken(){
    return localStorage.removeItem('token');
  }
}
