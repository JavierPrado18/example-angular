import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Supplier } from '../models/supplier';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http:HttpClient) { }
  url="http://localhost:8080/api/proveedores" //`${environment.HOST}/proveedores`
  findAll(){
    return this.http.get<Supplier[]>(this.url)
  }
}
