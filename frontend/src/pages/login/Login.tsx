import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { app } from "../../firebase";
import { useDispatch } from "react-redux";

const Login = () => {
  debugger;
  let navigate = useNavigate();
  const auth = getAuth(app);
  const handleGoogleLogin = async () => {
    console.log("anjay");
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select account" });
    try {
      const resultFromGoogle = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "apllication/json" },
        body: JSON.stringify({
          name: resultFromGoogle.user.displayName,
          email: resultFromGoogle.user.email,
          googlePhotoUrl: resultFromGoogle.user.photoURL,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        navigate("/");
      }
      console.log(resultFromGoogle);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="flex flex-col bg-color-primary rounded-3xl p-8">
          <div className="text-4xl mb-3 text-color-accent font-main">
            SIGN IN
          </div>
          <form action="" className="flex flex-col m-2">
            <h2 className="text-xl font-main ps-2 text-color-accent">Email</h2>
            <input type="text" id="email" className="p-2 rounded-xl mb-2 " />
            <h2 className="text-xl font-main ps-2 text-color-accent">
              Password
            </h2>
            <input type="text" id="password" className="p-2 rounded-xl" />
          </form>
          <p className="text-center m-2 font-main text-color-accent">
            Or login with
          </p>
          <div
            onClick={() => {
              handleGoogleLogin();
            }}
            className="flex text-color-accent bg-white p-2 m-2 font-main text-2xl rounded-xl justify-center w-96 cursor-pointer"
          >
            Google
          </div>
          <div className="flex text-color-accent bg-white p-2 m-2 font-main text-2xl rounded-xl justify-center cursor-pointer">
            Github
          </div>
          <Link to="/register">
            <p className="text-center m-2 font-main text-color-accent hover:text-color-base cursor-pointer">
              Dont have account?
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
