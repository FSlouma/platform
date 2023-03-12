import { Component } from '@angular/core';
import { GeneralServiceService } from 'src/app/services/general-service.service';
import { SharingDataService } from 'src/app/services/sharing-data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  modeCollapsedinMobile = { mode_index: 4, mode_value: 'Mode colapsed mobile' }
  constructor(public generalService: GeneralServiceService, private sharingData: SharingDataService) { }
  publishModeLayout(mode) {
    this.sharingData.putdataToStream(mode)
    console.log(mode);
    
  }
}

