const contactLink = document.getElementById('contact-link');
const contactSection = document.querySelector('.fade-in');
const profileSection = document.getElementById('profile-section');

window.addEventListener('scroll', () => {
  const rect = contactSection.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    contactSection.classList.add('active');
  }
});

contactLink.addEventListener('click', (event) => {
  event.preventDefault();
  contactSection.classList.add('active');
  profileSection.scrollIntoView({ behavior: 'smooth' });
});