import { Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {BarControllerComponent} from "./bar-controller/bar-controller.component";
import {MenuComponent} from "./menu/menu.component";

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'bar', component: BarControllerComponent },
    { path: 'menu', component: MenuComponent }
];
