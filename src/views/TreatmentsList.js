import { TreatmentsListItem } from './TreatmentsListItem';

export function TreatmentsList() {
  const section = document.createElement('section');

  section.innerHTML = `
    <h2>Lista zabiegów</h2>
    <header>Loading...</header>
  `;


  fetch('http://localhost:3000/treatments')
    .then(response => response.json())
    .then(treatments => {
      const ul = document.createElement('ul');
      const lis = treatments.map(treatment => TreatmentsListItem(treatment));

      ul.append(...lis);
      section.querySelector('header').remove();
      section.append(ul);
    });


  return section;
}
