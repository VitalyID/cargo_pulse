import { CommonModule } from '@angular/common';
import { inject, NgModule } from '@angular/core';
import { AsideModule } from '../layots/aside/aside.module';
import { HeaderModule } from '../layots/header/header.module';
import { Main } from './main';
import { SvgSprite } from 'src/app/shared/components/svg-sprite/svg-sprite';
import { ToggleMenuService } from 'src/app/services/toggleMenu.service';

@NgModule({
  imports: [AsideModule, HeaderModule, CommonModule, SvgSprite],
  exports: [Main],
  declarations: [Main],
  providers: [],
})
export class MainModule {}
