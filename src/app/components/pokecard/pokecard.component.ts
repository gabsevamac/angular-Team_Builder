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
  public isEmpty = true;
  @Input()
  pokeinfo!: any;
  protected pokeModel: any

  
  constructor(){
  }

  ngOnInit(){
    console.log(this.pokeinfo)
    if(this.pokeinfo != undefined || null){
      this.isEmpty = false
    }
    this.pokeModel = {
      id: `N°${"0".repeat(4 - this.pokeinfo.id.toString().length)}${this.pokeinfo.id}`,
      name: this.pokeinfo.name,
      types: this.pokeinfo.types,
      img: ""
    }
  }
}
