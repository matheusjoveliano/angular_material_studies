import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';

// Components
import { HouseComponent } from './house/house.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';

// Services
import { AuthService } from './auth/auth.service';

// Routing
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth/guards/auth.guard';

// Navigation
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';

// Flex
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    HouseComponent,
    AuthComponent,
    SigninComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent,
    HouseDetailComponent,
    DashboardComponent,
    ProfileComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
