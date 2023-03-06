import { mainContainer } from './createAppStructure';
import createHtmlFromTemplate from './utils';
import emailIcon from '../assets/icons/email-icon.svg';

function renderContact() {
  const fragment = new DocumentFragment();
  const contactTemplate = `<section id="contact-section" class="section container text-center"><div class="col-6 text-center"><img src="${emailIcon}" alt="envelope icon" class="img-fluid contact-icon"/></div><div class="col-6"></div></section>`;
  fragment.append(createHtmlFromTemplate(contactTemplate));
  mainContainer.append(fragment);
}

export default renderContact;
