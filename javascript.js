//Validates the User registration form on the first page
function validateForm() {
	var x= document.forms["register_form"]["email"].value;
	var y= document.forms["register_form"]["psw"].value;
	var z= document.forms["register_form"]["psw-repeat"].value;
	var rad= document.forms["register_form"]["terms"].value;

	//Makes sure email and password sections are not empty, might be overwritten by HTML5's validation
	if (x == "" || y == "") {
		alert("Please fill in all the fields");
		return false;
	}
	//Makes sure passwords match
	if (y != z) {
		alert("Password doesn't match!");
		return false;
	}
	//Makes sure user has agreed to terms and conditions (Fix this, not working right now)
	if (rad.checked == false){
		alert("You need to check the terms and conditions");
		return false;
	} 
	
}

    // Initialize and add the map
    function initMap() {
    // The location of coords
    var coords = {lat: 43.263338, lng: -79.918282}; 
    // The map, centered at coords
    var map = new google.maps.Map(
        document.getElementById('result_map'), {zoom: 15, center: coords});

    //Array of manually added parking spots with their coordinates
    var parkingSpots= [
    ['Lot C', 'Rating: 3.5/5', 43.265675, -79.915700],
    ['Lot G', 'Rating: 3/5', 43.266584, -79.918004],
    ['Lot A', 'Rating: 4/5', 43.262133, -79.917548],
    ]

    // Adding markers and infor windows to parking spots
    var infoWindow= new google.maps.InfoWindow();

    var marker, i;
    //Adding markers to the parking spots from the above array
    for (i = 0; i < parkingSpots.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(parkingSpots[i][2], parkingSpots[i][3]),
        map: map
      });

      //Pops up the info Window about the parking spot if the marker is clicked
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infoWindow.setContent('<a href="parking.html">' + parkingSpots[i][0] + '</a>' + '<br>' + parkingSpots[i][1]);
          infoWindow.open(map, marker);
        }
      })(marker, i));
    }

}

