import { NgModule } from '@angular/core';
import { Main } from './main';
import { Aside } from '../layots/aside/aside';
import { AsideModule } from '../layots/aside/aside.module';

@NgModule({
  imports: [AsideModule],
  exports: [Main],
  declarations: [Main],
  providers: [],
})
export class MainModule {}
