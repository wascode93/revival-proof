import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) {}

  getAll(objectId: String){
    // object_23
    return this.http.get(`https://api.knack.com/v1/objects/${objectId}/records`, {
        headers: new HttpHeaders()
                        .set('X-Knack-Application-Id', '628cb96fad6003001e54c6bf')
                        .set('X-Knack-REST-API-KEY', '258fe6e9-f5ef-417e-8459-dd0555c07619')
    });
  }

  getOne(){

  }
}