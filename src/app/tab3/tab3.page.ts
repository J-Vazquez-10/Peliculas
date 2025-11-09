import { Component } from '@angular/core';
import { Genre, PeliculaDetalle } from '../interfaces/interfaces';
import { DatalocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  peliculas: PeliculaDetalle[] = [];
  generos: Genre[] = [];
  favoritoGenero: any[] = [];

  constructor(
    private dataLocal: DatalocalService,
    private moviesService: MoviesService
  ) { }

  async ionViewWillEnter() {
    this.peliculas = await this.dataLocal.cargarFavoritos();
    this.generos = await this.moviesService.cargarGeneros();

    console.log(' Películas favoritas:', this.peliculas);
    console.log(' Géneros disponibles:', this.generos);

    this.pelisPorGenero(this.generos, this.peliculas);
  }

  pelisPorGenero(generos: Genre[], peliculas: PeliculaDetalle[]) {
    this.favoritoGenero = generos
      .map(genero => ({
        genero: genero.name,
        pelis: peliculas.filter(peli =>
          peli.genres?.some(genre => genre.id === genero.id) || false
        )
      }))
      .filter(item => item.pelis.length > 0);

    console.log('Favoritos organizados por género:', this.favoritoGenero);
  }
}
