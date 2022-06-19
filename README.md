# Simply-UI
Simple UI package for easy-to-use mobile-friendly simple designs

## Installation

### NPM
- Download release.
- Run `npm i simply-ui --save` on your project.
- Add a link to the Simply-UI's `dist/css/index.css` in your `<head>`.

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

