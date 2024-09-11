import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PoketeamComponent } from './pages/poketeam/poketeam.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { AreaTesteComponent } from './components/area-teste/area-teste.component';

export const routes: Routes = [
    {path: "", component: HomeComponent, children:
        [
            {path: "", component: PoketeamComponent, pathMatch: "full"},
            {path: "pokedex", component: PokedexComponent, pathMatch: "full"}
        ]
    },
    {path: "teste", component: AreaTesteComponent, pathMatch: "full"}
    
];
