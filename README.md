# Simply-UI
Simple UI package for easy-to-use mobile-friendly simple designs

## Installation

### UNPKG
Easy-to-use link to instantly get access to Simply-UI 
- Add a link to `https://github.com/benjamin-Keller/Simply-UI` in your project's `<head>`.
- Start using Simply's stylings!

#### Usage
``` html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/simply-ui@1.0.0/dist/css/index.css">
    <title>Simply-UI Demo</title>
</head>
```

### NPM
- Download release.
- Run `npm i simply-ui --save` on your project.
- Add a link to the Simply-UI's `dist/css/index.css` in your `<head>`.

_I have never posted to NPM or used anything from it before, if you can verify that you can use the library from it I will appreciate it greatly! <3_

#### Usage
``` javascript
import { simply } from 'simply';

simply({
    scrollbar: 'simply',
    scrollbar_color: 'primary'
});
```
#### Options

* *scrollbar* - _default / simply_ (Default's the body's scrollbars) 
* *scrollbar_color* - Any color under $colors variable (Sets the scrollbars default color) 

### Gulp
- Download release.
- Run `npm install` on your project.
- Add a link to the Simply-UI's `dist/css/index.css` in your `<head>`.
- Run your project with `gulp` for development,
  - gulp-purgecss will only build used css classes to save space.
## Demo

See it in action with this [Demo](https://benjamin-keller.github.io/Simply-UI/)

Also see sample [Homepage](https://benjamin-keller.github.io/Simply-UI/samples/homepage.html)

