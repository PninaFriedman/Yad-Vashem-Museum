import { Component } from '@angular/core';
import { NumberOfVisitorsComponent } from '../number-of-visitors/number-of-visitors.component';
import { TimesTableComponent } from '../times-table/times-table.component';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  providers: [DatePipe],
  imports: [NumberOfVisitorsComponent, TimesTableComponent, MatNativeDateModule],
  templateUrl: './content.component.html',
})

export class ContentComponent {
  currentDate: string | null;

  constructor(private datePipe: DatePipe) {
    this.currentDate = this.datePipe.transform(new Date(), 'fullDate');
  }
}




