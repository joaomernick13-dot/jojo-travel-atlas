const defaultPlaces = [
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

  { name: "Paris", country: "França", type: "city", coords: [48.8566, 2.3522] },
  { name: "Estrasburgo", country: "França", type: "city", coords: [48.5734, 7.7521] },
  { name: "Colmar", country: "França", type: "city", coords: [48.0794, 7.3585] },

  { name: "Roma", country: "Itália", type: "city", coords: [41.9028, 12.4964] },
  { name: "Florença", country: "Itália", type: "city", coords: [43.7696, 11.2558] },
  { name: "Pisa", country: "Itália", type: "city", coords: [43.7228, 10.4017] },
  { name: "Verona", country: "Itália", type: "city", coords: [45.4384, 10.9916] },
  { name: "Veneza", country: "Itália", type: "city", coords: [45.4408, 12.3155] },
  { name: "Milão", country: "Itália", type: "city", coords: [45.4642, 9.1900] },

  { name: "Cidade do Vaticano", country: "Vaticano", type: "city", coords: [41.9029, 12.4534] },

  { name: "Zurique", country: "Suíça", type: "city", coords: [47.3769, 8.5417] },
  { name: "Basel", country: "Suíça", type: "city", coords: [47.5596, 7.5886] },
  { name: "Kreuzlingen", country: "Suíça", type: "city", coords: [47.6505, 9.1750] },

  { name: "Salzburg", country: "Áustria", type: "city", coords: [47.8095, 13.0550] },
  { name: "Praga", country: "República Tcheca", type: "city", coords: [50.0755, 14.4378] },
  { name: "Luxemburgo", country: "Luxemburgo", type: "city", coords: [49.6116, 6.1319] },

  { name: "Amsterdam", country: "Países Baixos", type: "city", coords: [52.3676, 4.9041] },
  { name: "Rotterdam", country: "Países Baixos", type: "city", coords: [51.9244, 4.4777] },
  { name: "Haia", country: "Países Baixos", type: "city", coords: [52.0705, 4.3007] },
  { name: "Zaanse Schans", country: "Países Baixos", type: "city", coords: [52.4739, 4.8164] },
  { name: "Zaandam", country: "Países Baixos", type: "city", coords: [52.4420, 4.8292] },
  { name: "Breda", country: "Países Baixos", type: "city", coords: [51.5719, 4.7683] },

  { name: "Gent", country: "Bélgica", type: "city", coords: [51.0543, 3.7174] },
  { name: "Antwerpen", country: "Bélgica", type: "city", coords: [51.2194, 4.4025] },

  { name: "Cidade do México", country: "México", type: "city", coords: [19.4326, -99.1332] },
  { name: "Buenos Aires", country: "Argentina", type: "city", coords: [-34.6037, -58.3816] },
  { name: "Ushuaia", country: "Argentina", type: "city", coords: [-54.8019, -68.3030] },
  { name: "San José", country: "Costa Rica", type: "city", coords: [9.9281, -84.0907] },
  { name: "Cidade do Panamá", country: "Panamá", type: "city", coords: [8.9824, -79.5199] },
  { name: "Montevideo", country: "Uruguai", type: "city", coords: [-34.9011, -56.1645] },
  { name: "Guatemala City", country: "Guatemala", type: "city", coords: [14.6349, -90.5069] },

  { name: "Rio de Janeiro", country: "Brasil", type: "state", coords: [-22.9068, -43.1729] },
  { name: "Minas Gerais", country: "Brasil", type: "state", coords: [-18.5122, -44.5550] },
  { name: "São Paulo", country: "Brasil", type: "state", coords: [-23.5505, -46.6333] },
  { name: "Santa Catarina", country: "Brasil", type: "state", coords: [-27.2423, -50.2189] },
  { name: "Paraná", country: "Brasil", type: "state", coords: [-25.2521, -52.0215] }
];

let extraPlaces = JSON.parse(localStorage.getItem("jojoExtraPlaces") || "[]");
let hiddenPlaces = JSON.parse(localStorage.getItem("jojoHiddenPlaces") || "[]");

function placeKey(place) {
  return `${place.name}|${place.country}`;
}

function rebuildPlaces() {
  const visibleDefaultPlaces = defaultPlaces.filter(
    place => !hiddenPlaces.includes(placeKey(place))
  );

  places = [...visibleDefaultPlaces, ...extraPlaces];

  places = [
    ...new Map(
      places.map(place => [placeKey(place), place])
    ).values()
  ];
}

let places = [];
rebuildPlaces();

const map = L.map("map").setView([35, 5], 3);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap"
}).addTo(map);

let markers = [];
let visitedCountriesLayer = null;
let countriesVisible = false;

const visitedCountryNames = [
  "Germany",
  "France",
  "Italy",
  "Vatican City",
  "Holy See",
  "Switzerland",
  "Austria",
  "Czechia",
  "Czech Republic",
  "Luxembourg",
  "Netherlands",
  "Belgium",
  "Mexico",
  "Argentina",
  "Costa Rica",
  "Panama",
  "Uruguay",
  "Guatemala",
  "Brazil"
];

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

    marker.bindPopup(`
      <div class="popup-title">💖 ${place.name}</div>
      <p><strong>País:</strong> ${place.country}</p>
      <p><strong>Tipo:</strong> ${place.type === "state" ? "Estado BR" : "Cidade"}</p>

      <a class="maps-link"
         target="_blank"
         href="https://www.google.com/maps/search/${encodeURIComponent(place.name + ", " + place.country)}">
         Abrir no Google Maps
      </a>

      <button
        onclick="removePlace('${place.name.replace(/'/g, "\\'")}','${place.country.replace(/'/g, "\\'")}')"
        style="margin-top:8px;background:#ff5a8f">
        Remover
      </button>
    `);

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

    hiddenPlaces = hiddenPlaces.filter(key => key !== placeKey(newPlace));

    extraPlaces.push(newPlace);
    localStorage.setItem("jojoExtraPlaces", JSON.stringify(extraPlaces));
    localStorage.setItem("jojoHiddenPlaces", JSON.stringify(hiddenPlaces));

    rebuildPlaces();
    drawPlaces();

    document.getElementById("placeName").value = "";
    document.getElementById("placeCountry").value = "";

    map.setView(newPlace.coords, 9);

    alert(`${name} foi adicionado ao mapa 💖`);
  } catch (error) {
    alert("Erro ao buscar localização.");
    console.error(error);
  }
}

function removePlace(name, country) {
  const removedKey = `${name}|${country}`;

  extraPlaces = extraPlaces.filter(
    place => placeKey(place) !== removedKey
  );

  const isDefaultPlace = defaultPlaces.some(
    place => placeKey(place) === removedKey
  );

  if (isDefaultPlace && !hiddenPlaces.includes(removedKey)) {
    hiddenPlaces.push(removedKey);
  }

  localStorage.setItem("jojoExtraPlaces", JSON.stringify(extraPlaces));
  localStorage.setItem("jojoHiddenPlaces", JSON.stringify(hiddenPlaces));

  rebuildPlaces();
  drawPlaces();

  if (visitedCountriesLayer) {
    map.removeLayer(visitedCountriesLayer);
    visitedCountriesLayer = null;
    countriesVisible = false;
  }

  alert(`${name} removido`);
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

function showList(type) {
  const modal = document.getElementById("listModal");
  const title = document.getElementById("modalTitle");
  const list = document.getElementById("modalList");

  if (!modal || !title || !list) return;

  list.innerHTML = "";

  let items = [];

  if (type === "countries") {
    title.textContent = "Países visitados";
    items = [...new Set(places.map(place => place.country))].sort();
  }

  if (type === "cities") {
    title.textContent = "Cidades visitadas";
    items = places
      .filter(place => place.type === "city")
      .map(place => `${place.name} — ${place.country}`)
      .sort();
  }

  if (type === "states") {
    title.textContent = "Estados BR";
    items = places
      .filter(place => place.type === "state")
      .map(place => place.name)
      .sort();
  }

  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  modal.classList.remove("hidden");
}

function closeList() {
  document.getElementById("listModal").classList.add("hidden");
}

async function toggleVisitedCountries() {
  countriesVisible = !countriesVisible;

  if (!countriesVisible) {
    if (visitedCountriesLayer) {
      map.removeLayer(visitedCountriesLayer);
      visitedCountriesLayer = null;
    }
    return;
  }

  const geoJsonUrl =
    "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";

  try {
    const response = await fetch(geoJsonUrl);
    const geojson = await response.json();

    const activeCountries = new Set(places.map(place => place.country));

    const translatedCountries = new Set();

    const translation = {
      "Alemanha": ["Germany"],
      "França": ["France"],
      "Itália": ["Italy"],
      "Vaticano": ["Vatican City", "Holy See"],
      "Suíça": ["Switzerland"],
      "Áustria": ["Austria"],
      "República Tcheca": ["Czechia", "Czech Republic"],
      "Luxemburgo": ["Luxembourg"],
      "Países Baixos": ["Netherlands"],
      "Bélgica": ["Belgium"],
      "México": ["Mexico"],
      "Argentina": ["Argentina"],
      "Costa Rica": ["Costa Rica"],
      "Panamá": ["Panama"],
      "Uruguai": ["Uruguay"],
      "Guatemala": ["Guatemala"],
      "Brasil": ["Brazil"]
    };

    activeCountries.forEach(country => {
      (translation[country] || []).forEach(name => translatedCountries.add(name.toLowerCase()));
    });

    visitedCountriesLayer = L.geoJSON(geojson, {
      style: feature => {
        const props = feature.properties || {};

        const countryName = (
          props.ADMIN ||
          props.NAME ||
          props.name ||
          props.ADMIN_NAME ||
          ""
        ).toLowerCase();

        if (translatedCountries.has(countryName)) {
          return {
            color: "#ff1493",
            weight: 2,
            fillColor: "#ff69b4",
            fillOpacity: 0.45
          };
        }

        return {
          color: "transparent",
          weight: 0,
          fillColor: "transparent",
          fillOpacity: 0
        };
      },

      onEachFeature: (feature, layer) => {
        const props = feature.properties || {};
        const countryName =
          props.ADMIN ||
          props.NAME ||
          props.name ||
          props.ADMIN_NAME ||
          "";

        if (translatedCountries.has(countryName.toLowerCase())) {
          layer.bindPopup(`
            <div class="popup-title">💗 ${countryName}</div>
            <p>País visitado</p>
          `);
        }
      }
    }).addTo(map);

    visitedCountriesLayer.bringToFront();
  } catch (error) {
    alert("Não consegui carregar os países agora.");
    console.error(error);
  }
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
