const defaultPlaces = [
  // Alemanha
  { name: "Karlsruhe", country: "Alemanha", type: "city", coords: [49.0069, 8.4037] },
  { name: "Frankfurt", country: "Alemanha", type: "city", coords: [50.1109, 8.6821] },
  { name: "Wiesbaden", country: "Alemanha", type: "city", coords: [50.0782, 8.2398] },
  { name: "Heidelberg", country: "Alemanha", type: "city", coords: [49.3988, 8.6724] },
  { name: "Schwetzingen", country: "Alemanha", type: "city", coords: [49.3856, 8.5728] },
  { name: "Baden-Baden", country: "Alemanha", type: "city", coords: [48.7606, 8.2398] },
  { name: "Mannheim", country: "Alemanha", type: "city", coords: [49.4875, 8.4660] },
  { name: "Mainz", country: "Alemanha", type: "city", coords: [49.9929, 8.2473] },
  { name: "Stuttgart", country: "Alemanha", type: "city", coords: [48.7758, 9.1829] },
  { name: "Esslingen am Neckar", country: "Alemanha", type: "city", coords: [48.7433, 9.3201] },
  { name: "Würzburg", country: "Alemanha", type: "city", coords: [49.7913, 9.9534] },
  { name: "Nürnberg", country: "Alemanha", type: "city", coords: [49.4521, 11.0767] },
  { name: "Munique", country: "Alemanha", type: "city", coords: [48.1351, 11.5820] },
  { name: "Konstanz", country: "Alemanha", type: "city", coords: [47.6779, 9.1732] },
  { name: "Colônia", country: "Alemanha", type: "city", coords: [50.9375, 6.9603] },
  { name: "Schwangau / Füssen", country: "Alemanha", type: "city", coords: [47.5576, 10.7498] },

  // França
  { name: "Paris", country: "França", type: "city", coords: [48.8566, 2.3522] },
  { name: "Estrasburgo", country: "França", type: "city", coords: [48.5734, 7.7521] },
  { name: "Colmar", country: "França", type: "city", coords: [48.0794, 7.3585] },

  // Itália
  { name: "Roma", country: "Itália", type: "city", coords: [41.9028, 12.4964] },
  { name: "Florença", country: "Itália", type: "city", coords: [43.7696, 11.2558] },
  { name: "Pisa", country: "Itália", type: "city", coords: [43.7228, 10.4017] },
  { name: "Verona", country: "Itália", type: "city", coords: [45.4384, 10.9916] },
  { name: "Veneza", country: "Itália", type: "city", coords: [45.4408, 12.3155] },
  { name: "Milão", country: "Itália", type: "city", coords: [45.4642, 9.1900] },

  // Vaticano
  { name: "Cidade do Vaticano", country: "Vaticano", type: "city", coords: [41.9029, 12.4534] },

  // Suíça
  { name: "Zurique", country: "Suíça", type: "city", coords: [47.3769, 8.5417] },
  { name: "Basel", country: "Suíça", type: "city", coords: [47.5596, 7.5886] },
  { name: "Kreuzlingen", country: "Suíça", type: "city", coords: [47.6505, 9.1750] },

  // Áustria
  { name: "Salzburg", country: "Áustria", type: "city", coords: [47.8095, 13.0550] },

  // República Tcheca
  { name: "Praga", country: "República Tcheca", type: "city", coords: [50.0755, 14.4378] },

  // Luxemburgo
  { name: "Luxemburgo", country: "Luxemburgo", type: "city", coords: [49.6116, 6.1319] },

  // Países Baixos
  { name: "Amsterdam", country: "Países Baixos", type: "city", coords: [52.3676, 4.9041] },
  { name: "Rotterdam", country: "Países Baixos", type: "city", coords: [51.9244, 4.4777] },
  { name: "Haia", country: "Países Baixos", type: "city", coords: [52.0705, 4.3007] },
  { name: "Zaanse Schans", country: "Países Baixos", type: "city", coords: [52.4739, 4.8164] },
  { name: "Zaandam", country: "Países Baixos", type: "city", coords: [52.4420, 4.8292] },
  { name: "Breda", country: "Países Baixos", type: "city", coords: [51.5719, 4.7683] },

  // Bélgica
  { name: "Gent", country: "Bélgica", type: "city", coords: [51.0543, 3.7174] },
  { name: "Antwerpen", country: "Bélgica", type: "city", coords: [51.2194, 4.4025] },

  // Américas
  { name: "Cidade do México", country: "México", type: "city", coords: [19.4326, -99.1332] },
  { name: "Buenos Aires", country: "Argentina", type: "city", coords: [-34.6037, -58.3816] },
  { name: "Ushuaia", country: "Argentina", type: "city", coords: [-54.8019, -68.3030] },
  { name: "San José", country: "Costa Rica", type: "city", coords: [9.9281, -84.0907] },
  { name: "Cidade do Panamá", country: "Panamá", type: "city", coords: [8.9824, -79.5199] },
  { name: "Montevideo", country: "Uruguai", type: "city", coords: [-34.9011, -56.1645] },
  { name: "Guatemala City", country: "Guatemala", type: "city", coords: [14.6349, -90.5069] },

  // Brasil por estado
  { name: "Rio de Janeiro", country: "Brasil", type: "state", coords: [-22.9068, -43.1729] },
  { name: "Minas Gerais", country: "Brasil", type: "state", coords: [-18.5122, -44.5550] },
  { name: "São Paulo", country: "Brasil", type: "state", coords: [-23.5505, -46.6333] },
  { name: "Santa Catarina", country: "Brasil", type: "state", coords: [-27.2423, -50.2189] },
  { name: "Paraná", country: "Brasil", type: "state", coords: [-25.2521, -52.0215] }
];

let extraPlaces = JSON.parse(localStorage.getItem("jojoExtraPlaces") || "[]");

let places = [...defaultPlaces, ...extraPlaces];

places = [
  ...new Map(
    places.map(place => [place.name + place.country, place])
  ).values()
];

const map = L.map("map").setView([35, 5], 3);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap"
}).addTo(map);

let markers = [];

function makeHeartIcon() {
  return L.divIcon({
    className: "",
    html: `<div class="heart-pin">💖</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15]
  });
}

function clearMarkers() {
  markers.forEach(marker => map.removeLayer(marker));
  markers = [];
}

function drawPlaces() {
  clearMarkers();

  const list = document.getElementById("placesList");
  if (list) list.innerHTML = "";

  places.forEach(place => {
    const marker = L.marker(place.coords, {
      icon: makeHeartIcon()
    }).addTo(map);

    const photoId = `photo-${place.name.replace(/\s+/g, "-").replace(/[^\w-]/g, "")}`;

marker.bindPopup(`
  <div class="popup-card">
    <img id="${photoId}" class="popup-photo" src="https://placehold.co/500x300/ffd1ec/ff1493?text=Carregando+foto..." />
    <div class="popup-title">💖 ${place.name}</div>
    <p><strong>País:</strong> ${place.country}</p>
    <p><strong>Tipo:</strong> ${place.type === "state" ? "Estado BR" : "Cidade"}</p>
    <a class="maps-link" target="_blank" href="https://www.google.com/maps/search/${encodeURIComponent(place.name + ', ' + place.country)}">
      Abrir no Google Maps
    </a>
  </div>
`);

marker.on("popupopen", () => {
  loadPlacePhoto(place, photoId);
});

    markers.push(marker);

    if (list) {
      const item = document.createElement("div");
      item.className = "placeItem";
      item.innerHTML = `
        <strong>${place.name}</strong><br>
        <small>${place.country}</small>
      `;

      item.onclick = () => {
        map.setView(place.coords, 9);
        marker.openPopup();

        const panel = document.getElementById("panel");
        if (window.innerWidth < 800 && panel) {
          panel.classList.add("hidden");
        }
      };

      list.appendChild(item);
    }
  });

  updateStats();
}

function updateStats() {
  const countries = new Set(places.map(place => place.country)).size;
  const cities = places.filter(place => place.type === "city").length;
  const states = places.filter(place => place.type === "state").length;

  document.getElementById("countryCount").textContent = countries;
  document.getElementById("cityCount").textContent = cities;
  document.getElementById("stateCount").textContent = states;
}

async function addPlace() {
  const name = document.getElementById("placeName").value.trim();
  const country = document.getElementById("placeCountry").value.trim();
  const type = document.getElementById("placeType").value;

  if (!name || !country) {
    alert("Preencha cidade e país.");
    return;
  }

  const query = encodeURIComponent(`${name}, ${country}`);

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
    );

    const data = await response.json();

    if (!data.length) {
      alert("Não encontrei esse lugar. Tente escrever de outra forma.");
      return;
    }

    const newPlace = {
      name,
      country,
      type,
      coords: [parseFloat(data[0].lat), parseFloat(data[0].lon)]
    };

    const alreadyExists = places.some(
      place => place.name === newPlace.name && place.country === newPlace.country
    );

    if (alreadyExists) {
      alert("Esse lugar já existe no mapa.");
      return;
    }

    extraPlaces.push(newPlace);
    localStorage.setItem("jojoExtraPlaces", JSON.stringify(extraPlaces));

    places.push(newPlace);

    document.getElementById("placeName").value = "";
    document.getElementById("placeCountry").value = "";

    drawPlaces();
    map.setView(newPlace.coords, 9);

    alert(`${name} foi adicionado ao mapa 💖`);
  } catch (error) {
    alert("Erro ao buscar localização.");
    console.error(error);
  }
}

function filterPlaces() {
  const value = document.getElementById("search").value.toLowerCase();
  const items = document.querySelectorAll(".placeItem");

  items.forEach(item => {
    item.style.display = item.innerText.toLowerCase().includes(value)
      ? "block"
      : "none";
  });
}

const menuToggle = document.getElementById("menuToggle");
const panel = document.getElementById("panel");

if (menuToggle && panel) {
  menuToggle.onclick = () => {
    panel.classList.toggle("hidden");

    setTimeout(() => {
      map.invalidateSize();
    }, 400);
  };
}

drawPlaces();

setTimeout(() => {
  map.invalidateSize();
}, 500);

setTimeout(() => {
  map.invalidateSize();
}, 1500);

window.addEventListener("resize", () => {
  map.invalidateSize();
});

async function loadPlacePhoto(place, photoId) {
  const img = document.getElementById(photoId);
  if (!img) return;

  const query = encodeURIComponent(`${place.name} ${place.country}`);

  const url =
    `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${query}&prop=pageimages&piprop=thumbnail&pithumbsize=600&format=json&origin=*`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const pages = data.query?.pages;

    if (!pages) {
      img.src = "https://placehold.co/500x300/ffd1ec/ff1493?text=Sem+foto";
      return;
    }

    const firstPage = Object.values(pages).find(page => page.thumbnail);

    if (firstPage?.thumbnail?.source) {
      img.src = firstPage.thumbnail.source;
    } else {
      img.src = "https://placehold.co/500x300/ffd1ec/ff1493?text=Sem+foto";
    }
  } catch (error) {
    img.src = "https://placehold.co/500x300/ffd1ec/ff1493?text=Erro+na+foto";
  }
}
