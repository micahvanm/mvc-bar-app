import { Component, NgModule } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { BarControllerComponent } from "./bar-controller/bar-controller.component";
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { MenuComponent } from "./menu/menu.component";
import { GetDrinksComponent } from "./get-drinks/get-drinks.component";
import { AppRoutingModules } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";

@NgModule({
    declarations: [],
    imports: [
        BarControllerComponent,
        BrowserModule,
        MainComponent,
        AppRoutingModules,
        MenuComponent,
        RouterOutlet
    ],
    providers: [HttpClient, GetDrinksComponent],
    bootstrap: [AppModule]
})
export class AppModule { }