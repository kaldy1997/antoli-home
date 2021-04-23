import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html'
})
export class ContactoComponent implements OnInit {

  private mapa: Mapboxgl.Map;
  private readonly COORDENADAS = [-0.5171, 38.78025];

  constructor() { }

  ngOnInit(): void {
    this.setMap();
  }

  public openWindow(): void {
    window.open('http://www.costablanca.org/Esp/Descubre_la_Costa_Blanca/La_Costa_Blanca/Paginas/Agres.aspx', '_blank');
  }

  private setMap(): void {
    Mapboxgl.accessToken = environment.mapboxKey;
    this.mapa = new Mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.COORDENADAS,
      zoom: 18
    });

    new Mapboxgl.Marker().setLngLat(this.COORDENADAS).addTo(this.mapa);
    this.mapa.addControl(new Mapboxgl.NavigationControl());
    this.mapa.addControl(new Mapboxgl.MapboxGeocoder(), 'top-left');
  }

}
