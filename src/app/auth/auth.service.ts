import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userAuthenticated = false;
  public showHeader = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  signIn(user: User) {
    if (user.name === 'email@email.com' && user.password === '123456') {
      this.userAuthenticated = true;
      this.showHeader.emit(true);

      this.router.navigate(['/dashboard']);
    } else {
      this.userAuthenticated = false;
      this.showHeader.emit(false);
    }
  }

  userIsAuthenticated() {
    return this.userAuthenticated;
  }

}
