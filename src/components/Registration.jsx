function Registration(props) {
    return (
    <div>
        <h3>Registration</h3>
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <p>Phone: {props.phone}</p>
        <p>City: {props.city}</p>
        <p>Gender: {props.gender}</p>
    </div>
  );
}

export default Registration;