import React from "react";
import { Link } from "react-router-dom";

export default function SignInView({
  fields,
  handleChange,
  handleSubmit,
  responseMessage,
}) {
  return (
    <div className='w-full h-full flex items-center'>
      <div className='mx-auto w-full bg-gray-100 max-w-lg shadow-lg'>
        <h1 className='text-lg text-center my-2 font-bold '>Sign In </h1>
        <form className='mx-auto text-center p-5 w-30 flex flex-col items-center'>
          <input
            name='username'
            value={fields.username}
            placeholder='Username'
            type='text'
            onChange={handleChange}
            className='w-full bg-gray-300 p-2 my-4 rounded-md placeholder-gray-600'
          />

          <input
            name='password'
            value={fields.password}
            placeholder='Password'
            type='password'
            onChange={handleChange}
            className='w-full bg-gray-300 p-2 rounded-md mb-4 placeholder-gray-600'
          />

          <button
            className='w-full text-white py-2 px-4 hover:bg-yellow-600 bg-yellow-500 rounded-md text-lg font-bold'
            onClick={handleSubmit}>
            {responseMessage || "Sign In"}
          </button>
          <div className='flex w-full px-8 my-3 justify-between text-left items-center'>
            <Link to='/signup'>
              <p className='text-indigo-600 cursor-pointer text-sm'>
                Need an account? <br />
                Sign Up
              </p>
            </Link>
            <p className='text-indigo-600 cursor-pointer text-sm'>
              Forgot password
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
