mapboxgl.accessToken = 'pk.eyJ1IjoicGFycWluYSIsImEiOiJja3d6ZTlxM3IwaHJvMnBsNHNpbXo1cDVkIn0.tKYe5lhwXfiL9IhNoRnSAQ';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [76.9673, 52.2515], // starting position [lng, lat] [76.96982, 52.24913], ////default [76.9673, 52.2515]
zoom: 15 // starting zoom
});

const marker1 = new mapboxgl.Marker() ///add geoMarcker
.setLngLat([76.97005, 52.24925])
.addTo(map);

const marker2 = new mapboxgl.Marker({color: 'red'}) ///add geoMarcker
.setLngLat([76.96465, 52.25382])
.addTo(map);


map.addControl(new mapboxgl.FullscreenControl());

///add way point-to-point
map.on('load', () => {
    map.addSource('route', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': [
                    [76.97005, 52.24925],
                    [76.96993, 52.24925],
                    [76.96982, 52.24919],
                    [76.96923, 52.24960],
                    [76.96897, 52.24946],
                    [76.9681, 52.25],
                    [76.9673, 52.2505],
                    [76.96628, 52.25125],
                    [76.96615, 52.2515],
                    [76.9660, 52.2527],
                    [76.9657, 52.2528],
                    [76.9657, 52.2535],
                    [76.9645, 52.2535],
                    [76.9645, 52.2538],
                    [76.96465, 52.25382],
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