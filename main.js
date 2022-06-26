
mapboxgl.accessToken = 'pk.eyJ1IjoiYWhtZWQtaGVzaGFtIiwiYSI6ImNreGx6a2lsNTE5Ym4ycW81MzBzMHluNzgifQ.QHCxdOHd1g1Jz6CEYClc0g';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});
map.addControl(new mapboxgl.FullscreenControl());
map.addControl(new mapboxgl.NavigationControl());
