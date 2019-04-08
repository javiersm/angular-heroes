import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Heroe} from '../interfaces/heroe.interface';
// import { map } from 'rxjs';
// import 'rxjs/add/operator/map';
import {Observable, of} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesURL = 'https://heroes-62867.firebaseio.com/heroes.json';
  heroeURL = 'https://heroes-62867.firebaseio.com';

  constructor(private http: HttpClient) {
  }

  nuevoHeroe(heroe: Heroe) {

    const body = JSON.stringify(heroe);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    return this.http.post<any>(this.heroesURL, body, {headers});
    // .pipe(
    //   map((res: any) => {
    //     console.log('heroe serviceee');
    //     console.log(res.json);
    //     return res.json;
    //   }),
    //   catchError(<T>(error: any, result?: T) => {
    //     console.log(error);
    //     return of(result as T);
    //   })
    // );

  }

  actualizarHeroe(heroe: Heroe, key$: string) {

    const body = JSON.stringify(heroe);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const url = `${ this.heroeURL}/${ key$ }.json`;
    return this.http.put<any>(url, body, {headers});
  }

  getHeroe(key$: string) {
    const url = `${ this.heroeURL }/${ key$ }.json`;
    return this.http.get<any>(url);
      // .pipe( map(heroe => {
      // console.log('Return de getHeroe service');
      // console.log(heroe);
      // }));
  }

  getHeroes() {
    return this.http.get<any>(this.heroesURL);
    // .pipe( map(heroe => {
    // console.log('Return de getHeroe service');
    // console.log(heroe);
    // }));
  }

  borrarHeroe( key$: string) {

    const url = `${ this.heroeURL }/heroes/${ key$ }.json`;

    return this.http.delete<any>(url);
    // .pipe( map(heroe => {
    // console.log('Return de getHeroe service');
    // console.log(heroe);
    // }));
  }


}
