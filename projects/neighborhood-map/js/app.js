var data = {
    mapMarkers: [{name: 'marker1'}, {name:'marker2'}, {name:'marker3'}],
    placeTypes: ['gas_station', 'pet_store']
};

var mapView = {
    gMap: new google.maps.Map(document.getElementById('map'), {
        //center: self.locationData()[0].latLng,
        center: {lat: 40.1583, lng: -83.0742},
        zoom: 15
        }),
    infowindow: new google.maps.InfoWindow(),

    createMarker: function(place){
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map: this.gMap,
            position: place.geometry.location,
            place_id: place.place_id,
            animation: google.maps.Animation.DROP
        });
        google.maps.event.addListener(marker, 'click', function() {
            mapView.infowindow.setContent(place.name);
            //TODO: setContent (other content for each place)
            mapView.infowindow.open(mapView.gMap, this);
            });
    },
    searchNearby: function(){
        var loc = {lat: 40.1583, lng: -83.0742};
        var service = new google.maps.places.PlacesService(mapView.gMap);
        var requestObj = {
            location: loc,
            radius: 2000,
            types: data.placeTypes
        };
        service.nearbySearch(requestObj,
            function(results, status){
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        mapView.createMarker(results[i]);
                        koViewModel.mapMarkers.push(results[i]);
                        console.log(results[i]);
                    }
                }
            }
        );
    },
};
var koViewModel = {
    mapMarkers: ko.observableArray(data.mapMarkers),
    placeTypes: ko.observableArray(data.placeTypes),
    mapView: mapView.searchNearby(),
    filterMarkers: function(){
        console.log('filtering');
        //set mapMarkers() based on types checked
    },
    getMarkerName: function(index){
        var markers = koViewModel.getMapMarkers();
        return markers.length;
    }
};

ko.applyBindings(koViewModel);