export function TreatmentDetails(id) {

  const section = document.createElement('section');

  section.innerHTML = `
    <header>Loading...</header>
  `;

  fetch(`http://localhost:3000/treatments/${id}`)
    .then(response => response.json())
    .then(treatment => {
      const paragraph = document.createElement('p');

      paragraph.innerHTML = `
        <strong>Nazwa:</strong> ${treatment.name}
        <br/>
        <strong>Strefa:</strong> ${treatment.area}
        <br/>
        <strong>Czas:</strong> ${treatment.time}
        <br/>
        <strong>Cena:</strong> ${treatment.price.toFixed(2)} zł
      `;

      section.querySelector('header').remove();
      section.append(paragraph);
    });

  return section;
}
