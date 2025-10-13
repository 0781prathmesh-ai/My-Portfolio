document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');

  if (menuIcon && navbar) {
      // Toggle the 'active' class on menu icon click
      menuIcon.addEventListener('click', () => {
          navbar.classList.toggle('active');
          // Change icon from bars to times (X)
          const icon = menuIcon.querySelector('i');
          icon.classList.toggle('fa-bars');
          icon.classList.toggle('fa-times');
      });

      // Close the menu when a link is clicked (for smoother mobile navigation)
      const navLinks = document.querySelectorAll('.navbar a');
      navLinks.forEach(link => {
          link.addEventListener('click', () => {
              navbar.classList.remove('active');
              menuIcon.querySelector('i').classList.add('fa-bars');
              menuIcon.querySelector('i').classList.remove('fa-times');
          });
      });
  }

  // --- 2. Contact Form Submission (Simulated) ---
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
          event.preventDefault();
          
          // In a real application, you would send this data to a server here using fetch/XMLHttpRequest.
          
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;

          // Simple validation and simulated response
          if (name && email && message) {
              // Display success message
              formStatus.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
              formStatus.className = 'status-message status-success';
              
              // Clear the form (simulate successful submission)
              contactForm.reset();

              // Clear status message after 5 seconds
              setTimeout(() => {
                  formStatus.textContent = '';
                  formStatus.className = 'status-message';
              }, 5000);

          } else {
              // Display error message
              formStatus.textContent = 'Please fill out all required fields.';
              formStatus.className = 'status-message status-error';
          }
      });
  }
});
