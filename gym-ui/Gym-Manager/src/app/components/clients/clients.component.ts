import { GridOptions } from 'ag-grid-community';
import { ColumnDefModel } from './../../common/models/column-def-model';
import { ClientService } from './client.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers:[ClientService,GymService]
})
export class ClientsComponent implements OnInit {
  
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
