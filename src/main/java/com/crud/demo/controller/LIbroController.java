package com.crud.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.demo.entity.Libro;
import com.crud.demo.service.libroService;

@RestController
@RequestMapping(path = "/api/libros")  //Anotación que indica que esta clase es un controlador REST y que manejará solicitudes HTTP en la ruta "/api/libros"

public class LIbroController {

    @Autowired
    private libroService libroService;      //Inyección de dependencia del servicio libroService para poder utilizar sus métodos en el controlador

    @GetMapping
    public List<Libro> getAll() {           //Método para obtener todos los libros, el cuál, llama al método getAllLibros() del Servicio
        return libroService.getAllLibros();
    }

    @GetMapping("/{libro_id}")
    public Optional<Libro> getLibro(@PathVariable Long libro_id) {   //Método para obtener un libro mediante su id, el cual puede devolver un libro o estar vacio
        return libroService.getLibro(libro_id);
    }
    @PostMapping
    public void saveLibro(@RequestBody Libro libro) {       //Método para guardar un libro, el cual recibe un objeto Libro en el cuerpo de la solicitud y llama al método saveLibro()
        libroService.saveLibro(libro);
    }

    @DeleteMapping("/{libro_id}")
    public void deleteLibro(@PathVariable Long libro_id) {          //Método para eliminar un libro mediante de su id
        libroService.deleteLibro(libro_id);
    }
}
