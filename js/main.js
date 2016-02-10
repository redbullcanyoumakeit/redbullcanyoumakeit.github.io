// Wraps text inside a rectangle
var wrapText = function(context, text, x, y, maxWidth, maxHeight, lineHeight) {
	var words = text.replace(/\n/g, ' \n ').split(' ');
	var line = '';
	var lineCount = 1;

	for(var n = 0; n < words.length; n++) {
		// Enter (new line) behaviour
		if (words[n] == '\n') {
			if(++lineCount * lineHeight > maxHeight) break;

			context.fillText(line, x, y);
			line = '';
			y += lineHeight;
			++n;
		}

		var testLine = line + words[n] + ' ';
		var metrics = context.measureText(testLine);
		if (metrics.width > maxWidth && n > 0) {
			if(++lineCount * lineHeight > maxHeight) break;

			context.fillText(line, x, y);
			line = words[n] + ' ';
			y += lineHeight;
		}
		else {
			line = testLine;
		}
	}

	context.fillText(line, x, y);
};
