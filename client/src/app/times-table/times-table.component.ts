
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Hour } from '../model/hour.model';
import { HoursService } from '../service/hours.service';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SharedDataService } from '../service/shared-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-times-table',
  standalone: true,
  imports: [MatTabsModule, MatCardModule, MatToolbarModule, MatButtonModule, CommonModule, MatButtonToggleModule],
  templateUrl: './times-table.component.html',
  styleUrl: './times-table.component.css',
})

export class TimesTableComponent {
  //הסבר מפורט בקובץ ההערות של הפרוייקט:)
  data: Hour[] = [
    { "startTime": "8:30", "availablePlaces": 0, "isClosed": false },
    { "startTime": "8:40", "availablePlaces": 10, "isClosed": false },
    { "startTime": "8:50", "availablePlaces": 0, "isClosed": false },
    { "startTime": "9:00", "availablePlaces": 10, "isClosed": false },
    { "startTime": "9:10", "availablePlaces": 60, "isClosed": false },
    { "startTime": "9:20", "availablePlaces": 10, "isClosed": true },
    { "startTime": "9:30", "availablePlaces": 10, "isClosed": false },
    { "startTime": "9:40", "availablePlaces": 80, "isClosed": false },
    { "startTime": "9:50", "availablePlaces": 10, "isClosed": false },
    { "startTime": "10:00", "availablePlaces": 10, "isClosed": false },
    { "startTime": "10:10", "availablePlaces": 70, "isClosed": false },
    { "startTime": "10:20", "availablePlaces": 10, "isClosed": false },
    { "startTime": "10:30", "availablePlaces": 10, "isClosed": true },
    { "startTime": "10:40", "availablePlaces": 0, "isClosed": false },
    { "startTime": "10:50", "availablePlaces": 10, "isClosed": false },
    { "startTime": "11:00", "availablePlaces": 10, "isClosed": false },
    { "startTime": "11:10", "availablePlaces": 10, "isClosed": false },
    { "startTime": "11:20", "availablePlaces": 0, "isClosed": false },
    { "startTime": "11:30", "availablePlaces": 10, "isClosed": false },
    { "startTime": "11:40", "availablePlaces": 10, "isClosed": true },
    { "startTime": "11:50", "availablePlaces": 10, "isClosed": false },
    { "startTime": "12:00", "availablePlaces": 10, "isClosed": false },
    { "startTime": "12:10", "availablePlaces": 0, "isClosed": false },
    { "startTime": "12:20", "availablePlaces": 10, "isClosed": false },
    { "startTime": "12:30", "availablePlaces": 10, "isClosed": false },
    { "startTime": "12:40", "availablePlaces": 50, "isClosed": false },
    { "startTime": "12:50", "availablePlaces": 10, "isClosed": false },
    { "startTime": "13:00", "availablePlaces": 80, "isClosed": false },
    { "startTime": "13:10", "availablePlaces": 10, "isClosed": false },
    { "startTime": "13:20", "availablePlaces": 70, "isClosed": true },
    { "startTime": "13:30", "availablePlaces": 10, "isClosed": true },
    { "startTime": "13:40", "availablePlaces": 0, "isClosed": false },
    { "startTime": "13:50", "availablePlaces": 10, "isClosed": false },
    { "startTime": "14:00", "availablePlaces": 10, "isClosed": false },
    { "startTime": "14:10", "availablePlaces": 10, "isClosed": false },
    { "startTime": "14:20", "availablePlaces": 0, "isClosed": false },
    { "startTime": "14:30", "availablePlaces": 10, "isClosed": false },
    { "startTime": "14:40", "availablePlaces": 0, "isClosed": false },
    { "startTime": "14:50", "availablePlaces": 10, "isClosed": false },
    { "startTime": "15:00", "availablePlaces": 70, "isClosed": false },
    { "startTime": "15:10", "availablePlaces": 10, "isClosed": false },
    { "startTime": "15:20", "availablePlaces": 70, "isClosed": false },
    { "startTime": "15:30", "availablePlaces": 10, "isClosed": false },
    { "startTime": "15:40", "availablePlaces": 80, "isClosed": false },
    { "startTime": "15:50", "availablePlaces": 30, "isClosed": false }
  ]

  sortedArraies: Object = this.sortDataByStartTime(this.data);
  sortedData = this.sortDataByStartTime(this.data);

  timeSlots = [
    {
      label: 'בוקר',
      items: this.sortedData.morning
    },
    {
      label: 'צהריים',
      items: this.sortedData.lunch
    },
    {
      label: 'אחר הצהריים',
      items:this.sortedData.extract
    }
  ];

  number!: number;
  time!: string;

  sendStartTime(startTime: string) {
    this.time = startTime;
    this.sharedDataService.updateData(this.number, this.time);
  }

  sortDataByStartTime(data: Hour[]) {
    const extractArray: Hour[] = [];
    const lunchArray: Hour[] = [];
    const morningArray: Hour[] = [];

    data.forEach(item => {
      const startTime = parseInt(item.startTime.split(':')[0]);
      if (startTime >= 8 && startTime < 12) {
        morningArray.push(item);
      } else if (startTime >= 12 && startTime < 15) {
        lunchArray.push(item);
      } else if (startTime >= 15) {
        extractArray.push(item);
      }
    });

    return {
      extract: extractArray,
      lunch: lunchArray,
      morning: morningArray
    };
  }

  constructor(private sharedDataService: SharedDataService) { }

  updateData() {
    this.sharedDataService.updateData(this.number, this.time);
  }

  ngOnInit() {
    this.sharedDataService.data$.subscribe(data => {
      this.number = data;
    });
  }

}