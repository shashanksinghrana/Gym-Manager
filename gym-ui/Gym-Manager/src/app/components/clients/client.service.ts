import { GridOptions } from 'ag-grid-community';
import { ColumnDefModel } from '../../common/models/column-def-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {  

  public _filterModel:any;

  constructor() { }

  public getGridColDef():ColumnDefModel[]{
    return [new ColumnDefModel('Name','name',true,true,true),
            new ColumnDefModel('Membership Type','type'),
            new ColumnDefModel('Trainer','trainer',true,true),
            new ColumnDefModel('Date of Joining','doj'),
            new ColumnDefModel('Contact Number','number'),
            new ColumnDefModel('Due Date','dueDate' )
          ];
  }

  public getClientData(): any[]{
    return [
      {name: 'Shubbi', type:'Plainum', trainer:'SSR', doj:'7-Dec-19', number:'8806700774',dueDate:'7-Dec-19'},
      {name: 'Shashank', type:'Gold', trainer:'SSR', doj:'7-Dec-19', number:'8806700774',dueDate:'7-Dec-19'},
      {name: 'Surbhi', type:'Silver', trainer:'Shubbi', doj:'7-Dec-19', number:'8806700774',dueDate:'7-Dec-19'}
    ];
  }

  public getTabItems(): Object[] {
    return [
      { label: 'Performers', route: 'performers' },
      { label: 'Diet', route: 'diet' },
      { label: 'Locations', route: 'locations' },
      { label: 'Work Week', route: 'workWeek' },
      { label: 'Crew', route: 'crew' },
      { label: 'Status Dates', route: 'statusDates' }
    ];
  }
}
