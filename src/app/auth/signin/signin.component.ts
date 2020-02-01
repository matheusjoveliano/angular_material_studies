import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public user: User = { name: 'email@email.com', password: '123456' };

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this._authService.signIn(this.user);
  }

  signIn() {
    this._authService.signIn(this.user);
  }

}
