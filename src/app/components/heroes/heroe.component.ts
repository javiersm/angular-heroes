import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: any = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  };

  constructor() { }

  ngOnInit() {
  }

}
