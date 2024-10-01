import { Component, inject, ViewContainerRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfopopupComponent } from '../infopopup/infopopup.component';
import { Overlay, OverlayConfig, OverlayOutsideClickDispatcher, OverlayRef } from '@angular/cdk/overlay';
import { CdkPortal, ComponentPortal, PortalModule } from '@angular/cdk/portal';
import {OverlayModule} from '@angular/cdk/overlay';


export interface DialogData{

}


@Component({
  selector: 'app-area-teste',
  standalone: true,
  imports: [CommonModule, InfopopupComponent, OverlayModule, PortalModule],
  templateUrl: './area-teste.component.html',
  styleUrl: './area-teste.component.css'
})
export class AreaTesteComponent{

  
  @ViewChild(CdkPortal) portal !: CdkPortal

  constructor(private overlay: Overlay, private overlayD: OverlayOutsideClickDispatcher){
  }

  protected teste(){
    const config = new OverlayConfig({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true
    })
    const reference = this.overlay.create(config)
    reference.backdropClick().subscribe(()=> reference.detach());
    reference.attach(this.portal);
  }

}
