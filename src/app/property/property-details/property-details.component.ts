import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent  {
  public propertyId : number;
  constructor(private route : ActivatedRoute){}
  ngOnInit(){
    this.propertyId = this.route.snapshot.params['id'];
  }
}
