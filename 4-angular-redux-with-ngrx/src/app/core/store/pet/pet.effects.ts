import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, concatMap, map} from 'rxjs/operators';
import * as PetActions from './pet.actions';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PetEffects {

  private url = 'http://5d9cfa7666d00400145ca1cc.mockapi.io/mock-data';

  constructor(private actions$: Actions, private http: HttpClient) {}

  public loadPets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PetActions.loadPets),
      concatMap(() =>
        this.http.get<any>(this.url).pipe(
          map(res =>
            PetActions.loadPetsSucess({ pets: res })
          ),
          catchError(err =>
            of(PetActions.loadPetsError({pets: err}))
          )
        )))
  );

}
