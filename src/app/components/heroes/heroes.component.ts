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
                          this.heroes = heroes;
                      });
  }

  ngOnInit() {
  }


  borrarHeroe(key$: string) {
    this.heroeService.borrarHeroe(key$)
      .subscribe( respuesta => {
        console.log('borrando heroe respuesta');

        if(respuesta) {
          console.log(respuesta);
        }else{
          // todo bien
          delete this.heroes[key$];
        }


      });
  }



}
