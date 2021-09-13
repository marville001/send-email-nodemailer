const express =  require("express")
const router = express.Router()
const sendMail = require('../helpers/sendMail')

router.get("/", (req,res)=>{
    res.send("Welcome to mail sending")
})

router.get("/send/text", async (req, res) => {
    const message = {
        from: {
            name: 'Martin Mwangi',
            address: process.env.FROM_EMAIL
        },
        to: 'mwangimartin1904@gmail.com',
        subject: "Sending attachments",
        cc: [
            "ndiwa.ek@gmail.com",
            "dkirigha18@gmail.com",
            "faithkihara3@gmail.com"
        ],
        // text: "Wow, this waas fun"
        html: `
        <div>
            <h4>Html in email</h4>
            <p>we can also send html,</p>
            <img src="cid:uniqueID"  alt="alts? />
        </div>
        `,
        attachments: [
            // {
            //     filename: 'hello.txt',
            //     content: "hello world!"
            // }
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