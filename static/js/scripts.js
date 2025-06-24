const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  function nextSlide() {
    let nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }

  function prevSlide() {
    let prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  }

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }

  if (slides.length > 0) {
    slideInterval = setInterval(nextSlide, 5000);
  }


  document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const slideshowContainer = document.getElementById('slideshowContainer');
    const slideDescription = document.getElementById('slideDescription');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const prevSlideBtn = document.getElementById('prevSlideBtn');
    const nextSlideBtn = document.getElementById('nextSlideBtn');

    let currentSlides = [];
    let currentDescriptions = [];
    let currentIndex = 0;
    let slideInterval;

    function renderSlide(index) {
      if(currentSlides.length === 0) {
        slideshowContainer.innerHTML = '<div style="width:100%;height:320px;display:flex;justify-content:center;align-items:center;color:#6b7280;">تصویری موجود نیست.</div>';
        slideDescription.textContent = '';
        return;
      }
      index = (index + currentSlides.length) % currentSlides.length;
      currentIndex = index;

      slideshowContainer.innerHTML = '';
      const img = document.createElement('img');
      img.src = currentSlides[index];
      img.alt = currentDescriptions[index] || '';
      img.style.width = '100%';
      img.style.height = '320px';
      img.style.objectFit = 'cover';
      img.style.borderRadius = '0.75rem';
      img.style.transition = 'opacity 0.5s ease-in-out';
      img.style.opacity = '0';
      slideshowContainer.appendChild(img);
      // افکت محو شدن
      setTimeout(() => { img.style.opacity = '1'; }, 50);

      slideDescription.textContent = currentDescriptions[index] || '';
    }

    function nextSlide() {
      renderSlide(currentIndex + 1);
    }

    function prevSlide() {
      renderSlide(currentIndex - 1);
    }

    function startAutoplay() {
      slideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoplay() {
      clearInterval(slideInterval);
    }

    projectCards.forEach(card => {
      card.addEventListener('click', () => {
        const title = card.dataset.projectTitle;
        const images = JSON.parse(card.dataset.projectImages || '[]');
        const descriptions = JSON.parse(card.dataset.projectDescriptions || '[]');

        currentSlides = images;
        currentDescriptions = descriptions;
        modalTitle.textContent = title;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        renderSlide(0);
        startAutoplay();
      });
    });

    modalCloseBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
      stopAutoplay();
    });

    modal.addEventListener('click', (e) => {
      if(e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        stopAutoplay();
      }
    });

    nextSlideBtn.addEventListener('click', () => {
      stopAutoplay();
      nextSlide();
      startAutoplay();
    });

    prevSlideBtn.addEventListener('click', () => {
      stopAutoplay();
      prevSlide();
      startAutoplay();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        stopAutoplay();
      }
      if (e.key === 'ArrowRight' && modal.style.display === 'flex') {
        stopAutoplay();
        nextSlide();
        startAutoplay();
      }
      if (e.key === 'ArrowLeft' && modal.style.display === 'flex') {
        stopAutoplay();
        prevSlide();
        startAutoplay();
      }
    });
  });

    document.addEventListener('DOMContentLoaded', () => {
    const employeeCards = document.querySelectorAll('.employee-card');
    const modals = document.querySelectorAll('.employee-modal');
    const body = document.body;

    employeeCards.forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.employeeId;
        const modal = document.getElementById('employeeModal' + id);
        if (!modal) return;
        modal.style.display = 'flex';
        modal.focus();
        body.style.overflow = 'hidden';
      });

      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });

    modals.forEach(modal => {
      const closeBtn = modal.querySelector('.close-btn');
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        body.style.overflow = '';
      });

      modal.addEventListener('click', e => {
        if (e.target === modal) {
          modal.style.display = 'none';
          body.style.overflow = '';
        }
      });

      modal.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
          modal.style.display = 'none';
          body.style.overflow = '';
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact-form');

    Array.from(form.elements).forEach(element => {
        element.addEventListener('blur', function () {
            if (!this.checkValidity()) {
                this.classList.add('invalid');
            } else {
                this.classList.remove('invalid');
            }
        });
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        let isValid = true;
        Array.from(form.elements).forEach(element => {
            if (!element.checkValidity()) {
                element.classList.add('invalid');
                isValid = false;
            } else {
                element.classList.remove('invalid');
            }
        });
        if (isValid) {
            console.log('Form is valid and ready to be submitted!');
        }
    }
});

document.getElementById('contactBtn').addEventListener('click', () => {
    alert('Thank you for your interest! Please call us or send an email to contact@buildstrong.com');
  });

function toggleMenu() {
      document.getElementById("menu").classList.toggle("active");
    }
    function openModal() {
      document.getElementById('contactModal').style.display = 'block';
    }
    function closeModal() {
      document.getElementById('contactModal').style.display = 'none';
    }
    window.onclick = function(event) {
      const modal = document.getElementById('contactModal');
      if (event.target === modal) {
        closeModal();
      }
    }

    // ارسال فرم با Ajax
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(this);
      fetch("{% url 'contact' %}", {
        method: "POST",
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: formData
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          document.getElementById('form-result').innerText = "پیام شما با موفقیت ارسال شد.";
          this.reset();
        } else {
          document.getElementById('form-result').innerText = "خطا در ارسال فرم.";
        }
      });
    });