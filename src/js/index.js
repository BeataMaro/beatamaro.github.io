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
async function animatedNav() {
  const navigation = await document.querySelector('nav');
  gsap.fromTo(navigation, { y: -50 }, { y: 0, duration: 1 });
}

async function scaleElement(el) {
  const elem = document.querySelector(el);
  gsap.fromTo(elem, { scale: 0.6 }, { scale: 1, duration: 0.75 });
}

async function moveSection(element) {
  const section = await document.querySelector(element);
  gsap.fromTo(
    section,
    { x: -400, autoAlpha: 0 },
    {
      x: 0,
      autoAlpha: 1,
      scrollTrigger: {
        trigger: element,
        scrub: true,
      },
    },
  );
}

async function animatedElements(elements, triggerEl) {
  const logoSkills = await document.querySelectorAll(elements);
  const arr = Array.from(logoSkills);
  gsap.fromTo(
    arr,
    { y: -60, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: triggerEl,
      },
    },
  );
}

animatedNav();
scaleElement('.section-hero');
moveSection('.section-about');
animatedElements('.skill-logo', '.section-skills');
animatedElements('.card', '.section-portfolio');
