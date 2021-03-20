import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './functionalities/contacto/contacto.component';
import { GaleriaComponent } from './functionalities/galeria/galeria.component';
import { HomeComponent } from './functionalities/home/home.component';
import { QuienesSomosComponent } from './functionalities/quienes-somos/quienes-somos.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'quienes-somos', component: QuienesSomosComponent
  }
  // {
  //   path: 'galeria', component: GaleriaComponent
  // },
  // {
  //   path: 'contacto', component: ContactoComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
