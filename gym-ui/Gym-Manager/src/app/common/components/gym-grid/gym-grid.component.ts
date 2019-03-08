import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ColumnDefModel } from '../../models/column-def-model';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'gym-grid',
  templateUrl: './gym-grid.component.html',
  styleUrls: ['./gym-grid.component.css']
})
export class GridComponent implements OnInit {

@Output() 
public select = new EventEmitter();
@Output() 
public filterSelect = new EventEmitter();
@Input()
public selected: boolean = false;
@Input()
public colDefs: ColumnDefModel[];
@Input()
public gridData: any[];
@Input('gridOptions')
public gridOptions: GridOptions;

public columnDefs: ColumnDefModel[];
public rowData: any[];

constructor() {
  
 }
ngOnInit() {
  this.columnDefs = this.colDefs;
  this.rowData = this.gridData;
  }
  
public getMemberDetails(event){
    this.select.emit(event.data);
    //console.log("event", event);
  }
public onFilterChanged(event){
  this.filterSelect.emit(event);
  console.log("FilterChangedEvent",event);
}  
}
