import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private links = {
    "general": "https://pokeapi.co/api/v2/pokemon",
    "generations": "https://pokeapi.co/api/v2/generation/",
    "pokesearch": "https://pokeapi.co/api/v2/pokemon/",
  }

  constructor() {
  }

  private getAllPokemon(){
  }


  public async getGames(){
    const games: Array<Object> = []
    const data = await fetch((env as any).urls.gamesGroup)
      .then(response => response.json())
      .catch(err => {
        console.error("Error fetching data: " + err);
      throw err;
      })

    await fetch(data.next)
      .then(response=> response.json())
      .then(info => {
        info.results.forEach((item:any) =>{
          data.results.push(item)
        })
      })
    
    data.results.forEach(async (element:any) => {
      let details = await this.getGameDetails(element.url)
      if (Object.keys(details.pokedexes).length > 0){
        games.push(details)
      }
    });

    return games
  }


  private async getGameDetails(url: string){
    return await fetch(url)
      .then(response=> response.json())
  }

  public getPokedex(gameUrl: string){
    return fetch(gameUrl)
      .then(response => response.json())
  }
  public async getAllPokemons(limit: number, offset: number){
    return await fetch(`${this.links.general}?limit=${limit}&offset=${offset}`)
      .then(response => response.json())
  }
  public getPokemonDetailsByName(pokemon: string){
    return fetch(this.links.pokesearch + pokemon)
      .then(response => response.json())
  }
  public async getPokemonDetailsByUrl(url: string){
    return await fetch(url)
      .then(response => response.json())
  }
  
}
