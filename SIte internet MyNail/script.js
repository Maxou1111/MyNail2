const form = document.querySelector("form");

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mynail.entre@gmail.com",
        Password : "0CD5F2A45002AAF3669A59C3342E955DB6E6",
        To : 'mynail.entre@gmail.com',
        From : "mynail.entre@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});



