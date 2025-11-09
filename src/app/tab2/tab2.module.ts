import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';


import { Tab2PageRoutingModule } from './tab2-routing.module';


import { PipesModule } from '../pipes/pipes.module';
import { ComponentsModule } from '../components/components-module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    PipesModule,
    FormsModule,
    ComponentsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab2PageModule {}
