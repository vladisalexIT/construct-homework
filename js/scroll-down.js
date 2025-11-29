const btn = document.getElementById('scrollDownButton');
const nextSection = document.getElementById('ourStorySection');
btn.addEventListener('click', () => {
  if (!nextSection) return;
  nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});