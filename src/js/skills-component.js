import { mainContainer } from './createAppStructure';
import scssLogo from '../assets/icons/sass.svg';
import createHtmlFromTemplate from './utils';

function renderSkills() {
  const fragment = new DocumentFragment();
  const skillsTemplate = `<section class="skills"><h2>Skills</h2><div class="container"><img src="${scssLogo}" alt="scss logo" class="img-fluid"/></div></section>`;
  fragment.append(createHtmlFromTemplate(skillsTemplate));
  mainContainer.append(fragment);
}

export default renderSkills;
