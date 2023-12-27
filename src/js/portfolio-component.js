import { mainContainer } from './createAppStructure';
import createHtmlFromTemplate from './utils';
import planningWizardScreen from '../assets/images/planning-wizard-screen.png';
import budgetScreen from '../assets/images/budget-screen.png';
import reactTableScreen from '../assets/images/react-table-screen.png';
import selfmaxScreen from '../assets/images/selfmax-screen.png';
import onlineZooScreen from '../assets/images/online-zoo-screen.png';
import workshopScreen from '../assets/images/workshop-screen.png';
import weatherAppScreen from '../assets/images/weather-app-screen.png';

import scssLogo from '../assets/icons/sass.svg';
import javascriptLogo from '../assets/icons/javascript.svg';
import angularLogo from '../assets/icons/angular.svg';
import typeScriptLogo from '../assets/icons/typescript.svg';
import ngRxLogo from '../assets/icons/ngrx.svg';
import rxJsLogo from '../assets/icons/rxjs.svg';
import reactLogo from '../assets/icons/react.svg';
import reduxLogo from '../assets/icons/redux.svg';
import gatsbyLogo from '../assets/icons/gatsby.svg';
import figmaLogo from '../assets/icons/figma-logo.svg';
import materialUILogo from '../assets/icons/material-ui.svg';
import githubLogo from '../assets/icons/github-svgrepo-com.svg';

function createSingleCardTemplate(img, title, technologies, github, url) {
  const projectTemplate = `<div class="card shadow">
  <a href="${url}" target="_blank" rel="no-referrer"><img src="${img}" class="card-img-top" alt="${title} website screen"></a>
  <div class="card-body">
    <h5 class="card-title fw-bold">${title}</h5>
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">Technologies: 
  <div class="d-flex">

  ${technologies.map((techimg) => `<img src="${techimg}" alt="technology logo" class="img-fluid tech-icon me-4 align-items-center"/>`).join('')}
  </div>
  </li>
  </ul>
  <div class="card-body d-flex align-items-center justify-content-between">
  <strong> Github repository:</strong>
    <a href="${github}" class="card-link link-secondary" target="_blank" rel="no-referrer"><img src="${githubLogo}" alt="Github logo" class="img-fluid tech-icon"></a>
  </div>
  </div>`;
  return projectTemplate;
}

function renderPortfolio() {
  const fragment = new DocumentFragment();
  const portfolioTemplate = `<section id="portfolio" class="section section-portfolio container">
  <h2 aria-label="Portfolio" class="fw-bold text-center hl-lg mb-4">Portfolio</h2>
  <span class="text-center d-block m-auto">I'm currently working on...</span>
  <div class="row row-cols-sm-1 row-cols-md-2 d-flex flex-column flex-md-row g-4 justify-content-center align-items-center mt-3">
  <div aria-label="Current projects" class="text-center hl-md">
  <div class="col d-flex">
  ${createSingleCardTemplate(
    budgetScreen,
    'Expense management application',
    [reactLogo, materialUILogo],
    'https://github.com/BeataMaro/budget-app',
    'https://github.com/BeataMaro/budget-app',
  )}
  </div>
</div>
  <div class="col d-flex">
  ${createSingleCardTemplate(
    planningWizardScreen,
    'Project management application',
    [angularLogo, typeScriptLogo, ngRxLogo, rxJsLogo],
    'https://github.com/BeataMaro/Project-Management',
    'https://project-management-app-bm.netlify.app/',
  )}
  </div>
  </div>
  <div class="row row-cols-md-2 d-flex flex-column flex-md-row g-4 justify-content-center mt-4">
  <div class="col d-flex justify-content-center">
  ${createSingleCardTemplate(
    reactTableScreen,
    'Unsplash photos viewer',
    [reactLogo, typeScriptLogo, reduxLogo],
    'https://github.com/BeataMaro/react-table',
    'https://react-photos-viewer.netlify.app//',
  )}
  </div>
    <div class="col d-flex justify-content-center">
  ${createSingleCardTemplate(
    selfmaxScreen,
    'SelfMAX',
    [gatsbyLogo],
    'https://github.com/BeataMaro/SelfMAX',
    'http://selfmax.pl',
  )}
  </div>
  <div class="col d-flex justify-content-center">
  ${createSingleCardTemplate(
    onlineZooScreen,
    'Online zoo',
    [javascriptLogo, scssLogo, figmaLogo],
    'https://github.com/BeataMaro/online-zoo/tree/gh-pages/pages/main',
    'https://beatamaro.github.io/online-zoo/pages/main/',
  )}
</div>
<div class="col d-flex justify-content-center">
  ${createSingleCardTemplate(
    workshopScreen,
    'Workshop',
    [reactLogo],
    'https://github.com/BeataMaro/workshop',
    'https://przebrala-sie-miarka.netlify.app/',
  )}
   </div>
   <div class="col d-flex justify-content-center">
  ${createSingleCardTemplate(
    weatherAppScreen,
    'Weather application',
    [reactLogo],
    'https://github.com/BeataMaro/Weather-app',
    'https://beatamaro.github.io/Weather-app/',
  )}
  </div>
  </div>
  
    </section>`;
  fragment.append(createHtmlFromTemplate(portfolioTemplate));
  mainContainer.append(fragment);
}

export default renderPortfolio;
