import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { ContactUsComponent } from './page/contact-us/contact-us.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about_us', component: AboutUsComponent },
  { path: 'contact_us', component: ContactUsComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
