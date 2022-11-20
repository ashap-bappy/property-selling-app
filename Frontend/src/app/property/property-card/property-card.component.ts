import { Component, OnInit } from "@angular/core";

@Component ({
  selector: 'app-property-card',
  //template: `<h1>this is property card component</h1>`,
  templateUrl: './property-card.component.html',
  //styles: [`h1 {font-weight: normal;}`]
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit{
  constructor() { }

  ngOnInit() {
  }
}
