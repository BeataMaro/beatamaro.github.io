import { mainContainer } from './createAppStructure';
import createHtmlFromTemplate from './utils';
import emailIcon from '../assets/icons/envelope.svg';
import mobileIcon from '../assets/icons/phone-call.svg';
import linkedInIcon from '../assets/icons/linkedin.svg';

function renderContact() {
  const fragment = new DocumentFragment();
  const contactTemplate = `<section id="contact" class="section section-contact container-fluid p-5 mt-4">
  <div class="row row-cols-md-3 g-4 p-4 flex-column flex-md-row">
  <div class="col flex-column center">
  <img src="${emailIcon}" alt="envelope icon" class="img-fluid contact-icon me-lg-3 mb-1"/>
  <strong class="p-2">maro.beata@gmail.com</strong>
  </div>
  <div class="col flex-column center">
  <img src="${mobileIcon}" alt="mobile phone icon" class="img-fluid contact-icon me-lg-3 mb-2" />
  <strong class="p-2">+48 511 909 309</strong></div>
  <div class="col text-center">
  <a href="https://www.linkedin.com/in/beata-maro" target="_blank" rel="no-referrer" class="flex-column center">
  <img src="${linkedInIcon}" alt="LinkedIn icon" class="img-fluid contact-icon linkedin-icon" class="mb-1" /><strong class="p-2 text-nowrap">linkedin.com/in/beata-maro</strong>
 </a></div></div></section>`;
  fragment.append(createHtmlFromTemplate(contactTemplate));
  mainContainer.append(fragment);
}

export default renderContact;
