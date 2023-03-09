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

function createSkillLogoTemplate(logo) {
  const template = `<div class="col center shadow border">
  <img src="${logo}" alt="Tech logo" class="img-fluid tech-logo p-4"/>
  </div>`;
  return template;
}

function renderSkills() {
  const fragment = new DocumentFragment();
  const skillsTemplate = `<section id="skills" class="section section-skills container pt-5">
  <h2 aria-label="Skills" class="sr-only">Skills</h2>
  <div class="row row-cols-2 row-cols-lg-3 row-cols-xl-4 g-4 flex-column flex-sm-row justify-content-center align-items-center align-items-sm-stretch">
 ${createSkillLogoTemplate(cssLogo)}
 ${createSkillLogoTemplate(htmlLogo)}
 ${createSkillLogoTemplate(scssLogo)}
 ${createSkillLogoTemplate(javascriptLogo)}
 ${createSkillLogoTemplate(angularLogo)}
 ${createSkillLogoTemplate(typeScriptLogo)}
 ${createSkillLogoTemplate(reactLogo)}
 ${createSkillLogoTemplate(gatsbyLogo)}
 ${createSkillLogoTemplate(figmaLogo)}
 ${createSkillLogoTemplate(adobeXDLogo)}
 ${createSkillLogoTemplate(gitLogo)}
  </div>
  </section>`;
  fragment.append(createHtmlFromTemplate(skillsTemplate));
  mainContainer.append(fragment);
}

export default renderSkills;
