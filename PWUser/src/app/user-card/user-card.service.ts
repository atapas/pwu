import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserCardService {
    constructor(private http: HttpClient) {
    };

    public getUser(): any {
        return this.http.get('https://randomuser.me/api/', {}, );
    }
}