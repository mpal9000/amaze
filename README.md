# amaze

Maze solving game



## Usage

```javascript
import amaze from 'amaze';

amaze(element, options);
```

```html
<script src="./dist/amaze.js"></script>
<!-- OR -->
<script src="./dist/amaze.min.js"></script>


<script>amaze(element, options);</script>
```



## API

### amaze(element, options)

Create a new game board in vitual-dom
and use it to replace the supplied DOM element.
Accepts a DOM element and an optional options object.

Parameters:
- `element`: Target DOM element (required)
- `options`: object (optional):
  - `rows`: Positive integer (optional - defaults to 20)
  - `columns`: Positive integer (optional - defaults to 20)
  - `margin`: Margin around cells in percent (optional - defaults to 0.5)
  - `maxWinners`: Positive integer (optional - defaults to 3)



## Development

```shell
$ npm install

$ npm run build
$ npm run watch
$ npm run clean
$ npm run disc

$ npm run examples
```
