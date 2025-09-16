import { NgModule } from '@angular/core';
import { Main } from './main';
import { Aside } from '../layots/aside/aside';
import { AsideModule } from '../layots/aside/aside.module';
import { HeaderModule } from '../layots/header/header.module';

@NgModule({
  imports: [AsideModule, HeaderModule],
  exports: [Main],
  declarations: [Main],
  providers: [],
})
export class MainModule {}
