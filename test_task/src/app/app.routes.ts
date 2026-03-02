import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { MenuComponent } from '../pages/menu/menu.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Главная' },
    { path: 'menu', component: MenuComponent, title: 'Меню' },
    { path: '**', redirectTo: '' }
];