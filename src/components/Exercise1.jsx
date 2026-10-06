import { useState } from "react";
import Greeting from "./Greeting";
import { Form } from "react-bootstrap";

function Exercise1() {
    const [name, setname] = useState("")
    const [submitted, setSubmitted] = useState("")
    return (
    <>
        <h2>Greeting</h2>
        <Form.Label htmlFor="inputName">name </Form.Label>
        <Form.Control type="text" id="inputName" placeholder="Enter your name" value={name} onChange={(e) => setname(e.target.value)}/>
        <br/>
        <button onClick={() => setSubmitted(name)}>Submit</button>
        <button onClick={() => {setUsername(""),setSubmitted("")}}>Clear</button>

      <Greeting name={submitted}/>
    </>
  );
}

export default Exercise1;