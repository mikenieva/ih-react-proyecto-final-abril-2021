import Login  from './components/auth/Login'
import NuevaCuenta from './components/auth/NuevaCuenta'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'




import './App.css';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
