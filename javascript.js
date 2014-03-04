//---Current Location----
var mapProp={
    zoom:5,
    mapTypeId:'roadmap'
    
};


var map1=new google.maps.Map(
  document.getElementById("map1"),mapProp);
var markers = [];
if(navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map1,
        position: pos,
       
 });
    map1.setCenter(pos);
        
        
        var marker=new google.maps.Marker({
  position:pos,
  });

marker.setMap(map1);

    }, function() {
      handleNoGeolocation(true);
    });
  
  }



//---------Weather map--------------
$("div").animate({});

function initialize() {
    var mymap = {
        zoom: 5,
        center: new google.maps.LatLng(39.115145,-94.596405),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), mymap);
    var weather = new google.maps.weather.WeatherLayer({
        temperatureUnits: google.maps.weather.TemperatureUnit.DEGREE //Temperature unit can also be changed to FAHRENHEIT by using the keyword "FAHRENHEIT"
    });
    weather.setMap(map);
    var cloud = new google.maps.weather.CloudLayer();
    cloud.setMap(map); //Comment out this line if you do not wish to
}

    