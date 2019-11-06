import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as PetsActions from './pet.actions';
import {Observable} from 'rxjs';
import * as PetSelectors from './pet.selectors';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private store: Store<Pets>) { }

  public loadPets() {
    this.store.dispatch(PetsActions.loadPets());
  }

  public getPetList$(): Observable<Pet[]> {
    return this.store.select(PetSelectors.getPetsList);
  }

}
