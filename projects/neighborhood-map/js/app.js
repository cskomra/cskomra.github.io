$(function() {

  var map = {};

  var data = {
    mapMarkers: [],
    infowindow: {},
    service: {}
  };

  var views = {
    //===== VIEW PROPERTIES =====
    map: document.getElementById('map'),

    //===== VIEW OBJECTS =====
    mapView: {
      //init
      initialize: function() {

        var powell = {lat: 40.1583, lng: -83.0742};

        map = new google.maps.Map(views.map, {
                center: powell,
                zoom: 17
              });

        data.infowindow = new google.maps.InfoWindow();

        data.service = new google.maps.places.PlacesService(map);
        //service.nearbySearch({
        data.service.radarSearch({
          location: powell,
          radius: 3200,
          types: ["gas_station", "restaurant", "store"],
          //rankBy: google.maps.places.RankBy.DISTANCE
          }, viewModel.callback);

          //render
      }
    },
    placesListView: {
      //===== VIEW PROPERTIES =====
      HTMLplacesListStart: '<h2 id="places-heading">Places</h2><ul id="placesList" class="flex-box"></ul>',
      HTMLplace: '<li class="flex-item"><span class="white-text">%place-name%</span></li>',

      //===== VIEW OBJECTS =====
      initialize: function(){
        $('#places').append(this.HTMLplacesListStart);
        this.render();
      },

      render: function(){
        console.log(data.mapMarkers);
        for (var i = 0; i < data.mapMarkers.length; i++) {
          var name = marker.name;
          var formattedPlace = this.HTMLplace.replace("%place-name%", name);
          placesList.append(formattedPlace);
        }


      }

    }
  };

  var viewModel = {

    //data
    mMarkers: ko.observableArray(data.mapMarkers),

    //behavior
    initialize: function(){
      //google.maps.event.addDomListener(window, 'load', views.mapView.initialize);
      views.mapView.initialize();
      views.placesListView.initialize();
      ko.applyBindings(viewModel);
    },

    getMap: function(){
      return map;
    },

/*
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
    */

    callback: function(results, status){
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log("results length = " + results.length);
        for (var i = 0; i < results.length; i++) {
          viewModel.createMarker(results[i]);
          //viewModel.getMarkerDetails(results[i])
          //which then calls viewModel.createMarker()
        }
        //GOT THESE
        //console.log("after pushing mapMarkers");
        //console.log(data.mapMarkers);
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
      console.log(data.mapMarkers);

      google.maps.event.addListener(marker, 'click', function() {
        data.infowindow.setContent(place.name);
        data.infowindow.open(viewModel.getMap(), this);
      });
    }
  } // end viewModel
  viewModel.initialize();
}); // end $(function(){})