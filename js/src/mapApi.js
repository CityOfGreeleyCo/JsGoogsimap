
/* main function to load google map */
function initialize() {

    // center map to lat/long on load
    var myLatlng = new google.maps.LatLng(39.0473, -105.4654);

    // set map options
    var mapOptions = {

           zoom: 7,
           center: myLatlng,
           mapTypeId: google.maps.MapTypeId.ROADMAP

    }

    // get connect div to google map
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    // create global info window
    var infoWindow = new google.maps.InfoWindow();

    // add locations array
    var locations =  [
    
        // add your locations here manually or from database (content of infowindow, lat, long)
        ['Charities Helped<br/>
        <ul><li>Pikes Peak Childrens Museum</li>
        <li>First Congregational Preschool</li>
        <li>Mile High Weimerainer Rescue</li>
        <li>SOAR! Youth &amp; Adult Choir</li>
        <li>Mountain View Young Marines</li>
        <li>High Plains Chautauqua</li>
        <li>Greeley Imagination Station</li>
        <li>Global Refugee Center</li></ul>', -104.694836, 40.42699],
        ['<strong>DeVry</strong><br/><br/>Charities Helped<br/>', -104.809415, 38.94609],
        ['Charities Helped<br/>
        <ul><li>A+ Schools</li>
        <li>Pueblo Young Marines</li>
        <li>Mesa County Partners</li>
        <li>New Foundations</li>
        <li>Get Smart Schools</li>', -105.275918, 40.018162],
        ['<strong>DeVry</strong><br/><br/>Charities Helped<br/>',-104.89326, 39.602135]

    ];

    // declare and cache marker and i
    var marker, i;

    // create markers
    for (i = 0; i < locations.length; i++) {

        // set title and content
        var title = locations[i][0],
          content = title;

        // create markers
        marker = new google.maps.Marker({
            
            position: new google.maps.LatLng(locations[i][2], locations[i][1]),
            title: title,
            map: map,
            icon: 'myicon.png'
        
        });

        // create info window for each marker passing title/content
        setInfoWindow(map, marker, title, content);
  
    }

    //set info window
    function setInfoWindow(map, marker, title, content) {
        
        //add listener for marker click to show info window
        google.maps.event.addListener(marker, 'click', function () {

            infoWindow.setContent(content);
            infoWindow.open(map, marker);
  
        });

    }

}

// run initialize on load
google.maps.event.addDomListener(window, 'load', initialize);

