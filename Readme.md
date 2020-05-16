# iposcursor an iPadOS 13.4 Cursor for the web

Simple implementation of iPadOS 13.4 Cursor built with web technologies.

[See Demo](https://codepen.io/josesaranda/pen/oNjEWwb) (only  desktop browser)

### Instalation

#### From NPM

```shell
npm install iposcursor --save
```

#### From CDN

```html
<!-- Include anywhere inside head tag -->
<link rel="stylesheet" href="https://unpkg.com/iposcursor/dist/css/iposcursor.min.css">
<!-- Include at the end of body tag -->
<script src="https://unpkg.com/iposcursor/dist/iposcursor.min.js"></script>
```

### Usage

#### ES and TS modules

```typescript
import { IposCursor, create } from 'iposcursor';

let cursor = new IposCursor({element : 'elementId'});
cursor.suscribe();
// or
let cursor = create({element : 'elementId'});
cursor.suscribe();
```

#### Browser

```html
<html>
<head>
  <!-- your awesomes styles, meta, etc -->
  <link rel="stylesheet" href="node_modules/iposcursor/css/iposcursor.min.css">
</head>
  <body>
  <!-- your awesome code -->
  <!-- ... -->
  <script src="node_modules/iposcursor/iposcursor.min.js"></script>
  <script>
    let cursor = iposcursor.create({element : 'elementId'});
    cursor.suscribe();
  </script>
  </body>
<html>
```