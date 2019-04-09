/* globals google */
/* eslint-disable no-new  */




const fetchWithJSONP = (uri) => {
	const script = document.createElement('script')
	script.src = uri;
	document.body.appendChild(script)
	document.body.removeChild(script)
}

fetchWithJSONP('https://maps.googleapis.com/maps/api/js?key=AIzaSyDvmbsNbSZIMfMw8lj2GEo0fJAlO8wfk0o&callback=initMap');




function initMap () {
  const mapDiv = document.querySelector('#map')
  new google.maps.Map(mapDiv, {
		center: { lat: -25.9483026, lng: 32.6020333 },
    zoom: 15
  })
}
