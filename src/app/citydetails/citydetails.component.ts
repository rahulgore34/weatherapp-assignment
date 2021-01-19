import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-citydetails',
  templateUrl: './citydetails.component.html',
  styleUrls: ['./citydetails.component.scss']
})
export class CitydetailsComponent implements OnInit, OnDestroy {
  forecastDataSub: Subscription;
  forecastdata;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.getForeCastData(param.id);
    });
  }

  ngOnDestroy(): void {
    if (this.forecastDataSub) {
      this.forecastDataSub.unsubscribe();
    }
  }

  getForeCastData(cityId): void {
    this.forecastDataSub = this.dataService.getForecastData(cityId).subscribe(res => {
      if (res && res['list']) {
        this.forecastdata = res['list'];
      }
    }), err => {
      console.log(err);
    };
  }
}
