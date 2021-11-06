let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 44.9379, lng: 93.1691 },
    zoom: 8,
  });
}