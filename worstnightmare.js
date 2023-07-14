function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var subject = "New message from website";
    var body = "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message;

    var mailtoLink = "mailto:your-email@example.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    window.location.href = mailtoLink;
  }