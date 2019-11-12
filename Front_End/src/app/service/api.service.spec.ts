import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
let httpMock: HttpTestingController;

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,HttpClientModule],
    providers: [ApiService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  }));

  it('should be able to retrieve dataList from the API via GET', () => {
    const service: ApiService = TestBed.get(ApiService);
    httpMock = TestBed.get(HttpTestingController);
    const dataListResponse = [
      {
        completed: false,
        id: 1,
        title: "delectus aut autem",
        userId: 1
      }
    ];
  
    service.restGetApiCall().subscribe((data) => {
      expect(data.id).toEqual(1);
    });
  });

  
});


