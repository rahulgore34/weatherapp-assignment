import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../shared/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  cityWheatherDataSub: Subscription;
  cityWeatherData
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getCityWheatherData();
  }

  ngOnDestroy() {
  if(this.cityWheatherDataSub) {
    this.cityWheatherDataSub.unsubscribe();
  }
  }

  getCityWheatherData() {
    this.cityWheatherDataSub = this.dataService.getCitiesData().subscribe(res => {
   if(res && res['list']) {
     this.cityWeatherData = res['list'];
   }
    }), err => {
      console.log(err);
    }
  }

  showDetails(selectedCity) {
  this.router.navigate(['details', selectedCity.id]);

  }
}
