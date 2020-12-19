import React, { useContext, useEffect } from "react";
import { UserProvider } from "../context/UserContext";
import EditableField from "../Ui/EditableField";
import { useHistory } from "react-router-dom";
import { FadeInOut } from "../Ui/FramerMotion";

export default function User() {
  const { currentUser, setCurrentUser } = useContext(UserProvider);
  const history = useHistory();

  // Redirect if not logged in
  useEffect(() => {
    currentUser &&
      Object.keys(currentUser).length === 0 &&
      history.push("/signin");
  }, [currentUser, history]);

  const handleLogout = () => {
    fetch("/user/logout");
    setCurrentUser({});
  };

  const handleChangeUsername = async (param) => {
    const HEADERS = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: { username: param } }),
    };
    const req = await fetch("/user/update", HEADERS);
    const res = await req.json();
    if (req.status === 200) setCurrentUser({ ...res, username: param });
  };

  return (
    <FadeInOut className='w-screen h-screen pt-40'>
      <div className='rounded-md text-center bg-light shadow-md mx-auto p-3 max-w-lg'>
        <div className='mx-auto'>
          <div className='flex'>
            <h1 className='text-center'>Hello</h1>
            <EditableField
              onSubmitEvent={handleChangeUsername}
              text={currentUser?.username}
            />
          </div>

          <button
            className='bg-dark p-2 text-white rounded my-2 '
            onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </FadeInOut>
  );
}
