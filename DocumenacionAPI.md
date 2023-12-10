# Documentación Config API

## Métodos

1. connect() 

Este método asincrónico se encarga de establecer una conexión con la base de datos MongoDB.

- const database = require('nombre_del_modulo');
- await database.connect();
- const database = require('nombre_del_modulo');
- async function iniciarAplicacion() {
    await database.connect();}
- iniciarAplicacion();

2. disconnect()

Este método asincrónico se encarga de cerrar la conexión con la base de datos MongoDB.

- const database = require('nombre_del_modulo');
- await database.disconnect();

3. Configuración

Antes de utilizar la API, asegúrate de configurar la URI de la base de datos en la variable de entorno DBURI.

export DBURI=mongodb://localhost:27017/feed-uca


# Documentación API de auth

## Documentación de API para el Modelo de Usuario

### Resumen

Esta documentación proporciona información sobre la API para el modelo de Usuario. El modelo de Usuario está diseñado para representar datos de usuarios, incluyendo campos como nombre de usuario, DUI (Documento Único de Identidad), número de teléfono, contraseña cifrada, sal y tokens. El modelo incluye métodos para cifrar contraseñas, generar sales y comparar contraseñas.

#### Esquema de Usuario

- username: String (obligatorio, único) - Nombre de usuario del usuario.
- dui: String (obligatorio) - DUI del usuario.
- tel: String (obligatorio) - Número de teléfono del usuario.
- hashedPassword: String (obligatorio) - Contraseña cifrada utilizando crypto.pbkdf2Sync.
- salt: String - Sal utilizada para el cifrado de contraseñas.
- tokens: Array de Strings - Array que contiene tokens de usuario.
- Marcas de tiempo
- El esquema de Usuario incluye marcas de tiempo para createdAt y updatedAt.

#### Métodos

- encrypPassword(password: String) -> String
- Cifra la contraseña proporcionada utilizando la sal del usuario y crypto.pbkdf2Sync. Devuelve la contraseña cifrada como una cadena.

- makeSalt() -> String
- Genera una sal aleatoria utilizando crypto.randomBytes. Devuelve la sal como una cadena.

- comparePassword(password: String) -> Boolean
- Compara la contraseña proporcionada con la contraseña cifrada almacenada. Devuelve true si las contraseñas coinciden, false en caso contrario.

#### Virtuales

- password: String

- Una propiedad virtual que permite establecer una contraseña en texto plano. Cuando se establece, genera una sal aleatoria, cifra la contraseña y actualiza los campos salt y hashedPassword.

## Documentación de API para el validación de Usuario

Esta documentación describe cómo usar la API de validación de usuario para validar la entrada del usuario durante el registro.

- Endpoint: /registro

#### Descripción

Este endpoint se utiliza para validar la entrada del usuario durante el registro. Asegura que los datos proporcionados cumplan con los criterios necesarios para crear una nueva cuenta de usuario.

#### Solicitud

- Método: POST
- Content-Type: application/json
- Cuerpo de la Solicitud

#### El cuerpo de la solicitud debe contener los siguientes parámetros:

- username (string): Nombre de usuario deseado (entre 4 y 32 caracteres).
- dui (string): DUI del usuario (9 dígitos, sin guiones).
- tel (string): Número de teléfono del usuario (8 dígitos).
- password (string): Contraseña del usuario (no vacía).

## Reglas de Validación

### Nombre de Usuario:

- No debe estar vacío.
- Debe tener entre 4 y 32 caracteres.

### DUI:

- No debe estar vacío.
- Debe tener exactamente 9 dígitos (sin guiones).
- Número de Teléfono:
- No debe estar vacío.
- Debe tener exactamente 8 dígitos.

### Contraseña:

- No debe estar vacía.

### Uso

Para utilizar el middleware de validación en tu aplicación Express, importa registerValidator desde este módulo y aplícalo al endpoint /registro.

# Documentación API de Post (soli/don)

## Documentación de API para modelo de post(soli/don)

### Descripción

La API proporciona endpoints para gestionar solicitudes de posts. Cada solicitud de post tiene información como título, correo electrónico, nombre, imagen, teléfono, dirección, motivo e información adicional.

### Modelo de Datos

#### PostSoli

El modelo PostSoli representa una solicitud de post y tiene los siguientes campos:

- title_Soli (String, requerido): Título de la solicitud.
- Email_Soli (String, requerido): Correo electrónico asociado a la solicitud.
- Nombre_Soli (String, requerido): Nombre asociado a la solicitud.
- image_Soli (String, requerido): URL de la imagen asociada a la solicitud.
- telefono_Soli (Número, requerido): Número de teléfono asociado a la solicitud.
- direccion_Soli (String, requerido): Dirección asociada a la solicitud.
- motivo_Soli (String, requerido): Motivo de la solicitud.
informacion_Soli (String, requerido): Información adicional de la solicitud.
- hidden (Boolean, por defecto false): Indica si el post está oculto o no.

#### Campos Adicionales

- createdAt (Fecha): Fecha de creación del post.
- updatedAt (Fecha): Fecha de la última actualización del post.
- Endpoints

### 1. Crear una nueva solicitud de post

- URL: /api/postsoli
- Método: POST
- Parámetros de entrada:
- title_Soli (String, requerido)
- Email_Soli (String, requerido)
- Nombre_Soli (String, requerido)
- image_Soli (String, requerido)
- telefono_Soli (Número, requerido)
- direccion_Soli (String, requerido)
- motivo_Soli (String, requerido)
- informacion_Soli (String, requerido)

### 2. Obtener todas las solicitudes de posts

- URL: /api/postsoli
- Método: GET
- Parámetros de salida: Lista de todas las solicitudes de posts.

### 3. Obtener una solicitud de post por ID

- URL: /api/postsoli/:id
- Método: GET
- Parámetros de entrada: ID de la solicitud de post.
- Parámetros de salida: Detalles de la solicitud de post.

### 4. Actualizar una solicitud de post por ID

- URL: /api/postsoli/:id
- Método: PUT
- Parámetros de entrada:
- ID de la solicitud de post.
- Cualquier campo que se desee actualizar.

### 5. Eliminar una solicitud de post por ID

- URL: /api/postsoli/:id
- Método: DELETE
- Parámetros de entrada: ID de la solicitud de post.

## Documentación de API para la validación de post(soli/don)

- #### Validador createPostDonValidator
- #### Valida los datos al crear una nueva donación.

### Parámetros:

#### identifire (opcional):

- Debe ser un ID de MongoDB válido.

#### title_don:

- No debe estar vacío.

#### Email_Don:

- No debe estar vacío.
- Debe ser un correo electrónico válido.
#### Nombre_Don:

- No debe estar vacío.
- Longitud máxima: 64 caracteres.
#### image_don:

- No debe estar vacío.
- Debe ser una URL válida.
#### telefono_don:

- No debe estar vacío.
- Debe ser un número de teléfono móvil válido.
#### description_don:

- No debe estar vacío.
- Longitud máxima: 280 caracteres.
#### Tipo_don:

- No debe estar vacío.
- Longitud máxima: 280 caracteres.
#### Cantidad_don:

- No debe estar vacío.
- Longitud máxima: 280 caracteres.

#### Validador idInParamsValidator:

- Valida el identificador de la donación en los parámetros de la URL.


