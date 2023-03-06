import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { AfterViewInit, Component, HostListener, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-sid-bar',
  templateUrl: './sid-bar.component.html',
  styleUrls: ['./sid-bar.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms',
          style({ opacity: 1 })
        )
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('350ms',
          style({ opacity: 0 })
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0' }),
            style({ transform: 'rotate(2turn)', offset: '1' })
          ])
        )
      ])
    ])
  ]
})
export class SidBarComponent implements OnInit {
  Menu=[]
  MainMenu
  collapsed = true;
  screenWidth = 0;
  isMobileMode = false
  modeSelected
  isClickedItem = false
  data = [{
    routeLink: 'home',
    icon: 'fal fa-home',
    label: 'Home'
  }]
  constructor() {
    this.getInitMenu()
  }
  ngOnInit(): void {
    this.onResize(Event)
    this.screenWidth = window.innerWidth;

  }
  getInitMenu(param?) {
    this.MainMenu = this.data
    this.MainMenu.forEach(element => {
      let obj = {
        routeLink: element.For_url ? element.For_url : element.for_url1,
        icon: element.icon ? element.icon : 'fal fa-file-exclamation',
        label: element.For_Item,
        parent: element.For_Parent ?  element.For_Parent : null
      }

      this.Menu.push(obj)
    });
    let tabIndex = []
    console.log(this.Menu);

    this.Menu.forEach((element, i) => {
      if (element.parent != null && this.Menu.find((e) => e.label == element.parent)) {
        tabIndex.push({ index: i, name: element.label })
        this.Menu.find((e) => e.label == element.parent).items.push(element);
      }
      else if (element.icon == null) {
        tabIndex.push({ index: i, name: element.label, parent: element.parent })
      }
    });
    let j = 0
    tabIndex.forEach(element => {
      if (element.name == this.Menu[element.index - j].label) {
        if (element.parent) {
          console.log(1);
          this.Menu.find((e) => e.label == element.parent).items.push(element);
          this.Menu.splice(element.index - j, 1)
        }
        else {
          this.Menu.splice(element.index - j, 1)
          j++
        }
      }
    })
    console.log(this.Menu);

    if (param)
      //////old function : works on first level only
      //this.Menu = this.Menu.filter((d) => d.label.toLocaleLowerCase().includes(param.trim().toLocaleLowerCase()));
      this.Menu = this.filtrer(this.flatten(this.Menu), param)

    this.MenuToSend = this.Menu
    // this.sharingData.putdataToStream(this.MenuToSend)
  }
  MenuToSend
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;

    if (this.screenWidth <= 768) {
      if (this.screenWidth <= 640) {
        this.modeSelected = 2
        this.isMobileMode = true
      }
      else {
        this.isMobileMode = false
        this.modeSelected = 1
      }

      this.collapsed = false;

    }
  }
  closeSidenav(): void {
    this.collapsed = false;

    if (this.modeSelected == 4)
      this.modeSelected = 2
    else
      this.modeSelected = 1
    if (!this.collapsed)
      this.isClickedItem = false
    else
      this.isClickedItem = true
    // this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  closeSublevelWheneNotCollapsed() {
    this.isClickedItem = false
  }
  filterValue
  applyFilter(event: Event) {
    console.log(event);
    if (event['key'] == "Backspace") {
      this.Menu = []
      this.MainMenu = []
      this.filterValue = (event.target as HTMLInputElement).value;
      // this.getInitMenu(this.filterValue)
      // this.filterValue = (event.target as HTMLInputElement).value;
      // console.log(this.filterValue);
      // this.Menu = this.Menu.filter((d) => d.label.toLocaleLowerCase().includes(this.filterValue.trim().toLocaleLowerCase()));
    }
    this.filterValue = (event.target as HTMLInputElement).value;
    console.log(this.filterValue);

    //////old function : works on first level only
    //this.Menu = this.Menu.filter((d) => d.label.toLocaleLowerCase().includes(this.filterValue.trim().toLocaleLowerCase()));

    this.Menu = this.filtrer(this.flatten(this.Menu), this.filterValue)
  }
  filtrer(items, filterValue) {
    items = items.filter((d) => d.label.toLocaleLowerCase().includes(filterValue.trim().toLocaleLowerCase()));
    return items
  }
  flatten(items) {
    const flat = [];

    items.forEach((item) => {
      if (item.items?.length > 0) {
        flat.push(...this.flatten(item.items));
      } else {
        flat.push(item);
      }
    });
    return flat;
  }
  handleClick(): void {
    // this.closeSublevelWhenNotCollapsed(!this.isClickedItem)
    // if (!this.multiple) {
    //   for (let modelItem of this.Menu) {
    //     if (item !== modelItem && modelItem.expanded)
    //       modelItem.expanded = false
    //   }
    // }
    // item.expanded = !item.expanded

  }
  clickedOutside(): void {
    this.isClickedItem = false;
  }
}