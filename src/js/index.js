import _ from 'lodash';
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

async function animation(selector) {
  const navigation = await document.querySelector(selector);
  gsap.fromTo(navigation, { y: -50 }, { y: 0, duration: 1 });
}

animation('nav');
