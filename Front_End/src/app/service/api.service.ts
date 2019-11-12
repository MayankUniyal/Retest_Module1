import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { RestData } from "../type";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  restGetApiCall(){
    return this.http.get<RestData>(environment.baseURL + "getData");

  }
  restGetSpecificApiCall(id:number) {
    return this.http.get(environment.baseURL+"getData/"+id);

  }

}
