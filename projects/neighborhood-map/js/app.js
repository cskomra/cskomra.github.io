var data = {
    mapMarkers: [],
    placeTypes: ['gas_station', 'pet_store']
};

var mapView = {
    gMap: new google.maps.Map(document.getElementById('map'), {
        //center: self.locationData()[0].latLng,
        center: {lat: 40.1583, lng: -83.0742},
        zoom: 13
        }),
    infowindow: new google.maps.InfoWindow(),
    createMarker: function(place){
        var placeLoc = place.geometry.location;

        //return the place's selected filter types as string
        var type = function(place){
            var types = place.types;  // marker-specific types
            var typesStr = '';
            koViewModel.placeTypes().forEach(function(filterElement, index, array){
                types.forEach(function(placeElement, index, array){
                    if(filterElement === placeElement){typesStr = typesStr + placeElement.replace("_", " ")}
                })
            })
            return typesStr;
        };

        //create marker
        var marker = new google.maps.Marker({
            map: this.gMap,
            position: placeLoc,
            place_id: place.place_id,
            animation: google.maps.Animation.DROP,
            name: place.name,
            title: place.name + '\n' + type(place)  //UI - expose types
        });
        //add marker to koViewModel.mapMarkers
        koViewModel.mapMarkers.push(marker);

        //add click listener to marker
        google.maps.event.addListener(marker, 'click', function() {
            //TODO: clarify the wiki link for user
            var name = place.name;
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
        return marker;
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
                    };
                }
            }
        )
    },
    initSearchPlaces: function() {
        var input = document.getElementById('search-input');
        var searchBox = new google.maps.places.SearchBox(input);

        mapView.gMap.addListener('bounds_changed', function(){
            searchBox.setBounds(mapView.gMap.getBounds());
        });

        searchBox.addListener('places_changed', function() {
            var places = searchBox.getPlaces();

            if (places.length == 0) {
                return;
            };

            console.log('data.mapMarkers.length = ' + data.mapMarkers.length);
            for( var i = 0; i < data.mapMarkers.length; i++) {
                data.mapMarkers[i].setMap(null);
            };

            console.log('koViewModel.mapMarkers.length = ' + koViewModel.mapMarkers().length);
            for( var i = 0; i < koViewModel.mapMarkers().length; i++) {
                koViewModel.mapMarkers()[i].setMap(null);
            };

            koViewModel.mapMarkers([]);

            var bounds = new google.maps.LatLngBounds();
            places.forEach(function(place) {

                // TODO:  This icon not being used - Remove.
                var icon = {
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                };

                //This adds marker to map and to mapMarkers()
                mapView.createMarker(place);

                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });
            mapView.gMap.fitBounds(bounds);
            console.log('after fitBounds...');
            console.log('data.mapMarkers.length = ' + data.mapMarkers.length);
            console.log('koViewModel.mapMarkers.length = ' + koViewModel.mapMarkers().length);
            input.value = "";
        })
    }
};
var koViewModel = {
    mapMarkers: ko.observableArray(data.mapMarkers),
    placeTypes: ko.observableArray(data.placeTypes),
    searches: [mapView.searchNearby(), mapView.initSearchPlaces()],
    filterMarkers: function(){
        console.log('filtering');
        //set mapMarkers() based on types checked
    }
};

ko.applyBindings(koViewModel);