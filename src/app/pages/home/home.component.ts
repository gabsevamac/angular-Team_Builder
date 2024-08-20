import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AreaTesteComponent } from '../../components/area-teste/area-teste.component';
import { PokecardComponent } from '../../components/pokecard/pokecard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, AreaTesteComponent,PokecardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  

}
