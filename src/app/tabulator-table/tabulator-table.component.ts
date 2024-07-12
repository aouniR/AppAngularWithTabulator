import { Component, OnInit  } from '@angular/core';
import { FetchDataService } from './fetch-data.service';
import {TabulatorFull as Tabulator} from 'tabulator-tables';
import { FilterComponent } from '../filter/filter.component';
import { AddRowComponent } from '../add-row/add-row.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tabulator-table',
  standalone: true,
  imports: [FilterComponent,AddRowComponent,CommonModule],
  templateUrl: './tabulator-table.component.html',

})

export class TabulatorTableComponent implements OnInit {
  tab = document.createElement('div');
  showAddRowDialog = false;
  table!: Tabulator;
  tableData: any[] = []
  constructor(private fetchDataService: FetchDataService) {}
  ngOnInit(): void {
    this.fetchDataService.getData().subscribe((data: any[]) => {
      this.tableData = data;
      this.initializeTable();
    });
  }
  private initializeTable(): void {
    this.table=new Tabulator(this.tab, {
      data: this.tableData,
      addRowPos:"top",
      placeholder:"No Data Available",
      layout: 'fitColumns',
      pagination:true,      
      paginationSize:10,
      paginationSizeSelector:[5,10,15,20],         
      paginationCounter:"rows",       
      initialSort:[             
      {column:"ID", dir:"asc"},
      ],
      columnDefaults:{
        tooltip:true, 
      },
      reactiveData:true,
      columns: [
        { title: 'ID', field: 'id', hozAlign:"center", resizable:false, frozen:true},
        { title: 'First Name', field: 'firstName', hozAlign:"center", resizable:false, frozen:true },
        { title: 'Last Name', field: 'lastName', hozAlign:"center", resizable:false, frozen:true },
        { title: 'Age', field: 'age', hozAlign:"center", resizable:false, frozen:true },
        { title: 'DOB', field: 'dob', hozAlign:"center", resizable:false, frozen:true },
        { title: 'Email', field: 'email', hozAlign:"center", resizable:false, frozen:true },
        { title: 'Salary', field: 'salary', hozAlign:"center", resizable:false, frozen:true },
        { title: 'Address', field: 'address', hozAlign:"center", resizable:false, frozen:true },
        { title: 'Image URL', field: 'imageUrl', hozAlign:"center", resizable:false, frozen:true },
        { title: 'Contact Number', field: 'contactNumber', hozAlign:"center", resizable:false, frozen:true },
      ],
      rowContextMenu: [
        {
          label: "<i class='fas fa-trash'></i> Delete Row",
          action: (e, row ) => {
            row.delete();
          }
        },
        {
          label: "<i class='fas fa-trash'></i> Add Row",
          action: (e, row ) => {
            this.openAddRowDialog()
          }
        }
      ]
    });
    document.getElementById('tabulatorContainer')?.appendChild(this.tab);
  }
  onFilterChanged(filter: { field: string, type: string, value: string }) {
    this.table.setFilter(filter.field, filter.type, filter.value);
  }

  onFilterCleared() {
    this.table.clearFilter(true);
  }
  openAddRowDialog(): void {
    this.showAddRowDialog = true;
  }

  onFormSubmit(newRow: any): void {
    this.table.addRow(newRow);
    this.showAddRowDialog = false;
  }

  onFormCancel(): void {
    this.showAddRowDialog = false;
  }
}