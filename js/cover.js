// COVER PHOTO GENERATOR

var coverCanvas = document.getElementById('cover-photo');
var coverContext = coverCanvas.getContext('2d');
	coverContext.fillStyle = '#ffffff';
	coverContext.font = '15px Futura';
	coverContext.textAlign = 'center';

// Redraws the canvas to display the current text
var previewCoverImage = function() {
	// Draw background image
    var img = new Image();
    img.onload = function() {
    	// Draw text box
		coverContext.drawImage(this, 0, 0);

		var textbox = {
			x: 676,
			y: 36,
			width: 263,
			height: 60,
			lineHeight: 20
		};

		var text = $('#cover-text').val().toUpperCase();
		wrapText(coverContext, text, textbox.x, textbox.y + textbox.lineHeight - 7, textbox.width, textbox.height, textbox.lineHeight);
    };
	img.src = 'img/cover.jpg';
};

// Creates a download link for the result image
var downloadCoverImage = function() {
	var link = document.getElementById('download-cover-link');
	link.href = coverCanvas.toDataURL("image/jpg");
    link.download = 'cymi-cover.jpg';
};

$('#cover-text').keyup(previewCoverImage).change(previewCoverImage);
$(document).ready(function() { setTimeout(previewCoverImage, 100); });
