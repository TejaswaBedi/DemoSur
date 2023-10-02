import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(data.msg);
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="form-group">
                <label for="exampleInputEmail1">Full Name: </label>
                <input
                  type="name"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  aria-describedby="emailHelp"
                  placeholder="Enter your name"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Phone Number: </label>
                <input
                  type="phone"
                  class="form-control"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  id="exampleInputPassword1"
                  placeholder="Enter your number"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Email: </label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  id="exampleInputPassword1"
                  placeholder="Enter your email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Message: </label>
                <textarea
                  type="msg"
                  class="form-control"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                  id="exampleInputPassword1"
                  placeholder="Enter your message"
                />
              </div>
              <br />
              <button type="submit" class="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
