import { cartManager } from '../cart/cart-manager';
import { Button } from '../common/Button';
import { TreatmentDetails } from './TreatmentDetails';

export function TreatmentsListItem(treatment) {

  const li = document.createElement('li');

  const readMoreButton = Button('Czytaj więcej', () => {
    const navigateEvent = new CustomEvent('navigate', {
      detail: () => TreatmentDetails(treatment.id)
    });

    document.body.dispatchEvent(navigateEvent);
  });

  const addToCartButton = Button('Dodaj do koszyka', () => {
    cartManager.addItem(treatment);
  });

  li.innerHTML = `
    <h4>${treatment.name}</h4>
    <p>
      <strong>${treatment.price.toFixed(2)} zł</strong>
    </p>
  </p>
    <footer></footer>
  `;

  li.querySelector('footer').append(readMoreButton, addToCartButton);

  return li;
}
