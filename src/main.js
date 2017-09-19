import createPDF417 from './pdf417-min';

function drawBarcode(canvas, barcodeMatrix, blockWidth, blockHeight) {
  const ctx = canvas.getContext('2d');
  let positionY = 0;
  for (let row = 0; row < barcodeMatrix.num_rows; row += 1) {
    let positionX = 0;
    for (let col = 0; col < barcodeMatrix.num_cols; col += 1) {
      if (barcodeMatrix.bcode[row][col] === '1') {
        ctx.fillStyle = '#000';
      } else {
        ctx.fillStyle = '#FFF';
      }
      ctx.fillRect(positionX, positionY, blockWidth, blockHeight);
      positionX += blockWidth;
    }
    positionY += blockHeight;
  }
}

export default function generateBarcode(text, blockWidth, blockHeight) {
  const canvas = document.createElement('canvas');
  const PDF417 = createPDF417();
  PDF417.init(text);
  const barcodeMatrix = PDF417.getBarcodeArray();
  canvas.width = blockWidth * barcodeMatrix.num_cols;
  canvas.height = blockHeight * barcodeMatrix.num_rows;
  drawBarcode(canvas, barcodeMatrix, blockWidth, blockHeight);
  return canvas.toDataURL();
}
