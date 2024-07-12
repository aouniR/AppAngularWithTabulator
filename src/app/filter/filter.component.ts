import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './filter.component.html',
})
export class FilterComponent {
  @Output() filterChanged = new EventEmitter();
  @Output() filterCleared = new EventEmitter();

  filterField: string = '';
  filterType: string = '=';
  filterValue: string = '';

  applyFilter() {
    this.filterChanged.emit({
      field: this.filterField,
      type: this.filterType,
      value: this.filterValue
    });
  }

  clearFilter() {
    this.filterField = '';
    this.filterType = '=';
    this.filterValue = '';
    this.filterCleared.emit();
  }
}
