# API Rest con Deno y TypeScript 

## Hecho por Juan Pablo de Jesus Figueroa Jaramillo

### Estudiante de la Universidad de Colima 

Deno es un tiempo de ejecución para JavaScript y TypeScript que se basa en el motor V8 JavaScript y el lenguaje de programación Rust. Fue creado por Ryan Dahl, creador original de Node.js, y se centra en la seguridad y la productividad.

## API Rest

La transferencia de estado representacional o REST es un estilo de arquitectura software para sistemas hipermedia distribuidos como la World Wide Web.


![Screen 5](/images/Deno.svg)

## Iniciar con deno

    curl -fsSL https://deno.land/x/install/install.sh | sh

### Instalar deno en el path

    export DENO_INSTALL="/home/usario_personal/.deno"
    export PATH="$DENO_INSTALL/bin:$PATH"

## Como utilizar este codigo 

Primero vamos a clonar el repositorio con git, donde podemos ver que hay un formato de Makefile, el cual nos va a compilar todas las acciones que se ejecutarán en el servidor.

### Comandos de Make

#### Run

Aqui vamos a correr el programa y vamos iniciar el servidor de Rest API con deno.

    make run

### Test

Aqui vamos a ser un pequeño test del script de servidor para crear un token para la API rest.

    make test


