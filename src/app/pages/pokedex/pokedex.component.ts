import { Component, HostListener } from '@angular/core';
import { PokecardComponent } from '../../components/pokecard/pokecard.component';
import { NavbarStateService } from '../../services/navbar-state.service';
import { PokeapiService } from '../../services/pokeapi.service';
import { EndOfListError } from '../../Exceptions/Exceptions';
import { SpinnerLoaderService } from '../../services/spinner-loader.service';
import { MatProgressSpinner } from '@angular/material/progress-spinner'


@Component({
  selector: 'pokedex',
  standalone: true,
  imports: [PokecardComponent, MatProgressSpinner],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {

  protected pokemonList: Array<any> = [];
  private offset = 0;
  private canFetch: boolean = true
  constructor(
    private navBarState: NavbarStateService,
    private api: PokeapiService,
    public loader: SpinnerLoaderService
  ) {

  }

  ngOnInit() {
    this.navBarState.setState(false)
    this.loadInfo()
    window.addEventListener('scroll', this.onWindowScroll)

  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.onWindowScroll);
  }

  private onWindowScroll = () => { //TODO: LOADING
    const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0; // quantidade de pixels que a janela foi rolada para baixo
    const windowHeight = window.innerHeight;//altura da janela visível (viewport)
    const documentHeight = document.documentElement.scrollHeight //altura total do documento que inclui o conteúdo que pode não estar visível na janela


    if (scrollTop + windowHeight >= documentHeight) {
      this.loadInfo();
    }
  }

  private loadInfo() {
    if(this.canFetch){
      try {
        this.api.getAllPokemons(this.offset).subscribe(
          {
            next: r => {
              console.log(r)
              if (this.pokemonList.length == 0) { this.pokemonList = r }
              else {
                r.forEach((info: any) => {
                  if (info.info.id.toString().length <= 4) {
                    this.pokemonList.push(info)
                  }else{
                    this.canFetch = false
                  }
                });
              }
            },
            complete: () => {
              console.info("Requisição completa")
              this.offset += 36;
            }
          }
        )
      } catch (err) {

      }
    }

  }


}
