import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Queue } from './queue';

@Injectable({
    providedIn: 'root',

})
export class GetDrinks {
    drinks: Queue[] = []

    constructor(private httpClient: HttpClient) { }

    getInitDrinks(){
        return this.httpClient.get<Queue[]>('http://localhost:3000/queue')
    }

}

