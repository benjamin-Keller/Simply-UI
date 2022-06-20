# Simply-UI
Simple UI package for easy-to-use mobile-friendly simple designs

## Installation

### CDN with JsDeliver or UNPKG
Easy-to-use link to instantly get access to Simply-UI 
- Add a `<link>` to:
  - (JsDeliver)
    - Full (81.3 KB)
  ``` HTTP
  https://cdn.jsdelivr.net/npm/simply-ui@1.1.0/dist/css/simply.css
  ```
    - Minified (65.1 KB)
  ``` HTTP
  https://cdn.jsdelivr.net/npm/simply-ui@1.1.0/dist/css/simply.min.css
  ```
  - (UNPKG)
    - Full (81.3 KB) 
  ``` HTTP
  https://unpkg.com/simply-ui@1.1.0/dist/css/simply.css
  ```
    - Minified (65.1 KB) 
  ``` HTTP
  https://unpkg.com/simply-ui@1.1.0/dist/css/simply.min.css
  ```
  in your project's `<head>`.
- Start using Simply's stylings!

#### Usage
``` html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simply-ui@1.0.0/dist/css/simply.min.css">
    <title>Simply-UI Demo</title>
</head>
```

### NPM (WIP)
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

## Demo

See it in action with this [Demo](https://benjamin-keller.github.io/Simply-UI/)

Also see sample [Homepage](https://benjamin-keller.github.io/Simply-UI/samples/homepage.html)

## Links

- JsDeliver:
  - https://cdn.jsdelivr.net/npm/simply-ui@1.1.0/dist/css/simply.css
  - https://cdn.jsdelivr.net/npm/simply-ui@1.1.0/dist/css/simply.min.css
- UNPKG:
  - https://unpkg.com/simply-ui@1.1.0/dist/css/simply.css
  - https://unpkg.com/simply-ui@1.1.0/dist/css/simply.min.css
- NPMJS:
  - https://www.npmjs.com/package/simply-ui/v/1.1.0