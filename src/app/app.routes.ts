import { Routes } from '@angular/router';
import { BarControllerComponent } from './bar-controller/bar-controller.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    { path: '', component: MenuComponent }
];