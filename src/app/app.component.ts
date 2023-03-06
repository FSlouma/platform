import { Component } from '@angular/core';
import { GeneralServiceService } from './services/general-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platform';
  constructor(public generalService :GeneralServiceService ){}
}
