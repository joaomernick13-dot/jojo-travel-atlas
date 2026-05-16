const saved =
JSON.parse(
localStorage.getItem(
"jojoPlaces"
)
)||[];


let places=[

{
name:"Karlsruhe",
country:"Alemanha",
coords:[49.0069,8.4037]
},

{
name:"Mannheim",
country:"Alemanha",
coords:[49.4875,8.4660]
},

{
name:"Mainz",
country:"Alemanha",
coords:[49.9929,8.2473]
},

{
name:"Schwetzingen",
country:"Alemanha",
coords:[49.3844,8.5730]
},

{
name:"Baden Baden",
country:"Alemanha",
coords:[48.7606,8.2398]
},

{
name:"Kreuzlingen",
country:"Suíça",
coords:[47.6500,9.1830]
},

{
name:"Zaandam",
country:"Países Baixos",
coords:[52.4380,4.8260]
},

...saved

];


const map=L.map(
"map"
).setView(
[45,5],
3
);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

function icon(){

return L.divIcon({

html:
`<div class="heart-pin">💖</div>`,

className:""

})

}

function draw(){

document.getElementById(
"placesList"
).innerHTML="";

map.eachLayer(layer=>{

if(layer._latlng){

map.removeLayer(layer)

}

});

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);


places.forEach(p=>{

L.marker(
p.coords,
{
icon:icon()
}
)

.addTo(map)

.bindPopup(
`<b>${p.name}</b>
<br>
${p.country}`
);

document
.getElementById(
"placesList"
)

.innerHTML+=

`
<div
class='placeItem'
onclick="
map.setView(
[${p.coords}],
10
)
">

${p.name}
<br>
<small>
${p.country}
</small>

</div>
`

})

document
.getElementById(
"cityCount"
)
.innerText=
places.length;

document
.getElementById(
"countryCount"
)
.innerText=

new Set(
places.map(
p=>p.country
)
).size;

document
.getElementById(
"stateCount"
)
.innerText=5;

localStorage.setItem(
"jojoPlaces",
JSON.stringify(
places
)
);

}

draw();

function addPlace(){

alert(
"Próxima etapa: geocoding automático ✨"
)

}

function filterPlaces(){

let value=

document
.getElementById(
"search"
)

.value
.toLowerCase();


document
.querySelectorAll(
".placeItem"
)

.forEach(i=>{

i.style.display=

i.innerText
.toLowerCase()
.includes(value)

?

"block"

:

"none"

})

}

document
.getElementById(
"menuToggle"
)

.onclick=()=>{

document
.getElementById(
"panel"
)

.classList
.toggle(
"hidden"
)

}
