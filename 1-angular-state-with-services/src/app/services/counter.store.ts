import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class CounterStore {

  private subjectCounter: number = 0;

  private behaviourSubjectCounter: number = 0;

  private _subjectCounter: Subject<number> = new Subject<number>();

  private _behaviorSubjectCounter: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(){
    setInterval(() => {
      this._subjectCounter.next(++this.subjectCounter);
    }, 2000);
    setInterval(() => {
      this._behaviorSubjectCounter.next(++this.behaviourSubjectCounter);
    }, 2000);
  }

  public getSubjectCounter(): Observable<number> {
    return this._subjectCounter.asObservable();
  }

  public getBehaviorSubjectCounter(): Observable<number> {
    return this._behaviorSubjectCounter.asObservable();
  }

}
