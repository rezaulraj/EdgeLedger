// Initialize and add the map
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 23.8103, lng: 90.4125 },
    zoom: 8,
  });
}

window.initMap = initMap;

// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});


// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});