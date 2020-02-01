import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.css']
})
export class NavtabsComponent implements OnInit {

  showHeader = false;

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this._authService.showHeader.subscribe(
      show => this.showHeader = show
    );
  }

}
