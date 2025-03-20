// Function to generate stars in the background dynamically
function generateStars() {
    const starsContainer = document.getElementById('stars-container');
    
    for (let i = 0; i < 1000; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      const size = Math.random() * 3 + 1; // Random size between 1px and 4px
      const xPosition = Math.random() * window.innerWidth;
      const yPosition = Math.random() * window.innerHeight;
      
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${yPosition}px`;
      star.style.left = `${xPosition}px`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration for twinkling effect
  
      starsContainer.appendChild(star);
    }
  }
  
  // Create star twinkling animation in CSS
  const style = document.createElement('style');
  style.innerHTML = `
    .star {
      position: absolute;
      border-radius: 50%;
      background: white;
      opacity: 0.7;
      animation: twinkle 1s infinite alternate;
    }
  
    @keyframes twinkle {
      0% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);
  
  // Run the function to generate stars
  generateStars();
  
  // Event listener for the button to create a dynamic welcome message
  document.getElementById('startButton').addEventListener('click', () => {
    alert('Welcome to Zero Gravity Fitness! Your journey to new heights begins now!');
  });
  