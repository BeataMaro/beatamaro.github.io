import { mainContainer } from './createAppStructure';
import createHtmlFromTemplate from './utils';
import emailIcon from '../assets/icons/email-icon.svg';
import mobileIcon from '../assets/icons/mobile-icon.png';
import linkedInIcon from '../assets/icons/linkedin-icon.png';

function renderContact() {
  const fragment = new DocumentFragment();
  const contactTemplate = `<section id="contact" class="section section-contact container-fluid p-5">
  <h2 aria-label="Contact" class="sr-only">Contact</h2>
  <div class="row p-5">
  <div class="col-4 text-end">
  <img src="${emailIcon}" alt="envelope icon" class="img-fluid contact-icon me-3"/>
  <strong>maro.beata@gmail.com</strong>
  </div>
  <div class="col-4 text-end">
  <img src="${mobileIcon}" alt="mobile phone icon" class="img-fluid contact-icon me-3" />
  <strong>+48 511 909 309</strong></div>
  <div class="col-4 text-end">
  <a href="https://www.linkedin.com/in/beata-maro-junior-web-developer/" target="_blank" rel="no-referrer">
  <img src="${linkedInIcon}" alt="LinkedIn icon" class="img-fluid contact-icon linkedin-icon" /></a></div></div></section>`;
  fragment.append(createHtmlFromTemplate(contactTemplate));
  mainContainer.append(fragment);
}

export default renderContact;
