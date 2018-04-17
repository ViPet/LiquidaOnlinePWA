import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menudemo',
  templateUrl: './menudemo.component.html',
  styleUrls: ['./menudemo.component.css']
})
export class MenudemoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  btnClick= function () {
    this.router.navigateByUrl('/video-chat');
  };

}
