
# sevenup


```
// npx sevenup './public/img/sprite/blank1/left/coll/' './public/sprites/blanka/left/' --p
// npx sevenup './public/img/sprite/blank1/left/bl_crouch/' './public/sprites/blanka/left/bl_crouch/' --p
// npx sevenup './public/img/sprite/blank1/left/bl_jump_back/' './public/sprites/blanka/left/bl_jump_back/' --p
// npx sevenup './public/img/sprite/blank1/left/bl_jump_forw/' './public/sprites/blanka/left/bl_jump_forw/' --p
// npx sevenup './public/img/sprite/blank1/left/bl_punch/' './public/sprites/blanka/left/bl_punch/' --p
// npx sevenup './public/img/sprite/blank1/left/bl_punch_hard/' './public/sprites/blanka/left/bl_punch_hard/' --p
// npx sevenup './public/img/sprite/blank1/left/bl_stand/' './public/sprites/blanka/left/bl_stand/' --p
// npx sevenup './public/img/sprite/blank1/left/bl_thunder/' './public/sprites/blanka/left/bl_thunder/' --p
// npx sevenup './public/img/sprite/blank1/left/bl_walk_back/' './public/sprites/blanka/left/bl_walk_back/' --p
// npx sevenup './public/img/sprite/blank1/left/bl_walk_forw/' './public/sprites/blanka/left/bl_walk_forw/' --p
```


Utility for making and loading spritesheets.

## CLI

```
npx sevenup sourcedir destdir
```

This will read all the `.png` and `.jpg` images in `sourcedir` and create three files:


* `destdir/sprites.png`
* `destdir/sprites.json`
* `destdir/sprites.css`

To create a `sprites.png` with power-of-two dimensions — useful for WebGL apps, where appropriately-sized textures can have mipmaps generated — use the `--pad` or `-p` flag:

```
npx sevenup sourcedir destdir -p
```


## In browser

```js
import { load } from 'sevenup';

(async function() {
  const spritesheet = await load('destdir');

  // we have a reference to the image
  console.log(spritesheet.image.width, spritesheet.image.height);

  // get a Blob URL
  const url = await spritesheet.url('somefile.png');

  // get a <canvas>
  const canvas = spritesheet.canvas('somefile.png');

  // get a set of UV coordinates, for use in a WebGL shader
  const [u1, v1, u2, v2] = spritesheet.uv('somefile.png');

  // get the bounds of an image
  const { left, top, right, bottom, width, height } = spritesheet.box('somefile.png');
}());
```

A lower-level `spritesheet = create(img, manifest)` API also exists.

Alternatively, use CSS:

```html
<div role="img" aria-label="Some alt text" data-sevenup="srcdir/somefile.png"></div>
```

## License

[MIT](LICENSE)