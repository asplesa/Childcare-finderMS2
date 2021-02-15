// Categories of care provider & descriptions of each
    var creches = [ 
        {lat: 53.3253538460586, lng: -6.254593667043504, "information": "Sniggering Tots - is a creche like no other, designed to give the best possible childcare at the most affordable and flexible rates with top quality indoor and outdoor facilities"},
        {lat: 53.30647441515744, lng: -6.288377513898748, "information": "Learning Hands - is a focused school-age childcare provider. We exist to excite, engage and entertain children before school, after school, and throughout school holidays"},
        {lat: 53.319640270789115, lng: -6.312968006026284, "information": "Sagemille creche - is a bright and airy centre that has 6 spacious rooms, all colourfully decorated and arranged to offer each child the chance to explore and investigate their environment"}
    ];
      
    var montessoris = [
            {lat: 53.35214202715207, lng: -6.2462966290529245, "information": "Giraffe IFSC - is a montessori in the heart of the business district of Dublin"},
            {lat: 53.336359672299054, lng: -6.262776120337468, "information": "Rainbow - a montessori providing exceptional care in small group environments to aid learning"}
        ];
    
    var childminders = [
        {lat: 53.412061689267716, lng: -6.1587495296582615, "information": "Dumbo Childminding - providing a home from home environment for children aged 2 to 12."},
        {lat: 53.26585083117924, lng: -6.219547516528554, "information": "Pamela Childminding - with over 20 years experience taking care of a maximum of 4 children at any one time"}
    ];


// Map displays Dublin on opening of webpage
function initMap() {
    const mapProp = {
        zoom: 10,
        center: new google.maps.LatLng(53.34965776701125, -6.260817096501578 ),
    };

    var map = new google.maps.Map(document.getElementById("map"), mapProp);
    var infowindow = new google.maps.InfoWindow();
    var markers = [];

function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}

// On click on care type button the map display the available options
     $("#crecheInfo").click(function() {
        clearMarkers();
        map.setZoom(10);
        map.setCenter({
            lat: 53.34965776701125, 
            lng: -6.260817096501578
        });    

   
        for (i = 0; i < creches.length; i++) {  
           $.each(creches, function(i, item){
                var marker = new google.maps.Marker({
                position: new google.maps.LatLng(creches[i].lat, creches[i].lng),
                map: map,           
                title: creches[i].name,
                animation: google.maps.Animation.DROP,
            });

        markers.push(marker);

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(item.information);
                infowindow.open(map, marker);  
                map.setZoom(12);
                map.setCenter(marker.getPosition());
            };
        })(marker, i));

        google.maps.event.addListener(infowindow, 'closeclick', function(){
            map.panTo(this.getPosition());
            map.setZoom(11);   
        });
    });
}
});        

$("#montessoriInfo").click(function() {
        clearMarkers();
        map.setZoom(10);
        map.setCenter({
            lat: 53.34965776701125, 
            lng: -6.260817096501578
        });    

   
        for (i = 0; i < montessoris.length; i++) {  
           $.each(montessoris, function(i, item){
                var marker = new google.maps.Marker({
                position: new google.maps.LatLng(montessoris[i].lat, montessoris[i].lng),
                map: map,           
                title: montessoris[i].name,
                animation: google.maps.Animation.DROP,
            });

        markers.push(marker);

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(item.information);
                infowindow.open(map, marker);  
                map.setZoom(12);
                map.setCenter(marker.getPosition());
            };
        })(marker, i));

        google.maps.event.addListener(infowindow, 'closeclick', function(){
            map.panTo(this.getPosition());
            map.setZoom(11);   
        });
    });
}
});        


$("#childminderInfo").click(function() {
        clearMarkers();
        map.setZoom(10);
        map.setCenter({
            lat: 53.34965776701125, 
            lng: -6.260817096501578
        });    

   
        for (i = 0; i < childminders.length; i++) {  
           $.each(childminders, function(i, item){
                var marker = new google.maps.Marker({
                position: new google.maps.LatLng(childminders[i].lat, childminders[i].lng),
                map: map,           
                title: childminders[i].name,
                animation: google.maps.Animation.DROP,
            });

        markers.push(marker);

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(item.information);
                infowindow.open(map, marker);  
                map.setZoom(12);
                map.setCenter(marker.getPosition());
            };
        })(marker, i));

        google.maps.event.addListener(infowindow, 'closeclick', function(){
            map.panTo(this.getPosition());
            map.setZoom(11);   
        });
    });
}
});     


}





