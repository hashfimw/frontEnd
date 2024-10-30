import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-slate-600 text-white flex gap-10 p-5 justify-center items-center text-center">
      <Link to={"/"}>Home</Link>
      <Link to={"/register"}>Register Page</Link>
    </div>
  );
}

export default Navbar;
