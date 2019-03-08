export class ColumnDefModel {
    headerName: any;
    field: any;
    sortable: boolean;
    filter: boolean;
    checkboxSelection: boolean;

    constructor(headerName: any,
                field: any,
                sortable?: boolean,
                filter?: boolean,
                checkboxSelection?: boolean){
    this.headerName = headerName;
    this.field = field;
    this.sortable = sortable;
    this.filter = filter;
    this.checkboxSelection = checkboxSelection;
    
    }
}
