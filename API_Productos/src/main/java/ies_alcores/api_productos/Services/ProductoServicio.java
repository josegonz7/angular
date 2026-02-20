package ies_alcores.api_productos.Services;

import ies_alcores.api_productos.model.Producto;
import ies_alcores.api_productos.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoServicio {

    @Autowired
    private ProductoRepository productoRepository;

    public List<Producto> findAll(){ return this.productoRepository.findAll();
    }

}