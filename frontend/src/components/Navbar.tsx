import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <Link to="/" className="text-white font-bold">PalChat</Link>
      <Link to="/Login" className="text-white font-bold">Login</Link>
    </nav>
  );
}

export default Navbar;