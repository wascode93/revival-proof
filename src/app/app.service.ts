import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) {}

  getAllObjects(objectId: String){
    // object_23
    return this.http.get(`https://api.knack.com/v1/objects`, {
        headers: new HttpHeaders()
                        .set('X-Knack-Application-Id', '628cb96fad6003001e54c6bf')
                        .set('X-Knack-REST-API-KEY', '258fe6e9-f5ef-417e-8459-dd0555c07619'),
        params: new HttpParams().set('format', 'rawx')
    });
  }

  getAllRecords(objectId: String){
    // object_23
    return this.http.get(`https://api.knack.com/v1/objects/${objectId}/records`, {
        headers: new HttpHeaders()
                        .set('X-Knack-Application-Id', '628cb96fad6003001e54c6bf')
                        .set('X-Knack-REST-API-KEY', '258fe6e9-f5ef-417e-8459-dd0555c07619'),
        params: new HttpParams().set('format', 'rawx')
    });
  }

  getAllFields(objectId: String){
    // object_23
    return this.http.get(`https://api.knack.com/v1/objects/${objectId}/fields`, {
        headers: new HttpHeaders()
                        .set('X-Knack-Application-Id', '628cb96fad6003001e54c6bf')
                        .set('X-Knack-REST-API-KEY', '258fe6e9-f5ef-417e-8459-dd0555c07619'),
        params: new HttpParams().set('format', 'rawx')
    });
  }

  getAllViewRecords(){
// pages/scene_525/views/view_761
    return this.http.get(`https://api.knack.com/v1/pages/scene_525/views/view_761/records`, {
        headers: new HttpHeaders()
                        .set('X-Knack-Application-Id', '628cb96fad6003001e54c6bf')
                        .set('X-Knack-REST-API-KEY', '258fe6e9-f5ef-417e-8459-dd0555c07619'),
        params: new HttpParams().set('format', 'rawx')
    });
  }
}