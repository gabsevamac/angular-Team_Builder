import { Component } from '@angular/core';
import {CookieService} from 'ngx-cookie-service'
@Component({
  selector: 'app-area-teste',
  standalone: true,
  imports: [],
  templateUrl: './area-teste.component.html',
  styleUrl: './area-teste.component.css'
})
export class AreaTesteComponent {
  constructor(private cookie: CookieService){}

  
}
