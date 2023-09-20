import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //pegar importacion

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { } //agregar private http:HttpClient entre los parentesis

  URL: string = 'http://127.0.0.1:4000'; //agregar URL

  Dashboard(){
    return this.http.get(`${this.URL}/ejemplo/`)
  }

}
