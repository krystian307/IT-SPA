
export function Home() {
  const section = document.createElement('section');
  const image = document.createElement('img');
  section.innerHTML = `
  <div class="text-box">
  <p>Ośrodek</p>
  <h1>SPA</h1>
  <h3>dedykowanego programistom</h3>
</div>
  `;
  return section;
}
