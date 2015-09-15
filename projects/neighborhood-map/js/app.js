var data = {
    mapMarkers: [],
    placeTypes: []
};

var mapView = {
    gMap: new google.maps.Map(document.getElementById('map'), {
        //TODO: accept user-defined center location
        //center: {lat: 40.1583, lng: -83.0742},
        center: {lat: -34.397, lng: 150.644},
        zoom: 13
        }),
    infowindow: new google.maps.InfoWindow({maxWidth: 300}),
    getUnique: function(inputArray) {
        //inputArray: all place-types of all places in search results
        //outputArray:  a unique array of place-type values
        var outputArray = [];
        for (var i = 0; i < inputArray.length; i++) {
            if (jQuery.inArray(inputArray[i], outputArray) == -1) {
                outputArray.push(inputArray[i]);
            }
        }
        return outputArray;
    },
    placeItemClicked: function() {
        //Open infowindow and center map based on marker click
        var name = '<strong>' + this.name + '</strong>';
        mapView.infowindow.setContent(name);
        mapView.gMap.setCenter(this.position);
        mapView.infowindow.open(mapView.gMap, this);
    },
    createMarker: function(place) {
        var placeLoc = place.geometry.location;

        //create marker
        var marker = new google.maps.Marker({
            map: this.gMap,
            position: placeLoc,
            placeId: place.place_id,
            animation: google.maps.Animation.DROP,
            name: place.name,
            types: place.types,
            title: place.name
        });
        //add marker to koViewModel.mapMarkers
        koViewModel.mapMarkers.push(marker);

        //add click listener to marker
        google.maps.event.addListener(marker, 'click', function() {
            var name = '<strong>' + place.name + '</strong>';
            var address = '<p>' + place.formatted_address.split(",")[0] + '</p>';
            var content = '';
            //Get wiki article based on place name
            var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' +
            encodeURIComponent(place.name) + '&format=json&callback=wikiCallback';
            $.ajax(wikiUrl, {
                dataType: 'jsonp',
                //Set content if successful
                success: function( response ) {
                    var articleList = response[1];
                    for (var i = 0; i < 1; i++) {
                        articleStr = articleList[i];
                        if (articleStr) {
                            var url = 'http://en.wikipedia.org/wiki/' + articleStr;
                            content = '<p><a href="' + url + '" target="_blank">' + articleStr +
                            '<span class="glyphicon glyphicon-new-window" aria-hidden="true"></span></a></p>';
                            mapView.infowindow.setContent(name + address + content);
                        } else {
                            mapView.infowindow.setContent(name + address + '<p>(wiki article unavailable)</p>');
                        }
                    }
                },
                //Set content if fail
                error: function() {
                    mapView.infowindow.setContent(name + address + '<p>(wiki article unavailable)</p>');
                }
            });
            mapView.infowindow.open(mapView.gMap, this);
            //Toggle marker animation and close infowindow on click
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
                mapView.infowindow.close();
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        });
        return marker;
    },
    initSearchPlaces: function() {

        var input = document.getElementById('search-input');
        var searchBox = new google.maps.places.SearchBox(input);
        //Reset map bounds if necessary
        mapView.gMap.addListener('bounds_changed', function() {
            searchBox.setBounds(mapView.gMap.getBounds());
        });

        //Try to setCenter based on user location
        if (navigator.geolocation) {
            console.log("here1");
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                console.log(pos);
                //mapView.infoWindow.setPosition(pos);
                //mapView.infoWindow.setContent('Location found.');
                //map.setCenter(pos);
            }, function() {
                console.log("error getting location");
                //handleLocationError(true, infoWindow, map.getCenter());
                //return powellOhio;
            });
        } else {
            // Browser doesn't support Geolocation
            //handleLocationError(false, infoWindow, map.getCenter());
            console.log("browswer doesn't support geolocation");
            //var userLoc = {lat: 40.1583, lng: -83.0742};
            //return powellOhio;
        }


        //Filter place-types from view-list and markers as they are unchecked
        $('input[type=checkbox]').change(function() {
            var type = this.value;
            var markers = koViewModel.mapMarkers();
            var placeItems = $('ul.places').children();
            if (!this.checked) {
                for (var i = 0; i < markers.length; i++) {
                    if (markers[i].types.indexOf(type) != -1) {
                        var idx = markers[i].types.indexOf(type);
                        var removed = markers[i].types.splice(idx, idx + 1);
                        if (markers[i].types.length == 0) {
                            markers[i].setMap(null);
                            var li = document.getElementById(markers[i].placeId);
                            li.style.display = "none";
                        }
                    }
                }
            }
        });
        //Process new search
        searchBox.addListener('places_changed', function() {
            var places = searchBox.getPlaces();
            if (places.length == 0) {
                return;
            }
            for (var i = 0; i < data.mapMarkers.length; i++) {
                data.mapMarkers[i].setMap(null);
            }
            for (var i = 0; i < koViewModel.mapMarkers().length; i++) {
                koViewModel.mapMarkers()[i].setMap(null);
            }
            koViewModel.mapMarkers([]);
            koViewModel.placeTypes([]);
            var bounds = new google.maps.LatLngBounds();
            //Add each place's place-types to the list
            places.forEach(function(place) {
                for (var i = 0; i < place.types.length; i++ ) {
                    koViewModel.placeTypes.push(place.types[i]);
                }
                //Add place marker to map and to mapMarkers()
                mapView.createMarker(place);
                //Set bounds to contain the new place
                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });
            //Make list of all place-types from all places unique
            koViewModel.placeTypes(mapView.getUnique(koViewModel.placeTypes()));
            //Set map bounds to contain all places (this code might be redundant)
            mapView.gMap.fitBounds(bounds);
            //Clear search box
            input.value = "";
        })
    }
};

var koViewModel = {
    mapMarkers: ko.observableArray(data.mapMarkers),
    placeTypes: ko.observableArray(data.placeTypes),
    searches: [mapView.initSearchPlaces()],
};

ko.applyBindings(koViewModel);