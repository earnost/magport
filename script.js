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