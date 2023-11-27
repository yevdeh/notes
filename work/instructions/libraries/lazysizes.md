1. `npm install lazysizes --save`.
1. In the root file: `import 'lazysizes'`. If React, also: `import 'lazysizes/plugins/attrchange/ls.attrchange'`.
1. Add to images: "lazyload" class, data-src attribute, and optionally a src attribute with a placeholder image, e.g.:
```html
<img class="lazyload" data-src="[image src]" src="[placeholder image]"/>
```

Source: https://github.com/aFarkas/lazysizes
