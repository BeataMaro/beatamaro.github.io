import { mainContainer } from './createAppStructure';
import createHtmlFromTemplate from './utils';
import htmlLogo from '../assets/icons/html-5.svg';
import cssLogo from '../assets/icons/css-3.svg';
import scssLogo from '../assets/icons/sass.svg';
import angularLogo from '../assets/icons/angular.svg';
import typeScriptLogo from '../assets/icons/typescript.svg';
import reactLogo from '../assets/icons/react.svg';
import gatsbyLogo from '../assets/icons/gatsby.svg';

function renderSkills() {
  const fragment = new DocumentFragment();
  const skillsTemplate = `<section id="skills" class="section section-skills container text-center">
  <h2 aria-label="Skills" class="sr-only">Skills</h2>
  <div class="row">
  <div class="col-6">
  <img src="${cssLogo}" alt="Css3 logo" class="img-fluid tech-icon"/>
  </div>
  <div class="col-6">
  <img src="${htmlLogo}" alt="Html5 logo" class="img-fluid tech-icon"/>
  </div>
  </div>
  <div class="row">
  <div class="col-6">
  <img src="${scssLogo}" alt="Scss logo" class="img-fluid tech-icon"/>
  </div>
  <div class="col-6">
  <img src="${angularLogo}" alt="Angular logo" class="img-fluid tech-icon"/>
  </div>
  </div>
  <div class="row">
  <div class="col-6">
  <img src="${typeScriptLogo}" alt="TypeScript logo" class="img-fluid tech-icon"/>
  </div>
  <div class="col-6">
  <img src="${reactLogo}" alt="React logo" class="img-fluid tech-icon"/>
  </div>
  </div>
  <div class="row">
  <div class="col-12">
  <img src="${gatsbyLogo}" alt="Gatsby logo" class="img-fluid tech-icon"/>
  </div></div></section>`;
  fragment.append(createHtmlFromTemplate(skillsTemplate));
  mainContainer.append(fragment);
}

export default renderSkills;
