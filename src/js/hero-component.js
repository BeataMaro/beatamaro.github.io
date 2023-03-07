// import plantImage from '../assets/images/marek-piwnicki-unsplash.jpg';
import { headerContainer } from './createAppStructure';
import createHtmlFromTemplate from './utils';

function renderHero() {
  const fragment = new DocumentFragment();
  const heroTemplate = `<section class="section-hero container-fluid d-flex justify-content-center align-items-center"><div class="hero-text"><h1>Beata Maro</h1><h2>junior front-end developer</h2></div>
</section>`;

  fragment.append(createHtmlFromTemplate(heroTemplate));
  headerContainer.appendChild(fragment);
}

export default renderHero;
