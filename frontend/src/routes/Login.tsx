import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col mt-32 ms-16">
        <h1 className="text-6xl font-semibold">Welcome back</h1>
        <div className="mt-4 flex">
          <h2 className="font-thin ms-2 me-1">New to PalChat?</h2>
          <Link to="/Register" className="text-indigo-600 font-bold">
            Register
          </Link>
        </div>
        <div className="mt-8 w-1/3">
          <form className="flex flex-col gap-4">
            <input type="email" placeholder="Email" className="p-4 border border-gray-200 bg-gray-200 rounded-xl"></input>
            <input type="password" placeholder="Password" className="p-4 border border-gray-200 bg-gray-200 rounded-xl"></input>
            <button type="button" className="bg-indigo-600 hover:bg-indigo-700 text-gray-50 py-4 rounded-xl cursor-pointer">LogIn</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
