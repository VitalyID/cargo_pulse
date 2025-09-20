import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgSprite } from 'src/app/shared/components/svg-sprite/svg-sprite';
import { AsideModule } from '../layots/aside/aside.module';
import { HeaderModule } from '../layots/header/header.module';
import { Main } from './main';

@NgModule({
  imports: [AsideModule, HeaderModule, CommonModule, SvgSprite],
  exports: [Main],
  declarations: [Main],
  providers: [],
})
export class MainModule {}
