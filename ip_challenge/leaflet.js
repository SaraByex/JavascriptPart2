$(document).ready(function () {
  var map = L.map('map').setView([51.505, -0.09], 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const userIcon = L.icon({
    iconUrl: 'https://i.pravatar.cc/60',
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAnchor: [0, -20]
  });

  $("#Location").on("click", function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        map.setView([lat, lng], 13);

        // get IP address
        let ipAddress = "Unavailable";
        try {
          const ipRes = await fetch("https://api.ipify.org?format=json");
          const ipData = await ipRes.json();
          ipAddress = ipData.ip;
        } catch (err) {
          console.error("IP fetch error:", err);
        }

        // get location name
        let town = "Unknown";
        let state = "Unknown";
        let country = "Unknown";
        try {
          const locRes = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
          const locData = await locRes.json();
          const addr = locData.address;
          town = addr.city || "Unknown town";
          state = addr.state || "Unknown province";
          country = addr.country || "Unknown country";
        } catch (err) {
          console.error("Location fetch error:", err);
        }

        const gMapUrl = `https://www.google.com/maps?q=${lat},${lng}`;

        // Add marker with all info
        L.marker([lat, lng], { icon: userIcon }).addTo(map)
          .bindPopup(`
            <div>
              <b>Your Location:</b><br>
              ${town}<br>${state}<br>${country}<br><br>
              <b>Your IP:</b><br>${ipAddress}<br><br>
              <a href="${gMapUrl}" target="_blank">View on Google Maps</a>
            </div>
          `)
          .openPopup();
      }, function (error) {
        alert("Geolocation error: " + error.message);
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  });

  //Map click: Show clicked location name instead of raw coordinates
  const popup = L.popup();

  map.on("click", async function (e) {
  const lat = e.latlng.lat;
  const lng = e.latlng.lng;

  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`, {
      headers: {
        "Accept-Language": "en" // helps return readable place names
      }
    });

    if (!response.ok) throw new Error("Reverse geocoding failed");

    const data = await response.json();
    const place = data.display_name || "Unknown location";

    L.popup()
      .setLatLng(e.latlng)
      .setContent(`<b>You clicked near:</b><br>${place}`)
      .openOn(map);

  } catch (err) {
    console.error("Error getting place:", err);

    L.popup()
      .setLatLng(e.latlng)
      .setContent(`You clicked at:<br>Lat: ${lat}, Lng: ${lng}<br>Could not fetch place name.`)
      .openOn(map);
  }
});
   
});