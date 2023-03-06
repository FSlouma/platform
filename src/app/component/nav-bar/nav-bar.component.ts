import { Component } from '@angular/core';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(public generalService: GeneralServiceService) { }
}

