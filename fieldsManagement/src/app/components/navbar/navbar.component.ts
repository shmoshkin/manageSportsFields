import { Component, OnInit, AfterContentInit } from '@angular/core';
import $ from 'jquery';
import materialize from 'materialize-css'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterContentInit {
  ngAfterContentInit(): void {
    $( document ).ready(function() {
      let sideNavElem = $('.button-collapse').sideNav();
    });
  }

  constructor() {

   }

  ngOnInit() {
    $( document ).ready(function() {
      let sideNavElem = $('.button-collapse').sideNav();
    });
  }

}
