# TIPOS DE DATOS EN TYPESCRIPT

Este repositorio fue creado para colocar los tipos que considero más importantes de TS, tanto los que comparte de JavaScript y otros que son exclusivos de TS, pues como sabemos, TS es un superset de JS (todo código de JS puede ser TS, pero no al revés).

Ahora sí, comencemos.

Primero, debemos tener TypeScript instalado. Si lo tenemos, podemos instalarlo con el siguiente comando:

```text
npm install -g typescript
```

↑ Esto es en caso no se use algun framework o librería, pues por lo general cuando se crea un proyecto así, ya se instala dentro de las dependencias.

En caso de crear un proyecto nuevo, lo ideal sería usar el comando `tsc --init` para crear el archivo `tsconfig.json` donde encontraremos la configuración de TS. En este caso, ya es un archivo existente.

A medida que creaba mis archivos de TS, utilizaba `tsc --watch` (o su equivalente `tsc -w`) para que todo lo que haga en TS se compile a JS, y así poder verlo luego en la terminal los outputs de mis `console.log()`.

Para ver eso último, decidí no utilizar el navegador sino la misma terminal, gracias al comando `node myfile.js` (la ruta de mi archivo del proyecto, que siempre debe apuntar al archivo JS). Algo así:

```text
node types/ts-only/08-generics.js
```
