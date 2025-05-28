
  // Dark/Light Mode Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const rootElement = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  
  if(savedTheme === 'dark') {
    document.body.classList.add('dark');
  }
  
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')){
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
  
  // Scroll Reveal Animation on elements with class 'animate'
  function revealOnScroll() {
    const elements = document.querySelectorAll('.animate');
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 150;
      if (elementTop < windowHeight - revealPoint) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

  // Simple Contact Form Validation & Feedback (mock, no backend)
  const form = document.getElementById('contact-form');
  const emailInput = form.querySelector('#email');
  const messageInput = form.querySelector('#message');
  const formMessage = document.getElementById('form-message');

  form.addEventListener('submit', e => {
    e.preventDefault();
    formMessage.style.display = 'none';
    if(!emailInput.value || !validateEmail(emailInput.value)) {
      showMessage('Please enter a valid email address.');
      emailInput.focus();
      return;
    }
    if(!messageInput.value.trim()) {
      showMessage('Please enter your message.');
      messageInput.focus();
      return;
    }
    // Simulate successful submission
    showMessage('Thank you for reaching out! I will get back to you soon.', true);
    form.reset();
  });

  function showMessage(msg, success = false) {
    formMessage.textContent = msg;
    formMessage.style.color = success ? 'var(--primary-color)' : 'var(--secondary-color)';
    formMessage.style.display = 'block';
  }

  function validateEmail(email) {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }