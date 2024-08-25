import { Component} from '@angular/core';
import { PokecardComponent } from '../../components/pokecard/pokecard.component';

@Component({
  selector: 'app-poketeam',
  standalone: true,
  imports: [PokecardComponent],
  templateUrl: './poketeam.component.html',
  styleUrl: './poketeam.component.css'
})
export class PoketeamComponent {

  ngOnInit(){
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
