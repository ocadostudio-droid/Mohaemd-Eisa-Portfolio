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

// Title-block "discipline" label swaps based on section in view
const disciplineMap = {
  about: 'ARCHITECTURE',
  work: 'DOCUMENTATION',
  bim: 'COORDINATION',
  experience: 'PRACTICE',
  contact: 'CONTACT'
};
const tbDiscipline = document.getElementById('tb-discipline');
const sections = Object.keys(disciplineMap).map(id => document.getElementById(id)).filter(Boolean);

if('IntersectionObserver' in window && sections.length){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        tbDiscipline.textContent = disciplineMap[entry.target.id];
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });
  sections.forEach(s => observer.observe(s));
}
