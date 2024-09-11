import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarStateService } from '../../services/navbar-state.service';
import { PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{


  constructor(protected state: NavbarStateService){
    
  }

  ngOnInit(){
    
  }


  test(event:Event){
    event?.preventDefault()
    alert("Clicked!")
  }
  seach(){
    alert("Searching function")
  }
}
