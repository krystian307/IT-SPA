export function RoomDetails(id) {

  const section = document.createElement('section');

  section.innerHTML = `
    <header>Loading...</header>
  `;

  fetch(`http://localhost:3000/rooms/${id}`)
    .then(response => response.json())
    .then(room => {
      const paragraph = document.createElement('p');

      paragraph.innerHTML = `
        <strong>Nazwa:</strong> ${room.name}
        <br/>
        <strong>Łużka:</strong> ${room.beds}x🛏️
        <br/>
        <strong>Goście:</strong> ${room.guests}x👤
        <br/>
        <strong>Opis:</strong> ${room.description}
        <br/>
        <strong>Cena:</strong> ${room.price.toFixed(2)} zł
      `;

      section.querySelector('header').remove();
      section.append(paragraph);
    });

  return section;
}
