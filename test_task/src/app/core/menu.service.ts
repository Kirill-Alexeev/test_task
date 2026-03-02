import { Injectable, signal, computed } from '@angular/core';
import { MenuItem } from '../core/menu-item.model';
import menuItemsData from '../core/menu-items.json';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    private menuItems = signal<MenuItem[]>(menuItemsData as MenuItem[]);
    private selectedItems = signal<MenuItem[]>([]);

    readonly allItems = this.menuItems.asReadonly();
    readonly selectedItemsList = this.selectedItems.asReadonly();

    readonly selectedCount = computed(() => this.selectedItems().length);
    readonly totalValue = computed(() =>
        this.selectedItems().reduce((sum, item) => sum + item.value, 0)
    );

    toggleItem(item: MenuItem): void {
        const currentSelected = this.selectedItems();
        const exists = currentSelected.find(i => i.id === item.id);

        if (exists) {
            this.selectedItems.set(currentSelected.filter(i => i.id !== item.id));
        } else {
            this.selectedItems.set([...currentSelected, item]);
        }
    }

    isSelected(item: MenuItem): boolean {
        return this.selectedItems().some(i => i.id === item.id);
    }

    getItemsByCategory(category: string): MenuItem[] {
        return this.menuItems().filter(item => item.category === category);
    }

    getCategories(): string[] {
        const categories = this.menuItems().map(item => item.category);
        return [...new Set(categories)];
    }
}