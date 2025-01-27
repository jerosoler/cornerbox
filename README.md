[![GitHub license](https://img.shields.io/github/license/jerosoler/cornerbox)](https://github.com/jerosoler/cornerbox/blob/main/LICENSE)

# CornerBox 
CSS Houdini library. 


[PLAY](https://jerosoler.github.io/cornerbox/)

![Demo](https://github.com/jerosoler/cornerbox/raw/main/docs/cornerbox.png)

## CDN
```html
<script src="https://cdn.jsdelivr.net/gh/jerosoler/cornerbox/CornerBox.js"></script>
```

## NPM 
```bash
npm install cornerbox
```

## How to use

Download `Cornerbox.js` file.

### Javascript:
```javascript
if ('paintWorklet' in CSS && 'registerProperty' in CSS && 'CSSUnitValue' in window) {
            CSS.registerProperty({
                name: '--cornerbox-width',
                syntax: '<length>',
                initialValue: '10px',
                inherits: false
            });
            CSS.registerProperty({
                name: '--cornerbox-length',
                syntax: '<length>',
                initialValue: '10px',
                inherits: false
            });
            CSS.registerProperty({
                name: '--cornerbox-color',
                syntax: '<color>',
                initialValue: '#ffffff',
                inherits: false
            });

            CSS.paintWorklet.addModule('CornerBox.js');
        } else {
            console.log("Not Supported");
            alert("Not Supported");
        }
```

### CSS 
```css
div {
    --cornerbox-color:#1100fc;
    --cornerbox-width: 5px;
    --cornerbox-length: 15px;
    background-image: paint(cornerbox);
}
```