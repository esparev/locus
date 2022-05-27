## Autores

- Jose Maria Esparza Arevalo - [@esparev](https://github.com/esparev)
- Jhonatan Brandon Reyes Rodriguez - [@ElJhonyx](https://github.com/ElJhonyx)
- Maria Guadalupe Paz Rojas - [@LPaz57](https://github.com/LPaz57)

## Instalacion frontend

Cambiar al directorio de frontend

```
  cd frontend/
```

Instalar el projecto con npm

```
  npm i
```

Correr los estilos de TailwindCSS

```
  npx tailwindcss -i ./src/css/tailwind.css -o ./public/css/tailwind.css
```

Compilar el proyecto

```
  npm start
```

## Instalacion backend

Es requisito tener instalado Docker en el sistema, así como contar con WSL 2 y tener habilitado Hyper-V en el caso de Windows.

Cambiar al directorio de backend

```
  cd backend/
```

Instalar el projecto con npm

```
  npm i
```

Levantar el contenedor de docker con el servicio de postgres
```
  docker-compose up -d postgres
```

Levantar el contenedor de docker con el servicio de pgadmin en caso de requerirlo
```
  docker-compose up -d pgadmin
```

Compilar el proyecto

```
  npm dev
```

# Realizar peticiones directamente a la API

Las peticiones locales (***operaciones crud***) se pueden realizar a traves del software Postman o Insomnia.

Las rutas a continuación pertenecen a las siguientes entidades:
- Usuarios
- Lugares
- Categorias

## Peticiones GET

Estas peticiones retornan todas las entidades existentes.

```
  http://localhost:3000/api/users
  http://localhost:3000/api/places
  http://localhost:3000/api/categories
```

## Peticiones GET por ID

Estas peticiones retornan las entidades según el id que se haya pasado como parametro [***:id***] en la URL.

```
  http://localhost:3000/api/users/:id
  http://localhost:3000/api/places/:id
  http://localhost:3000/api/categories/:id
```

## Peticiones POST

Estas peticiones no retornan un valor, sino que se manda un valor por medio del body con formato .json para crear una entidad. Los campos a llenar serán definidos por los modelos de sequelize y los esquemas de cada entidad.

```
  http://localhost:3000/api/users
  http://localhost:3000/api/places
  http://localhost:3000/api/categories
```

## Peticiones PATCH

Las siguientes peticiones actualizan uno o varios campos de la entidad por medio del body con formato .json según su id que se haya proporcionado en la URL como parametro [***:id***].

```
  http://localhost:3000/api/users/:id
  http://localhost:3000/api/places/:id
  http://localhost:3000/api/categories/:id
```

## Peticiones DELETE

Estas peticiones eliminan la entidad según el id que se haya proporcionado en la URL como parametro [***:id***].

```
  http://localhost:3000/api/users/:id
  http://localhost:3000/api/places/:id
  http://localhost:3000/api/categories/:id
```
