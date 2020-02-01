import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() SideNavigationToggle = new EventEmitter();
  showHeader = false;

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this._authService.showHeader.subscribe(
      show => this.showHeader = show
    );
  }

  onToggleOpenSidenav() {
    this.SideNavigationToggle.emit();
  }

}
