import { NgModule } from '@angular/core';
import { Main } from './main';
import { Aside } from '../layots/aside/aside';

@NgModule({
  imports: [Aside],
  exports: [Main],
  declarations: [Main],
  providers: [],
})
export class MainModule {}
