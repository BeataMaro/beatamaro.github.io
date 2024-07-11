import createHtmlFromTemplate from './utils';
import { mainContainer } from './createAppStructure';

function renderAbout() {
  const aboutText = createHtmlFromTemplate(`<section id="about" class="section section-about container border-lg-bottom"><h2 aria-label="About" class="sr-only">About</h2>
  <div class="row row-cols-md-2 row-cols-lg-2 d-flex flex-column flex-md-row justify-content-around">
  <div class="col col-sm-12 col-md-12"> 
  <p id="bio"></p>
  </div>
  </div>
  <div class="row text-end pt-5">
  <p id="thank_you" class="fw-light fst-italic mobile-trigger"></p>
  </div>
  </section>
  `);
  const fragment = new DocumentFragment();
  fragment.append(aboutText);
  mainContainer.append(fragment);
}

export default renderAbout;
