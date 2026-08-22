package com.crud.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.crud.demo.entity.Libro;
import com.crud.demo.repository.LibroRepository;

@Service
public class libroService {
    
    @Autowired 
    LibroRepository libroRepository;

    public List<Libro> getAllLibros() {             //Servicio para obtener todos los libros de la base de datos
        return libroRepository.findAll();
    }

    public Optional<Libro> getLibro (long libro_id) {           //Servicio para obtener un libro por su id, devuelve un Optional que puede contener un libro o estar vacío si no se encuentra el libro con el id proporcionado
        return libroRepository.findById(libro_id);
    }

    public void saveLibro(Libro libro) {            //Servicio para guardar/actualizar un libro en la base de datos
        libroRepository.save(libro);
    }

    public void deleteLibro(long libro_id) {        //Servicio para eliminar un libro de la base de datos por su id
        libroRepository.deleteById(libro_id);
    }
}
