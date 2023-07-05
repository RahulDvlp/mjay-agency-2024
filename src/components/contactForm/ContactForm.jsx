import React, { useState } from "react";
import "./contactForm.css";
import { FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = ({ onClose }) => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function getValue(e) {
    const { name, value } = e.target;

    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));
  }

  const sentUserData = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = inputValue;
    if (name === "") {
      toast.error("Name is required");
    } else if (email === "") {
      toast.error("Email is required");
    } else if (!email.includes("@")) {
      toast.error("Email is invalid");
    } else if (phone === "") {
      toast.error("Mobile Number is required");
    } else {
      const response = await fetch(
        "https://mjay-agency-backend.onrender.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            message,
          }),
        }
      );
      const data = await response.json();
      if (data.status === 201) {
        toast.success("Response has been submitted");
        setInputValue({
          ...inputValue,
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    }
  };

  return (
    <div className="contact_form_container">
      <div className="contact_form">
        <div className="close_button" onClick={onClose}>
          <FaTimes />
        </div>
        <div className="getInTouch">
          <div className="getInTouch_content">
            <h1>get in touch</h1>
            <h2 className="bold">Call Us:</h2>
            <h2>+91 6374233813</h2>
            <h2 className="bold">Mail Us:</h2>
            <h2>info@mjaydigitalsolutions.com</h2>
            <div className="socials">
              <a href="https://wa.me/+916374233813">
                <i className="fa-brands fa-whatsapp fa-lg"></i>
              </a>
              <a href="https://www.instagram.com/mjay_digital_solutions/">
                <i className="fa-brands fa-instagram fa-lg"></i>
              </a>
              <a href="https://www.linkedin.com/company/mjay-digital-solutions/">
                <i className="fa-brands fa-linkedin-in fa-lg"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100094270606814">
                <i className="fa-brands fa-facebook-f fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="form">
          <h1>say hi👋</h1>
          <div className="form_content">
            <form>
              <div className="label_input">
                <label htmlFor="name">Name</label>
                <input
                  placeholder="Enter your name"
                  type="text"
                  id="name"
                  name="name"
                  value={inputValue.name}
                  onChange={getValue}
                />
              </div>
              <div className="label_input">
                <label htmlFor="email">Email</label>
                <input
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  name="email"
                  value={inputValue.email}
                  onChange={getValue}
                />
              </div>
              <div className="label_input">
                <label htmlFor="phone">Phone</label>
                <input
                  placeholder="Enter your phone number"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={inputValue.phone}
                  onChange={getValue}
                  required
                />
              </div>
              <div className="label_input">
                <label htmlFor="message">Message</label>
                <textarea
                  placeholder="---"
                  id="message"
                  name="message"
                  value={inputValue.message}
                  onChange={getValue}
                  required
                />
              </div>
              <button onClick={sentUserData} type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
