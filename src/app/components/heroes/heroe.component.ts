import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService} from '../../services/heroes.service';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  // forma: Form;

  private heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  };

  nuevo = false;
  id: string;

  constructor( private heroeService: HeroesService,
               private router: Router,
               private activatedRoute: ActivatedRoute) {

    // Si la url tiene el parametro de un heroe me descargo la info del heroe del servicio
    this.activatedRoute.params.subscribe(
      parametros => {
          console.log('parametros get ');
          console.log(parametros);

          this.id = parametros.id;

          if ( this.id !== 'nuevo') {
            this.heroeService.getHeroe( this.id )
              .subscribe( heroe => {
                this.heroe = heroe;
                // console.log('me ha llegado este heroe');
                // console.log(heroe);
              });
          }
      });

  }

  ngOnInit() {
  }

  guardar() {

    if ( this.id === 'nuevo' ) {

      // insertar heroe
      this.heroeService.nuevoHeroe(this.heroe)
        .subscribe(data => {
            console.log('guardarrrr');
            console.log(data);
            this.router.navigate(['/heroe', data.name]);
          },
          error => console.error(error));

    } else {
      // actualizar
      this.heroeService.actualizarHeroe(this.heroe, this.id)
        .subscribe(data => {
            console.log('actualizar');
            console.log(data);

            this.router.navigate(['/heroe', data.name]);
          },
          error => console.error(error));
    }
  }

  agregarNuevo(forma: NgForm) {
    this.router.navigate(['/heroe', 'nuevo']);

    forma.reset({
      casa: 'Marvel'
    });
  }


}
