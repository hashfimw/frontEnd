import "./style.css";
import "../src/assets/avatar2.png";

function Navbar() {
  return (
    <div className="navbar bg-white relative px-4 sm:px-8">
      <div className="navbar-center flex-1">
        <a className="text-2xl font-light text-black ml-1 ">HSHFMW Portfolio</a>
      </div>
      <div className="absolute top-2 sm:top-3 right-3 sm:right-4 w-12 h-12 rounded-full flex item-center justify-center">
        <img
          src="../src/assets/avatar2.png"
          alt="Avatar"
          className="w-full h-full rounded-full object-cover"
        />
        {/* Rotating dotted border */}
        <div className="absolute inset-0 rounded-full border-4 border-black animate-pulse-border"></div>
      </div>
    </div>
  );
}

export default Navbar;
