import { Component,CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { ImagenPipe } from '../../pipes/imagen.pipe';
import { CommonModule } from '@angular/common';
import { ParesPipe } from '../../pipes/pares.pipe';
import { DetalleComponent } from '../detalle/detalle.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
   imports: [
    CommonModule,
    ImagenPipe,
    ParesPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SlideshowParesComponent  implements OnInit {


  @Input() peliculas: Pelicula[] = [];
  @Output() cargarMas = new EventEmitter();

    slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10
  };

  constructor(  private modalCtrl: ModalController) { }

  ngOnInit() {
  }
   onClick() {
    this.cargarMas.emit();
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
