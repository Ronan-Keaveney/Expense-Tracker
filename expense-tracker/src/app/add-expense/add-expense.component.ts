import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-add-expense',
    standalone: true,
    templateUrl: './add-expense.component.html',
    styleUrl: './add-expense.component.css',
    imports: [NavbarComponent]
})
export class AddExpenseComponent {

}
