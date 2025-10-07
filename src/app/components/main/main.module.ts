import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { SvgSprite } from 'src/app/shared/components/svg-sprite/svg-sprite';
import { AsideModule } from '../layots/aside/aside.module';
import { HeaderModule } from '../layots/header/header.module';
import { Main } from './main';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  imports: [
    AsideModule,
    HeaderModule,
    CommonModule,
    SvgSprite,
    RouterOutlet,
    RouterModule,
    MainRoutingModule,
  ],
  exports: [Main],
  declarations: [Main],
  providers: [],
})
export class MainModule {}
