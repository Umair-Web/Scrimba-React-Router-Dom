import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { loginUser } from '../api';
const Login = () => {
  // State variables for the inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn =  (e) => {
    e.preventDefault()
    const LoginFormData={email,password}
    const getLogindata=async(LoginFormData)=>{
      const data =await loginUser(LoginFormData)
      console.log("Login data from database==>",data)
    }

    getLogindata(LoginFormData)
    
    


  };

  const [searchParams]=useSearchParams()
  const message=searchParams.get("message")

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#FFF7F0] px-5 ">
      {message?(<h2 className="text-center font-bold text-3xl text-slate-800">{message}</h2>):<p className="text-center font-bold text-3xl text-slate-800">Sign in to your account</p>
      }
       
      <form onSubmit={handleSignIn} className="flex flex-col w-full max-w-md mt-6 space-y-4">
        <input 
          type="text" 
          placeholder="Email address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <button 
          onClick={handleSignIn}
          className="w-full py-2 mt-4 font-bold text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
        >
          Sign in
        </button>
      </form>

      <p className="mt-4 text-center text-gray-600">
        Don't have an account? 
        <a href="/register" className="ml-1 text-orange-500 hover:underline">
          Create one now
        </a>
      </p>
    </div>
  );
};

export default Login;
