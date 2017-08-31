# pdf417 

Barcode generator in PDF417 format. It returns a base64 encoded image url. 
This module is based on https://github.com/bkuzmic/pdf417-js.

![screen shot 2017-06-19 at 2 52 59 pm](https://image.ibb.co/je5JBk/Capture.png)

### Install:
```
npm install --save pdf417
```
or
```
yarn add pdf417
```



### Usage:
```js
import generateBarcode from "pdf417";
//...
const Barcode = ({ text, blockWidth, blockHeight }) => {
    <div>
        <img src={generateBarcode(text, blockWidth, blockHeight)} />
    </div>
}

```

### Properties:
Text:
Text that you want encode into the barcode. The text is NOT included in the generated barcode image. If you want to see the text below the barcode you will need to add another element by yourself. 

blockWidth, blockHeight: 
Width and height for the basic unit used for drawing the barcode in pixels. These two value will affect barcode's length-to-width ratio, and its size. You can also adjust the barcode size by adding your custom stlyes to the img element.  

LICENSE: MIT
