document.addEventListener('DOMContentLoaded', () => {
  // create overlay element if not already present
  let overlay = document.querySelector('.image-modal-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'image-modal-overlay';
    overlay.innerHTML = `
      <div class="image-modal-content">
        <span class="image-modal-close">&times;</span>
        <img src="" alt="" />
      </div>
    `;
    document.body.appendChild(overlay);
  }

  const modalImg = overlay.querySelector('img');
  const closeBtn = overlay.querySelector('.image-modal-close');

  function openModal(src, alt) {
    modalImg.src = src;
    modalImg.alt = alt || '';
    overlay.classList.add('active');
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    overlay.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  // click outside the image to close
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });

  // press escape key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
  });

  closeBtn.addEventListener('click', closeModal);

  // attach listeners to images
  const images = document.querySelectorAll('img.project-image, img.small-image');
  images.forEach((img) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => openModal(img.src, img.alt));
  });
});