import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Revival Proof';
  fields$: Observable<any>;
  records$: Observable<any>;

  constructor(private appService: AppService){
    // this.appService.getAllObjects('object_23').subscribe(objects => console.log("objects = ", objects));
    this.fields$ = this.appService.getAllFields('object_23').pipe(
      map((fields: any) => fields.fields)
    );

    this.records$ = this.appService.getAllRecords('object_23').pipe(
      map((records: any) => records.records)
    );
  }
}
