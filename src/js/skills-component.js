import { mainContainer } from './createAppStructure';
import createHtmlFromTemplate from './utils';
import htmlLogo from '../assets/icons/html-5.svg';
import cssLogo from '../assets/icons/css-3.svg';
import scssLogo from '../assets/icons/sass.svg';
import javascriptLogo from '../assets/icons/javascript.svg';
import angularLogo from '../assets/icons/angular.svg';
import typeScriptLogo from '../assets/icons/typescript.svg';
import reactLogo from '../assets/icons/react.svg';
import gatsbyLogo from '../assets/icons/gatsby.svg';
import figmaLogo from '../assets/icons/figma-logo.svg';
import gitLogo from '../assets/icons/Git-Logo-Black.svg';
import adobeXDLogo from '../assets/icons/Adobe_XD-icon.png';

// needs Refactor

function renderSkills() {
  const fragment = new DocumentFragment();
  const skillsTemplate = `<section id="skills" class="section section-skills container pt-5">
  <h2 aria-label="Skills" class="sr-only">Skills</h2>
  <div class="row row-cols-2 row-cols-lg-3 g-4 flex-column flex-md-row d-flex justify-content-center">
  <div class="col center shadow border">
  <img src="${cssLogo}" alt="Css3 logo" class="img-fluid tech-logo p-4"/>
  </div>
  <div class="col center shadow border">
  <img src="${htmlLogo}" alt="Html5 logo" class="img-fluid tech-logo"/>
  </div>
  <div class="col center shadow border">
  <img src="${scssLogo}" alt="Scss logo" class="img-fluid tech-logo"/>
  </div>
  <div class="col center shadow border">
  <img src="${javascriptLogo}" alt="JavaScript logo" class="img-fluid tech-logo"/>
  </div>
  <div class="col center shadow border">
  <img src="${angularLogo}" alt="Angular logo" class="img-fluid tech-logo"/>
  </div>
  <div class="col center shadow border">
  <img src="${typeScriptLogo}" alt="TypeScript logo" class="img-fluid tech-logo"/>
  </div>
  <div class="col center shadow border">
  <img src="${reactLogo}" alt="React logo" class="img-fluid tech-logo"/>
  </div>
  <div class="col center shadow border">
  <img src="${gatsbyLogo}" alt="Gatsby logo" class="img-fluid tech-logo"/>
  </div>
  <div class="col center shadow border">
  <img src="${figmaLogo}" alt="Figma logo" class="img-fluid tech-logo p-4"/>
  </div>
  <div class="col center shadow border">
  <img src="${gitLogo}" alt="GIT logo" class="img-fluid tech-logo"/>
  </div>
  <div class="col center shadow border">
  <img src="${adobeXDLogo}" alt="Adobe Xd logo" class="img-fluid tech-logo p-4"/>
  </div>
  </div></section>`;
  fragment.append(createHtmlFromTemplate(skillsTemplate));
  mainContainer.append(fragment);
}

export default renderSkills;
