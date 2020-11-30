import React from "react";
import AuthForm from "./AuthForm";
import SignInView from "../Ui/SignInView";

const initialState = { username: "", password: "" };

export default function SignIn() {
  return (
    <AuthForm
      url='/user/login'
      initialState={initialState}
      component={SignInView}
    />
  );
}
