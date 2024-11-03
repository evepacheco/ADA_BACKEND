# ADA Library API

## Descripción
La **ADA Library API** permite gestionar libros, autores y editoriales de una biblioteca mediante comandos enviados a través de una conexión TCP. Los usuarios pueden realizar operaciones como obtener, añadir, buscar y eliminar libros, así como gestionar autores y editoriales. Este documento detalla todas las respuestas posibles que los usuarios pueden recibir y los errores que podrían enfrentar al interactuar con la API.

## Tecnologías utilizadas
- **Node.js**: Plataforma principal utilizada para el servidor.
- **TCP**: Protocolo de comunicación para la interacción entre cliente y servidor.
- **UUID**: Utilizado para generar identificadores únicos.
- **File System (fs)**: Para gestionar la persistencia de datos en archivos JSON.

## Requisitos previos
Antes de configurar y ejecutar el proyecto, asegúrate de tener instalados los siguientes componentes en tu sistema:

- **Node.js (v14.0 o superior).
- **npm (que viene instalado junto con Node.js).

## Instalación
Sigue estos pasos para configurar y ejecutar el proyecto:

### Descarga el proyecto.

### Instala las dependencias:
Ejecuta el siguiente comando para instalar todas las dependencias listadas en el archivo package.json:
npm init
npm install uuid

### Ejecuta el Servidor
- **Inicia el servidor TCP:
Ejecuta el servidor con Node.js usando el siguiente comando:
npm start

Esto pondrá el servidor en funcionamiento, y estará escuchando en el puerto 8080. Verás un mensaje en la consola que confirma que el servidor está activo.

- **Conectate desde el cliente:
Para interactuar con el servidor, ejecuta el archivo del cliente TCP usando el siguiente comando:
node client.js

El cliente se conectará al servidor y te mostrará un menú interactivo para operar con los recursos de la biblioteca, como libros, autores y editoriales.

## Funciones y posibles respuestas del servidor

### Libros (Books)

#### Obtener todos los libros
El servidor enviará una lista con todos los libros disponibles en la biblioteca en formato JSON.

Ejemplo de respuesta:
{
  "id": "1234",
  "title": "1984",
  "author": "George Orwell",
  "year": "1949"
}

#### Añadir un libro
Al añadir un nuevo libro, el servidor confirmará el éxito de la operación si se han proporcionado todos los datos necesarios, como el título, autor y año de publicación.

Ejemplo de comando:
ADD BOOK {"title": "1984", "author": "George Orwell", "year": "1949"}

Respuesta exitosa:
{
  "message": "Libro añadido exitosamente"
}

Si faltan datos, se notificará al usuario con un mensaje de error:
ERROR: No colocaste todos los datos requeridos

#### Buscar un libro
El servidor permite buscar libros por diferentes criterios como el ID, título, autor o año de publicación. Si la búsqueda se realiza correctamente, el servidor devolverá los libros que coincidan con el criterio especificado.

Ejemplo de comando:
FIND BOOK {"criterio": "author", "valor": "George Orwell"}

Respuesta exitosa:
{
  "id": "1234",
  "title": "1984",
  "author": "George Orwell",
  "year": "1949"
}

Si los criterios de búsqueda no están completos, el servidor devolverá un mensaje de error:
ERROR: No colocaste todos los datos requeridos

#### Eliminar un libro
Para eliminar un libro, es necesario proporcionar el ID correspondiente.

Ejemplo de comando:
DELETE BOOK {"id": "1234"}

Si la operación es exitosa, el servidor confirmará la eliminación del libro:
{
  "message": "Libro eliminado exitosamente"
}

Si no se proporciona un ID válido, el servidor indicará el error:
ERROR: No colocaste todos los datos requeridos

### Autores (Authors)

#### Obtener todos los autores
El servidor enviará una lista con todos los autores disponibles en la base de datos.

Ejemplo de respuesta:
{
  "id": "abcd",
  "name": "Gabriel García Márquez",
  "nationality": "Colombiana",
  "genre": ["novel", "short story"]
}

#### Añadir un autor
El servidor permite añadir autores proporcionando datos como el nombre, la nacionalidad y los géneros en los que escribe.

Ejemplo de comando:
ADD AUTHOR {"name": "Gabriel García Márquez", "born": "1927", "nationality": "Colombiana", "genre": ["novel", "short story"]}

Respuesta exitosa:
{
  "message": "Autor añadido exitosamente"
}

Si falta algún dato obligatorio, el servidor devolverá un mensaje de error:
ERROR: No colocaste todos los datos requeridos

#### Buscar un autor
Los usuarios pueden buscar autores por nombre o nacionalidad.

Ejemplo de comando:
FIND AUTHOR {"criterio": "name", "valor": "Gabriel García Márquez"}

Respuesta exitosa:
{
  "id": "abcd",
  "name": "Gabriel García Márquez",
  "nationality": "Colombiana",
  "genre": ["novela", "realismo mágico"]
}

Si no se proporcionan los criterios de búsqueda requeridos, el servidor devolverá un mensaje de error:
ERROR: No colocaste todos los datos requeridos

### Editoriales (Publishers)

#### Obtener todas las editoriales
El servidor enviará una lista con todas las editoriales disponibles.

Ejemplo de respuesta:
{
  "id": "wxyz",
  "name": "Penguin Books",
  "country": "UK",
  "titles": 2000
}

#### Añadir una editorial
Para añadir una nueva editorial, los usuarios deben proporcionar datos como el nombre de la editorial, el país y el número de títulos publicados.

Ejemplo de comando:
ADD PUBLISHER {"name": "Penguin Books", "country": "UK", "titles": 2000}

Respuesta exitosa:
{
  "message": "Editorial añadida exitosamente"
}

Si faltan datos, el servidor devolverá un mensaje de error:
ERROR: No colocaste todos los datos requeridos

## Posibles errores del servidor
Además de los errores que ocurren cuando faltan datos obligatorios, los usuarios también pueden encontrarse con otros errores, como problemas de formato o conexión.

**Errores de conexión**: Si el cliente pierde la conexión con el servidor o hay problemas en la red, el cliente recibirá un mensaje indicando que la conexión se ha cerrado.
Client: connection with server closed

## Estructura del Proyecto
La estructura del proyecto sigue las siguientes convenciones:

**server.js**: Manejador principal del servidor TCP. Este archivo procesa las conexiones de los clientes y responde a los comandos que se reciben.

**client.js**: Cliente TCP que interactúa con el servidor, permitiendo a los usuarios enviar comandos y recibir respuestas a través de la terminal.

**controllers/**: Carpeta que contiene los controladores con la lógica de negocio para gestionar libros, autores y editoriales.

- **booksController.js**: Gestiona las operaciones relacionadas con los libros (obtener, añadir, buscar y eliminar).
- **authorsController.js**: Gestiona las operaciones relacionadas con los autores (obtener, añadir y buscar).
- **publishersController.js**: Gestiona las operaciones relacionadas con las editoriales (obtener y añadir).

**models/**: Modelos encargados de gestionar la persistencia de datos en archivos JSON.

- **booksModel.js**: Lee y escribe los datos de los libros.
- **authorsModel.js**: Lee y escribe los datos de los autores.
- **publishersModel.js**: Lee y escribe los datos de las editoriales.

**data/**: Carpeta donde se almacenan los archivos JSON con los datos de la biblioteca.

- **books.json**: Almacena los datos de los libros.
- **authors.json**: Almacena los datos de los autores.
- **publishers.json**: Almacena los datos de las editoriales.

**views/**: Carpeta que contiene la lógica para formatear las respuestas que el servidor envía al cliente. La función `formatResponse` toma los datos y los convierte en una cadena JSON legible para su uso en otras partes del proyecto.

---
