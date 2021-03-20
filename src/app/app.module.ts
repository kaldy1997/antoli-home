import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactoComponent } from './functionalities/contacto/contacto.component';
import { GaleriaComponent } from './functionalities/galeria/galeria.component';
import { HomeComponent } from './functionalities/home/home.component';
import { QuienesSomosComponent } from './functionalities/quienes-somos/quienes-somos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    QuienesSomosComponent,
    GaleriaComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
