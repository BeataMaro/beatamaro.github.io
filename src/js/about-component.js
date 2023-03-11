import createHtmlFromTemplate from './utils';
import { mainContainer } from './createAppStructure';
import profileImage from '../assets/images/LinkedInd-profile-photo-b&w.jpg';

function renderAbout() {
  const aboutText = createHtmlFromTemplate(`<section id="about" class="section section-about container border-bottom py-4"><h2 aria-label="About" class="sr-only">About</h2>
  <div class="row row-cols-md-2 row-cols-lg-3 g-2 d-flex flex-column flex-md-row justify-content-center p-md-1  about-trigger">
  <div class="profile-image col d-flex  align-self-start align-self-md-end align-self-lg-center align-items-center align-items-lg-start bg-light p-3">
  <img src="${profileImage}" alt="profile" class="img-fluid img-lg-thumbnail rounded"/>
  </div>
  <div class="col p-4"> 
  <p class="fs-1 fw-bolder">Hi,</p>
  <p class="fs-1 fw-bolder lh-sm">I'm Beata</p><strong class="fs-4 fw-bold lh-md fst-italic">Junior front-end developer with 5&nbsp;months commercial experience.</strong><p class="text-break fw-light fst-italic mt-2">I used to work as a marketing specialist in a&nbsp;cultural institution, but my curiosity eventually led me down a&nbsp;new path -&nbsp;website management.</p>
  <p class="text-break fw-light fst-italic"> I decided to do a <strong>graphics course</strong> and get an internship at an advertising agency. I&nbsp;then did a postgraduate degree in <strong>front-end web application development</strong> and built my first commercial website using <strong>Gatsby.js</strong>.</p>
  <p class="text-break fw-light fst-italic">This experience helped me land a job at <a href="https://www.tomandco.pl/" target="_blank" rel="no-referrer" class="link-secondary"><strong>Tom&Co</strong></a>, a&nbsp;top Magento e-&nbsp;commerce agency.</p>
  </div>
  <div class="col col-sm-12 col-md-12 p-4 bg-light">
  <p>As a member of the <strong>SCRUM</strong> team, I&nbsp;was responsible for maintain and develop <strong>e-&nbsp;commerce</strong> websites.</p>
  <p>I worked there for 5 months as a <strong>junior front-end developer</strong>, learning <strong>Angular</strong>, <strong>TypeScript</strong>, <strong>Magento</strong>, and <strong>Git workflow</strong>.</p>
  <p class="text-break fw-light fst-italic">In order to improve my skills, I'm currently taking part in the <a href="https://rs.school/" target="_blank" rel="no-referrer" class="link-secondary"><strong>Frontend course at RS School</strong></a>.</p><p class="text-break fw-light fst-italic">My strengths are motivation, <strong>attention to detail</strong> and patience. I'm a&nbsp;<strong>team player</strong> always eager to learn more!</p>
  <p class="fw-light fst-italic mobile-trigger">Thank you for viewing my <strong>portfolio.</strong></p></section></div>
  </div>
  </div>`);
  const fragment = new DocumentFragment();
  fragment.append(aboutText);
  mainContainer.append(fragment);
}

export default renderAbout;
