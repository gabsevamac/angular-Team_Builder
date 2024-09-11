import { Component } from '@angular/core';
import { AreaTesteComponent } from '../../components/area-teste/area-teste.component';
import { PokecardComponent } from '../../components/pokecard/pokecard.component';
import { InfopopupComponent } from '../../components/infopopup/infopopup.component';
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


  ngOnInit(){
    window.addEventListener('scroll', async function(event){
      const domElement = this.document.querySelector("navbar")
      const visible = new Promise(resolve => {
        const o = new IntersectionObserver(([entry]) => {
          resolve(entry.intersectionRatio === 1);
          o.disconnect();
        })
        o.observe(<Element>domElement)
      })
      if(await visible == false){
        domElement?.setAttribute("class", "fixed")
      }
    })
  }
}
