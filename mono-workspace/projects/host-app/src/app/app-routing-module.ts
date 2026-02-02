import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Header } from './header/header';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  { path: 'header', component:Header},
  {
    path: 'mfe',
    loadChildren: () =>
    loadRemoteModule({
      type: 'module', 
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './HomeListModule' // Ensure this matches the 'exposes' key in Remote
    }).then(m => m.HomeListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
