
$("#submitBtn").click(function () {
  var formData = JSON.stringify($('form').serializeArray());
  console.log(formData)
  
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
