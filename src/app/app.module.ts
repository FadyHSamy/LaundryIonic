import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { RegistrationComponent } from './modules/Auth/registration/registration.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './modules/Auth/login/login.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@NgModule({
  declarations: [AppComponent, RegistrationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgbModule,
    LoginComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
