export const app = document.getElementById('app');
export const headerContainer = document.createElement('header');
export const mainContainer = document.createElement('main');
export const footerContainer = document.createElement('footer');
export const bodyOverlay = document.createElement('div');
bodyOverlay.className = 'overlay';

mainContainer.classList.add(
  'd-flex',
  'flex-column',
  'justify-content-center',
  'flex-wrap',
);
footerContainer.id = 'footer';

app.appendChild(bodyOverlay);
app.appendChild(headerContainer);
app.appendChild(mainContainer);
app.appendChild(footerContainer);
