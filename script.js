
$("#submitBtn").click(function () {
  var formData = JSON.stringify($('form').serializeArray());
  
  window.parent.postMessage(JSON.stringify({
    event_code: 'ym-client-event', data: JSON.stringify({
      event: {
        code: "formData",
        data: {
          billyData: formData
        }
      }
    })
  }), '*');
})
