import React, { useRef } from "react";

const Login = ({ HandleLoginMethod }) => {
  const emailElement = useRef();
  const passwordElement = useRef();

  const submitHandler = (event) => {
    event.preventDefault(); // Ise pehle likhna better practice hai
    const email = emailElement.current.value;
    const password = passwordElement.current.value;
    emailElement.current.value = "";
    passwordElement.current.value = "";
    HandleLoginMethod(email, password);
  };

  return (
    // Background color ko thoda deep dark rakha hai
    <div className="flex h-screen w-screen items-center justify-center bg-[#111111] p-5">
      {/* Glassmorphism Card: Mobile par full width aur laptop par fixed width */}
      <div className="w-full max-w-md border-2 border-emerald-600/30 p-8 md:p-16 rounded-2xl bg-[#1c1c1c]/50 backdrop-blur-sm shadow-2xl">
        <form onSubmit={submitHandler} className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
            Login
          </h1>

          <div className="space-y-4">
            <input
              ref={emailElement}
              required
              type="email"
              placeholder="Enter Your Email"
              className="w-full text-white border-2 border-emerald-600 rounded-full py-3 px-6 text-lg outline-none bg-transparent placeholder:text-gray-500 focus:border-emerald-400 focus:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all"
            />

            <input
              ref={passwordElement}
              required
              type="password"
              placeholder="Enter Password"
              className="w-full text-white border-2 border-emerald-600 rounded-full py-3 px-6 text-lg outline-none bg-transparent placeholder:text-gray-500 focus:border-emerald-400 focus:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all"
            />
          </div>

          <button className="mt-8 text-white font-semibold bg-emerald-600 hover:bg-emerald-700 active:scale-95 rounded-full py-3 px-5 text-xl transition-all shadow-lg shadow-emerald-900/20">
            Log in
          </button>

            <p className="text-gray-500 text-center mt-6 text-sm border-2 border-emerald-600 p-2 rounded-3xl">
              Demo Credentials for testing : <br />
              Admin: admin@example.com | pass: 123 <br />
              Employee: employee2@example.com | pass: 123
            </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
