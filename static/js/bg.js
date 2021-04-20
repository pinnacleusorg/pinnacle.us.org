window.onbeforeunload = function () {
  window.scrollTo(0, 0); //keep at top on refresh
}

var mobile = true,
  reduced = false,
  highestScroll = 0,
  initialScroll = false;

var bigNumbers = [];
$(function () {
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

  // Update/Generate Lines
  gsap.registerPlugin(ScrollTrigger);
  $('.big-num-num').each(function () {
    bigNumbers.push(new countUp.CountUp(this, $(this).data('to')));
  });
});

function processScroll(scroll) {
  initialScroll = true;
  //CONS:
  var scrollPercent = scroll.progress.toFixed(2) * 100;

  //Parallax logo at top of scroll (TODO: replace with GSAP parallax)
  if (scrollPercent < 20) {
    var adj = 150 * scrollPercent / 20;
    $('#hero .inner').css('margin-top', 'calc(-8rem - ' + adj + 'px)');
  }
}