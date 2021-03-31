import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html'
})
export class ContactoComponent implements OnInit {

  private mapa: Mapboxgl.Map;

  constructor() { }

  ngOnInit(): void {
    Mapboxgl.accessToken = environment.mapboxKey;
    this.mapa = new Mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-0.51548, 38.779445],
      zoom: 18
    });

    const marker1 = new Mapboxgl.Marker()
    .setLngLat([-0.51548, 38.779445])
    .addTo(this.mapa);
  }

  public openWindow(): void {
    window.open('http://www.costablanca.org/Esp/Descubre_la_Costa_Blanca/La_Costa_Blanca/Paginas/Agres.aspx', '_blank');
  }

}
