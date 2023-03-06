import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidBarComponent } from './component/sid-bar/sid-bar.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ClickOutsideDirective } from './services/click-outside.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { ContactUsComponent } from './page/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidBarComponent,
    NavBarComponent,
    ClickOutsideDirective,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
