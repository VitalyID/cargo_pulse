import { RouterModule, Routes } from '@angular/router';
import { Analytics } from './analytics';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
  {
    path: '',
    component: Analytics,
  },
];

NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
});
