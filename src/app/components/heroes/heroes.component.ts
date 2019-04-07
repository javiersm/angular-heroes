import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];

  constructor(private heroeService: HeroesService) {
    this.heroeService.getHeroes()
                      .subscribe( heroes => {
                          console.log('pintar todos los heroes');
                          console.log(heroes);
                      });
  }

  ngOnInit() {
  }

}
