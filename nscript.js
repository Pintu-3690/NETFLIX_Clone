document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. Navigation Bar Scroll Effect
     ========================================================================== */
  const header = document.getElementById('main-header');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ==========================================================================
     2. Toast Notification System
     ========================================================================== */
  const toastContainer = document.getElementById('toast-container');
  const showToast = (message, icon = '🍿') => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  };

  /* ==========================================================================
     3. Carousel Slider & Controls
     ========================================================================== */
  const slider = document.getElementById('trending-slider');
  const slideLeftBtn = document.getElementById('slide-left');
  const slideRightBtn = document.getElementById('slide-right');

  const updateSliderArrows = () => {
    if (!slider) return;
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth - 5;
    if (slider.scrollLeft <= 10) {
      slideLeftBtn.classList.add('hidden');
    } else {
      slideLeftBtn.classList.remove('hidden');
    }

    if (slider.scrollLeft >= maxScrollLeft) {
      slideRightBtn.classList.add('hidden');
    } else {
      slideRightBtn.classList.remove('hidden');
    }
  };

  if (slideLeftBtn && slideRightBtn && slider) {
    slideLeftBtn.addEventListener('click', () => {
      slider.scrollBy({ left: -slider.clientWidth * 0.75, behavior: 'smooth' });
    });

    slideRightBtn.addEventListener('click', () => {
      slider.scrollBy({ left: slider.clientWidth * 0.75, behavior: 'smooth' });
    });

    slider.addEventListener('scroll', updateSliderArrows, { passive: true });
    window.addEventListener('resize', updateSliderArrows);
    setTimeout(updateSliderArrows, 300);
  }

  /* ==========================================================================
     4. Category Filter Tabs (All / Movies / TV Shows)
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const movieCards = document.querySelectorAll('.movie-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      let visibleRank = 1;

      movieCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const shouldShow = filter === 'all' || category === filter;

        if (shouldShow) {
          card.style.display = 'block';
          const rankEl = card.querySelector('.rank-number');
          if (rankEl) {
            rankEl.textContent = visibleRank;
            visibleRank++;
          }
        } else {
          card.style.display = 'none';
        }
      });

      if (slider) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
        setTimeout(updateSliderArrows, 350);
      }
    });
  });

  /* ==========================================================================
     5. Movie Preview Modal
     ========================================================================== */
  const previewModal = document.getElementById('movie-preview-modal');
  const closePreviewBtn = document.getElementById('close-preview-btn');
  const modalHeroBg = document.getElementById('modal-hero-bg');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalMatch = document.getElementById('modal-match');
  const modalYear = document.getElementById('modal-year');
  const modalAge = document.getElementById('modal-age');
  const modalDuration = document.getElementById('modal-duration');
  const modalTags = document.getElementById('modal-tags');
  const btnModalPlay = document.getElementById('btn-modal-play');
  const btnModalAdd = document.getElementById('btn-modal-add');
  const btnModalLike = document.getElementById('btn-modal-like');

  const openMoviePreview = (card) => {
    const title = card.getAttribute('data-title') || 'Featured Title';
    const rating = card.getAttribute('data-rating') || '95% Match';
    const year = card.getAttribute('data-year') || '2024';
    const age = card.getAttribute('data-age') || '16+';
    const duration = card.getAttribute('data-duration') || '1 Season';
    const desc = card.getAttribute('data-desc') || 'Stream the full series and movies now in 4K Ultra HD.';
    const img = card.getAttribute('data-img') || 'mirzapur.jpeg';
    const tags = (card.getAttribute('data-tags') || 'Action, Drama, Thriller').split(',');

    modalTitle.textContent = title;
    modalMatch.textContent = rating;
    modalYear.textContent = year;
    modalAge.textContent = age;
    modalDuration.textContent = duration;
    modalDesc.textContent = desc;
    modalHeroBg.style.backgroundImage = `url('${img}')`;

    modalTags.innerHTML = '';
    tags.forEach(tag => {
      const tagSpan = document.createElement('span');
      tagSpan.className = 'modal-tag';
      tagSpan.textContent = tag.trim();
      modalTags.appendChild(tagSpan);
    });

    previewModal.classList.add('active');
    previewModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeMoviePreview = () => {
    previewModal.classList.remove('active');
    previewModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  movieCards.forEach(card => {
    card.addEventListener('click', () => openMoviePreview(card));
  });

  if (closePreviewBtn) {
    closePreviewBtn.addEventListener('click', closeMoviePreview);
  }

  previewModal.addEventListener('click', (e) => {
    if (e.target === previewModal) closeMoviePreview();
  });

  if (btnModalPlay) {
    btnModalPlay.addEventListener('click', () => {
      showToast(`Playing "${modalTitle.textContent}" trailer...`, '▶️');
    });
  }

  if (btnModalAdd) {
    btnModalAdd.addEventListener('click', () => {
      const isAdded = btnModalAdd.textContent === '✓';
      btnModalAdd.textContent = isAdded ? '+' : '✓';
      showToast(isAdded ? 'Removed from My List' : 'Added to My List', isAdded ? '🗑️' : '✅');
    });
  }

  if (btnModalLike) {
    btnModalLike.addEventListener('click', () => {
      showToast(`Rated "${modalTitle.textContent}" as Liked!`, '👍');
    });
  }

  /* ==========================================================================
     6. Sign In Modal
     ========================================================================== */
  const openSigninBtn = document.getElementById('open-signin-btn');
  const signinModal = document.getElementById('signin-modal');
  const closeSigninModalBtn = document.getElementById('close-signin-modal');
  const signinForm = document.getElementById('signin-form');
  const authSignupLink = document.getElementById('auth-signup-link');

  const openSignin = () => {
    signinModal.classList.add('active');
    signinModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeSignin = () => {
    signinModal.classList.remove('active');
    signinModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (openSigninBtn) openSigninBtn.addEventListener('click', openSignin);
  if (closeSigninModalBtn) closeSigninModalBtn.addEventListener('click', closeSignin);

  signinModal.addEventListener('click', (e) => {
    if (e.target === signinModal) closeSignin();
  });

  if (authSignupLink) {
    authSignupLink.addEventListener('click', (e) => {
      e.preventDefault();
      closeSignin();
      const heroEmailInput = document.getElementById('hero-email-input');
      if (heroEmailInput) {
        heroEmailInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        heroEmailInput.focus();
      }
    });
  }

  if (signinForm) {
    signinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('auth-email').value.trim();
      const password = document.getElementById('auth-password').value.trim();

      if (!email || !password) {
        showToast('Please enter both your email/phone and password.', '⚠️');
        return;
      }

      showToast(`Welcome back, ${email.split('@')[0]}! Signing in...`, '✨');
      setTimeout(() => {
        closeSignin();
        signinForm.reset();
      }, 1200);
    });
  }

  // Global Escape Key listener for all modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (previewModal.classList.contains('active')) closeMoviePreview();
      if (signinModal.classList.contains('active')) closeSignin();
    }
  });

  /* ==========================================================================
     7. FAQ Accordion
     ========================================================================== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close other accordions
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current accordion
      item.classList.toggle('active', !isActive);
    });
  });

  /* ==========================================================================
     8. Email Form Validations (Hero & Bottom)
     ========================================================================== */
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const setupEmailForm = (formId, inputId, errorId) => {
    const form = document.getElementById(formId);
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);

    if (!form || !input) return;

    input.addEventListener('input', () => {
      input.classList.remove('error');
      if (error) error.style.display = 'none';
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = input.value.trim();

      if (!email || !validateEmail(email)) {
        input.classList.add('error');
        if (error) error.style.display = 'block';
        input.focus();
        showToast('Please enter a valid email address.', '❌');
        return;
      }

      input.classList.remove('error');
      if (error) error.style.display = 'none';
      showToast('Welcome to Netflix! Check your inbox to complete setup.', '🎉');
      form.reset();
    });
  };

  setupEmailForm('hero-email-form', 'hero-email-input', 'hero-email-error');
  setupEmailForm('bottom-email-form', 'bottom-email-input', 'bottom-email-error');

  /* ==========================================================================
     9. Language Selector Sync
     ========================================================================== */
  const langSelectors = document.querySelectorAll('.lang-dropdown');
  langSelectors.forEach(select => {
    select.addEventListener('change', (e) => {
      const lang = e.target.value;
      const langNames = { en: 'English', hi: 'हिन्दी (Hindi)', bn: 'বাংলা (Bengali)' };
      langSelectors.forEach(s => s.value = lang);
      showToast(`Language switched to ${langNames[lang] || lang}`, '🌐');
    });
  });
});