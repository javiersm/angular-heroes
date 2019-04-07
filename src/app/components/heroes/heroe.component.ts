import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  // forma: Form;

  heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  };

  constructor( private heroeService: HeroesService ) { }

  ngOnInit() {
  }

  guardar() {
    console.log('guardar');

    this.heroeService.nuevoHeroe(this.heroe)
                      .subscribe( data => {
                        console.log(data);
                      });
  }

}
