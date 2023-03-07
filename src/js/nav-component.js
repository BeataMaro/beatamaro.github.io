import * as bootstrap from 'bootstrap';
import { headerContainer } from './createAppStructure';

const BODY = document.body;

function closeNavbar(e) {
  const hambBtn = document.querySelector('.navbar-toggler');
  const navbar = document.querySelector('.navbar-collapse');
  if (e.target.closest('.navbar')) return;
  BODY.classList.remove('darkened-body');
  hambBtn.classList.remove('collapsed');
  navbar.classList.remove('show');
}

BODY.addEventListener('click', closeNavbar);

function darkenedBody() {
  const hambBtn = document.querySelector('.navbar-toggler');
  if (!hambBtn.classList.contains('collapsed')) {
    BODY.classList.add('darkened-body');
  } else {
    BODY.classList.remove('darkened-body');
  }
}

function highlightActiveNavItem(e) {
  const navLinks = document.querySelectorAll('div.navbar-nav > a');
  navLinks.forEach((link) => link.classList.remove('active-section'));
  e.target.classList.add('active-section');
}

function renderNav() {
  const fragment = new DocumentFragment();
  const navigation = document.createElement('nav');
  navigation.classList.add(
    'container-fluid',
    'fixed-top',
    'navbar',
    'navbar-expand-lg',
    'navbar-light',
    'justify-content-end',
    'bg-light',
  );
  navigation.role = 'navigation';

  // hamburger menu
  const hamburgerBtn = document.createElement('button');
  hamburgerBtn.classList.add('navbar-toggler', 'me-2', 'm-3');
  hamburgerBtn.type = 'button';
  hamburgerBtn.setAttribute('data-bs-toggle', 'collapse');
  hamburgerBtn.setAttribute('data-bs-target', '#navbarNavAltMarkup');
  hamburgerBtn.setAttribute('aria-controls', 'navbarNavAltMarkup');
  hamburgerBtn.setAttribute('aria-expanded', false);
  hamburgerBtn.setAttribute('aria-label', 'Toggle navigation');

  const hamburgerBtnIcon = document.createElement('span');
  hamburgerBtnIcon.className = 'navbar-toggler-icon';
  hamburgerBtn.appendChild(hamburgerBtnIcon);

  hamburgerBtn.addEventListener('click', darkenedBody);

  const collapseNavbar = document.createElement('div');
  collapseNavbar.classList.add(
    'collapse',
    'navbar-collapse',
    'bg-light',
    'shadow-sm',
    'p-3',
    'justify-content-end',
  );
  collapseNavbar.id = 'navbarNavAltMarkup';

  const navbarNav = document.createElement('div');
  navbarNav.classList.add('navbar-nav');

  const navListAboutLink = document.createElement('a');
  navListAboutLink.href = '#about';
  navListAboutLink.textContent = 'About';
  const navListSkillsLink = document.createElement('a');
  navListSkillsLink.href = '#skills';
  navListSkillsLink.textContent = 'Skills';

  const navListPortfolioLink = document.createElement('a');
  navListPortfolioLink.href = '#portfolio';
  navListPortfolioLink.textContent = 'Portfolio';

  const navListContactLink = document.createElement('a');
  navListContactLink.href = '#contact';
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
  [...navLinks].map((item) => {
    item.classList.add('nav-item', 'nav-link');
    item.addEventListener('click', (e) => highlightActiveNavItem(e));
    return null;
  });
}

export default renderNav;
