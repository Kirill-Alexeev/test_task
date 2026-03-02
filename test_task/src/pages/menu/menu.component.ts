import { Component, inject } from '@angular/core';
import { MenuService } from '../../app/core/menu.service';
import { MenuItem } from '../../app/core/menu-item.model';

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
    protected menuService = inject(MenuService);

    menuItems = this.menuService.allItems;
    categories = this.menuService.getCategories();

    toggleItem(item: MenuItem): void {
        this.menuService.toggleItem(item);
    }

    isSelected(item: MenuItem): boolean {
        return this.menuService.isSelected(item);
    }

    getItemsByCategory(category: string): MenuItem[] {
        return this.menuService.getItemsByCategory(category);
    }
}