// import "./Contact.css";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully 🚗");
          form.current.reset();
        },
        () => {
          alert("Message failed ❌");
        }
      );
  };

  return (
    <section className="contact">
      {/* Hero */}
      <div className="contact-hero">
        <motion.div
          className="contact-hero-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Contact <span>CarZone</span>
          </h1>
          <p>Let’s connect and drive your dream forward</p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="contact-container">
        {/* Info */}
        <motion.div
          className="glass-box contact-info"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Get in Touch</h2>

          <div className="info-item">
            <FaPhoneAlt />
            <p>+92 300 1234567</p>
          </div>

          <div className="info-item">
            <FaEnvelope />
            <p>info@carzone.com</p>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt />
            <p>Lahore, Pakistan</p>
          </div>

          {/* ✅ Google Map added */}
          <div className="map-box">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Lahore,Pakistan&output=embed"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "14px" }}
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="glass-box contact-form"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Send Message</h2>

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
