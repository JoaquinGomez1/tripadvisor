import React, { useReducer } from "react";
import SignInReducer from "../reducers/SignIn";
import ACTIONS from "../reducers/ACTIONS";
import { Link } from "react-router-dom";

const initialState = { username: "", password: "" };

export default function SignIn() {
  const [fields, dispatch] = useReducer(SignInReducer, initialState);

  const handleChange = (e) =>
    dispatch({
      type: ACTIONS.HANDLE_CHANGE,
      payload: { value: e.target.value, field: e.target.name },
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = "/user/login";
    const HEADERS = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: fields }),
    };
    const req = await fetch(URL, HEADERS);
    const res = await req.json();
    console.log(res);
  };

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
            className='w-full text-white py-2 px-4 hover:bg-red-500 bg-red-600 rounded-md text-lg font-bold'
            onClick={handleSubmit}>
            Sign In
          </button>
          <div className='flex w-full px-8 my-3 justify-between text-left items-center'>
            <Link to='/signup'>
              <p className='text-indigo-600 cursor-pointer'>
                Need an account? <br />
                Sign Up
              </p>
            </Link>
            <p className='text-indigo-600 cursor-pointer'>Forgot password</p>
          </div>
        </form>
      </div>
    </div>
  );
}
