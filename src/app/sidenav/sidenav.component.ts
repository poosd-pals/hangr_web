import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

    version = VERSION;

  constructor() { }

  ngOnInit() {
  }

}