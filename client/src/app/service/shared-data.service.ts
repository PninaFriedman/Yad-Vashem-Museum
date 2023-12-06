
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class SharedDataService {
  private numberSource = new BehaviorSubject<number>(1);
  public data$ = this.numberSource.asObservable();

  private timeSource = new BehaviorSubject<string>("");
  public anotherdata$ = this.timeSource.asObservable();

  updateData(newNumber: number, newTime: string) {
    this.numberSource.next(newNumber);
    this.timeSource.next(newTime);
  }
}