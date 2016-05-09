function GetUserIP(){
  var ret_ip;
  $.ajaxSetup({async: false});
  $.get('http://jsonip.com/', function(r){
    ret_ip = r.ip;
  });
  return ret_ip;
}

function postToGoogle() {
    var email = $('.email').val();
    var ip = GetUserIP();
    $.ajax({
        url: "https://docs.google.com/forms/d/1mFDjgi6AFxtt2TAVDlE1Pj1ryxYbmOlMw_xs1CYXfWQ/formResponse",
        data: {
            "entry.1013057230": email,
            "entry.1663285146": ip
        },
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function() {
                //Success message
            },
            200: function() {
                //Success Message
            }
        }
    });
}

$(document).ready(function(){
    $('form.subscribe').submit(function() {
        postToGoogle();
        return false;
    });
    $("form.subscribe").validate();
});
