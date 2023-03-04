import _ from 'lodash';
import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
