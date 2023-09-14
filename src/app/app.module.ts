import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/auth/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TitleComponent } from './shared/components/title/title.component';
import { RegisterComponent } from './core/components/auth/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './core/components/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CardComponent } from './core/components/home/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TitleComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
