import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  properties : Array<any>= [
    {
    "Id":1,
    "Name": "Birla House",
    "Type":"House",
    "Price": 12000
  },
  {
    "Id":2,
    "Name": "Sea Side ",
    "Type":"Villa",
    "Price": 21800
  },
  {
    "Id":3,
    "Name": "Sky Scrapper",
    "Type":"Flat",
    "Price": 14600
  },
  {
    "Id":4,
    "Name": "Gun Hill",
    "Type":"House",
    "Price": 15210
  },
  {
    "Id":5,
    "Name": "Pearl White",
    "Type":"Duplex",
    "Price": 31000
  },
  {
    "Id":3,
    "Name": "Gold Palace",
    "Type":"Flat",
    "Price": 18000
  }
]
}

