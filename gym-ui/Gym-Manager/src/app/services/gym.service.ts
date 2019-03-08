import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GymService {
  public _filterModel:any;
  constructor() { }

  public set filterModel(value:any){
    this._filterModel = value;
  }

  public get filterModel(){
    return this._filterModel;
  }
}
