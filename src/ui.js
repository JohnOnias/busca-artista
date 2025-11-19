const form = document.querySelector("#search-form");
const input = document.querySelector("#artist-input");
const resultsContainer = document.querySelector("#results");

export function onSearchSubmit(callback) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const term = input.value.trim();
    callback(term);
  });
}
export function showLoading() {
  const status = document.querySelector("#status");
  status.textContent = "Carregando...";
  resultsContainer.innerHTML = "";
}

export function showError(message) {
  const status = document.querySelector("#status");
  status.textContent = message;
  status.classList.add("error");
  resultsContainer.innerHTML = "";
}

export function showEmpty() {
  const status = document.querySelector("#status");
  status.textContent = "Nenhum artista encontrado.";
  resultsContainer.innerHTML = "";
}

export function renderArtists(artists) {
  const status = document.querySelector("#status");
  status.textContent = "";
  resultsContainer.innerHTML = "";
  
  artists.forEach((artist) => {
    // Cria um card (article) para cada artista
    const card = document.createElement("article");
    card.classList.add("artist-card");
    
    // Adiciona imagem, nome, metadados e biografia
    card.innerHTML = `
      <img src="${artist.thumb}" alt="${artist.name}" />
      <h2>${artist.name}</h2>
      <p>ID: ${artist.id}</p>
    `;
    
    // Insere o card no DOM
    resultsContainer.appendChild(card);
  });
}