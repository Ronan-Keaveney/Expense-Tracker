import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-expense-summary',
    standalone: true,
    templateUrl: './expense-summary.component.html',
    styleUrl: './expense-summary.component.css',
    imports: [NavbarComponent]
})
export class ExpenseSummaryComponent {

}
