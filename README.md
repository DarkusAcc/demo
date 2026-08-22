#  Test/CRUD de Libros

 **Estado: En desarrollo**

## Descripción

CRUD de práctica para gestionar libros (crear, consultar, actualizar y eliminar), construido con Spring Boot + MySQL en el backend y HTML/CSS/JavaScript en el frontend, como ejercicio de aprendizaje.

## Funcionalidades actuales

- ✅ CRUD completo (GET, POST, PUT, DELETE) conectado a MySQL
- ✅ Interfaz HTML/CSS básica conectada al backend vía fetch
- ✅ Listar, crear, editar y eliminar libros desde el navegador

## Pendientes / Roadmap

- [ ] Validaciones de formulario (campos vacíos, tipos de dato)
- [ ] Manejo de errores más claro en el frontend
- [ ] Estilos responsive para móvil
- [ ] Posible migración a un framework frontend (Vue/React)

## Tecnologías usadas

- Java
- Spring Boot
- Spring Data JPA
- MySQL
- HTML / CSS
- JavaScript (Fetch API)

## Cómo ejecutarlo

1. Clona el repositorio
2. Crea una base de datos MySQL llamada `crudtest`
3. Ajusta `src/main/resources/application.properties` con tus credenciales de MySQL
4. Corre el backend (desde tu IDE o con `mvn spring-boot:run`)
5. Abre `index.html` en tu navegador

## Autor

Proyecto personal de práctica — John 'Darkus' Blanco Castilla
