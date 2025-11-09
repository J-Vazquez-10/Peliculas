import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { IonContent, IonGrid } from "@ionic/angular/standalone";
import { Cast, PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { ImagenPipe } from '../../pipes/imagen.pipe';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { DatalocalService } from 'src/app/services/data-local.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    ImagenPipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetalleComponent implements OnInit {

  @Input() id: string = '';

  pelicula: PeliculaDetalle = {};
  actores: Cast[] = [];
  oculto = 150;
  estrella = 'star-outline';

  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: 0
  };

  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController,
    private dataLocal: DatalocalService
  ) { }

  ngOnInit() {
    this.dataLocal.existePelicula(this.id)
      .then((existe: boolean) => {
        this.estrella = existe ? 'star' : 'star-outline';
      });

    this.moviesService.getPeliculaDetalle(this.id)
      .subscribe((resp: any) => {
        console.log(resp);
        this.pelicula = resp;
      });

    this.moviesService.getActoresPelicula(this.id)
      .subscribe((resp: any) => {
        console.log(resp);
        this.actores = resp.cast;
      });
  }


  regresar() {
    this.modalCtrl.dismiss();
  }


  favorito() {
    this.dataLocal.guardarPelicula(this.pelicula)
      .then((existe: boolean) => {
        this.estrella = existe ? 'star' : 'star-outline';
      });
  }
}
