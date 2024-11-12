# CRUD API Author-Book 📚✍️

Este proyecto es una API RESTful para gestionar autores y libros. Permite crear, leer, actualizar y eliminar autores y libros. La API está desarrollada utilizando **Express.js** y se conecta a una base de datos MySQL para almacenar la información de los autores y los libros.

---

## 🚀 **Cómo ejecutar el proyecto**

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/DvRobles/CRUDAPIAuthorBook-.git
   ```

2. **Instalar las dependencias:**

   Asegúrate de tener Node.js instalado y luego instala las dependencias necesarias, mencionadas en Tecnologías utilizadas

3. **Ejecutar el proyecto en modo desarrollo:**

   Para iniciar el servidor en modo desarrollo, ejecuta el siguiente comando:

   ```bash
   npm run start
   ```

   El servidor estará corriendo en el puerto **4000** por defecto, o en el puerto especificado en tu archivo `.env`.

---

## 🧑‍💻 **Endpoints disponibles**

### **Autores (Authors)**

1. **Crear un autor**
   - **Método HTTP**: `POST`
   - **URL**: `http://localhost:4000/authors`
   - **Descripción**: Crea un nuevo autor.
   - **Cuerpo (Body)**:
     ```json
     {
       "name": "J.K. Rowling",
       "bio": "J.K. Rowling es una escritora británica conocida por la saga de Harry Potter."
     }
     ```

2. **Obtener todos los autores**
   - **Método HTTP**: `GET`
   - **URL**: `http://localhost:4000/authors`
   - **Descripción**: Obtiene una lista de todos los autores.

3. **Obtener un autor por ID**
   - **Método HTTP**: `GET`
   - **URL**: `http://localhost:4000/authors/:id` 
   - **Descripción**: Obtiene los detalles de un autor específico utilizando su ID.
   - **Ejemplo de URL**: `http://localhost:4000/authors/1`

4. **Actualizar un autor por ID**
   - **Método HTTP**: `PUT`
   - **URL**: `http://localhost:4000/authors/:id`
   - **Descripción**: Actualiza la información de un autor.
   - **Cuerpo (Body)**:
     ```json
     {
       "name": "J.K. Rowling Updated",
       "bio": "Actualización de la biografía."
     }
     ```

5. **Eliminar un autor por ID**
   - **Método HTTP**: `DELETE`
   - **URL**: `http://localhost:4000/authors/:id`
   - **Descripción**: Elimina un autor de la base de datos utilizando su ID.

---

### **Libros (Books)**

1. **Crear un libro**
   - **Método HTTP**: `POST`
   - **URL**: `http://localhost:4000/books`
   - **Descripción**: Crea un nuevo libro asociado a un autor.
   - **Cuerpo (Body)**:
     ```json
     {
       "title": "Harry Potter and the Sorcerer's Stone",
       "genre": "Fantasy",
       "author_id": 1
     }
     ```

2. **Obtener todos los libros**
   - **Método HTTP**: `GET`
   - **URL**: `http://localhost:4000/books`
   - **Descripción**: Obtiene una lista de todos los libros.

3. **Obtener un libro por ID**
   - **Método HTTP**: `GET`
   - **URL**: `http://localhost:4000/books/:id`
   - **Descripción**: Obtiene los detalles de un libro específico utilizando su ID.
   - **Ejemplo de URL**: `http://localhost:4000/books/1`

4. **Actualizar un libro por ID**
   - **Método HTTP**: `PUT`
   - **URL**: `http://localhost:4000/books/:id`
   - **Descripción**: Actualiza la información de un libro.
   - **Cuerpo (Body)**:
     ```json
     {
       "title": "Harry Potter and the Chamber of Secrets",
       "genre": "Fantasy",
       "author_id": 1
     }
     ```

5. **Eliminar un libro por ID**
   - **Método HTTP**: `DELETE`
   - **URL**: `http://localhost:4000/books/:id`
   - **Descripción**: Elimina un libro de la base de datos utilizando su ID.

---

## 🛠 **Tecnologías utilizadas**

- **Node.js**: Entorno de ejecución para JavaScript en el servidor. Asegúrate de tener instalado [Node.js](https://nodejs.org/).
- **Express.js**: Framework web para Node.js que facilita la creación de aplicaciones y APIs. 
  - **Dependencia**: `express`
- **Sequelize**: ORM para Node.js que facilita la interacción con bases de datos SQL. 
  - **Dependencia**: `sequelize`, `mysql2`
- **MySQL**: Sistema de gestión de bases de datos relacional utilizado para almacenar la información.
  - **Dependencia**: `mysql2`

---

## 📄 **Estructura de la Base de Datos**

### **Tabla: Authors**

| Columna | Tipo de dato | Descripción |
| --- | --- | --- |
| `id` | `INT AUTO_INCREMENT` | Identificador único del autor (clave primaria) |
| `name` | `VARCHAR(255)` | Nombre del autor |
| `bio` | `TEXT` | Biografía del autor |

### **Tabla: Books**

| Columna | Tipo de dato | Descripción |
| --- | --- | --- |
| `id` | `INT AUTO_INCREMENT` | Identificador único del libro (clave primaria) |
| `title` | `VARCHAR(255)` | Título del libro |
| `genre` | `VARCHAR(100)` | Género del libro |
| `author_id` | `INT` | ID del autor que escribió el libro (clave foránea) |

---

## 💡 **Consejos**

- **Postman** es una excelente herramienta para probar los endpoints de la API. Puedes fácilmente enviar solicitudes y recibir respuestas en formato JSON.
