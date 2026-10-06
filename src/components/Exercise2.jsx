import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Exercise2() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");

  return (
    <>
    <h2>Registration Form</h2>
    <Form.Label htmlFor="inputName">Name</Form.Label>
    <Form.Control type="text" id="inputName" value={name} onChange={(e) => setName(e.target.value)}/>
    <br/>
    <Form.Label htmlFor="inputEmail">Email</Form.Label>
    <Form.Control type="email" id="inputEmail" value={email} onChange={(e) => setEmail(e.target.value)}/>
    <br/>
    <Form.Label htmlFor="inputPhone">phone</Form.Label>
    <Form.Control type="text" id="inputPhone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
    <br/>
    <Form.Label htmlFor="inputCity">phone</Form.Label>
    <Form.Control type="text" id="inputCity" value={city} onChange={(e) => setCity(e.target.value)}/>
    <br/>
    <Form.Label>Gender</Form.Label>
     <Form.Check type="radio" label="Male" name="gender" value={gender} onChange={(e)=>setGender(e.target.value)}/>
     <Form.Check type="radio" label="Female" name="gender" value={gender} onChange={(e)=>setGender(e.target.value)}/>
     <br/>
    <Button variant="primary" type="submit">Submit</Button>

        
      </>
  );
}

export default Exercise2;