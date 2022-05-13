import React, { useState } from 'react';
import { signIn, signUp, getUser } from './services/fetch-utils';

export default function AuthPage({ setEmail, setToken }) {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();

    await signIn(signInEmail, signInPassword);

    const {
      access_token,
      user: { email },
    } = getUser();
    setEmail(email);
    setToken(access_token);
  }

  async function handleSignUp(e) {
    e.preventDefault();

    await signUp(signUpEmail, signUpPassword);

    const {
      access_token,
      user: { email },
    } = getUser();
    setEmail(email);
    setToken(access_token);
  }

  return (
    <div className="auth">
      <h1>REACT Album Inventory</h1>
      <form onSubmit={handleSignUp}>
        <h3>Sign Up</h3>
        <label>
          email
          <input onChange={(e) => setSignUpEmail(e.target.value)} />
        </label>
        <label>
          password
          <input onChange={(e) => setSignUpPassword(e.target.value)} />
        </label>
        <button>Sign Up</button>
      </form>
      <form onSubmit={handleSignIn}>
        <h3>Sign In</h3>
        <label>
          email
          <input onChange={(e) => setSignInEmail(e.target.value)} />
        </label>
        <label>
          password
          <input onChange={(e) => setSignInPassword(e.target.value)} />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}
