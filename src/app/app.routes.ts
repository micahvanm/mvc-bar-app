import { Routes } from '@angular/router';
import { BarControllerComponent } from './bar-controller/bar-controller.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'bar', component: BarControllerComponent },
    { path: 'menu', component: MenuComponent }
];