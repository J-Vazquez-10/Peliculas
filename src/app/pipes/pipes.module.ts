import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FiltroImagenPipe } from './filtro-imagen-pipe';
import { ParesPipe } from './pares.pipe';
import { ImagenPipe } from './imagen.pipe';

@NgModule({
  declarations: [

  ],
  exports: [
    ImagenPipe,
    ParesPipe,
    FiltroImagenPipe,
  ],
  imports: [
    CommonModule,
    ImagenPipe,
    ParesPipe,
    FiltroImagenPipe,
  ]
})
export class PipesModule { }
