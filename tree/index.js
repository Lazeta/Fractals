function drawTree(x1, y1, angle, depth, branchLength) {
    if (depth === 0) {
      return;
    }
    const x2 = x1 + Math.cos(angle * Math.PI / 180) * depth * branchLength;
    const y2 = y1 + Math.sin(angle * Math.PI / 180) * depth * branchLength;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    drawTree(x2, y2, angle - 23, depth - 1, branchLength);
    drawTree(x2, y2, angle + 20, depth - 1, branchLength);
}
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
ctx.translate(width / 2, height);
drawTree(0, 0, -90, 11, 10);