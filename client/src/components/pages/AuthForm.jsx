import React, { useReducer, useState } from "react";
import SignInReducer from "../reducers/SignIn";
import ACTIONS from "../reducers/ACTIONS";
import { useContext } from "react";
import { UserProvider } from "../context/UserContext";
import { useHistory } from "react-router-dom";

import { FadeInOut } from "../Ui/FramerMotion";

export default function AuthForm({ component: Component, url, initialState }) {
  const [fields, dispatch] = useReducer(SignInReducer, initialState);
  const [responseMessage, setResponseMessage] = useState();
  const { currentUser, setCurrentUser } = useContext(UserProvider);
  const history = useHistory();
  const userObjectIsNotEmpty = Object.keys(currentUser).length >= 1;

  if (userObjectIsNotEmpty) history.push("/user");

  const handleChange = (e) =>
    dispatch({
      type: ACTIONS.HANDLE_CHANGE,
      payload: { value: e.target.value, field: e.target.name },
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage(".......");
    const URL = url;
    const HEADERS = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: fields }),
    };
    const req = await fetch(URL, HEADERS);
    const res = await req.json();
    setResponseMessage(res.message);

    if (req.status === 200) setCurrentUser(fields);
  };

  return (
    <FadeInOut className='w-screen h-screen'>
      <Component
        responseMessage={responseMessage}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        fields={fields}
      />
    </FadeInOut>
  );
}
