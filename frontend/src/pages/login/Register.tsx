import { Link } from "react-router-dom";

const Register = () => {
  function handleRegister() {}
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="flex flex-col bg-color-primary rounded-3xl p-8">
          <div className="text-4xl mb-3 text-color-accent font-main">
            Register
          </div>
          <form action="" className="flex flex-col m-2">
            <h2 className="text-xl font-main ps-2 text-color-accent w-96">
              Email
            </h2>
            <input type="text" className="p-2 rounded-xl mb-2 " />
            <h2 className="text-xl font-main ps-2 text-color-accent">
              Password
            </h2>
            <input type="text" className="p-2 rounded-xl mb-2" />
            <h2 className="text-xl font-main ps-2 text-color-accent">
              Re-type Password
            </h2>
            <input type="text" className="p-2 rounded-xl" />
          </form>
          <div className="flex text-color-accent bg-white p-2 m-2 font-main text-2xl rounded-xl justify-center cursor-pointer">
            Submit
          </div>
          <Link to="/login" onClick={handleRegister}>
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
