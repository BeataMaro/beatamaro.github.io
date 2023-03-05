import createHtmlFromTemplate from './utils';
import { mainContainer } from './createAppStructure';

function renderAbout() {
  const aboutText = createHtmlFromTemplate(`<section class="about-section"><h2>Welcome to my website!</h2><p>
<p>I'm Beata and I come from Poland.</p><p> I used to work as a marketing specialist in a cultural institution, but my curiosity eventually led me down a new path - website management.</p></p> I decided to do a <strong>graphics course</strong> and get an internship at an advertising agency. I then did a postgraduate degree in <strong>front-end web application development</strong> and built my first commercial website using <strong>React</strong>.</p><p>This experience helped me land a job at <a href="https://www.tomandco.pl/" target="_blank" rel="no-referrer" class="link-secondary"><strong>Tom&Co</strong></a>, a top Magento e-commerce agency. I worked there for <strong>5 months</strong> as a <strong>junior front-end developer</strong>, learning <strong>Angular</strong>, <strong>TypeScript</strong>, <strong>Magento</strong>, and the <strong>Git</strong> workflow. As a member of the <strong>SCRUM</strong> team, I helped to maintain and develop <strong>e-commerce</strong> websites.</p><p>I'm currently taking part in the <a href="https://rs.school/" target="_blank" rel="no-referrer" class="link-secondary"><strong>Frontend course at RS School</strong></a> to improve my skills. My strengths are motivation, <strong>attention to detail</strong> and patience. I'm a <strong>team player</strong> always eager to learn more!
</p><p>Thank you for viewing my <strong>portfolio.</strong></p></section>`);
  const fragment = new DocumentFragment();
  fragment.append(aboutText);
  mainContainer.append(fragment);
}

export default renderAbout;
