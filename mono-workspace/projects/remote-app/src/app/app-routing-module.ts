import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeList } from './home-list/home-list';

const routes: Routes = [
  {path: '', redirectTo: '/home-list', pathMatch: 'full' },
  {path: 'home-list', component: HomeList}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
