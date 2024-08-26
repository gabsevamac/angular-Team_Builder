import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PoketeamComponent } from './pages/poketeam/poketeam.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';

export const routes: Routes = [
    {path: "", component: HomeComponent, children:
        [
            {path: "", component: PokedexComponent, pathMatch: "full"},
            {path: "poketeam", component: PoketeamComponent, pathMatch: "full"}
        ]
    },
    
];
