import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerLoaderService {

  public visibility: boolean

  constructor() { 
    this.visibility = false
  }

  public show(){
    this.visibility = true
  }
  public hide(){
    this.visibility = false;
  }
}
