# ipos-cursor an iPadOS 13.4 Cursor for the web

Simple implementation of iPadOS 13.4 Cursor built with web technologies.

[See Old Demo](https://codepen.io/josesaranda/pen/oNjEWwb) (only  desktop browser)

### Instalation

```shell
npm install iposcursor --save
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
  <link rel="stylesheet" href="node_modules/iposcursor/css/ipos-cursor.min.css">
</head>
  <body>
  <!-- your awesome code -->
  <!-- ... -->
  <script src="node_modules/iposcursor/ipos-cursor.min.js"></script>
  </body>
<html>
```