var lines = [];
window.onbeforeunload = function () {
  window.scrollTo(0, 0); //for dev
}
$(function() {
    updateLines();
    $(window).resize(function() {
        updateLines();
    });
    var initialScroll = false;
    var animationFinished = false;
    var highestScroll = 0;
    $(window).scroll(function() {
        //scrollspy the line ani:
        if(!initialScroll) {
            //start animation ...
        }
        //get scroll percentage
        var scrollTop = $(window).scrollTop();
        var pageHeight = $('body').height();
        var screenHeight = $(window).height();

        var scrollPercent = (scrollTop / (pageHeight - screenHeight)) * 100;
        if(animationFinished)
            return;
        if(highestScroll > scrollPercent)
            return; //don't backtrack animation
        highestScroll = scrollPercent;
        scrollPercent = scrollPercent.toFixed(0);
        console.log("new highest scroll: "+highestScroll);
        $('canvas').css('clip-path', 'polygon(0 0, 100% 0, 100% '+scrollPercent+'%, 0 '+scrollPercent+'%)');

    });
});
function updateLines() {
    var screenHeight = $(window).height();
    var screenWidth = $(window).width();
    var scaleRatio = (screenWidth / 1440) * 1;
    var content_leftEdge = ($('.right-body').first().offset().left) * 0.9;
    var content_rightEdge = ($('.right-body').first().offset().left + $('.right-body').first().width()) * 1.1;
    //i'll clean this once the line positioning is finalized
    lines = [
        [
            [0, screenHeight * 0.8],
            [$('#description .inner').offset().left*0.8, screenHeight * 0.8 + ($('#description .inner').offset().left*0.8)],
            [$('#description .inner').offset().left*0.8, $('#description .inner').offset().top + $('#description .inner').height()*1.1]
        ],
        [
            [screenWidth * 0.05, screenHeight * 0.7],
            [screenWidth * 0.05, $('#description .inner').offset().top + $('#description .inner').height() * 0.7],
            [content_leftEdge * 1.1, $('#schedule h2').offset().top + $('#schedule h2').height()],
            [0, $('#schedule h2').offset().top + $('#schedule h2').height() + (content_leftEdge * 1.1)]
        ],
        [
            [screenWidth, screenHeight * 0.8],
            [content_rightEdge, scaleRatio * (screenHeight * 0.8 + (screenWidth - content_rightEdge))],
            [content_rightEdge, $('#description h2').offset().top + $('#description h2').height() - content_rightEdge*0.15],
            [content_rightEdge * 0.85, $('#description h2').offset().top + $('#description h2').height()],
            [content_rightEdge * 0.7, $('#description h2').offset().top + $('#description h2').height()]
        ],
        [
            [screenWidth * 0.95, screenHeight * 0.75],
            [screenWidth * 0.95, $('#schedule h2').offset().top],
            [screenWidth, scaleRatio* ($('#schedule h2').offset().top + (screenWidth * 0.05))]
        ],
        [
            [content_rightEdge * 0.7, $('#description h2').offset().top],
            [content_rightEdge, $('#description h2').offset().top],
            [content_rightEdge, $('#description .inner').offset().top + $('#description .inner').height()/2],
            [screenWidth, scaleRatio * ($('#description .inner').offset().top + $('#description .inner').height()/2 + (screenWidth - content_rightEdge))]
        ],
        [
            [content_leftEdge * 0.75, scaleRatio * ($('#schedule').offset().top + (screenWidth * 0.9 - content_rightEdge * 0.9))],
            [screenWidth * 0.05, scaleRatio * ((scaleRatio * ($('#schedule').offset().top + (screenWidth * 0.9 - content_rightEdge * 0.9))) + (content_leftEdge * 0.75 - screenWidth * 0.05))],
            [screenWidth * 0.05, $('.skyline').offset().top+50]
        ],
        [
            [content_rightEdge * 0.9, $('#schedule').offset().top],
            [screenWidth * 0.9, scaleRatio * ($('#schedule').offset().top + (screenWidth * 0.9 - content_rightEdge * 0.9))],
            [screenWidth * 0.9, $('.skyline').offset().top]
        ],
        [
            [screenWidth, $('#sponsors').offset().top + 100],
            [content_rightEdge, scaleRatio * ($('#sponsors').offset().top + 100 + (screenWidth-content_rightEdge))],
            [content_rightEdge, $('#sponsors').offset().top + $('#sponsors').height()*0.9],
            [screenWidth, $('#sponsors').offset().top + $('#sponsors').height()*0.9]
        ]
    ];

    //canvas setup
    var canvas = $('canvas')[0];

    canvas.width = $('body').width();
    canvas.height = $('body').height();

    $(canvas).width($('body').width());
    $(canvas).height($('body').height());
    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgb(198, 158, 96)';
    for(var i = 0; i < lines.length; i++) {
        //line-level
        var hasFirstPoint = false;
        ctx.beginPath();
        console.log ("Line #"+(i+1));
        for(var j = 0; j < lines[i].length; j++) {
            //point-level
            var x = lines[i][j][0],
                y = lines[i][j][1];
            if(!hasFirstPoint)
                ctx.moveTo(x, y);
            else
                ctx.lineTo(x, y);
            hasFirstPoint = true;
        }
        ctx.stroke();
    }
}
