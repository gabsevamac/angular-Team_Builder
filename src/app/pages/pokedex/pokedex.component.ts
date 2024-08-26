import { Component } from '@angular/core';
import { PokecardComponent } from '../../components/pokecard/pokecard.component';
import { NavbarStateService } from '../../services/navbar-state.service';

@Component({
  selector: 'pokedex',
  standalone: true,
  imports: [PokecardComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {

  constructor(private navBarState: NavbarStateService){
    
  }
  
  ngOnInit(){
    this.navBarState.changeState()
  }
}
