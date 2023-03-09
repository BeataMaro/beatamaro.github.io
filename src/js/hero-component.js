// import plantImage from '../assets/images/marek-piwnicki-unsplash.jpg';
import { headerContainer } from './createAppStructure';
import createHtmlFromTemplate from './utils';
// import bulbImage from '../assets/icons/ftidea.png';

function renderHero() {
  const fragment = new DocumentFragment();
  const heroTemplate = `<section class="section-hero border">
  <div class="hero-text"><h1 class="sr-only">Beata Maro</h1><h2 class="sr-only">junior front-end developer</h2>
  </div>
  </section>`;
  // <img src="${bulbImage}" alt="bulb" class="img-fluid bulb-icon" />
  fragment.append(createHtmlFromTemplate(heroTemplate));
  headerContainer.appendChild(fragment);
}

export default renderHero;
