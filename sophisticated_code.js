// filename: sophisticated_code.js

/*
  This code generates a sophisticated and elaborate fractal pattern using recursive function calls.
  The pattern is created by drawing shapes in a recursive manner, resulting in a visually stunning output.
*/

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const size = 800;
canvas.width = size;
canvas.height = size;

const bgColor = "#000000";
const shapeColor = "#FFFFFF";
const shapeStrokeColor = "#FF0000";

function drawShape(x, y, width, height) {
  ctx.fillStyle = shapeColor;
  ctx.strokeStyle = shapeStrokeColor;
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.fill();
  ctx.stroke();
}

function recursivePattern(x, y, width, height) {
  if (width < 10 || height < 10) {
    return;
  }

  drawShape(x, y, width, height);

  const nextWidth = width / 2;
  const nextHeight = height / 2;

  recursivePattern(x - nextWidth, y - nextHeight, nextWidth, nextHeight);
  recursivePattern(x + width, y - nextHeight, nextWidth, nextHeight);
  recursivePattern(x - nextWidth, y + height, nextWidth, nextHeight);
  recursivePattern(x + width, y + height, nextWidth, nextHeight);
}

function clearCanvas() {
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, size, size);
}

function draw() {
  clearCanvas();
  recursivePattern(size / 2, size / 2, size, size);
}

draw();