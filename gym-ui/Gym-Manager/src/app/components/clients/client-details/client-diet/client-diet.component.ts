import { Router } from '@angular/router';
import { ColumnDefModel } from './../../../../common/models/column-def-model';
import { GridOptions } from 'ag-grid-community';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';

@Component({
  selector: 'app-client-diet',
  templateUrl: './client-diet.component.html',
  styleUrls: ['./client-diet.component.css']
})
export class ClientDietComponent implements OnInit {
  
  public flag: boolean = false;
  public rowData: any;
  public columnDefs: ColumnDefModel[];
  public clientData:any;
  public gridOptions:GridOptions;
  public filterModel;

  constructor(private clienService:ClientService,
              private router:Router) { 

  }
  ngOnInit() {
    this.getColumnDefinition();
    this.getClientData();
    this.initializeGrid();        
   }

  public initializeGrid() {
    this.gridOptions = <GridOptions>{
      onGridReady: () => {
          this.gridOptions.api.sizeColumnsToFit();
          this.gridOptions.api.setFilterModel(JSON.parse(sessionStorage.getItem('FILTER')));          
          console.log("Test", this.gridOptions.api.getFilterModel());
       }
   };
  }

  public restoreFilterState(filterModel): any {
    console.log('Restore', filterModel)
    ;
  }

  public getClientDetails (event) {
    this.flag = event;
    this.router.navigate(['/clients/',event.name]);
    console.log(this.flag);
  }

  public getColumnDefinition(){
    this.columnDefs = this.clienService.getGridColDef();
  }

  public getClientData(){
    this.rowData = this.clienService.getClientData();
  }

  public onFilterChanged(event){
    sessionStorage.setItem('FILTER',JSON.stringify(event.api.getFilterModel()));    
  }
}
