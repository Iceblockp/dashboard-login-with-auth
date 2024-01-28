import React, { useEffect, useState } from "react";
import {useNavigate,Link} from "react-router-dom"
import { getUserData } from "../service/user.service";

const LoginPage = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const nav = useNavigate();
    const item = {
      email,
      password
    }

    const loginHandle = async (event) => {
        event.preventDefault();
        const data = await getUserData("user");

        const finder = data.find(i => i.email === email);

        if(!finder) {
          throw new Error("User Not Found");
        }
        const comparePassword = finder.password === password;

        if(!comparePassword){
          throw new Error("password Not Correct");

        }

        nav("/dashboard")
        localStorage.setItem("auth",JSON.stringify(item));
        

    }

    useEffect(() => {
      const data = localStorage.getItem("auth");
      if(data) {
        nav("/dashboard")
      }
    },[])



  return (
    <div className=" flex items-center justify-center h-screen ">
      <form onSubmit={loginHandle} className="max-w-sm mx-auto border border-gray-400 p-10 bg-sky-300 ">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your email
          </label>
          <input
          value={email} 
          onChange={ e => setEmail(e.target.value)}
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your password
          </label>
          <input
          value={password}
          onChange={e => setPassword(e.target.value)}
            type="password"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Login
        </button>
        <div>
          <p>don't have account?</p>
          <Link to='/'><p className=" text-blue-700">Register here</p></Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
