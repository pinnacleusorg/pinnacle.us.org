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
$(function() {
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
// Polyfill for ios / safari - https://github.com/AlfonsoFilho/ClipPath
    $('.overflowTriangle').ClipPath('50% 0, 0 100%, 100% 100%');
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if(isSafari) {
        $('.linesCanvas-outside#mainCanvas').ClipPath('50% 100vh, 0% 160vh, 0% 100%, 100% 100%, 100% 160vh');
    }
// Update/Generate Lines
    updateLines();
    renderButtons();
    spawnEyecatchers();
    $(window).resize(function() {
        updateLines();
        $('.carousel-inner').animate({scrollLeft: '0px'}, 400);
    });
    var subscribeDisabled = false;
    $('#updatedbtn').click(function(e) {
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
        })
    })

// Handle Scrolling Animation
    $(window).scroll(function() {
        if(mobile)
            return;
        processScroll();
    });
    // $('#pre-description .scroll-container').scroll(function() {
    //     if(mobile) return;
    //     processEyecatchers();
    // })

// Prompt user to scroll if they idle at top.
    setTimeout(function() {
        if(!initialScroll) {
            if($(window).height() > 650)
                $('#scrollDown-container').css('opacity', 1);
        }
    }, 3000);
    var isAnimating = false;
    $('.carousel-nav').click(function() {
        if(isAnimating) return;
        isAnimating = true;
        var direction = 1;
        if($(this).hasClass('mirrorflip')) direction = -1;
        var $inner = $('.carousel-inner');
        var boxSize = $inner.width();
        var offset = boxSize / 5 * direction;
        var currentPosition = $inner.scrollLeft();
        $(this).addClass("clicked");
        var holdEle = this;
        setTimeout(function(){
            $(holdEle).removeClass("clicked");
        }, 500)
        $inner.animate({scrollLeft: currentPosition+offset+'px'}, 800, function(){
            isAnimating = false;
        });
        //detect overscroll
        var firstElement = $('.carousel-first');
        var lastElement = $('.carousel-last');
        if(currentPosition == 0 && direction == -1) {
            isAnimating = false;
            //useless scrollTop() to force refresh after removing class
            $inner.removeClass('bounceRightAnimation bounceLeftAnimation').scrollTop();
            $inner.addClass('bounceRightAnimation');
        }
        else if(currentPosition > (boxSize / 5 * $('.carousel-element').length) - boxSize - 10 && direction == 1) {
            isAnimating = false;
            $inner.removeClass('bounceRightAnimation bounceLeftAnimation').scrollTop();
            $inner.addClass('bounceLeftAnimation');
        }
    });
    $('.carousel-image').click(function() {
        $(this).parent().find('a')[0].click();
    })
});
function processScroll() {
    initialScroll = true;
    //CONS:
    var scrollTop = $(window).scrollTop();
    var pageHeight = $('html').height();
    var screenHeight = $(window).height();
    var scrollPercent = (scrollTop / (pageHeight - screenHeight)) * 100;

    // //Handle eyecatchers scroll freedom ...
    // var $eyecatcher = $('#pre-description .scroll-container');
    // var eyecatcherTop = $eyecatcher.offset().top;
    // var eyecatcherHeight = $eyecatcher.height();
    // var eyecatcherIntHeight = $('.eyecatchers', $eyecatcher).height();
    // if(scrollTop >= eyecatcherTop-20 && scrollTop+screenHeight-20 <= eyecatcherTop+eyecatcherHeight) {
    //     //our window is centered -- unlock ...
    //     console.log("Eyecatchers unlocked at top");
    //     $eyecatcher.addClass('scroll-enabled');
    //     $('body').addClass('lockScroll');
    //     $(window).scrollTop(eyecatcherTop);
    // } else {
    //     //we're not centered -- lock!
    //     console.log("Eyecatchers locked");
    //     // $eyecatcher.addClass('scroll-enabled').scrollTop(0);
    //     $eyecatcher.removeClass('scroll-enabled');
    //     $('body').removeClass('lockScroll');
    // }

    //Parallax logo at top of scroll
    if(scrollPercent < 20) {
        var adj = 150 * scrollPercent / 20;
        $('#hero .inner').css('margin-top', 'calc(-8rem - '+adj+'px)');
    }
    if(highestScroll > scrollTop)
        return;
    //If we've reached skyline portion, slide it in
    if(scrollTop + screenHeight - $('.skyline').offset().top > 0 && $('#skyline_goldengate').hasClass('off-left'))
        $('.skyline-component').removeClass('off-left').removeClass('off-right');
    highestScroll = scrollTop;
    //If we've reached the bottom, animate the last lines
    if(scrollPercent >= 98) {
        $('.generatedLine-container[data-line-set="7"] > div').css('max-width', '1000px');
        return;
    }
    $('.generatedLine-line').each(function() {
        var $e = $(this);
        if($e.data('rendered'))
            return true;
        //CONS:
        var $parent = $e.parent();
        var scrollDiff = scrollTop + 3*screenHeight/4 - $e.offset().top;
        var previousLineRendered = false
        var thisLineSet = parseInt($parent.data('line-set'));
        var thisLineNumber = parseInt($parent.data('line-number'));
        var previousLine = $('.generatedLine-container[data-line-set=\"'+thisLineSet+'\"][data-line-number=\"'+(thisLineNumber-1)+'\"] > div');
        var startPosition;

        if(thisLineNumber == 0 || (thisLineNumber > 0 && previousLine.data('rendered')))
            previousLineRendered = true;
        //Skip this line if the previous line in the set isn't done yet, or if we haven't scrolled to it
        if(scrollDiff < 0 || !previousLineRendered)
            return true;
        //Mark where on scrollTop we start this line at, so the animation jumps a consistent amount as we scroll forward
        if($e.data('startPos'))
            startPosition = $e.data('startPos');
        else {
            startPosition = scrollTop;
            $e.data('startPos', startPosition);
        }
        //Clone to find the real line width if it were not limited
        var realWidth = $e.clone().css('max-width', 'none').width();
        var realBottomOffset = $parent.offset().top + $parent.height();
        var currentWidth = $e.width();
        //If we're close to the real width, finish the line and mark it complete
        //OR: if the line is falling off the screen, just mark it complete so we can keep the animation on-screen.
        if(Math.abs(currentWidth - realWidth) <= 0.5 || realBottomOffset - scrollTop < screenHeight*0.2) {
            $e.data('rendered', true).css('max-width', realWidth+'px');
            return;
        }
        var newWidth = (scrollTop-startPosition)*1.3;
        $e.css('max-width', newWidth+'px');
    });
}
function processEyecatchers() {
    // ...
    var $ele = $('#pre-description .scroll-container');
    var top = $ele.offset().top;
    var height = $ele.height();
    var interiorHeight = $('.eyecatchers', $ele).height();
    var scrollPosition = $ele.scrollTop();
    console.log("eyecatchers scroll at "+scrollPosition);
    if(scrollPosition == 0) {
        console.log("unlock @ top of scroll ...");
        $ele.removeClass('scroll-enabled');
        $('body').removeClass('lockScroll');
        //unlock @ top of scroll ...
    } else if(scrollPosition == interiorHeight - height) {
        console.log("unlock @ bottom of scroll");
        $ele.removeClass('scroll-enabled');
        $('body').removeClass('lockScroll');
        // $(window).scrollTop(eyecatcherTop+eyecatcherHeight);

    }
}
function spawnEyecatchers() {
    //gsap ...
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#pre-description", {
        scrollTrigger: {
            trigger: "#pre-description",
            scrub: true,
            pin: true,
            start: "center center",
            end: "bottom -400%",
            toggleClass: "active",
            ease: "none",
            markers: false
        }
    });
    //fade  out
    gsap.to("#prestige", {
        scrollTrigger: {
            trigger: "#prestige",
            scrub: true,
            start: "center center",
            end: "center -100%",
            toggleClass: "fadeOut",
            ease: "none",
            markers: true
        },
        opacity: 0
    });
    //fade sect2 in
    gsap.to("#fame", {
        scrollTrigger: {
            trigger: "#fame",
            scrub: true,
            start: "center -100%",
            end: "center -200%",
            toggleClass: "fadeIn",
            ease: "none",
            markers: true
        },
        opacity: 1
    });
}
function updateLines() {
    //CONS:
    var screenHeight = Math.min($(window).height(), $('.ultrawide-capture').height());
    var screenWidth = Math.min($(window).width(), $('.ultrawide-capture').width());
    var canvasContainer = $('.linesCanvas-outside');
    var canvas1 = $('.linesCanvas-inside', canvasContainer[0]);
    var canvas2 = $('.linesCanvas-inside', canvasContainer[1]);
    //Detect mobile form factor (no lines), or reduced lines form factor (reduced=true)
    if(screenWidth < 767) {
        mobile = true;
        $('html').prop('id', 'mobileView');
        $('#initialCanvas, #mainCanvas').children().empty();
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
    return;
    //useful offsets:
    var content_leftEdge = ($('.right-body').first().offset().left) * 0.9,
        content_rightEdge = ($('.right-body').first().offset().left + $('.right-body').first().width()) * 1.1;

    var OF_description_inner = $('#description .inner').offset(),
        OF_carousel_h2 = $('#carousel h2').offset(),
        OF_schedule_h2 = $('#schedule h2').offset(),
        OF_description_h2 = $('#description h2').offset(),
        OF_last_tl = $('.tl-ele').last().offset(),
        OF_scheduleSection = $('#schedule').offset(),
        OF_sponsors = $('#sponsors').offset();

    var H_description_inner = $('#description .inner').height(),
        H_schedule_h2 = $('#schedule h2').height(),
        H_description_h2 = $('#description h2').height(),
        H_sponsors = $('#sponsors').height();

    var lines = [];
    lines[0] = [];
    lines[0][0] = [0, screenHeight * 0.8];
    lines[0][1] = [OF_description_inner.left*0.8, lines[0][0][1] + (OF_description_inner.left*0.8)];
    lines[0][2] = [lines[0][1][0], OF_description_inner.top + H_description_inner*1.1];
    lines[0][3] = [0, lines[0][1][0] + lines[0][2][1]];

    var g = OF_schedule_h2.left + $('#schedule h2').width()*1.5;
    lines[1] = [];
    lines[1][0] = [screenWidth * 0.05, screenHeight * 0.7];
    lines[1][1] = [lines[1][0][0], OF_schedule_h2.top + H_schedule_h2/2 - (g - lines[1][0][0])];
    lines[1][2] = [g, (g - lines[1][1][0]) + lines[1][1][1]];
    lines[1][3] = [0, lines[1][2][0] + lines[1][2][1]];

    lines[2] = [];
    lines[2][0] = [screenWidth, screenHeight * 0.8];
    lines[2][1] = [content_rightEdge, (lines[2][0][1] + (lines[2][0][0] - content_rightEdge))];
    lines[2][2] = [content_rightEdge, OF_description_h2.top + H_description_h2 - content_rightEdge*0.15];
    lines[2][3] = [content_rightEdge * 0.85, lines[2][2][1] + content_rightEdge*0.15];
    lines[2][4] = [content_rightEdge * 0.7, lines[2][3][1]];

    lines[3] = [];
    lines[3][0] = [screenWidth * 0.95, screenHeight * 0.75];
    lines[3][1] = [lines[3][0][0], OF_carousel_h2.top];
    lines[3][2] = [screenWidth, (lines[3][1][1] + (screenWidth * 0.05))];

    lines[4] = [];
    lines[4][0] = [content_rightEdge * 0.7, OF_description_h2.top];
    lines[4][1] = [content_rightEdge, lines[4][0][1]];
    lines[4][2] = [content_rightEdge, OF_description_inner.top + H_description_inner/2];
    lines[4][3] = [screenWidth, lines[4][2][1] + screenWidth - lines[4][2][0]];

    lines[5] = [];
    lines[5][0] = [content_leftEdge * 0.5, lines[1][2][1]+75];
    lines[5][1] = [screenWidth * 0.05, (lines[5][0][0] - screenWidth * 0.05) + lines[5][0][1]];
    lines[5][2] = [screenWidth * 0.05, OF_last_tl.top+50];
    lines[5][3] = [0, lines[5][2][1]+lines[5][2][0]];

    lines[6] = [];
    lines[6][0] = [content_rightEdge * 0.9, OF_scheduleSection.top];
    lines[6][1] = [screenWidth * 0.95, (OF_scheduleSection.top + (screenWidth * 0.95 - content_rightEdge * 0.9))];
    lines[6][2] = [screenWidth * 0.95, OF_last_tl.top-50];
    lines[6][3] = [screenWidth, lines[6][2][1]+(screenWidth - lines[6][2][0])];

    lines[7] = [];
    lines[7][0] = [screenWidth, OF_sponsors.top + 100];
    lines[7][1] = [content_rightEdge, (OF_sponsors.top + 100 + (screenWidth-content_rightEdge))];
    lines[7][2] = [content_rightEdge, OF_sponsors.top + H_sponsors*0.9];
    lines[7][3] = [screenWidth, OF_sponsors.top + H_sponsors*0.9];
    if(reduced) {
        //remove some lines to draw when on reduced screen size
        lines[0] = [];
        lines[3] = [];
        lines[5] = [];
        lines[6] = [];
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
    renderLine(canvas2, lines); //all lines
    renderLine(canvas1, [lines[0], lines[1], lines[2], lines[3]]); //top lines
}
function renderLine(parent, lines) {
    $(parent).empty(); //clear out all lines (vs modifying existing ones for simplicity)
    for(var i = 0; i < lines.length; i++) {
        var thisLine = lines[i];
        var goldColor = false;
        if(i == 7) //sponsor section line is gold.
            goldColor = true;
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
