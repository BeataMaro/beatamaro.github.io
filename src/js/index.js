import _ from 'lodash';
import '../scss/styles.scss';
import '../index.html';
import * as bootstrap from 'bootstrap';

import renderNav from './nav-component';
import renderHero from './hero-component';
import renderAbout from './about-component';
import renderSkills from './skills-component';
import renderPortfolio from './portfolio-component';
import renderFooter from './footer-container';
import renderContact from './contact-component';

renderNav();
renderHero();
renderAbout();
renderSkills();
renderPortfolio();
renderContact();
renderFooter();
