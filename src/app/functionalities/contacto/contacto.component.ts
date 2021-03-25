import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html'
})
export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public openWindow(): void {
    window.open('http://www.costablanca.org/Esp/Descubre_la_Costa_Blanca/La_Costa_Blanca/Paginas/Agres.aspx', '_blank');
  }

}
