import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../../app/core/menu.service';
import { MenuItem } from '../../../app/core/menu-item.model';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    private menuService = inject(MenuService);
    private router = inject(Router);

    selectedCount = this.menuService.selectedCount;
    totalValue = this.menuService.totalValue;
    selectedItems = this.menuService.selectedItemsList;

    get currentSection(): string {
        const url = this.router.url;
        if (url === '/') {
            return 'Главная';
        } else if (url === '/menu') {
            return 'Меню';
        }
        return 'Главная';
    }
}