import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';
import { FiltroImagenPipe } from 'src/app/pipes/filtro-imagen-pipe';
import { ImagenPipe } from 'src/app/pipes/imagen.pipe';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    ImagenPipe,
    FiltroImagenPipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() peliculas: any[] = [];

   slideOpts = {
    slidesPerView: 1.3,
    freeMode: true
  };

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  async verDetalle( id: string ) {

    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();

  }

}
