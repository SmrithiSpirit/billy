
$("#submitBtn").click(function () {
  var formData = $("form").serialize().split("&");
    var obj={};
    for(var key in formData)
    {
        console.log(formData[key]);
        obj[formData[key].split("=")[0]] = formData[key].split("=")[1];
    }

    console.log(obj);
  
  window.parent.postMessage(JSON.stringify({
    event_code: 'ym-client-event', data: JSON.stringify({
      event: {
        code: "formData",
        data: {
          billyData: obj
        }
      }
    })
  }), '*');
})
