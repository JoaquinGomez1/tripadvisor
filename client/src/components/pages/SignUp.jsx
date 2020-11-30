import React from "react";
import AuthForm from "./AuthForm";
import SignUpView from "../Ui/SignUpView";

const initialState = { username: "", email: "", password: "" };
const URL = "/user/register";

export default function SignUp() {
  return (
    <AuthForm initialState={initialState} url={URL} component={SignUpView} />
  );
}
