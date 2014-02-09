/*!
 * BlinkTable.js v0.1.0 (https://github.com/hiro20v/blinktable)
 * Copyright 2014 hiro20v
 * Distributed under http://opensource.org/licenses/MIT
 */
(function(jQuery) {

	var tableBody;
	var config;
	var originalColors;
	var originalBackgroundColors;
	$.fn.blinktable = function(options) {

        config = jQuery.extend({
        	blinks:[
        		{
        			color: 'black',
        			backgroundColor: 'pink',
        			duration: 200
        		},
        		{
        			color: 'black',
        			backgroundColor: 'pink',
        			duration: 200
        		},
        		{
        			color: 'black',
        			backgroundColor: 'pink',
        			duration: 200
        		}
        	],
            interval: 200
        }, options);

		if('TABLE' != this.prop('tagName')){

			throw 'This element is not TABLE.';
		}

        var tableBodies = this.children('tbody');

		if(tableBodies.length != 1){

			throw 'tbody length is not 1.';
		}

        tableBody = tableBodies.eq(0);

		originalColors = new Array();
		originalBackgroundColors = new Array();
		var rows = tableBody.children();
		for(var rowIndex=0; rowIndex<rows.length; rowIndex++){

			var cells = rows.eq(rowIndex).children();
			var originalCellColors = new Array();
			var originalCellBackgroundColors = new Array();
			for(var cellIndex=0; cellIndex<cells.length; cellIndex++){

				var cell = cells.eq(cellIndex);
				originalCellColors[cellIndex] = cell.css('color');
				originalCellBackgroundColors[cellIndex] = cell.css('background-color');
			}
			originalColors[rowIndex] = originalCellColors;
			originalBackgroundColors[rowIndex] = originalCellBackgroundColors;
		}

		return this;
	};

	$.fn.cellValue = function(cellIndex, rowIndex, value){

		var rows = tableBody.children();

		if(rows.length - 1  < rowIndex){

			throw 'rowIndex is over tr length. :' + rowIndex;
		}

		var cells = rows.eq(rowIndex).children();

		if(cells.length - 1  < cellIndex){

			throw 'cellIndex is over td length. :' + cellIndex;
		}

		var cell = cells.eq(cellIndex)

		var originalColor = originalColors[rowIndex][cellIndex];
		var originalBackgroundColor = originalBackgroundColors[rowIndex][cellIndex];

        var blink = function(cell, repeat){

        	var blinks = config.blinks[config.blinks.length - repeat];

            cell.css('color', blinks.color);
            cell.css('background-color', blinks.backgroundColor);

            setTimeout(function(){

                cell.css('color', originalColor);
                cell.css('background-color', originalBackgroundColor);

                repeat--;

                if(0 < repeat){

	                setTimeout(function(){

						blink(cell, repeat);                
	                }, config.interval);
                }
            }, blinks.duration);
        }

		if(cell.html() != value){

			var repeat = config.blinks.length;

			cell.html(value);
			blink(cell, repeat);
		}

		return this;
	}
})(jQuery);