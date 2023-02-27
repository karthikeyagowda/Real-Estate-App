import { Component, Input } from "@angular/core";
import { IProperty } from "../IProperty.interface";



@Component ({
  selector:"app-property-card",
  //template:"<h1>This is propertycard</h1>",
  templateUrl : "property-card.component.html",
  styleUrls : ["property-card.component.css"]
}
)

export default class PropertyCardComponent{
  @Input() property : IProperty
}
