import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Input from "./Input";
import ModalContainer from "./ModalContainer";

export default function SignInView({
  fields,
  handleChange,
  handleSubmit,
  responseMessage,
}) {
  return (
    <div className='w-full h-full flex items-center bg-gray-900'>
      <ModalContainer>
        <h1 className='text-lg text-center my-2 font-bold '>Sign In </h1>
        <form className='mx-auto text-center p-5 w-30 flex flex-col items-center'>
          <Input
            name='username'
            value={fields.username}
            placeholder='Username'
            type='text'
            onChange={handleChange}
          />
          <Input
            name='password'
            value={fields.password}
            placeholder='Password'
            type='password'
            onChange={handleChange}
          />
          <Button onClick={handleSubmit}>{responseMessage || "Sign in"}</Button>
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
      </ModalContainer>
    </div>
  );
}
