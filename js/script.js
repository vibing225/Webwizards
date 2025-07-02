// ===== BURGER MENU =====
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('active');
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== LAVA LAMP BLOB ANIMATION =====
const blobs = document.querySelectorAll('.lava-lamp .blob');

blobs.forEach((blob) => {
  // Random initial position
  blob.style.top = Math.random() * 80 + '%';
  blob.style.left = Math.random() * 80 + '%';

  // Random velocity
  let dx = (Math.random() - 0.5) * 0.8;
  let dy = (Math.random() - 0.5) * 0.8;

  function animate() {
    const parent = blob.parentElement;
    const parentWidth = parent.offsetWidth;
    const parentHeight = parent.offsetHeight;
    const blobWidth = blob.offsetWidth;
    const blobHeight = blob.offsetHeight;

    // Get current position
    let top = parseFloat(blob.style.top);
    let left = parseFloat(blob.style.left);

    // Update position
    left += dx;
    top += dy;

    // Bounce off edges
    if (left <= 0 || left >= 100 - (blobWidth / parentWidth) * 100) {
      dx *= -1;
    }
    if (top <= 0 || top >= 100 - (blobHeight / parentHeight) * 100) {
      dy *= -1;
    }

    blob.style.left = left + '%';
    blob.style.top = top + '%';

    requestAnimationFrame(animate);
  }

  animate();
});