import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { OpentokService } from './video-component/opentok.service';
import * as OT from '@opentok/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ]
})
export class AppComponent implements OnInit {

  ngOnInit () {

  }

}
