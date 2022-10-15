import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {
  title;
  httpData;
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://dummyjson.com/products")
    .subscribe((products) =>{
      this.httpData=products;
      console.log( this.httpData);
      this.title=this.httpData.products;
      console.log(this.title);
    })
  }

}
