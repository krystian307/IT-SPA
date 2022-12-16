import { cartManager } from '../cart/cart-manager';
import { Button } from '../common/Button';
import { RoomDetails } from './RoomDetails';

export function RoomsListItem(room) {

  const li = document.createElement('li');

  const readMoreButton = Button('Czytaj więcej', () => {
    const navigateEvent = new CustomEvent('navigate', {
      detail: () => RoomDetails(room.id)
    });

    document.body.dispatchEvent(navigateEvent);
  });

  const addToCartButton = Button('Dodaj do koszyka', () => {
    cartManager.addItem(room);
  });

  const now = new Date();
  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth() + 1;
  const nowDate = now.getDate();

  const nextYear = now.getFullYear() + 1;
  const nextDay = now.getDate() + 1;

  const minDate = nowYear + "-" + nowMonth + "-" + nowDate;
  const maxDate = nextYear + "-" + nowMonth + "-" + nowDate;
  const nextDate = nowYear + "-" + nowMonth + "-" + nextDay;

  li.innerHTML = `
    <h4>${room.name}</h4>
    <p>
      <strong>${room.price.toFixed(2)} zł</strong>
    </p>
    <form action="*">
    <label>Podaj datę przyjazdu:</label> <input type="date" id="dateStart" value=${minDate} min=${minDate} max=${maxDate}> 
    <label> - Podaj datę wyjazdu:</label><input type="date" id="dateEnd" value=${nextDate} min=${minDate} max=${maxDate}>

    </form>

  </p>

    <footer></footer>
  `;

  li.querySelector('footer').append(readMoreButton, addToCartButton);

  return li;
}
