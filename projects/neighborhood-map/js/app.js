$(function() {
	var map = {};
	var data = {
		mapMarkers: [],
		places: [],
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
			HTMLplace: '<li class="flex-item" data-bind="text data.places"><span class="white-text">%place-name%</span></li>',
			//===== VIEW OBJECTS =====
			initialize: function(){
				$('#places').append(this.HTMLplacesListStart);
				this.render();
			},
			render: function(){
				viewModel.setPlaceDetails();
			}
		}
	};

	var viewModel = {
		//data
		mMarkers: ko.observableArray(data.mapMarkers),
		//behavior
		initialize: function(){
			views.mapView.initialize();
			views.placesListView.initialize();
			ko.applyBindings(viewModel);
		},
		getMap: function(){
			return map;
		},
		callback: function(results, status){
			if (status === google.maps.places.PlacesServiceStatus.OK) {
				console.log("results length = " + results.length);
				for (var i = 0; i < results.length; i++) {
					viewModel.createMarker(results[i]);
					data.mapMarkers.push(results[i]);
				}
				views.placesListView.render();
			}
		},
		setPlaceDetails: function(){
			for (var i = 0; i < data.mapMarkers.length; i++) {
				var place_id = data.mapMarkers[i].place_id;
				var request = { placeId: place_id };
				service = new google.maps.places.PlacesService(viewModel.getMap());
				service.getDetails(request, callback);
				function callback(place, status) {
					if (status == google.maps.places.PlacesServiceStatus.OK) {
						data.places.push(place);
						var formattedPlace = views.placesListView.HTMLplace.replace("%place-name%", place.name);
						$('#places').append(formattedPlace);
					}
				}
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
			google.maps.event.addListener(marker, 'click', function() {
				data.infowindow.setContent(place.name);
				data.infowindow.open(viewModel.getMap(), this);
			});
		}
	} // end viewModel
viewModel.initialize();
}); // end $(function(){})