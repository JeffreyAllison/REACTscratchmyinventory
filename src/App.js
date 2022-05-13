import { useState, useEffect } from 'react';
import { getUser, logout } from './services/fetch-utils';
import { BrowserRouter as Router, Switch, NavLink, Route, Redirect } from 'react-router-dom';
import AuthPage from './AuthPage';
import UpdatePage from './UpdatePage';
import ListPage from './ListPage';
import CreatePage from './CreatePage';
import './App.css';

export default function App() {
  // eslint-disable-next-line no-unused-vars
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
            <div className="links">
              <p>
                <NavLink
                  to="/"
                  className={(isActive) => ('nav-link' + !isActive ? ' unselected ' : '')}
                >
                  Home
                </NavLink>
              </p>
              <p>
                <NavLink
                  to="/create"
                  className={(isActive) => ('nav-link' + !isActive ? ' unselected ' : '')}
                >
                  Create Album Inventory
                </NavLink>
              </p>
              <p>
                <NavLink
                  to="/albums"
                  className={(isActive) => ('nav-link' + !isActive ? ' unselected ' : '')}
                >
                  View Album List
                </NavLink>
              </p>
              <p>
                <button onClick={handleLogout}>Log0ut</button>
              </p>
            </div>
          </nav>
        </header>
        <main className="main">
          <Switch>
            <Route exact path="/">
              {token ? (
                <Redirect to="/albums" />
              ) : (
                <AuthPage setEmail={setEmail} setToken={setToken} />
              )}
            </Route>
            <Route exact path="/albums">
              <div className="heading">
                <i>
                  <strong>Click an Album to update</strong>
                </i>
              </div>
              {token ? <ListPage /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/albums/:id">
              {token ? <UpdatePage /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/create">
              {token ? <CreatePage /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
