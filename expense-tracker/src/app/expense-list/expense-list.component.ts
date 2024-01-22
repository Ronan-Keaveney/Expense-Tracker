import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-expense-list',
    standalone: true,
    templateUrl: './expense-list.component.html',
    styleUrl: './expense-list.component.css',
    imports: [NavbarComponent]
})
export class ExpenseListComponent {

}
