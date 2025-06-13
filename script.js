// Magnolia Visuals JS - Handle Mobile Menu Toggle

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");
  
    menuToggle.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });
  });
  function loadVimeo(wrapper) {
  const id = wrapper.getAttribute('data-vimeo-id');
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', `https://player.vimeo.com/video/${id}?autoplay=1&title=0&byline=0&portrait=0&badge=0&autopause=0`);
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
  iframe.setAttribute('allowfullscreen', '');
  iframe.style.position = 'absolute';
  iframe.style.top = 0;
  iframe.style.left = 0;
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  wrapper.innerHTML = '';
  wrapper.appendChild(iframe);
}

document.querySelectorAll('.photo-grid a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0, 0, 0, 0.6)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 9999;
    overlay.style.cursor = 'zoom-out';

    const img = document.createElement('img');
    img.src = link.href;
    img.style.maxWidth = '80vw';
    img.style.maxHeight = '80vh';
    img.style.borderRadius = '8px';
    img.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    img.style.cursor = 'default';
    img.style.transition = 'transform 0.5s ease, opacity 0.4s ease';
    img.style.transform = 'scale(0.9)';
    img.style.opacity = '0';

    // Prevent click on image from closing overlay
    img.addEventListener('click', e => e.stopPropagation());

    // Click outside image triggers shrink-away
    overlay.addEventListener('click', () => {
      img.style.transform = 'scale(0.9)';
      img.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(overlay);
      }, 400); // match to fade-out duration
    });

    overlay.appendChild(img);
    document.body.appendChild(overlay);

    // Trigger zoom-in animation
    requestAnimationFrame(() => {
      img.style.transform = 'scale(1)';
      img.style.opacity = '1';
    });
  });
});


