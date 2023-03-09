import { mainContainer } from './createAppStructure';
import createHtmlFromTemplate from './utils';
import selfmaxScreen from '../assets/images/selfmax-screen.png';
import onlineZooScreen from '../assets/images/online-zoo-screen.png';
import workshopScreen from '../assets/images/workshop-screen.png';
import weatherAppScreen from '../assets/images/weather-app-screen.png';
import yourShopScreen from '../assets/images/your-shop-screen.png';

import scssLogo from '../assets/icons/sass.svg';
import javascriptLogo from '../assets/icons/javascript.svg';
import reactLogo from '../assets/icons/react.svg';
import gatsbyLogo from '../assets/icons/gatsby.svg';
import figmaLogo from '../assets/icons/figma-logo.svg';
import githubLogo from '../assets/icons/github_icon.png';

function createSingleCardTemplate(img, title, technologies, github, url) {
  const projectTemplate = `<div class="card shadow">
  <a href="${url}" target="_blank" rel="no-referrer"><img src="${img}" class="card-img-top" alt="${title} website screen"></a>
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">Technologies: 
  <div class="d-flex">
  ${technologies.map((techimg) => `<img src="${techimg}" alt="technology logo" class="img-fluid tech-icon me-2"/>`)}
  </div>
  </li>
  </ul>
  <div class="card-body">
  <strong> Github repository:</strong>
    <a href="${github}" class="card-link link-secondary" target="_blank" rel="no-referrer"><img src="${githubLogo}" alt="Github logo" class="img-fluid tech-icon"></a>
  </div>
  </div>`;
  return projectTemplate;
}

function renderPortfolio() {
  const fragment = new DocumentFragment();
  const portfolioTemplate = `<section id="portfolio" class="section section-portfolio container">
  <h2 aria-label="Portfolio" class="sr-only">Portfolio</h2>
    <div class="row row-cols-md-2 row-cols-xl-3 g-4 d-flex flex-column flex-md-row justify-content-center">
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
    'Online Zoo',
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
    'Weather Application',
    [reactLogo],
    'https://github.com/BeataMaro/Weather-app',
    'https://beatamaro.github.io/Weather-app/',
  )}
  </div>
  <div class="col d-flex justify-content-center">
  ${createSingleCardTemplate(
    yourShopScreen,
    'Your Shop',
    [reactLogo],
    'https://github.com/BeataMaro/your-shop',
    'https://beatamaro.github.io/your-shop/',
  )}
  </div>
  </div>
    </section>`;
  fragment.append(createHtmlFromTemplate(portfolioTemplate));
  mainContainer.append(fragment);
}

export default renderPortfolio;
