var data = {
    mapMarkers: [],
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

        var type = function(place){
            var types = place.types;  // marker-specific info
            var typesStr = '';
            koViewModel.placeTypes().forEach(function(filterEl, index, array){
                types.forEach(function(placeEl, index, array){
                    if(filterEl === placeEl){typesStr = typesStr + placeEl.replace("_", " ")}
                })
            })
            return typesStr;
        };

        var marker = new google.maps.Marker({
            map: this.gMap,
            position: place.geometry.location,
            place_id: place.place_id,
            animation: google.maps.Animation.DROP,
            title: type(place) + " - " + place.name
        });


        google.maps.event.addListener(marker, 'click', function() {
            //TODO: add ajax content for each place
            var name = place.name;
            console.log(encodeURIComponent(name));
            var filterType = '<strong>' + name + '</strong>';
            var address = '<p>' + place.vicinity + '</p>';
            var content = '';
            var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' +
            encodeURIComponent(name) + '&format=json&callback=wikiCallback';
            $.ajax(wikiUrl, {
                //url: wikiUrl,
                dataType: 'jsonp',
                // jsonp: "callback",
                success: function( response ) {
                    var articleList = response[1];
                    for (var i = 0; i < 1; i++) {
                        articleStr = articleList[i];
                        if(articleStr){
                            var url = 'http://en.wikipedia.org/wiki/' + articleStr;
                            content = content + '<a href="' + url + '" target="_blank">' + articleStr + '</a><br>';
                            console.log(content);
                            mapView.infowindow.setContent(filterType + address + content);
                        }else{
                            mapView.infowindow.setContent(filterType + address + '<p>(wiki article unavailable)</p>');
                        }
                    }
                },
                error: function() {
                    mapView.infowindow.setContent(filterType + address + '<p>(wiki article unavailable)</p>');
                }
            });
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