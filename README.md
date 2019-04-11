# md-links 
Los archivos Markdown normalmente contienen links (vínculos/ligas) que muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir.

Esta librería se encargar de leer y analizar los archivos en formato Markdown, para verificar los links que contengan y reportar algunas estadísticas como ver los links totales, los únicos y los que estan rotos.

## Uso en CLI

md-links <path> [options]


## Pruebas
path: Ruta absoluta o relativa al archivo o directorio.

options:

--validate: Ingresando esta opción se verificara el estado del link.

#


### `README.md`

- [  ✓] Colocar el pseudo código o diagrama de flujo con el algoritmo que soluciona el problema.
- [  ✓] Un board con el backlog para la implementación de la librería.
- [ ✓ ] Documentación técnica de la librería.
- [ ✓ ] Guía de uso e instalación de la librería

### API `mdLinks(path, opts)`

- [ ] El módulo exporta una función con la interfaz (API) esperada.
- [ ] Implementa soporte para archivo individual
- [ ] Implementa soporte para directorios
- [ ] Implementa `options.validate`

### Pruebas / tests

- [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions,
      lines, y branches.
- [ ] Pasa tests (y linters) (`npm test`).

### CLI

- [ ✓ ] Expone ejecutable `md-links` en el path (configurado en `package.json`)
- [ ] Se ejecuta sin errores / output esperado
- [  ✓] Implementa `--validate`
- [ ] Implementa `--stats`

## Hacker Edition

- [ ] Crear un script en el package.json que transforme el codigo ES6+ a ES5.
- [ ] Puedes agregar la propiedad line a cada objeto link indicando en qué línea del archivo se encontró el link.
- [ ] Puedes agregar más estadísticas.
- [ ] Integración continua con Travis o Circle CI.

## Diagrama de flujo
![diagramareadme](https://user-images.githubusercontent.com/46533816/55926710-fa7b6d80-5bd7-11e9-9fe4-4863cde8b800.png)


## Flujo de Trabajo 

![backlog md-links](https://user-images.githubusercontent.com/46533816/55926718-0bc47a00-5bd8-11e9-8231-0cca3ba947db.png)
