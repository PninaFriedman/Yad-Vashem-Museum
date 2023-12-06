import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-number-of-visitors',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './number-of-visitors.component.html',
})
export class NumberOfVisitorsComponent {
  number: number = 1;

  constructor(private sharedDataService: SharedDataService) { }
  updateData() {
    this.sharedDataService.updateData(this.number, "");
  }

  changeAmount(flag: boolean) {
    if (flag) {
      this.number++;
    }
    else {
      if (this.number > 0)
        this.number--;
    }
    this.sharedDataService.updateData(this.number, "");
  }
}
