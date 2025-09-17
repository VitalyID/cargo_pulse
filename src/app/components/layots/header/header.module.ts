import { NgModule } from '@angular/core';
import { Header } from './header';
import { SvgSprite } from 'src/app/shared/components/svg-sprite/svg-sprite';

@NgModule({
  imports: [SvgSprite],
  exports: [Header],
  declarations: [Header],
  providers: [],
})
export class HeaderModule {}
