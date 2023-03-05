export const app = document.getElementById('app');
export const headerContainer = document.createElement('header');
export const mainContainer = document.createElement('main');
export const footerContainer = document.createElement('footer');

mainContainer.classList.add(
  'container-fluid',
  'd-flex',
  'flex-column',
  'justify-content-center',
  'align-content-center',
  'flex-wrap',
);

footerContainer.classList.add('text-center');
app.appendChild(headerContainer);
app.appendChild(mainContainer);
app.appendChild(footerContainer);
