import { useRef } from "react";
import "./App.css";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import logo from "./logo.png";
import emailjs from "@emailjs/browser";


function App() {
  const form = useRef();
  
  const sendMsg = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hmxk7y8",
        "template_j6vewro",
        form.current,
        "VtWPjDfzCqDzP1bY3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      e.target.reset();
  };


  return (
    <div className="container py-5">
      <div className="logo d-flex align-items-center justify-content-center">
        <img
          src={logo}
          alt="logo"
          className="logo-img"
          style={{ width: "200px", height: "200px" }}
        />
      </div>
      <span className="fs-4 logo-text d-flex align-items-center justify-content-center">
        web dev at it's best...
      </span>
      <h1 className="mt-5 fw-bold logo-text d-flex align-items-center justify-content-center">
        Youtube Channel Survey Form?
      </h1>

      <Form ref={form} onSubmit={sendMsg} className="mt-5">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="John Doe" name="user_name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="user_email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ghana, Accra"
            name="user_address"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Review about Channel</Form.Label>
          <Form.Control as="textarea" rows={3} name="user_msg" className="fs-1" />
        </Form.Group>
        {/* Button Section */}
        <div className="d-grid gap-2">
          <Button
            type="submit"
            variant="outline-primary"
            size="lg"
            className="py-2 fs-2"
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default App;
