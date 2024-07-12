import { Routes } from '@angular/router';
import { TabulatorTableComponent } from './tabulator-table/tabulator-table.component';

export const routes: Routes = [ 
    { path: 'tabulatorjs-table', component: TabulatorTableComponent },
    { path: '', redirectTo: 'tabulatorjs-table', pathMatch: 'full' },
];
