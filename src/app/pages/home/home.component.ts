import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AreaTesteComponent } from '../../components/area-teste/area-teste.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, AreaTesteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
