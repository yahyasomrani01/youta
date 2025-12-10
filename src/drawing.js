export function initDrawing() {
    const canvas = document.getElementById('turtleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Clear canvas (transparent)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Center coordinate system
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(1, -1); // Flip Y to make math easier (up is positive)

    // String Art Heart Logic
    // Formula:
    // x = 16 * sin(t)^3
    // y = 13 * cos(t) - 5 * cos(2*t) - 2 * cos(3*t) - cos(4*t)

    ctx.lineWidth = 1;
    ctx.strokeStyle = '#ff0055'; // Neon Pink

    // Draw lines from a fixed point (or origin) to the curve?
    // The image shows lines radiating from the center or bottom to the edge.
    // Let's try drawing lines from the center (0,0) to the curve points.

    const scale = 12; // Scale up the heart slightly more

    for (let i = 0; i < 6000; i++) {
        const t = (i * Math.PI) / 180; // Convert to radians, iterate enough times

        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

        const px = x * scale;
        const py = y * scale;

        ctx.beginPath();
        ctx.moveTo(0, 0); // Radiate from center
        ctx.lineTo(px, py);
        ctx.stroke();
    }
}
