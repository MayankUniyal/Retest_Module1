import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { GraphqlService } from './graphql.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('GraphqlService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports : [HttpClientTestingModule,HttpClientModule],
    providers : [GraphqlService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

  }));

  
});
