import Login  from './components/auth/Login'
import NuevaCuenta from './components/auth/NuevaCuenta'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import AuthState from "./context/autenticacion/AuthState"

import './App.css';

function App() {
  return (
    <>
    <AuthState>
          <Router>
            <Switch>
              <Route 
                path="/"
                component={Login}
                exact
              />
              <Route 
                path="/nueva-cuenta"
                component={NuevaCuenta}
                exact
              />
            </Switch>
          </Router>  
      </AuthState>
    </>
  );
}

export default App;
