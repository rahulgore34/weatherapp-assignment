import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';
import {mockData} from './mock-response';
describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return data of 5 cities', () => {
    const data = mockData;
    service.getCitiesData().subscribe(res => {
      expect(res).toEqual(data);
    })
    const req = httpMock.expectOne(`https://api.openweathermap.org/data/2.5/group?id=2968815,4119617,4348460,4908066,6359304&appid=3339568510453002acf95e8b5d0af204`);
    expect(req.request.method).toEqual("GET");
    req.flush(data);

    httpMock.verify();
  });
});
