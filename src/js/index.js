import '../scss/styles.scss';
import '../index.html';
import * as bootstrap from 'bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import renderNav from './nav-component';
import renderHero from './hero-component';
import renderAbout from './about-component';
import renderSkills from './skills-component';
import renderPortfolio from './portfolio-component';
import renderFooter from './footer-container';
import renderContact from './contact-component';

gsap.registerPlugin(ScrollTrigger);

renderNav();
renderHero();
renderAbout();
renderSkills();
renderPortfolio();
renderContact();
renderFooter();

// animations
ScrollTrigger.saveStyles('.section-about');
ScrollTrigger.matchMedia({
  // desktop
  '(min-width: 800px)': function () {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-about',
        start: 'center top',
        scrub: 1,
        end: '90%',
        pin: true,
        pinSpacing: false,
      },
    });
    tl.to('.section-about', { opacity: 0 }, { y: 200 });
  },
  // mobile
  '(max-width: 799px)': function () {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-about',
        start: 'center top',
        scrub: 1,
        end: '100%',
        pin: true,
        pinSpacing: false,
      },
    });
    tl.to('.section-about', { opacity: 0 });
  },
});

async function animatedNav() {
  const navigation = await document.querySelector('nav');
  gsap.fromTo(navigation, { y: -50 }, { y: 0, duration: 1 });
}

async function scaleElement(el) {
  const elem = document.querySelector(el);
  gsap.fromTo(
    elem,
    { scale: 0.6 },
    {
      scale: 1,
      duration: 0.75,
      scrollTrigger: {
        trigger: el,
        toggleActions: 'play none none reverse',
      },
    },
  );
}

async function animatedElements(elements, triggerEl) {
  const logoSkills = await document.querySelectorAll(elements);
  const arr = Array.from(logoSkills);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerEl,
      start: 'top center',
      toggleActions: 'play none none reverse',
    },
  });
  tl.fromTo(
    arr,
    { y: -60, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      stagger: 0.2,
    },
  );
}

animatedNav();
scaleElement('.section-hero');
scaleElement('.profile-image');
animatedElements('.skill-logo', '.section-skills');
animatedElements('.card', '.section-portfolio');
