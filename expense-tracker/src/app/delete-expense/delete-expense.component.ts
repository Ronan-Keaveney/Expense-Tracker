import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-delete-expense',
    standalone: true,
    templateUrl: './delete-expense.component.html',
    styleUrl: './delete-expense.component.css',
    imports: [NavbarComponent]
})
export class DeleteExpenseComponent {

}
