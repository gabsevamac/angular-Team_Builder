import { Component } from '@angular/core';
import { AreaTesteComponent } from '../../components/area-teste/area-teste.component';
import { PokecardComponent } from '../../components/pokecard/pokecard.component';
import { InfopopupComponent } from '../../components/infopopup/infopopup.component';
import { NavbarStateService } from '../../services/navbar-state.service';
import { PokedexComponent } from "../pokedex/pokedex.component";
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AreaTesteComponent, PokecardComponent, InfopopupComponent, PokedexComponent, NavbarComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private navBarState: NavbarStateService){
    
  }
  
  ngOnInit(){
    this.navBarState.changeState()
  }
}
