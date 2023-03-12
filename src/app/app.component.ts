import { Component, HostListener } from '@angular/core';
import { GeneralServiceService } from './services/general-service.service';
import { SharingDataService } from './services/sharing-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platform';
  constructor(public generalService: GeneralServiceService) { 
    this.isVersionPortable()
  }
  showSide = true
  isVersionPortable() {
    if (this.generalService.isVersionPortable(913))
      this.showSide = false
    else
      this.showSide = true
    console.log(this.showSide);

  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {

    if (event.target.innerWidth < 913)
      this.showSide = false
    else
      this.showSide = true
  }

}
