
$("#submitBtn").click(function () {
  var formData = $("form").serialize().split("&");
    var obj={};
    for(var key in data)
    {
        console.log(data[key]);
        obj[data[key].split("=")[0]] = data[key].split("=")[1];
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
