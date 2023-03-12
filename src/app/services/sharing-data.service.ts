import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private dataStream = new BehaviorSubject("")
  constructor() { }

  getDataStream(){
    return this.dataStream.asObservable()
  }

  putdataToStream(data){
    this.dataStream.next(data)
  }



}
