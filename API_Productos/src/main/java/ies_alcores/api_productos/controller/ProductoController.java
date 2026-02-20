package ies_alcores.api_productos.controller;

import ies_alcores.api_productos.Services.ProductoServicio;
import ies_alcores.api_productos.model.Producto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
public class ProductoController {

    @Autowired
    private ProductoServicio productoServicio;

    @GetMapping("")
    public ResponseEntity<List<Producto>> findAll(){
        return ResponseEntity.ok(this.productoServicio.findAll());
    }
}