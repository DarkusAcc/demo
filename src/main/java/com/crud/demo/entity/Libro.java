package com.crud.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "libros")         //Nombre de la tabla en la base de datos
public class Libro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long libro_id;       //Clave primaria de la tabla

    @Column(nullable = false, unique = true)
    private String nombre;      //Nombre del libro, no puede ser nulo y debe ser único, ya que dos libros no pueden tener el mismo nombre

    @Column(nullable = false) 
    private String autor;
    
    private int ventas;


}