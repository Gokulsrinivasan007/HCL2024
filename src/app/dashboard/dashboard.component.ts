import { Component } from '@angular/core';
import { GridOptions } from "ag-grid";
import { StorageService } from '../service/storage.service';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  private gridOptions: GridOptions;
  gridForm: FormGroup = new FormGroup({
    name: new FormControl(),
    id: new FormControl(),
    designation: new FormControl(),
    location : new FormGroup({})
});
  constructor(private storageService: StorageService) {

    this.gridOptions.columnDefs = [
      {
        headerName: "Employee Name",
        field: "name",
        width: 100
      },

      {
        headerName: "Employee ID",
        field: "value",
        width: 100
      },
      {
        headerName: "Designation",
        field: "value",
        width: 100
      },
      {
        headerName: "Location",
        field: "value",
        width: 100
      },
      {
        headerName: "Actions",
        field: "value",
        width: 100,
        cellRendererSelector: (params: { value: { isEdit: any; }; }) => {
        if (params.value.isEdit) {
          return {
            component: 'EditComponent',
            params: {params}  
          };
        } else {
          return {
            component: 'deleteRenderer',
            params: {}  
          };
        }
      }
      }

    ];
    this.gridOptions.rowData = [
      { name: "Sam", id: 1, designation: "IT", location: "Chennai" },
      { name: "John", id: 2, designation: "IT", location: "Kanchipuram" }
    ]
  }

  getContext() {
    return {
        form: this.formGroup,
        createKey: this.createKey
    }
}

  logOut() {
    this.storageService.clearData();
    this.storageService.clearDataSession();
  }

  private createFormControls() {
    let columns = this.columnApi.getAllColumns();

    const stockGroup = (<FormGroup>this.gridForm.controls['stock']);

     let controlNames = Object.keys(stockGroup.controls);
    controlNames.forEach((controlName) => {
        stockGroup.removeControl(controlName)
    });

    this.api.forEachNode((rowNode: RowNode) => {
        columns.filter((column:Column)=> column.getColDef().field !== 'orderNumber')
            .forEach((column: Column) => {
            const key = this.createKey(rowNode.id, column);   
            stockGroup.addControl(key, new FormControl())
        })
    });
}

}
