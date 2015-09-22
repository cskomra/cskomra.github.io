var data = {
    mapMarkers: [],
    placeTypes: [
        {
            name: "All",
            value: "all"
        },
        {
            name: "Accounting",
            value: "accounting"
        },
        {
            name: "Airport",
            value: "airport"
        },
        {
            name: "Amusement Park",
            value: "amusement_park"
        },
        {
            name: "Aquarium",
            value: "aquarium"
        },
        {
            name: "Art Gallery",
            value: "art_gallery"
        },
        {
            name: "Restaurant",
            value: "restaurant"
        },
        {
            name: "Lodging",
            value: "lodging"
        },
        {
            name: "Food",
            value: "food"
        },
        {
            name: "Point of Interest",
            value: "point_of_interest"
        },
        {
            name: "Cafe",
            value: "cafe"
        }
    ],
    selectedType: "all",
    selectedMarker: {},
};

var mapView = {
    gMap: new google.maps.Map(document.getElementById('map'), {
        //TODO: accept user-defined center location
        center: {lat: 40.1583, lng: -83.0742},  //Powell, OH
        //center: {lat: 37.441883, lng: -122.143019},  //Palo Alto, CA
        zoom: 13
        }),
    infowindow: new google.maps.InfoWindow({maxWidth: 300}),
    getDeviceLocation: function() {
        //Try setCenter based on user location
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log(position);
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                mapView.infowindow.setPosition(pos);
                mapView.infowindow.setContent('You are somewhere near here.');
                mapView.gMap.setCenter(pos);
                var marker = new google.maps.Marker({
                    position: pos,
                    map: mapView.gMap,
                    title: 'YAH Marker'
                  });
                koViewModel.mapMarkers.push(marker);
                mapView.infowindow.open(mapView.gMap, marker);
            }, function() {
                //Geolocation service failed
                handleLocationError(true);
            });
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false);
        };
        //Current Position error handler
        function handleLocationError(browserHasGeolocation) {
            infowindow = mapView.infowindow;
            infowindow.setPosition(mapView.gMap.getCenter());
            var content = browserHasGeolocation ?
                "<p><h5>Error</h5></p><p>The Geolocation service has failed.</p>" :
                "<p><h5>Error</h5></p><p>Your browser doesn't support geolocation.</p>";
            infowindow.setContent(content + "<p>Therefore, your search is based on Powell, OH</p>");
            mapView.infowindow.open(mapView.gMap);
        }
    },
    openInfowindow: function(place) {
        var place = place;
        var lat = place.position.H;
        var lng = place.position.L;
        var name = '<strong>' + place.name + '</strong>';
        var address = '<p>' + place.vicinity + '</p>';
        var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' +
        encodeURIComponent(place.name) + '&format=json&callback=wikiCallback';
        var fourSquareUrl = 'https://api.foursquare.com/v2/venues/search' +
            '?client_id=' + 'QGG4VTYXOEQWJG1X0SXDFPS11ZU1FUOFKC25BSZWVNXNNDKK' +
            '&client_secret=' + 'A0JCZY23XGOIFZNLTAVF0L2CTWOH1DOUBDGKRTRCCRDKDTXG' +
            '&v=' + '20130815' +
            '&ll=' + lat + "," + lng +
            '&query=' + place.name;
        var content = "";
        $.ajax(wikiUrl, {
            dataType: 'jsonp',
            //Set content if successful
            success: function( response ) {
                var articleList = response[1];
                for (var i = 0; i < 1; i++) {
                    var articleStr = articleList[i];
                    if (articleStr) {
                        var url = 'http://en.wikipedia.org/wiki/' + articleStr;
                        contentLink = '<p>Wiki: <a href="' + url + '" target="_blank">' + articleStr +
                        '<span class="glyphicon glyphicon-new-window" aria-hidden="true"></span></a></p>';
                        mapView.infowindow.setContent(name + address + contentLink);
                    } else {

                        //Could not get wiki article.  Try foursquare information.
                        $.ajax(fourSquareUrl, {
                            dataType: 'jsonp',
                            //Set content if successful
                            success: function( response ) {
                                var venues = response.response.venues;
                                if (venues) {
                                    var ven = venues[0];
                                    if (ven) {
                                        var venueURL = ven.url;
                                        contentLink = '<p>Foursquare: <a href="' + venueURL + '" target="_blank">' + venueURL +
                                        '<span class="glyphicon glyphicon-new-window" aria-hidden="true"></span></a></p>';
                                        mapView.infowindow.setContent(name + address + contentLink);
                                    }
                                }
                            },
                            //Set content if fail
                            error: function() {
                                mapView.infowindow.setContent(name + address + '<p>(Foursquare info unavailable)</p>');
                            }
                        });
                    }
                }
            },
            //Set content if fail
            error: function() {
                mapView.infowindow.setContent(name + address + '<p>(wiki article unavailable)</p>');
            }
        });
        mapView.infowindow.open(mapView.gMap, place);
        //Animate marker for 2 secs
        place.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout( function(){place.setAnimation(null)}, 2000);
    },
    clearMapMarkers: function() {
        markers = koViewModel.mapMarkers();
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        koViewModel.mapMarkers([]);
    },
    createMarker: function(place) {
        //TODO:  Add icons for different place-types
        var placeLoc = place.geometry.location;

        //create marker
        var marker = new google.maps.Marker({
            map: this.gMap,
            position: placeLoc,
            placeId: place.place_id,
            animation: google.maps.Animation.DROP,
            name: place.name,
            vicinity: place.vicinity,
            types: place.types,
            title: place.name
        });
        //setMap according to selectedType
        var selectedType = koViewModel.selectedType();
        if (selectedType != "all" && marker.types.indexOf(selectedType) == -1 ) {
            marker.setMap(null)
        }

        //add marker to koViewModel.mapMarkers
        koViewModel.mapMarkers.push(marker);

        //add click listener to marker
        google.maps.event.addListener(marker, 'click', function() {
            mapView.openInfowindow(marker);
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
        //mapView.getDeviceLocation();

        //Filter place-types from view-list and markers as they are unchecked
        $("select[name='select-place']").change(function() {
            var markerID = this.value;
            var markers = koViewModel.mapMarkers();
            for (var i = 0; i < markers.length; i++) {
                if (markers[i].placeId === markerID) {
                    mapView.openInfowindow(markers[i]);
                }
            }
        });
        //setMap on markers according to selected type
        $("select[name='select-type']").change(function() {
            var selectedType = this.value;
            var markers = koViewModel.mapMarkers();
            for (var i = 0; i < markers.length; i++) {
                if(selectedType == "all") {
                    markers[i].setMap(mapView.gMap)
                }else if(markers[i].types.indexOf(selectedType) == -1 ) {
                    markers[i].setMap(null)
                }else{
                    markers[i].setMap(mapView.gMap)
                }
            }
        });
        //Process new search
        searchBox.addListener('places_changed', function() {
            var places = searchBox.getPlaces();
            if (places.length == 0) {
                //TODO:  handle this case better
                return;
            }else{
                //clear existing markers
                mapView.clearMapMarkers();
                //set map bounds
                var bounds = new google.maps.LatLngBounds();
                for (var i = 0; i < places.length; i++) {
                    mapView.createMarker(places[i]);
                    //Set bounds to contain the new place
                    if (places[i].geometry.viewport) {
                        // Only geocodes have viewport.
                        bounds.union(places[i].geometry.viewport);
                    } else {
                        bounds.extend(places[i].geometry.location);
                    }
                }
                //Set map bounds to contain all places (this code might be redundant)
                mapView.gMap.fitBounds(bounds);
            }
            //Clear search box
            input.value = "";
        })
    },
    initNearbyMarkers: function() {
        //get user's location
        mapView.getDeviceLocation();
        var latLng = mapView.gMap.getCenter();

        var loc = {
            lat: latLng.lat(),
            lng: latLng.lng()
        };

        var request = {
            location: loc,
            radius: '5000',
            types: ['restaurant', 'lodging', 'cafe']
        };

        service = new google.maps.places.PlacesService(mapView.gMap);
        service.nearbySearch(request, function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                console.log("status OK");
                var bounds = new google.maps.LatLngBounds();
                for (var i = 0; i < results.length; i++) {
                    var place = results[i];
                    mapView.createMarker(place);
                    //Set bounds to contain the new place
                    if (place.geometry.viewport) {
                        // Only geocodes have viewport.
                        bounds.union(place.geometry.viewport);
                    } else {
                        bounds.extend(place.geometry.location);
                    }
                }
                //Set map bounds to contain all places (this code might be redundant)
                mapView.gMap.fitBounds(bounds);
            }else{
                console.log("status NOT OK");
            }
        });
    },
};

var koViewModel = {
    visibility: function(markerTypes){
        var isVisible = true;
        var selectedType = this.selectedType();
        if(selectedType != "all" && markerTypes.indexOf(selectedType) == -1) {
            isVisible = false;
        }
        return isVisible;
    },
    mapMarkers: ko.observableArray(data.mapMarkers),
    placeTypes: ko.observableArray(data.placeTypes),
    options: ko.observable("filter"),
    selectedType: ko.observable(data.selectedType),
    selectedMarker: ko.observable(data.selectedMarker),
    initializers: [
        mapView.initSearchPlaces(),
        mapView.initNearbyMarkers()
        ]
};

ko.applyBindings(koViewModel);