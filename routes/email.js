const express =  require("express")
const router = express.Router()
const sendMail = require('../helpers/sendMail')

router.get("/", (req,res)=>{
    res.send("Welcome to mail sending")
})

router.get("/send/text", async (req, res) => {
    const message = {
        from: {
            name: 'The Tech',
            address: process.env.FROM_EMAIL
        },
        to: 'mwangimartin1904@gmail.com',
        subject: "Sending Text",
        text: "This is a text email"
    }

    try {
        await sendMail(message)
        res.send("Email sent")
    } catch (error) {
        res.send("Error sending email")
    }
})

router.get("/send/html", async (req, res) => {
    const message = {
        from: {
            name: 'The Tech',
            address: process.env.FROM_EMAIL
        },
        to: 'mwangimartin1904@gmail.com',
        subject: "Sending HTML",
        html: `
        <div>
            <h4>Sending HTML</h4>
            <p>we can also send html,</p>
        </div>
        `,
    }

    try {
        await sendMail(message)
        res.send("Email sent")
    } catch (error) {
        res.send("Error sending email")
    }
})

router.get("/send/attachment", async (req, res) => {
    const message = {
        from: {
            name: 'The Tech',
            address: process.env.FROM_EMAIL
        },
        to: 'mwangimartin1904@gmail.com',
        subject: "Sending attachments",
        html: `
        <div>
            <h4>Html and Attachment</h4>
            <p>we can also send html,</p>
            <img src="cid:uniqueID"  alt="alts" />
        </div>
        `,
        attachments:[
            {
                filename: 'image.png',
                path: `https://firebasestorage.googleapis.com/v0/b/lodies-app.appspot.com/o/img%2Fimg.png?alt=media&token=641bb5be-6852-4bd1-a208-4fefbf9a8ece`,
                cid: 'uniqueID'
            },
        ]
    }

    try {
        await sendMail(message)
        res.send("Email sent")
    } catch (error) {
        res.send("Error sending email")
    }
})



module.exports = router;