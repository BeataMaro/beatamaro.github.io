import * as bootstrap from 'bootstrap';
import { headerContainer } from './createAppStructure';

function renderNav() {
  const fragment = new DocumentFragment();
  const navigation = document.createElement('nav');
  navigation.classList.add(
    // 'container-lg-fluid',
    'fixed-top',
    'navbar',
    'navbar-expand-lg',
    'navbar-light',
    'bg-light',
    'justify-content-end',
  );
  navigation.role = 'navigation';

  // hamburger menu
  const hamburgerBtn = document.createElement('button');
  hamburgerBtn.classList.add('navbar-toggler', 'me-2');
  hamburgerBtn.type = 'button';
  hamburgerBtn.setAttribute('data-bs-toggle', 'collapse');
  hamburgerBtn.setAttribute('data-bs-target', '#navbarNavAltMarkup');
  hamburgerBtn.setAttribute('aria-controls', 'navbarNavAltMarkup');
  hamburgerBtn.setAttribute('aria-expanded', false);
  hamburgerBtn.setAttribute('aria-label', 'Toggle navigation');

  const hamburgerBtnIcon = document.createElement('span');
  hamburgerBtnIcon.className = 'navbar-toggler-icon';
  hamburgerBtn.appendChild(hamburgerBtnIcon);

  const collapseNavbar = document.createElement('div');
  collapseNavbar.classList.add('collapse', 'navbar-collapse', 'shadow-sm', 'p-3', 'justify-content-end');
  collapseNavbar.id = 'navbarNavAltMarkup';

  const navbarNav = document.createElement('div');
  navbarNav.classList.add('navbar-nav');

  const navListAboutLink = document.createElement('a');
  navListAboutLink.href = '#';
  navListAboutLink.textContent = 'About';
  const navListSkillsLink = document.createElement('a');
  navListSkillsLink.href = '#';
  navListSkillsLink.textContent = 'Skills';

  const navListPortfolioLink = document.createElement('a');
  navListPortfolioLink.href = '#';
  navListPortfolioLink.textContent = 'Portfolio';

  const navListContactLink = document.createElement('a');
  navListContactLink.href = '#';
  navListContactLink.textContent = 'Contact';

  fragment.append(navigation);
  headerContainer.appendChild(fragment);

  navigation.append(hamburgerBtn, collapseNavbar);

  collapseNavbar.appendChild(navbarNav);

  navbarNav.append(
    navListAboutLink,
    navListPortfolioLink,
    navListSkillsLink,
    navListContactLink,
  );

  const navLinks = document.querySelectorAll('div.navbar-nav > a');
  [...navLinks].map((item) => item.classList.add('nav-item', 'nav-link'));
}

export default renderNav;
