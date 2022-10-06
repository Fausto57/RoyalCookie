Create database Libreria;
Use Libreria;

CREATE TABLE Libros (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(150),
    Descripcion VARCHAR(100),
    Fecha DATE
);