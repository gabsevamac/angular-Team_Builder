import { Component, HostBinding, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'infopopup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infopopup.component.html',
  styleUrl: './infopopup.component.css',
})
export class InfopopupComponent {
  @Input() pokemonDetails: any

  ngOnInit(){
    console.log(this.pokemonDetails)
  }
}
