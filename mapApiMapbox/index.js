mapboxgl.accessToken = 'pk.eyJ1IjoicGFycWluYSIsImEiOiJja3d6ZTlxM3IwaHJvMnBsNHNpbXo1cDVkIn0.tKYe5lhwXfiL9IhNoRnSAQ';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [76.96995, 52.24911], // starting position [lng, lat]
zoom: 15 // starting zoom
});

const marker1 = new mapboxgl.Marker() ///add geoMarcker
.setLngLat([76.96995, 52.24911])
.addTo(map);

map.addControl(new mapboxgl.FullscreenControl());