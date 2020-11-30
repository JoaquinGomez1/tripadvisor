import React, { useContext } from "react";
import { UserProvider } from "../context/UserContext";
import EditableField from "../Ui/EditableField";
import { useHistory } from "react-router-dom";

export default function User() {
  const { currentUser, setCurrentUser } = useContext(UserProvider);
  const history = useHistory();
  if (!currentUser || Object.keys(currentUser).length === 0)
    history.push("/signin"); // Redirect if not logged in

  const handleLogout = () => {
    fetch("/user/logout");
    setCurrentUser({});
  };

  return (
    <div className='w-screen h-screen pt-20'>
      <div className='rounded-md bg-yellow-200 shadow-md mx-auto p-3 max-w-lg'>
        <div className='mx-auto'>
          <div className='flex'>
            <h1 className='text-center'>Hello</h1>
            <EditableField
              text={currentUser.username}
              setter={setCurrentUser}
              state={currentUser}
            />
          </div>

          <button
            className='p-2 bg-gray-200 hover:bg-gray-100'
            onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
