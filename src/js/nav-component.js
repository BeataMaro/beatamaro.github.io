import { headerContainer } from './createAppStructure';

const BODY = document.body;

function closeNavbar(e) {
  const navbar = document.querySelector('.navbar-collapse');
  if (e.target.closest('.navbar')) return;
  BODY.classList.remove('darkened-body');
  navbar.classList.remove('show');
}

function openCloseNavbar() {
  const navbar = document.querySelector('.navbar-collapse');
  if (BODY.classList.contains('darkened-body')) {
    BODY.classList.remove('darkened-body');
    navbar.classList.remove('show');
  } else {
    BODY.classList.add('darkened-body');
    navbar.classList.add('show');
  }
}

BODY.addEventListener('click', closeNavbar);

function highlightActiveNavItem(e) {
  const navLinks = document.querySelectorAll('div.navbar-nav > a');
  const navbar = document.querySelector('.navbar-collapse');
  navLinks.forEach((link) => link.classList.remove('active-section'));
  e.target.classList.add('active-section');
  BODY.classList.remove('darkened-body');
  navbar.classList.remove('show');
}

function renderNav() {
  const fragment = new DocumentFragment();
  const navigation = document.createElement('nav');
  navigation.classList.add(
    'container-xl',
    'fixed-top',
    'navbar',
    'navbar-expand-lg',
    'navbar-light',
    'justify-content-end',
  );
  navigation.role = 'navigation';

  // hamburger menu
  const hamburgerBtn = document.createElement('button');
  hamburgerBtn.classList.add('navbar-toggler', 'm-3');
  hamburgerBtn.type = 'button';
  hamburgerBtn.setAttribute('data-bs-toggle', 'collapse');
  hamburgerBtn.setAttribute('data-bs-target', '#navbarNavAltMarkup');
  hamburgerBtn.setAttribute('aria-controls', 'navbarNavAltMarkup');
  hamburgerBtn.setAttribute('aria-expanded', false);
  hamburgerBtn.setAttribute('aria-label', 'Toggle navigation');

  const hamburgerBtnIcon = document.createElement('span');
  hamburgerBtnIcon.className = 'navbar-toggler-icon';
  hamburgerBtn.appendChild(hamburgerBtnIcon);

  hamburgerBtn.addEventListener('click', openCloseNavbar);

  const collapseNavbar = document.createElement('div');
  collapseNavbar.classList.add(
    'collapse',
    'navbar-collapse',
    'bg-light',
    'shadow-lg',
    'p-3',
    'justify-content-lg-end',
  );
  collapseNavbar.id = 'navbarNavAltMarkup';

  const navbarNav = document.createElement('div');
  navbarNav.classList.add('navbar-nav');
  navbarNav.classList.add('center');

  const navListAboutLink = document.createElement('a');
  navListAboutLink.href = '#about';
  navListAboutLink.id = 'nav_about';
  const navListSkillsLink = document.createElement('a');
  navListSkillsLink.href = '#skills';
  navListSkillsLink.textContent = 'Skills';
  navListSkillsLink.id = 'nav_skills';

  const navListPortfolioLink = document.createElement('a');
  navListPortfolioLink.href = '#portfolio';
  navListPortfolioLink.textContent = 'Portfolio';

  const navListContactLink = document.createElement('a');
  navListContactLink.href = '#contact';
  navListContactLink.id = 'nav_contact';

  const languageVersionSelect = document.createElement('select');
  languageVersionSelect.id = 'language-select';
  const languagePLOption = document.createElement('option');
  languagePLOption.value = 'pl';
  languagePLOption.textContent = 'PL';
  const languageENOption = document.createElement('option');
  languageENOption.value = 'en';
  languageENOption.textContent = 'EN';
  languageVersionSelect.append(languagePLOption);
  languageVersionSelect.append(languageENOption);

  fragment.append(navigation);
  headerContainer.appendChild(fragment);

  navigation.append(hamburgerBtn, collapseNavbar);

  collapseNavbar.appendChild(navbarNav);

  navbarNav.append(
    navListAboutLink,
    navListPortfolioLink,
    navListSkillsLink,
    navListContactLink,
    languageVersionSelect,
  );

  const navbar = document.querySelector('.navbar-toggler');
  navbar.addEventListener('click', openCloseNavbar);
  const navLinks = document.querySelectorAll('div.navbar-nav > a');
  [...navLinks].map((item) => {
    item.classList.add('nav-item', 'nav-link');
    item.addEventListener('click', (e) => highlightActiveNavItem(e));
    return null;
  });
}

export default renderNav;
