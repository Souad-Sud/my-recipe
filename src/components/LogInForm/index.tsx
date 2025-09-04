"use client";
import { UserArray } from "@/data/users";
import { useState } from "react";
import { useUserContext } from "@/utils/contexts";
import { UserContextType } from "@/utils/types";

const LogInForm = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [userNotFount, setUserNotFound] = useState<boolean>(true);
  const { user, setUser } = useUserContext() as UserContextType;

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const loggeInUser = UserArray.filter((user) => user.name === userInput);
    console.log(loggeInUser);
    if (!loggeInUser[0]) setUserNotFound(false);
    else setUserNotFound(true);
    setUser(loggeInUser[0]);
  };

  const handleChange = (e: { target: { value: any } }) => {
    setUserInput(e.target.value);
    console.log(userInput);
  };
  return (
    <form className="flex flex-column max-w-2xl rounded-2xl border-gray-900 border-2 m-auto ">
      <label htmlFor="username">Enter your user name</label>
      <input
        onChange={handleChange}
        id="username"
        type="text"
        placeholder="Username"
        value={userInput}
      />
      <label htmlFor="password">Enter your password</label>
      <input id="password" placeholder="password" />
      <button onClick={handleClick}>Log In</button>
    </form>
    // {!userNotFount && }
  );
};

export default LogInForm;
