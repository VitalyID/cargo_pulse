import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Header } from './header';

export const routes: Routes = [
  {
    path: '',
    component: Header,
  },
];

NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
});

export class HeaderRoutingModule {}
