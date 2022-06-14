import { useRef } from "react";
import "./App.css";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import logo from "./logo.png";

function App() {
  const form = useRef();
  
  const sendMsg = () => {};

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
          <Form.Control type="text" placeholder="John Doe" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Ghana, Accra" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Review about Channel</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        {/* Button Section */}
        <div className="d-grid gap-2">
          <Button
            type="submit"
            variant="outline-primary"
            size="lg"
            className="py-5"
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default App;
