import plantImage from '../assets/images/marek-piwnicki-unsplash.jpg';
import { mainContainer } from './createAppStructure';

function renderPlant() {
  const gradientPlant = document.createElement('img');
  gradientPlant.alt = 'plant on the purple-gradient background';
  gradientPlant.src = plantImage;

  mainContainer.appendChild(gradientPlant);
}

export default renderPlant;
