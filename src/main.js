import './style.css'
import { initDrawing } from './drawing.js';

initDrawing();

const heartContainer = document.querySelector('.heart-container');
const scene = document.querySelector('.scene');

// Parallax effect for the heart
document.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 20;
  const y = (window.innerHeight / 2 - e.pageY) / 20;

  // Combine with the existing float animation which uses transform
  // Since we can't easily merge with CSS animation transform, we'll apply it to the scene or a wrapper
  // Or we can just rotate the heart slightly

  // Let's rotate the heart container slightly based on mouse
  // Note: The heart container already has an animation 'float' which uses transform.
  // Modifying transform directly will conflict.
  // Better to apply this to the .heart inside, which has a static rotation.

  const heart = document.querySelector('.heart');
  if (heart) {
    heart.style.transform = `rotateY(${20 + x}deg) rotateX(${10 - y}deg)`;
  }
});

// Create ripples on click
document.addEventListener('click', (e) => {
  const ripple = document.createElement('div');
  ripple.classList.add('ripple');
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;
  document.body.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 1000);
});

// Add ripple style dynamically
const style = document.createElement('style');
style.innerHTML = `
  .ripple {
    position: absolute;
    width: 10px;
    height: 10px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: ripple-anim 1s linear;
    pointer-events: none;
    z-index: 100;
  }
  @keyframes ripple-anim {
    0% {
      width: 0;
      height: 0;
      opacity: 0.5;
    }
    100% {
      width: 500px;
      height: 500px;
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
