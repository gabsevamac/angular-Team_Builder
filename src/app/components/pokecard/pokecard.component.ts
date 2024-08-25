import { NgClass } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'pokecard',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pokecard.component.html',
  styleUrl: './pokecard.component.css'
})
export class PokecardComponent {
  @Input()
  public isEmpty;
 
  constructor(){
   this.isEmpty = false;
  }
 
}
