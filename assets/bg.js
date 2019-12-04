window.onbeforeunload = function () {
  window.scrollTo(0, 0); //for dev
}
var mobile = true;
var reduced = false;

(function(){
    var offsetMethod = jQuery.fn.offset;
    // Define overriding method.
    jQuery.fn.offset = function(){
        var offset = offsetMethod.apply( this, arguments );
        //Adjust given our ultrawide fix box ...
        var UWFix = offsetMethod.apply($('.ultrawide-capture'), arguments);
        var newOffset = {
            top: offset.top,
            left: offset.left - UWFix.left
        };
        return newOffset;
    }
})();
var highestScroll = 0;
$(function() {
    //polyfill for ios / safari - https://github.com/AlfonsoFilho/ClipPath
    $('.overflowTriangle').ClipPath('50% 0, 0 100%, 100% 100%');
    $('.linesCanvas-outside#mainCanvas').ClipPath('50% 100vh, 0% 160vh, 0% 100%, 100% 100%, 100% 160vh');
    updateLines();
    $(window).resize(function() {
        updateLines();
    });
    var initialScroll = false;
    $(window).scroll(function() {
        if(mobile)
            return;
        initialScroll = true;
        var scrollTop = $(window).scrollTop();
        var pageHeight = $('html').height();
        var screenHeight = $(window).height();
        var scrollPercent = (scrollTop / (pageHeight - screenHeight)) * 100;
        if(scrollPercent < 20) {
            var adj = 300 * scrollPercent / 20;
            $('#hero .inner').css('margin-top', 'calc(-8rem - '+adj+'px)');
        }
        console.log("Highest scroll:"+highestScroll+" current:"+scrollTop);
        if(highestScroll > scrollTop)
            return;

        if(scrollTop + screenHeight - $('.skyline').offset().top > 0 && $('#skyline_brdg').hasClass('off-left'))
            $('.skyline-component').removeClass('off-left').removeClass('off-right');
        highestScroll = scrollTop;
        if(scrollPercent >= 98) {
            $('.generatedLine-container[data-line-set="7"] > div').css('max-width', '1000px');
            return;
        }
        $('.generatedLine-line').each(function() {
            var $e = $(this);
            var $parent = $e.parent();
            if($e.data('rendered'))
                return true;

            var scrollDiff = scrollTop + 3*screenHeight/4 - $e.offset().top;
            var previousLineRendered = false
            var thisLineSet = parseInt($parent.data('line-set'));
            var thisLineNumber = parseInt($parent.data('line-number'));

            if(thisLineNumber > 0 && $('.generatedLine-container[data-line-set=\"'+thisLineSet+'\"][data-line-number=\"'+(thisLineNumber-1)+'\"] > div').data('rendered'))
                previousLineRendered = true;

            if(thisLineNumber == 0)
                previousLineRendered = true;

            if(scrollDiff < 0 || !previousLineRendered)
                return true;

            var startPosition;
            if($e.data('startPos'))
                startPosition = $e.data('startPos');
            else {
                startPosition = scrollTop;
                $e.data('startPos', startPosition);
            }

            var realWidth = $e.clone().css('max-width', 'none').width();
            var realBottomOffset = $parent.offset().top + $parent.height();
            var currentWidth = $e.width();
            console.log(realBottomOffset);
            if(Math.abs(currentWidth - realWidth) <= 0.5 || realBottomOffset - scrollTop < screenHeight*0.2) {
                $e.data('rendered', true).css('max-width', realWidth+'px');
                return;
            }
            var newWidth = (scrollTop-startPosition)*1.3;
            $e.css('max-width', newWidth+'px');
        });

        //$('.linesCanvas-inside').css('max-height', (scrollPercent * pageHeight)/100+'px');
    });
    setTimeout(function() {
        if(!initialScroll) {
            if($(window).height() > 650)
                $('#scrollDown-container').css('opacity', 1);
        }
    }, 3000)
});
function updateLines() {
    var screenHeight = Math.min($(window).height(), $('.ultrawide-capture').height());
    var screenWidth = Math.min($(window).width(), $('.ultrawide-capture').width());
    var canvasContainer = $('.linesCanvas-outside');
    var canvas1 = $('.linesCanvas-inside', canvasContainer[0]);
    var canvas2 = $('.linesCanvas-inside', canvasContainer[1]);
    canvasContainer.width(0);
    if(screenWidth < 767) {
        mobile = true;
        $('html').prop('id', 'mobileView');
        $('#initialCanvas, #mainCanvas').children().empty();
        $(canvas1).empty();
        $(canvas2).empty();
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
    var content_leftEdge = ($('.right-body').first().offset().left) * 0.9;
    var content_rightEdge = ($('.right-body').first().offset().left + $('.right-body').first().width()) * 1.1;
    //i'll clean this once the line positioning is finalized
    var lines = [];
    //useful offsets:
    var OF_description_inner = $('#description .inner').offset(),
        OF_schedule_h2 = $('#schedule h2').offset(),
        OF_description_h2 = $('#description h2').offset(),
        OF_last_tl = $('.tl-ele').last().offset(),
        OF_scheduleSection = $('#schedule').offset(),
        OF_sponsors = $('#sponsors').offset();
    var H_description_inner = $('#description .inner').height(),
        H_schedule_h2 = $('#schedule h2').height(),
        H_description_h2 = $('#description h2').height(),
        H_sponsors = $('#sponsors').height();

    lines[0] = [];
    lines[0][0] = [0, screenHeight * 0.8];
    lines[0][1] = [OF_description_inner.left*0.8, lines[0][0][1] + (OF_description_inner.left*0.8)];
    lines[0][2] = [lines[0][1][0], OF_description_inner.top + H_description_inner*1.1];

    lines[1] = [];
    lines[1][0] = [screenWidth * 0.05, screenHeight * 0.7];
    lines[1][1] = [lines[1][0][0], OF_description_inner.top + H_description_inner * 0.7];
    lines[1][2] = [lines[1][0][0] + (OF_schedule_h2.top + H_schedule_h2) - (lines[1][1][1]), OF_schedule_h2.top + H_schedule_h2];
    lines[1][3] = [0, lines[1][2][1] + lines[1][2][0]];

    lines[2] = [];
    lines[2][0] = [screenWidth, screenHeight * 0.8];
    lines[2][1] = [content_rightEdge, (lines[2][0][1] + (lines[2][0][0] - content_rightEdge))];
    lines[2][2] = [content_rightEdge, OF_description_h2.top + H_description_h2 - content_rightEdge*0.15];
    lines[2][3] = [content_rightEdge * 0.85, lines[2][2][1] + content_rightEdge*0.15];
    lines[2][4] = [content_rightEdge * 0.7, lines[2][3][1]];

    lines[3] = [];
    lines[3][0] = [screenWidth * 0.95, screenHeight * 0.75];
    lines[3][1] = [lines[3][0][0], OF_schedule_h2.top];
    lines[3][2] = [screenWidth, (lines[3][1][1] + (screenWidth * 0.05))];

    lines[4] = [];
    lines[4][0] = [content_rightEdge * 0.7, OF_description_h2.top];
    lines[4][1] = [content_rightEdge, lines[4][0][1]];
    lines[4][2] = [content_rightEdge, OF_description_inner.top + H_description_inner/2];
    lines[4][3] = [screenWidth, lines[4][2][1] + screenWidth - lines[4][2][0]];

    lines[5] = [];
    lines[5][0] = [content_leftEdge * 0.5, lines[1][2][1]+30];
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
        lines[0] = [];
        lines[3] = [];
        lines[5] = [];
        lines[6] = [];
    }
    var g = OF_schedule_h2.left + $('#schedule h2').width()*1.3;
    lines[1][1] = [lines[1][0][0], OF_schedule_h2.top + H_schedule_h2/2 - (g - lines[1][1][0])];
    lines[1][2] = [g, (g - lines[1][1][0]) + lines[1][1][1]];
    lines[1][3] = [0, lines[1][2][0] + lines[1][2][1]];

    //canvas setup

    canvas1.width(screenWidth);
    canvas1.height($('html').height());
    canvas2.width(screenWidth);
    canvas2.height($('html').height());

    $(canvasContainer).height($('html').height());
    $(canvasContainer).width(screenWidth);
    renderLine(canvas2, lines); //all lines
    renderLine(canvas1, [lines[0], lines[1], lines[2], lines[3]]); //top lines
}
function renderLine(parent, lines) {
    $(parent).empty();
    for(var i = 0; i < lines.length; i++) {
        var thisLine = lines[i];
        var goldColor = false;
        if(i == 7)
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
            if(Math.abs(desiredAngle - 2.35619) <= 0.1 || Math.abs(desiredAngle - Math.PI) <= 0.1)
                translate = "translate("+(x_diff)+"px, 0px) ";
            inner.width(lineWidth+'px').css('transform', translate+'rotate('+desiredAngle+'rad)');
            $(parent).append(line);
        }
    }
}
