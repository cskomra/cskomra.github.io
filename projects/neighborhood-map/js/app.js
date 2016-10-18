
var data = {
    latLng: {},
    mapType: null,
    map: {},
    mapOptions: {
        center: {},
        zoom: null,
        mapTypeId: null
    },
    infowindow: {},
    marker: {},
    searchBox: {},
    service: {},
    bounds: {},
    placesService: {},
    searchLoc: {
        placeName: "Powell, OH",  //TODO: change to 'name'
        placeLoc: {lat: 40.1583, lng: -83.0742} //TODO: change to 'value'
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
            style: "background:#ff9999;"
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
            style: "background:#ff9999;"
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
            style: "background:#99cc99;"
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
            style: "background:#ffdb99;"
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
            style: "background:#ff9999;"
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
            style: "background:#ff9999;"
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

var appInit = {
    callback: function() {
        appInit.log('google-loader has been loaded, but not the maps-API ');
    },
    loadScript: function(src,callback){
        var script = document.createElement("script");
        script.type = "text/javascript";
        if(callback)script.onload=callback;
        document.getElementsByTagName("head")[0].appendChild(script);
        script.src = src;
    },
    initNearbyMarkers: function() {
        //TODO: Allow user to set default values in 'user preferences'
        var request = {
            location: data.searchLoc.placeLoc,
            radius: '5000',
            types: ['restaurant', 'lodging', 'gas_station']
        };
        data.service.nearbySearch(request, function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                console.log("status OK");
                data.bounds = new google.maps.LatLngBounds();
                for (var i = 0; i < results.length; i++) {
                    var place = results[i];

                    mapView.createMarker(place);
                    //Set bounds to contain the new place
                    if (place.geometry.viewport) {
                        // Only geocodes have viewport.
                        data.bounds.union(place.geometry.viewport);
                    } else {
                        data.bounds.extend(place.geometry.location);
                    }
                }
                //Set map bounds to contain all places
                data.map.fitBounds(data.bounds);
            }else{
                //TODO handle this case better
                console.log("status NOT OK");
            }
        });
    },
    initialize: function() {
        //appInit.log('maps-API has been loaded, ready to use');
        data.latLng = new google.maps.LatLng(-34.397, 150.644);
        data.mapOptions.latLng = data.latLng;
        data.mapOptions.center = data.latLng;
        data.mapOptions.zoom = 13;
        data.mapOptions.mapTypeId = google.maps.MapTypeId.ROADMAP;
        var input = document.getElementById('search-input');
        data.map = new google.maps.Map(document.getElementById('map'), data.mapOptions);
        data.searchBox = new google.maps.places.SearchBox(input);

        data.map.addListener('bounds_changed', function() {
            data.searchBox.setBounds(data.map.getBounds());
        });

        data.searchBox.addListener('places_changed', function() {
            var places = data.searchBox.getPlaces();
            if (places.length === 0) {
                //TODO:  handle this case better
                return;
            }else{
                //clear existing markers
                mapView.clearMapMarkers();
                koViewModel.selectedType(places[0].types[0]);
                //get map bounds
                for (var i = 0; i < places.length; i++) {
                    mapView.createMarker(places[i]);
                    //Set bounds to contain the new place
                    if (places[i].geometry.viewport) {
                        // Only geocodes have viewport.
                        data.bounds.union(places[i].geometry.viewport);
                    } else {
                        data.bounds.extend(places[i].geometry.location);
                    }
                }
                //Set map bounds to contain all places
                data.map.fitBounds(data.bounds);
            }
            //Clear search box
            input.value = "";
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
                    markers[i].setMap(null);
                }else{
                    markers[i].setMap(data.map);
                    koViewModel.selectedMarker(markers[i].placeId);
                    //Set bounds to contain the new place
                    data.bounds.extend(markers[i].position);
                }
            }
            data.map.fitBounds(data.bounds);
        });

        data.infowindow = new google.maps.InfoWindow({maxWidth: 300});
        data.service = new google.maps.places.PlacesService(data.map);
        mapView.toggleOverlay();
        appInit.initNearbyMarkers();
    },
    log: function(str){
        document.getElementsByTagName('pre')[0].appendChild(document.createTextNode('['+new Date().getTime()+']\n'+str+'\n\n'));
    }
};

appInit.loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyAHSznsKD61KFBs4UJSJiFcfvyg9qHf4pQ&libraries=places&callback=appInit.initialize',
    false);  //Reference:  http://jsfiddle.net/doktormolle/7cu2f/

var mapView = {
    toggleOverlay: function() {
        if(window.innerWidth < 768) {
            var overlay = document.getElementById('overlay');
            var specialBox = document.getElementById('specialBox');
            overlay.style.opacity = 0.5;
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
        //TODO: use with 'use my location' in user settings
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
                    map: data.map,
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
        }

        //Current Position error handler
        function handleLocationError(browserHasGeolocation) {
            data.infowindow = mapView.infowindow;
            data.infowindow.setPosition(mapView.gMap.getCenter());
            var content = browserHasGeolocation ?
                "<p><h5>Error</h5></p><p>The Geolocation service has failed.</p>" :
                "<p><h5>Error</h5></p><p>Your browser doesn't support geolocation.</p>";
            data.infowindow.setContent(content + "<p>Therefore, your search is based on Powell, OH</p>");
            mapView.infowindow.open(mapView.gMap);
        }
    },
    openInfowindow: function(place) {
        //var place = place;
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
        var contentLink = '';
        var setInfowindowContent = function(msg) {
            data.infowindow.setContent(name + address + msg);
        };
        $.ajax(wikiUrl, {
            dataType: 'jsonp',
            //Set content if successful
            success: function( response ) {
                var articleList = response[1];
                var articleStr = articleList[0];
                if (articleStr) {
                    var url = 'http://en.wikipedia.org/wiki/' + articleStr;
                    contentLink = '<p>Wiki: <a href="' + url + '" target="_blank">' + articleStr +
                    '<span class="glyphicon glyphicon-new-window" aria-hidden="true"></span></a></p>';
                    //data.infowindow.setContent(name + address + contentLink);
                    setInfowindowContent(contentLink);
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
                                        //data.infowindow.setContent(name + address + contentLink);
                                        setInfowindowContent(contentLink);
                                    }else{
                                        //data.infowindow.setContent(name + address + '<p><em>(url unavailable)</em></p>');
                                        setInfowindowContent('<p><em>(url unavailable)</em></p>');
                                    }
                                }else{
                                    //data.infowindow.setContent(name + address + '<p><em>(venue unavailable)</em></p>');
                                    setInfowindowContent('<p><em>(url unavailable)</em></p>');
                                }

                            }else{
                                //data.infowindow.setContent(name + address + '<p><em>(venues unavailable)</em></p>');
                                setInfowindowContent('<p><em>(venues unavailable)</em></p>');
                            }
                        },
                        //Set content if fail
                        error: function() {
                            setInfowindowContent('<p><em>(information unavailable)</em></p>');
                        }
                    });
                }
            },
            //Set content if fail
            error: function() {
                setInfowindowContent('<p><em>(wiki article unavailable)</em></p>');
            }
        });
        data.map.setCenter(place.position);
        data.infowindow.open(data.map, place);
        //Animate marker for 2 secs
        place.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout( function(){place.setAnimation(null);}, 2000);
    },
    clearMapMarkers: function() {
        var markers = koViewModel.mapMarkers();
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        koViewModel.mapMarkers([]);
    },
    createMarker: function(place) {
        var placeLoc = place.geometry.location;
        var placeAddress = (place.vicinity === undefined) ? place.formatted_address : place.vicinity;

        //style marker based on place-type
        var image = "img/mi-gray-t.gif";
        var priorityType = place.types;
        if(priorityType.indexOf("restaurant") != -1) {
            image = "img/mi-red-t.gif";
        }else if(priorityType.indexOf("gas_station") != -1) {
            image = "img/mi-green-t.gif";
        }else if(priorityType.indexOf("lodging") != -1) {
            image = "img/mi-orange-t.gif";
        }

        data.marker = new google.maps.Marker(
            {
                map: data.map,
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
        if (data.marker.types.indexOf(selectedType) == -1 ) {
            data.marker.setMap(null);
        }

        //add marker to koViewModel.mapMarkers
        koViewModel.mapMarkers.push(data.marker);

        //add click listener to marker
        google.maps.event.addListener(data.marker, 'click', function() {
            mapView.openInfowindow(this);
        });
        return data.marker;
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
    //userInfoOverlay: mapView.toggleOverlay()
};
ko.applyBindings(koViewModel);