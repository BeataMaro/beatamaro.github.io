import { footerContainer } from './createAppStructure';

function renderFooter() {
  const footerWrapper = document.createElement('div');
  footerWrapper.className = 'container';
  const footerText = document.createElement('p');
  footerText.textContent = '2023';
  footerWrapper.appendChild(footerText);
  footerContainer.classList.add('fixed-bottom');
  footerContainer.appendChild(footerWrapper);
}

export default renderFooter;
