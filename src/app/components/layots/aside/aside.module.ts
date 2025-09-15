import { NgModule } from '@angular/core';
import { Aside } from './aside';
import { Navigation } from 'src/app/shared/components/navigation/navigation';

@NgModule({
  imports: [Navigation],
  exports: [Aside],
  declarations: [Aside],
  providers: [],
})
export class AsideModule {}
