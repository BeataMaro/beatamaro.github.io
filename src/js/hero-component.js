import { headerContainer } from './createAppStructure';
import createHtmlFromTemplate from './utils';

function renderHero() {
  const fragment = new DocumentFragment();
  const heroTemplate = `<section class="section-hero section-background section-background_hero center">
    <article class="d-flex flex-column section-hero_text p-4">
      <h1 class="mb-lg-0">Beata Maro</h1>
      <h2 class="d-lg-flex"><p class="mb-0 me-lg-2">junior </p><p> front-end developer</p></h2>
    </article>
  </section>`;
  fragment.append(createHtmlFromTemplate(heroTemplate));
  headerContainer.appendChild(fragment);
}

export default renderHero;
