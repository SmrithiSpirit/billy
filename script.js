
$("#submitBtn").click(function () {
  var formData = $('form').serialize()
  window.parent.postMessage(JSON.stringify({
    event_code: 'ym-client-event', data: JSON.parse({
      event: {
        code: "formData",
        data: {
          billyData: formData
        }
      }
    })
  }), '*');
})
