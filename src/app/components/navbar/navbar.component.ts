import { Component, Input } from '@angular/core';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Input()
  public hasSearch: boolean;


  
  constructor(){
    this.hasSearch = false;
  }

  test(event:Event){
    event?.preventDefault()
    alert("Clicked!")
  }
  seach(){
    alert("Searching function")
  }
}
