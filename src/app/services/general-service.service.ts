import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {

  constructor() { }
  getWidth(): number {
    return window.innerWidth;
  }
  isVersionPortable(nimWidth: number): boolean {
    if (this.getWidth() < nimWidth) return true;
    else return false;
  }
}
