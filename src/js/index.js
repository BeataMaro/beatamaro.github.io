import _ from 'lodash';
import '../scss/styles.scss';
import '../index.html';
import * as bootstrap from 'bootstrap';

import renderNav from './nav-component';
import renderPlant from './hero-component';
import renderFooter from './footer-container';
import renderAbout from './about-component';

renderNav();
renderAbout();
renderPlant();
renderFooter();
