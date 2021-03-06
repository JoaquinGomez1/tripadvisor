import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import ModalContainer from "./ModalContainer";

export default function SignUpView({ handleChange, fields, handleSubmit }) {
  return (
    <div className='w-full h-full flex items-center bg-gray-900'>
      <ModalContainer>
        <h1 className='text-lg text-center my-2 font-bold'>Sign Up</h1>
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
            name='email'
            value={fields.email}
            placeholder='Email'
            type='email'
            onChange={handleChange}
            className='w-full bg-gray-300 p-2 rounded-md mb-4 placeholder-gray-600'
          />

          <input
            name='password'
            value={fields.password}
            placeholder='Password'
            type='password'
            onChange={handleChange}
            className='w-full bg-gray-300 p-2 rounded-md mb-4 placeholder-gray-600'
          />

          <Button
            className='w-full text-white py-2 px-4 hover:bg-yellow-600 bg-yellow-500 rounded-md text-lg font-bold'
            onClick={handleSubmit}>
            Sign Up
          </Button>

          <div className='flex w-full px-8 my-3 justify-between items-center '>
            <Link to='signin'>
              <p className='text-indigo-600 cursor-pointer text-left divide-x text-sm'>
                Already have an account?<br></br> Sign In
              </p>
            </Link>
            <p className='text-indigo-600 cursor-pointer divide-x text-sm'>
              Forgot password
            </p>
          </div>
        </form>
      </ModalContainer>
    </div>
  );
}
