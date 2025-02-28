import React, { useRef, useState, useEffect } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { RiTelegramLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

const Contact = () => {
  const form = useRef();
  const [shouldSend, setShouldSend] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setShouldSend(true);
  };

  useEffect(() => {
    if (shouldSend) {
      emailjs
        .sendForm(
          "service_d5tntf5",
          "template_navms9p",
          form.current,
          "orJMVLhh2DhgCaWkU"
        )
        .then((result) => {
          setAlertMessage("Message sent successfully!");
          setAlertSeverity("success");
          setAlertOpen(true);
          form.current.reset();
          setLoading(false);
          setShouldSend(false);
        })
        .catch((error) => {
          setAlertMessage("Failed to send message. Please try again.");
          setAlertSeverity("error");
          setAlertOpen(true);
          setLoading(false);
          setShouldSend(false);
        });
    }
  }, [shouldSend]);

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") return;
    setAlertOpen(false);
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article
            className="contact__option gmail"
            onClick={() => {
              window.open("mailto:mathurayush121@gmail.com", "_blank");
            }}
          >
            <MdOutlineEmail className="contact__option-icon" />
            <div className="contact__option-text">
              <h4>Email</h4>
              <h5>mathurayush121@gmail.com</h5>
            </div>
          </article>
          <article
            className="contact__option wa"
            onClick={() => {
              window.open("https://api.whatsapp.com/send?phone=9889245681", "_blank");
            }}
          >
            <BsWhatsapp className="contact__option-icon" />
            <div className="contact__option-text">
              <h4>WhatsApp</h4>
              <h5>+91 9889245681</h5>
            </div>
          </article>
          <article
            className="contact__option tele"
            onClick={() => {
              window.open("https://t.me/itsayushmathur", "_blank");
            }}
          >
            <RiTelegramLine className="contact__option-icon" />
            <div className="contact__option-text">
              <h4>Telegram</h4>
              <h5>@itsayushmathur</h5>
            </div>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? (
              <CircularProgress size={24} style={{ color: "#fff" }} />
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>

      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: alertSeverity === "success" ? "#4caf50" : "#f44336",
            color: "#fff",
            fontSize: "1rem",
          },
        }}
      >
        <Alert
          onClose={handleAlertClose}
          severity={alertSeverity}
          variant="filled"
          sx={{
            width: "100%",
            fontSize: "1rem",
            borderRadius: "2rem",
          }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Contact;
