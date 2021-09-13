
const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport(
    {
        service: "hotmail",
        auth: {
            user: process.env.FROM_EMAIL,
            pass: process.env.EMAIL_PASS
        }
    }
)

const sendEmail = async (message) => {
    return new Promise((resolve, reject) => {
        transport.sendMail(message, (err, info) => {
            if (err) {
                console.log(err);
                return reject(err)
            }

            console.log(info.response)
            resolve(info.response)
        })
    })
}

module.exports = sendEmail
