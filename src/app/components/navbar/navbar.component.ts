import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarStateService } from '../../services/navbar-state.service';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnChanges{

  @Input()
  public isGameSeach: boolean = this.state.getState();

  constructor(private state: NavbarStateService){
    
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
  }

  ngOnInit(){
    
  }


  test(event:Event){
    event?.preventDefault()
    alert("Clicked!")
  }
  seach(){
    alert("Searching function")
  }
}
