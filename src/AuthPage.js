import React, { useState } from 'react';
import { signIn, signUp, getUser } from './services/fetch-utils';

export default function AuthPage({ setEMail, setToken }) {
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
    setEMail(email);
    setToken(access_token);
  }

  async function handleSignUp(e) {
    e.preventDefault();

    await signUp(signUpEmail, signUpPassword);

    const {
      access_token,
      user: { email },
    } = getUser();
    setEMail(email);
    setToken(access_token);
  }

  return <div>AuthPage</div>;
}
