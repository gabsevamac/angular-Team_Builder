import { Component } from '@angular/core';
import { AreaTesteComponent } from '../../components/area-teste/area-teste.component';
import { PokecardComponent } from '../../components/pokecard/pokecard.component';
import { InfopopupComponent } from '../../components/infopopup/infopopup.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AreaTesteComponent,PokecardComponent,InfopopupComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  

}
