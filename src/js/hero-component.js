import plantImage from '../assets/images/marek-piwnicki-unsplash.jpg';
import { headerContainer } from './createAppStructure';

function renderHero() {
  const gradientPlant = document.createElement('img');
  gradientPlant.classList.add('img-fluid');
  gradientPlant.alt = 'plant on the purple-gradient background';
  gradientPlant.src = plantImage;

  headerContainer.appendChild(gradientPlant);
}

export default renderHero;
