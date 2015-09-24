var data = {
    searchLoc: {
        placeName: "Powell, OH",
        placeLoc: {lat: 40.1583, lng: -83.0742}
    },
    mapMarkers: [],
    placeTypes: [
        {
            name: "Accounting",
            value: "accounting",
            style: "background:#d8d8d8;"
        },
        {
            name: "Airport",
            value: "airport",
            style: "background:#d8d8d8;"
        },
        {
            name: "Amusement Park",
            value: "amusement_park",
            style: "background:#d8d8d8;"
        },
        {
            name: "Aquarium",
            value: "aquarium",
            style: "background:#d8d8d8;"
        },
        {
            name: "Art Gallery",
            value: "art_gallery",
            style: "background:#d8d8d8;"
        },
        {
            name: "ATM",
            value: "atm",
            style: "background:#d8d8d8;"
        },
        {
            name: "Bakery",
            value: "bakery",
            style: "background:#d8d8d8;"
        },
        {
            name: "Bank",
            value: "bank",
            style: "background:#d8d8d8;"
        },
        {
            name: "Bar",
            value: "bar",
            style: "background:#ffe6e6;"
        },
        {
            name: "Beauty Salon",
            value: "beauty_salon",
            style: "background:#d8d8d8;"
        },
        {
            name: "Bicycle Store",
            value: "bicycle_store",
            style: "background:#d8d8d8;"
        },
        {
            name: "Book Store",
            value: "book_store",
            style: "background:#d8d8d8;"
        },
        {
            name: "Bowling Alley",
            value: "bowling_alley",
            style: "background:#d8d8d8;"
        },
        {
            name: "Bus Station",
            value: "bus_station",
            style: "background:#d8d8d8;"
        },
        {
            name: "Cafe",
            value: "cafe",
            style: "background:#d8d8d8;"
        },
        {
            name: "Campground",
            value: "campground",
            style: "background:#d8d8d8;"
        },
        {
            name: "Car Dealer",
            value: "car_dealer",
            style: "background:#d8d8d8;"
        },
        {
            name: "Car Rental",
            value: "car_rental",
            style: "background:#d8d8d8;"
        },
        {
            name: "Car Repair",
            value: "car_repair",
            style: "background:#d8d8d8;"
        },
        {
            name: "Car Wash",
            value: "car_wash",
            style: "background:#d8d8d8;"
        },
        {
            name: "Casino",
            value: "casino",
            style: "background:#d8d8d8;"
        },
        {
            name: "Cemetery",
            value: "cemetery",
            style: "background:#d8d8d8;"
        },
        {
            name: "Church",
            value: "church",
            style: "background:#d8d8d8;"
        },
        {
            name: "City Hall",
            value: "city_hall",
            style: "background:#d8d8d8;"
        },
        {
            name: "Clothing Store",
            value: "clothing_store",
            style: "background:#d8d8d8;"
        },
        {
            name: "Convenience Store",
            value: "convenience_store",
            style: "background:#d8d8d8;"
        },
        {
            name: "Courthouse",
            value: "courthouse",
            style: "background:#d8d8d8;"
        },
        {
            name: "Dentist",
            value: "dentist",
            style: "background:#d8d8d8;"
        },
        {
            name: "Department Store",
            value: "department_store",
            style: "background:#d8d8d8;"
        },
        {
            name: "Doctor",
            value: "doctor",
            style: "background:#d8d8d8;"
        },
        {
            name: "Electrician",
            value: "electrician",
            style: "background:#d8d8d8;"
        },
        {
            name: "Electronics Store",
            value: "electronics_store",
            style: "background:#d8d8d8;"
        },
        {
            name: "Embassy",
            value: "embassy",
            style: "background:#d8d8d8;"
        },
        {
            name: "Establishment",
            value: "establishment",
            style: "background:#d8d8d8;"
        },
        {
            name: "Finance",
            value: "finance",
            style: "background:#d8d8d8;"
        },
        {
            name: "Fire Station",
            value: "fire_station",
            style: "background:#d8d8d8;"
        },
        {
            name: "Florist",
            value: "florist",
            style: "background:#d8d8d8;"
        },
        {
            name: "Food",
            value: "food",
            style: "background:#ffe6e6;"
        },
        {
            name: "Funeral Home",
            value: "funeral_home",
            style: "background:#d8d8d8;"
        },
        {
            name: "Furniture Store",
            value: "furniture_store",
            style: "background:#d8d8d8;"
        },
        {
            name: "Gas Station",
            value: "gas_station",
            style: "background:#e6f2e6;"
        },
        {
            name: "General Contractor",
            value: "general_contractor",
            style: "background:#d8d8d8;"
        },
        {
            name: "Grocery or Supermarket",
            value: "grocery_or_supermarket",
            style: "background:#d8d8d8;"
        },
        {
            name: "Gym",
            value: "gym",
            style: "background:#d8d8d8;"
        },
        {
            name: "Hair Care",
            value: "hair_care",
            style: "background:#d8d8d8;"
        },
        {
            name: "Hardware Store",
            value: "hardware_store",
            style: "background:#d8d8d8;"
        },
        {
            name: "Health",
            value: "health",
            style: "background:#d8d8d8;"
        },
        {
            name: "Hindu Temple",
            value: "hindu_temple",
            style: "background:#d8d8d8;"
        },
        {
            name: "Home Goods Store",
            value: "home_goods_store",
            style: "background:#d8d8d8;"
        },
        {
            name: "Hospital",
            value: "hospital",
            style: "background:#d8d8d8;"
        },
        {
            name: "Insurance Agency",
            value: "insurance_agency",
            style: "background:#d8d8d8;"
        },
        {
            name: "Jewelry Store",
            value: "jewelry_store",
            style: "background:#d8d8d8;"
        },
        {
            name: "Laundry",
            value: "laundry",
            style: "background:#d8d8d8;"
        },
        {
            name: "Lawyer",
            value: "lawyer",
            style: "background:#d8d8d8;"
        },
        {
            name: "Library",
            value: "library",
            style: "background:#d8d8d8;"
        },
        {
            name: "Liquor Store",
            value: "liquor_store",
            style: "background:#d8d8d8;"
        },
        {
            name: "Local Government Office",
            value: "local_government_office",
            style: "background:#d8d8d8;"
        },
        {
            name: "Locksmith",
            value: "locksmith",
            style: "background:#d8d8d8;"
        },
        {
            name: "Lodging",
            value: "lodging",
            style: "background:#fff6e6;"
        },
        {
            name: "Meal Delivery",
            value: "meal_delivery",
            style: "background:#d8d8d8;"
        },
        {
            name: "Meal Takaway",
            value: "meal_takaway",
            style: "background:#d8d8d8;"
        },
        {
            name: "Mosque",
            value: "mosque",
            style: "background:#d8d8d8;"
        },
        {
            name: "Movie Rental",
            value: "movie_rental",
            style: "background:#d8d8d8;"
        },
        {
            name: "Movie Theater",
            value: "movie_theater",
            style: "background:#d8d8d8;"
        },
        {
            name: "Moving Company",
            value: "moving_company",
            style: "background:#d8d8d8;"
        },
        {
            name: "Museum",
            value: "museum",
            style: "background:#d8d8d8;"
        },
        {
            name: "Night Club",
            value: "night_club",
            style: "background:#ffe6e6;"
        },
        {
            name: "Painter",
            value: "painter",
            style: "background:#d8d8d8;"
        },
        {
            name: "Park",
            value: "park",
            style: "background:#d8d8d8;"
        },
        {
            name: "Parking",
            value: "parking",
            style: "background:#d8d8d8;"
        },
        {
            name: "Pet Store",
            value: "pet_store",
            style: "background:#d8d8d8;"
        },
        {
            name: "Pharmacy",
            value: "pharmacy",
            style: "background:#d8d8d8;"
        },
        {
            name: "Physiotherapist",
            value: "physiotherapist",
            style: "background:#d8d8d8;"
        },
        {
            name: "Place of Worship",
            value: "place_of_worship",
            style: "background:#d8d8d8;"
        },
        {
            name: "Plumber",
            value: "plumber",
            style: "background:#d8d8d8;"
        },
        {
            name: "Point of Interest",
            value: "point_of_interest",
            style: "background:#d8d8d8;"
        },
        {
            name: "Police",
            value: "police",
            style: "background:#d8d8d8;"
        },
        {
            name: "Post Office",
            value: "post_office",
            style: "background:#d8d8d8;"
        },
        {
            name: "Real Estate Agency",
            value: "real_estate_agency",
            style: "background:#d8d8d8;"
        },
        {
            name: "Restaurant",
            value: "restaurant",
            style: "background:#ffe6e6;"
        },
        {
            name: "Roofing Contractor",
            value: "roofing_contractor",
            style: "background:#d8d8d8;"
        },
        {
            name: "RV Park",
            value: "rv_park",
            style: "background:#d8d8d8;"
        },
        {
            name: "School",
            value: "school",
            style: "background:#d8d8d8;"
        },
        {
            name: "Shoe Store",
            value: "shoe_store",
            style: "background:#d8d8d8;"
        },
        {
            name: "Shopping Mall",
            value: "shopping_mall",
            style: "background:#d8d8d8;"
        },
        {
            name: "Spa",
            value: "spa",
            style: "background:#d8d8d8;"
        },
        {
            name: "Stadium",
            value: "stadium",
            style: "background:#d8d8d8;"
        },
        {
            name: "Storage",
            value: "storage",
            style: "background:#d8d8d8;"
        },
        {
            name: "Store",
            value: "store",
            style: "background:#d8d8d8;"
        },
        {
            name: "Subway Station",
            value: "subway_station",
            style: "background:#d8d8d8;"
        },
        {
            name: "Synagogue",
            value: "synagogue",
            style: "background:#d8d8d8;"
        },
        {
            name: "Taxi Stand",
            value: "taxi_stand",
            style: "background:#d8d8d8;"
        },
        {
            name: "Train Station",
            value: "train_station",
            style: "background:#d8d8d8;"
        },
        {
            name: "Travel Agency",
            value: "travel_agency",
            style: "background:#d8d8d8;"
        },
        {
            name: "University",
            value: "university",
            style: "background:#d8d8d8;"
        },
        {
            name: "Veterinary Care",
            value: "veterinary_care",
            style: "background:#d8d8d8;"
        },
        {
            name: "Zoo",
            value: "zoo",
            style: "background:#d8d8d8;"
        }
    ],
    selectedMarker: {},
    markerTypes: []
};

var mapView = {
    gMap: new google.maps.Map(document.getElementById('map'), {
        //TODO: accept user-defined center location
        //center: {lat: 40.1583, lng: -83.0742},  //Powell, OH
        center: data.searchLoc.placeLoc,  //Powell, OH
        //center: {lat: 37.441883, lng: -122.143019},  //Palo Alto, CA
        zoom: 13
        }),
    infowindow: new google.maps.InfoWindow({maxWidth: 300}),
    toggleOverlay: function(){
        if(window.innerWidth < 768) {
            var overlay = document.getElementById('overlay');
            var specialBox = document.getElementById('specialBox');
            overlay.style.opacity = .5;
            if(overlay.style.display == "block"){
                overlay.style.display = "none";
                specialBox.style.display = "none";
            } else {
                overlay.style.display = "block";
                specialBox.style.display = "block";
            }
        }
    },
    getDeviceLocation: function() {
        //TODO: request.location 'use my location' in user settings
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
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
                //koViewModel.mapMarkers.push(marker);
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
                                    if(ven){
                                        if (ven.url) {
                                            var venueURL = ven.url;
                                            contentLink = '<p>Foursquare: <a href="' + venueURL + '" target="_blank">' + venueURL +
                                            '<span class="glyphicon glyphicon-new-window" aria-hidden="true"></span></a></p>';
                                            mapView.infowindow.setContent(name + address + contentLink);
                                        }else{
                                            mapView.infowindow.setContent(name + address + '<p>(url unavailable)</p>');
                                        }
                                    }else{
                                        mapView.infowindow.setContent(name + address + '<p>(venue unavailable)</p>');
                                    }

                                }else{
                                    mapView.infowindow.setContent(name + address + '<p>(venues unavailable)</p>');
                                }
                            },
                            //Set content if fail
                            error: function() {
                                mapView.infowindow.setContent(name + address + '<p>(information unavailable)</p>');
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
        mapView.gMap.setCenter(place.position);
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
        var placeAddress = (place.vicinity == undefined) ? place.formatted_address : place.vicinity;

        //style marker based on the place's first place-type
        //TODO: make better images (w/ transparent bg)
        var image = "img/mi-gray-t.gif"
        var priorityType = place.types[0];
        if(priorityType == "bar" || priorityType == "food" || priorityType == "night-club" || priorityType == "restaurant"){
            image = "img/mi-red-t.gif"
        }else if(priorityType == "gas_station"){
            image = "img/mi-green-t.gif"
        }else if(priorityType == "lodging"){
            image = "img/mi-orange-t.gif"
        }

        var marker = new google.maps.Marker({
            map: this.gMap,
            icon: image,
            position: placeLoc,
            placeId: place.place_id,
            animation: google.maps.Animation.DROP,
            name: place.name,
            vicinity: placeAddress,
            types: place.types,
            title: place.name
        });
        //setMap according to selectedType
        var selectedType = koViewModel.selectedType();
        if (marker.types.indexOf(selectedType) == -1 ) {
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

        //Open infowindow for selected place
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
                if(markers[i].types.indexOf(selectedType) == -1 ) {
                    markers[i].setMap(null)
                }else{
                    markers[i].setMap(mapView.gMap)
                    koViewModel.selectedMarker(markers[i].placeId);
                    //TODO: Recenter viewport around all map markers
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
                //get map bounds
                var bounds = new google.maps.LatLngBounds();
                koViewModel.selectedType(places[0].types[0]);
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
                //once all markers are created,
            }
            //Clear search box
            input.value = "";
        });
    },
    initNearbyMarkers: function() {
        //get user's location

        var latLng = mapView.gMap.getCenter();
        var loc = {
            lat: latLng.lat(),
            lng: latLng.lng()
        };

        //TODO: Allow user to set default request values in user options
        var request = {
            location: loc,
            radius: '5000',
            types: ['restaurant', 'lodging', 'gas_station']
        };

        service = new google.maps.places.PlacesService(mapView.gMap);
        service.nearbySearch(request, function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                console.log("status OK");
                //set initial selectedType
                //koViewModel.selectedType(results[0].types[0]);
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
                //Set map bounds to contain all places
                mapView.gMap.fitBounds(bounds);
            }else{
                console.log("status NOT OK");
            }
        });
    }
};


var koViewModel = {
    showPlace: function(markerTypes) {
        var isVisible = true;
        var selectedType = this.selectedType();
        if(markerTypes.indexOf(selectedType) == -1) {
            isVisible = false;
        }
        return isVisible;
    },
    showType: function(value) {
        var showType = false;
        //for each mapMarker, .types.indexOf(value) != -1, true
        var markers = this.mapMarkers();
        for( var i = 0; i < markers.length; i++ ) {
            if( markers[i].types.indexOf(value) != -1 ) {
                showType = true;
            }
        }
        return showType;
    },
    searchLoc: ko.observable(data.searchLoc),
    mapMarkers: ko.observableArray(data.mapMarkers),
    placeTypes: ko.observableArray(data.placeTypes),
    options: ko.observable("filter"),
    selectedType: ko.observable("point_of_interest"),
    selectedMarker: ko.observable(data.selectedMarker),
    markerTypes: ko.observableArray(data.markerTypes),
    userInfoOverlay: mapView.toggleOverlay(),
    //TODO: refactor initializers
    initializers: [
        mapView.initSearchPlaces(),
        mapView.initNearbyMarkers()
        ]
};

ko.applyBindings(koViewModel);