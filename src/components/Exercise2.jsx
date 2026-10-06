import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Exercise2() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [terms, setTerms] = useState(false);

  return (
    <>
    <h2>Registration Form</h2>
    <Form.Label htmlFor="inputName">Name</Form.Label>
    <Form.Control type="text" id="inputName" value={name} onChange={(e) => setName(e.target.value)}/>
    <br/>
        <Form.Label htmlFor="inputEmail">Email</Form.Label>
        <Form.Control type="email" id="inputEmail" value={email}onChange={(e) => setEmail(e.target.value)}/>
            <br/>

      </>
  );
}

export default Exercise2;