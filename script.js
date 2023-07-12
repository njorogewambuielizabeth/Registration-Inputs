const togglePassword = document.querySelectorAll('.toggle-password');

togglePassword.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const input = toggle.previousElementSibling;
    const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type', type);
    toggle.classList.toggle('active');
  });
});
