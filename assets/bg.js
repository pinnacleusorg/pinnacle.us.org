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
    detectScreenSize();
    updateLines();
    renderButtons();
    $('html').removeClass('preload');
    $(window).resize(function() {
        detectScreenSize();
        updateLines();
    });

    $('#updatedbtn-early, #updatedbtn-end').click(function(e) {
        var ele = $(this);
        handleSub(e, ele);
    })

    $(window).scroll(function() {
        if(mobile)
            return;
        processScroll();
    });
    //TODO: probably reconcile these
    //transform animation
    $('#detailbtn').click(function(e) {
        //open details ...
        e.preventDefault();
        var trueHeight = $('#details').css('visibility', 'hidden').css('max-height', 'none').height();
        $('#details').css('visibility', 'visible').css('max-height', '0px').show();
        $('#details').css('max-height', trueHeight + "px");
        $('#detailbtn').css('transform', 'scaleY(0)');
        $('#sponsors > .inner').css('padding-top', "calc(10rem - "+trueHeight+"px)");
    });
    //fade animation
    $('.event-body .pinnacle-btn-details').click(function(e) {
        e.preventDefault();
        var $details = $(this).next();
        var btnHeight = $(this).height();
        var trueHeight = $details.css('visibility', 'hidden').css('max-height', 'none').height();
        $details.css('visibility', 'visible').css('max-height', '0px').show();
        $details.css('max-height', trueHeight + "px");
        $(this).css('opacity', '0').css('pointer-events', 'none');
        $details.css('margin-top', "-"+btnHeight+"px");
        $(this).closest('.summer-event').addClass('descOpen');
    });
    $('.event-body .split-button .pinnacle-btn-details').click(function(e) {
        e.preventDefault();
        var $details = $(this).closest('.split-button').next();
        var btnHeight = $(this).height();
        var trueHeight = $details.css('visibility', 'hidden').css('max-height', 'none').height();
        $details.css('visibility', 'visible').css('max-height', '0px').show();
        $details.css('max-height', trueHeight + "px");
        $(this).css('opacity', '0').css('pointer-events', 'none');
        $details.css('margin-top', "10px");
        $(this).closest('.split-button-side').css("flex-basis", 0).css('width', 0);
        $(this).closest('.summer-event').addClass('descOpen');
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

    //useful offset:
    var content_leftEdge = screenWidth * 0.1,
        content_rightEdge = screenWidth * 0.9;

    //summer event specific ...
    var content_everest_byline = $('#everest .event-byline').position();
    var dimension_everest_byline = $('#everest .event-byline').outerHeight();

    var content_fuji_logo = $('#fuji-logo').position();
    var dimension_fuji_logo = $('#fuji-logo').outerHeight();

    var content_fuji_byline = $('#fuji .event-descriptor').position();
    var dimension_fuji_byline = $('#fuji .event-descriptor').outerHeight();

    var content_olympus_logo = $('#olympus-logo').position();
    var dimension_olympus_logo = $('#olympus-logo').outerHeight();

    var content_olympus_byline = $('#olympus .event-byline').position();
    var dimension_olympus_byline = $('#olympus .event-byline').outerHeight();

    var content_footer = $('footer').position();


    var bambooWidth = 40;
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

    //Everest Lines
    lines[2] = [];
    lines[2][2] = [content_leftEdge * 3, content_everest_byline.top + dimension_everest_byline];
    lines[2][1] = [content_leftEdge * 2, lines[2][2][1] - content_leftEdge];
    lines[2][0] = [0, lines[2][1][1]];

    lines[3] = [];
    lines[3][0] = [0, lines[2][0][1] - 150];
    lines[3][1] = [content_leftEdge * 2, lines[3][0][1] + content_leftEdge * 2];
    lines[3][2] = [lines[3][1][0], $('#everest').position().top + $('#everest').outerHeight() * 0.9];

    //Fuji Lines -- where things get dicey
    //pick up on line 3 ...
    lines[4] = [];
    lines[4][0] = [lines[3][2][0], lines[3][2][1]];
    lines[4][1] = [lines[4][0][0] + bambooWidth, lines[4][0][1]];
    lines[4][2] = [lines[4][1][0], content_fuji_logo.top + dimension_fuji_logo / 2];
    lines[4][3] = [lines[4][2][0] - bambooWidth, lines[4][2][1] + bambooWidth];

    lines[5] = [];
    lines[5][0] = [lines[3][2][0], lines[3][2][1] + bambooWidth * 2];
    lines[5][1] = [lines[5][0][0], lines[4][3][1]];

    lines[6] = [];
    lines[6][0] = [lines[5][0][0] - bambooWidth, lines[5][0][1] + bambooWidth];
    lines[6][1] = [lines[6][0][0] + bambooWidth, lines[6][0][1] + bambooWidth];

    lines[7] = [];
    lines[7][0] = [lines[4][1][0] + bambooWidth, lines[4][1][1] - bambooWidth * 5];
    lines[7][1] = [lines[7][0][0] - bambooWidth, lines[7][0][1] + bambooWidth];
    lines[7][2] = [lines[7][1][0], lines[7][1][1] + bambooWidth * 3];

    lines[8] = [];
    lines[8][0] = [lines[4][1][0] - bambooWidth * 3, lines[4][1][1] - bambooWidth * 2];
    lines[8][1] = [lines[8][0][0], content_fuji_byline.top + dimension_fuji_byline];

    lines[9] = [];
    lines[9][0] = [lines[8][0][0] + bambooWidth, content_fuji_logo.top];
    lines[9][1] = [lines[9][0][0] - bambooWidth, lines[9][0][1] + bambooWidth];

    lines[10] = [];
    lines[10][0] = [lines[8][0][0] - bambooWidth * 2, lines[5][0][1]];
    lines[10][1] = [lines[10][0][0], lines[4][2][1]];

    lines[11] = [];
    lines[11][0] = [lines[10][0][0], lines[10][0][1]];
    lines[11][1] = [lines[11][0][0] - bambooWidth, lines[10][0][1] + bambooWidth];
    lines[11][2] = [lines[11][1][0], content_fuji_byline.top + dimension_fuji_byline / 2];
    lines[11][3] = [0, lines[11][2][1]];

    lines[12] = [];
    lines[12][0] = [lines[10][0][0] + bambooWidth, lines[10][1][1] + bambooWidth/10];
    lines[12][1] = [lines[12][0][0] - bambooWidth, lines[12][0][1] + bambooWidth];
    lines[12][2] = [lines[12][1][0], $('#fuji').position().top + $('#fuji').outerHeight() * 0.8];
    lines[12][3] = [0, lines[12][2][1] + lines[12][1][0]];

    lines[13] = [];
    lines[13][0] = [lines[8][0][0] - bambooWidth, content_fuji_logo.top + dimension_fuji_logo];
    lines[13][1] = [lines[13][0][0] + bambooWidth, lines[13][0][1] + bambooWidth];

    lines[14] = [];
    lines[14][0] = [lines[11][1][0] - bambooWidth, content_fuji_logo.top];
    lines[14][1] = [lines[14][0][0] + bambooWidth, lines[14][0][1] + bambooWidth];

    //top lines mirrored (0, 1)
    lines[15] = [];
    lines[15][0] = [screenWidth, screenHeight * 0.8];
    lines[15][1] = [screenWidth - content_leftEdge * 1.2, lines[0][1][1]];
    lines[15][2] = [lines[15][1][0], lines[0][2][1]];
    lines[15][3] = [screenWidth - content_leftEdge * 2, lines[0][3][1]];

    lines[16] = [];
    lines[16][0] = [screenWidth * 0.95, lines[1][0][1]];
    lines[16][1] = [lines[16][0][0], lines[1][1][1]];
    lines[16][2] = [screenWidth * 0.8, lines[1][2][1]];

    //Olympus Lines
    var pillarWidth = bambooWidth * 2;
    lines[17] = [];
    lines[17][0] = [lines[8][0][0] + pillarWidth, content_olympus_logo.top];
    lines[17][1] = [0, lines[17][0][1]];

    lines[18] = [];
    lines[18][0] = [screenWidth - lines[17][0][0], lines[17][0][1]];
    lines[18][1] = [screenWidth, lines[17][0][1]];

    lines[19] = [];
    lines[19][0] = [lines[8][0][0], content_olympus_logo.top - bambooWidth];
    lines[19][1] = [lines[19][0][0], content_olympus_byline.top + dimension_olympus_byline/2];

    lines[20] = [];
    lines[20][0] = [lines[19][0][0] - pillarWidth, lines[17][0][1]];
    lines[20][1] = [lines[20][0][0], content_olympus_logo.top + 3*dimension_olympus_logo/4];

    lines[21] = [];
    lines[21][0] = [lines[20][0][0] - pillarWidth, lines[17][0][1]];
    lines[21][1] = [lines[21][0][0], $('#olympus').position().top + $('#olympus').outerHeight()];
    lines[21][2] = [lines[17][0][0], lines[21][1][1] + (lines[17][0][0] - lines[21][0][0])];
    lines[21][3] = [lines[21][2][0], content_footer.top+40];

    lines[22] = [];
    lines[22][1] = [screenWidth - lines[8][0][0], content_olympus_logo.top - bambooWidth];
    lines[22][0] = [screenWidth, lines[22][1][1] - lines[8][0][0]];
    lines[22][2] = [lines[22][1][0], lines[19][1][1]];

    lines[23] = [];
    lines[23][0] = [lines[22][1][0] + pillarWidth, lines[17][0][1]];
    lines[23][1] = [lines[23][0][0], content_olympus_logo.top + 3*dimension_olympus_logo/4];

    lines[24] = [];
    lines[24][0] = [lines[23][0][0] + pillarWidth, lines[17][0][1]];
    lines[24][1] = [lines[24][0][0], lines[21][1][1]];
    lines[24][2] = [screenWidth - lines[17][0][0], lines[24][1][1] + lines[24][1][0] - (screenWidth - lines[17][0][0])];
    lines[24][3] = [lines[24][2][0], content_footer.top+40];

    lines[25] = [];
    lines[25][0] = [lines[17][0][0], lines[24][1][1] - pillarWidth];
    lines[25][1] = [0, lines[25][0][1]];

    lines[26] = [];
    lines[26][0] = [screenWidth - lines[25][0][0], lines[25][0][1]];
    lines[26][1] = [screenWidth, lines[26][0][1]];

    lines[27] = [];
    lines[27][1] = [lines[8][0][0], lines[25][0][1]];
    lines[27][0] = [lines[27][1][0], lines[26][0][1] - pillarWidth * 2];

    lines[28] = [];
    lines[28][1] = [lines[8][0][0] - pillarWidth, lines[25][0][1]];
    lines[28][0] = [lines[28][1][0], lines[26][0][1] - pillarWidth * 4];

    lines[29] = [];
    lines[29][1] = [screenWidth - lines[8][0][0], lines[25][0][1]];
    lines[29][0] = [lines[29][1][0], lines[26][0][1] - pillarWidth * 2];

    lines[30] = [];
    lines[30][1] = [screenWidth - lines[8][0][0] + pillarWidth, lines[25][0][1]];
    lines[30][0] = [lines[30][1][0], lines[26][0][1] - pillarWidth * 4];



    if(mobile || reduced) {
        //to be revisited
        for(var i = 0; i < lines.length; i++) {
            lines[i] = [];
        }
    }
    //"canvas" setup
    //NB: I continually refer to this as a "canvas" despite it no longer being a canvas, so pardon the term use.
    canvas1.width(screenWidth);
    canvas1.height($('html').height()+50);

    canvas2.width(screenWidth);
    canvas2.height($('html').height());

    $(canvasContainer).height($('html').height()+50);
    $(canvasContainer).width(screenWidth);

    highestScroll = 0;
    renderLine(canvas1, lines); //all lines
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
function handleSub(e, $ele) {
    e.preventDefault();

    var $card = $ele.closest('.card');
    var $name = $('[name="engagement-fn"]', $card);
    var $email = $('[name="engagement-email"]', $card);
    var $combined = $name.add($email);
    var $msg = $('.updatedMsg', $card);

    var name = $name.val().trim();
    var email = $email.val().trim();
    if(name.length == 0 || email.length == 0)
        return;
    if(subscribeDisabled)
        return;
    subscribeDisabled = true;
    $combined.prop('disabled', true);
    //submit, report errors to #updatedMsg.
    $.ajax('https://api.pinnacle.us.org/1.0/contacts', {
        type: 'post',
        data: JSON.stringify({"email": email, "name": name}),
        dataType: 'json',
        contentType: 'application/json'
    }).done(function() {
        $combined.val("");
        $msg.addClass("successful").text("Welcome to the mailing list!");
        subscribeDisabled = false;
        $combined.prop('disabled', false);
    }).fail(function(msg) {
        console.log(msg);
        var error = "Error: Please confirm your email address is accurate";
        if(msg.status == 409)
            error = "You're already on our list!";
        $msg.addClass("err").text(error);
        subscribeDisabled = false;
        $combined.prop('disabled', false);
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
function detectScreenSize() {
    var screenWidth = Math.min($(window).width(), $('.ultrawide-capture').width());
    //Detect mobile form factor (no lines), or reduced lines form factor (reduced=true)
    var canvasContainer = $('.linesCanvas-outside');
    var canvas1 = $('.linesCanvas-inside', canvasContainer[0]);
    var canvas2 = $('.linesCanvas-inside', canvasContainer[1]);
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

    //set event panels to be full height including un-expanded text ...
    $('.summer-event').each(function() {
        if($(this).hasClass('descOpen'))
            return true;
        var $ele = $(this);
        //expand to get real height ...
        $('.event-detail-long', $ele).css('max-height', 'none');
        $ele.css('min-height', '0'); //TODO: fix infinite zoooooom

        var trueHeight = $ele.outerHeight()// - $('.pinnacle-btn', $ele).outerHeight();
        $('.event-detail-long', $ele).css('max-height', '0');
        $ele.css('min-height', 'calc('+trueHeight+'px + 5rem)');
    })
}
