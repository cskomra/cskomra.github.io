$(function() {

  var data = {
    map: {},
    mapMarkers: [],
    infowindow: {},
    service: {}
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
              zoom: 17
            });

      data.infowindow = new google.maps.InfoWindow();
      console.log(data.infowindow);

      data.service = new google.maps.places.PlacesService(viewModel.getMap());
      //service.nearbySearch({
      data.service.radarSearch({
        location: powell,
        radius: 3200,
        types: ["gas_station", "restaurant", "store"],
        //rankBy: google.maps.places.RankBy.DISTANCE
        }, viewModel.callback);
    },

    callback: function(results, status){
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log("results length = " + results.length);
        for (var i = 0; i < results.length; i++) {
          viewModel.createMarker(results[i]);
          //viewModel.getMarkerDetails(results[i])
          //which then calls viewModel.createMarker()
        }
      }
    },

    getMarkerDetails: function(place){
      var request = {
        placeId: place.id
      };
      return data.service.getDetails(request, status);
    },

    detailsCallback: function(placeDetails, status){
      if(status == google.maps.places.PlacesServiceStatus.OK) {
        console.log(placeDetails);
      }
    },

    createMarker: function(place){
      var placeLoc = place.geometry.location;
      var marker = new google.maps.Marker({
        map: viewModel.getMap(),
        position: place.geometry.location
      });
      data.mapMarkers.push(marker);

      google.maps.event.addListener(marker, 'click', function() {
        data.infowindow.setContent(place.name);
        data.infowindow.open(viewModel.getMap(), this);
      });
    }
  } // end viewModel

  google.maps.event.addDomListener(window, 'load', viewModel.initialize);
  ko.applyBindings(viewModel);
}); // end $(function(){})