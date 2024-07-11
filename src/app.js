import './scss/styles.scss';
import './index.html';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'pl',
    debug: true,
    resources: {
      pl: {
        translation: {
          nav_contact: 'Kontakt',
          nav_about: 'O mnie',
          nav_skills: 'Umiejętności',
          bio: 'Jestem absolwentką Kulturoznawstwa oraz Zarządzania w Kulturze. Pierwsze doświadczenie zawodowe zdobyłam w Pałacu Kultury Zagłębia jako specjalista ds. marketingu, gdzie nauczyłam się skutecznie komunikować i organizować różnorodne przedsięwzięcia. Zajmowałam się również redagowaniem tekstów oraz publikacją treści na stronie internetowej, co skłoniło mnie do nauki tworzenia stron internetowych. Dzięki temu odkryłam swoją pasję do technologii webowych, co skłoniło mnie do ukończenia studiów podyplomowych Aplikacje internetowe - front-end development. Pracując jako junior front-end developer w firmach Tom&Co oraz Webjaksklep, zyskałam praktyczne doświadczenie w branży e-commerce, tworząc i utrzymując aplikacje internetowe.        Ponadto, uzyskałam certyfikat ISTQB CTFL, potwierdzający moją podstawową wiedzę z zakresu testowania oprogramowania.Łączę w sobie kreatywność i zdolności techniczne, co pozwala mi patrzeć na wyzwania z różnych perspektyw. Samodzielnie szukam rozwiązań i chętnie podejmuję nowe wyzwania. Jestem przekonana, że dzięki moim umiejętnościom i doświadczeniu mogę wnieść wartość do wielu różnych projektów i zespołów.',
          thank_you: 'Dziękuję za obejrzenie mojego portfolio!',
          my_skills: 'Moje umiejętności',
          currently: 'Aktualnie pracuję nad...',
          github_repo: 'Repozytorium GitHub: ',
          technologies: 'Technologie',
          my_projects: 'Moje projekty',
          project_title_weather: 'Aplikacja pogodowa',
          project_title_unsplash: 'Przeglądarka zdjęć Unsplash',
          project_title_workshop: 'Pracownia krawiecka i sklep',
          project_title_expense: 'Aplikacja do zarządzania wydatkami',
        },
      },
      en: {
        translation: {
          nav_contact: 'Contact',
          nav_about: 'About',
          nav_skills: 'Skills',
          bio: 'I am a graduate of Cultural Studies and Cultural Management. I gained my first professional experience at the Zagłębie Palace of Culture as a marketing specialist, where I learnt how to communicate effectively and organise various events. I wrote texts and added content to the website, which led me to learn how to create websites. Thanks to this, I discovered my passion for web technologies, which led me to do a postgraduate degree in web applications - front-end development. Working as a junior front-end developer at Tom&Co and Webjaksklep, I gained practical experience in the e-commerce industry, creating and maintaining web applications. I have also obtained the ISTQB CTFL certificate, which confirms my basic knowledge of software testing. I combine creativity and technical skills, which allows me to look at challenges from different perspectives. I am a self-starter and like to take on new challenges. I believe that my skills and experience can add value to many different projects and teams.',
          thank_you: 'Thank you for viewing my portfolio!',
          my_skills: 'My skills',
          currently: 'I am currently working on...',
          github_repo: 'GitHub repositiory: ',
          technologies: 'Technologies',
          my_projects: 'My projects',
          project_title_weather: 'Weather Application',
          project_title_unsplash: 'Unsplash photo viewer',
          project_title_workshop: 'Sewing workshop and shop',
          project_title_expense: 'Expense management application',

        },
      },
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
    },
  });

function updateContent() {
  document.getElementById('nav_contact').innerHTML = i18next.t('nav_contact');
  document.getElementById('nav_about').innerHTML = i18next.t('nav_about');
  document.getElementById('nav_skills').innerHTML = i18next.t('nav_skills');
  document.getElementById('bio').innerHTML = i18next.t('bio');
  document.getElementById('thank_you').innerHTML = i18next.t('thank_you');
  document.getElementById('my_skills').innerHTML = i18next.t('my_skills');
  document.getElementById('currently').innerHTML = i18next.t('currently');
  document.querySelector('.my_projects').innerHTML = i18next.t('my_projects');
  document.querySelector('.project_title_weather').innerHTML = i18next.t('project_title_weather');
  document.querySelector('.project_title_unsplash').innerHTML = i18next.t('project_title_unsplash');
  document.querySelector('.project_title_workshop').innerHTML = i18next.t('project_title_workshop');
  document.querySelector('.project_title_expense').innerHTML = i18next.t('project_title_expense');

  document.querySelectorAll('.github_repo').forEach((el) => {
    // eslint-disable-next-line
    el.innerHTML = i18next.t('github_repo');
  });
  document.querySelectorAll('.technologies').forEach((el) => {
    // eslint-disable-next-line
    el.innerHTML = i18next.t('technologies');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateContent();
  document.getElementById('language-select').addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    i18next.changeLanguage(selectedLanguage, () => {
      updateContent();
    });
  });
});
