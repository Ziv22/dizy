"https://maps.googleapis.com/maps/api/js?key=AIzaSyDCYYt3NuOfQx0nvwYZpiC0eMqDcGFf4Io&callback=initMap"
// function initMap() {
//     var options = {
//         zoom: 8,
//         center: {
//             lat: 32.0946603,
//             lng: 34.7752426
//         }
//     }
//     var map = new google.maps.Map(
//         document.getElementById('map'), options);

//     var markers = [
//         {
//             coords: { lat: 32.0946603, lng: 34.7752426 },
//             iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachFlag.png",
//             content: '<h1>Falafel Workshop<h1>'
//         },
//         {
//             coords: { lat: 32.16262, lng: 34.886691 }
//         },

//         {
//             coords: {
//                 lat: 35.986003, lng: 36.932547
//             }
//         }
//     ];

//             for (let i = 0; i< markers.length; i++)
//             addMarker(makers[i])
//     addMarker(
//         {
//             coords: { lat: 32.0946603, lng: 34.7752426 },
//             iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachFlag.png",
//             content: '<h1>Falafel Workshop<h1>'
//         })
//     addMarker({ coords: { lat: 32.16262, lng: 34.886691 } })

//     addMarker({ coords: { lat: 35.986003, lng: 36.932547 } })


//     function addMarker(props) {
//         var marker = new google.maps.Marker({
//             position: props.coords,
//             map: map,
//         });
//         if (props.iconImage) {
//             marker.setIcon(props.iconImage)
//         }
//         if (props.content) {
//             var infoWindow = new google.maps.infoWindow({
//                 content: props.content
//             })
//         }
//     }
// }

// $('#show-map').on('click', initMap())