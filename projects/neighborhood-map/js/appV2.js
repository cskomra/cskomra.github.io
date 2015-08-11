$(function() {
	var restaurantMarkers = [
	    	{
	    		id: 0,
	    		title: 'CIBO',
	    		address: '603 N 5th Ave, Phoenix, AZ 85003',
	    		position: {	lat: 33.45499849999999, lng: -112.0798963 }
			},
			{
				id: 1,
	    		title: 'The Breadfruit & Rum Bar',
	    		address: '108 E Pierce St, Phoenix, AZ 85004',
	    		position: { lat: 33.4557075, lng: -112.0720114 }
			},
			{
				id: 2,
	    		title: 'FEZ',
	    		address: '105 W Portland St, Phoenix, AZ 85003',
	    		position: { lat: 33.4596909, lng: -112.0743181 }
			},
			{
				id: 3,
	    		title: 'Province Restaurant',
	    		address: '333 N Central Ave, Phoenix, AZ 85004',
	    		position: { lat: 33.4516715, lng: -112.0733143 }
			},
			{
				id: 4,
	    		title: 'Angels Trumpet Ale House',
	    		address: '810 N 2nd St, Phoenix, AZ 85004',
	    		position: { lat: 33.457042, lng: -112.07164 }
			}
		];

	var viewModel = {

		// data
		restaurants: ko.observableArray(restaurantMarkers),
		restaurantToAdd: ko.observable(""),

		// behaviors
		initialize: function() {

			var markers = [];
		    var ColumbusOhioLatlng = new google.maps.LatLng(39.9833, -82.9833);
		    var mapOptions = {
		      center: ColumbusOhioLatlng,
		      zoom: 12
		    };
		    var map = new google.maps.Map(document.getElementById('map'),
		        mapOptions);

		    var input = document.getElementById('pac-input');
		    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);


		    var searchBox = new google.maps.places.SearchBox(input);
		    // Listen for the event fired when the user selects an item from the
			// pick list. Retrieve the matching places for that item.


			google.maps.event.addListener(searchBox, 'places_changed', function() {
				var places = searchBox.getPlaces();

				if (places.length == 0) {
					return;
				}
				for (var i = 0, marker; marker = markers[i]; i++) {
					marker.setMap(null);
				}

				// For each place, get the icon, place name, and location.
				markers = [];
				var bounds = new google.maps.LatLngBounds();
				for (var i = 0, place; place = places[i]; i++) {
					var image = {
						url: place.icon,
						size: new google.maps.Size(71, 71),
						origin: new google.maps.Point(0, 0),
						anchor: new google.maps.Point(17, 34),
						scaledSize: new google.maps.Size(25, 25)
			    	};

					// Create a marker for each place.
					var marker = new google.maps.Marker({
					map: map,
					icon: image,
					title: place.name,
					position: place.geometry.location
					});

					markers.push(marker);

					bounds.extend(place.geometry.location);
				};

				map.fitBounds(bounds);
			});
			// Bias the SearchBox results towards places that are within the bounds of the
			// current map's viewport.
			google.maps.event.addListener(map, 'bounds_changed', function() {
				var bounds = map.getBounds();
				searchBox.setBounds(bounds);
			});
		},  //end initialize function
		addRestaurant: function() {
			this.restaurants.push({name: this.restaurantToAdd() });
			this.restaurantToAdd("");
		}
	};

	google.maps.event.addDomListener(window, 'load', viewModel.initialize);

	$(document).on("click", ".restaurant-delete", function(){
		var itemToRemove = ko.dataFor(this);
		viewModel.restaurants.remove(itemToRemove);
	});

	ko.applyBindings(viewModel)

});