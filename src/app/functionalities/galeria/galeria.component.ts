import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html'
})
export class GaleriaComponent implements OnInit {

  public imagesUrl: string[];
  public showModal: boolean;
  public urlImgSelected: string;
  
  private index: number;

  constructor() {
    this.imagesUrl = [
      'assets/img/galeria_1.jpg',
      'assets/img/galeria_2.jpg',
      'assets/img/galeria_3.jpg',
      'assets/img/galeria_4.jpg',
      'assets/img/galeria_5.jpg',
      'assets/img/galeria_6.jpg',
      'assets/img/galeria_7.jpg',
      'assets/img/galeria_8.jpg',
      'assets/img/galeria_9.jpg',
      'assets/img/galeria_10.jpg',
      'assets/img/galeria_11.jpg',
      'assets/img/galeria_12.jpg'
    ];
  }

  ngOnInit(): void {
  }

  public onClickImg(index: number): void {
    this.index = index;
    this.urlImgSelected = this.imagesUrl[index];
    this.showModal = true;
  }

  public closeImg(): void {
    this.showModal = false;
  }

  public prevImg(): void {
    if (this.index === 0) {
      this.index = this.imagesUrl.length - 1;
    } else {
      this.index--;
    }
    this.changeImage();
  }

  public nextImg(): void {
    if (this.index === this.imagesUrl.length - 1) {
      this.index = 0;
    } else {
      this.index++;
    }
    this.changeImage();
  }

  private changeImage(): void {
    this.urlImgSelected = this.imagesUrl[this.index];
  }
}
