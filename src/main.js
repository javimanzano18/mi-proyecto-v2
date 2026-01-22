import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      // Simple toggle implementation
      // Ideally toggles a class 'active' on a mobile menu container
      console.log('Menu clicked'); 
    });
  }

  // Animation for Connections (Data Flow)
  const paths = document.querySelectorAll('.connections-svg path');
  
  paths.forEach(path => {
    // Set up dash array for animation
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
    
    // Add animation class
    path.animate([
      { strokeDashoffset: length },
      { strokeDashoffset: 0 }
    ], {
      duration: 2000,
      easing: 'ease-out',
      fill: 'forwards'
    });
  });

  // Make nodes Draggable (Visual only)
  const nodes = document.querySelectorAll('.node');
  
  nodes.forEach(node => {
    node.addEventListener('mousedown', (e) => {
      // Basic drag implementation
      let isDragging = true;
      let startX = e.clientX;
      let startY = e.clientY;
      let initialLeft = node.offsetLeft;
      let initialTop = node.offsetTop;

      const onMouseMove = (moveEvent) => {
        if (!isDragging) return;
        const dx = moveEvent.clientX - startX;
        const dy = moveEvent.clientY - startY;
        
        node.style.left = `${initialLeft + dx}px`;
        node.style.top = `${initialTop + dy}px`;
      };

      const onMouseUp = () => {
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  });
});
