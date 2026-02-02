import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeList } from './home-list';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeList
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeList
      }
    ])
  ]
})
export class HomeListModule { }
