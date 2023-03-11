import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IPropertyBase } from '../model/ipropertybase';
import { Property } from '../model/property';
@Injectable({
  providedIn: 'root'
})
export class HousingService {
  constructor(private http:HttpClient){}
  getAllProperties(sellRent:number) : Observable<IPropertyBase[]>
  {
     return this.http.get<any>('data/properties.json').pipe(
      map(data=>{
        const propertiesArray : Array<IPropertyBase> = [];
        const localProperties = JSON.parse(localStorage.getItem('newProp'));
        if(localProperties)
        {
          for(const id in localProperties){
            if(localProperties.hasOwnProperty(id) && localProperties[id].SellRent==sellRent){
              localProperties.push(data[id]);
            }
          }

        }

        for(const id in data)
        {
          if(data.hasOwnProperty(id) && data[id].SellRent==sellRent){
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
     );

  }

  addProperty(property : Property) {
    let newProp = [property];
    if(localStorage.getItem('newProp')){
      newProp = [property,
                  ...JSON.parse(localStorage.getItem('newProp'))];
    }
    localStorage.setItem('newProp', JSON.stringify(property));
  }

  newPropId(){
    if(localStorage.getItem('PID')){
      localStorage.setItem('PTD', String(+localStorage.getItem('PID')+1));
      return +localStorage.getItem('PID');
    } else{
      localStorage.setItem('PID','101');
      return 101;
    }
  }

}
