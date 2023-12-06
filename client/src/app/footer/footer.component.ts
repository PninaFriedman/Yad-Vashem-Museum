import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './footer.component.html',
})

export class FooterComponent implements OnInit {
  number!: number;
  time!: string;

  invitation() {
    if (this.time == "")
      alert("Please choose a time");
    else
      alert(" ההזמנה ל " + this.number + " אנשים לשעה" + this.time + " נקלטה בהצלחה");
  }

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.data$.subscribe(data => {
      this.number = data;
    });
    this.sharedDataService.anotherdata$.subscribe(data => {
      this.time = data;
    });
  }
}

