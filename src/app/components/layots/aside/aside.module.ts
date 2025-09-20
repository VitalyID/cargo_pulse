import { NgModule } from '@angular/core';
import { Navigation } from 'src/app/shared/components/navigation/navigation.component';
import { Aside } from './aside';

@NgModule({
  imports: [Navigation],
  exports: [Aside],
  declarations: [Aside],
  providers: [],
})
export class AsideModule {}
