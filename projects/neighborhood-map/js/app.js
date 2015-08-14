$(function() {

  var data = {
    map: {},
    mapMarkers: [],
    infowindow: {}
  };

  var viewModel = {
    //data
    mMarkers: ko.observableArray(data.mapMarkers),

    //behavior

    getMap: function(){
      return data.map;
    },

    initialize: function() {
      var powell = {lat: 40.1583, lng: -83.0742};

      data.map = new google.maps.Map(document.getElementById('map'), {
              center: powell,
              zoom: 16
            });
      //console.log(viewModel.getMap());

      data.infowindow = new google.maps.InfoWindow();
      console.log(data.infowindow);

      var service = new google.maps.places.PlacesService(viewModel.getMap());
      //console.log(service);
      //console.log(powell);
      service.nearbySearch({
        location: powell,
        radius: 1609.34,
        types: ["gas", "restaurant", "store"]
        }, viewModel.callback);
    },

    callback: function(results, status){
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          viewModel.createMarker(results[i]);
        }
      }
    },

    createMarker: function(place){
      var placeLoc = place.geometry.location;
      var marker = new google.maps.Marker({
        map: viewModel.getMap(),
        position: place.geometry.location
      });

      google.maps.event.addListener(marker, 'click', function() {
        data.infowindow.setContent(place.name);
        data.infowindow.open(viewModel.getMap(), this);
      });
    }
  } // end viewModel

  //function initMap() {}
  //function callback(results, status) {}
  //function createMarker(place) {}
  google.maps.event.addDomListener(window, 'load', viewModel.initialize);
  ko.applyBindings(viewModel);
}); // end $(function(){})