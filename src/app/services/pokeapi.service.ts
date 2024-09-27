import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable, switchMap, tap} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private links = {
    "general": "https://pokeapi.co/api/v2/pokemon",
    "generations": "https://pokeapi.co/api/v2/generation/",
    "pokesearch": "https://pokeapi.co/api/v2/pokemon/",
  }

  constructor(private http: HttpClient){}


  public getAllPokemons(offset:number):Observable<any>{
    const url = `${this.links.general}/?offset=${offset}&limit=36`
    return this.http.get<any>(url).pipe(
      switchMap(response => {
        const requests = response.results.map((pokemon: any) =>
          this.http.get<any>(pokemon.url.substring(0,pokemon.url.length - 1)).pipe(
            map(info => ({ ...pokemon, info}))
          )
      );
      
      return forkJoin(requests)
      })
    )
  }

  private getPokemonsInfo(url: string){
    return this.http.get<any>(url).pipe(
      map(response => response)
    ).subscribe(response=>console.log(response))
  }


}