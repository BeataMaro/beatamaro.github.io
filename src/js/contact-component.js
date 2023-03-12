import { mainContainer } from './createAppStructure';
import createHtmlFromTemplate from './utils';
import emailIcon from '../assets/icons/ftmail-generic.svg';
import mobileIcon from '../assets/icons/ftyahoo-mobile.svg';
import linkedInIcon from '../assets/icons/linkedin-icon.png';

function renderContact() {
  const fragment = new DocumentFragment();
  const contactTemplate = `<section id="contact" class="section-contact container-fluid p-5 mt-4">
  <h2 aria-label="Contact" class="text-center fw-bold hl-lg">Contact</h2>
  <div class="row row-cols-lg-3 g-4 p-4 flex-column flex-lg-row d-flex justify-content-center">
  <div class="col flex-column center">
  <img src="${emailIcon}" alt="envelope icon" class="img-fluid contact-icon me-3"/>
  <strong class="p-2">maro.beata@gmail.com</strong>
  </div>
  <div class="col flex-column center">
  <img src="${mobileIcon}" alt="mobile phone icon" class="img-fluid contact-icon me-3 mb-2" />
  <strong class="p-2">+48 511 909 309</strong></div>
  <div class="col text-center">
  <a href="https://www.linkedin.com/in/beata-maro-junior-web-developer/" target="_blank" rel="no-referrer">
  <img src="${linkedInIcon}" alt="LinkedIn icon" class="img-fluid contact-icon linkedin-icon" /></a></div></div></section>`;
  fragment.append(createHtmlFromTemplate(contactTemplate));
  mainContainer.append(fragment);
}

export default renderContact;
