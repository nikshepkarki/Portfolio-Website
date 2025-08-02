(function() {
  "use strict";

  // --- PROJECT DATA ---
  // IMPORTANT: Add your project details here. 
  // The 'id' must match the 'data-project-id' in your HTML.
  const projects = [
    {
      id: 1,
      title: "Corporate Branding Package",
      category: "Graphic Design",
      imageUrl: "https://via.placeholder.com/800x600/18d26e/ffffff?text=Project+One+Detail",
      description: "This project involved creating a complete branding package for a new startup. This included logo design, business cards, and social media assets to establish a strong and cohesive brand identity.",
      liveLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "Promotional Video",
      category: "Video Editing",
      imageUrl: "https://via.placeholder.com/800x600/343a40/ffffff?text=Project+Two+Detail",
      description: "Edited and produced a high-energy promotional video for a major product launch. The project involved motion graphics, color grading, and sound design to create an engaging final cut.",
      liveLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "E-commerce Website Design",
      category: "Photography",
      imageUrl: "https://via.placeholder.com/800x600/007bff/ffffff?text=Project+Three+Detail",
      description: "A series of high-quality product photos for an e-commerce store. The goal was to capture the products in a way that highlights their features and appeals to the target audience.",
      liveLink: "#",
      codeLink: "#"
    }
    // Add more project objects here...
  ];

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }
  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');
  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Modal Logic
   */
  const modal = document.getElementById('project-modal');
  const modalContent = modal.querySelector('.modal-content');
  const projectLinks = document.querySelectorAll('.project-link');
  const closeButton = document.querySelector('.close-button');

  // Function to open the modal
  function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      document.getElementById('modal-img').src = project.imageUrl;
      document.getElementById('modal-title').textContent = project.title;
      document.getElementById('modal-description').textContent = project.description;
      document.getElementById('modal-live-link').href = project.liveLink;
      document.getElementById('modal-code-link').href = project.codeLink;
      
      modal.style.display = 'block';
    }
  }

  // Function to close the modal
  function closeModal() {
      modalContent.classList.add('slide-out');
      modal.classList.add('fade-out');

      setTimeout(() => {
          modal.style.display = 'none';
          modalContent.classList.remove('slide-out');
          modal.classList.remove('fade-out');
      }, 400);
  }

  // Event listeners for project links
  projectLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const projectId = parseInt(this.getAttribute('data-project-id'));
      openModal(projectId);
    });
  });

  // Event listener for close button
  closeButton.addEventListener('click', closeModal);

  // Event listener to close modal when clicking outside of it
  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });

})();
