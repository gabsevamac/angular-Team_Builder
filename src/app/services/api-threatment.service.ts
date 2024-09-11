import { Injectable } from '@angular/core';
import { PokeapiService } from './pokeapi.service';

@Injectable({
  providedIn: 'root'
})
export class ApiThreatmentService {

  constructor(private api: PokeapiService) {

  }

  private async getAllPokemons(limit: number, offset: number){
    let data = await this.api.getAllPokemons(limit, offset)
    return data.results
  }
  public getAllWithDetails(limit: number, offset: number){
    this.getAllPokemons(limit, offset)
      .then(resp => {
        resp.forEach((element:any) => {
          this.api.getPokemonDetailsByUrl(element.url)
            .then(data=> console.log(data))
        });
      })
  }

/*     public  getAllPokemons(limit: number, offset: number){
      const pokeList: any[] = []
      let temp =  this.api.getAllPokemons(limit,offset)
      for(var i = 0; i < temp.results.length; i++){
        pokeList.push( this.api.getPokemonDetailsByUrl(temp.results[i].url))
      }
      console.log(pokeList)
      return pokeList
    } */

}
