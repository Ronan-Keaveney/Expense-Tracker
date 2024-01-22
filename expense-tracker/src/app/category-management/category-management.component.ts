import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-category-management',
    standalone: true,
    templateUrl: './category-management.component.html',
    styleUrl: './category-management.component.css',
    imports: [NavbarComponent]
})
export class CategoryManagementComponent {

}
