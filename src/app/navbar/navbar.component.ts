import { HomeComponent } from './../home/home.component';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dataService : DataService, private home : HomeComponent) { }

  ngOnInit() { }

  query : string
  logout(){
    console.log("User logged out");
  }

  search(query:string){
    this.home.filter(query);
  }
}
