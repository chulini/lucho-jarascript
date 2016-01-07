# Lucho JaraScript
### ¿Qué hace?
Plugin jQuery que reemplaza todas las imágenes de una pagina web por imágenes de lucho jara y todos los textos por las líricas de un golpe de suerte.

### Uso Rápido
Pone
```html
<script type="text/javascript" src="http://rawgit.com/chulini/lucho-jarascript/master/lucho-jarascript.js"></script>
```
justo antes de ```</head>```

### ¿No te basta con cambiar la letra e imágenes?

Puedes llevar la experiencia al siguiente nivel. Basta con poner
```html
<script>    
    var customLucho = {
        player: true,
        autoplay: true
    };
</script>
```
justo antes de ```</body>``` y podrás disfrutar de toda una experiencia multimedia.

### Opciones para customLucho

| Opción | ¿Qué hace? | Valor por Defecto | Valores que puede tomar |
| :----: | :--------: | :----------------:| :---------------------: |
| target | Definir donde quieres que aparezca *Luis Jara* | **body** (Usualmente, toda la página)| Un selector de css (Idealmente que sea único si es que se usa junto con **player**) |
| player | Agrega un botón en el extremo superior derecho del target que te permitirá disfrutar del video de *Un Golpe de Suerte* | **false** | **true** para disfrutar del video |
| autoplay | No necesitarás apretar el botón para disfrutar de *Un Golpe de Suerte* (La opcion *player* debe tener el valor **true** para que funcione) | **false** | **true** para disfrutar de *Un Golpe de Suerte* sin intervención humana |  


### Instalación con Bower

En tu proyecto, corre `bower i lucho-jarascript`. Luego de eso, estará el JS en `bower_components/lucho-jarascript/lucho-jarascript.js` para ser llamado desde tu HTML.

### Instalación con NPM

En tu proyecto, ejecuta `npm i lucho-jarascript`. Luego de eso, estará el JS en `node_modules/lucho-jarascript/lucho-jarascript.js` para ser llamado desde tu HTML.

### Quiero luchojarizar toda la internet ¿Qué puedo hacer?
- Abre la pagina que quieres luchojarizar
- Escribe ```javascript:``` (ojo: ***escribe***, no funciona copiar y pegar)
- Pega esto justo después de ```javascript:``` y apreta enter:
```javascript
(function(){var root=this,d=root.document,j=d.createElement('script');j.type='text/javascript';j.src='http://rawgit.com/chulini/lucho-jarascript/master/lucho-jarascript.js?' + Math.random();d.body.appendChild(j);}());
```

### Ejemplo
![Lucho JaraScript en acción](http://i.imgur.com/JecxWAU.png "lalegal.cl con Lucho JaraScript")
