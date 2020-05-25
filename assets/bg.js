window.onbeforeunload = function () {
  window.scrollTo(0, 0); //keep at top on refresh
}

var mobile = true,
    reduced = false,
    highestScroll = 0,
    initialScroll = false;

(function(){
    var offsetMethod = jQuery.fn.offset;
    jQuery.fn.offset = function(){
        var offset = offsetMethod.apply( this, arguments );
        var UWFix = offsetMethod.apply($('.ultrawide-capture'), arguments);
        var newOffset = {
            top: offset.top,
            left: offset.left - UWFix.left
        };
        return newOffset;
    }
})();

var subscribeDisabled = false;

$(function() {
    handleBanner();
    updateLines();
    renderButtons();
    $(window).resize(function() {
        updateLines();
        $('.carousel-inner').animate({scrollLeft: '0px'}, 400);
    });

    $('#updatedbtn').click(function(e) {
        handleSub(e);
    })

    $(window).scroll(function() {
        if(mobile)
            return;
        processScroll();
    });

});
function processScroll() {
    //on keyframe ...
}

function updateLines() {
    var screenHeight = Math.min($(window).height(), $('.ultrawide-capture').height());
    var screenWidth = Math.min($(window).width(), $('.ultrawide-capture').width());
    var canvasContainer = $('.linesCanvas-outside');
    var canvas1 = $('.linesCanvas-inside', canvasContainer[0]);
    var canvas2 = $('.linesCanvas-inside', canvasContainer[1]);
    //Detect mobile form factor (no lines), or reduced lines form factor (reduced=true)
    if(screenWidth < 767) {
        mobile = true;
        $('html').prop('id', 'mobileView');
        $('#initialCanvas, #mainCanvas, #canv2').children().empty();
        $(canvas1).empty();
        $(canvas2).empty();
        canvasContainer.width(0); //no canvas on mobile
        return;
    } else {
        if(screenWidth < 1200) {
            mobile = false;
            reduced = true;
            $('html').prop('id', 'reduced');
        } else {
            mobile = false;
            reduced = false;
            $('html').prop('id', '');
        }
    }

    //useful offset:
    var content_leftEdge = screenWidth * 0.1,
        content_rightEdge = screenWidth * 0.9;

    //summer event specific ...
    var content_everest_byline = $('#everest .event-byline').position();
    var dimension_everest_byline = $('#everest .event-byline').outerHeight();

    var lines = [];
    lines[0] = [];
    lines[0][0] = [0, screenHeight * 0.8];
    lines[0][1] = [content_leftEdge * 1.2, lines[0][0][1] + (content_leftEdge * 1.2)];
    lines[0][2] = [lines[0][1][0], screenHeight * 1.5];
    lines[0][3] = [content_leftEdge * 2, lines[0][2][1] + (content_leftEdge * 2  - lines[0][1][0])];

    lines[1] = [];
    lines[1][0] = [screenWidth * 0.05, screenHeight * 0.7];
    lines[1][1] = [lines[1][0][0], screenHeight * 1.1];
    lines[1][2] = [screenWidth * 0.2, lines[1][1][1] + screenWidth*0.2 - lines[1][0][0]];

    lines[2] = [];
    lines[2][0] = [0, content_everest_byline.top - (content_leftEdge * 0.2)];
    lines[2][1] = [content_leftEdge, lines[2][0][1]];
    lines[2][2] = [content_leftEdge * 1.2, content_everest_byline.top];


    if(mobile || reduced) {
        lines[0] = [];
        lines[1] = [];
    }
    //"canvas" setup
    //NB: I continually refer to this as a "canvas" despite it no longer being a canvas, so pardon the term use.
    //Ensure our sizes are identical on the two clones to allow for lining up multi-colored lines
    canvas1.width(screenWidth);
    canvas1.height($('html').height());

    canvas2.width(screenWidth);
    canvas2.height($('html').height());

    $(canvasContainer).height($('html').height());
    $(canvasContainer).width(screenWidth);

    highestScroll = 0;
    renderLine(canvas1, lines); //all lines
    renderLine(canvas2, lines); //all lines
    // renderLine(canvas1, [lines[0], lines[1], lines[2], lines[3]]); //top lines
}
function renderLine(parent, lines) {
    $(parent).empty(); //clear out all lines (vs modifying existing ones for simplicity)
    for(var i = 0; i < lines.length; i++) {
        var thisLine = lines[i];
        var goldColor = false;
        for(var j = 0; j < thisLine.length - 1; j++) {
            var firstPoint = thisLine[j];
            var secondPoint = thisLine[j+1];
            var line = $('<div class="generatedLine-container"><div class="generatedLine-line"></div></div>');
            //Generate a new line object from our first point -> second point
            var x_min = Math.min(firstPoint[0], secondPoint[0]),
                x_max = Math.max(firstPoint[0], secondPoint[0]),
                x_diff = x_max - x_min,
                x_delta = secondPoint[0] - firstPoint[0];
            var y_min = Math.min(firstPoint[1], secondPoint[1]),
                y_max = Math.max(firstPoint[1], secondPoint[1]),
                y_diff = y_max - y_min,
                y_delta = secondPoint[1] - firstPoint[1];
            line.css('top', (y_min+0)+'px')
                .css('left', (x_min+0)+'px')
                .css('height', Math.max(y_diff, 3)+'px')
                .css('width', Math.max(x_diff, 3)+'px')
                .attr('data-line-set', i)
                .attr('data-line-number', j);

            var inner = $('.generatedLine-line', line);
            if(goldColor)
                inner.css('background-color', 'var(--pinnacle-gold)');
            var desiredAngle = Math.atan2(y_delta, x_delta);
            var lineWidth = (((x_diff) ** 2 + (y_diff) ** 2)**(1/2));
            var translate = "";
            //translate if needed to allow max-width to appropriately control the line's size in the direction of motion
            if(Math.abs(desiredAngle - 2.35619) <= 0.1 || Math.abs(desiredAngle - Math.PI) <= 0.1)
                translate = "translate("+(x_diff)+"px, 0px) ";
            inner.width(lineWidth+'px').css('transform', translate+'rotate('+desiredAngle+'rad)');
            inner.css('max-width', lineWidth+'px');

            $(parent).append(line);
        }
    }
}
function renderButtons() {
    $('.pinnacle-btn').each(function() {
    	$e = $(this);
    	var message = $e.text();
    	$e.html(message);
        var w = $e.outerWidth();
        var h = $e.outerHeight();
        var strokeWidth = 4;
        var modifiedW = w + strokeWidth;
        var modifiedH = h + strokeWidth;
        $e.outerWidth(modifiedW);
        $e.outerHeight(modifiedH);
        //svg building!!
    	var points = [];
    	points[0] = [0, h*0.30];
    	points[1] = [h*0.30, 0];
    	points[2] = [w, 0];
    	points[3] = [w, h*0.70];
    	points[4] = [w-h*0.30, h];
    	points[5] = [0, h];
    	points[6] = [0, h*0.70];
    	var svg = "";
    	for(var i = 0; i < points.length; i++) {
    		var x = points[i][0]+strokeWidth/2;
    		var y = points[i][1]+strokeWidth/2;
    		if(i == 0) svg += "M "+x+" "+y+" ";
    		else	   svg += "L "+x+" "+y+" ";
        }
    	svg += "Z";
        arrow = " \
        <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"> \
            <path d=\"M10,2l9,10l-9,10h2l9-10L12,2H10z\"/> \
        </svg>";

        $e.html('<div class="btn-label">'+message+' '+arrow+'</div>');
    	$('<svg width="'+modifiedW+'px" height="'+modifiedH+'px"><path d="'+svg+'" stroke-width="'+strokeWidth+'"/></svg>').appendTo($e);
    });
}
function handleSub(e) {
    e.preventDefault();

    var name = $('#engagement-fn').val().trim();
    var email = $('#engagement-email').val().trim();
    if(name.length == 0 || email.length == 0)
        return;
    if(subscribeDisabled)
        return;
    subscribeDisabled = true;
    $('#engagement-fn, #engagement-email').prop('disabled', true);
    //submit, report errors to #updatedMsg.
    $.ajax('https://api.pinnacle.us.org/1.0/contacts', {
        type: 'post',
        data: JSON.stringify({"email": email, "name": name}),
        dataType: 'json',
        contentType: 'application/json'
    }).done(function() {
        $('#engagement-fn').val("");
        $('#engagement-email').val("");
        $('#updatedMsg').addClass("successful").text("Welcome to the mailing list!");
        subscribeDisabled = false;
        $('#engagement-fn').prop('disabled', false);
        $('#engagement-email').prop('disabled', false);
    }).fail(function(msg) {
        console.log(msg);
        var error = "Error: Please confirm your email address is accurate";
        if(msg.status == 409)
            error = "You're already on our list!";
        $('#updatedMsg').addClass("err").text(error);
        subscribeDisabled = false;
        $('#engagement-fn').prop('disabled', false);
        $('#engagement-email').prop('disabled', false);
    });
}
function handleBanner() {
    var consoleBanner = "";
    consoleBanner += ("  _______ _                  _                       _                   __   _                _         _   _                     \n");
    consoleBanner += (" |__   __| |                | |                     (_)                 / _| | |              | |       | | | |                    \n");
    consoleBanner += ("    | |  | |__   ___    ___ | |_   _ _ __ ___  _ __  _  ___ ___    ___ | |_  | |__   __ _  ___| | ____ _| |_| |__   ___  _ __  ___ \n");
    consoleBanner += ("    | |  | '_ \\ / _ \\  / _ \\| | | | | '_ ` _ \\| '_ \\| |/ __/ __|  / _ \\|  _| | '_ \\ / _` |/ __| |/ / _` | __| '_ \\ / _ \\| '_ \\/ __|\n");
    consoleBanner += ("    | |  | | | |  __/ | (_) | | |_| | | | | | | |_) | | (__\\__ \\ | (_) | |   | | | | (_| | (__|   | (_| | |_| | | | (_) | | | \\__ \\\n");
    consoleBanner += ("    |_|  |_| |_|\\___|  \\___/|_|\\__, |_| |_| |_| .__/|_|\\___|___/  \\___/|_|   |_| |_|\\__,_|\\___|_|\\_\\__,_|\\__|_| |_|\\___/|_| |_|___/\n");
    consoleBanner += ("                                __/ |         | |                                                                                  \n");
    consoleBanner += ("                               |___/          |_|                                                                                  ");
    console.log(consoleBanner);
    console.log("Peeking under the hood? We want you on our team! Apply now: http://hack.ms/P20-Team-Application");
}
