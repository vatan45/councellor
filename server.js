const express = require('express');
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

//server used to send emails

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(8080, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "vmro45@gmail.com",
    pass: "xfio wwwu zewz fhki"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName; // Fixed the spelling of "firstName"
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "vatanmalik04@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p> Name: ${name}</p>
            <p> Email: ${email}</p>
            <p> Phone: ${phone}</p>
            <p> Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error); // Fixed the typo from res,json(error) to res.json(error)
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
