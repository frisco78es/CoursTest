import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteurComponent } from './compteur/compteur.component';

const routes: Routes = [{ path: '', component:  CompteurComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
