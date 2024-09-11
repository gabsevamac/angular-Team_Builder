import { Component} from '@angular/core';
import { PokecardComponent } from '../../components/pokecard/pokecard.component';
import { ActivatedRoute } from '@angular/router';
import { NavbarStateService } from '../../services/navbar-state.service';
import { PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-poketeam',
  standalone: true,
  imports: [PokecardComponent],
  templateUrl: './poketeam.component.html',
  styleUrl: './poketeam.component.css'
})
export class PoketeamComponent {

  protected teste: Array<string> = []
  constructor(private navbarState: NavbarStateService, private api: PokeapiService){

  }
  ngOnInit(){
    this.navbarState.setState(true)
    console.log(this.navbarState.getState())
    window.addEventListener('scroll', async function(event){
      const domElement = this.document.querySelector("#upside")
      const visible = new Promise(resolve => { //https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
        const o = new IntersectionObserver(([entry]) => {
          resolve(entry.intersectionRatio === 1);
          o.disconnect();
        });
        o.observe(<Element>domElement)
      })
      if(await visible == false){
        domElement?.setAttribute("class", "fixed")
      }
    })
  }

  
}
