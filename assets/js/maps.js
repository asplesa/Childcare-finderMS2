/* To get place details on map https://developers.google.com/maps/documentation/javascript/examples/place-details */

function initMap() {

    var dub = { lat: 53.34965776701125, lng: -6.260817096501578 }; /*Dublin*/
    var snig = { lat: 53.3253538460586, lng: -6.254593667043504 }; /*Sniggering Tots*/
    var learn = { lat: 53.30647441515744, lng: -6.288377513898748 }; /*Learning Hands*/
    var sage = { lat: 53.319640270789115, lng: -6.312968006026284 }; /*Sageville Creche*/
    var girifsc = { lat: 53.35214202715207, lng: -6.2462966290529245 }; /*Giraffe IFSC*/
    var girhar = { lat: 53.336359672299054, lng: -6.262776120337468 }; /*Giraffe Harcourt Road*/
    var rain = { lat: 53.37156473683785, lng: -6.241833532524138 }; /*Rainbow*/
    var dumbo = { lat: 53.412061689267716, lng: -6.1587495296582615 }; /*Dumbo childminding*/
    var cuddle = { lat: 53.280129998990056, lng: -6.253364781102455 }; /*Cuddle childminders*/
    var pam = { lat: 53.26585083117924, lng: -6.219547516528554 }; /*Pamala childminder*/

    if (document.getElementById("location").value === 'dub') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: dub
        });
        new google.maps.Marker({
            position: dub,
            map,
        });
    }

    else if (document.getElementById("location").value === 'snig') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: snig
        });
        new google.maps.Marker({
            position: snig,
            map,
        });
    }

    else if (document.getElementById("location").value === 'learn') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: learn
        });
        new google.maps.Marker({
            position: learn,
            map,
        });
    }

    else if (document.getElementById("location").value === 'sage') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: sage
        });
        new google.maps.Marker({
            position: sage,
            map,
        });
    }
    else if (document.getElementById("location").value === 'girifsc') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: girifsc
        });
        new google.maps.Marker({
            position: girifsc,
            map,
        });
    }



    else if (document.getElementById("location").value === 'girhar') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: girhar
        });
        new google.maps.Marker({
            position: girhar,
            map,
        });
    }

    else if (document.getElementById("location").value === 'rain') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: rain
        });
        new google.maps.Marker({
            position: rain,
            map,
        });
    }

    else if (document.getElementById("location").value === 'dumbo') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: dumbo
        });
        new google.maps.Marker({
            position: dumbo,
            map,
        });
    }

    else if (document.getElementById("location").value === 'cuddle') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: cuddle
        });
        new google.maps.Marker({
            position: cuddle,
            map,
        });
    }

    else if (document.getElementById("location").value === 'pam') {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: pam
        });

        new google.maps.Marker({
            position: pam,
            map,
        });
    }
}
