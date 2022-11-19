function initMap() {
  const mapStyles =[
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];
  const voodooPoint = new google.maps.LatLng(43.4527206, -80.5147819);
  const map = new google.maps.Map(document.getElementById("map"), {
    disableDefaultUI: true,
    center: voodooPoint,
    zoom: 15,
    styles: mapStyles,
    scaleControl: true,
  });

  const marker = new google.maps.Marker({
    position: voodooPoint,
    map: map,
    icon: '/img/marker.svg',
  });

  const coordInfoWindow = new google.maps.InfoWindow();

  coordInfoWindow.setContent(createInfoWindowContent(voodooPoint, map.getZoom()));
  coordInfoWindow.open({
    anchor: marker,
    map,
  });


  marker.addListener("click", () => {
    coordInfoWindow.open({
      anchor: marker,
      map,
    });
  });
}

function createInfoWindowContent() {
  return [
    "<b>VooDoo</b>",
    "137 Glasgow St., Unit 115",
    "Kitchener, ON N2G 4X8",
    "Ukraine",
    "1-800-480-9597",
    "info@voodoo.com",
  ].join("<br>");
}

window.initMap = initMap;

