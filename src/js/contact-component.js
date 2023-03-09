import { mainContainer } from './createAppStructure';
import createHtmlFromTemplate from './utils';
import emailIcon from '../assets/icons/ftmail-generic.svg';
import mobileIcon from '../assets/icons/ftyahoo-mobile.svg';
import linkedInIcon from '../assets/icons/linkedin-icon.png';

function renderContact() {
  const fragment = new DocumentFragment();
  const contactTemplate = `<section id="contact" class="section-contact container-fluid d-flex justify-content-center p-5">
  <h2 aria-label="Contact" class="sr-only">Contact</h2>
  <div class="row row-cols row-cols-xl-3 p-5 d-flex flex-column flex-xl-row container border">
  <div class="col d-flex align-items-center">
  <img src="${emailIcon}" alt="envelope icon" class="img-fluid contact-icon me-3 shadow-lg"/>
  <strong>maro.beata@gmail.com</strong>
  </div>
  <div class="col d-flex align-items-center">
  <img src="${mobileIcon}" alt="mobile phone icon" class="img-fluid contact-icon me-3 shadow-lg" />
  <strong>+48 511 909 309</strong></div>
  <div class="col text-end">
  <a href="https://www.linkedin.com/in/beata-maro-junior-web-developer/" target="_blank" rel="no-referrer">
  <img src="${linkedInIcon}" alt="LinkedIn icon" class="img-fluid contact-icon linkedin-icon" /></a></div></div></section>`;
  fragment.append(createHtmlFromTemplate(contactTemplate));
  mainContainer.append(fragment);
}

export default renderContact;
