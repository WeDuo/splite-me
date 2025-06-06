import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authImage from "../assets/auth.png";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("All fields are required!", { position: "top-center" });
      return;
    }
    console.log("Logging in with:", email, password);
    toast.success("Login successful! 🎉", { position: "top-center" });
    setTimeout(() => navigate("/dashboard"), 2000);
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In clicked");
    toast.success("Google Sign-In successful! 🎉", { position: "top-center" });
    setTimeout(() => navigate("/dashboard"), 2000);
  };

  const handleForgotPassword = () => {
    if (!email) {
      toast.error("Please enter your email to reset password!", { position: "top-center" });
      return;
    }
    console.log("Password reset for:", email);
    toast.success("Password reset link sent (dummy)! 📧", { position: "top-center" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-500 to-yellow-500 p-6">
      <ToastContainer />
      <div className="flex flex-col md:flex-row max-w-5xl w-full shadow-2xl rounded-2xl overflow-hidden bg-white">
        <div className="w-full md:w-1/2 p-6 bg-blue-50 hidden md:flex">
          <img src={authImage} alt="Decorative Illustration" className="w-full h-auto object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold text-yellow-800 text-center mb-6 font-serif">Login to Split-It</h2>
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center w-full bg-white border border-gray-300 py-3 px-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 mb-4"
          >
            <FcGoogle size={24} className="mr-3" /> Sign in with Google
          </button>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <div
                className="absolute right-3 top-3 cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
          <div className="text-center mt-4">
            <button onClick={handleForgotPassword} className="text-blue-600 font-semibold hover:underline">
              Forgot Password?
            </button>
          </div>
          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 font-semibold hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
