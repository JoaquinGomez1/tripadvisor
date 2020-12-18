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
    Object.keys(currentUser).length === 0 && history.push("/signin");
  }, [currentUser, history]);

  const handleLogout = () => {
    fetch("/user/logout");
    setCurrentUser({});
  };

  console.log(currentUser?.username);

  return (
    <FadeInOut className='w-screen h-screen pt-40'>
      <div className='rounded-md text-center bg-yellow-200 shadow-md mx-auto p-3 max-w-lg'>
        <div className='mx-auto'>
          <div className='flex'>
            <h1 className='text-center'>Hello</h1>
            <EditableField text={currentUser?.username} />
          </div>

          <button
            className='p-2 bg-gray-200 hover:bg-gray-100'
            onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </FadeInOut>
  );
}
