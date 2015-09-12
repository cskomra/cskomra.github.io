var data = {
    mapMarkers: [],
    placeTypes: [],
};

var mapView = {
    gMap: new google.maps.Map(document.getElementById('map'), {
        //center: self.locationData()[0].latLng,
        center: {lat: 40.1583, lng: -83.0742},
        zoom: 13
        }),
    infowindow: new google.maps.InfoWindow({maxWidth: 300}),
    getUnique: function(inputArray){
        var outputArray = [];
        for( var i = 0; i < inputArray.length; i++ ) {
            if (jQuery.inArray(inputArray[i], outputArray) == -1){
                outputArray.push(inputArray[i]);
            }
        }
        return outputArray;
    },
    placeItemClicked: function(){
        console.log(this);
        var name = '<strong>' + this.name + '</strong>';
        mapView.infowindow.setContent(name);
        mapView.gMap.setCenter(this.position);
        mapView.infowindow.open(mapView.gMap, this);
    },
    createMarker: function(place){
        //console.log(place);
        var placeLoc = place.geometry.location;

        //create marker
        var marker = new google.maps.Marker({
            map: this.gMap,
            position: placeLoc,
            placeId: place.place_id,
            //itemDisplayName: place.name + '  [' + place.place_id + ']',
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
        var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' +
        encodeURIComponent(place.name) + '&format=json&callback=wikiCallback';
        $.ajax(wikiUrl, {
            dataType: 'jsonp',
            success: function( response ) {
                var articleList = response[1];
                for (var i = 0; i < 1; i++) {
                    articleStr = articleList[i];
                    if(articleStr){
                        var url = 'http://en.wikipedia.org/wiki/' + articleStr;
                        content = '<p><a href="' + url + '" target="_blank">' + articleStr + '<span class="glyphicon glyphicon-new-window" aria-hidden="true"></span></a></p>';
                        mapView.infowindow.setContent(name + address + content);
                    }else{
                        mapView.infowindow.setContent(name + address + '<p>(wiki article unavailable)</p>');
                    }
                }
            },
            error: function() {
                mapView.infowindow.setContent(name + address + '<p>(wiki article unavailable)</p>');
            }
        });
        mapView.infowindow.open(mapView.gMap, this);
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
            mapView.infowindow.close();
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
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


        $('input[type=checkbox]').change(function(){
            var type = this.value;
            var markers = koViewModel.mapMarkers();
            var placeItems = $('ul.places').children();
            //console.log(placeItems);
            if( !this.checked ){
                //this is the one using
                for (var i = 0; i < markers.length; i++){
                    //console.log("new marker:");
                    //console.log(markers[i]);
                    if( markers[i].types.indexOf(type) != -1){
                        //console.log(markers[i]);
                        //console.log("Marker, " + markers[i].name + " has the type " + type + ": ");
                        //console.log(markers[i].types);
                        var idx = markers[i].types.indexOf(type);
                        //console.log(type + " is at location: " + idx);
                        //console.log("Removing '" + type + "' from types...");
                        var removeThis = markers[i].types.splice(idx, idx + 1);
                        //console.log("The marker's new types are:");
                        //console.log(markers[i].types);
                        //console.log("Checking...is types now empty:");
                        if (markers[i].types.length == 0){
                            //console.log("Types array is empty.  Setting map to null...");
                            markers[i].setMap(null);
                            console.log("Find match for:  " + markers[i].name);
                            console.log("The Id = " + markers[i].placeId);
                            var li = document.getElementById(markers[i].placeId);
                            console.log(li);
                            li.style.display = "none";
                        }
                    }
                }
            }
        });

        searchBox.addListener('places_changed', function() {
            var places = searchBox.getPlaces();

            if (places.length == 0) {
                return;
            };

            //console.log('data.mapMarkers.length = ' + data.mapMarkers.length);
            for( var i = 0; i < data.mapMarkers.length; i++) {
                data.mapMarkers[i].setMap(null);
            };

            //console.log('koViewModel.mapMarkers.length = ' + koViewModel.mapMarkers().length);
            for( var i = 0; i < koViewModel.mapMarkers().length; i++) {
                koViewModel.mapMarkers()[i].setMap(null);
            };

            koViewModel.mapMarkers([]);
            koViewModel.placeTypes([]);

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

                for( i = 0; i < place.types.length; i++ ){
                    koViewModel.placeTypes.push(place.types[i]);
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
            koViewModel.placeTypes(mapView.getUnique(koViewModel.placeTypes()));

            mapView.gMap.fitBounds(bounds);
            input.value = "";
        });
    }
};
var koViewModel = {
    mapMarkers: ko.observableArray(data.mapMarkers),
    placeTypes: ko.observableArray(data.placeTypes),
    searches: [mapView.initSearchPlaces()],
    shouldShowItem: ko.observable(true)
    //searches: [mapView.searchNearby(), mapView.initSearchPlaces()],
};

ko.applyBindings(koViewModel);