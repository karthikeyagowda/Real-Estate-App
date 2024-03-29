import { IPropertyBase } from "./ipropertybase";

export class Property implements IPropertyBase {
  Id : number;
  SellRent : number;
  Name : string;
  PType : string;
  BHK : number;
  FType : string;
  Price : number;
  BuiltArea : number;
  CarpetArea? : number;
  Address? : String;
  City : string;
  FloorNo? : string;
  TotalFloor? : string;
  RTM : number;
  AOP? : string;
  MainEntrance? : string;
  Security? : number;
  Gated? : number;
  Maintenance? : number;
  Possession? : string;
  Image? : string;
  Description? : string;
  PostedOn? : string;
  PostedBy? : number;
}
