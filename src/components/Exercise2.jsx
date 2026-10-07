import { useState } from "react";

function Exercise2() {

  const [register, setRegister] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    gender: "",
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegister({
      ...register,
      [name]: type === "checkbox" ? checked : value
    });
  }


  return (
    <>
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col-md-6">
            <div className="card">
              <h2 className="text-center mb-4">Registration Form</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" name="name" value={register.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" name="email" value={register.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input type="tel" className="form-control" id="phone" name="phone" value={register.phone} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="city" className="form-label">City</label>
                  <input type="text" className="form-control" id="city" name="city" value={register.city} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="gender" className="form-label">Gender</label>
                  <select className="form-select" id="gender" name="gender" value={register.gender} onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="terms" name="terms" checked={register.terms} onChange={handleChange} />
                  <label className="form-check-label" htmlFor="terms">I agree to the terms and conditions</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <h2 className="text-center mb-4">Registration Details</h2>    
              <p><strong>Name:</strong> {register.name}</p>
              <p><strong>Email:</strong> {register.email}</p>
              <p><strong>Phone:</strong> {register.phone}</p>
              <p><strong>City:</strong> {register.city}</p>
              <p><strong>Gender:</strong> {register.gender}</p>
              <p><strong>Terms and Conditions:</strong> {register.terms ? "Accepted" : ""}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Exercise2;