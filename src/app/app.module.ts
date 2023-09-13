import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/auth/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TitleComponent } from './shared/title/title.component';
import { RegisterComponent } from './core/components/auth/register/register.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TitleComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
