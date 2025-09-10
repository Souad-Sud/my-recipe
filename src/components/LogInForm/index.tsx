"use client";
import { useState } from "react";
import { useUserContext } from "@/utils/contexts";

import FormSideContent from "./FormSideContent";
import "./logInForm.scss";
import { useRouter } from "next/navigation"; // for redirect
import { UserArray } from "@/data/users";

const LogInForm = () => {
  const { setUser } = useUserContext();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const foundUser = UserArray.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      setError("");
      router.push("/profile"); // Redirect to home page
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="logInForm">
      <div className="logInForm__flex">
        <FormSideContent />
      </div>
      <form className="logInForm__form" onSubmit={handleSubmit}>
        <h1>
          Welcome! <br /> Sign in to continue
        </h1>

        <div className="logInForm__emailContainer">
          <label htmlFor="email" className="logInForm__label">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="logInForm__input"
              required
            />
          </label>
        </div>

        <div className="logInForm__passwordContainer">
          <label htmlFor="password" className="logInForm__label">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="logInForm__input"
              required
            />
          </label>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" className="logInForm__submtBtn">
          Log in
        </button>

        <label className="logInForm__checkboxLabel">
          <input type="checkbox" className="logInForm__checkbox" required />I
          agree to the{" "}
          <a href="/terms" target="_blank">
            Terms and Conditions
          </a>
        </label>
      </form>
    </div>
  );
};

export default LogInForm;
