import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidBarComponent } from './component/sid-bar/sid-bar.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ClickOutsideDirective } from './services/click-outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidBarComponent,
    NavBarComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
