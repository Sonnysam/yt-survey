import './App.css';
import { Form } from "react-bootstrap";
import logo from './logo.png';

function App() {
  return (
    <div className='container p-5'>
      <div className="logo d-flex align-items-center justify-content-center">
        <img 
          src={logo} 
          alt="logo" 
          className="logo-img"
          style={{width: '200px', height: '200px'}}
        />
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </div>
  );
}

export default App;
