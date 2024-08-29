import { Injectable, Injector, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drinks } from './drink';
import { AppComponent } from '../app.component';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

// const injector = Injector.create({
//     providers: [
//         {provide: HttpClient}
//     ]
// })
export class GetDrinks {
    drinks: Drinks[] = []

    constructor(private httpClient: HttpClient) { }
    
    getInitDrinks(){
        return this.httpClient.get<Drinks[]>('http://localhost:3000/drinks')
    }

}

