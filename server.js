require ('dotenv').config()
const hbs = require('nodemailer-express-handlebars')
const nodemailer = require('nodemailer')



//Step 1

let transporter = nodemailer.createTransport({
    // service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    }
})

transporter.use('compile', hbs({
    viewEngine: 'express-handlebars',
    viewPath: ''
}))

//Step 2

let mailOptions = {
    from: 'testpalominovanessa@gmail.com',
    to: 'wvanessa.palomino.rivera@gmail.com',
    subject: 'Testing and Testing',
    template: 'main',
}

//Step 3

transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
        console.log('Error', err);
    } else {
        console.log('Email sent')
    }
})

// transporter.sendMail(mailOptions)
// .then(function(response){
//     console.log('Email sent');
// })
// .catch(function(error){
//     console.log('Error', error)
// })