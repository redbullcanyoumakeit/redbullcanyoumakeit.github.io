// INSTAGRAM PHOTO GENERATOR

var instagramCanvas = document.getElementById('instagram-photo');
var instagramContext = instagramCanvas.getContext('2d');

// Redraws the canvas to display the current text
var previewInstagramImage = function() {
	// Draw background image
    var img = new Image();
    img.onload = function() {
    	// Draw text box
		instagramContext.drawImage(this, 0, 0);
    };
	img.src = 'img/instagram/' + $('#instagram-city').val() + '.jpg';
};

// Creates a download link for the result image
var downloadInstagramImage = function() {
	var link = document.getElementById('download-instagram-link');
	link.href = instagramCanvas.toDataURL("image/jpg");
    link.download = 'cymi-instagram.jpg';
};

$('#instagram-city').change(previewInstagramImage);
$(document).ready(function() { setTimeout(previewInstagramImage, 100); });
