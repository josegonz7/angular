import { Component, Signal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Producto } from '../models/producto';
import { ProductoService } from '../servicios/producto-service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // atributos
  public productos: Signal<Producto[]>

  // constructor
  constructor(private productosService: ProductoService) {
  this.productos = toSignal(this.productosService.getAllProductos(),{initialValue: []});
}
  // getters y setters
}
