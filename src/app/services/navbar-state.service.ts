import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class NavbarStateService {
  private state: boolean = false;

  getState(){
    return this.state;
  }

  setState(state: boolean){
    this.state = state
  }
  
  changeState(){
    this.state = !this.state
  }

}
