
        function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: {
                    lat: 46.619261,
                    lng: -33.134766
                }
            });
            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

            var locations = [
                {lat: 53.320980, lng: -6.234470}, 
                {lat: 53.326550, lng: -6.255530}, 
                {lat: 53.330680, lng: -6.229670}, 
                {lat: 53.335098, lng: -6.215700},
                {lat: 53.335098, lng: -6.215700}, 
                {lat: 53.335098, lng: -6.215700},
            ];
            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }
