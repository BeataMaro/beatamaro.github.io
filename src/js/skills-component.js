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
  const template = `<div class="col center shadow-sm bg-light m-1 skill-logo">
  <img src="${logo}" alt="Tech logo" class="img-fluid tech-logo py-3"/>
  </div>`;
  return template;
}

function renderSkills() {
  const fragment = new DocumentFragment();
  const skillsTemplate = `<section id="skills" class="section section-skills container py-4 border-bottom">
  <h2 aria-label="skills" class="text-center fw-bold mb-4">My skills</h2>
  <div class="row row-cols-3 row-cols-lg-4 flex-column flex-sm-row justify-content-center align-items-center align-items-sm-stretch">
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
