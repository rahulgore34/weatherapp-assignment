import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DateformatPipe } from './shared/dateformat.pipe';
import { CitydetailsComponent } from './citydetails/citydetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DateformatPipe,
    CitydetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
