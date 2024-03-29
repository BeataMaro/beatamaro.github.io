import createHtmlFromTemplate from './utils';
import { mainContainer } from './createAppStructure';

function renderAbout() {
  const aboutText = createHtmlFromTemplate(`<section id="about" class="section section-about container border-lg-bottom"><h2 aria-label="About" class="sr-only">About</h2>
  <div class="row row-cols-md-2 row-cols-lg-2 d-flex flex-column flex-md-row justify-content-around">
  <div class="col col-sm-12 col-md-12"> 
  <p class="fs-1 fw-bold lh-sm">Hi,</p>
  <p class="fs-1 fw-bold lh-sm">My name is Beata</p><strong class="fs-4 fw-bold lh-md fst-italic">junior frontend developer with 10 months of commercial experience.</strong>
  <p class="text-break fw-light fst-italic mt-3">I used to work as a marketing specialist in a&nbsp;cultural institution, but my curiosity eventually led me down a&nbsp;new path -&nbsp;website management.</p>
  <p class="text-break fw-light fst-italic"> I decided to do a <strong>graphics course</strong> and get an internship at an advertising agency. I&nbsp;then did a postgraduate degree in <strong>frontend web application development</strong> and built my first commercial website using <strong class="fw-bold">Gatsby.js</strong> library.</p>
  </div>
  <div class="col col-sm-12 col-md-12 fst-italic d-flex flex-column justify-content-center py-md-3 py-lg-none">
  <p class="text-break fw-light fst-italic">This experience helped me land a job at <a href="https://www.tomandco.pl/" target="_blank" rel="no-referrer" class="link-secondary"><strong>Tom&Co</strong></a>, a&nbsp;top Magento e-commerce agency.</p>
  <p>As a member of the <strong>SCRUM</strong> team, I&nbsp;was responsible for the maintenance and development of <strong>e-commerce</strong> websites.</p>
  <p>I worked there for 5 months as a <strong>junior Frontend Developer</strong>, learning <strong>Angular</strong>, <strong>TypeScript</strong>, <strong>Magento</strong>, and <strong>Git workflow</strong>.</p>
  <p class="text-break fw-light fst-italic">To improve my skills, I completed the <a href="https://rs.school/" target="_blank" rel="no-referrer" class="link-secondary"><strong>Frontend course at RS School</strong></a>.</p>
  <p class="text-break fw-light fst-italic">Until December I've been working at <strong class="fw-bold">Webjaksklep Software House as a junior frontend developer.</strong></p>
  <p class="text-break fw-light fst-italic">My strengths are motivation, <strong>attention to detail</strong> and patience. I'm a&nbsp;<strong>team player</strong> always eager to learn more!</p>
  
  </div>
  </div>
  <div class="row text-end pt-5">
  <p> Now I am looking for new challenges.</p>
  <p class="fw-light fst-italic mobile-trigger">Thank you for viewing my <strong>portfolio!</strong></p>
  </div>
  </section>
  `);
  const fragment = new DocumentFragment();
  fragment.append(aboutText);
  mainContainer.append(fragment);
}

export default renderAbout;
