import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class AllPersonService {

  link:string='https://fakestoreapi.com/users';
  constructor(private http:HttpClient) {
   }

   getAll(){
    return this.http.get(this.link);
   }
   getPerson(id:number){
   return this.http.get(`${this.link}/${id}`);
   }
}
