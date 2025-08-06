import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 p-4 flex justify-between items-center">
      <div>
        <Link to="/" className="text-white font-bold">
          PalChat
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/Login" className="text-white font-bold">
          Login
        </Link>
        <Link to="/Register" className="text-white font-bold">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
