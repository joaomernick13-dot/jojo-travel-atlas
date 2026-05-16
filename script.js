const map = L.map("map").setView([35, 5], 3);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap"
}).addTo(map);

let places = [
  // Alemanha
  { name: "Karlsruhe", country: "Alemanha", type: "city", coords: [49.0069, 8.4037] },
  { name: "Frankfurt", country: "Alemanha", type: "city", coords: [50.1109, 8.6821] },
  { name: "Wiesbaden", country: "Alemanha", type: "city", coords: [50.0782, 8.2398] },
  { name: "Heidelberg", country: "Alemanha", type: "city", coords: [49.3988, 8.6724] },
  { name: "Ludwigsburg", country: "Alemanha", type: "city", coords: [48.8941, 9.1955] },
  { name: "Stuttgart", country: "Alemanha", type: "city", coords: [48.7758, 9.1829] },
  { name: "Esslingen am Neckar", country: "Alemanha", type: "city", coords: [48.7433, 9.3201] },
  { name: "Würzburg", country: "Alemanha", type: "city", coords: [49.7913, 9.9534] },
  { name: "Nürnberg", country: "Alemanha", type: "city", coords: [49.4521, 11.0767] },
  { name: "Munique", country: "Alemanha", type: "city", coords: [48.1351, 11.5820] },
  { name: "Konstanz", country: "Alemanha", type: "city", coords: [47.6779, 9.1732] },
  { name: "Colônia", country: "Alemanha", type: "city", coords: [50.9375, 6.9603] },
  { name: "Düsseldorf", country: "Alemanha", type: "city", coords: [51.2277, 6.7735] },
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

  // Outros Europa
  { name: "Cidade do Vaticano", country: "Vaticano", type: "city", coords: [41.9029, 12.4534] },
  { name: "Zurique", country: "Suíça", type: "city", coords: [47.3769, 8.5417] },
  { name: "Basel", country: "Suíça", type: "city", coords: [47.5596, 7.5886] },
  { name: "Schaffhausen", country: "Suíça", type: "city", coords: [47.6973, 8.6349] },
  { name: "Salzburg", country: "Áustria", type: "city", coords: [47.8095, 13.0550] },
  { name: "Praga", country: "República Tcheca", type: "city", coords: [50.0755, 14.4378] },
  { name: "Luxemburgo", country: "Luxemburgo", type: "city", coords: [49.6116, 6.1319] },

  // Países Baixos e Bélgica
  { name: "Amsterdam", country: "Países Baixos", type: "city", coords: [52.3676, 4.9041] },
  { name: "Rotterdam", country: "Países Baixos", type: "city", coords: [51.9244, 4.4777] },
  { name: "Haia", country: "Países Baixos", type: "city", coords: [52.0705, 4.3007] },
  { name: "Zaanse Schans", country: "Países Baixos", type: "city", coords: [52.4739, 4.8164] },
  { name: "Breda", country: "Países Baixos", type: "city", coords: [51.5719, 4.7683] },
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

const countryCenters = {
  "Alemanha": [51.1657, 10.4515],
  "França": [46.2276, 2.2137],
  "Itália": [41.8719, 12.5674],
  "Vaticano": [41.9029, 12.4534],
  "Suíça": [46.8182, 8.2275],
  "Áustria": [47.5162, 14.5501],
  "República Tcheca": [49.8175, 15.4730],
  "Luxemburgo": [49.8153, 6.1296],
  "Países Baixos": [52.1326, 5.2913],
  "Bélgica": [50.5039, 4.4699],
  "México": [23.6345, -102.5528],
  "Argentina": [-38.4161, -63.6167],
  "Costa Rica": [9.7489, -83.7534],
  "Panamá": [8.5380, -80.7821],
  "Uruguai": [-32.5228, -55.7658],
  "Guatemala": [15.7835, -90.2308],
  "Brasil": [-14.2350, -51.9253]
};

let markers = [];

function makeCityIcon() {
  return L.divIcon({
    className: "",
    html: '<div class="glitter-pin"></div>',
    iconSize: [28, 28],
    iconAnchor: [14, 14]
  });
}

function makeCountryIcon() {
  return L.divIcon({
    className: "",
    html: '<div class="country-pin"></div>',
    iconSize: [38, 38],
    iconAnchor: [19, 19]
  });
}

function clearMarkers() {
  markers.forEach(marker => map.removeLayer(marker));
  markers = [];
}

function getVisitedCountries() {
  return [...new Set(places.map(place => place.country))];
}

function showCountries() {
  clearMarkers();

  const countries = getVisitedCountries();

  countries.forEach(country => {
    const coords = countryCenters[country];

    if (!coords) return;

    const count = places.filter(place => place.country === country).length;

    const marker = L.marker(coords, {
      icon: makeCountryIcon()
    }).addTo(map);

    marker.bindPopup(`
      <div class="popup-title">💖 ${country}</div>
      <p>${count} lugar(es) registrado(s)</p>
      <p>Aproxime o zoom para ver cidades.</p>
    `);

    markers.push(marker);
  });
}

function showCities() {
  clearMarkers();

  places.forEach(place => {
    const marker = L.marker(place.coords, {
      icon: makeCityIcon()
    }).addTo(map);

    marker.bindPopup(`
      <div class="popup-title">✨ ${place.name}</div>
      <p><strong>País:</strong> ${place.country}</p>
      <p><strong>Tipo:</strong> ${place.type === "state" ? "Estado BR" : "Cidade"}</p>
    `);

    markers.push(marker);
  });
}

function updateMapByZoom() {
  const zoom = map.getZoom();

  if (zoom < 5) {
    showCountries();
  } else {
    showCities();
  }
}

function updateStats() {
  const countries = getVisitedCountries().length;
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
    alert("Preencha o nome do lugar e o país.");
    return;
  }

  const query = encodeURIComponent(`${name}, ${country}`);

  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
    const data = await response.json();

    if (!data.length) {
      alert("Não encontrei esse lugar. Tente escrever de outra forma.");
      return;
    }

    const lat = parseFloat(data[0].lat);
    const lon = parseFloat(data[0].lon);

    places.push({
      name,
      country,
      type,
      coords: [lat, lon]
    });

    if (!countryCenters[country]) {
      countryCenters[country] = [lat, lon];
    }

    document.getElementById("placeName").value = "";
    document.getElementById("placeCountry").value = "";

    updateStats();
    updateMapByZoom();

    map.setView([lat, lon], 7);

    alert(`${name} foi adicionado ao mapa 💖`);
  } catch (error) {
    alert("Erro ao buscar localização. Tente novamente.");
    console.error(error);
  }
}

map.on("zoomend", updateMapByZoom);

updateStats();
updateMapByZoom();
setTimeout(() => {
  map.invalidateSize();
}, 500);

window.addEventListener("resize", () => {
  map.invalidateSize();
});
window.onload = () => {
   setTimeout(() => {
      map.invalidateSize();
   },1000);
};
