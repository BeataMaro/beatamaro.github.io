import { mainContainer } from './createAppStructure';
import createHtmlFromTemplate from './utils';
import selfmaxScreen from '../assets/images/selfmax-screen.png';
import onlineZooScreen from '../assets/images/online-zoo-screen.png';
import workshopScreen from '../assets/images/workshop-screen.png';
import weatherAppScreen from '../assets/images/weather-app-screen.png';
import yourShopScreen from '../assets/images/your-shop-screen.png';

function createSingleCardTemplate(img, title, technologies, github, url) {
  const projectTemplate = `<div class="card">
  <a href="${url}" target="_blank" rel="no-referrer"><img src="${img}" class="card-img-top" alt="${title} website screen"></a>
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">Technologies: 
  ${technologies.map((tech) => ` ${tech} `)}
  </li>
  </ul>
  <div class="card-body">
    <a href="${url}" class="card-link link-secondary" target="_blank" rel="no-referrer">Website</a>
    <a href="${github}" class="card-link link-secondary" target="_blank" rel="no-referrer">Code</a>
  </div>`;
  return projectTemplate;
}

function renderPortfolio() {
  const fragment = new DocumentFragment();
  const portfolioTemplate = `<section id="portfolio" class="section section-portfolio container">
  <h2 aria-label="Portfolio" class="sr-only">Portfolio</h2>
    <div class="row">
     <div class="col-6">
  ${createSingleCardTemplate(
    selfmaxScreen,
    'SelfMAX',
    ['Gatsby.js'],
    'https://github.com/BeataMaro/SelfMAX',
    'http://selfmax.pl',
  )}
  ${createSingleCardTemplate(
    onlineZooScreen,
    'Online Zoo',
    ['JavaScript', 'SCSS'],
    'https://github.com/BeataMaro/online-zoo/tree/gh-pages/pages/main',
    'https://beatamaro.github.io/online-zoo/pages/main/',
  )}
</div>
  <div class="row">
  <div class="col-6">
  ${createSingleCardTemplate(
    workshopScreen,
    'Workshop',
    ['React'],
    'https://github.com/BeataMaro/workshop',
    'https://przebrala-sie-miarka.netlify.app/',
  )}
   </div>
   <div class="col-6">
  ${createSingleCardTemplate(
    weatherAppScreen,
    'Weather Application',
    ['React'],
    'https://github.com/BeataMaro/Weather-app',
    'https://beatamaro.github.io/Weather-app/',
  )}
  </div>
  </div>
  <div class="row">
  <div class="col-6">
  ${createSingleCardTemplate(
    yourShopScreen,
    'Your Shop',
    ['React'],
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
