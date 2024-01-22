import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-edit-expense',
    standalone: true,
    templateUrl: './edit-expense.component.html',
    styleUrl: './edit-expense.component.css',
    imports: [NavbarComponent]
})
export class EditExpenseComponent {

}
