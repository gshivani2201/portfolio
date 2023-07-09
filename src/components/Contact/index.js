import React, { useState } from "react";
import Modal from "react-modal";

//styles
import "./style.scss";

// third-party packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";

function Contact({ openContactModal, closeModal }) {
  const [senderName, setSenderName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const setSendersName = (e) => {
    const name = e.target.value;
    setSenderName(name);
  };

  const setEmailAddress = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const setSubjectContent = (e) => {
    const subject = e.target.value;
    setSubject(subject);
  };

  const setMessageContent = (e) => {
    const message = e.target.value;
    setMessage(message);
  };

  const checkForDisabled = () => {
    if (
      senderName &&
      senderName.trim() &&
      email &&
      email.trim() &&
      message &&
      message.trim()
    ) {
      return false;
    }
    return true;
  };

  const validateEmail = (email) => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validRegex)) {
      // alert("Valid email address!");

      return true;
    } else {
      alert("Invalid email address!");

      return false;
    }
  };

  return (
    <>
      <Modal
        isOpen={openContactModal}
        onRequestClose={closeModal}
        style={styles}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="heading-content">
          <div className="heading">Get in touch!</div>
          <FontAwesomeIcon
            icon={faXmarkCircle}
            className="close-button"
            onClick={closeModal}
          />
        </div>
        <div className="contact-body">
          <div className="field">
            <h3>Your name *</h3>
            <input
              value={senderName}
              onChange={(e) => setSendersName(e)}
              placeholder="Your name..."
            />
          </div>
          <div className="field">
            <h3>Your email *</h3>
            <input
              value={email}
              onChange={(e) => setEmailAddress(e)}
              placeholder="Your email..."
            />
          </div>
          <div className="field">
            <h3>What are we discussing?</h3>
            <input
              value={subject}
              onChange={(e) => setSubjectContent(e)}
              placeholder="Write in few words here..."
            />
          </div>
          <div className="field">
            <h3>How can I help you? *</h3>
            <textarea
              value={message}
              onChange={(e) => setMessageContent(e)}
              placeholder="How can I help you?"
              rows="6"
            ></textarea>
          </div>
        </div>
        <p className="required-text">* required fields.</p>
        <div className="submit-form">
          <button
            onClick={() => {
              //check for email validity before submitting
              console.log("submit");
            }}
            disabled={checkForDisabled()}
          >
            Submit
          </button>
        </div>
      </Modal>
    </>
  );
}

const styles = {
  Overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

export default Contact;
