import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class NavbarStateService {
  protected state: boolean = false;

  getState() :boolean{
    return this.state;
  }

  setState(state: boolean): void{
    this.state = state
  }
  
  changeState(): void{
    this.state = !this.state
  }

}
