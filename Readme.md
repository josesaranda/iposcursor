# ipadOS 13.4 CursorJS

Simple implementation of ipadOS 13.4 cursor built in Javascript.

[See Demo](https://codepen.io/josesaranda/pen/oNjEWwb) (only  desktop browser)

### Instalation  

Add `lib` folder to your project.

Then add ipadOSCursor.css to the head tag 
```html
<head>
  <!-- your awesomes styles, meta, etc -->
  <link rel="stylesheet" href="path/to/lib/ipadOSCursor.css">
</head>
```

Add ipadOSCursor.js to the end of body tag
```html
<body>
  <!-- your awesome code -->
  <!-- ... -->
  <script src="path/to/lib/ipadOSCursor.js"></script>
</body>
```

### Usage  

Call function create and suscribe
```javascript
let cursor = IpadOSCursor.create({element : 'elementId'});
cursor.suscribe();
// or
new IpadOSCursor({element : 'elementId'});
```

Call function unsuscribe to remove cursor
```javascript
// ...
// your awesome cursor code behind
cursor.unsuscribe();
```