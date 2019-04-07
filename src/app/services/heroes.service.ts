import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
// import { map } from 'rxjs';
// import 'rxjs/add/operator/map';
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesURL = 'https://heroes-62867.firebaseio.com/heroes.json';

  constructor( private http: HttpClient ) { }

  nuevoHeroe( heroe: Heroe ) {

    const body = JSON.stringify( heroe );
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Origin' : '*'
    });

    return this.http.post( this.heroesURL, body, { headers })
      .pipe(
        map((res: any) => {
          // console.log(res);
          return res.json;
        }),
        catchError(<T>(error: any, result?: T) => {
          console.log(error);
          return of(result as T);
        })
      );

  }

}
