// Lightbox for gallery + BIM images
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbClose = document.getElementById('lbClose');

document.querySelectorAll('[data-full]').forEach(el => {
  el.addEventListener('click', () => {
    lbImg.src = el.getAttribute('data-full');
    lightbox.classList.add('open');
  });
});

function closeLightbox(){ lightbox.classList.remove('open'); lbImg.src = ''; }
lbClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if(e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeLightbox(); });
