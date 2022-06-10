import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";
import { Button } from "primereact/button";

const ContactForm = () => {
  // some state to save inputs to
  // handler function for onSubmit

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = () => {
    // send form,
    // if successful, say OK to user, do something
    // else, error (something went wrong)
  };
  return (
    <div>
      <div
        style={{
          fontSize: "3.5rem",
          textAlign: "left",
          marginBottom: "1rem",
          paddingLeft: "1rem",
          paddingRight: "4rem",
        }}
      >
        <i>Contact</i>
      </div>
      <div style={{ margin: "none", textAlign: "left", width: "auto" }}>
        <span className="p-float-label">
          <InputText
            id="inputtext"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="inputtext">Name</label>
        </span>
        <br />
        <span className="p-float-label">
          <InputText
            id="inputtext"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="inputtext">email</label>
        </span>
        <br />
        <span className="p-float-label">
          <InputTextarea
            style={{ width: "20rem" }}
            id="textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
          />
          <label htmlFor="textarea">Message (optional)</label>
        </span>
        <br />
        <Button
          className="p-button-info p-button-rounded"
          style={{ height: "3rem", fontSize: "1.2rem", padding: "1.2rem" }}
        >
          send
        </Button>
      </div>
    </div>
  );
};
export default ContactForm;
