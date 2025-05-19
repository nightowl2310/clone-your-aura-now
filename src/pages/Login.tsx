// LoginPage.tsx
import React from "react";
import { API_BASE_URL } from "../lib/config";
const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212] text-white px-4">
      <div className="bg-[#2d2d2d] p-8 rounded-lg w-full max-w-md shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="xyz@gmail.com"
              className="w-full px-4 py-2 rounded-md bg-[#e6f0ff] text-black focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              placeholder="•••••"
              className="w-full px-4 py-2 rounded-md bg-[#e6f0ff] text-black focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-blue-400 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3366ff] hover:bg-[#264fd8] text-white py-2 rounded-md font-semibold"
          >
            Sign In
          </button>
        </form>

        <div className="my-6 flex items-center justify-between text-gray-400 text-sm">
          <hr className="w-1/3 border-gray-600" />
          <span className="px-2">Or continue with</span>
          <hr className="w-1/3 border-gray-600" />
        </div>

        <button className="w-full flex items-center justify-center gap-2 bg-white text-black py-2 rounded-md mb-3 font-medium hover:bg-gray-100">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Login with Google
        </button>
        <a
          href={
            "https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=566718126051181&redirect_uri=" +
            API_BASE_URL +
            "/api/oauth/instagram/callback&response_type=code&scope=instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments%2Cinstagram_business_content_publish%2Cinstagram_business_manage_insights"
          }
        >
          <button className="w-full flex items-center justify-center gap-2 py-2 rounded-md font-medium bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
              className="w-5 h-5"
            />
            Continue with Instagram
          </button>
        </a>

        <p className="text-center text-sm mt-6 text-gray-300">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
