import React, { useState } from 'react'
import { API_URL } from '../lib/constant';
import { Link } from 'react-router-dom';

const RegisterPage = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = JSON.stringify({
            email: email,
            password:password,
        })
        const myHeader = new Headers();
        myHeader.append("Content-Type","application/json");

        const res = await fetch(API_URL+"/user",{
            method: "POST",
            headers: myHeader,
            body: data,
        });

        const json = await res.json();
       
    }

  return (
    

<div className=' flex items-center justify-center h-screen '>
<form onSubmit={handleSubmit} className="max-w-sm mx-auto ">
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
    <input value={email} onChange={e => setEmail(e.target.value)} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
    <input value={password} onChange={e => setPassword(e.target.value)} type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
  </div>
  <div className="mb-5">
    <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 ">Repeat password</label>
    <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
  </div>
  <div className="flex items-start mb-5">
    
    <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 ">Already have account <div  className="text-blue-600 hover:underline dark:text-blue-500"><Link to="/login">Login here</Link></div></label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Register new account</button>
</form>
</div>


  )
}

export default RegisterPage