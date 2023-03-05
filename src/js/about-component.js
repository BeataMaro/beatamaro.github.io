import createHtmlFromTemplate from './utils';
import { mainContainer } from './createAppStructure';

function renderAbout() {
  const aboutText = createHtmlFromTemplate('<section class="mt-md-5"><h3>Welcome to my website!</h3></section>');
  const fragment = new DocumentFragment();
  fragment.append(aboutText);
  mainContainer.append(fragment);
}

export default renderAbout;
