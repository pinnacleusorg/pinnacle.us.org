window.onbeforeunload = function () {
  window.scrollTo(0, 0); //for dev
}
var mobile = true;
var reduced = false;

(function(){
    var offsetMethod = jQuery.fn.offset;
    // Define overriding method.
    jQuery.fn.offset = function(){
        console.log("New offset");
        console.log(this);
        var offset = offsetMethod.apply( this, arguments );
        console.log(offset);
        //Adjust given our ultrawide fix box ...
        var UWFix = offsetMethod.apply($('.ultrawide-capture'), arguments);
        var newOffset = {
            top: offset.top,
            left: offset.left - UWFix.left
        };
        console.log("Original offset" +offset);
        console.log("Adjusted offset" +newOffset);
        return newOffset;
    }
})();
$(function() {
    //polyfill for ios / safari - https://github.com/AlfonsoFilho/ClipPath
    $('.overflowTriangle').ClipPath('50% 0, 0 100%, 100% 100%');
    updateLines();
    $(window).resize(function() {
        updateLines();
    });
    var initialScroll = false;
    var animationFinished = false;
    var highestScroll = 0;
    $(window).scroll(function() {
        if(mobile)
            return; //don't scrollspy on mobile!!
        initialScroll = true;
        //get scroll percentage
        var scrollTop = $(window).scrollTop();
        var pageHeight = $('html').height();
        var screenHeight = $(window).height();

        var scrollPercent = (scrollTop / (pageHeight - screenHeight)) * 100;
        //at the top of the canvas, move up the logo a tiny bit with scroll
        if(scrollPercent < 20) {
            var adj = 300 * scrollPercent / 20;
            $('#hero .inner').css('margin-top', 'calc(-8rem - '+adj+'px)');
        }
        if(animationFinished)
            return;
        if(highestScroll > scrollPercent)
            return; //don't backtrack animation
        if(highestScroll > 60 && $('#skyline_brdg').hasClass('off-left'))
            $('.skyline-component').removeClass('off-left').removeClass('off-right');
        highestScroll = scrollPercent;
        console.log("Highest scroll:" + highestScroll);
        scrollPercent = scrollPercent.toFixed(0);
        $('canvas').css('clip-path', 'polygon(0 0, 100% 0, 100% '+scrollPercent+'%, 0 '+scrollPercent+'%)');
    });
    setTimeout(function() {
        if(!initialScroll) {
            $('#scrollDown-container').css('opacity', 1);
        }
    }, 3000)
});
function updateLines() {
    var screenHeight = Math.min($(window).height(), $('.ultrawide-capture').height());
    var screenWidth = Math.min($(window).width(), $('.ultrawide-capture').width());
    if(screenWidth < 767) {
        mobile = true;
        $('html').prop('id', 'mobileView');
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
    lines[0] = [];
    lines[0][0] = [0, screenHeight * 0.8];
    lines[0][1] = [$('#description .inner').offset().left*0.8, lines[0][0][1] + ($('#description .inner').offset().left*0.8)];
    lines[0][2] = [lines[0][1][0], $('#description .inner').offset().top + $('#description .inner').height()*1.1];

    lines[1] = [];
    lines[1][0] = [screenWidth * 0.05, screenHeight * 0.7];
    lines[1][1] = [lines[1][0][0], $('#description .inner').offset().top + $('#description .inner').height() * 0.7];
    lines[1][2] = [lines[1][0][0] + ($('#schedule h2').offset().top + $('#schedule h2').height()) - (lines[1][1][1]), $('#schedule h2').offset().top + $('#schedule h2').height()];
    lines[1][3] = [0, $('#schedule h2').offset().top + $('#schedule h2').height() + (screenWidth * 0.05 + ($('#schedule h2').offset().top + $('#schedule h2').height()) - ($('#description .inner').offset().top + $('#description .inner').height() * 0.7))];

    lines[2] = [];
    lines[2][0] = [screenWidth, screenHeight * 0.8];
    lines[2][1] = [content_rightEdge, (screenHeight * 0.8 + (screenWidth - content_rightEdge))];
    lines[2][2] = [content_rightEdge, $('#description h2').offset().top + $('#description h2').height() - content_rightEdge*0.15];
    lines[2][3] = [content_rightEdge * 0.85, $('#description h2').offset().top + $('#description h2').height()];
    lines[2][4] = [content_rightEdge * 0.7, $('#description h2').offset().top + $('#description h2').height()];

    lines[3] = [];
    lines[3][0] = [screenWidth * 0.95, screenHeight * 0.75];
    lines[3][1] = [screenWidth * 0.95, $('#schedule h2').offset().top];
    lines[3][2] = [screenWidth, ($('#schedule h2').offset().top + (screenWidth * 0.05))];

    lines[4] = [];
    lines[4][0] = [content_rightEdge * 0.7, $('#description h2').offset().top];
    lines[4][1] = [content_rightEdge, $('#description h2').offset().top];
    lines[4][2] = [content_rightEdge, $('#description .inner').offset().top + $('#description .inner').height()/2];
    lines[4][3] = [screenWidth, ($('#description .inner').offset().top + $('#description .inner').height()/2 + (screenWidth - content_rightEdge))];

    lines[5] = [];
    lines[5][0] = [content_leftEdge * 0.5, lines[1][2][1]+30];
    lines[5][1] = [screenWidth * 0.05, (lines[5][0][0] - screenWidth * 0.05) + lines[5][0][1]];
    lines[5][2] = [screenWidth * 0.05, $('.skyline').offset().top+50];

    lines[6] = [];
    lines[6][0] = [content_rightEdge * 0.9, $('#schedule').offset().top];
    lines[6][1] = [screenWidth * 0.95, ($('#schedule').offset().top + (screenWidth * 0.95 - content_rightEdge * 0.9))];
    lines[6][2] = [screenWidth * 0.95, $('.skyline').offset().top];

    lines[7] = [];
    lines[7][0] = [screenWidth, $('#sponsors').offset().top + 100];
    lines[7][1] = [content_rightEdge, ($('#sponsors').offset().top + 100 + (screenWidth-content_rightEdge))];
    lines[7][2] = [content_rightEdge, $('#sponsors').offset().top + $('#sponsors').height()*0.9];
    lines[7][3] = [screenWidth, $('#sponsors').offset().top + $('#sponsors').height()*0.9];
    if(reduced) {
        lines[0] = [];
        lines[3] = [];
        lines[5] = [];
        lines[6] = [];
    }
    var g = $('#schedule h2').offset().left + $('#schedule h2').width()*1.3;
    lines[1][1] = [lines[1][0][0], $('#schedule h2').offset().top + $('#schedule h2').height()/2 - (g - lines[1][1][0])];
    lines[1][2] = [g, (g - lines[1][1][0]) + lines[1][1][1]];
    lines[1][3] = [0, lines[1][2][0] + lines[1][2][1]];

    //canvas setup
    var canvasContainer = $('.linesCanvas-outside');
    var canvas = $('canvas', canvasContainer);

    canvas[1].width = screenWidth;
    canvas[1].height = $('html').height();
    canvas[0].width = screenWidth;
    canvas[0].height = $('html').height();

    $(canvas).width(screenWidth);
    $(canvas).height($('html').height());
    $(canvasContainer).height($('html').height());
    $(canvasContainer).width(screenWidth);
    var ctx = canvas[1].getContext("2d");
    var ctx_initial = canvas[0].getContext("2d");
    ctx_initial.lineWidth = 3;
    ctx_initial.strokeStyle = 'rgb(198, 158, 96)';
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgb(30, 29, 29)';
    drawPoints(ctx_initial, [lines[0], lines[1], lines[2], lines[3]]);
    drawPoints(ctx, lines);
}
function drawPoints(ctx, lines) {
    for(var i = 0; i < lines.length; i++) { //per line
        ctx.beginPath();
        if(i == 7) {
            //last line is gold
            ctx.strokeStyle = 'rgb(198, 158, 96)';
        }
        for(var j = 0; j < lines[i].length; j++) { //per point
            var x = lines[i][j][0],
                y = lines[i][j][1];
            if(j == 0)
                ctx.moveTo(x, y);
            else
                ctx.lineTo(x, y);
        }
        ctx.stroke();
    }
}
