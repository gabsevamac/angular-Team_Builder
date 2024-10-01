import { NgClass, NgOptimizedImage} from '@angular/common';
import { Component, Input, ViewChild} from '@angular/core';
import { InfopopupComponent } from '../infopopup/infopopup.component';
import { Overlay, OverlayConfig, OverlayOutsideClickDispatcher } from '@angular/cdk/overlay';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';

@Component({
  selector: 'pokecard',
  standalone: true,
  imports: [NgClass,NgOptimizedImage,InfopopupComponent, PortalModule],
  templateUrl: './pokecard.component.html',
  styleUrl: './pokecard.component.css'
})


export class PokecardComponent {
  @Input()
  public isEmpty = true;
  @Input()
  pokeinfo!: any;
  protected pokeModel: any
  protected isLoaded: boolean = false
  @ViewChild(CdkPortal) portal !: CdkPortal
  
  constructor(private overlay: Overlay){
  }

  ngOnInit(){
    if(this.pokeinfo != undefined || null){
      this.isEmpty = false
    }
    this.pokeModel = {
      id: `N°${"0".repeat(4 - this.pokeinfo.id.toString().length)}${this.pokeinfo.id}`,
      name: this.pokeinfo.name,
      types: this.pokeinfo.types,
      img: this.pokeinfo.sprites.other['official-artwork']['front_default']
    }
  }

  openModal(){
    const config = new OverlayConfig({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true
    });
    const overlayRef =this.overlay.create(config);
    overlayRef.backdropClick().subscribe(() => overlayRef.detach());
    overlayRef.attach(this.portal)
  }
}
