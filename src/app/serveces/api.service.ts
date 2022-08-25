import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProduct(){

    // dummy product data base is created by using two sites
    // its bitly and moki
    // https://bitly.com/    --- is used to short the long url address (images url)
    // https://mocki.io/fake-json-api     --- is used to create a json array through online (product details)
    return this.http.get("https://mocki.io/v1/a795df9b-306c-4700-94d7-649a68a35e85").pipe(map((res:any)=>{
      return res;
    }))
  }

}
