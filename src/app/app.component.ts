import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabulatorTableComponent } from './tabulator-table/tabulator-table.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TabulatorTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppAngularNiv2_withTabulator';
}
