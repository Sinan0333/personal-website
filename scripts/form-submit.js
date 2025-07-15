$("#submit-form").submit((e) => {
  e.preventDefault();
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbyLfptt4iZXDDaxic5R8-b4Zu_6aJJBh8nbItsg5GTrgwjnbgoHGA9z6VB6DZ_QhMxJtQ/exec",
    data: $("#submit-form").serialize(),
    method: "post",
    success: function (response) {
      alert("Form submitted successfully");
      window.location.reload();
      //window.location.href="https://google.com"
    },
    error: function (err) {
      alert("Something Error Please Contact Me Through Social Media");
    },
  });
});
