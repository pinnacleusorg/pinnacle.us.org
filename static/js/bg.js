window.onbeforeunload = function () {
  window.scrollTo(0, 0); //keep at top on refresh
}

var mobile = true,
  reduced = false,
  highestScroll = 0,
  initialScroll = false;

(function () {
  var offsetMethod = jQuery.fn.offset;
  jQuery.fn.offset = function () {
    var offset = offsetMethod.apply(this, arguments);
    var UWFix = offsetMethod.apply($('.container-wide'), arguments);
    var newOffset = {
      top: offset.top,
      left: offset.left - UWFix.left
    };
    return newOffset;
  }
})();
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

  var subscribeDisabled = false;
  $('#updatedbtn').click(function (e) {
    e.preventDefault();

    var name = $('#engagement-fn').val().trim();
    var email = $('#engagement-email').val().trim();
    if (name.length == 0 || email.length == 0)
      return;
    if (subscribeDisabled)
      return;
    subscribeDisabled = true;
    $('#engagement-fn, #engagement-email').prop('disabled', true);
    //submit, report errors to #updatedMsg.
    $.ajax('https://api.pinnacle.us.org/1.0/contacts', {
      type: 'post',
      data: JSON.stringify({ "email": email, "name": name }),
      dataType: 'json',
      contentType: 'application/json'
    }).done(function () {
      $('#engagement-fn').val("");
      $('#engagement-email').val("");
      $('#updatedMsg').addClass("successful").text("Welcome to the mailing list!");
      subscribeDisabled = false;
      $('#engagement-fn').prop('disabled', false);
      $('#engagement-email').prop('disabled', false);
    }).fail(function (msg) {
      console.log(msg);
      var error = "Error: Please confirm your email address is accurate";
      if (msg.status == 409)
        error = "You're already on our list!";
      $('#updatedMsg').addClass("err").text(error);
      subscribeDisabled = false;
      $('#engagement-fn').prop('disabled', false);
      $('#engagement-email').prop('disabled', false);
    })
  })
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