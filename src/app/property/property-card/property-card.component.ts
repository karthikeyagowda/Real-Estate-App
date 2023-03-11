import { Component, Input } from "@angular/core";
import { IPropertyBase } from "src/app/model/ipropertybase";



@Component ({
  selector:"app-property-card",
  //template:"<h1>This is propertycard</h1>",
  templateUrl : "property-card.component.html",
  styleUrls : ["property-card.component.css"]
}
)

export default class PropertyCardComponent{
  @Input() property : IPropertyBase;
  @Input() hideIcons : Boolean;
}
