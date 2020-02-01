import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() closeSideNavigation = new EventEmitter();

  showHeader = false;

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this._authService.showHeader.subscribe(
      show => this.showHeader = show
    );
  }

  onToggleClose() {
    this.closeSideNavigation.emit();
  }

}
