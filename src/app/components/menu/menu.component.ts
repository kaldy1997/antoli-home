import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  pageActive: string;

  constructor(
    router: Router
  ) {
    router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.pageActive = event.url;
          console.log('clau is event', event, event.url);
        }
    });
  }

  ngOnInit(): void {
  }

}
