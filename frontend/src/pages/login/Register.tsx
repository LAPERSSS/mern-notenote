import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData]: any = useState("");
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="flex flex-col bg-color-primary rounded-3xl p-8">
          <div className="text-4xl mb-3 text-color-accent font-main">
            Register
          </div>

          <form action="" className="flex flex-col m-2" onSubmit={handleSubmit}>
            <h2 className="text-xl  font-main ps-2 text-color-accent w-96">
              Username
            </h2>
            <input
              type="text"
              id="username"
              className="p-2 rounded-xl mb-2 "
              onChange={handleChange}
            />
            <h2 className="text-xl  font-main ps-2 text-color-accent w-96">
              Email
            </h2>
            <input
              type="email"
              id="emailReg"
              className="p-2 rounded-xl mb-2 "
              onChange={handleChange}
            />
            <h2 className="text-xl font-main ps-2 text-color-accent">
              Password
            </h2>
            <input
              id="passwordReg"
              type="password"
              className="p-2 rounded-xl mb-2"
              onChange={handleChange}
            />
            {/* submit */}
            <button
              className="flex text-color-accent bg-white p-2 m-2 font-main text-2xl rounded-xl justify-center cursor-pointer"
              type="submit"
              onClick={() => {
                console.log(formData);
              }}
            >
              Submit
            </button>
          </form>

          {/* submit */}
          <Link to="/login">
            <p className="text-center m-2 font-main text-color-accent hover:text-color-base cursor-pointer">
              Already have an account?
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
