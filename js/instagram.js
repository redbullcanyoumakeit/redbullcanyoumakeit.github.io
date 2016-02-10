// INSTAGRAM PHOTO GENERATOR

var instagramCanvas = document.getElementById('instagram-photo');
var instagramContext = instagramCanvas.getContext('2d');
	instagramContext.fillStyle = '#102243';
	instagramContext.font = '36px Futura';
	instagramContext.textAlign = 'center';

// Redraws the canvas to display the current text
var previewInstagramImage = function() {
	// Draw background image
    var img = new Image();
    img.onload = function() {
    	// Draw text box
		instagramContext.drawImage(this, 0, 0);

		var textbox = {
			x: 0,
			y: 0,
			width: 450,
			height: 150,
			lineHeight: 42
		};

		// Rotate text:

		// Start by saving the current context (current orientation, origin)
		instagramContext.save();

		// For better targeting
		instagramContext.translate(528, 440);

		// Rotate the canvas clockwise holding onto the translate point
		instagramContext.rotate(-Math.PI / 24);

		// Draw text
		var text = $('#instagram-text').val().toUpperCase();
		wrapText(instagramContext, text, textbox.x, textbox.y + textbox.lineHeight - 7, textbox.width, textbox.height, textbox.lineHeight);

		// Now restore the canvas flipping it back to its original orientation
		instagramContext.restore();
    };
	img.src = 'img/instagram.png';
};

// Creates a download link for the result image
var downloadInstagramImage = function() {
	var link = document.getElementById('download-instagram-link');
	link.href = instagramCanvas.toDataURL("image/png");
    link.download = 'cymi-instagram.png';
};

$('#instagram-text').keyup(previewInstagramImage).change(previewInstagramImage);
$(document).ready(function() { setTimeout(previewInstagramImage, 100); });
