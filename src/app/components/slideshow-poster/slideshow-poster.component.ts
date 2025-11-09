import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { IonCard } from "@ionic/angular/standalone";
import { IonicModule } from '@ionic/angular';
import { ImagenPipe } from '../../pipes/imagen.pipe';
import { CommonModule } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
  imports: [
    CommonModule,
    IonicModule,
    ImagenPipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SlideshowPosterComponent  implements OnInit {

 @Input() peliculas: any[] = [];

    slideOpts = {
    slidesPerView: 3.3,
    freeMode: true
  };

  constructor( private modalCtrl: ModalController) { }

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
