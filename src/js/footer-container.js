import { footerContainer } from './createAppStructure';
import createHtmlFromTemplate from './utils';
import githubIcon from '../assets/icons/github_icon.png';

function renderFooter() {
  const footerTemplate = `<div class="container p-1"><a class="link" href="https://github.com/BeataMaro/portfolio-BM" target="_blank" rel="no-referrer"><img src="${githubIcon}" alt="gitHub logo" class="footer-icon" /></a><p>&copy; 2023</p></div>`;
  const footerWrapper = createHtmlFromTemplate(footerTemplate);
  footerContainer.classList.add('bg-light', 'text-center');
  footerContainer.appendChild(footerWrapper);
}

export default renderFooter;
