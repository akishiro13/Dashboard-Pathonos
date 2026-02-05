/* var imageConverter = {
    convert: function(){
        html2canvas(document.getElementById("acsbar")).then(function(canvas) {
            var link = document.createElement("a");
            document.body.appendChild(link);
            link.download = "acsbar.png";
            link.href = canvas.toDataURL();
            link.target = '_blank';
            link.click();
          });
    }
    
} */

/* ES6 */
/* import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from '../libs/node_modules/html-to-image'; */

/* ES5 */
/* var htmlToImage = require('html-to-image.js'); */

function convertHtmlToPng()
{
    /* htmlToImage.toPng(document.getElementById('acsbar'))
        .then(function (dataUrl) {
    download(dataUrl, 'acsbar.png');
  }); */


  modernScreenshot.domToPng(document.querySelector('#acsbar')).then(dataUrl => {
    const link = document.createElement('a')
    link.download = 'acsbar.png'
    link.href = dataUrl
    link.click()});

    /* navigator.mediaDevices.getDisplayMedia(); */
}