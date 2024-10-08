import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drinks } from './drink';

@Injectable({
    providedIn: 'root',

})
export class GetDrinks {
    drinks: Drinks[] = []

    constructor(private httpClient: HttpClient) { }

    getInitDrinks(){
        return this.httpClient.get<Drinks[]>('http://localhost:3000/drinks')
    }

}

