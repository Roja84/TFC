$(document).ready(function(){
	$("#form_contact").validate({
		rules: {
			nom: {
				required: true,
				minlength: 3
			},
			prenom: {
				required: true,
				minlength: 3
			},
			email: {
				required: true,
				email: true
			},
			tel: {
				required: true,
				minlength: 10,
				maxlength: 10,
				digits: true
			},
			sujet: {
				required: true,
				rangelength: [10,100]
			},
			message: {
				required: true,
				rangelength: [20,3000]
			}
		},
		messages: {
			nom: {
				required: "Le champ 'Nom' est requis",
				minlength: "Votre nom doit faire au moins {0} caractères"
			},
			prenom: {
				required: "Le champ 'prenom' est requis",
				minlength: "Votre prenom doit faire au moins {0} caractères"
			},
			email: "Veuillez entrer une email valide",
			tel: {
				required: "Le champ 'tel' est requis",
				minlength: "Votre numéro de téléphone doit faire {0} caractères",
				maxlength: "Votre numéro de téléphone doit faire {0} caractères",
				digits: "Ce n'est pas un chiffre"
			},
			sujet: {
				required: "Le champ 'sujet' est requis",
				rangelength: "Le sujet doit faire entre {0} et {1} caractères"
			},
			message: {
				required: "Le champ 'message' est requis",
				rangelength: "Le message doit faire entre {0} et {1} caractères"
			}
		}
	});
});

function initialize(){
	var windowData = // info fenêtre
		'<div id="windowmap">'
		+'<font face="Arial, Helvetica, sans-serif" size="1">'
		+'<strong>Guillaume RICHARD</strong><br />'
		+'31460 Auriac sur vendinelle<br />'
		+'</font>'
		+'</div>';

	var mapOptions={
		zoom: 9,
		center: new google.maps.LatLng(43.65, 1.7),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}

	var map= new google.maps.Map(document.getElementById("map"),mapOptions);

	var myLatLng = new google.maps.LatLng(43.525, 1.826944);
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map
	});

	var infowindow = new google.maps.InfoWindow({
		content: windowData
	});

	google.maps.event.addListener(marker, 'click', function(){
		infowindow.open(map, marker);
	});
}
google.maps.event.addDomListener(window, 'load', initialize);
