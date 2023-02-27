import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  propertyTypes : Array<string> = ['House','Apartment','Duplex'];
  furnishTypes: Array<string> = ['Fully','Semi','Unfurnished'];
  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') staticTabs?: TabsetComponent;
  constructor(private router:Router){}
  onBack()
  {
    this.router.navigate(["/"]);
  }
  onSubmit(Form : NgForm)
  {

  }
  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }
  propertyView : IProperty = {
    Id: null,
    Name : null,
    Type : null,
    Price : null,
    SellRent: null
  };
}
