import { RouterModule, Routes } from '@angular/router';
import { Aside } from './aside';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
  {
    path: '',
    component: Aside,
  },
];

NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
});

export class AsideRoutingModule {}
