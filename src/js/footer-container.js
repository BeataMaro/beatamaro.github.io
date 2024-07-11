import { footerContainer } from './createAppStructure';
import createHtmlFromTemplate from './utils';
import githubIcon from '../assets/icons/github.svg';

function renderFooter() {
  const footerTemplate = `<div class="container-fluid p-1 footer-container"><a class="link" href="https://github.com/BeataMaro/portfolio-BM" target="_blank" rel="no-referrer"><img src="${githubIcon}" alt="gitHub logo" class="footer-icon" /></a><p>&copy; 2024</p></div>`;
  const footerWrapper = createHtmlFromTemplate(footerTemplate);
  footerContainer.classList.add('text-center');
  footerContainer.appendChild(footerWrapper);
}

export default renderFooter;
