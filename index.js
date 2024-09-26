function sendMail(){
    let parms ={
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        number: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    }

    emailjs.send('service_b8jj8ql','template_zm7b9jb',parms).then(alert('Email Sent!!'))
}