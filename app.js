document.addEventListener('DOMContentLoaded', function () {

  // ----- Formulario de contacto -----
  const form = document.getElementById('contactForm');
  const fields = document.getElementById('formFields');
  const success = document.getElementById('formSuccess');
  const successTitle = document.getElementById('formSuccessTitle');
  const successText = document.getElementById('formSuccessText');
  const errorMsg = document.getElementById('formError');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nombre = document.getElementById('nombre').value.trim();
      const correo = document.getElementById('correo').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      if (!nombre || !correo || !mensaje) {
        errorMsg.textContent = 'Por favor completa todos los campos antes de enviar.';
        errorMsg.hidden = false;
        return;
      }

      errorMsg.hidden = true;

      successTitle.textContent = `¡Gracias, ${nombre}!`;
      successText.textContent = `Te responderemos a ${correo} en menos de 24 horas.`;

      fields.hidden = true;
      success.hidden = false;

      form.reset();
    });
  }

  // ----- Scroll suave para los enlaces del nav -----
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});