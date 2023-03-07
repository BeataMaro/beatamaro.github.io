import createHtmlFromTemplate from './utils';
import { mainContainer } from './createAppStructure';
import profileImage from '../assets/images/LinkedInd-profile-photo-b&w.jpg';

function renderAbout() {
  const aboutText = createHtmlFromTemplate(`<section id="about" class="about-section container"><h2 aria-label="About" class="sr-only">About</h2>
  <div class="row mt-5">
  <div class="profile-image p-6 col-s-6 col-m-4 col-lg-5"><img src="${profileImage}" alt="profile"/></div>
  <div class="p-6 col-s-6 col-m-8 col-lg-7"> 
  <p class="fs-1 fw-bolder">Hi,</p>
  <p class="fs-1 fw-bolder">I'm Beata</p><strong class="fs-4 fw-bold lh-lg fst-italic">Junior front-end developer with 5 months commercial experience.</strong><p class="text-break fw-light fst-italic lh-lg"> I used to work as a marketing specialist in a cultural institution, but my curiosity eventually led me down a&nbsp;new path - website management.</p>
  <p class="text-break fw-light fst-italic"> I decided to do a <strong>graphics course</strong> and get an internship at an advertising agency. I then did a postgraduate degree in <strong>front-end web application development</strong> and built my first commercial website using <strong>React</strong>.</p>
  <p class="text-break fw-light fst-italic">This experience helped me land a job at <a href="https://www.tomandco.pl/" target="_blank" rel="no-referrer" class="link-secondary"><strong>Tom&Co</strong></a>, a top Magento e-commerce agency.</p>
  <p>As a member of the <strong>SCRUM</strong> team, I was responsible for maintain and develop <strong>e-commerce</strong> websites.</p>
  <p>I worked there for 5 months as a <strong>junior front-end developer</strong>, learning <strong>Angular</strong>, <strong>TypeScript</strong>, <strong>Magento</strong>, and <strong>Git workflow</strong>.</p>
  <p class="text-break fw-light fst-italic">In order to improve my skills, I'm currently taking part in the <a href="https://rs.school/" target="_blank" rel="no-referrer" class="link-secondary"><strong>Frontend course at RS School</strong></a>.</p><p class="text-break fw-light fst-italic">My strengths are motivation, <strong>attention to detail</strong> and patience. I'm a <strong>team player</strong> always eager to learn more!</p>
  <p class="fw-light fst-italic">Thank you for viewing my <strong>portfolio.</strong></p></section></div>
</div>`);
  const fragment = new DocumentFragment();
  fragment.append(aboutText);
  mainContainer.append(fragment);
}

export default renderAbout;
