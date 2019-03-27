import React, { useState, useEffect } from "react";
import services from "../services/services";

const ContactMe = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [contactObj, setContactObj] = useState({});
  const [sentMail, setSentMail] = useState(false);
  const submitEmail = () => {
    services.contactMeApi(contactObj);
    setName("");
    setEmail("");
    setDetails("");
    setSentMail(true)
  };

  useEffect(() => {
    setContactObj(
      {
        name: name,
        email: email,
        details: details
      },
      [name, email, details]
    );

    console.log(contactObj);
  }, [contactObj]);

  return (
    <div id="contactContainer">
      <div id="contactInfo">
      <div>
          {sentMail === true ? "Mail sent!" : null}
      </div>
        <div>
          <input
            className="contact-inputs"
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            value={name}
          />
        </div>
        <div>
          <input
            className="contact-inputs"
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            value={email}
          />
        </div>
      </div>
      <textarea
        className="form-control contact-inputs"
        onChange={e => setDetails(e.target.value)}
        placeholder="Details..."
        value={details}
      />
      <button className="contact-inputs" onClick={submitEmail}>
        Submit
      </button>

      
    </div>
  );
};

export default ContactMe;
