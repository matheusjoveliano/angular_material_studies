import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HouRent';
  window: Element;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const contentContainer = document.querySelector('.mat-sidenav-content') || this.window;
      }
    });
  }

}
