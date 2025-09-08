"use client";
import FormSideContent from "./FormSideContent";
import "./logInForm.scss";
const LogInForm = () => {
  return (
    <div className="logInForm">
      <div className="logInForm__flex"> 
        <FormSideContent />
      </div>
      <form className="logInForm__form">
        <h1>
          Welcome! <br /> Sign in to continue
        </h1>
        <div className="logInForm__emailContainer">
          <label htmlFor="email" className="logInForm__label">
            <input
              id="email"
              type="email"
              //   value={email}
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
              //   value={password}
              placeholder="••••••••"
              className="logInForm__input"
              required
            />
          </label>
        </div>

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
