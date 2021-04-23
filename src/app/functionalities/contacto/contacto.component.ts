import { Component, HostListener, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html'
})
export class ContactoComponent implements OnInit {
  
  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.isMobile = window.innerWidth < 900;
  }
  
  public isMobile
  private mapa: Mapboxgl.Map;
  private readonly COORDENADAS = [-0.5171, 38.78025];
  
  constructor() { }

  ngOnInit(): void {
    this.setMap();
  }

  public openWindow(): void {
    window.open('http://www.costablanca.org/Esp/Descubre_la_Costa_Blanca/La_Costa_Blanca/Paginas/Agres.aspx', '_blank');
  }

  public openMap(): void {
    window.open('https://www.google.es/maps/place/Casa+Rural+Antol%C3%AD/@38.7802115,-0.5169386,18z/data=!4m13!1m7!3m6!1s0xd61848640e61b75:0xe5d3f0e51621975f!2s03837+Agres,+Alicante!3b1!8m2!3d38.7808327!4d-0.5157406!3m4!1s0x0:0x609d57bbb09a5c71!8m2!3d38.78058!4d-0.51739', '_blank');
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
  }
}
