import { headerContainer } from './createAppStructure';
import createHtmlFromTemplate from './utils';
import wallXL from '../assets/images/xxl-hero-banner.jpg';
import wallMD from '../assets/images/md-hero-banner.jpg';
import wallSM from '../assets/images/sm-hero-banner.jpg';

function renderHero() {
  const fragment = new DocumentFragment();
  const heroTemplate = `<section class="section-hero">
  <div class="sr-only"><h1>Beata Maro</h1><h2>junior front-end developer</h2>
  </div>
  <div class="d-md-none center">
  <img class="img-fluid hero_image" src="${wallSM}" alt="hero banner - concrete wall with graphics" />
  </div>
  <div class="d-none d-md-flex d-lg-none center">
  <img class="img-fluid hero_image" src="${wallMD}" alt="hero banner - concrete wall with graphics" />
  </div>
  <div class="d-none d-lg-flex center">
  <img class="hero-image-xxl img-fluid hero_image" src="${wallXL}" alt="hero banner - concrete wall with graphics" />
  </div>
  </section>`;
  fragment.append(createHtmlFromTemplate(heroTemplate));
  headerContainer.appendChild(fragment);
}

export default renderHero;
