import { useState, useEffect } from 'react';
import { getUser, logout } from './services/fetch-utils';
import { BrowserRouter as Router, Switch, NavLink, Route, Redirect } from 'react-router-dom';
import AuthPage from './AuthPage';
import UpdatePage from './UpdatePage';
import ListPage from './ListPage';
import CreatePage from './CreatePage';
import './App.css';

export default function App() {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const user = getUser();

    if (user) {
      setToken(user.access_token);
      setEmail(user.user.email);
    }
  }, []);

  async function handleLogout() {
    await logout();
    setEmail('');
    setToken('');
  }

  return (
    <Router>
      <div className="App">
        <header className="header">
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={(isActive) => ('nav-link' + !isActive ? ' unselected ' : '')}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/create"
                  className={(isActive) => ('nav-link' + !isActive ? ' unselected ' : '')}
                >
                  Create
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/albums"
                  className={(isActive) => ('nav-link' + !isActive ? ' unselected ' : '')}
                >
                  List
                </NavLink>
              </li>
              <li>
                <button onClick={handleLogout}>Log0ut</button>
              </li>
            </ul>
          </nav>
        </header>
        <main className="main"></main>
      </div>
    </Router>
  );
}
