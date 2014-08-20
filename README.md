GoogleMapSimple
===============

Basic Google Map Functionality

This abstracts away some of the harder javascript in regards to Google Maps and provides a basic setup of using markers and lat/longs for a location.

Usage:

Include css/main.css in your page as well as include the myicon.png for the pins in the root of your application:
```html
<link rel="stylesheet" href="css/main.css"/>
```

Add Google Map API and build.min.js:
```html
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
<script type="text/javascript" src="js/dist/build.min.js"></script>
```
Add div for map to appear where you want:
```html
<div id="map-canvas"/>
```
Add your configuration (changing where applicable):
```html
<script>
// center map on the following lat/long
var centerLong = -104.716667;
var centerLat = 40.416667;

// add locations
var locations =  [

// add your locations here manually or from database/ajax call
// [ 'NAME OF PIN', Longitude, Latitude ]
['City Hall',  -104.695324, 40.422195],
['Greeley FunPlex', -104.787211, 40.428002 ]

];

// initialize map
google.maps.event.addDomListener(window, 'load', initialize(centerLong, centerLat , locations));

</script>
```
You now should have a working map with pins.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
