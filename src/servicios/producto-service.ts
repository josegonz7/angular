import {Injectable} from '@angular/core';   
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})

export class ProductoService  {

    // atributos
    private endpoint : string = 'http://localhost:8080/api/productos';

    // constructor
    constructor(private http: HttpClient) { }

    //getters y setters
    public getAllProductos(): Observable<Producto[]> {
        return this.http.get<Producto[]>(this.endpoint);
    }
    
}
