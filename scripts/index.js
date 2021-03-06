function initMap() {

  // center the map
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 32.937945, lng: -117.142418 },
    zoom: 9,
    mapTypeId: 'roadmap',
    zoomControl: false,
    scaleControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true
  });

  // choose map marker icon
  var icon = {
    url: "https://static3.soapyjoescarwash.com/wp-content/uploads/2016/12/sj_locations_locatepointer2.png",
    scaledSize: new google.maps.Size(50, 50),
  };

  var currWindow = false;

  // create event listener and message after click markers
  function attachSecretMessage(marker, secretMessage) {
    var infowindow = new google.maps.InfoWindow({
      content: secretMessage
    });
    // listen for click event
    marker.addListener('click', function () {
      infowindow.open(marker.get('map'), marker);
    });

    google.maps.event.addListener(marker, 'click', function () {
      if (currWindow) {
        currWindow.close();
      }

      currWindow = infowindow;
      infowindow.open(map, marker);
    });

  }

  // create array of messages of addresses for each marker
  var secretMessages = ['<div id="soapyMarker"><h3 id="soapyTitle">Oceanside </h3><p id="soapyAddress">1980 Oceanside Blvd</p><p id="soapyCity">Oceanside, CA 92054</p><a target="_parent" id="soapyLink" href="https://dev.soapyjoescarwash.com/locations/oceanside/">Go to this location</a><span id="soapyArrow"> &#9654;</span></div>', '<div id="soapyMarker"><h3 id="soapyTitle">San Marcos </h3><p id="soapyAddress">740 W San Marcos Blvd</p><p id="soapyCity">San Marcos, CA 92078</p><a target="_parent" id="soapyLink" href="https://dev.soapyjoescarwash.com/locations/san-marcos/">Go to this location</a><span id="soapyArrow"> &#9654;</span></div>', '<div id="soapyMarker"><h3 id="soapyTitle">Escondido </h3><p id="soapyAddress">1300 E Valley Pkwy</p><p id="soapyCity">Escondido, CA 92027</p><a target="_parent" id="soapyLink" href="https://dev.soapyjoescarwash.com/locations/escondido/">Go to this location</a><span id="soapyArrow"> &#9654;</span></div>', '<div id="soapyMarker"><h3 id="soapyTitle">Rancho Bernardo </h3><p id="soapyAddress">16998 W Bernardo Dr</p><p id="soapyCity">San Diego, CA 92127</p><a target="_parent" id="soapyLink" href="https://dev.soapyjoescarwash.com/locations/rancho-bernardo/">Go to this location</a><span id="soapyArrow"> &#9654;</span></div>', '<div id="soapyMarker"><h3 id="soapyTitle">Mira Mesa </h3><p id="soapyAddress">6609 Mira Mesa Blvd</p><p id="soapyCity">San Diego, CA 92121</p><a target="_parent" id="soapyLink" href="https://dev.soapyjoescarwash.com/locations/sorrento-valley-mira-mesa/">Go to this location</a><span id="soapyArrow"> &#9654;</span></div>', '<div id="soapyMarker"><h3 id="soapyTitle">La Mesa </h3><p id="soapyAddress">5322 Jackson Dr</p><p id="soapyCity">La Mesa, CA 91942</p><a target="_parent" id="soapyLink" href="https://dev.soapyjoescarwash.com/locations/la-mesa/">Go to this location</a><span id="soapyArrow"> &#9654;</span></div>', '<div id="soapyMarker"><h3 id="soapyTitle">Rancho San Diego </h3><p id="soapyAddress">2658 Jamacha Rd</p><p id="soapyCity">El Cajon, CA 92019</p><a target="_parent" id="soapyLink" href="https://dev.soapyjoescarwash.com/locations/rancho-san-diego/">Go to this location</a><span id="soapyArrow"> &#9654;</span></div>', '<div id="soapyMarker"><h3 id="soapyTitle">National City </h3><p id="soapyAddress">1999 Sweetwater Rd</p><p id="soapyCity">National City, CA 91950</p><a target="_parent" id="soapyLink" href="https://dev.soapyjoescarwash.com/locations/national-city/">Go to this location</a><span id="soapyArrow"> &#9654;</span></div>', '<div id="soapyMarker"><h3 id="soapyTitle">Imperial Beach </h3><p id="soapyAddress">1350 Palm Ave</p><p id="soapyCity">San Diego, CA 92154</p><a target="_parent" id="soapyLink" href="https://dev.soapyjoescarwash.com/locations/imperial-beach/">Go to this location</a><span id="soapyArrow"> &#9654;</span></div>', '<div id="soapyMarker"><h3 id="soapyTitle">San Ysidro </h3><p id="soapyAddress">225 W San Ysidro Blvd</p><p id="soapyCity">San Ysidro, CA 92173</p><a target="_parent" id="soapyLink" href="https://dev.soapyjoescarwash.com/locations/san-ysidro/">Go to this location</a><span id="soapyArrow"> &#9654;</span></div>'];

  // create markers for each property listing
  var oceanside = new google.maps.Marker({
    position: new google.maps.LatLng(33.195298, -117.354121),
    map: map,
    icon: icon
  });
  attachSecretMessage(oceanside, secretMessages[0]);

  var sanMarcos = new google.maps.Marker({
    position: new google.maps.LatLng(33.137300, -117.180470),
    map: map,
    icon: icon
  });
  attachSecretMessage(sanMarcos, secretMessages[1]);

  var escondido = new google.maps.Marker({
    position: new google.maps.LatLng(33.131524, -117.065472),
    map: map,
    icon: icon
  });
  attachSecretMessage(escondido, secretMessages[2]);

  var ranchoBernardo = new google.maps.Marker({
    position: new google.maps.LatLng(33.023493, -117.082701),
    map: map,
    icon: icon
  });
  attachSecretMessage(ranchoBernardo, secretMessages[3]);

  var miraMesa = new google.maps.Marker({
    position: new google.maps.LatLng(32.906482, -117.175399),
    map: map,
    icon: icon
  });
  attachSecretMessage(miraMesa, secretMessages[4]);

  var laMesa = new google.maps.Marker({
    position: new google.maps.LatLng(32.776054, -117.015475),
    map: map,
    icon: icon
  });
  attachSecretMessage(laMesa, secretMessages[5]);

  var ranchoSanDiego = new google.maps.Marker({
    position: new google.maps.LatLng(32.744343, -116.934631),
    map: map,
    icon: icon
  });
  attachSecretMessage(ranchoSanDiego, secretMessages[6]);

  var nationalCity = new google.maps.Marker({
    position: new google.maps.LatLng(32.661759, -117.079394),
    map: map,
    icon: icon
  });
  attachSecretMessage(nationalCity, secretMessages[7]);

  var imperialBeach = new google.maps.Marker({
    position: new google.maps.LatLng(32.584443, -117.104637),
    map: map,
    icon: icon
  });
  attachSecretMessage(imperialBeach, secretMessages[8]);

  var sanYsidro = new google.maps.Marker({
    position: new google.maps.LatLng(32.554527, -117.048913),
    map: map,
    icon: icon
  });
  attachSecretMessage(sanYsidro, secretMessages[9]);

  google.maps.event.addDomListener(window, "resize", function () {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });
}