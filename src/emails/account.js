const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.SENDER_EMAIL,
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`    
    }).then(() => {}, error => {
        console.log(error)

        if (error.response) {
            console.log(error.response.body)
        }
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.SENDER_EMAIL,
        subject: 'Sorry to see you go!',
        text: `Good Bye, ${name}. Let us know if we could have done something to keep on on board.`
    }).then(() => {}, error => {
        console.log(error)

        if (error.response) {
            console.log(error.response.body)
        }
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}