import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {ZorroModule} from '../zorro/zorro.module';
import { FooterComponent } from './footer/footer.component';
import {PipesModule} from '../pipes/pipes.module';

@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent
  ],
  exports: [
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    ZorroModule
  ]
})
export class SharedModule { }
