import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'revival-proof';

  constructor(private appService: AppService){
    this.appService.getAll('object_23').subscribe(data => console.log(data));
  }
}
