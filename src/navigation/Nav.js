import { Home } from '../views/Home';
import { RoomsList } from '../views/RoomsList';
import { TreatmentsList } from '../views/TreatmentsList';
import { Cart } from '../views/Cart';


const navItems = [
  { name: 'Home', component: Home },
  { name: 'Rezerwacja', component: RoomsList },
  { name: 'Zabiegi', component: TreatmentsList },
  { name: '🛒', component: Cart },

];

export function Nav() {

  const nav = document.createElement('nav');

  const navButtons = navItems.map(navItem => {
    const navButton = document.createElement('button');
    navButton.setAttribute('type', 'button');
    navButton.innerText = navItem.name;

    navButton.addEventListener('click', () => {
      const navigateEvent = new CustomEvent('navigate', {
        detail: navItem.component
      });

      document.body.dispatchEvent(navigateEvent);
    });

    return navButton;
  });

  nav.append(...navButtons);

  return nav;
}
