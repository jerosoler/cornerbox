# CornerBox 
CSS Houdini library. 


[PLAY](https://jerosoler.github.io/cornerbox/)

![Demo](https://github.com/jerosoler/cornerbox/raw/main/docs/cornerbox.png)

## How to use

Download `Cornerbox.js` file.

### Javascript:
```javascript
if ('paintWorklet' in CSS && 'registerProperty' in CSS && 'CSSUnitValue' in window) {
            CSS.registerProperty({
                name: '--cornerbox-lenght',
                syntax: '<length>',
                initialValue: '10px',
                inherits: false
            });
            CSS.registerProperty({
                name: '--cornerbox-line',
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
    --cornerbox-line: 5px;
    --cornerbox-lenght: 15px;
    background-image: paint(cornerbox);
}
```