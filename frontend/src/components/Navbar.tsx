import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-color-primary p-4 px-12 md:flex justify-between items-center">
        <Link to="/">
          <div className="text-color-secondary text-2xl font-title">
            NOTENOTE
          </div>
        </Link>

        <div className="text-color-accent">
          <form action="">
            <input className="bg-color-base p-2 w-64" type="text"></input>
          </form>
        </div>
        <div className="text-color-accent text-2xl font-main font-bold">
          Settings
        </div>
      </div>
    </>
  );
};

export default Navbar;
