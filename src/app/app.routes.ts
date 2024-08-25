import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PoketeamComponent } from './pages/poketeam/poketeam.component';

export const routes: Routes = [
    {path: "", component: HomeComponent, pathMatch: "full"},
    {path: "team", component: PoketeamComponent, pathMatch: "full"}
];
