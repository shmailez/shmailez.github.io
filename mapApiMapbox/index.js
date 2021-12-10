mapboxgl.accessToken = 'pk.eyJ1IjoicGFycWluYSIsImEiOiJja3d6ZTlxM3IwaHJvMnBsNHNpbXo1cDVkIn0.tKYe5lhwXfiL9IhNoRnSAQ';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [76.9673, 52.2505], // starting position [lng, lat]
zoom: 15 // starting zoom
});

const marker1 = new mapboxgl.Marker() ///add geoMarcker
.setLngLat([76.96995, 52.24911])
.addTo(map);

const marker2 = new mapboxgl.Marker() ///add geoMarcker
.setLngLat([76.9645, 52.2538])
.addTo(map);


map.addControl(new mapboxgl.FullscreenControl());


map.on('load', () => {
map.addSource('route', {
'type': 'geojson',
'data': {
'type': 'Feature',
'properties': {},
'geometry': {
'type': 'LineString',
'coordinates': [

[76.96995, 52.24911],
[76.9693, 52.24962],
[76.9689, 52.24945],
[76.9681, 52.25],
[76.9673, 52.2505],
[76.9662, 52.2513],
[76.9659, 52.2535],
[76.9645, 52.2535],
[76.9645, 52.2538],
]
}
}
});
map.addLayer({
'id': 'route',
'type': 'line',
'source': 'route',
'layout': {
'line-join': 'round',
'line-cap': 'round'
},
'paint': {
'line-color': '#888',
'line-width': 8
}
});
});