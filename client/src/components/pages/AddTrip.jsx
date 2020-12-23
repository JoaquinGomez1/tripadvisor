import React, { useState } from "react";
import Input from "../Ui/Input";
import { FadeInOut } from "../Ui/FramerMotion";
import Button from "../Ui/Button";

export default function AddTrip() {
  const [data, setData] = useState({});
  const [responseMessage, setResponseMessage] = useState("");

  const changeData = ({ target }) => {
    const { value, name } = target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("Sending request");
    const URL = "/trips/add";
    const HEADERS = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    };
    const req = await fetch(URL, HEADERS);
    const res = await req.json();
    setResponseMessage(res.message);
  };

  return (
    <FadeInOut className='w-full h-full pt-32'>
      <div className='mx-auto bg-dark-ligth max-w-xl py-8 rounded'>
        <h2 className='text-light text-3x1 text-center'>Add a trip</h2>
        <form onChange={changeData} className='border-ligth mx-auto w-1/2'>
          <InputField name='name' text='Trip Name' />
          <InputField name='location' text='Trip Location' />
          <InputField name='Cost' text='Trip Cost' />
          <InputField name='img' text='Trip Image' />
          <Button onClick={handleSubmit}>
            {" "}
            {responseMessage ? responseMessage : "Add trip"}
          </Button>
        </form>
      </div>
    </FadeInOut>
  );
}

function InputField({ name, text }) {
  return (
    <div className='input-field my-2'>
      <label className='text-light' htmlFor={name}>
        {text}:{" "}
      </label>
      <Input name={name} id={name} />
    </div>
  );
}
