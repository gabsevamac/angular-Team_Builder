import { Component } from '@angular/core';
import { PokecardComponent } from '../../components/pokecard/pokecard.component';
import { NavbarStateService } from '../../services/navbar-state.service';
import { PokeapiService } from '../../services/pokeapi.service';
import { ApiThreatmentService } from '../../services/api-threatment.service';

@Component({
  selector: 'pokedex',
  standalone: true,
  imports: [PokecardComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {

  protected pokemonList: Array<any> = []
  constructor(
    private navBarState: NavbarStateService,
    private apiThreatment: ApiThreatmentService){
    
  }
  
  ngOnInit(){
    this.navBarState.setState(false)
    this.getPokemons()
  }

  private async getPokemons(){
   this.apiThreatment.getAllWithDetails(100, 217)
  }
  private async teste(){
    fetch("https://pokeapi.co/api/v2/pokemon/218")
      .then(response => response.json())
      .then(data => console.log(data))
  }
}
